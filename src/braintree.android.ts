import * as app from 'tns-core-modules/application';
import { BraintreeBase, BraintreeAddress } from './braintree.common';
import { BrainTreeOptions, IPayPalAccountNonce, IPaymentMethodNonce, ICardNonce } from '.';

import PaymentMethodNonceCreatedListener = com.braintreepayments.api.interfaces.PaymentMethodNonceCreatedListener;
import PayPalApprovalHandler = com.braintreepayments.api.interfaces.PayPalApprovalHandler;
import BraintreeFragment = com.braintreepayments.api.BraintreeFragment;
import PayPalRequest = com.braintreepayments.api.models.PayPalRequest;

import BraintreeCancelListener = com.braintreepayments.api.interfaces.BraintreeCancelListener;
import BraintreeErrorListener = com.braintreepayments.api.interfaces.BraintreeErrorListener;
import BraintreeResponseListener = com.braintreepayments.api.interfaces.BraintreeResponseListener;

import DataCollector = com.braintreepayments.api.DataCollector;
import Card = com.braintreepayments.api.Card;

import CardBuilder = com.braintreepayments.api.models.CardBuilder;
import LocalPaymentRequest = com.braintreepayments.api.models.LocalPaymentRequest;
import DropInRequest = com.braintreepayments.api.dropin.DropInRequest;
import ThreeDSecureRequest = com.braintreepayments.api.models.ThreeDSecureRequest;
import ThreeDSecure = com.braintreepayments.api.ThreeDSecure;
import ThreeDSecureLookupListener = com.braintreepayments.api.interfaces.ThreeDSecureLookupListener;
import ThreeDSecureLookup = com.braintreepayments.api.models.ThreeDSecureLookup;
import ThreeDSecurePostalAddress = com.braintreepayments.api.models.ThreeDSecurePostalAddress;

import PostalAddress = com.braintreepayments.api.models.PostalAddress;

//export import GooglePaymentRequest = com.braintreepayments.api.models.GooglePaymentRequest;
//export import GooglePayment = com.google.android.gms.wallet.GooglePayment;

//export import TransactionInfo = com.google.android.gms.wallet.TransactionInfo;
//export import WalletConstants = com.google.android.gms.wallet.WalletConstants;


import PayPal = com.braintreepayments.api.PayPal;
import LocalPayment = com.braintreepayments.api.LocalPayment;


import BTPaymentMethodNonce = com.braintreepayments.api.models.PaymentMethodNonce;
import BTPayPalAccountNonce = com.braintreepayments.api.models.PayPalAccountNonce;

function getAddressObj(a: BraintreeAddress): PostalAddress {
    let address = new PostalAddress();
    address.phoneNumber(a.phone);
    address.streetAddress(a.streetAddress);
    address.extendedAddress(a.extendedAddress);
    address.locality(a.locality);
    address.region(a.region);
    address.postalCode(a.postalCode);
    address.countryCodeAlpha2(a.countryCode);

    return address;
}

function getSecureAddressObj(a: BraintreeAddress): ThreeDSecurePostalAddress {
    let address = new ThreeDSecurePostalAddress();
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

function convertAddress(a: PostalAddress): BraintreeAddress {
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

export class PayPalAccountNonce implements IPayPalAccountNonce {

    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    billingAddress: any;
    shippingAddress: any;
    description: string;
    nonce: string;

    _native: BTPayPalAccountNonce;


    constructor(native: BTPayPalAccountNonce) {
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

    public _native: BTPaymentMethodNonce;

    constructor(native: BTPaymentMethodNonce) {
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


export class BraintreePayPal {

    private nonceListener: PaymentMethodNonceCreatedListener;
    private errorListener: BraintreeErrorListener;
    private cancelListener: BraintreeCancelListener;

    constructor(private fragment: BraintreeFragment, private cb: (response: BraintreeListenerResponse) => void, private paypalRequest?: PayPalRequest) {
        let that = this;

        this.nonceListener = new PaymentMethodNonceCreatedListener({
            onPaymentMethodNonceCreated(nonce) {
                that.removeListeners();
                that.cb({ nonce: new PaymentMethodNonce(nonce) })
            }
        })

        this.errorListener = new BraintreeErrorListener({
            onError(error) {
                that.removeListeners();
                that.cb({ error: error });
            }
        })

        this.cancelListener = new BraintreeCancelListener({
            onCancel(cancelCode: number) {
                that.removeListeners();
                that.cb({ cancelled: cancelCode });
            }
        })


    }

    startCheckout(): void {
        this.addListeners();
        PayPal.requestOneTimePayment(this.fragment, this.paypalRequest);
    }

    startVault(): void {
        this.addListeners();
        PayPal.requestBillingAgreement(this.fragment, this.paypalRequest);
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

    private nonceListener: PaymentMethodNonceCreatedListener;
    private errorListener: BraintreeErrorListener;
    private cancelListener: BraintreeCancelListener;
    private responseListener: BraintreeResponseListener<LocalPaymentRequest>

    constructor(private fragment: BraintreeFragment, private cb: (response: { nonce?: PaymentMethodNonce, data?: string, cancelled?: number, error?: any }) => void, private localRequest?: LocalPaymentRequest) {
        let that = this;

        this.nonceListener = new PaymentMethodNonceCreatedListener({
            onPaymentMethodNonceCreated(nonce) {
                that.removeListeners();
                that.cb({ nonce: new PaymentMethodNonce(nonce) })
            }
        })

        this.errorListener = new BraintreeErrorListener({
            onError(error) {
                that.removeListeners();
                that.cb({ error: error });
            }
        })

        this.cancelListener = new BraintreeCancelListener({
            onCancel(cancelCode: number) {
                that.removeListeners();
                that.cb({ cancelled: cancelCode });
            }
        })

        this.responseListener = new BraintreeResponseListener({
            onResponse(request: LocalPaymentRequest) {
                that.fragment.removeListener(that.responseListener);
                that.fragment.addListener(that.nonceListener);
                LocalPayment.approvePayment(this.fragment, request);
            }
        })
    }

    startLocal(): void {
        this.addListeners()
        LocalPayment.startPayment(this.fragment, this.localRequest, this.responseListener)
    }

    removeListeners() {
        this.fragment.removeListener(this.nonceListener)
        this.fragment.removeListener(this.responseListener)
        this.fragment.removeListener(this.errorListener)
        this.fragment.removeListener(this.cancelListener)
    }

    addListeners() {
        this.fragment.addListener(this.responseListener)
        this.fragment.addListener(this.errorListener)
        this.fragment.addListener(this.cancelListener)
    }

}

@Interfaces([PaymentMethodNonceCreatedListener, BraintreeCancelListener, BraintreeErrorListener, BraintreeResponseListener])
export class BraintreeGooglePay extends java.lang.Object implements PaymentMethodNonceCreatedListener, BraintreeCancelListener, BraintreeErrorListener, BraintreeResponseListener<boolean> {

    constructor(private fragment: BraintreeFragment, request, private cb: (response: { nonce?: PaymentMethodNonce, data?: string, cancelled?: number, error?: any }) => void, private localRequest?: LocalPaymentRequest) {
        super();
        this.fragment.addListener(this);
        return global.__native(this);
    }

    public onResponse(response: boolean): void {
        if (!response) {
            this.cb({ error: "Device is not ready for Google Pay payments." });
        }
    }

    public onError(err: java.lang.Exception): void {
        this.cb({ error: err });
    }

    public onCancel(event: number): void {
        this.cb({ cancelled: event });
    }

    startPayment(): void {



    }

    public onPaymentMethodNonceCreated(nonce: BTPaymentMethodNonce): void {
        this.cb({ nonce: new PaymentMethodNonce(nonce) })
    }

}

export class BraintreeCard {


    private nonceListener: PaymentMethodNonceCreatedListener;
    private errorListener: BraintreeErrorListener;
    private cancelListener: BraintreeCancelListener;
    private lookupListener: ThreeDSecureLookupListener;
    private perfomedVerification: boolean;

    constructor(private fragment: BraintreeFragment, private options: BrainTreeOptions, private cb: (response: BraintreeListenerResponse) => void) {
        let that = this;

        this.nonceListener = new PaymentMethodNonceCreatedListener({
            onPaymentMethodNonceCreated(nonce) {
                if (that.perfomedVerification) {
                    that.cb({ nonce: new PaymentMethodNonce(nonce) })
                    that.removeListeners();
                }
                else {
                    that.perfomedVerification = true;
                    let threeDRequest = new ThreeDSecureRequest();
                    threeDRequest.amount(that.options.amount);
                    threeDRequest.nonce(nonce.getNonce());
                    threeDRequest.versionRequested(ThreeDSecureRequest.VERSION_2);

                    if (that.options.info) {
                        threeDRequest.email(that.options.info.email);
                    }

                    if (that.options.billingAddress) {
                        threeDRequest.billingAddress(getSecureAddressObj(that.options.billingAddress));
                    }

                    ThreeDSecure.performVerification(that.fragment, threeDRequest);

                }
            }
        })

        this.errorListener = new BraintreeErrorListener({
            onError(error) {
                that.removeListeners();
                that.cb({ error: error });
            }
        })

        this.cancelListener = new BraintreeCancelListener({
            onCancel(cancelCode: number) {
                that.removeListeners();
                that.cb({ cancelled: cancelCode });
            }
        })

        this.lookupListener = new ThreeDSecureLookupListener({
            onLookupComplete(request: ThreeDSecureRequest, lookup: com.braintreepayments.api.models.ThreeDSecureLookup): void {
                ThreeDSecure.continuePerformVerification(that.fragment, request, lookup);
            }
        })


    }

    public startPayment(): void {
        let cardBuilder = new CardBuilder();
        cardBuilder.cardNumber(this.options.cardNumber);
        cardBuilder.cvv(this.options.cvv);
        cardBuilder.expirationDate(this.options.expiringMonth + "/" + this.options.expiringYear);
        this.addListeners();
        Card.tokenize(this.fragment, cardBuilder);
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
            let fragment = BraintreeFragment.newInstance(activity, this.token);

            console.log("Angekommen", fragment);
            if (!options.amount) {
                reject({ error: "amount is required" });
            }

            if (!options.currencyCode) {
                reject({ error: "currencyCode is required" });
            }


            let request = new PayPalRequest(options.amount);
            request.currencyCode(options.currencyCode);
            console.log("request created");

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
            console.log("Paypal handler created")
            paypal.startCheckout()
        })

    }

    public startLocalPayment(options: BrainTreeOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            console.log("STARTING LOCAL PAYMENT")
            let activity = app.android.foregroundActivity || app.android.startActivity;
            let fragment = BraintreeFragment.newInstance(activity, this.token);

            let request = new LocalPaymentRequest();

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
            let fragment = BraintreeFragment.newInstance(activity, this.token);

            if (!options.currencyCode) {
                reject({ error: "currencyCode is required" });
            }

            if (!options.billingAgreementDescription) {
                reject({ error: "billingAgreementDescription Code is required" });
            }

            let request = new PayPalRequest();
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
            let fragment = BraintreeFragment.newInstance(activity, this.token);
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
            reject()
            /*let activity = app.android.foregroundActivity || app.android.startActivity;
            let fragment = BraintreeFragment.newInstance(activity, this.token);

            let googlePaymentRequest = new GooglePaymentRequest()
                .transactionInfo(TransactionInfo.newBuilder()
                    .setTotalPrice(options.amount)
                    .setTotalPriceStatus(WalletConstants.TOTAL_PRICE_STATUS_FINAL)
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


            googlePay.startPayment();
            */
        })
    }

    private collectData(): Promise<string> {
        return new Promise((resolve, reject) => {
            let activity = app.android.foregroundActivity || app.android.startActivity;
            let fragment = BraintreeFragment.newInstance(activity, this.token);
            let paypal
            paypal = new BraintreePayPal(fragment, (response: { nonce?: IPayPalAccountNonce, data?: string, cancelled?: number, error?: any }) => {
                if (response.error) {
                    reject(response.error);
                }
                else if (response.cancelled) {
                    reject(response.cancelled);
                }
                else if (response.data) {
                    resolve(response.data)
                }
            });
        })
    }


    public startPayment(token: any, options: BrainTreeOptions) {

        let t = this;
        let activity = app.android.foregroundActivity || app.android.startActivity;

        let dropInRequest = new DropInRequest();

        if (options.amount) {
            dropInRequest.amount(options.amount);
        }

        if (options.collectDeviceData) {
            dropInRequest.collectDeviceData(true)
        }

        if (options.requestThreeDSecureVerification && options.amount) {

            let threeDSecureRequest = new ThreeDSecureRequest();

            threeDSecureRequest.amount(options.amount);

            threeDSecureRequest.versionRequested(ThreeDSecureRequest.VERSION_2);


            dropInRequest
                .requestThreeDSecureVerification(true)
                .threeDSecureRequest(threeDSecureRequest);
        }

        if (options.enableGooglePay) {
            t.enableGooglePay(dropInRequest, options);
        }

        dropInRequest.clientToken(this.token);
        let dIRIntent = dropInRequest.getIntent(app.android.context);
        this.callIntent(dIRIntent);
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
                    t.notify({
                        eventName: 'error',
                        object: t
                    });
                });
            }
        }

    }



    private enableGooglePay(dropInRequest: com.braintreepayments.api.dropin.DropInRequest, options: BrainTreeOptions): void {


        /*const GooglePaymentRequest = com.braintreepayments.api.models.GooglePaymentRequest;
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
        */
    }

}
