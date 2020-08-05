import { Observable } from 'tns-core-modules/data/observable';
import { BraintreeAddress } from './braintree.common';

//handle appswitch when other plugins already implement a custom appdelegate
export declare function setupBraintreeAppDeligate(urlScheme: any): void;
export declare function overrideFunction(classRef, methodName, nextImplementation): any;

export declare function setUrlScheme(urlScheme): void;

export declare function handleReturnUrl(url, sourceApplication): void

export declare class Braintree extends Observable {
  constructor(token: string);

  //left to avoid breaking change
  output: {
    'status': string;
    'msg': string;
    'nonce': string;
    'paymentMethodType': string;
    'deviceInfo': string;
  };

  /**
   * Required for some paymentmethods
   */
  collectData(): Promise<string>;

  /**
   * Changes the used token
   * @param token Token from server
   */
  updateToken(token: string): void;

  /**
   * Onetime Credit Card payment.
   * @param options Braintree options
   */
  startCreditCardPayment(options: BrainTreeOptions): Promise<BTCardNonce>;

  /**
   * Onetime Local payment 
   * @param options Braintree options
   */
  startLocalPayment(options: BrainTreeOptions): Promise<IPaymentMethodNonce>;

  /**
   * Present dropIn 
   * @param token token (to be changed, when moved to new structure)
   * @param options Braintree options
   */
  startPayment(token: any, options: BrainTreeOptions): Promise<{ nonce: string, deviceData: string }>;

  /**
   * Onetime paypal payment
   * @param options Braintree options
   */
  startPaypalCheckoutPayment(options: BrainTreeOptions): Promise<IPayPalAccountNonce>;

  /**
   * Request billing agreement
   * @param options Braintree options
   */
  startPaypalVaultPayment(options: BrainTreeOptions): Promise<BTPayPalAccountNonce>

  /**
   * Onetime Applepay payment (iOS only)
   * @param options Braintree options
   */
  startApplePayPayment(options: BrainTreeOptions): Promise<IPaymentMethodNonce>

  /**
   * Onetime Google Pay payment (android only)
   * @param options Braintree options
   */
  startGooglePayPayment(options: BrainTreeOptions): Promise<IPaymentMethodNonce>

  private callIntent(intent);
  private handleResults(requestCode, resultCode, data);
}

export interface BrainTreeOptions {
  /**
  * The billing amount of the request.
  * Amount is ignored when using Apple Pay
  */
  amount?: string;

  /** Whether to collect Devicedata. Recommended! */
  collectDeviceData?: boolean;

  /** Requesting this will prompt a security check before payment  */
  requestThreeDSecureVerification?: boolean;

  /** Apple Pay request -Likely to be removed in future update.-  */
  applePayPaymentRequest?: PKPaymentRequest;

  /** Description will be displayed to customer */
  billingAgreementDescription?: string;

  /** Selection of paymenttype. Only if it is a localpaymenttype.*/
  localPaymentType?: string | LocalPaymentType;

  /** Will prompt a form to the customer to enter shipping address, if not directly supplied in shipping address */
  shippingAddressRequired?: boolean;

  /** enter if needed, so the customer doesn't have to re-enter it. */
  shippingAddress?: BraintreeAddress;

  /** Recommended for Creditcard payments with 3DSecure  */
  billingAddress?: BraintreeAddress;

  /** Change this pls */
  info?: { email?: string, firstName?: string, lastName?: string, phone?: string };

  /** Use dropin to avoid compliance */
  cardNumber?: string;

  /** Use dropin to avoid compliance */
  expiringMonth?: string;

  /** Use dropin to avoid compliance */
  expiringYear?: string;

  /** Use dropin to avoid compliance */
  cvv?: string;

  /**
  * Switch for DropIn View 
  */
  enableGooglePay?: boolean;

  /** Switch for DropIn View */
  enablePayPal?: boolean;

  /** Switch for DropIn View */
  enableVenmo?: boolean;

  /** Switch for DropIn View */
  enableCards?: boolean;

  /** Switch for DropIn View */
  enableApplePay?: boolean;

  /** Currency code in format: ISO 4217 */
  currencyCode?: string;

  /** countrycode Alpha 2 */
  countryCode?: string;
}

/**
 * item for ApplePay -required for now. will be moved when apple pay works
 */
export interface ApplePayLineItem {
  label: string;
  amount: number;
}

/**
 * Paypal specific paymentnonce
 */
export interface IPayPalAccountNonce {

  phone: string;
  billingAddress: BraintreeAddress;
  email: string;
  firstName: string;
  lastName: string;
  shippingAddress: BraintreeAddress;
  description: string
  nonce: string;
}

/**
 * Universal Paymentmethodnonce
 */
export interface IPaymentMethodNonce {

  description: string
  nonce: string;
}
