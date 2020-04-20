import { Observable } from 'tns-core-modules/data/observable';
import { BraintreeAddress } from './braintree.common';

export declare function setupBraintreeAppDeligate(urlScheme: any): void;
export interface IPayPalAccountNonce { }

export declare class BraintreePayPal {
  startPayment(token: string, options: BrainTreeOptions): Promise<BTPayPalAccountNonce>
}

export declare class Braintree extends Observable {
  constructor(token: string);
  output: {
    'status': string;
    'msg': string;
    'nonce': string;
    'paymentMethodType': string;
    'deviceInfo': string;
  };
  collectData(): Promise<string>;

  startCreditCardPayment(options: BrainTreeOptions): Promise<BTCardNonce>;
  startLocalPayment(options: BrainTreeOptions): Promise<IPaymentMethodNonce>;
  startPayment(token: any, options: BrainTreeOptions): void;
  startPaypalCheckoutPayment(options: BrainTreeOptions): Promise<IPayPalAccountNonce>;
  startPaypalVaultPayment(options: BrainTreeOptions): Promise<BTPayPalAccountNonce>
  private callIntent(intent);
  private handleResults(requestCode, resultCode, data);
}

export enum LocalPaymentType {
  bancontact = 'bancontact',
  eps = 'eps',
  giropay = 'giropay',
  ideal = 'ideal',
  klarna_sofort = 'sofort',
  mybank = 'mybank',
  p24 = 'p24',
  sepa = 'sepa'
}

export interface BrainTreeOptions {
  /**
    * Amount is ignored when using Apple Pay
    */
  amount: string;
  collectDeviceData?: boolean;
  requestThreeDSecureVerification?: boolean;
  applePayPaymentRequest?: PKPaymentRequest;
  billingAgreementDescription?: string;

  localPaymentType?: string;
  shippingAddressRequired?: boolean;

  billingAddress?: BraintreeAddress;
  shippingAddress?: BraintreeAddress;
  info?: { email?: string, firstName?: string, lastName?: string, phone?: string };

  cardNumber?: string;
  expiringMonth?: string;
  expiringYear?: string;
  cvv?: string;

  /**
    * currencyCode is required for Google Pay
    */
  enableGooglePay?: boolean;
  currencyCode?: string;
}

export interface ApplePayLineItem {
  label: string;
  amount: number;
}

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

export interface IPaymentMethodNonce {

  description: string
  nonce: string;
}

export interface ICardNonce {

}