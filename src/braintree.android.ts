import * as app from 'tns-core-modules/application';
import { BraintreeBase, BraintreeAddress } from './braintree.common';
import { BrainTreeOptions, IPayPalAccountNonce, IPaymentMethodNonce, ICardNonce } from '.';


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

export function setupBraintreeAppDeligate(urlScheme: any) {
    // to avoid error
}

export function overrideFunction(classRef, methodName, nextImplementation) {

}

export class PayPalAccountNonce implements IPayPalAccountNonce {

    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    billingAddress: any;
    shippingAddress: any;
    description: string;
    nonce: string;

    _native: com.braintreepayments.api.models.PayPalAccountNonce;


    constructor(native: com.braintreepayments.api.models.PayPalAccountNonce) {
        this._native = native;
        this.firstName = native.getFirstName();
        this.lastName = native.getLastName();
        this.email = native.getEmail();
        this.phone = native.getPhone();
        this.description = native.getDescription();
        this.nonce = native.getNonce();

        if (native.getBillingAddress()) {
            this.billingAddress = convertAddress(native.getBillingAddress());
        }
        if (native.getShippingAddress()) {
            this.billingAddress = convertAddress(native.getShippingAddress());
        }
    }


}

export class PaymentMethodNonce implements IPaymentMethodNonce {

    description: string;
    nonce: string;

    public _native: com.braintreepayments.api.models.PaymentMethodNonce;

    constructor(native: com.braintreepayments.api.models.PaymentMethodNonce) {
        this._native = native;
        this.description = native.getDescription();
        this.nonce = native.getNonce();
    }

}

export interface BraintreeListenerResponse {
    nonce?: any;
    cancelled?: number;
    error?: any;
    data?: string;
}

class DataCollector {

    getDeviceData(fragment: com.braintreepayments.api.BraintreeFragment, cb: (data) => void) {
        com.braintreepayments.api.DataCollector.collectDeviceData(fragment, new com.braintreepayments.api.interfaces.BraintreeResponseListener<string>({
            onResponse(deviceData) {
                cb(deviceData);
            }
        }))
    }
}


export class BraintreePayPal {

    private nonceListener: com.braintreepayments.api.interfaces.PaymentMethodNonceCreatedListener;
    private errorListener: com.braintreepayments.api.interfaces.BraintreeErrorListener;
    private cancelListener: com.braintreepayments.api.interfaces.BraintreeCancelListener;

    constructor(private fragment: com.braintreepayments.api.BraintreeFragment, private cb: (response: BraintreeListenerResponse) => void, private paypalRequest?: com.braintreepayments.api.models.PayPalRequest) {
        let that = this;

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


    }

    startCheckout(): void {
        this.addListeners();
        com.braintreepayments.api.PayPal.requestOneTimePayment(this.fragment, this.paypalRequest);
    }

    startVault(): void {
        this.addListeners();
        com.braintreepayments.api.PayPal.requestBillingAgreement(this.fragment, this.paypalRequest);
    }

    removeListeners() {
        this.fragment.removeListener(this.nonceListener)
        this.fragment.removeListener(this.errorListener)
        this.fragment.removeListener(this.cancelListener)
    }

    addListeners() {
        this.fragment.addListener(this.nonceListener)
        this.fragment.addListener(this.errorListener)
        this.fragment.addListener(this.cancelListener)
    }


}


export class BraintreeLocal {

    private errorListener: com.braintreepayments.api.interfaces.BraintreeErrorListener;
    private cancelListener: com.braintreepayments.api.interfaces.BraintreeCancelListener;


    constructor(private fragment: com.braintreepayments.api.BraintreeFragment, private cb: (response: { nonce?: PaymentMethodNonce, data?: string, cancelled?: number, error?: any }) => void, private localRequest?: com.braintreepayments.api.models.LocalPaymentRequest) {
        let that = this;

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


    }

    startLocal(): void {
        this.addListeners()
        let that = this;
        com.braintreepayments.api.LocalPayment.startPayment(this.fragment, this.localRequest, new com.braintreepayments.api.interfaces.BraintreeResponseListener<com.braintreepayments.api.models.LocalPaymentRequest>({
            onResponse(request) {
                that.fragment.addListener(new com.braintreepayments.api.interfaces.PaymentMethodNonceCreatedListener({
                    onPaymentMethodNonceCreated(nonce) {
                        that.removeListeners();
                        that.cb({ nonce: new PaymentMethodNonce(nonce) })
                    }
                }))
                com.braintreepayments.api.LocalPayment.approvePayment(that.fragment, request)
            }
        }))
    }

    removeListeners() {
        this.fragment.removeListener(this.errorListener)
        this.fragment.removeListener(this.cancelListener)
    }

    addListeners() {
        this.fragment.addListener(this.errorListener)
        this.fragment.addListener(this.cancelListener)
    }

}


export class BraintreeGooglePay {

    private errorListener: com.braintreepayments.api.interfaces.BraintreeErrorListener;
    private responseListener: com.braintreepayments.api.interfaces.BraintreeResponseListener<any>;
    private cancelListener: com.braintreepayments.api.interfaces.BraintreeCancelListener;
    private nonceListener: com.braintreepayments.api.interfaces.PaymentMethodNonceCreatedListener;


    private isReadyCB: (isReady: boolean) => void;

    constructor(private fragment: com.braintreepayments.api.BraintreeFragment, private request: com.braintreepayments.api.models.GooglePaymentRequest, private cb: (response: { nonce?: PaymentMethodNonce, data?: string, cancelled?: number, error?: any }) => void) {
        let that = this;

        this.errorListener = new com.braintreepayments.api.interfaces.BraintreeErrorListener({
            onError(error) {
                that.removeListeners();
                console.log(error)
                that.cb({ error: error });
            }
        })

        this.responseListener = new com.braintreepayments.api.interfaces.BraintreeResponseListener({
            onResponse(res) {
                that.isReadyCB(res);
            }
        })

        this.cancelListener = new com.braintreepayments.api.interfaces.BraintreeCancelListener({
            onCancel(cancelCode: number) {
                that.removeListeners();
                that.cb({ cancelled: cancelCode });
            }
        })

        this.nonceListener = new com.braintreepayments.api.interfaces.PaymentMethodNonceCreatedListener({
            onPaymentMethodNonceCreated(nonce) {
                that.removeListeners();
                that.cb({ nonce: new PaymentMethodNonce(nonce) })
            }
        })
    }

    isReady(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.isReadyCB = (isReady) => {
                resolve(isReady);
            }
            com.braintreepayments.api.GooglePayment.isReadyToPay(this.fragment, this.responseListener);
        })
    }

    startPayment(): void {
        this.addListeners();
        com.braintreepayments.api.GooglePayment.requestPayment(this.fragment, this.request)


    }

    removeListeners() {
        this.fragment.removeListener(this.errorListener)
        this.fragment.removeListener(this.cancelListener)
        this.fragment.removeListener(this.nonceListener)

    }

    addListeners() {
        this.fragment.addListener(this.errorListener)
        this.fragment.addListener(this.cancelListener)
        this.fragment.addListener(this.nonceListener)
    }

}

export class BraintreeCard {


    private nonceListener: com.braintreepayments.api.interfaces.PaymentMethodNonceCreatedListener;
    private errorListener: com.braintreepayments.api.interfaces.BraintreeErrorListener;
    private cancelListener: com.braintreepayments.api.interfaces.BraintreeCancelListener;
    private lookupListener: com.braintreepayments.api.interfaces.ThreeDSecureLookupListener;
    private perfomedVerification: boolean;

    constructor(private fragment: com.braintreepayments.api.BraintreeFragment, private options: BrainTreeOptions, private cb: (response: BraintreeListenerResponse) => void) {
        let that = this;

        this.nonceListener = new com.braintreepayments.api.interfaces.PaymentMethodNonceCreatedListener({
            onPaymentMethodNonceCreated(nonce) {
                if (that.perfomedVerification) {
                    that.cb({ nonce: new PaymentMethodNonce(nonce) })
                    that.removeListeners();
                }
                else {
                    that.perfomedVerification = true;
                    let threeDRequest = new com.braintreepayments.api.models.ThreeDSecureRequest();
                    threeDRequest.amount(that.options.amount);
                    threeDRequest.nonce(nonce.getNonce());
                    threeDRequest.versionRequested(com.braintreepayments.api.models.ThreeDSecureRequest.VERSION_2);

                    if (that.options.info) {
                        threeDRequest.email(that.options.info.email);
                    }

                    if (that.options.billingAddress) {
                        threeDRequest.billingAddress(getSecureAddressObj(that.options.billingAddress));
                    }

                    com.braintreepayments.api.ThreeDSecure.performVerification(that.fragment, threeDRequest);

                }
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

    public startPayment(): void {
        let cardBuilder = new com.braintreepayments.api.models.CardBuilder();
        cardBuilder.cardNumber(this.options.cardNumber);
        cardBuilder.cvv(this.options.cvv);
        cardBuilder.expirationDate(this.options.expiringMonth + "/" + this.options.expiringYear);
        this.addListeners();
        com.braintreepayments.api.Card.tokenize(this.fragment, cardBuilder);
    }

    removeListeners() {
        this.fragment.removeListener(this.nonceListener)
        this.fragment.removeListener(this.errorListener)
        this.fragment.removeListener(this.cancelListener)
        this.fragment.removeListener(this.lookupListener)
    }

    addListeners() {
        this.fragment.addListener(this.nonceListener)
        this.fragment.addListener(this.errorListener)
        this.fragment.addListener(this.cancelListener)
        this.fragment.addListener(this.lookupListener)
    }

}

export class Braintree extends BraintreeBase {

    constructor(token: string) {
        super(token);
    }

    public startPaypalCheckoutPayment(options: BrainTreeOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            let activity = app.android.foregroundActivity || app.android.startActivity;
            let fragment = com.braintreepayments.api.BraintreeFragment.newInstance(activity, this.token);

            if (!options.amount) {
                reject({ error: "amount is required" });
            }

            if (!options.currencyCode) {
                reject({ error: "currencyCode is required" });
            }


            let request = new com.braintreepayments.api.models.PayPalRequest(options.amount);
            request.currencyCode(options.currencyCode);

            let paypal = new BraintreePayPal(fragment, (response: { nonce?: IPayPalAccountNonce, cancelled?: number, error?: any }) => {
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
            paypal.startCheckout()
        })

    }

    public startLocalPayment(options: BrainTreeOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            let activity = app.android.foregroundActivity || app.android.startActivity;
            let fragment = com.braintreepayments.api.BraintreeFragment.newInstance(activity, this.token);

            let request = new com.braintreepayments.api.models.LocalPaymentRequest();

            if (options.currencyCode) {
                request.currencyCode(options.currencyCode);
            }
            else {
                reject({ error: "currencyCode is required" });
            }

            if (options.localPaymentType) {
                request.paymentType(options.localPaymentType);
            }
            else {
                reject({ error: "localPaymentType is required" });
            }

            if (options.localPaymentType) {
                request.amount(options.amount);
            }
            else {
                reject({ error: "amount is required" });
            }

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

            let local

            local = new BraintreeLocal(fragment, (response: { nonce?: IPaymentMethodNonce, cancelled?: number, error?: any }) => {
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
            local.startLocal();
        })

    }

    public startPaypalVaultPayment(options: BrainTreeOptions): Promise<IPayPalAccountNonce> {
        return new Promise((resolve, reject) => {
            let activity = app.android.foregroundActivity || app.android.startActivity;
            let fragment = com.braintreepayments.api.BraintreeFragment.newInstance(activity, this.token);

            if (!options.currencyCode) {
                reject({ error: "currencyCode is required" });
            }

            if (!options.billingAgreementDescription) {
                reject({ error: "billingAgreementDescription Code is required" });
            }

            let request = new com.braintreepayments.api.models.PayPalRequest();
            request.currencyCode(options.currencyCode);
            request.billingAgreementDescription(options.billingAgreementDescription);

            let paypal
            paypal = new BraintreePayPal(fragment, (response: { nonce?: IPayPalAccountNonce, cancelled?: number, error?: any }) => {
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
        })
    }

    startCreditCardPayment(options: BrainTreeOptions): Promise<ICardNonce> {
        return new Promise((resolve, reject) => {


            if (!options.cardNumber) {
                reject({ error: "cardNumber is required" });
            }

            if (!options.expiringMonth && options.expiringYear) {
                reject({ error: "Expiring Date is required" });
            }


            let activity = app.android.foregroundActivity || app.android.startActivity;
            let fragment = com.braintreepayments.api.BraintreeFragment.newInstance(activity, this.token);
            let card
            card = new BraintreeCard(fragment, options, (response) => {
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


            card.startPayment();
        })
    }

    startGooglePayPayment(options: BrainTreeOptions): Promise<ICardNonce> {
        return new Promise((resolve, reject) => {
            let activity = app.android.foregroundActivity || app.android.startActivity;
            let fragment = com.braintreepayments.api.BraintreeFragment.newInstance(activity, this.token);

            let googlePaymentRequest = new com.braintreepayments.api.models.GooglePaymentRequest()
                .transactionInfo(com.google.android.gms.wallet.TransactionInfo.newBuilder()
                    .setTotalPrice(options.amount)
                    .setTotalPriceStatus(com.google.android.gms.wallet.WalletConstants.TOTAL_PRICE_STATUS_FINAL)
                    .setCurrencyCode(options.currencyCode)
                    .build())
                .billingAddressRequired(true);

            let googlePay = new BraintreeGooglePay(fragment, googlePaymentRequest, (response) => {
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

            googlePay.isReady().then(res => {
                if (!res) {
                    googlePay.startPayment();
                }
                else {
                    reject("Device not ready for GooglePay.")
                }
            })


        })
    }

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
