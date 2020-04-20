import { Observable } from 'tns-core-modules/data/observable';

export class BraintreeBase extends Observable {


    protected token: string;

    public output = {
        'status': 'fail',
        'msg': 'unknown',
        'nonce': '',
        'paymentMethodType': '',
        'deviceInfo': ''
    };

    constructor(token: string) {
        super();
        this.token = token;
    }

}

export class BraintreeAddress {
    firstname: string;
    lastname: string;
    phone: string;
    streetAddress: string;
    extendedAddress: string;
    locality: string;
    region: string;
    postalCode: string;
    countryCode: string;
    receipientName: string;
}

