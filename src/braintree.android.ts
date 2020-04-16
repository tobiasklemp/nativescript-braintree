import * as app from 'tns-core-modules/application';
import { BraintreeBase } from './braintree.common';
import { BrainTreeOptions, IPayPalAccountNonce, IPaymentMethodNonce, ICardNonce } from '.';

export import PaymentMethodNonceCreatedListener = com.braintreepayments.api.interfaces.PaymentMethodNonceCreatedListener;
export import PayPalApprovalHandler = com.braintreepayments.api.interfaces.PayPalApprovalHandler;
export import BraintreeFragment = com.braintreepayments.api.BraintreeFragment;
export import PayPalRequest = com.braintreepayments.api.models.PayPalRequest;

export import BraintreeCancelListener = com.braintreepayments.api.interfaces.BraintreeCancelListener;
export import BraintreeErrorListener = com.braintreepayments.api.interfaces.BraintreeErrorListener;
export import BraintreeResponseListener = com.braintreepayments.api.interfaces.BraintreeResponseListener;

export import DataCollector = com.braintreepayments.api.DataCollector;
export import Card = com.braintreepayments.api.Card;

export import CardBuilder = com.braintreepayments.api.models.CardBuilder;
export import LocalPaymentRequest = com.braintreepayments.api.models.LocalPaymentRequest;
const DropInRequest = com.braintreepayments.api.dropin.DropInRequest;
const ThreeDSecureRequest = com.braintreepayments.api.models.ThreeDSecureRequest;

const GooglePaymentRequest = com.braintreepayments.api.models.GooglePaymentRequest;
const TransactionInfo = com.google.android.gms.wallet.TransactionInfo;
const WalletConstants = com.google.android.gms.wallet.WalletConstants;


const PayPal = com.braintreepayments.api.PayPal;
export import LocalPayment = com.braintreepayments.api.LocalPayment;


export import BTPaymentMethodNonce = com.braintreepayments.api.models.PaymentMethodNonce;
export import BTPayPalAccountNonce = com.braintreepayments.api.models.PayPalAccountNonce;

export function setupBraintreeAppDeligate(urlScheme: any) {
    // to avoid error
}

export class PayPalAccountNonce implements IPayPalAccountNonce {

    public get billingAddress(): any {
        return this._native.getBillingAddress();
    }

    public get description(): any {
        return this._native.getDescription();
    }

    public get lastName(): string {
        return this._native.getLastName();
    }

    public get shippingAddress(): any {
        return this._native.getShippingAddress();
    }

    public get nonce(): string {
        return this._native.getNonce();
    }

    public get phone(): string {
        return this._native.getPhone();
    }

    public get email(): string {
        return this._native.getEmail();
    }

    public get firstName(): string {
        return this._native.getFirstName();
    }

    private _native: BTPayPalAccountNonce;


    constructor(native: BTPayPalAccountNonce) {
        this._native = native;
    }

}

export class PaymentMethodNonce implements IPaymentMethodNonce {

    public get description(): any {
        return this._native.getDescription();
    }

    public get nonce(): string {
        return this._native.getNonce();
    }

    private _native: BTPaymentMethodNonce;


    constructor(native: BTPaymentMethodNonce) {
        this._native = native;
    }

}

export interface BraintreeListenerResponse {
    nonce?: any;
    cancelled?: number;
    error?: any;
    data?: string;
}

@Interfaces([PaymentMethodNonceCreatedListener, BraintreeCancelListener, BraintreeErrorListener, BraintreeResponseListener])
export class BraintreePayPal extends java.lang.Object implements PaymentMethodNonceCreatedListener, BraintreeCancelListener, BraintreeErrorListener, BraintreeResponseListener<string> {

    constructor(private fragment: BraintreeFragment, private cb: (response: { nonce?: IPayPalAccountNonce, data?: string, cancelled?: number, error?: any }) => void, private paypalRequest?: PayPalRequest) {
        super();
        this.fragment.addListener(this);
        return global.__native(this);
    }
    public onResponse(data: string): void {
        this.cb({ data: data });
    }

    public onError(err: java.lang.Exception): void {
        this.cb({ error: err });
    }

    public onCancel(event: number): void {
        this.cb({ cancelled: event });
    }

    collectDeviceData(): void {
        DataCollector.collectDeviceData(this.fragment, this)
    }

    startCheckout(): void {
        PayPal.requestOneTimePayment(this.fragment, this.paypalRequest);
    }

    startVault(): void {
        PayPal.requestBillingAgreement(this.fragment, this.paypalRequest);
    }

    public onPaymentMethodNonceCreated(nonce: BTPayPalAccountNonce): void {
        this.cb({ nonce: new PayPalAccountNonce(nonce) })
    }

}

@Interfaces([PaymentMethodNonceCreatedListener, BraintreeCancelListener, BraintreeErrorListener, BraintreeResponseListener])
export class BraintreeLocal extends java.lang.Object implements PaymentMethodNonceCreatedListener, BraintreeCancelListener, BraintreeErrorListener, BraintreeResponseListener<LocalPaymentRequest> {

    constructor(private fragment: BraintreeFragment, private cb: (response: { nonce?: PaymentMethodNonce, data?: string, cancelled?: number, error?: any }) => void, private localRequest?: LocalPaymentRequest) {
        super();
        this.fragment.addListener(this);
        return global.__native(this);
    }

    public onResponse(request: LocalPaymentRequest): void {
        LocalPayment.approvePayment(this.fragment, request);
    }

    public onError(err: java.lang.Exception): void {
        this.cb({ error: err });
    }

    public onCancel(event: number): void {
        this.cb({ cancelled: event });
    }

    startLocal(): void {
        LocalPayment.startPayment(this.fragment, this.localRequest, this)
    }

    public onPaymentMethodNonceCreated(nonce: BTPaymentMethodNonce): void {
        this.cb({ nonce: new PaymentMethodNonce(nonce) })
    }

}

@Interfaces([PaymentMethodNonceCreatedListener, BraintreeCancelListener, BraintreeErrorListener])
export class BraintreeCard extends java.lang.Object implements PaymentMethodNonceCreatedListener, BraintreeCancelListener, BraintreeErrorListener {

    constructor(private fragment: BraintreeFragment, private cardNumber: string, private expirationDate: string, private callback: (response: BraintreeListenerResponse) => void) {
        super();
        this.fragment.addListener(this);
        return global.__native(this);
    }

    public onError(err: java.lang.Exception): void {
        this.callback({ error: err });
    }

    public onCancel(event: number): void {
        this.callback({ cancelled: event });
    }

    public startPayment(): void {
        let cardBuilder = new CardBuilder();
        cardBuilder.cardNumber(this.cardNumber);
        cardBuilder.expirationDate(this.expirationDate);

        Card.tokenize(this.fragment, cardBuilder);
    }

    public onPaymentMethodNonceCreated(nonce: BTPaymentMethodNonce): void {
        this.callback({ nonce: new PaymentMethodNonce(nonce) })
    }

}

export class Braintree extends BraintreeBase {

    private paypal: BraintreePayPal;
    private local: BraintreeLocal;
    private card: BraintreeCard;

    constructor(token: string) {
        super(token);
    }

    public startPaypalCheckoutPayment(options: BrainTreeOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            let activity = app.android.foregroundActivity || app.android.startActivity;
            let fragment = BraintreeFragment.newInstance(activity, this.token);


            if (!options.amount) {
                reject("Amount is required");
            }

            if (!options.currencyCode) {
                reject("Currency Code is required");
            }


            let request = new PayPalRequest(options.amount);
            request.currencyCode(options.currencyCode);


            this.paypal = new BraintreePayPal(fragment, (response: { nonce?: IPayPalAccountNonce, cancelled?: number, error?: any }) => {
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
            this.paypal.startCheckout()
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
                reject("CurrencyCode is required");
            }

            if (options.localPaymentType) {
                request.paymentType(options.localPaymentType);
            }
            else {
                reject("LocalPaymentType is required");
            }

            if (options.localPaymentType) {
                request.amount(options.amount);
            }
            else {
                reject("Amount is required");
            }

            if (options.shippingAddressRequired != undefined) {
                request.shippingAddressRequired(options.shippingAddressRequired);
            }

            if (options.address) {
                request.address(options.address);
            }

            if (options.info) {
                request.givenName(options.info.firstName);
                request.surname(options.info.lastName);
                request.email(options.info.email);
                request.phone(options.info.phone);
            }


            this.local = new BraintreeLocal(fragment, (response: { nonce?: IPaymentMethodNonce, cancelled?: number, error?: any }) => {
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
            this.local.startLocal();
        })

    }

    public startPaypalVaultPayment(options: BrainTreeOptions): Promise<IPayPalAccountNonce> {
        return new Promise((resolve, reject) => {
            let activity = app.android.foregroundActivity || app.android.startActivity;
            let fragment = BraintreeFragment.newInstance(activity, this.token);

            if (!options.currencyCode) {
                reject("Currency Code is required");
            }

            if (!options.billingAgreementDescription) {
                reject("billingAgreementDescription Code is required");
            }

            let request = new PayPalRequest(options.amount);
            request.currencyCode(options.currencyCode);
            request.billingAgreementDescription(options.billingAgreementDescription);


            this.paypal = new BraintreePayPal(fragment, (response: { nonce?: IPayPalAccountNonce, cancelled?: number, error?: any }) => {
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
            this.paypal.startVault();
        })
    }

    startCreditCardPayment(options: BrainTreeOptions): Promise<ICardNonce> {
        return new Promise((resolve, reject) => {


            if (!options.cardNumber) {
                reject("Card number is required");
            }

            if (!options.expiringMonth && options.expiringYear) {
                reject("Expiring Date is required");
            }

            if (!this.card) {
                let activity = app.android.foregroundActivity || app.android.startActivity;
                let fragment = BraintreeFragment.newInstance(activity, this.token);

                this.card = new BraintreeCard(fragment, options.cardNumber, options.expiringMonth + "/" + options.expiringYear, (response) => {
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
            }

            this.card.startPayment();
        })
    }

    private collectData(): Promise<string> {
        return new Promise((resolve, reject) => {
            let activity = app.android.foregroundActivity || app.android.startActivity;
            let fragment = BraintreeFragment.newInstance(activity, this.token);

            this.paypal = new BraintreePayPal(fragment, (response: { nonce?: IPayPalAccountNonce, data?: string, cancelled?: number, error?: any }) => {
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

