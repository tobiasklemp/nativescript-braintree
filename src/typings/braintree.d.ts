/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module braintreepayments {
		export module api {
			export class AmericanExpress {
				public static class: java.lang.Class<com.braintreepayments.api.AmericanExpress>;
				public static getRewardsBalance(param0: com.braintreepayments.api.BraintreeFragment, param1: string, param2: string): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export class BraintreeBrowserSwitchActivity {
				public static class: java.lang.Class<com.braintreepayments.api.BraintreeBrowserSwitchActivity>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export class BraintreeFragment {
				public static class: java.lang.Class<com.braintreepayments.api.BraintreeFragment>;
				public static TAG: string;
				public static EXTRA_WAS_BROWSER_SWITCH_RESULT: string;
				public mHttpClient: com.braintreepayments.api.internal.BraintreeHttpClient;
				public mBraintreeApiClient: com.braintreepayments.api.internal.BraintreeApiHttpClient;
				public mGraphQLHttpClient: com.braintreepayments.api.internal.BraintreeGraphQLHttpClient;
				public mGoogleApiClient: com.google.android.gms.common.api.GoogleApiClient;
				public postCallback(param0: java.lang.Exception): void;
				public waitForConfiguration(param0: com.braintreepayments.api.interfaces.ConfigurationListener): void;
				public getApplicationContext(): globalAndroid.content.Context;
				public getGraphQLHttpClient(): com.braintreepayments.api.internal.BraintreeGraphQLHttpClient;
				public postCallback(param0: com.braintreepayments.api.models.BraintreePaymentResult): void;
				public getHttpClient(): com.braintreepayments.api.internal.BraintreeHttpClient;
				public onPause(): void;
				public postConfigurationCallback(): void;
				public constructor();
				public getIntegrationType(): string;
				public postUnionPayCallback(param0: string, param1: boolean): void;
				public setConfigurationErrorListener(param0: com.braintreepayments.api.interfaces.BraintreeResponseListener<java.lang.Exception>): void;
				public postCancelCallback(param0: number): void;
				public postCallback(param0: java.util.List<com.braintreepayments.api.models.PaymentMethodNonce>): void;
				public onBrowserSwitchResult(param0: number, param1: com.braintreepayments.browserswitch.BrowserSwitchFragment.BrowserSwitchResult, param2: globalAndroid.net.Uri): void;
				public getBraintreeApiHttpClient(): com.braintreepayments.api.internal.BraintreeApiHttpClient;
				public fetchConfiguration(): void;
				public getListeners(): java.util.List<com.braintreepayments.api.interfaces.BraintreeListener>;
				public onStop(): void;
				public addListener(param0: com.braintreepayments.api.interfaces.BraintreeListener): void;
				public getCachedPaymentMethodNonces(): java.util.List<com.braintreepayments.api.models.PaymentMethodNonce>;
				public postAmericanExpressCallback(param0: com.braintreepayments.api.models.AmericanExpressRewardsBalance): void;
				public postOrQueueCallback(param0: com.braintreepayments.api.interfaces.QueuedCallback): void;
				public getAuthorization(): com.braintreepayments.api.models.Authorization;
				public onResume(): void;
				public getReturnUrlScheme(): string;
				public static newInstance(param0: androidx.fragment.app.Fragment, param1: string): com.braintreepayments.api.BraintreeFragment;
				public postCallback(param0: com.braintreepayments.api.models.PaymentMethodNonce): void;
				public getConfiguration(): com.braintreepayments.api.models.Configuration;
				public onAttach(param0: globalAndroid.app.Activity): void;
				public static newInstance(param0: androidx.appcompat.app.AppCompatActivity, param1: string): com.braintreepayments.api.BraintreeFragment;
				public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
				public flushCallbacks(): void;
				public removeListener(param0: com.braintreepayments.api.interfaces.BraintreeListener): void;
				public postCallback(param0: com.braintreepayments.api.models.UnionPayCapabilities): void;
				public getGoogleApiClient(): com.google.android.gms.common.api.GoogleApiClient;
				public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
				public setConfiguration(param0: com.braintreepayments.api.models.Configuration): void;
				public onAttach(param0: globalAndroid.content.Context): void;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public hasFetchedPaymentMethodNonces(): boolean;
				public getGoogleApiClient(param0: com.braintreepayments.api.interfaces.BraintreeResponseListener<com.google.android.gms.common.api.GoogleApiClient>): void;
				public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
				public postPaymentMethodDeletedCallback(param0: com.braintreepayments.api.models.PaymentMethodNonce): void;
				public sendAnalyticsEvent(param0: string): void;
				public onDestroy(): void;
				public onDetach(): void;
				public getSessionId(): string;
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export class BuildConfig {
				public static class: java.lang.Class<com.braintreepayments.api.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public static DEVELOPMENT_URL: string;
				public static RUN_ALL_TESTS: boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export class Card {
				public static class: java.lang.Class<com.braintreepayments.api.Card>;
				public static tokenize(param0: com.braintreepayments.api.BraintreeFragment, param1: com.braintreepayments.api.models.CardBuilder): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export class ConfigurationManager {
				public static class: java.lang.Class<com.braintreepayments.api.ConfigurationManager>;
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export class CrashReporter {
				public static class: java.lang.Class<com.braintreepayments.api.CrashReporter>;
				public uncaughtException(param0: java.lang.Thread, param1: java.lang.Throwable): void;
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export class DataCollector {
				public static class: java.lang.Class<com.braintreepayments.api.DataCollector>;
				public static collectDeviceData(param0: com.braintreepayments.api.BraintreeFragment, param1: string, param2: com.braintreepayments.api.interfaces.BraintreeResponseListener<string>): void;
				public static collectPayPalDeviceData(param0: com.braintreepayments.api.BraintreeFragment, param1: com.braintreepayments.api.interfaces.BraintreeResponseListener<string>): void;
				public static collectDeviceData(param0: com.braintreepayments.api.BraintreeFragment, param1: com.braintreepayments.api.interfaces.BraintreeResponseListener<string>): void;
				public static getPayPalClientMetadataId(param0: globalAndroid.content.Context): string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export class LocalPayment {
				public static class: java.lang.Class<com.braintreepayments.api.LocalPayment>;
				public static startPayment(param0: com.braintreepayments.api.BraintreeFragment, param1: com.braintreepayments.api.models.LocalPaymentRequest, param2: com.braintreepayments.api.interfaces.BraintreeResponseListener<com.braintreepayments.api.models.LocalPaymentRequest>): void;
				public static approvePayment(param0: com.braintreepayments.api.BraintreeFragment, param1: com.braintreepayments.api.models.LocalPaymentRequest): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export class PayPal {
				public static class: java.lang.Class<com.braintreepayments.api.PayPal>;
				public static requestBillingAgreement(param0: com.braintreepayments.api.BraintreeFragment, param1: com.braintreepayments.api.models.PayPalRequest): void;
				public static requestBillingAgreement(param0: com.braintreepayments.api.BraintreeFragment, param1: com.braintreepayments.api.models.PayPalRequest, param2: com.braintreepayments.api.interfaces.PayPalApprovalHandler): void;
				public static requestOneTimePayment(param0: com.braintreepayments.api.BraintreeFragment, param1: com.braintreepayments.api.models.PayPalRequest): void;
				public static onActivityResult(param0: com.braintreepayments.api.BraintreeFragment, param1: number, param2: globalAndroid.content.Intent): void;
				public static requestOneTimePayment(param0: com.braintreepayments.api.BraintreeFragment, param1: com.braintreepayments.api.models.PayPalRequest, param2: com.braintreepayments.api.interfaces.PayPalApprovalHandler): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export class PaymentMethod {
				public static class: java.lang.Class<com.braintreepayments.api.PaymentMethod>;
				public static SINGLE_USE_TOKEN_ID: string;
				public static VARIABLES: string;
				public static INPUT: string;
				public static CLIENT_SDK_META_DATA: string;
				public static getPaymentMethodNonces(param0: com.braintreepayments.api.BraintreeFragment): void;
				public static deletePaymentMethod(param0: com.braintreepayments.api.BraintreeFragment, param1: com.braintreepayments.api.models.PaymentMethodNonce): void;
				public static getPaymentMethodNonces(param0: com.braintreepayments.api.BraintreeFragment, param1: boolean): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export class PreferredPaymentMethods {
				public static class: java.lang.Class<com.braintreepayments.api.PreferredPaymentMethods>;
				public static fetchPreferredPaymentMethods(param0: com.braintreepayments.api.BraintreeFragment, param1: com.braintreepayments.api.interfaces.PreferredPaymentMethodsListener): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export class ThreeDSecure {
				public static class: java.lang.Class<com.braintreepayments.api.ThreeDSecure>;
				public static performVerification(param0: com.braintreepayments.api.BraintreeFragment, param1: com.braintreepayments.api.models.ThreeDSecureRequest): void;
				public static prepareLookup(param0: com.braintreepayments.api.BraintreeFragment, param1: com.braintreepayments.api.models.ThreeDSecureRequest, param2: com.braintreepayments.api.interfaces.ThreeDSecurePrepareLookupListener): void;
				public static initializeChallengeWithLookupResponse(param0: com.braintreepayments.api.BraintreeFragment, param1: string): void;
				public static initializeChallengeWithLookupResponse(param0: com.braintreepayments.api.BraintreeFragment, param1: com.braintreepayments.api.models.ThreeDSecureRequest, param2: string): void;
				public static onActivityResult(param0: com.braintreepayments.api.BraintreeFragment, param1: number, param2: globalAndroid.content.Intent): void;
				/** @deprecated */
				public static performVerification(param0: com.braintreepayments.api.BraintreeFragment, param1: com.braintreepayments.api.models.CardBuilder, param2: com.braintreepayments.api.models.ThreeDSecureRequest): void;
				/** @deprecated */
				public static performVerification(param0: com.braintreepayments.api.BraintreeFragment, param1: string, param2: string): void;
				public static continuePerformVerification(param0: com.braintreepayments.api.BraintreeFragment, param1: com.braintreepayments.api.models.ThreeDSecureRequest, param2: com.braintreepayments.api.models.ThreeDSecureLookup): void;
				/** @deprecated */
				public static performVerification(param0: com.braintreepayments.api.BraintreeFragment, param1: com.braintreepayments.api.models.CardBuilder, param2: string): void;
				public constructor();
				public static performVerification(param0: com.braintreepayments.api.BraintreeFragment, param1: com.braintreepayments.api.models.ThreeDSecureRequest, param2: com.braintreepayments.api.interfaces.ThreeDSecureLookupListener): void;
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export class ThreeDSecureActivity {
				public static class: java.lang.Class<com.braintreepayments.api.ThreeDSecureActivity>;
				public onValidated(param0: globalAndroid.content.Context, param1: com.cardinalcommerce.cardinalmobilesdk.models.ValidateResponse, param2: string): void;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export class TokenizationClient {
				public static class: java.lang.Class<com.braintreepayments.api.TokenizationClient>;
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export class UnionPay {
				public static class: java.lang.Class<com.braintreepayments.api.UnionPay>;
				public static fetchCapabilities(param0: com.braintreepayments.api.BraintreeFragment, param1: string): void;
				public static enroll(param0: com.braintreepayments.api.BraintreeFragment, param1: com.braintreepayments.api.models.UnionPayCardBuilder): void;
				public static tokenize(param0: com.braintreepayments.api.BraintreeFragment, param1: com.braintreepayments.api.models.UnionPayCardBuilder): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export class Venmo {
				public static class: java.lang.Class<com.braintreepayments.api.Venmo>;
				public static authorizeAccount(param0: com.braintreepayments.api.BraintreeFragment, param1: boolean): void;
				public static isVenmoInstalled(param0: globalAndroid.content.Context): boolean;
				public static openVenmoAppPageInGooglePlay(param0: com.braintreepayments.api.BraintreeFragment): void;
				public static authorizeAccount(param0: com.braintreepayments.api.BraintreeFragment): void;
				public static authorizeAccount(param0: com.braintreepayments.api.BraintreeFragment, param1: boolean, param2: string): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export class VisaCheckoutFacade {
				public static class: java.lang.Class<com.braintreepayments.api.VisaCheckoutFacade>;
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module annotations {
				export class Beta {
					public static class: java.lang.Class<com.braintreepayments.api.annotations.Beta>;
					/**
					 * Constructs a new instance of the com.braintreepayments.api.annotations.Beta interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module exceptions {
				export class AppSwitchNotAvailableException extends com.braintreepayments.api.exceptions.BraintreeException {
					public static class: java.lang.Class<com.braintreepayments.api.exceptions.AppSwitchNotAvailableException>;
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string);
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module exceptions {
				export class BraintreeApiError {
					public static class: java.lang.Class<com.braintreepayments.api.exceptions.BraintreeApiError>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.braintreepayments.api.exceptions.BraintreeApiError>;
					public constructor(param0: globalAndroid.os.Parcel);
					public getIn(): string;
					public toString(): string;
					public getCode(): string;
					public constructor();
					public static fromJsonArray(param0: org.json.JSONArray): java.util.List<com.braintreepayments.api.exceptions.BraintreeApiError>;
					public describeContents(): number;
					public getMessage(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getAt(): string;
					public static fromJson(param0: org.json.JSONObject): com.braintreepayments.api.exceptions.BraintreeApiError;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module exceptions {
				export class BraintreeApiErrorResponse {
					public static class: java.lang.Class<com.braintreepayments.api.exceptions.BraintreeApiErrorResponse>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.braintreepayments.api.exceptions.BraintreeApiErrorResponse>;
					public getErrors(): java.util.List<com.braintreepayments.api.exceptions.BraintreeApiError>;
					public getErrorResponse(): string;
					public constructor(param0: globalAndroid.os.Parcel);
					public constructor(param0: string);
					public describeContents(): number;
					public getMessage(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module exceptions {
				export class BraintreeError {
					public static class: java.lang.Class<com.braintreepayments.api.exceptions.BraintreeError>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.braintreepayments.api.exceptions.BraintreeError>;
					public static fromJson(param0: org.json.JSONObject): com.braintreepayments.api.exceptions.BraintreeError;
					public constructor(param0: globalAndroid.os.Parcel);
					public toString(): string;
					public constructor();
					public errorFor(param0: string): com.braintreepayments.api.exceptions.BraintreeError;
					public describeContents(): number;
					public getMessage(): string;
					public getField(): string;
					public getFieldErrors(): java.util.List<com.braintreepayments.api.exceptions.BraintreeError>;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public static fromJsonArray(param0: org.json.JSONArray): java.util.List<com.braintreepayments.api.exceptions.BraintreeError>;
					public static fromGraphQLJsonArray(param0: org.json.JSONArray): java.util.List<com.braintreepayments.api.exceptions.BraintreeError>;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module exceptions {
				export class BraintreeException {
					public static class: java.lang.Class<com.braintreepayments.api.exceptions.BraintreeException>;
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string);
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module exceptions {
				export class BrowserSwitchException extends com.braintreepayments.api.exceptions.BraintreeException {
					public static class: java.lang.Class<com.braintreepayments.api.exceptions.BrowserSwitchException>;
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string);
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module exceptions {
				export class ConfigurationException extends com.braintreepayments.api.exceptions.BraintreeException {
					public static class: java.lang.Class<com.braintreepayments.api.exceptions.ConfigurationException>;
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string);
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module exceptions {
				export class ErrorWithResponse {
					public static class: java.lang.Class<com.braintreepayments.api.exceptions.ErrorWithResponse>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.braintreepayments.api.exceptions.ErrorWithResponse>;
					public getErrorResponse(): string;
					public constructor(param0: globalAndroid.os.Parcel);
					public getStatusCode(): number;
					public toString(): string;
					public static fromGraphQLJson(param0: string): com.braintreepayments.api.exceptions.ErrorWithResponse;
					public errorFor(param0: string): com.braintreepayments.api.exceptions.BraintreeError;
					public describeContents(): number;
					public constructor(param0: number, param1: string);
					public getMessage(): string;
					public getFieldErrors(): java.util.List<com.braintreepayments.api.exceptions.BraintreeError>;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public static fromJson(param0: string): com.braintreepayments.api.exceptions.ErrorWithResponse;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module exceptions {
				export class GoogleApiClientException {
					public static class: java.lang.Class<com.braintreepayments.api.exceptions.GoogleApiClientException>;
					public constructor(param0: com.braintreepayments.api.exceptions.GoogleApiClientException.ErrorType, param1: number);
					public toString(): string;
					public getErrorCode(): number;
					public getMessage(): string;
					public getErrorType(): com.braintreepayments.api.exceptions.GoogleApiClientException.ErrorType;
				}
				export module GoogleApiClientException {
					export class ErrorType {
						public static class: java.lang.Class<com.braintreepayments.api.exceptions.GoogleApiClientException.ErrorType>;
						public static NotAttachedToActivity: com.braintreepayments.api.exceptions.GoogleApiClientException.ErrorType;
						public static ConnectionSuspended: com.braintreepayments.api.exceptions.GoogleApiClientException.ErrorType;
						public static ConnectionFailed: com.braintreepayments.api.exceptions.GoogleApiClientException.ErrorType;
						public static values(): native.Array<com.braintreepayments.api.exceptions.GoogleApiClientException.ErrorType>;
						public static valueOf(param0: string): com.braintreepayments.api.exceptions.GoogleApiClientException.ErrorType;
					}
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module exceptions {
				export class GooglePaymentException extends com.braintreepayments.api.exceptions.BraintreeException {
					public static class: java.lang.Class<com.braintreepayments.api.exceptions.GooglePaymentException>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.braintreepayments.api.exceptions.GooglePaymentException>;
					public constructor(param0: globalAndroid.os.Parcel);
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string);
					public constructor();
					public constructor(param0: string, param1: com.google.android.gms.common.api.Status);
					public getStatus(): com.google.android.gms.common.api.Status;
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module exceptions {
				export class InvalidArgumentException {
					public static class: java.lang.Class<com.braintreepayments.api.exceptions.InvalidArgumentException>;
					public constructor(param0: string);
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module exceptions {
				export class PaymentMethodDeleteException {
					public static class: java.lang.Class<com.braintreepayments.api.exceptions.PaymentMethodDeleteException>;
					public constructor(param0: com.braintreepayments.api.models.PaymentMethodNonce, param1: java.lang.Exception);
					public getPaymentMethodNonce(): com.braintreepayments.api.models.PaymentMethodNonce;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module exceptions {
				export class PaymentMethodNotAvailableException extends com.braintreepayments.api.exceptions.BraintreeException {
					public static class: java.lang.Class<com.braintreepayments.api.exceptions.PaymentMethodNotAvailableException>;
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string);
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module exceptions {
				export class VisaCheckoutNotAvailableException extends com.braintreepayments.api.exceptions.BraintreeException {
					public static class: java.lang.Class<com.braintreepayments.api.exceptions.VisaCheckoutNotAvailableException>;
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string);
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module interfaces {
				export class AmericanExpressListener extends com.braintreepayments.api.interfaces.BraintreeListener {
					public static class: java.lang.Class<com.braintreepayments.api.interfaces.AmericanExpressListener>;
					/**
					 * Constructs a new instance of the com.braintreepayments.api.interfaces.AmericanExpressListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onRewardsBalanceFetched(param0: com.braintreepayments.api.models.AmericanExpressRewardsBalance): void;
					});
					public constructor();
					public onRewardsBalanceFetched(param0: com.braintreepayments.api.models.AmericanExpressRewardsBalance): void;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module interfaces {
				export class BraintreeCancelListener extends com.braintreepayments.api.interfaces.BraintreeListener {
					public static class: java.lang.Class<com.braintreepayments.api.interfaces.BraintreeCancelListener>;
					/**
					 * Constructs a new instance of the com.braintreepayments.api.interfaces.BraintreeCancelListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCancel(param0: number): void;
					});
					public constructor();
					public onCancel(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module interfaces {
				export class BraintreeErrorListener extends com.braintreepayments.api.interfaces.BraintreeListener {
					public static class: java.lang.Class<com.braintreepayments.api.interfaces.BraintreeErrorListener>;
					/**
					 * Constructs a new instance of the com.braintreepayments.api.interfaces.BraintreeErrorListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onError(param0: java.lang.Exception): void;
					});
					public constructor();
					public onError(param0: java.lang.Exception): void;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module interfaces {
				export class BraintreeListener {
					public static class: java.lang.Class<com.braintreepayments.api.interfaces.BraintreeListener>;
					/**
					 * Constructs a new instance of the com.braintreepayments.api.interfaces.BraintreeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module interfaces {
				export class BraintreePaymentResultListener extends com.braintreepayments.api.interfaces.BraintreeListener {
					public static class: java.lang.Class<com.braintreepayments.api.interfaces.BraintreePaymentResultListener>;
					/**
					 * Constructs a new instance of the com.braintreepayments.api.interfaces.BraintreePaymentResultListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onBraintreePaymentResult(param0: com.braintreepayments.api.models.BraintreePaymentResult): void;
					});
					public constructor();
					public onBraintreePaymentResult(param0: com.braintreepayments.api.models.BraintreePaymentResult): void;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module interfaces {
				export class BraintreeResponseListener<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.braintreepayments.api.interfaces.BraintreeResponseListener<any>>;
					/**
					 * Constructs a new instance of the com.braintreepayments.api.interfaces.BraintreeResponseListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResponse(param0: T): void;
					});
					public constructor();
					public onResponse(param0: T): void;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module interfaces {
				export class ConfigurationListener extends com.braintreepayments.api.interfaces.BraintreeListener {
					public static class: java.lang.Class<com.braintreepayments.api.interfaces.ConfigurationListener>;
					/**
					 * Constructs a new instance of the com.braintreepayments.api.interfaces.ConfigurationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onConfigurationFetched(param0: com.braintreepayments.api.models.Configuration): void;
					});
					public constructor();
					public onConfigurationFetched(param0: com.braintreepayments.api.models.Configuration): void;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module interfaces {
				export class PayPalApprovalCallback {
					public static class: java.lang.Class<com.braintreepayments.api.interfaces.PayPalApprovalCallback>;
					/**
					 * Constructs a new instance of the com.braintreepayments.api.interfaces.PayPalApprovalCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onComplete(param0: globalAndroid.content.Intent): void;
						onCancel(): void;
					});
					public constructor();
					public onComplete(param0: globalAndroid.content.Intent): void;
					public onCancel(): void;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module interfaces {
				export class PayPalApprovalHandler {
					public static class: java.lang.Class<com.braintreepayments.api.interfaces.PayPalApprovalHandler>;
					/**
					 * Constructs a new instance of the com.braintreepayments.api.interfaces.PayPalApprovalHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						handleApproval(param0: com.paypal.android.sdk.onetouch.core.Request, param1: com.braintreepayments.api.interfaces.PayPalApprovalCallback): void;
					});
					public constructor();
					public handleApproval(param0: com.paypal.android.sdk.onetouch.core.Request, param1: com.braintreepayments.api.interfaces.PayPalApprovalCallback): void;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module interfaces {
				export class PaymentMethodNonceCallback {
					public static class: java.lang.Class<com.braintreepayments.api.interfaces.PaymentMethodNonceCallback>;
					/**
					 * Constructs a new instance of the com.braintreepayments.api.interfaces.PaymentMethodNonceCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						success(param0: com.braintreepayments.api.models.PaymentMethodNonce): void;
						failure(param0: java.lang.Exception): void;
					});
					public constructor();
					public failure(param0: java.lang.Exception): void;
					public success(param0: com.braintreepayments.api.models.PaymentMethodNonce): void;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module interfaces {
				export class PaymentMethodNonceCreatedListener extends com.braintreepayments.api.interfaces.BraintreeListener {
					public static class: java.lang.Class<com.braintreepayments.api.interfaces.PaymentMethodNonceCreatedListener>;
					/**
					 * Constructs a new instance of the com.braintreepayments.api.interfaces.PaymentMethodNonceCreatedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onPaymentMethodNonceCreated(param0: com.braintreepayments.api.models.PaymentMethodNonce): void;
					});
					public constructor();
					public onPaymentMethodNonceCreated(param0: com.braintreepayments.api.models.PaymentMethodNonce): void;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module interfaces {
				export class PaymentMethodNonceDeletedListener extends com.braintreepayments.api.interfaces.BraintreeListener {
					public static class: java.lang.Class<com.braintreepayments.api.interfaces.PaymentMethodNonceDeletedListener>;
					/**
					 * Constructs a new instance of the com.braintreepayments.api.interfaces.PaymentMethodNonceDeletedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onPaymentMethodNonceDeleted(param0: com.braintreepayments.api.models.PaymentMethodNonce): void;
					});
					public constructor();
					public onPaymentMethodNonceDeleted(param0: com.braintreepayments.api.models.PaymentMethodNonce): void;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module interfaces {
				export class PaymentMethodNoncesUpdatedListener extends com.braintreepayments.api.interfaces.BraintreeListener {
					public static class: java.lang.Class<com.braintreepayments.api.interfaces.PaymentMethodNoncesUpdatedListener>;
					/**
					 * Constructs a new instance of the com.braintreepayments.api.interfaces.PaymentMethodNoncesUpdatedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onPaymentMethodNoncesUpdated(param0: java.util.List<com.braintreepayments.api.models.PaymentMethodNonce>): void;
					});
					public constructor();
					public onPaymentMethodNoncesUpdated(param0: java.util.List<com.braintreepayments.api.models.PaymentMethodNonce>): void;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module interfaces {
				export class PreferredPaymentMethodsListener extends com.braintreepayments.api.interfaces.BraintreeListener {
					public static class: java.lang.Class<com.braintreepayments.api.interfaces.PreferredPaymentMethodsListener>;
					/**
					 * Constructs a new instance of the com.braintreepayments.api.interfaces.PreferredPaymentMethodsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onPreferredPaymentMethodsFetched(param0: com.braintreepayments.api.models.PreferredPaymentMethodsResult): void;
					});
					public constructor();
					public onPreferredPaymentMethodsFetched(param0: com.braintreepayments.api.models.PreferredPaymentMethodsResult): void;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module interfaces {
				export class QueuedCallback {
					public static class: java.lang.Class<com.braintreepayments.api.interfaces.QueuedCallback>;
					/**
					 * Constructs a new instance of the com.braintreepayments.api.interfaces.QueuedCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						shouldRun(): boolean;
						run(): void;
					});
					public constructor();
					public shouldRun(): boolean;
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module interfaces {
				export class ThreeDSecureLookupListener {
					public static class: java.lang.Class<com.braintreepayments.api.interfaces.ThreeDSecureLookupListener>;
					/**
					 * Constructs a new instance of the com.braintreepayments.api.interfaces.ThreeDSecureLookupListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onLookupComplete(param0: com.braintreepayments.api.models.ThreeDSecureRequest, param1: com.braintreepayments.api.models.ThreeDSecureLookup): void;
					});
					public constructor();
					public onLookupComplete(param0: com.braintreepayments.api.models.ThreeDSecureRequest, param1: com.braintreepayments.api.models.ThreeDSecureLookup): void;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module interfaces {
				export class ThreeDSecurePrepareLookupListener {
					public static class: java.lang.Class<com.braintreepayments.api.interfaces.ThreeDSecurePrepareLookupListener>;
					/**
					 * Constructs a new instance of the com.braintreepayments.api.interfaces.ThreeDSecurePrepareLookupListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onPrepareLookupComplete(param0: com.braintreepayments.api.models.ThreeDSecureRequest, param1: string): void;
					});
					public constructor();
					public onPrepareLookupComplete(param0: com.braintreepayments.api.models.ThreeDSecureRequest, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module interfaces {
				export class TokenizationParametersListener {
					public static class: java.lang.Class<com.braintreepayments.api.interfaces.TokenizationParametersListener>;
					/**
					 * Constructs a new instance of the com.braintreepayments.api.interfaces.TokenizationParametersListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResult(param0: com.google.android.gms.wallet.PaymentMethodTokenizationParameters, param1: java.util.Collection<java.lang.Integer>): void;
					});
					public constructor();
					public onResult(param0: com.google.android.gms.wallet.PaymentMethodTokenizationParameters, param1: java.util.Collection<java.lang.Integer>): void;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module interfaces {
				export class UnionPayListener extends com.braintreepayments.api.interfaces.BraintreeListener {
					public static class: java.lang.Class<com.braintreepayments.api.interfaces.UnionPayListener>;
					/**
					 * Constructs a new instance of the com.braintreepayments.api.interfaces.UnionPayListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCapabilitiesFetched(param0: com.braintreepayments.api.models.UnionPayCapabilities): void;
						onSmsCodeSent(param0: string, param1: boolean): void;
					});
					public constructor();
					public onCapabilitiesFetched(param0: com.braintreepayments.api.models.UnionPayCapabilities): void;
					public onSmsCodeSent(param0: string, param1: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module internal {
				export class AnalyticsDatabase {
					public static class: java.lang.Class<com.braintreepayments.api.internal.AnalyticsDatabase>;
					public mTaskSet: java.util.Set<globalAndroid.os.AsyncTask>;
					public constructor(param0: globalAndroid.content.Context, param1: string, param2: globalAndroid.database.sqlite.SQLiteDatabase.CursorFactory, param3: number);
					public addEvent(param0: com.braintreepayments.api.internal.AnalyticsEvent): void;
					public getPendingRequests(): java.util.List<java.util.List<com.braintreepayments.api.internal.AnalyticsEvent>>;
					public constructor(param0: globalAndroid.content.Context, param1: string, param2: globalAndroid.database.sqlite.SQLiteDatabase.CursorFactory, param3: number, param4: globalAndroid.database.DatabaseErrorHandler);
					public onUpgrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
					public static getInstance(param0: globalAndroid.content.Context): com.braintreepayments.api.internal.AnalyticsDatabase;
					public onCreate(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
					public removeEvents(param0: java.util.List<com.braintreepayments.api.internal.AnalyticsEvent>): void;
				}
				export module AnalyticsDatabase {
					export class DatabaseTask extends globalAndroid.os.AsyncTask<java.lang.Void,java.lang.Void,java.lang.Void> {
						public static class: java.lang.Class<com.braintreepayments.api.internal.AnalyticsDatabase.DatabaseTask>;
						public onPostExecute(param0: java.lang.Void): void;
						public constructor(param0: java.lang.Runnable);
						public doInBackground(param0: native.Array<java.lang.Void>): java.lang.Void;
					}
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module internal {
				export class AnalyticsEvent {
					public static class: java.lang.Class<com.braintreepayments.api.internal.AnalyticsEvent>;
					public constructor();
					public constructor(param0: globalAndroid.content.Context, param1: string, param2: string, param3: string);
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module internal {
				export class AnalyticsIntentService {
					public static class: java.lang.Class<com.braintreepayments.api.internal.AnalyticsIntentService>;
					public static EXTRA_AUTHORIZATION: string;
					public static EXTRA_CONFIGURATION: string;
					public constructor();
					public onHandleIntent(param0: globalAndroid.content.Intent): void;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module internal {
				export class AnalyticsSender {
					public static class: java.lang.Class<com.braintreepayments.api.internal.AnalyticsSender>;
					public static send(param0: globalAndroid.content.Context, param1: com.braintreepayments.api.models.Authorization, param2: com.braintreepayments.api.internal.BraintreeHttpClient, param3: string, param4: boolean): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module internal {
				export class BraintreeApiCertificate {
					public static class: java.lang.Class<com.braintreepayments.api.internal.BraintreeApiCertificate>;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module internal {
				export class BraintreeApiHttpClient {
					public static class: java.lang.Class<com.braintreepayments.api.internal.BraintreeApiHttpClient>;
					public static API_VERSION_2016_10_07: string;
					public constructor(param0: string, param1: string);
					public parseResponse(param0: java.net.HttpURLConnection): string;
					public init(param0: string): java.net.HttpURLConnection;
					public constructor(param0: string, param1: string, param2: string);
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module internal {
				export class BraintreeGatewayCertificate {
					public static class: java.lang.Class<com.braintreepayments.api.internal.BraintreeGatewayCertificate>;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module internal {
				export class BraintreeGraphQLCertificate {
					public static class: java.lang.Class<com.braintreepayments.api.internal.BraintreeGraphQLCertificate>;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module internal {
				export class BraintreeGraphQLHttpClient extends com.braintreepayments.api.internal.BraintreeApiHttpClient {
					public static class: java.lang.Class<com.braintreepayments.api.internal.BraintreeGraphQLHttpClient>;
					public constructor(param0: string, param1: string);
					public parseResponse(param0: java.net.HttpURLConnection): string;
					public post(param0: string, param1: com.braintreepayments.api.interfaces.HttpResponseCallback): void;
					public constructor(param0: string, param1: string, param2: string);
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module internal {
				export class BraintreeHttpClient {
					public static class: java.lang.Class<com.braintreepayments.api.internal.BraintreeHttpClient>;
					public get(param0: string, param1: com.braintreepayments.api.interfaces.HttpResponseCallback): void;
					public parseResponse(param0: java.net.HttpURLConnection): string;
					public static getUserAgent(): string;
					public init(param0: string): java.net.HttpURLConnection;
					public post(param0: string, param1: string): string;
					public constructor(param0: com.braintreepayments.api.models.Authorization);
					public post(param0: string, param1: string, param2: com.braintreepayments.api.interfaces.HttpResponseCallback): void;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module internal {
				export class GraphQLConstants {
					public static class: java.lang.Class<com.braintreepayments.api.internal.GraphQLConstants>;
					public static CERTIFICATE: string;
					public constructor();
				}
				export module GraphQLConstants {
					export class ErrorMessages {
						public static class: java.lang.Class<com.braintreepayments.api.internal.GraphQLConstants.ErrorMessages>;
						public static UNKNOWN: string;
						public static USER: string;
						public constructor(param0: com.braintreepayments.api.internal.GraphQLConstants);
					}
					export class ErrorTypes {
						public static class: java.lang.Class<com.braintreepayments.api.internal.GraphQLConstants.ErrorTypes>;
						public static USER: string;
						public constructor(param0: com.braintreepayments.api.internal.GraphQLConstants);
					}
					export class Features {
						public static class: java.lang.Class<com.braintreepayments.api.internal.GraphQLConstants.Features>;
						public static TOKENIZE_CREDIT_CARDS: string;
						public constructor(param0: com.braintreepayments.api.internal.GraphQLConstants);
					}
					export class Headers {
						public static class: java.lang.Class<com.braintreepayments.api.internal.GraphQLConstants.Headers>;
						public static API_VERSION: string;
						public constructor(param0: com.braintreepayments.api.internal.GraphQLConstants);
					}
					export class Keys {
						public static class: java.lang.Class<com.braintreepayments.api.internal.GraphQLConstants.Keys>;
						public static QUERY: string;
						public static INPUT: string;
						public static VARIABLES: string;
						public static ERRORS: string;
						public static MESSAGE: string;
						public static ERROR_TYPE: string;
						public static EXTENSIONS: string;
						public static INPUT_PATH: string;
						public static LEGACY_CODE: string;
						public static URL: string;
						public static FEATURES: string;
						public static OPERATION_NAME: string;
						public constructor(param0: com.braintreepayments.api.internal.GraphQLConstants);
					}
					export class LegacyErrorCodes {
						public static class: java.lang.Class<com.braintreepayments.api.internal.GraphQLConstants.LegacyErrorCodes>;
						public static VALIDATION_NOT_ALLOWED: string;
						public constructor(param0: com.braintreepayments.api.internal.GraphQLConstants);
					}
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module internal {
				export class GraphQLQueryHelper {
					public static class: java.lang.Class<com.braintreepayments.api.internal.GraphQLQueryHelper>;
					public static getQuery(param0: globalAndroid.content.Context, param1: number): string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module internal {
				export class IntegrationType {
					public static class: java.lang.Class<com.braintreepayments.api.internal.IntegrationType>;
					public constructor();
					public static get(param0: globalAndroid.content.Context): string;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module internal {
				export class StreamHelper {
					public static class: java.lang.Class<com.braintreepayments.api.internal.StreamHelper>;
					public static getString(param0: java.io.InputStream): string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module internal {
				export class ThreeDSecureV1BrowserSwitchHelper {
					public static class: java.lang.Class<com.braintreepayments.api.internal.ThreeDSecureV1BrowserSwitchHelper>;
					public static getUrl(param0: string, param1: string, param2: com.braintreepayments.api.models.ThreeDSecureRequest, param3: com.braintreepayments.api.models.ThreeDSecureLookup): string;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module internal {
				export class UUIDHelper {
					public static class: java.lang.Class<com.braintreepayments.api.internal.UUIDHelper>;
					public constructor();
					public static getFormattedUUID(): string;
					public static getPersistentUUID(param0: globalAndroid.content.Context): string;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module internal {
				export class VisaCheckoutConstants {
					public static class: java.lang.Class<com.braintreepayments.api.internal.VisaCheckoutConstants>;
					public static VISA_CHECKOUT_CLASSNAME: string;
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
				export class AmericanExpressRewardsBalance {
					public static class: java.lang.Class<com.braintreepayments.api.models.AmericanExpressRewardsBalance>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.braintreepayments.api.models.AmericanExpressRewardsBalance>;
					public getErrorMessage(): string;
					public getRewardsAmount(): string;
					public getCurrencyAmount(): string;
					public getRequestId(): string;
					public constructor();
					public getRewardsUnit(): string;
					public getCurrencyIsoCode(): string;
					public describeContents(): number;
					public getErrorCode(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getConversionRate(): string;
					public static fromJson(param0: string): com.braintreepayments.api.models.AmericanExpressRewardsBalance;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class AnalyticsConfiguration {
					public static class: java.lang.Class<com.braintreepayments.api.models.AnalyticsConfiguration>;
					public getUrl(): string;
					public constructor();
					public static fromJson(param0: org.json.JSONObject): com.braintreepayments.api.models.AnalyticsConfiguration;
					public toJson(): org.json.JSONObject;
					public isEnabled(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class AuthenticationInsight {
					public static class: java.lang.Class<com.braintreepayments.api.models.AuthenticationInsight>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.braintreepayments.api.models.AuthenticationInsight>;
					public constructor();
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getRegulationEnvironment(): string;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export abstract class Authorization {
					public static class: java.lang.Class<com.braintreepayments.api.models.Authorization>;
					public static isTokenizationKey(param0: string): boolean;
					public constructor(param0: globalAndroid.os.Parcel);
					public toString(): string;
					public static fromString(param0: string): com.braintreepayments.api.models.Authorization;
					public constructor(param0: string);
					public getBearer(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getConfigUrl(): string;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export abstract class BaseCardBuilder<T>  extends com.braintreepayments.api.models.PaymentMethodBuilder<any> implements globalAndroid.os.Parcelable  {
					public static class: java.lang.Class<com.braintreepayments.api.models.BaseCardBuilder<any>>;
					public locality(param0: string): any;
					public build(): string;
					public build(param0: org.json.JSONObject, param1: org.json.JSONObject): void;
					public cardNumber(param0: string): any;
					public expirationDate(param0: string): any;
					public describeContents(): number;
					public expirationYear(param0: string): any;
					public region(param0: string): any;
					public getApiPath(): string;
					public constructor(param0: globalAndroid.os.Parcel);
					public company(param0: string): any;
					public postalCode(param0: string): any;
					public cvv(param0: string): any;
					public cardholderName(param0: string): any;
					public streetAddress(param0: string): any;
					public constructor();
					public lastName(param0: string): any;
					public expirationMonth(param0: string): any;
					public getResponsePaymentMethodType(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public countryCode(param0: string): any;
					public extendedAddress(param0: string): any;
					public firstName(param0: string): any;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class BinData {
					public static class: java.lang.Class<com.braintreepayments.api.models.BinData>;
					public static BIN_DATA_KEY: string;
					public static YES: string;
					public static NO: string;
					public static UNKNOWN: string;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.braintreepayments.api.models.BinData>;
					public getPayroll(): string;
					public getPrepaid(): string;
					public describeContents(): number;
					public getHealthcare(): string;
					public getDurbinRegulated(): string;
					public getCommercial(): string;
					public getCountryOfIssuance(): string;
					public getIssuingBank(): string;
					public getDebit(): string;
					public static fromJson(param0: org.json.JSONObject): com.braintreepayments.api.models.BinData;
					public getProductId(): string;
					public constructor();
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class BraintreeApiConfiguration {
					public static class: java.lang.Class<com.braintreepayments.api.models.BraintreeApiConfiguration>;
					public getUrl(): string;
					public constructor();
					public getAccessToken(): string;
					public isEnabled(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class BraintreePaymentResult {
					public static class: java.lang.Class<com.braintreepayments.api.models.BraintreePaymentResult>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.braintreepayments.api.models.BraintreePaymentResult>;
					public constructor(param0: globalAndroid.os.Parcel);
					public constructor();
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class BraintreeRequestCodes {
					public static class: java.lang.Class<com.braintreepayments.api.models.BraintreeRequestCodes>;
					/**
					 * Constructs a new instance of the com.braintreepayments.api.models.BraintreeRequestCodes interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static THREE_D_SECURE: number;
					public static GOOGLE_PAYMENT: number;
					public static VISA_CHECKOUT: number;
					public static VENMO: number;
					public static SAMSUNG_PAY: number;
					public static PAYPAL: number;
					public static LOCAL_PAYMENT: number;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class CardBuilder extends com.braintreepayments.api.models.BaseCardBuilder<com.braintreepayments.api.models.CardBuilder> implements globalAndroid.os.Parcelable  {
					public static class: java.lang.Class<com.braintreepayments.api.models.CardBuilder>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.braintreepayments.api.models.CardBuilder>;
					public buildGraphQL(param0: globalAndroid.content.Context, param1: org.json.JSONObject, param2: org.json.JSONObject): void;
					public merchantAccountId(param0: string): com.braintreepayments.api.models.CardBuilder;
					public build(): string;
					public constructor(param0: globalAndroid.os.Parcel);
					public buildGraphQL(param0: globalAndroid.content.Context, param1: com.braintreepayments.api.models.Authorization): string;
					public build(param0: org.json.JSONObject, param1: org.json.JSONObject): void;
					public constructor();
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public authenticationInsightRequested(param0: boolean): com.braintreepayments.api.models.CardBuilder;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class CardConfiguration {
					public static class: java.lang.Class<com.braintreepayments.api.models.CardConfiguration>;
					public getSupportedCardTypes(): java.util.Set<string>;
					public constructor();
					public static fromJson(param0: org.json.JSONObject): com.braintreepayments.api.models.CardConfiguration;
					public isFraudDataCollectionEnabled(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class CardNonce extends com.braintreepayments.api.models.PaymentMethodNonce {
					public static class: java.lang.Class<com.braintreepayments.api.models.CardNonce>;
					public static TYPE: string;
					public static API_RESOURCE_KEY: string;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.braintreepayments.api.models.CardNonce>;
					public fromJson(param0: org.json.JSONObject): void;
					public getThreeDSecureInfo(): com.braintreepayments.api.models.ThreeDSecureInfo;
					public getTypeLabel(): string;
					public getLastFour(): string;
					public getLastTwo(): string;
					public static fromJson(param0: string): com.braintreepayments.api.models.CardNonce;
					public constructor(param0: globalAndroid.os.Parcel);
					public getAuthenticationInsight(): com.braintreepayments.api.models.AuthenticationInsight;
					public getBinData(): com.braintreepayments.api.models.BinData;
					public constructor();
					public getCardType(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getBin(): string;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class ClientToken extends com.braintreepayments.api.models.Authorization {
					public static class: java.lang.Class<com.braintreepayments.api.models.ClientToken>;
					public static BASE_64_MATCHER: string;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.braintreepayments.api.models.ClientToken>;
					public constructor(param0: globalAndroid.os.Parcel);
					public getAuthorizationFingerprint(): string;
					public constructor(param0: string);
					public describeContents(): number;
					public getBearer(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getConfigUrl(): string;
					public getCustomerId(): string;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class Configuration {
					public static class: java.lang.Class<com.braintreepayments.api.models.Configuration>;
					public toJson(): string;
					public getUnionPay(): com.braintreepayments.api.models.UnionPayConfiguration;
					public constructor(param0: string);
					public getPayPal(): com.braintreepayments.api.models.PayPalConfiguration;
					public isCvvChallengePresent(): boolean;
					public getGooglePayment(): com.braintreepayments.api.models.GooglePaymentConfiguration;
					public getKount(): com.braintreepayments.api.models.KountConfiguration;
					public getMerchantId(): string;
					public getMerchantAccountId(): string;
					public getPayWithVenmo(): com.braintreepayments.api.models.VenmoConfiguration;
					public getCardinalAuthenticationJwt(): string;
					public isThreeDSecureEnabled(): boolean;
					public getGraphQL(): com.braintreepayments.api.models.GraphQLConfiguration;
					public getCardConfiguration(): com.braintreepayments.api.models.CardConfiguration;
					public getAssetsUrl(): string;
					public isPostalCodeChallengePresent(): boolean;
					public getBraintreeApiConfiguration(): com.braintreepayments.api.models.BraintreeApiConfiguration;
					public static fromJson(param0: string): com.braintreepayments.api.models.Configuration;
					public getClientApiUrl(): string;
					public getEnvironment(): string;
					public getAnalytics(): com.braintreepayments.api.models.AnalyticsConfiguration;
					public getSamsungPay(): com.braintreepayments.api.models.SamsungPayConfiguration;
					public isPayPalEnabled(): boolean;
					public getVisaCheckout(): com.braintreepayments.api.models.VisaCheckoutConfiguration;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class GooglePaymentConfiguration {
					public static class: java.lang.Class<com.braintreepayments.api.models.GooglePaymentConfiguration>;
					public getDisplayName(): string;
					public getGoogleAuthorizationFingerprint(): string;
					public getSupportedNetworks(): native.Array<string>;
					public getPaypalClientId(): string;
					public isEnabled(param0: globalAndroid.content.Context): boolean;
					public constructor();
					public getEnvironment(): string;
					public static fromJson(param0: org.json.JSONObject): com.braintreepayments.api.models.GooglePaymentConfiguration;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class GraphQLConfiguration {
					public static class: java.lang.Class<com.braintreepayments.api.models.GraphQLConfiguration>;
					public isFeatureEnabled(param0: string): boolean;
					public getUrl(): string;
					public constructor();
					public static fromJson(param0: org.json.JSONObject): com.braintreepayments.api.models.GraphQLConfiguration;
					public isEnabled(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class KountConfiguration {
					public static class: java.lang.Class<com.braintreepayments.api.models.KountConfiguration>;
					public constructor();
					public getKountMerchantId(): string;
					public isEnabled(): boolean;
					public static fromJson(param0: org.json.JSONObject): com.braintreepayments.api.models.KountConfiguration;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class LocalPaymentRequest {
					public static class: java.lang.Class<com.braintreepayments.api.models.LocalPaymentRequest>;
					public getPaymentType(): string;
					public address(param0: com.braintreepayments.api.models.PostalAddress): com.braintreepayments.api.models.LocalPaymentRequest;
					public getMerchantAccountId(): string;
					public getAmount(): string;
					public getSurname(): string;
					public amount(param0: string): com.braintreepayments.api.models.LocalPaymentRequest;
					public getPaymentId(): string;
					public constructor();
					public approvalUrl(param0: string): com.braintreepayments.api.models.LocalPaymentRequest;
					public currencyCode(param0: string): com.braintreepayments.api.models.LocalPaymentRequest;
					public getShippingAddressRequired(): boolean;
					public paymentId(param0: string): com.braintreepayments.api.models.LocalPaymentRequest;
					public surname(param0: string): com.braintreepayments.api.models.LocalPaymentRequest;
					public getGivenName(): string;
					public getPhone(): string;
					public getCurrencyCode(): string;
					public getEmail(): string;
					public email(param0: string): com.braintreepayments.api.models.LocalPaymentRequest;
					public shippingAddressRequired(param0: boolean): com.braintreepayments.api.models.LocalPaymentRequest;
					public phone(param0: string): com.braintreepayments.api.models.LocalPaymentRequest;
					public paymentType(param0: string): com.braintreepayments.api.models.LocalPaymentRequest;
					public merchantAccountId(param0: string): com.braintreepayments.api.models.LocalPaymentRequest;
					public givenName(param0: string): com.braintreepayments.api.models.LocalPaymentRequest;
					public build(param0: string, param1: string): string;
					public getAddress(): com.braintreepayments.api.models.PostalAddress;
					public getApprovalUrl(): string;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class LocalPaymentResult extends com.braintreepayments.api.models.PaymentMethodNonce {
					public static class: java.lang.Class<com.braintreepayments.api.models.LocalPaymentResult>;
					public static TYPE: string;
					public static API_RESOURCE_KEY: string;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.braintreepayments.api.models.LocalPaymentResult>;
					public fromJson(param0: org.json.JSONObject): void;
					public getTypeLabel(): string;
					public getSurname(): string;
					public getShippingAddress(): com.braintreepayments.api.models.PostalAddress;
					public constructor(param0: globalAndroid.os.Parcel);
					public static fromJson(param0: string): com.braintreepayments.api.models.LocalPaymentResult;
					public constructor();
					public getGivenName(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getDescription(): string;
					public getPhone(): string;
					public getBillingAddress(): com.braintreepayments.api.models.PostalAddress;
					public getEmail(): string;
					public getClientMetadataId(): string;
					public getPayerId(): string;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class MetadataBuilder {
					public static class: java.lang.Class<com.braintreepayments.api.models.MetadataBuilder>;
					public static META_KEY: string;
					public toString(): string;
					public source(param0: string): com.braintreepayments.api.models.MetadataBuilder;
					public integration(param0: string): com.braintreepayments.api.models.MetadataBuilder;
					public constructor();
					public version(): com.braintreepayments.api.models.MetadataBuilder;
					public build(): org.json.JSONObject;
					public sessionId(param0: string): com.braintreepayments.api.models.MetadataBuilder;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class PayPalAccountBuilder extends com.braintreepayments.api.models.PaymentMethodBuilder<com.braintreepayments.api.models.PayPalAccountBuilder> {
					public static class: java.lang.Class<com.braintreepayments.api.models.PayPalAccountBuilder>;
					public intent(param0: string): com.braintreepayments.api.models.PayPalAccountBuilder;
					public build(): string;
					public buildGraphQL(param0: globalAndroid.content.Context, param1: org.json.JSONObject, param2: org.json.JSONObject): void;
					public getApiPath(): string;
					public constructor(param0: globalAndroid.os.Parcel);
					public build(param0: org.json.JSONObject, param1: org.json.JSONObject): void;
					public buildGraphQL(param0: globalAndroid.content.Context, param1: com.braintreepayments.api.models.Authorization): string;
					public clientMetadataId(param0: string): com.braintreepayments.api.models.PayPalAccountBuilder;
					public constructor();
					public merchantAccountId(param0: string): com.braintreepayments.api.models.PayPalAccountBuilder;
					public getResponsePaymentMethodType(): string;
					public oneTouchCoreData(param0: org.json.JSONObject): com.braintreepayments.api.models.PayPalAccountBuilder;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class PayPalAccountNonce extends com.braintreepayments.api.models.PaymentMethodNonce {
					public static class: java.lang.Class<com.braintreepayments.api.models.PayPalAccountNonce>;
					public static TYPE: string;
					public static API_RESOURCE_KEY: string;
					public static PAYMENT_METHOD_DATA_KEY: string;
					public static TOKENIZATION_DATA_KEY: string;
					public static TOKEN_KEY: string;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.braintreepayments.api.models.PayPalAccountNonce>;
					public fromJson(param0: org.json.JSONObject): void;
					public getTypeLabel(): string;
					public getCreditFinancing(): com.braintreepayments.api.models.PayPalCreditFinancing;
					public getLastName(): string;
					public getShippingAddress(): com.braintreepayments.api.models.PostalAddress;
					public constructor(param0: globalAndroid.os.Parcel);
					public getFirstName(): string;
					public constructor();
					public static fromJson(param0: string): com.braintreepayments.api.models.PayPalAccountNonce;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getDescription(): string;
					public getPhone(): string;
					public getBillingAddress(): com.braintreepayments.api.models.PostalAddress;
					public getEmail(): string;
					public getClientMetadataId(): string;
					public getPayerId(): string;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class PayPalConfiguration {
					public static class: java.lang.Class<com.braintreepayments.api.models.PayPalConfiguration>;
					public getDisplayName(): string;
					public getClientId(): string;
					public static fromJson(param0: org.json.JSONObject): com.braintreepayments.api.models.PayPalConfiguration;
					public getUserAgreementUrl(): string;
					public getPrivacyUrl(): string;
					public constructor();
					public getCurrencyIsoCode(): string;
					public getDirectBaseUrl(): string;
					public isEnabled(): boolean;
					public getEnvironment(): string;
					public isTouchDisabled(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class PayPalCreditFinancing {
					public static class: java.lang.Class<com.braintreepayments.api.models.PayPalCreditFinancing>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.braintreepayments.api.models.PayPalCreditFinancing>;
					public static fromJson(param0: org.json.JSONObject): com.braintreepayments.api.models.PayPalCreditFinancing;
					public getTotalInterest(): com.braintreepayments.api.models.PayPalCreditFinancingAmount;
					public getTotalCost(): com.braintreepayments.api.models.PayPalCreditFinancingAmount;
					public describeContents(): number;
					public hasPayerAcceptance(): boolean;
					public getMonthlyPayment(): com.braintreepayments.api.models.PayPalCreditFinancingAmount;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getTerm(): number;
					public isCardAmountImmutable(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class PayPalCreditFinancingAmount {
					public static class: java.lang.Class<com.braintreepayments.api.models.PayPalCreditFinancingAmount>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.braintreepayments.api.models.PayPalCreditFinancingAmount>;
					public getValue(): string;
					public toString(): string;
					public getCurrency(): string;
					public describeContents(): number;
					public static fromJson(param0: org.json.JSONObject): com.braintreepayments.api.models.PayPalCreditFinancingAmount;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class PayPalPaymentResource {
					public static class: java.lang.Class<com.braintreepayments.api.models.PayPalPaymentResource>;
					public getRedirectUrl(): string;
					public constructor();
					public redirectUrl(param0: string): com.braintreepayments.api.models.PayPalPaymentResource;
					public static fromJson(param0: string): com.braintreepayments.api.models.PayPalPaymentResource;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class PayPalRequest {
					public static class: java.lang.Class<com.braintreepayments.api.models.PayPalRequest>;
					public static INTENT_ORDER: string;
					public static INTENT_SALE: string;
					public static INTENT_AUTHORIZE: string;
					public static LANDING_PAGE_TYPE_BILLING: string;
					public static LANDING_PAGE_TYPE_LOGIN: string;
					public static USER_ACTION_DEFAULT: string;
					public static USER_ACTION_COMMIT: string;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.braintreepayments.api.models.PayPalRequest>;
					public localeCode(param0: string): com.braintreepayments.api.models.PayPalRequest;
					public displayName(param0: string): com.braintreepayments.api.models.PayPalRequest;
					public shippingAddressOverride(param0: com.braintreepayments.api.models.PostalAddress): com.braintreepayments.api.models.PayPalRequest;
					public constructor(param0: string);
					public getLocaleCode(): string;
					public getBillingAgreementDescription(): string;
					public getMerchantAccountId(): string;
					public getAmount(): string;
					public shippingAddressRequired(param0: boolean): com.braintreepayments.api.models.PayPalRequest;
					public isShippingAddressEditable(): boolean;
					public billingAgreementDescription(param0: string): com.braintreepayments.api.models.PayPalRequest;
					public constructor();
					public offerCredit(param0: boolean): com.braintreepayments.api.models.PayPalRequest;
					public isShippingAddressRequired(): boolean;
					public currencyCode(param0: string): com.braintreepayments.api.models.PayPalRequest;
					public getLineItems(): java.util.ArrayList<com.paypal.android.sdk.onetouch.core.PayPalLineItem>;
					public merchantAccountId(param0: string): com.braintreepayments.api.models.PayPalRequest;
					public getCurrencyCode(): string;
					public getDisplayName(): string;
					public getIntent(): string;
					public getUserAction(): string;
					public describeContents(): number;
					public shouldOfferCredit(): boolean;
					public userAction(param0: string): com.braintreepayments.api.models.PayPalRequest;
					public shippingAddressEditable(param0: boolean): com.braintreepayments.api.models.PayPalRequest;
					public intent(param0: string): com.braintreepayments.api.models.PayPalRequest;
					public constructor(param0: globalAndroid.os.Parcel);
					public getLandingPageType(): string;
					public lineItems(param0: java.util.Collection<com.paypal.android.sdk.onetouch.core.PayPalLineItem>): com.braintreepayments.api.models.PayPalRequest;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public landingPageType(param0: string): com.braintreepayments.api.models.PayPalRequest;
					public getShippingAddressOverride(): com.braintreepayments.api.models.PostalAddress;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export abstract class PaymentMethodBuilder<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.braintreepayments.api.models.PaymentMethodBuilder<any>>;
					public static OPTIONS_KEY: string;
					public static OPERATION_NAME_KEY: string;
					public validate(param0: boolean): T;
					public build(): string;
					public buildGraphQL(param0: globalAndroid.content.Context, param1: org.json.JSONObject, param2: org.json.JSONObject): void;
					public buildGraphQL(param0: globalAndroid.content.Context, param1: com.braintreepayments.api.models.Authorization): string;
					public build(param0: org.json.JSONObject, param1: org.json.JSONObject): void;
					public getDefaultIntegration(): string;
					public getApiPath(): string;
					public constructor(param0: globalAndroid.os.Parcel);
					public integration(param0: string): T;
					public constructor();
					public setSessionId(param0: string): T;
					public getDefaultSource(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getResponsePaymentMethodType(): string;
					public source(param0: string): T;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export abstract class PaymentMethodNonce {
					public static class: java.lang.Class<com.braintreepayments.api.models.PaymentMethodNonce>;
					public static DATA_KEY: string;
					public static TOKEN_KEY: string;
					public mNonce: string;
					public mDescription: string;
					public mDefault: boolean;
					public fromJson(param0: org.json.JSONObject): void;
					public static getJsonObjectForType(param0: string, param1: org.json.JSONObject): org.json.JSONObject;
					public getNonce(): string;
					public getTypeLabel(): string;
					public isDefault(): boolean;
					public static parsePaymentMethodNonces(param0: string, param1: string): com.braintreepayments.api.models.PaymentMethodNonce;
					public describeContents(): number;
					public static parsePaymentMethodNonces(param0: org.json.JSONObject, param1: string): com.braintreepayments.api.models.PaymentMethodNonce;
					public constructor(param0: globalAndroid.os.Parcel);
					public static parsePaymentMethodNonces(param0: string): java.util.List<com.braintreepayments.api.models.PaymentMethodNonce>;
					public constructor();
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getDescription(): string;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class PostalAddress {
					public static class: java.lang.Class<com.braintreepayments.api.models.PostalAddress>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.braintreepayments.api.models.PostalAddress>;
					public getStreetAddress(): string;
					public getLocality(): string;
					public isEmpty(): boolean;
					public getRegion(): string;
					public describeContents(): number;
					public extendedAddress(param0: string): com.braintreepayments.api.models.PostalAddress;
					public sortingCode(param0: string): com.braintreepayments.api.models.PostalAddress;
					public streetAddress(param0: string): com.braintreepayments.api.models.PostalAddress;
					public countryCodeAlpha2(param0: string): com.braintreepayments.api.models.PostalAddress;
					public getRecipientName(): string;
					public locality(param0: string): com.braintreepayments.api.models.PostalAddress;
					public getExtendedAddress(): string;
					public getSortingCode(): string;
					public toString(): string;
					public getCountryCodeAlpha2(): string;
					public constructor();
					public getPhoneNumber(): string;
					public postalCode(param0: string): com.braintreepayments.api.models.PostalAddress;
					public region(param0: string): com.braintreepayments.api.models.PostalAddress;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public recipientName(param0: string): com.braintreepayments.api.models.PostalAddress;
					public getPostalCode(): string;
					public phoneNumber(param0: string): com.braintreepayments.api.models.PostalAddress;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class PostalAddressParser {
					public static class: java.lang.Class<com.braintreepayments.api.models.PostalAddressParser>;
					public static RECIPIENT_NAME_KEY: string;
					public static STREET_ADDRESS_KEY: string;
					public static EXTENDED_ADDRESS_KEY: string;
					public static LOCALITY_KEY: string;
					public static COUNTRY_CODE_ALPHA_2_KEY: string;
					public static POSTAL_CODE_KEY: string;
					public static REGION_KEY: string;
					public static LINE_1_KEY: string;
					public static LINE_2_KEY: string;
					public static COUNTRY_CODE_KEY: string;
					public static USER_ADDRESS_NAME_KEY: string;
					public static USER_ADDRESS_PHONE_NUMBER_KEY: string;
					public static USER_ADDRESS_ADDRESS_1_KEY: string;
					public static USER_ADDRESS_ADDRESS_2_KEY: string;
					public static USER_ADDRESS_ADDRESS_3_KEY: string;
					public static USER_ADDRESS_ADDRESS_4_KEY: string;
					public static USER_ADDRESS_ADDRESS_5_KEY: string;
					public static USER_ADDRESS_POSTAL_CODE_KEY: string;
					public static USER_ADDRESS_SORTING_CODE_KEY: string;
					public static USER_ADDRESS_COUNTRY_CODE_KEY: string;
					public static USER_ADDRESS_LOCALITY_KEY: string;
					public static USER_ADDRESS_ADMINISTRATIVE_AREA_KEY: string;
					public static COUNTRY_CODE_UNDERSCORE_KEY: string;
					public static POSTAL_CODE_UNDERSCORE_KEY: string;
					public static RECIPIENT_NAME_UNDERSCORE_KEY: string;
					public static fromUserAddressJson(param0: org.json.JSONObject): com.braintreepayments.api.models.PostalAddress;
					public constructor();
					public static fromJson(param0: org.json.JSONObject): com.braintreepayments.api.models.PostalAddress;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class PreferredPaymentMethodsResult {
					public static class: java.lang.Class<com.braintreepayments.api.models.PreferredPaymentMethodsResult>;
					public isPayPalPreferred(param0: boolean): com.braintreepayments.api.models.PreferredPaymentMethodsResult;
					public constructor();
					public isPayPalPreferred(): boolean;
					public static fromJSON(param0: string): com.braintreepayments.api.models.PreferredPaymentMethodsResult;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class SamsungPayConfiguration {
					public static class: java.lang.Class<com.braintreepayments.api.models.SamsungPayConfiguration>;
					public getSamsungAuthorization(): string;
					public constructor();
					public getServiceId(): string;
					public getMerchantDisplayName(): string;
					public getSupportedCardBrands(): java.util.Set<string>;
					public isEnabled(): boolean;
					public getEnvironment(): string;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class ThreeDSecureAdditionalInformation {
					public static class: java.lang.Class<com.braintreepayments.api.models.ThreeDSecureAdditionalInformation>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.braintreepayments.api.models.ThreeDSecureAdditionalInformation>;
					public getPreorderDate(): string;
					public getReorderIndicator(): string;
					public getShippingNameIndicator(): string;
					public getUserAgent(): string;
					public getPreorderIndicator(): string;
					public getPurchaseDate(): string;
					public toJson(): org.json.JSONObject;
					public getAccountPwdChangeIndicator(): string;
					public deliveryEmail(param0: string): com.braintreepayments.api.models.ThreeDSecureAdditionalInformation;
					public accountAgeIndicator(param0: string): com.braintreepayments.api.models.ThreeDSecureAdditionalInformation;
					public recurringFrequency(param0: string): com.braintreepayments.api.models.ThreeDSecureAdditionalInformation;
					public getShippingMethodIndicator(): string;
					public getSdkMaxTimeout(): string;
					public constructor();
					public addressMatch(param0: string): com.braintreepayments.api.models.ThreeDSecureAdditionalInformation;
					public shippingAddressUsageDate(param0: string): com.braintreepayments.api.models.ThreeDSecureAdditionalInformation;
					public getTaxAmount(): string;
					public getDeliveryTimeframe(): string;
					public getAccountId(): string;
					public accountChangeDate(param0: string): com.braintreepayments.api.models.ThreeDSecureAdditionalInformation;
					public paymentAccountIndicator(param0: string): com.braintreepayments.api.models.ThreeDSecureAdditionalInformation;
					public getAccountAgeIndicator(): string;
					public giftCardCount(param0: string): com.braintreepayments.api.models.ThreeDSecureAdditionalInformation;
					public accountChangeIndicator(param0: string): com.braintreepayments.api.models.ThreeDSecureAdditionalInformation;
					public accountId(param0: string): com.braintreepayments.api.models.ThreeDSecureAdditionalInformation;
					public taxAmount(param0: string): com.braintreepayments.api.models.ThreeDSecureAdditionalInformation;
					public accountCreateDate(param0: string): com.braintreepayments.api.models.ThreeDSecureAdditionalInformation;
					public getGiftCardAmount(): string;
					public getIpAddress(): string;
					public constructor(param0: globalAndroid.os.Parcel);
					public ipAddress(param0: string): com.braintreepayments.api.models.ThreeDSecureAdditionalInformation;
					public getOrderDescription(): string;
					public shippingNameIndicator(param0: string): com.braintreepayments.api.models.ThreeDSecureAdditionalInformation;
					public preorderDate(param0: string): com.braintreepayments.api.models.ThreeDSecureAdditionalInformation;
					public authenticationIndicator(param0: string): com.braintreepayments.api.models.ThreeDSecureAdditionalInformation;
					public reorderIndicator(param0: string): com.braintreepayments.api.models.ThreeDSecureAdditionalInformation;
					public getGiftCardCurrencyCode(): string;
					public shippingAddress(param0: com.braintreepayments.api.models.ThreeDSecurePostalAddress): com.braintreepayments.api.models.ThreeDSecureAdditionalInformation;
					public giftCardCurrencyCode(param0: string): com.braintreepayments.api.models.ThreeDSecureAdditionalInformation;
					public accountPwdChangeDate(param0: string): com.braintreepayments.api.models.ThreeDSecureAdditionalInformation;
					public accountPurchases(param0: string): com.braintreepayments.api.models.ThreeDSecureAdditionalInformation;
					public getProductCode(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public userAgent(param0: string): com.braintreepayments.api.models.ThreeDSecureAdditionalInformation;
					public giftCardAmount(param0: string): com.braintreepayments.api.models.ThreeDSecureAdditionalInformation;
					public getShippingAddress(): com.braintreepayments.api.models.ThreeDSecurePostalAddress;
					public getShippingAddressUsageIndicator(): string;
					public addCardAttempts(param0: string): com.braintreepayments.api.models.ThreeDSecureAdditionalInformation;
					public transactionCountDay(param0: string): com.braintreepayments.api.models.ThreeDSecureAdditionalInformation;
					public getInstallment(): string;
					public sdkMaxTimeout(param0: string): com.braintreepayments.api.models.ThreeDSecureAdditionalInformation;
					public shippingMethodIndicator(param0: string): com.braintreepayments.api.models.ThreeDSecureAdditionalInformation;
					public orderDescription(param0: string): com.braintreepayments.api.models.ThreeDSecureAdditionalInformation;
					public getAddressMatch(): string;
					public deliveryTimeframe(param0: string): com.braintreepayments.api.models.ThreeDSecureAdditionalInformation;
					public getWorkPhoneNumber(): string;
					public shippingAddressUsageIndicator(param0: string): com.braintreepayments.api.models.ThreeDSecureAdditionalInformation;
					public getAccountChangeIndicator(): string;
					public installment(param0: string): com.braintreepayments.api.models.ThreeDSecureAdditionalInformation;
					public getPaymentAccountAge(): string;
					public getDeliveryEmail(): string;
					public paymentAccountAge(param0: string): com.braintreepayments.api.models.ThreeDSecureAdditionalInformation;
					public getGiftCardCount(): string;
					public getAccountChangeDate(): string;
					public getAccountPwdChangeDate(): string;
					public productCode(param0: string): com.braintreepayments.api.models.ThreeDSecureAdditionalInformation;
					public getAccountCreateDate(): string;
					public describeContents(): number;
					public getTransactionCountDay(): string;
					public fraudActivity(param0: string): com.braintreepayments.api.models.ThreeDSecureAdditionalInformation;
					public preorderIndicator(param0: string): com.braintreepayments.api.models.ThreeDSecureAdditionalInformation;
					public recurringEnd(param0: string): com.braintreepayments.api.models.ThreeDSecureAdditionalInformation;
					public getRecurringFrequency(): string;
					public getAccountPurchases(): string;
					public accountPwdChangeIndicator(param0: string): com.braintreepayments.api.models.ThreeDSecureAdditionalInformation;
					public getShippingAddressUsageDate(): string;
					public getPaymentAccountIdicator(): string;
					public getAuthenticationIndicator(): string;
					public getRecurringEnd(): string;
					public purchaseDate(param0: string): com.braintreepayments.api.models.ThreeDSecureAdditionalInformation;
					public getTransactionCountYear(): string;
					public workPhoneNumber(param0: string): com.braintreepayments.api.models.ThreeDSecureAdditionalInformation;
					public transactionCountYear(param0: string): com.braintreepayments.api.models.ThreeDSecureAdditionalInformation;
					public getAddCardAttempts(): string;
					public getFraudActivity(): string;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class ThreeDSecureAuthenticationResponse {
					public static class: java.lang.Class<com.braintreepayments.api.models.ThreeDSecureAuthenticationResponse>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.braintreepayments.api.models.ThreeDSecureAuthenticationResponse>;
					/** @deprecated */
					public static fromException(param0: string): com.braintreepayments.api.models.ThreeDSecureAuthenticationResponse;
					public constructor();
					public describeContents(): number;
					public static fromJson(param0: string): com.braintreepayments.api.models.ThreeDSecureAuthenticationResponse;
					/** @deprecated */
					public getErrors(): string;
					public getException(): string;
					/** @deprecated */
					public isSuccess(): boolean;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getCardNonce(): com.braintreepayments.api.models.CardNonce;
					/** @deprecated */
					public static getNonceWithAuthenticationDetails(param0: string, param1: com.braintreepayments.api.models.CardNonce): com.braintreepayments.api.models.CardNonce;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class ThreeDSecureInfo {
					public static class: java.lang.Class<com.braintreepayments.api.models.ThreeDSecureInfo>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.braintreepayments.api.models.ThreeDSecureInfo>;
					public getThreeDSecureServerTransactionId(): string;
					public getXid(): string;
					public getErrorMessage(): string;
					public getCavv(): string;
					public wasVerified(): boolean;
					public getThreeDSecureVersion(): string;
					public setThreeDSecureAuthenticationResponse(param0: com.braintreepayments.api.models.ThreeDSecureAuthenticationResponse): void;
					public getLookupTransactionStatus(): string;
					public getAuthenticationTransactionStatus(): string;
					public getAuthenticationTransactionStatusReason(): string;
					public constructor();
					public getEciFlag(): string;
					public getParesStatus(): string;
					public setErrorMessage(param0: string): void;
					public describeContents(): number;
					public static fromJson(param0: org.json.JSONObject): com.braintreepayments.api.models.ThreeDSecureInfo;
					public getStatus(): string;
					/** @deprecated */
					public getThreeDSecureAuthenticationResponse(): com.braintreepayments.api.models.ThreeDSecureAuthenticationResponse;
					public getLookupTransactionStatusReason(): string;
					public getEnrolled(): string;
					public isLiabilityShiftPossible(): boolean;
					public getDsTransactionId(): string;
					public getAcsTransactionId(): string;
					public isLiabilityShifted(): boolean;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class ThreeDSecureLookup {
					public static class: java.lang.Class<com.braintreepayments.api.models.ThreeDSecureLookup>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.braintreepayments.api.models.ThreeDSecureLookup>;
					public getAcsUrl(): string;
					public getTermUrl(): string;
					public getMd(): string;
					public getTransactionId(): string;
					public constructor();
					public getThreeDSecureVersion(): string;
					public describeContents(): number;
					public static fromJson(param0: string): com.braintreepayments.api.models.ThreeDSecureLookup;
					public requiresUserAuthentication(): boolean;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getCardNonce(): com.braintreepayments.api.models.CardNonce;
					public getPareq(): string;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class ThreeDSecurePostalAddress {
					public static class: java.lang.Class<com.braintreepayments.api.models.ThreeDSecurePostalAddress>;
					public static FIRST_NAME_KEY: string;
					public static LAST_NAME_KEY: string;
					public static STREET_ADDRESS_KEY: string;
					public static EXTENDED_ADDRESS_KEY: string;
					public static LINE_3_KEY: string;
					public static LOCALITY_KEY: string;
					public static REGION_KEY: string;
					public static POSTAL_CODE_KEY: string;
					public static COUNTRY_CODE_ALPHA_2_KEY: string;
					public static PHONE_NUMBER_KEY: string;
					public static BILLING_ADDRESS_KEY: string;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.braintreepayments.api.models.ThreeDSecurePostalAddress>;
					public surname(param0: string): com.braintreepayments.api.models.ThreeDSecurePostalAddress;
					public postalCode(param0: string): com.braintreepayments.api.models.ThreeDSecurePostalAddress;
					public getLine3(): string;
					public getRegion(): string;
					/** @deprecated */
					public getLastName(): string;
					public toJson(): org.json.JSONObject;
					public getSurname(): string;
					public givenName(param0: string): com.braintreepayments.api.models.ThreeDSecurePostalAddress;
					public getExtendedAddress(): string;
					public locality(param0: string): com.braintreepayments.api.models.ThreeDSecurePostalAddress;
					public constructor();
					public getGivenName(): string;
					/** @deprecated */
					public lastName(param0: string): com.braintreepayments.api.models.ThreeDSecurePostalAddress;
					public getPostalCode(): string;
					public line3(param0: string): com.braintreepayments.api.models.ThreeDSecurePostalAddress;
					public countryCodeAlpha2(param0: string): com.braintreepayments.api.models.ThreeDSecurePostalAddress;
					public getStreetAddress(): string;
					public getLocality(): string;
					public region(param0: string): com.braintreepayments.api.models.ThreeDSecurePostalAddress;
					public extendedAddress(param0: string): com.braintreepayments.api.models.ThreeDSecurePostalAddress;
					public describeContents(): number;
					public phoneNumber(param0: string): com.braintreepayments.api.models.ThreeDSecurePostalAddress;
					public constructor(param0: globalAndroid.os.Parcel);
					public getCountryCodeAlpha2(): string;
					public getPhoneNumber(): string;
					/** @deprecated */
					public firstName(param0: string): com.braintreepayments.api.models.ThreeDSecurePostalAddress;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					/** @deprecated */
					public getFirstName(): string;
					public streetAddress(param0: string): com.braintreepayments.api.models.ThreeDSecurePostalAddress;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class ThreeDSecureRequest {
					public static class: java.lang.Class<com.braintreepayments.api.models.ThreeDSecureRequest>;
					public static VERSION_1: string;
					public static VERSION_2: string;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.braintreepayments.api.models.ThreeDSecureRequest>;
					public getShippingMethod(): string;
					public versionRequested(param0: string): com.braintreepayments.api.models.ThreeDSecureRequest;
					public uiCustomization(param0: com.cardinalcommerce.shared.userinterfaces.UiCustomization): com.braintreepayments.api.models.ThreeDSecureRequest;
					public getAmount(): string;
					public shippingMethod(param0: string): com.braintreepayments.api.models.ThreeDSecureRequest;
					public getVersionRequested(): string;
					public getV1UiCustomization(): com.braintreepayments.api.models.ThreeDSecureV1UiCustomization;
					public isChallengeRequested(): boolean;
					public amount(param0: string): com.braintreepayments.api.models.ThreeDSecureRequest;
					public constructor();
					public exemptionRequested(param0: boolean): com.braintreepayments.api.models.ThreeDSecureRequest;
					public nonce(param0: string): com.braintreepayments.api.models.ThreeDSecureRequest;
					public getBillingAddress(): com.braintreepayments.api.models.ThreeDSecurePostalAddress;
					public getEmail(): string;
					public isExemptionRequested(): boolean;
					public additionalInformation(param0: com.braintreepayments.api.models.ThreeDSecureAdditionalInformation): com.braintreepayments.api.models.ThreeDSecureRequest;
					public getNonce(): string;
					public v1UiCustomization(param0: com.braintreepayments.api.models.ThreeDSecureV1UiCustomization): com.braintreepayments.api.models.ThreeDSecureRequest;
					public getMobilePhoneNumber(): string;
					public describeContents(): number;
					public billingAddress(param0: com.braintreepayments.api.models.ThreeDSecurePostalAddress): com.braintreepayments.api.models.ThreeDSecureRequest;
					public getAdditionalInformation(): com.braintreepayments.api.models.ThreeDSecureAdditionalInformation;
					public mobilePhoneNumber(param0: string): com.braintreepayments.api.models.ThreeDSecureRequest;
					public constructor(param0: globalAndroid.os.Parcel);
					public email(param0: string): com.braintreepayments.api.models.ThreeDSecureRequest;
					public challengeRequested(param0: boolean): com.braintreepayments.api.models.ThreeDSecureRequest;
					public getUiCustomization(): com.cardinalcommerce.shared.userinterfaces.UiCustomization;
					public build(param0: string): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class ThreeDSecureV1UiCustomization {
					public static class: java.lang.Class<com.braintreepayments.api.models.ThreeDSecureV1UiCustomization>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.braintreepayments.api.models.ThreeDSecureV1UiCustomization>;
					public constructor();
					public redirectButtonText(param0: string): com.braintreepayments.api.models.ThreeDSecureV1UiCustomization;
					public redirectDescription(param0: string): com.braintreepayments.api.models.ThreeDSecureV1UiCustomization;
					public describeContents(): number;
					public getRedirectButtonText(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getRedirectDescription(): string;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class TokenizationKey extends com.braintreepayments.api.models.Authorization {
					public static class: java.lang.Class<com.braintreepayments.api.models.TokenizationKey>;
					public static MATCHER: string;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.braintreepayments.api.models.TokenizationKey>;
					public constructor(param0: globalAndroid.os.Parcel);
					public getUrl(): string;
					public constructor(param0: string);
					public describeContents(): number;
					public getBearer(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getEnvironment(): string;
					public getMerchantId(): string;
					public getConfigUrl(): string;
				}
				export module TokenizationKey {
					export class BraintreeEnvironment {
						public static class: java.lang.Class<com.braintreepayments.api.models.TokenizationKey.BraintreeEnvironment>;
						public static DEVELOPMENT: com.braintreepayments.api.models.TokenizationKey.BraintreeEnvironment;
						public static SANDBOX: com.braintreepayments.api.models.TokenizationKey.BraintreeEnvironment;
						public static PRODUCTION: com.braintreepayments.api.models.TokenizationKey.BraintreeEnvironment;
						public static valueOf(param0: string): com.braintreepayments.api.models.TokenizationKey.BraintreeEnvironment;
						public static values(): native.Array<com.braintreepayments.api.models.TokenizationKey.BraintreeEnvironment>;
					}
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class UnionPayCapabilities {
					public static class: java.lang.Class<com.braintreepayments.api.models.UnionPayCapabilities>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.braintreepayments.api.models.UnionPayCapabilities>;
					public static fromJson(param0: string): com.braintreepayments.api.models.UnionPayCapabilities;
					public supportsTwoStepAuthAndCapture(): boolean;
					public isSupported(): boolean;
					public constructor(param0: globalAndroid.os.Parcel);
					public isDebit(): boolean;
					public describeContents(): number;
					public isUnionPay(): boolean;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class UnionPayCardBuilder extends com.braintreepayments.api.models.BaseCardBuilder<com.braintreepayments.api.models.UnionPayCardBuilder> implements globalAndroid.os.Parcelable  {
					public static class: java.lang.Class<com.braintreepayments.api.models.UnionPayCardBuilder>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.braintreepayments.api.models.UnionPayCardBuilder>;
					public build(): string;
					public buildGraphQL(param0: globalAndroid.content.Context, param1: org.json.JSONObject, param2: org.json.JSONObject): void;
					public buildEnrollment(): org.json.JSONObject;
					public build(param0: org.json.JSONObject, param1: org.json.JSONObject): void;
					public buildGraphQL(param0: globalAndroid.content.Context, param1: com.braintreepayments.api.models.Authorization): string;
					public enrollmentId(param0: string): com.braintreepayments.api.models.UnionPayCardBuilder;
					public validate(param0: boolean): any;
					public constructor(param0: globalAndroid.os.Parcel);
					public constructor();
					public smsCode(param0: string): com.braintreepayments.api.models.UnionPayCardBuilder;
					public mobileCountryCode(param0: string): com.braintreepayments.api.models.UnionPayCardBuilder;
					/** @deprecated */
					public validate(param0: boolean): com.braintreepayments.api.models.UnionPayCardBuilder;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public mobilePhoneNumber(param0: string): com.braintreepayments.api.models.UnionPayCardBuilder;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class UnionPayConfiguration {
					public static class: java.lang.Class<com.braintreepayments.api.models.UnionPayConfiguration>;
					public constructor();
					public isEnabled(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class VenmoAccountBuilder extends com.braintreepayments.api.models.PaymentMethodBuilder<com.braintreepayments.api.models.VenmoAccountBuilder> {
					public static class: java.lang.Class<com.braintreepayments.api.models.VenmoAccountBuilder>;
					public build(): string;
					public buildGraphQL(param0: globalAndroid.content.Context, param1: org.json.JSONObject, param2: org.json.JSONObject): void;
					public getApiPath(): string;
					public constructor(param0: globalAndroid.os.Parcel);
					public build(param0: org.json.JSONObject, param1: org.json.JSONObject): void;
					public buildGraphQL(param0: globalAndroid.content.Context, param1: com.braintreepayments.api.models.Authorization): string;
					public constructor();
					public getResponsePaymentMethodType(): string;
					public nonce(param0: string): com.braintreepayments.api.models.VenmoAccountBuilder;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class VenmoAccountNonce extends com.braintreepayments.api.models.PaymentMethodNonce {
					public static class: java.lang.Class<com.braintreepayments.api.models.VenmoAccountNonce>;
					public static TYPE: string;
					public static API_RESOURCE_KEY: string;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.braintreepayments.api.models.VenmoAccountNonce>;
					public getUsername(): string;
					public constructor(param0: globalAndroid.os.Parcel);
					public fromJson(param0: org.json.JSONObject): void;
					public getTypeLabel(): string;
					public constructor();
					public static fromJson(param0: string): com.braintreepayments.api.models.VenmoAccountNonce;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public constructor(param0: string, param1: string, param2: string);
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class VenmoConfiguration {
					public static class: java.lang.Class<com.braintreepayments.api.models.VenmoConfiguration>;
					public isEnabled(param0: globalAndroid.content.Context): boolean;
					public constructor();
					public getAccessToken(): string;
					public getMerchantId(): string;
					public getEnvironment(): string;
					public isAccessTokenValid(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class VisaCheckoutAddress {
					public static class: java.lang.Class<com.braintreepayments.api.models.VisaCheckoutAddress>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.braintreepayments.api.models.VisaCheckoutAddress>;
					public getStreetAddress(): string;
					public getLocality(): string;
					public getCountryCode(): string;
					public getRegion(): string;
					public describeContents(): number;
					public getLastName(): string;
					public getExtendedAddress(): string;
					public constructor(param0: globalAndroid.os.Parcel);
					public getFirstName(): string;
					public constructor();
					public getPhoneNumber(): string;
					public static fromJson(param0: org.json.JSONObject): com.braintreepayments.api.models.VisaCheckoutAddress;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getPostalCode(): string;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class VisaCheckoutConfiguration {
					public static class: java.lang.Class<com.braintreepayments.api.models.VisaCheckoutConfiguration>;
					public getAcceptedCardBrands(): java.util.List<string>;
					public constructor();
					public getExternalClientId(): string;
					public isEnabled(): boolean;
					public getApiKey(): string;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class VisaCheckoutNonce extends com.braintreepayments.api.models.PaymentMethodNonce {
					public static class: java.lang.Class<com.braintreepayments.api.models.VisaCheckoutNonce>;
					public static TYPE: string;
					public static API_RESOURCE_KEY: string;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.braintreepayments.api.models.VisaCheckoutNonce>;
					public fromJson(param0: org.json.JSONObject): void;
					public getCallId(): string;
					public getTypeLabel(): string;
					public getBillingAddress(): com.braintreepayments.api.models.VisaCheckoutAddress;
					public getLastTwo(): string;
					public getShippingAddress(): com.braintreepayments.api.models.VisaCheckoutAddress;
					public constructor(param0: globalAndroid.os.Parcel);
					public getBinData(): com.braintreepayments.api.models.BinData;
					public constructor();
					public static fromJson(param0: string): com.braintreepayments.api.models.VisaCheckoutNonce;
					public getCardType(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getUserData(): com.braintreepayments.api.models.VisaCheckoutUserData;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module models {
				export class VisaCheckoutUserData {
					public static class: java.lang.Class<com.braintreepayments.api.models.VisaCheckoutUserData>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.braintreepayments.api.models.VisaCheckoutUserData>;
					public getUsername(): string;
					public constructor(param0: globalAndroid.os.Parcel);
					public getUserEmail(): string;
					public constructor();
					public getUserFirstName(): string;
					public getUserFullName(): string;
					public describeContents(): number;
					public static fromJson(param0: org.json.JSONObject): com.braintreepayments.api.models.VisaCheckoutUserData;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getUserLastName(): string;
				}
			}
		}
	}
}

//Generics information:
//com.braintreepayments.api.interfaces.BraintreeResponseListener:1
//com.braintreepayments.api.models.BaseCardBuilder:1
//com.braintreepayments.api.models.PaymentMethodBuilder:1

