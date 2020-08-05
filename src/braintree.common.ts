import { Observable } from 'tns-core-modules/data/observable';
import { BrainTreeOptions } from '.';

export abstract class BraintreeBase extends Observable {

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

    /**
     * Change the used token
     * @param token new token
     */
    updateToken(token: string) {
        this.token = token;
    }

}

/**
 * Local paymenttypes
 */
export enum LocalPaymentType {
    bancontact = 'bancontact',
    eps = 'eps',
    giropay = 'giropay',
    ideal = 'ideal',
    klarna_sofort = 'sofort',
    mybank = 'mybank',
    p24 = 'p24',

    //sepa seems to be removed from braintree
    sepa = 'sepa'
}

/**
 * common address object
 */
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

export interface BraintreeError {
    code: number;
    msg: string;
}

/**
 * Check if all required fields are present
 * @param options provided options
 * @param checklist populate required fields
 */
export async function checkRequirements(options: BrainTreeOptions, checklist: BrainTreeOptions): Promise<boolean> {
    return new Promise((resolve, reject) => {
        let errs: Array<BraintreeError> = new Array();
        for (let field in checklist) {
            options[field] == undefined ? errs.push({ code: 1000, msg: `options.${field}.not_found` }) : "";
        }
        errs.length == 0 ? resolve(true) : reject(errs);
    })
}
