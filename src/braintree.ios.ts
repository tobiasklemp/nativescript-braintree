import { BrainTreeOptions, IPayPalAccountNonce, IPaymentMethodNonce } from '.';
import { BraintreeBase, BraintreeAddress } from './braintree.common';
import { setupAppDeligate, enableMultipleOverridesFor } from "./getappdelegate"
declare const BTDropInRequest, BTDropInController, UIApplication, PPDataCollector, BTPostalAddress;

class PayPalAccountNonce implements IPayPalAccountNonce {

    public billingAddress: BraintreeAddress;

    public description: string;

    public lastName: string

    public shippingAddress: BraintreeAddress;

    public nonce: string;

    public phone: string;

    public email: string;

    public firstName: string;

    public _native: BTPayPalAccountNonce;

    constructor(native: BTPayPalAccountNonce) {
        this._native = native;
        if (native.billingAddress) {
            this.billingAddress = convertAddressObj(native.billingAddress);
            this.billingAddress.firstname = native.firstName;
            this.billingAddress.lastname = native.lastName;
        }

        if (native.shippingAddress) {
            this.shippingAddress = convertAddressObj(native.shippingAddress);
            this.shippingAddress.firstname = native.shippingAddress.recipientName
        }

        this.firstName = native.firstName;
        this.lastName = native.lastName;
        this.nonce = native.nonce;
        this.phone = native.phone;
        this.email = native.email;

    }

}

class PaymentMethodNonce implements IPaymentMethodNonce {

    description: string;
    nonce: string;
    _native: any;

    constructor(native: any) {
        this._native = native;
        this.description = native.description
        this.nonce = native.nonce
    }
}

export function setupBraintreeAppDeligate(urlScheme) {
    setupAppDeligate(urlScheme);
}

export function overrideFunction(classRef, methodName, nextImplementation) {
    return enableMultipleOverridesFor(classRef, methodName, nextImplementation);
}


export function setUrlScheme(urlScheme) {
    BTAppSwitch.setReturnURLScheme(urlScheme);
}

export function handleReturnUrl(url, sourceApplication) {
    BTAppSwitch.handleOpenURLSourceApplication(url, sourceApplication);
}

function getAddressObj(a: BraintreeAddress): BTPostalAddress {
    let address: BTPostalAddress = BTPostalAddress().alloc().init();
    address.countryCodeAlpha2 = a.countryCode;
    address.extendedAddress = a.extendedAddress;
    address.streetAddress = a.streetAddress;
    address.postalCode = a.postalCode;
    address.region = a.region;
    address.locality = a.locality;
    address.recipientName = a.receipientName;

    return address;
}

function getSecureAddressObj(a: BraintreeAddress): BTThreeDSecurePostalAddress {
    let address: BTThreeDSecurePostalAddress = BTThreeDSecurePostalAddress.alloc().init();
    address.countryCodeAlpha2 = a.countryCode;
    address.extendedAddress = a.extendedAddress;
    address.streetAddress = a.streetAddress;
    address.postalCode = a.postalCode;
    address.region = a.region;
    address.locality = a.locality;
    address.givenName = a.firstname;
    address.surname = a.lastname;
    address.phoneNumber = a.phone;

    return address;
}

function convertAddressObj(a: BTPostalAddress): BraintreeAddress {
    let address: BraintreeAddress = new BraintreeAddress();
    address.countryCode = a.countryCodeAlpha2;
    address.extendedAddress = a.extendedAddress;
    address.streetAddress = a.streetAddress;
    address.postalCode = a.postalCode;
    address.region = a.region;
    address.locality = a.locality;
    return address;
}

export class Braintree extends BraintreeBase {
    dropInController;

    private _client: BTAPIClient;

    private get client(): BTAPIClient {
        if (!this._client) {
            this._client = BTAPIClient.alloc().initWithAuthorization(this.token);
        }
        return this._client
    }

    public output = {
        'status': 'fail',
        'msg': 'unknown',
        'nonce': '',
        'paymentMethodType': '',
        'deviceInfo': ''
    };

    constructor(token: string) {
        super(token);
        this.token = token;
    }

    public collectDeviceData(): string {
        return PPDataCollector.collectPayPalDeviceData();
    }

    public startPaypalCheckoutPayment(options: BrainTreeOptions): Promise<IPayPalAccountNonce> {
        return new Promise((resolve, reject) => {

            let paypalDriver: BTPayPalDriver = new BTPayPalDriver({ APIClient: this.client });
            let request = BTPayPalRequest.alloc().initWithAmount(options.amount);
            request.currencyCode = options.currencyCode;

            paypalDriver.requestOneTimePaymentCompletion(request, (tokenizedPayPalAccount: BTPayPalAccountNonce, error) => {
                if (tokenizedPayPalAccount) {
                    resolve(new PayPalAccountNonce(tokenizedPayPalAccount));
                }
                else if (error) {
                    reject(error);
                }
                else {
                    reject({ cancelled: true });
                }
            })
        })
    }

    public startPaypalVaultPayment(options: BrainTreeOptions): Promise<IPayPalAccountNonce> {
        return new Promise((resolve, reject) => {

            let paypalDriver: BTPayPalDriver = new BTPayPalDriver({ APIClient: this.client });
            let request = BTPayPalRequest.alloc().init();
            request.billingAgreementDescription = options.billingAgreementDescription;

            paypalDriver.requestBillingAgreementCompletion(request, (tokenizedPayPalAccount: BTPayPalAccountNonce, error) => {
                if (tokenizedPayPalAccount) {
                    resolve(new PayPalAccountNonce(tokenizedPayPalAccount));
                }
                else if (error) {
                    reject(error);
                }
                else {
                    reject({ cancelled: true });
                }
            })
        })
    }

    public startLocalPayment(options: BrainTreeOptions): Promise<IPaymentMethodNonce> {
        return new Promise((resolve, reject) => {

            let driver = BTPaymentFlowDriver.alloc().initWithAPIClient(this.client);
            driver.viewControllerPresentingDelegate = new ViewControllerPresentingDelegate();
            let delegate = new LocalPaymentRequestDelegate();

            let request = BTLocalPaymentRequest.alloc().init();

            if (options.currencyCode) {
                request.currencyCode = options.currencyCode;
            }
            else {
                reject({ error: "currencyCode is required" });
            }

            if (options.localPaymentType) {
                request.paymentType = options.localPaymentType;
            }
            else {
                reject({ error: "localPaymentType is required" });
            }

            if (options.amount) {
                request.amount = options.amount;
            }
            else {
                reject({ error: "amount is required" });
            }

            if (options.billingAddress && options.billingAddress.firstname) {
                request.givenName = options.billingAddress.firstname;
            }

            if (options.billingAddress && options.billingAddress.lastname) {
                request.surname = options.billingAddress.lastname;
            }

            if (options.info && options.info.phone) {
                request.phone = options.info.phone;
            }

            if (options.billingAddress) {
                request.address = getAddressObj(options.billingAddress);
            }

            if (options.info && options.info.email) {
                request.email = options.info.email;
            }


            request.shippingAddressRequired = options.shippingAddressRequired == true ? true : false;

            request.localPaymentFlowDelegate = delegate;

            driver.startPaymentFlowCompletion(request, (result: BTPaymentFlowResult, error) => {
                if (result) {
                    resolve(new PaymentMethodNonce(result));
                }
                else if (error) {
                    reject(error);
                }
                else {
                    reject({ cancelled: true });
                }
            })

        })
    }

    public startCreditCardPayment(options: BrainTreeOptions): Promise<IPaymentMethodNonce> {
        return new Promise((resolve, reject) => {

            let driver = BTPaymentFlowDriver.alloc().initWithAPIClient(this.client);
            driver.viewControllerPresentingDelegate = new ViewControllerPresentingDelegate();

            let delegate = new ThreeDSecureRequestDelegate();
            let cardClient: BTCardClient = BTCardClient.alloc().initWithAPIClient(this.client);

            let card: BTCard = BTCard.alloc().initWithNumberExpirationMonthExpirationYearCvv(options.cardNumber, options.expiringMonth, options.expiringYear, options.cvv);
            cardClient.tokenizeCardCompletion(card, (tokenizedCard, error) => {
                if (tokenizedCard) {
                    let request = BTThreeDSecureRequest.alloc().init();
                    request.threeDSecureRequestDelegate = delegate;

                    if (options.amount) {
                        // For some reason this request requires a number for amount altough type is string - this fixes a crash
                        request.amount = <any>Number.parseFloat(options.amount);
                    }
                    else {
                        reject({ error: "amount is required" });
                    }


                    request.nonce = tokenizedCard.nonce

                    if (options.info && options.info.email) {
                        request.email = options.info.email;
                    }

                    request.versionRequested = BTThreeDSecureVersion.Version2;
                    if (options.billingAddress) {
                        request.billingAddress = getSecureAddressObj(options.billingAddress)
                    }

                    if (options.shippingAddress) {
                        let info = BTThreeDSecureAdditionalInformation.alloc().init();
                        info.shippingAddress = getSecureAddressObj(options.shippingAddress);
                    }


                    driver.startPaymentFlowCompletion(request, (secureResult, error) => {
                        if (error) {
                            reject(error);
                        }

                        if (tokenizedCard.threeDSecureInfo.liabilityShiftPossible) {
                            if (tokenizedCard.threeDSecureInfo.liabilityShifted) {
                                console.log("3D Secure authentication success")
                            } else {
                                console.log("3D Secure authentication failed");
                            }
                        } else {
                            console.log("3D Secure authentication was not possible")
                        }
                        resolve(new PaymentMethodNonce(tokenizedCard));
                    })

                }
                else if (error) {
                    reject(error);
                }
                else {
                    reject();
                }
            })


        })
    }

    public startApplePayPayment(options: BrainTreeOptions): Promise<IPaymentMethodNonce> {
        return new Promise((resolve, reject) => {
            let request = PKPaymentRequest.alloc().init();

            request.paymentSummaryItems = options.applePayPaymentRequest.paymentSummaryItems;
            request.countryCode = options.applePayPaymentRequest.countryCode;
            request.currencyCode = options.applePayPaymentRequest.currencyCode;
            request.merchantIdentifier = options.applePayPaymentRequest.merchantIdentifier;
            request.merchantCapabilities = options.applePayPaymentRequest.merchantCapabilities;
            request.supportedNetworks = options.applePayPaymentRequest.supportedNetworks as NSArray<string>;


            let canMakePayments: boolean = PKPaymentAuthorizationViewController.canMakePayments();
            let canMakePaymentsUsingNetworks: boolean = PKPaymentAuthorizationViewController.canMakePaymentsUsingNetworks(request.supportedNetworks);
            let canMakePaymentsUsingNetworksCapabilities: boolean = PKPaymentAuthorizationViewController.canMakePaymentsUsingNetworksCapabilities(request.supportedNetworks, request.merchantCapabilities);

            if (canMakePayments != true) {
                reject({ error: "canMakePayments returned false" })
            }

            if (canMakePaymentsUsingNetworks != true) {
                reject({ error: "canMakePaymentsUsingNetworks returned false" })
            }

            if (canMakePaymentsUsingNetworksCapabilities != true) {
                reject({ error: "canMakePaymentsUsingNetworksCapabilities returned false" })
            }


            let applePayController = PKPaymentAuthorizationViewController.alloc().initWithPaymentRequest(request);
            let pkPaymentDelegateImpl: PKPaymentAuthorizationViewControllerDelegateImpl = new PKPaymentAuthorizationViewControllerDelegateImpl();
            pkPaymentDelegateImpl.callback = (nonce, error) => {
                if (error) {
                    reject({ error: error });
                }
                else {
                    resolve(new PaymentMethodNonce(nonce));
                }
            }

            let applePayClient = BTApplePayClient.alloc().initWithAPIClient(this.client);

            pkPaymentDelegateImpl.applePayClient = applePayClient;
            pkPaymentDelegateImpl.braintree = this;

            let controller = UIApplication.sharedApplication.keyWindow.rootViewController;

            try {
                applePayController.delegate = pkPaymentDelegateImpl;
            } catch (error) {
                reject({ error: error })
            }

            controller.presentViewControllerAnimatedCompletion(applePayController, true, (): void => {
            });



        })
    }

    public startPayment(token: any, options: BrainTreeOptions): Promise<{ nonce: string, deviceData: string }> {
        return new Promise((resolve, reject) => {
            let request: BTDropInRequest = BTDropInRequest.alloc().init();

            if (options.enableCards == false) {
                request.cardDisabled = true;
            }

            if (options.enablePayPal == false) {
                request.paypalDisabled = true;
            }

            if (options.enableVenmo == false) {
                request.venmoDisabled = true;
            }

            if (options.enableApplePay == false) {
                request.applePayDisabled = true;
            }


            if (options.amount) {
                request.amount = options.amount;
            }


            if (options.requestThreeDSecureVerification && options.amount) {
                let threeDSecureRequest = BTThreeDSecureRequest.alloc().init();
                threeDSecureRequest.amount = options.amount;
                threeDSecureRequest.versionRequested = BTThreeDSecureVersion.Version2;
                request.threeDSecureVerification = true;
                request.threeDSecureRequest = threeDSecureRequest;
            }
            let dropIn = BTDropInController.alloc().initWithAuthorizationRequestHandler(token, request, (controller, result, error) => {
                if (error !== null) {
                    reject(this);
                    setTimeout(() => {
                        this.notify({
                            eventName: 'error',
                            object: this
                        });
                    });

                } else if (result.cancelled) {
                    this.output.status = 'cancelled';
                    this.output.msg = 'User has cancelled payment';
                    reject("cancelled");
                    setTimeout(() => {
                        this.notify({
                            eventName: 'cancel',
                            object: this
                        });
                    });

                } else {

                    if (typeof result.paymentMethod == null) {

                        this.output.status = 'error';
                        this.output.msg = 'Nonce Value empty';
                        reject("no nonce received")
                        setTimeout(() => {
                            this.notify({
                                eventName: 'error',
                                object: this
                            });
                        });
                        return;
                    }


                    // Apple Pay implementation
                    if (result.paymentDescription === "Apple Pay") {

                        let request = PKPaymentRequest.alloc().init();

                        request.paymentSummaryItems = options.applePayPaymentRequest.paymentSummaryItems;
                        request.countryCode = options.applePayPaymentRequest.countryCode;
                        request.currencyCode = options.applePayPaymentRequest.currencyCode;
                        request.merchantIdentifier = options.applePayPaymentRequest.merchantIdentifier;
                        request.merchantCapabilities = options.applePayPaymentRequest.merchantCapabilities;
                        request.supportedNetworks = options.applePayPaymentRequest.supportedNetworks as NSArray<string>;





                        let applePayController = PKPaymentAuthorizationViewController.alloc().initWithPaymentRequest(request);

                        let pkPaymentDelegateImpl: PKPaymentAuthorizationViewControllerDelegateImpl = new PKPaymentAuthorizationViewControllerDelegateImpl();

                        let applePayClient = new BTApplePayClient(dropIn.apiClient);

                        pkPaymentDelegateImpl.applePayClient = applePayClient;
                        pkPaymentDelegateImpl.braintree = this;

                        try {
                            applePayController.delegate = pkPaymentDelegateImpl;
                        } catch (error) {
                            console.log(`Initialization of PKPaymentAuthorizationViewController failed`);
                            let alertController = UIAlertController.alertControllerWithTitleMessagePreferredStyle("Error", "An error has occurred, please try again or use a different payment method.", UIAlertControllerStyle.Alert);
                            alertController.addAction(UIAlertAction.actionWithTitleStyleHandler("Ok", UIAlertActionStyle.Default, null));
                            controller.presentViewControllerAnimatedCompletion(alertController, true, null);
                            return;
                        }


                        console.log(`applePayController: ${applePayController}`);
                        console.log(`delegateImpl: ${pkPaymentDelegateImpl}`);

                        this.dropInController = controller;
                        controller.presentViewControllerAnimatedCompletion(applePayController, true, (): void => {
                        });

                        return;

                    } else {
                        this.output.nonce = result.paymentMethod.nonce;
                        this.output.paymentMethodType = result.paymentMethod.type;
                        this.output.status = 'success';
                        this.output.msg = 'Got Payment Nonce Value';
                        this.output.deviceInfo = PPDataCollector.collectPayPalDeviceData();
                        resolve({ nonce: result.paymentMethod.nonce, deviceData: PPDataCollector.collectPayPalDeviceData() })
                        setTimeout(() => {
                            this.notify({
                                eventName: 'success',
                                object: this
                            });
                        });
                    }
                }
                controller.dismissViewControllerAnimatedCompletion(true, null);
            });

            let app = UIApplication.sharedApplication;
            app.keyWindow.rootViewController.presentViewControllerAnimatedCompletion(dropIn, true, null);
        })
    }

    submitApplePayment(applePayNonce: string): void {
        this.output.nonce = applePayNonce;
        this.output.paymentMethodType = "18";
        this.output.status = 'success';
        this.output.msg = 'Got Payment Nonce Value';
        this.output.deviceInfo = PPDataCollector.collectPayPalDeviceData();

        this.dropInController.dismissViewControllerAnimatedCompletion(true, null);

        setTimeout(() => {
            this.notify({
                eventName: 'success',
                object: this
            });
        });
    }
}

export class LocalPaymentRequestDelegate extends NSObject implements BTLocalPaymentRequestDelegate {
    public static ObjCProtocols = [BTLocalPaymentRequestDelegate];
    constructor() {
        super();
    }


    localPaymentStartedPaymentIdStart(request: BTLocalPaymentRequest, paymentId: string, start): void {
        start()
    }

}

export class ThreeDSecureRequestDelegate extends NSObject implements BTThreeDSecureRequestDelegate {
    public static ObjCProtocols = [BTThreeDSecureRequestDelegate];

    constructor() {
        super();
    }

    onLookupCompleteResultNext(request: BTThreeDSecureRequest, result: BTThreeDSecureLookup, next: () => void): void {
        next();
    }
}

export class ViewControllerPresentingDelegate extends NSObject implements BTViewControllerPresentingDelegate {
    public static ObjCProtocols = [BTViewControllerPresentingDelegate];
    constructor() {
        super();
    }
    paymentDriverRequestsDismissalOfViewController(driver: any, viewController: UIViewController): void {
        viewController.dismissViewControllerAnimatedCompletion(true, null)
    }
    paymentDriverRequestsPresentationOfViewController(driver: any, viewController: UIViewController): void {
        let app = UIApplication.sharedApplication;
        app.keyWindow.rootViewController.presentViewControllerAnimatedCompletion(viewController, true, null);
    }

}

export class PKPaymentAuthorizationViewControllerDelegateImpl extends NSObject implements PKPaymentAuthorizationViewControllerDelegate {
    public static ObjCProtocols = [PKPaymentAuthorizationViewControllerDelegate];
    applePayClient: BTApplePayClient;
    nonce: BTApplePayCardNonce;
    braintree: Braintree;
    callback: (nonce: BTApplePayCardNonce, error?) => void;

    paymentAuthorizationViewControllerDidAuthorizePaymentCompletion?(controller: PKPaymentAuthorizationViewController, payment: PKPayment, completion: (p1: PKPaymentAuthorizationStatus) => void): void {
        console.log(`PaymentAuthorizationViewController Did Authorize Payment Completion executing`);

        this.applePayClient.tokenizeApplePayPaymentCompletion(payment, (nonce: BTApplePayCardNonce, error: NSError): void => {
            if (nonce) {
                this.nonce = nonce;
                completion(PKPaymentAuthorizationStatus.Success);
            } else {
                completion(PKPaymentAuthorizationStatus.Failure);
                /*
                console.dir("#####################");
                console.log(`error: ${error}`);
                console.dir("#####################");
                */
                if (this.callback) {
                    this.callback(undefined, error);
                }
            }
        });
    }

    paymentAuthorizationViewControllerDidAuthorizePaymentHandler?(controller: PKPaymentAuthorizationViewController, payment: PKPayment, completion: (p1: PKPaymentAuthorizationResult) => void): void {
        console.log(`PaymentAuthorizationViewController Did Authorize Payment Handler executing`);
        let result = PKPaymentAuthorizationResult.alloc().init();

        this.applePayClient.tokenizeApplePayPaymentCompletion(payment, (nonce: BTApplePayCardNonce, error: NSError): void => {
            if (nonce) {
                this.nonce = nonce;
                result.status = PKPaymentAuthorizationStatus.Success;
                completion(result);
            } else {
                result.status = PKPaymentAuthorizationStatus.Failure;
                completion(result);
                /*
                console.dir("#####################");
                console.log(`error: ${error}`);
                console.dir("#####################");
                */
                if (this.callback) {
                    this.callback(undefined, error);
                }
            }
        });

    }

    paymentAuthorizationViewControllerDidFinish(controller: PKPaymentAuthorizationViewController): void {
        //console.log(`paymentAuthorizationViewControllerDidFinish(${controller})`);
        if (!this.nonce) {
            controller.dismissViewControllerAnimatedCompletion(true, null);
        } else {
            this.braintree.submitApplePayment(this.nonce.nonce);
            if (this.callback) {
                this.callback(this.nonce);
            }
            this.braintree.dropInController.dismissViewControllerAnimatedCompletion(true, null);
        }
    }
    paymentAuthorizationViewControllerDidSelectPaymentMethodCompletion?(controller: PKPaymentAuthorizationViewController, paymentMethod: PKPaymentMethod, completion: (p1: NSArray<PKPaymentSummaryItem>) => void): void {
        console.log("paymentAuthorizationViewControllerDidSelectPaymentMethodCompletion Method not implemented 4.");
    }
    paymentAuthorizationViewControllerDidSelectPaymentMethodHandler?(controller: PKPaymentAuthorizationViewController, paymentMethod: PKPaymentMethod, completion: (p1: PKPaymentRequestPaymentMethodUpdate) => void): void {
        let paymentMethodUpdate = PKPaymentRequestPaymentMethodUpdate.alloc().init();
        completion(paymentMethodUpdate);
    }
    paymentAuthorizationViewControllerDidSelectShippingAddressCompletion?(controller: PKPaymentAuthorizationViewController, address: any, completion: (p1: PKPaymentAuthorizationStatus, p2: NSArray<PKShippingMethod>, p3: NSArray<PKPaymentSummaryItem>) => void): void {
        console.log("paymentAuthorizationViewControllerDidSelectShippingAddressCompletion Method not implemented 6.");
    }
    paymentAuthorizationViewControllerDidSelectShippingContactCompletion?(controller: PKPaymentAuthorizationViewController, contact: PKContact, completion: (p1: PKPaymentAuthorizationStatus, p2: NSArray<PKShippingMethod>, p3: NSArray<PKPaymentSummaryItem>) => void): void {
        console.log("paymentAuthorizationViewControllerDidSelectShippingAddressCompletion Method not implemented 7.");
    }
    paymentAuthorizationViewControllerDidSelectShippingContactHandler?(controller: PKPaymentAuthorizationViewController, contact: PKContact, completion: (p1: PKPaymentRequestShippingContactUpdate) => void): void {
        console.log("paymentAuthorizationViewControllerDidSelectShippingContactHandler Method not implemented 8.");
    }
    paymentAuthorizationViewControllerDidSelectShippingMethodCompletion?(controller: PKPaymentAuthorizationViewController, shippingMethod: PKShippingMethod, completion: (p1: PKPaymentAuthorizationStatus, p2: NSArray<PKPaymentSummaryItem>) => void): void {
        console.log("paymentAuthorizationViewControllerDidSelectShippingMethodCompletion Method not implemented 9.");
    }
    paymentAuthorizationViewControllerDidSelectShippingMethodHandler?(controller: PKPaymentAuthorizationViewController, shippingMethod: PKShippingMethod, completion: (p1: PKPaymentRequestShippingMethodUpdate) => void): void {
        console.log("paymentAuthorizationViewControllerDidSelectShippingMethodHandler Method not implemented 10.");
    }
    paymentAuthorizationViewControllerWillAuthorizePayment?(controller: PKPaymentAuthorizationViewController): void {
        console.log("paymentAuthorizationViewControllerWillAuthorizePayment Method not implemented 11.");
    }
}
