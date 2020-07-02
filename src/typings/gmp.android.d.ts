/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module braintreepayments {
		export module api {
			export class GooglePayment {
				public static class: java.lang.Class<com.braintreepayments.api.GooglePayment>;
				public static isReadyToPay(param0: com.braintreepayments.api.BraintreeFragment, param1: com.braintreepayments.api.interfaces.BraintreeResponseListener<java.lang.Boolean>): void;
				public static tokenize(param0: com.braintreepayments.api.BraintreeFragment, param1: com.google.android.gms.wallet.PaymentData): void;
				public static getTokenizationParameters(param0: com.braintreepayments.api.BraintreeFragment, param1: com.braintreepayments.api.interfaces.TokenizationParametersListener): void;
				public static isReadyToPay(param0: com.braintreepayments.api.BraintreeFragment, param1: com.braintreepayments.api.models.ReadyForGooglePaymentRequest, param2: com.braintreepayments.api.interfaces.BraintreeResponseListener<java.lang.Boolean>): void;
				public static requestPayment(param0: com.braintreepayments.api.BraintreeFragment, param1: com.braintreepayments.api.models.GooglePaymentRequest): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export class GooglePaymentActivity {
				public static class: java.lang.Class<com.braintreepayments.api.GooglePaymentActivity>;
				public static EXTRA_ENVIRONMENT: string;
				public static EXTRA_PAYMENT_DATA_REQUEST: string;
				public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public finish(): void;
				public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module googlepayment {
				export class BuildConfig {
					public static class: java.lang.Class<com.braintreepayments.api.googlepayment.BuildConfig>;
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class GooglePaymentCardNonce {
					public static class: java.lang.Class<com.braintreepayments.api.models.GooglePaymentCardNonce>;
					public static API_RESOURCE_KEY: string;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.braintreepayments.api.models.GooglePaymentCardNonce>;
					public fromJson(param0: org.json.JSONObject): void;
					public getTypeLabel(): string;
					public static fromJson(param0: string): com.braintreepayments.api.models.GooglePaymentCardNonce;
					public getLastFour(): string;
					public static postalAddressFromJson(param0: org.json.JSONObject): com.braintreepayments.api.models.PostalAddress;
					public getLastTwo(): string;
					public getShippingAddress(): com.braintreepayments.api.models.PostalAddress;
					public getBinData(): com.braintreepayments.api.models.BinData;
					public constructor();
					public isNetworkTokenized(): java.lang.Boolean;
					public getCardType(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getBillingAddress(): com.braintreepayments.api.models.PostalAddress;
					public getEmail(): string;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class GooglePaymentRequest {
					public static class: java.lang.Class<com.braintreepayments.api.models.GooglePaymentRequest>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.braintreepayments.api.models.GooglePaymentRequest>;
					public shippingAddressRequired(param0: boolean): com.braintreepayments.api.models.GooglePaymentRequest;
					public getGoogleMerchantName(): string;
					public isShippingAddressRequired(): java.lang.Boolean;
					public environment(param0: string): com.braintreepayments.api.models.GooglePaymentRequest;
					public shippingAddressRequirements(param0: com.google.android.gms.wallet.ShippingAddressRequirements): com.braintreepayments.api.models.GooglePaymentRequest;
					public allowPrepaidCards(param0: boolean): com.braintreepayments.api.models.GooglePaymentRequest;
					public billingAddressFormatToString(): string;
					public setAllowedAuthMethods(param0: string, param1: org.json.JSONArray): com.braintreepayments.api.models.GooglePaymentRequest;
					public setTokenizationSpecificationForType(param0: string, param1: org.json.JSONObject): com.braintreepayments.api.models.GooglePaymentRequest;
					public getShippingAddressRequirements(): com.google.android.gms.wallet.ShippingAddressRequirements;
					public isBillingAddressRequired(): java.lang.Boolean;
					public constructor();
					public paypalEnabled(param0: boolean): com.braintreepayments.api.models.GooglePaymentRequest;
					public isEmailRequired(): java.lang.Boolean;
					public setAllowedCardNetworks(param0: string, param1: org.json.JSONArray): com.braintreepayments.api.models.GooglePaymentRequest;
					public getAllowPrepaidCards(): java.lang.Boolean;
					public getEnvironment(): string;
					public transactionInfo(param0: com.google.android.gms.wallet.TransactionInfo): com.braintreepayments.api.models.GooglePaymentRequest;
					public getAllowedAuthMethodsForType(param0: string): org.json.JSONArray;
					public toJson(): string;
					public getBillingAddressFormat(): java.lang.Integer;
					public getGoogleMerchantId(): string;
					public describeContents(): number;
					public isPhoneNumberRequired(): java.lang.Boolean;
					public googleMerchantName(param0: string): com.braintreepayments.api.models.GooglePaymentRequest;
					public getAllowedCardNetworksForType(param0: string): org.json.JSONArray;
					public phoneNumberRequired(param0: boolean): com.braintreepayments.api.models.GooglePaymentRequest;
					public getAllowedPaymentMethod(param0: string): org.json.JSONObject;
					public getTransactionInfo(): com.google.android.gms.wallet.TransactionInfo;
					public getTokenizationSpecificationForType(param0: string): org.json.JSONObject;
					public constructor(param0: globalAndroid.os.Parcel);
					public googleMerchantId(param0: string): com.braintreepayments.api.models.GooglePaymentRequest;
					public billingAddressFormat(param0: number): com.braintreepayments.api.models.GooglePaymentRequest;
					public isPayPalEnabled(): java.lang.Boolean;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public emailRequired(param0: boolean): com.braintreepayments.api.models.GooglePaymentRequest;
					public billingAddressRequired(param0: boolean): com.braintreepayments.api.models.GooglePaymentRequest;
					public setAllowedPaymentMethod(param0: string, param1: org.json.JSONObject): com.braintreepayments.api.models.GooglePaymentRequest;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class PaymentMethodNonceFactory {
					public static class: java.lang.Class<com.braintreepayments.api.models.PaymentMethodNonceFactory>;
					public static fromString(param0: string): com.braintreepayments.api.models.PaymentMethodNonce;
					public static extractPaymentMethodToken(param0: string): org.json.JSONObject;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class ReadyForGooglePaymentRequest {
					public static class: java.lang.Class<com.braintreepayments.api.models.ReadyForGooglePaymentRequest>;
					public constructor();
					public isExistingPaymentMethodRequired(): boolean;
					public existingPaymentMethodRequired(param0: boolean): com.braintreepayments.api.models.ReadyForGooglePaymentRequest;
				}
			}
		}
	}
}

//Generics information:

