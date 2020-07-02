import { BrainTreeOptions } from ".";

declare const com;
const DropInRequest = com.braintreepayments.api.dropin.DropInRequest;
export function nativePay(dropInRequest: com.braintreepayments.api.dropin.DropInRequest, options: BrainTreeOptions): void {


    // const GooglePaymentRequest = com.braintreepayments.api.models.GooglePaymentRequest;
    // const TransactionInfo = com.google.android.gms.wallet.TransactionInfo;
    // const WalletConstants = com.google.android.gms.wallet.WalletConstants;

    // let googlePaymentRequest = new GooglePaymentRequest()
    //     .transactionInfo(TransactionInfo.newBuilder()
    //         .setTotalPrice(options.amount)
    //         .setTotalPriceStatus(WalletConstants.TOTAL_PRICE_STATUS_FINAL)
    //         .setCurrencyCode(options.currencyCode)
    //         .build())
    //     .billingAddressRequired(true);

    // dropInRequest.googlePaymentRequest(googlePaymentRequest);

}