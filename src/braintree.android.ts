import * as app from 'tns-core-modules/application';
import { BraintreeBase, BraintreeAddress, checkRequirements } from './braintree.common';
import { BrainTreeOptions, IPayPalAccountNonce, IPaymentMethodNonce } from '.';

/**
 * Convert JS address to BTAdress 
 * @param a JS address to be converted
 */
function getAddressObj(a: BraintreeAddress): com.braintreepayments.api.models.PostalAddress {
    let address = new com.braintreepayments.api.models.PostalAddress();
    address.phoneNumber(a.phone);
    address.streetAddress(a.streetAddress);
    address.extendedAddress(a.extendedAddress);
    address.locality(a.locality);
    address.region(a.region);
    address.postalCode(a.postalCode);
    address.countryCodeAlpha2(a.countryCode);

    return address;
}

/**
 * Convert JS address to BTAddress for 3DSecure requests
 * @param a JS address to be converted
 */
function getSecureAddressObj(a: BraintreeAddress): com.braintreepayments.api.models.ThreeDSecurePostalAddress {
    let address = new com.braintreepayments.api.models.ThreeDSecurePostalAddress();
    address.givenName(a.firstname)
    address.surname(a.lastname);
    address.phoneNumber(a.phone);
    address.streetAddress(a.streetAddress);
    address.extendedAddress(a.extendedAddress);
    address.locality(a.locality);
    address.region(a.region);
    address.postalCode(a.postalCode);
    address.countryCodeAlpha2(a.countryCode);

    return address;
}

/**
 * Convert BTAddress to JS address
 * @param a BTAddress to be converted
 */
function convertAddress(a: com.braintreepayments.api.models.PostalAddress): BraintreeAddress {
    let address = new BraintreeAddress();
    address.countryCode = a.getCountryCodeAlpha2();
    address.phone = a.getPhoneNumber();
    address.streetAddress = a.getStreetAddress();
    address.region = a.getRegion();
    address.extendedAddress = a.getExtendedAddress();
    address.locality = a.getLocality();
    address.postalCode = a.getPostalCode();
    address.receipientName = a.getRecipientName();

    return address;
}


/**
 * local class to get deviceData - differs from ios method
 */
class DataCollector {

    getDeviceData(fragment: com.braintreepayments.api.BraintreeFragment, cb: (data) => void) {
        com.braintreepayments.api.DataCollector.collectDeviceData(fragment, new com.braintreepayments.api.interfaces.BraintreeResponseListener<string>({
            onResponse(deviceData) {
                cb(deviceData);
            }
        }))
    }
}


export function setupBraintreeAppDeligate(urlScheme: any) {
    // to avoid error
}

export function overrideFunction(classRef, methodName, nextImplementation) {

}

/**
 * Class to unify the returned nonces across all paymentmehtods
 * native object contains the actual nonce object
 */
export class PaymentMethodNonce implements IPaymentMethodNonce {

    public description: string;
    public nonce: string;

    public _native: com.braintreepayments.api.models.PaymentMethodNonce;

    constructor(native: com.braintreepayments.api.models.PaymentMethodNonce) {
        this._native = native;
        this.description = native.getDescription();
        this.nonce = native.getNonce();
    }

}

/**
 * Listener structure
 */
export interface BraintreeListenerResponse {
    nonce?: any;
    cancelled?: number;
    error?: any;
    data?: string;
}


/**
 * Handling payments. insert new payment logic in this class.
 */
export class BraintreePaymentHandler {

    private nonceListener: com.braintreepayments.api.interfaces.PaymentMethodNonceCreatedListener;
    private errorListener: com.braintreepayments.api.interfaces.BraintreeErrorListener;
    private cancelListener: com.braintreepayments.api.interfaces.BraintreeCancelListener;

    /**
     * Listener for 3DSecure verification
     */
    private lookupListener: com.braintreepayments.api.interfaces.ThreeDSecureLookupListener;

    /**
     * indicates 3DSecure verification completion
     */
    private perfomedVerification: boolean;

    constructor(
        private fragment: com.braintreepayments.api.BraintreeFragment,
        private cb: (response: BraintreeListenerResponse) => void,
        private request?: any
    ) {
        let that = this;

        //setup listeners
        this.nonceListener = new com.braintreepayments.api.interfaces.PaymentMethodNonceCreatedListener({
            onPaymentMethodNonceCreated(nonce) {
                that.removeListeners();
                that.cb({ nonce: new PaymentMethodNonce(nonce) })
            }
        })

        this.errorListener = new com.braintreepayments.api.interfaces.BraintreeErrorListener({
            onError(error) {
                that.removeListeners();
                that.cb({ error: error });
            }
        })

        this.cancelListener = new com.braintreepayments.api.interfaces.BraintreeCancelListener({
            onCancel(cancelCode: number) {
                that.removeListeners();
                that.cb({ cancelled: cancelCode });
            }
        })

        this.lookupListener = new com.braintreepayments.api.interfaces.ThreeDSecureLookupListener({
            onLookupComplete(request: com.braintreepayments.api.models.ThreeDSecureRequest, lookup: com.braintreepayments.api.models.ThreeDSecureLookup): void {
                com.braintreepayments.api.ThreeDSecure.continuePerformVerification(that.fragment, request, lookup);
            }
        })


    }

    /**
     * One time Paypal payments
     */
    startPayPalExpressCheckout(): void {
        this.addListeners();
        com.braintreepayments.api.PayPal.requestOneTimePayment(this.fragment, this.request);
    }

    /**
     * Vault a Paypal account for future, non-customer-presence payments
     */
    startVault(): void {
        this.addListeners();
        com.braintreepayments.api.PayPal.requestBillingAgreement(this.fragment, this.request);
    }

    /**
     * Local payment types
     * SEPA not supported anymore?
     */
    startLocalPayment(): void {
        this.addListeners();
        let that = this;
        com.braintreepayments.api.LocalPayment.startPayment(this.fragment, this.request, new com.braintreepayments.api.interfaces.BraintreeResponseListener<com.braintreepayments.api.models.LocalPaymentRequest>({
            onResponse(request) {
                that.fragment.addListener(new com.braintreepayments.api.interfaces.PaymentMethodNonceCreatedListener({
                    onPaymentMethodNonceCreated(nonce) {
                        that.cb({ nonce: new PaymentMethodNonce(nonce) })
                    }
                }))
                com.braintreepayments.api.LocalPayment.approvePayment(that.fragment, request)
            }
        }))
    }

    /**
     * Google Pay
     * not working - issue must be with nativescript itself
     */
    startGooglePayPayment(): void {
        this.addListeners();
        let that = this;
        com.braintreepayments.api.GooglePayment.isReadyToPay(this.fragment, new com.braintreepayments.api.interfaces.BraintreeResponseListener({
            onResponse(res) {
                if (res) {
                    com.braintreepayments.api.GooglePayment.requestPayment(that.fragment, that.request);
                }
                else {
                    that.cb({ error: { code: 1001, msg: "google_pay.not_ready" } });
                }
            }
        }))
    }

    /**
     * Credit card payment with 3DSecure
     * @param options braintree options for card details
     */
    startCreditCardPayment(options: BrainTreeOptions) {
        let cardBuilder = new com.braintreepayments.api.models.CardBuilder();
        cardBuilder.cardNumber(options.cardNumber);
        cardBuilder.cvv(options.cvv);
        cardBuilder.expirationDate(options.expiringMonth + "/" + options.expiringYear);
        this.addListeners();
        this.fragment.addListener(this.lookupListener);

        let that = this;

        this.nonceListener = new com.braintreepayments.api.interfaces.PaymentMethodNonceCreatedListener({
            onPaymentMethodNonceCreated(nonce) {
                if (that.perfomedVerification) {
                    that.cb({ nonce: new PaymentMethodNonce(nonce) })

                    // Payment completed - clean up
                    that.fragment.removeListener(that.lookupListener);
                    that.removeListeners();
                }
                else {
                    // initiate 3DSecure process
                    that.perfomedVerification = true;
                    let threeDRequest = new com.braintreepayments.api.models.ThreeDSecureRequest();
                    threeDRequest.amount(options.amount);
                    threeDRequest.nonce(nonce.getNonce());
                    threeDRequest.versionRequested(com.braintreepayments.api.models.ThreeDSecureRequest.VERSION_2);

                    // providing additional information help verification process
                    if (options.info) {
                        threeDRequest.email(options.info.email);
                    }

                    if (options.billingAddress) {
                        threeDRequest.billingAddress(getSecureAddressObj(options.billingAddress));
                    }
                    com.braintreepayments.api.ThreeDSecure.performVerification(that.fragment, threeDRequest);

                }
            }
        })

        //convert card to secure tokenized card payment request
        com.braintreepayments.api.Card.tokenize(this.fragment, cardBuilder);
    }

    /**
     * remove common listener. remove specific individually
     */
    private removeListeners() {
        this.fragment.removeListener(this.nonceListener)
        this.fragment.removeListener(this.errorListener)
        this.fragment.removeListener(this.cancelListener)
    }

    /**
     * add common listeners to fragment
     */
    private addListeners() {
        this.fragment.addListener(this.nonceListener)
        this.fragment.addListener(this.errorListener)
        this.fragment.addListener(this.cancelListener)
    }

}


export class Braintree extends BraintreeBase {

    constructor(token: string) {
        super(token);
    }


    /**
     * One time PayPal payment
     * @param options Braintree options
     */
    public startPaypalCheckoutPayment(options: BrainTreeOptions): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                let activity = app.android.foregroundActivity || app.android.startActivity;
                let fragment = com.braintreepayments.api.BraintreeFragment.newInstance(activity, this.token);

                checkRequirements(options, { amount: "", currencyCode: "" })


                let request = new com.braintreepayments.api.models.PayPalRequest(options.amount);
                request.currencyCode(options.currencyCode);

                let paypal = new BraintreePaymentHandler(fragment, (response: { nonce?: IPayPalAccountNonce, cancelled?: number, error?: any }) => {
                    if (response.error) {
                        reject(response.error);
                    }
                    else if (response.cancelled) {
                        reject(response.cancelled);
                    }
                    else {
                        resolve(response.nonce)
                    }
                }, request);
                paypal.startPayPalExpressCheckout()
            } catch (error) {
                reject(error)
            }

        })

    }

    /**
     * Local one time payments
     * @param options Braintree options
     */
    public startLocalPayment(options: BrainTreeOptions): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                let activity = app.android.foregroundActivity || app.android.startActivity;
                let fragment = com.braintreepayments.api.BraintreeFragment.newInstance(activity, this.token);

                let request = new com.braintreepayments.api.models.LocalPaymentRequest();

                await checkRequirements(
                    options,
                    {
                        amount: "",
                        currencyCode: "",
                        localPaymentType: "",
                    }
                )

                if (options.shippingAddressRequired != undefined) {
                    request.shippingAddressRequired(options.shippingAddressRequired);
                }

                if (options.billingAddress) {
                    request.address(getAddressObj(options.billingAddress));
                }

                if (options.info) {
                    request.givenName(options.info.firstName);
                    request.surname(options.info.lastName);
                    request.email(options.info.email);
                    request.phone(options.info.phone);

                }

                let local = new BraintreePaymentHandler(fragment, (response: { nonce?: IPaymentMethodNonce, cancelled?: number, error?: any }) => {
                    if (response.error) {
                        reject(response.error);
                    }
                    else if (response.cancelled) {
                        reject(response.cancelled);
                    }
                    else {
                        resolve(response.nonce)
                    }
                }, request);
                local.startLocalPayment();

            } catch (error) {
                reject(error)
            }
        })

    }

    /**
     * Request a billing agreement to vault a paypal account for future payments
     * @param options Braintree options
     */
    public startPaypalVaultPayment(options: BrainTreeOptions): Promise<IPayPalAccountNonce> {
        return new Promise(async (resolve, reject) => {
            try {
                let activity = app.android.foregroundActivity || app.android.startActivity;
                let fragment = com.braintreepayments.api.BraintreeFragment.newInstance(activity, this.token);

                await checkRequirements(
                    options,
                    {
                        currencyCode: "",
                        billingAgreementDescription: ""
                    }
                )

                let request = new com.braintreepayments.api.models.PayPalRequest();
                request.currencyCode(options.currencyCode);
                request.billingAgreementDescription(options.billingAgreementDescription);

                let paypal
                paypal = new BraintreePaymentHandler(fragment, (response: { nonce?: IPayPalAccountNonce, cancelled?: number, error?: any }) => {
                    if (response.error) {
                        reject(response.error);
                    }
                    else if (response.cancelled) {
                        reject(response.cancelled);
                    }
                    else {
                        resolve(response.nonce)
                    }
                }, request);
                paypal.startVault();
            } catch (error) {
                reject(error)
            }
        })
    }

    /**
     * One time creditcard payment - Dropin recommended over this approach
     * @param options Braintree options
     */
    startCreditCardPayment(options: BrainTreeOptions): Promise<IPaymentMethodNonce> {
        return new Promise(async (resolve, reject) => {
            try {
                await checkRequirements(
                    options,
                    {
                        currencyCode: "",
                        billingAgreementDescription: "",
                        cardNumber: "",
                        expiringMonth: "",
                        expiringYear: ""
                    }
                )


                let activity = app.android.foregroundActivity || app.android.startActivity;
                let fragment = com.braintreepayments.api.BraintreeFragment.newInstance(activity, this.token);

                let card = new BraintreePaymentHandler(fragment, (response) => {
                    if (response.error) {
                        reject(response.error);
                    }
                    else if (response.cancelled) {
                        reject(response.cancelled);
                    }
                    else {
                        resolve(response.nonce)
                    }
                })


                card.startCreditCardPayment(options);
            } catch (error) {
                reject(error)
            }
        })
    }

    /**
     * Google pay payment
     * There seems to be a problem with nativescript and the native library which leads to a failure during preperation
     * @param options Braintree options
     */
    startGooglePayPayment(options: BrainTreeOptions): Promise<IPaymentMethodNonce> {
        return new Promise(async (resolve, reject) => {
            try {
                let activity = app.android.foregroundActivity || app.android.startActivity;
                let fragment = com.braintreepayments.api.BraintreeFragment.newInstance(activity, this.token);

                checkRequirements(options, { currencyCode: "" })

                let googlePaymentRequest = new com.braintreepayments.api.models.GooglePaymentRequest()
                    .transactionInfo(com.google.android.gms.wallet.TransactionInfo.newBuilder()
                        .setTotalPrice(options.amount)
                        .setTotalPriceStatus(com.google.android.gms.wallet.WalletConstants.TOTAL_PRICE_STATUS_FINAL)
                        .setCurrencyCode(options.currencyCode)
                        .build())
                    .billingAddressRequired(true)

                let googlePay = new BraintreePaymentHandler(fragment, (response) => {
                    if (response.error) {
                        reject(response.error);
                    }
                    else if (response.cancelled) {
                        reject(response.cancelled);
                    }
                    else {
                        resolve(response.nonce)
                    }
                }, googlePaymentRequest)

                googlePay.startGooglePayPayment();
            } catch (error) {
                reject(error)
            }
        })
    }

    /**
     * Collecting device data is required for some payment methods
     */
    private collectData(): Promise<string> {
        return new Promise((resolve, reject) => {
            let activity = app.android.foregroundActivity || app.android.startActivity;
            let fragment = com.braintreepayments.api.BraintreeFragment.newInstance(activity, this.token);

            let dataCollector = new DataCollector();
            dataCollector.getDeviceData(fragment, (data) => {
                resolve(data);
            })
        })
    }


    /******************************************************************************************************
     * forked plugin is updated
     * - to support promise approach
     * - use new declaration files
     * - the dropIn is likely to be moved into the new structure and is left to avoid breaking change
     ******************************************************************************************************/
    private cb: (nonce: string, deviceData: string, error?) => void;


    public startPayment(token: any, options: BrainTreeOptions): Promise<{ nonce: string, deviceData: string }> {

        return new Promise((resolve, reject) => {
            let t = this;
            let activity = app.android.foregroundActivity || app.android.startActivity;

            let dropInRequest = new com.braintreepayments.api.dropin.DropInRequest();

            if (options.enableCards == false) {
                dropInRequest = dropInRequest.disableCard();
            }


            if (options.enablePayPal == false) {
                dropInRequest = dropInRequest.disablePayPal();
            }


            if (options.enableVenmo == false) {
                dropInRequest = dropInRequest.disableVenmo();
            }


            if (options.enableGooglePay == false) {
                dropInRequest = dropInRequest.disableGooglePayment();
            }



            if (options.amount) {
                dropInRequest.amount(options.amount);
            }

            if (options.collectDeviceData) {
                dropInRequest.collectDeviceData(true)
            }

            if (options.requestThreeDSecureVerification && options.amount) {

                let threeDSecureRequest = new com.braintreepayments.api.models.ThreeDSecureRequest();

                threeDSecureRequest.amount(options.amount);

                threeDSecureRequest.versionRequested(com.braintreepayments.api.models.ThreeDSecureRequest.VERSION_2);


                dropInRequest
                    .requestThreeDSecureVerification(true)
                    .threeDSecureRequest(threeDSecureRequest);
            }

            if (options.enableGooglePay) {
                t.enableGooglePay(dropInRequest, options);
            }

            this.cb = (nonce, deviceData, error) => {
                if (error) {
                    reject(error)
                }
                else {
                    resolve({ nonce: nonce, deviceData: deviceData });
                }
            }
            dropInRequest.clientToken(this.token);
            let dIRIntent = dropInRequest.getIntent(app.android.context);
            this.callIntent(dIRIntent);
        })

    }

    private callIntent(intent: globalAndroid.content.Intent) {
        let t = this;

        app.android.foregroundActivity.startActivityForResult(intent, 4949);
        app.android.on(app.AndroidApplication.activityResultEvent, onResult);

        function onResult(args) {
            app.android.off(app.AndroidApplication.activityResultEvent, onResult);
            t.handleResults(args.requestCode, args.resultCode, args.intent);
        }

    }

    private handleResults(requestCode: number, resultCode: number, data: { getParcelableExtra: (arg0: string) => any; getSerializableExtra: (arg0: string) => any; }) {
        let t = this;
        let androidAcivity = android.app.Activity;
        if (requestCode === 4949) {

            if (resultCode === androidAcivity.RESULT_OK) {

                let result = data.getParcelableExtra(com.braintreepayments.api.dropin.DropInResult.EXTRA_DROP_IN_RESULT);
                let paymentMethodNonce = result.getPaymentMethodNonce().getNonce();

                if (typeof result.paymentMethod == null) {

                    t.output.status = 'error';
                    t.output.msg = 'Nonce Value empty';

                    setTimeout(function () {
                        t.notify({
                            eventName: 'error',
                            object: t
                        });
                    });
                    return;
                }

                // send paymentMethodNonce to your server
                t.output.status = 'success';
                t.output.msg = 'Got Payment Nonce Value';
                t.output.nonce = paymentMethodNonce;
                t.output.deviceInfo = result.getDeviceData();
                t.output.paymentMethodType = result.getPaymentMethodType().getCanonicalName();


                setTimeout(function () {
                    if (t.cb) {
                        t.cb(paymentMethodNonce, result.getDeviceData());
                    }
                    t.notify({
                        eventName: 'success',
                        object: t
                    });
                });

            } else if (resultCode === androidAcivity.RESULT_CANCELED) {
                // canceled
                t.output.status = 'cancelled';
                t.output.msg = 'User has cancelled payment';


                setTimeout(function () {
                    if (t.cb) {
                        t.cb(undefined, undefined, "cancelled");
                    }
                    t.notify({
                        eventName: 'cancel',
                        object: t
                    });
                });

            } else {
                // an error occurred, checked the returned exception
                let exception = data.getSerializableExtra(com.braintreepayments.api.dropin.DropInActivity.EXTRA_ERROR);
                t.output.msg = exception.getMessage();
                setTimeout(function () {
                    if (t.cb) {
                        t.cb(undefined, undefined, exception.getMessage());
                    }
                    t.notify({
                        eventName: 'error',
                        object: t
                    });
                });
            }
        }

    }



    private enableGooglePay(dropInRequest: com.braintreepayments.api.dropin.DropInRequest, options: BrainTreeOptions): void {


        const GooglePaymentRequest = com.braintreepayments.api.models.GooglePaymentRequest;
        const TransactionInfo = com.google.android.gms.wallet.TransactionInfo;
        const WalletConstants = com.google.android.gms.wallet.WalletConstants;

        let googlePaymentRequest = new GooglePaymentRequest()
            .transactionInfo(TransactionInfo.newBuilder()
                .setTotalPrice(options.amount)
                .setTotalPriceStatus(WalletConstants.TOTAL_PRICE_STATUS_FINAL)
                .setCurrencyCode(options.currencyCode)
                .build())
            .billingAddressRequired(true);

        dropInRequest.googlePaymentRequest(googlePaymentRequest);

    }

}
