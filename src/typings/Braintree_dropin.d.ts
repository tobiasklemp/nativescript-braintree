/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module braintreepayments {
		export module api {
			export module dropin {
				export class AddCardActivity extends com.braintreepayments.api.dropin.BaseActivity implements com.braintreepayments.api.dropin.interfaces.AddPaymentUpdateListener {
					public static class: java.lang.Class<com.braintreepayments.api.dropin.AddCardActivity>;
					public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public onCreateOptionsMenu(param0: globalAndroid.view.Menu): boolean;
					public onPaymentUpdated(param0: globalAndroid.view.View): void;
					public onCancel(param0: number): void;
					public onConfigurationFetched(param0: com.braintreepayments.api.models.Configuration): void;
					public createCard(): void;
					public constructor();
					public onCapabilitiesFetched(param0: com.braintreepayments.api.models.UnionPayCapabilities): void;
					public onSmsCodeSent(param0: string, param1: boolean): void;
					public onError(param0: java.lang.Exception): void;
					public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
					public onPaymentMethodNonceCreated(param0: com.braintreepayments.api.models.PaymentMethodNonce): void;
					public onBackRequested(param0: globalAndroid.view.View): void;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module dropin {
				export class BaseActivity {
					public static class: java.lang.Class<com.braintreepayments.api.dropin.BaseActivity>;
					public mDropInRequest: com.braintreepayments.api.dropin.DropInRequest;
					public mBraintreeFragment: com.braintreepayments.api.BraintreeFragment;
					public mConfiguration: com.braintreepayments.api.models.Configuration;
					public mClientTokenPresent: boolean;
					public finish(param0: java.lang.Exception): void;
					public getBraintreeFragment(): com.braintreepayments.api.BraintreeFragment;
					public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public constructor();
					public finish(param0: com.braintreepayments.api.models.PaymentMethodNonce, param1: string): void;
					public shouldRequestThreeDSecureVerification(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module dropin {
				export class BuildConfig {
					public static class: java.lang.Class<com.braintreepayments.api.dropin.BuildConfig>;
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public static GATEWAY_IP: string;
					public static GATEWAY_PORT: string;
					public static LOCALHOST_IP: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module dropin {
				export class DropInActivity extends com.braintreepayments.api.dropin.BaseActivity implements com.braintreepayments.api.dropin.adapters.SupportedPaymentMethodsAdapter.PaymentMethodSelectedListener {
					public static class: java.lang.Class<com.braintreepayments.api.dropin.DropInActivity>;
					public static EXTRA_ERROR: string;
					public static ADD_CARD_REQUEST_CODE: number;
					public static DELETE_PAYMENT_METHOD_NONCE_CODE: number;
					public mSupportedPaymentMethodListView: globalAndroid.widget.ListView;
					public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public onBackPressed(): void;
					public onPaymentMethodNoncesUpdated(param0: java.util.List<com.braintreepayments.api.models.PaymentMethodNonce>): void;
					public onPaymentMethodSelected(param0: com.braintreepayments.api.dropin.utils.PaymentMethodType): void;
					public onCancel(param0: number): void;
					public finish(param0: com.braintreepayments.api.models.PaymentMethodNonce, param1: string): void;
					public finish(): void;
					public onConfigurationFetched(param0: com.braintreepayments.api.models.Configuration): void;
					public finish(param0: java.lang.Exception): void;
					public onVaultEditButtonClick(param0: globalAndroid.view.View): void;
					public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
					public constructor();
					public onBackgroundClicked(param0: globalAndroid.view.View): void;
					public onError(param0: java.lang.Exception): void;
					public onPaymentMethodNonceCreated(param0: com.braintreepayments.api.models.PaymentMethodNonce): void;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module dropin {
				export class DropInRequest {
					public static class: java.lang.Class<com.braintreepayments.api.dropin.DropInRequest>;
					public static EXTRA_CHECKOUT_REQUEST: string;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.braintreepayments.api.dropin.DropInRequest>;
					public getDefaultVaultSetting(): boolean;
					public getCardholderNameStatus(): number;
					public vaultCard(param0: boolean): com.braintreepayments.api.dropin.DropInRequest;
					public vaultManager(param0: boolean): com.braintreepayments.api.dropin.DropInRequest;
					public disableGooglePayment(): com.braintreepayments.api.dropin.DropInRequest;
					public cardholderNameStatus(param0: number): com.braintreepayments.api.dropin.DropInRequest;
					public getPayPalRequest(): com.braintreepayments.api.models.PayPalRequest;
					public isGooglePaymentEnabled(): boolean;
					public constructor();
					public paypalRequest(param0: com.braintreepayments.api.models.PayPalRequest): com.braintreepayments.api.dropin.DropInRequest;
					public googlePaymentRequest(param0: com.braintreepayments.api.models.GooglePaymentRequest): com.braintreepayments.api.dropin.DropInRequest;
					public collectDeviceData(param0: boolean): com.braintreepayments.api.dropin.DropInRequest;
					public clientToken(param0: string): com.braintreepayments.api.dropin.DropInRequest;
					public isPayPalEnabled(): boolean;
					public maskCardNumber(param0: boolean): com.braintreepayments.api.dropin.DropInRequest;
					public isCardEnabled(): boolean;
					public maskSecurityCode(param0: boolean): com.braintreepayments.api.dropin.DropInRequest;
					public disableCard(): com.braintreepayments.api.dropin.DropInRequest;
					public describeContents(): number;
					public disableVenmo(): com.braintreepayments.api.dropin.DropInRequest;
					public tokenizationKey(param0: string): com.braintreepayments.api.dropin.DropInRequest;
					public getAuthorization(): string;
					public getThreeDSecureRequest(): com.braintreepayments.api.models.ThreeDSecureRequest;
					public getGooglePaymentRequest(): com.braintreepayments.api.models.GooglePaymentRequest;
					public allowVaultCardOverride(param0: boolean): com.braintreepayments.api.dropin.DropInRequest;
					public constructor(param0: globalAndroid.os.Parcel);
					public requestThreeDSecureVerification(param0: boolean): com.braintreepayments.api.dropin.DropInRequest;
					public threeDSecureRequest(param0: com.braintreepayments.api.models.ThreeDSecureRequest): com.braintreepayments.api.dropin.DropInRequest;
					public isSaveCardCheckBoxShown(): boolean;
					public isVenmoEnabled(): boolean;
					public getIntent(param0: globalAndroid.content.Context): globalAndroid.content.Intent;
					/** @deprecated */
					public amount(param0: string): com.braintreepayments.api.dropin.DropInRequest;
					public disablePayPal(): com.braintreepayments.api.dropin.DropInRequest;
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
				export class GooglePaymentRequest {
					public static class: java.lang.Class<com.braintreepayments.api.models.GooglePaymentRequest>;
					public static EXTRA_CHECKOUT_REQUEST: string;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.braintreepayments.api.models.GooglePaymentRequest>;
					transactionInfo
					public constructor();

				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module wallet {
					export class TransactionInfo {
						public static class: java.lang.Class<com.google.android.gms.wallet.TransactionInfo>;
						public static EXTRA_CHECKOUT_REQUEST: string;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.wallet.TransactionInfo>;

						public constructor();
						public static newBuilder(): any

					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module wallet {
					export class GooglePayment {
						public static class: java.lang.Class<com.google.android.gms.wallet.GooglePayment>;
						public static EXTRA_CHECKOUT_REQUEST: string;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.wallet.GooglePayment>;
						public static isReadyToPay(fragment, listener): void;
						public constructor();
						public static newBuilder(): any

					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module wallet {
					export class WalletConstants {
						public static class: java.lang.Class<com.braintreepayments.api.models.GooglePaymentRequest>;
						public static EXTRA_CHECKOUT_REQUEST: string;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.braintreepayments.api.models.GooglePaymentRequest>;
						static TOTAL_PRICE_STATUS_FINAL: any;
						public constructor();

					}
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module dropin {
				export class DropInResult {
					public static class: java.lang.Class<com.braintreepayments.api.dropin.DropInResult>;
					public static EXTRA_DROP_IN_RESULT: string;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.braintreepayments.api.dropin.DropInResult>;
					public constructor(param0: globalAndroid.os.Parcel);
					public static fetchDropInResult(param0: androidx.appcompat.app.AppCompatActivity, param1: string, param2: com.braintreepayments.api.dropin.DropInResult.DropInResultListener): void;
					public getPaymentMethodType(): com.braintreepayments.api.dropin.utils.PaymentMethodType;
					public constructor();
					public getPaymentMethodNonce(): com.braintreepayments.api.models.PaymentMethodNonce;
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getDeviceData(): string;
				}
				export module DropInResult {
					export class DropInResultListener {
						public static class: java.lang.Class<com.braintreepayments.api.dropin.DropInResult.DropInResultListener>;
						/**
						 * Constructs a new instance of the com.braintreepayments.api.dropin.DropInResult$DropInResultListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onError(param0: java.lang.Exception): void;
							onResult(param0: com.braintreepayments.api.dropin.DropInResult): void;
						});
						public constructor();
						public onResult(param0: com.braintreepayments.api.dropin.DropInResult): void;
						public onError(param0: java.lang.Exception): void;
					}
					export class ListenerHolder {
						public static class: java.lang.Class<com.braintreepayments.api.dropin.DropInResult.ListenerHolder>;
						public listeners: java.util.List<com.braintreepayments.api.interfaces.BraintreeListener>;
					}
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module dropin {
				export class VaultManagerActivity extends com.braintreepayments.api.dropin.BaseActivity {
					public static class: java.lang.Class<com.braintreepayments.api.dropin.VaultManagerActivity>;
					public mAdapter: com.braintreepayments.api.dropin.adapters.VaultManagerPaymentMethodsAdapter;
					public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public constructor();
					public onBackPressed(): void;
					public onClick(param0: globalAndroid.view.View): void;
					public onError(param0: java.lang.Exception): void;
					public onPaymentMethodNonceDeleted(param0: com.braintreepayments.api.models.PaymentMethodNonce): void;
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module dropin {
				export module adapters {
					export class SupportedPaymentMethodsAdapter {
						public static class: java.lang.Class<com.braintreepayments.api.dropin.adapters.SupportedPaymentMethodsAdapter>;
						public getItemId(param0: number): number;
						public getView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
						public getCount(): number;
						public getItem(param0: number): any;
						public constructor(param0: globalAndroid.content.Context, param1: com.braintreepayments.api.dropin.adapters.SupportedPaymentMethodsAdapter.PaymentMethodSelectedListener);
						public setup(param0: com.braintreepayments.api.models.Configuration, param1: com.braintreepayments.api.dropin.DropInRequest, param2: boolean, param3: boolean): void;
					}
					export module SupportedPaymentMethodsAdapter {
						export class PaymentMethodSelectedListener {
							public static class: java.lang.Class<com.braintreepayments.api.dropin.adapters.SupportedPaymentMethodsAdapter.PaymentMethodSelectedListener>;
							/**
							 * Constructs a new instance of the com.braintreepayments.api.dropin.adapters.SupportedPaymentMethodsAdapter$PaymentMethodSelectedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onPaymentMethodSelected(param0: com.braintreepayments.api.dropin.utils.PaymentMethodType): void;
							});
							public constructor();
							public onPaymentMethodSelected(param0: com.braintreepayments.api.dropin.utils.PaymentMethodType): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module dropin {
				export module adapters {
					export class VaultManagerPaymentMethodsAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<com.braintreepayments.api.dropin.adapters.VaultManagerPaymentMethodsAdapter.ViewHolder> {
						public static class: java.lang.Class<com.braintreepayments.api.dropin.adapters.VaultManagerPaymentMethodsAdapter>;
						public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.braintreepayments.api.dropin.adapters.VaultManagerPaymentMethodsAdapter.ViewHolder;
						public constructor(param0: globalAndroid.view.View.OnClickListener);
						public onBindViewHolder(param0: com.braintreepayments.api.dropin.adapters.VaultManagerPaymentMethodsAdapter.ViewHolder, param1: number): void;
						public getItemCount(): number;
						public setPaymentMethodNonces(param0: java.util.List<com.braintreepayments.api.models.PaymentMethodNonce>): void;
						public getPaymentMethodNonces(): java.util.ArrayList<com.braintreepayments.api.models.PaymentMethodNonce>;
						public getPaymentMethodNonce(param0: number): com.braintreepayments.api.models.PaymentMethodNonce;
						public paymentMethodDeleted(param0: com.braintreepayments.api.models.PaymentMethodNonce): void;
					}
					export module VaultManagerPaymentMethodsAdapter {
						export class ViewHolder {
							public static class: java.lang.Class<com.braintreepayments.api.dropin.adapters.VaultManagerPaymentMethodsAdapter.ViewHolder>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module dropin {
				export module adapters {
					export class VaultedPaymentMethodsAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<com.braintreepayments.api.dropin.adapters.VaultedPaymentMethodsAdapter.ViewHolder> {
						public static class: java.lang.Class<com.braintreepayments.api.dropin.adapters.VaultedPaymentMethodsAdapter>;
						public getItemCount(): number;
						public constructor(param0: com.braintreepayments.api.interfaces.PaymentMethodNonceCreatedListener, param1: java.util.List<com.braintreepayments.api.models.PaymentMethodNonce>);
						public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.braintreepayments.api.dropin.adapters.VaultedPaymentMethodsAdapter.ViewHolder;
						public onBindViewHolder(param0: com.braintreepayments.api.dropin.adapters.VaultedPaymentMethodsAdapter.ViewHolder, param1: number): void;
					}
					export module VaultedPaymentMethodsAdapter {
						export class ViewHolder {
							public static class: java.lang.Class<com.braintreepayments.api.dropin.adapters.VaultedPaymentMethodsAdapter.ViewHolder>;
							public icon: globalAndroid.widget.ImageView;
							public title: globalAndroid.widget.TextView;
							public description: globalAndroid.widget.TextView;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module dropin {
				export module interfaces {
					export class AddPaymentUpdateListener {
						public static class: java.lang.Class<com.braintreepayments.api.dropin.interfaces.AddPaymentUpdateListener>;
						/**
						 * Constructs a new instance of the com.braintreepayments.api.dropin.interfaces.AddPaymentUpdateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onPaymentUpdated(param0: globalAndroid.view.View): void;
							onBackRequested(param0: globalAndroid.view.View): void;
						});
						public constructor();
						public onBackRequested(param0: globalAndroid.view.View): void;
						public onPaymentUpdated(param0: globalAndroid.view.View): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module dropin {
				export module interfaces {
					export class AnimationFinishedListener {
						public static class: java.lang.Class<com.braintreepayments.api.dropin.interfaces.AnimationFinishedListener>;
						/**
						 * Constructs a new instance of the com.braintreepayments.api.dropin.interfaces.AnimationFinishedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onAnimationFinished(): void;
						});
						public constructor();
						public onAnimationFinished(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module dropin {
				export module utils {
					export class PaymentMethodType {
						public static class: java.lang.Class<com.braintreepayments.api.dropin.utils.PaymentMethodType>;
						public static AMEX: com.braintreepayments.api.dropin.utils.PaymentMethodType;
						public static GOOGLE_PAYMENT: com.braintreepayments.api.dropin.utils.PaymentMethodType;
						public static DINERS: com.braintreepayments.api.dropin.utils.PaymentMethodType;
						public static DISCOVER: com.braintreepayments.api.dropin.utils.PaymentMethodType;
						public static JCB: com.braintreepayments.api.dropin.utils.PaymentMethodType;
						public static MAESTRO: com.braintreepayments.api.dropin.utils.PaymentMethodType;
						public static MASTERCARD: com.braintreepayments.api.dropin.utils.PaymentMethodType;
						public static PAYPAL: com.braintreepayments.api.dropin.utils.PaymentMethodType;
						public static VISA: com.braintreepayments.api.dropin.utils.PaymentMethodType;
						public static PAY_WITH_VENMO: com.braintreepayments.api.dropin.utils.PaymentMethodType;
						public static UNIONPAY: com.braintreepayments.api.dropin.utils.PaymentMethodType;
						public static HIPER: com.braintreepayments.api.dropin.utils.PaymentMethodType;
						public static HIPERCARD: com.braintreepayments.api.dropin.utils.PaymentMethodType;
						public static UNKNOWN: com.braintreepayments.api.dropin.utils.PaymentMethodType;
						public static valueOf(param0: string): com.braintreepayments.api.dropin.utils.PaymentMethodType;
						public static values(): native.Array<com.braintreepayments.api.dropin.utils.PaymentMethodType>;
						public static forType(param0: string): com.braintreepayments.api.dropin.utils.PaymentMethodType;
						public getDrawable(): number;
						public getLocalizedName(): number;
						public static forType(param0: com.braintreepayments.api.models.PaymentMethodNonce): com.braintreepayments.api.dropin.utils.PaymentMethodType;
						public static getCardsTypes(param0: java.util.Set<string>): native.Array<com.braintreepayments.cardform.utils.CardType>;
						public getCanonicalName(): string;
						public getVaultedDrawable(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module dropin {
				export module view {
					export class AddCardView {
						public static class: java.lang.Class<com.braintreepayments.api.dropin.view.AddCardView>;
						public setErrors(param0: com.braintreepayments.api.exceptions.ErrorWithResponse): void;
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
						public setVisibility(param0: number): void;
						public onCardTypeChanged(param0: com.braintreepayments.cardform.utils.CardType): void;
						public getCardForm(): com.braintreepayments.cardform.view.CardForm;
						public showCardNotSupportedError(): void;
						public setAddPaymentUpdatedListener(param0: com.braintreepayments.api.dropin.interfaces.AddPaymentUpdateListener): void;
						public setup(param0: androidx.appcompat.app.AppCompatActivity, param1: com.braintreepayments.api.models.Configuration, param2: boolean): void;
						public onCardFormValid(param0: boolean): void;
						public onCardFormSubmit(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public isCardNumberError(param0: com.braintreepayments.api.exceptions.ErrorWithResponse): boolean;
						public onSaveInstanceState(): globalAndroid.os.Parcelable;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
						public onClick(param0: globalAndroid.view.View): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module dropin {
				export module view {
					export class AnimatedButtonView {
						public static class: java.lang.Class<com.braintreepayments.api.dropin.view.AnimatedButtonView>;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
						public showButton(): void;
						public setClickListener(param0: globalAndroid.view.View.OnClickListener): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public showLoading(): void;
						public requestButtonFocus(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public onClick(param0: globalAndroid.view.View): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module dropin {
				export module view {
					export class EditCardView {
						public static class: java.lang.Class<com.braintreepayments.api.dropin.view.EditCardView>;
						public setMaskCvv(param0: boolean): void;
						public setErrors(param0: com.braintreepayments.api.exceptions.ErrorWithResponse): void;
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
						public setVisibility(param0: number): void;
						public useUnionPay(param0: androidx.appcompat.app.AppCompatActivity, param1: boolean, param2: boolean): void;
						public getCardForm(): com.braintreepayments.cardform.view.CardForm;
						public setAddPaymentUpdatedListener(param0: com.braintreepayments.api.dropin.interfaces.AddPaymentUpdateListener): void;
						public onCardFormFieldFocused(param0: globalAndroid.view.View): void;
						public onCardFormSubmit(): void;
						/** @deprecated */
						public setup(param0: androidx.appcompat.app.AppCompatActivity, param1: com.braintreepayments.api.models.Configuration): void;
						public setup(param0: androidx.appcompat.app.AppCompatActivity, param1: com.braintreepayments.api.models.Configuration, param2: com.braintreepayments.api.dropin.DropInRequest): void;
						public setMaskCardNumber(param0: boolean): void;
						public setCardNumber(param0: string): void;
						public isEditCardError(param0: com.braintreepayments.api.exceptions.ErrorWithResponse): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public onClick(param0: globalAndroid.view.View): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module dropin {
				export module view {
					export class EnrollmentCardView {
						public static class: java.lang.Class<com.braintreepayments.api.dropin.view.EnrollmentCardView>;
						public setErrors(param0: com.braintreepayments.api.exceptions.ErrorWithResponse): void;
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
						public setVisibility(param0: number): void;
						public setPhoneNumber(param0: string): void;
						public setAddPaymentUpdatedListener(param0: com.braintreepayments.api.dropin.interfaces.AddPaymentUpdateListener): void;
						public isEnrollmentError(param0: com.braintreepayments.api.exceptions.ErrorWithResponse): boolean;
						public setup(param0: androidx.appcompat.app.AppCompatActivity): void;
						public getSmsCode(): string;
						public hasFailedEnrollment(): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public onEditorAction(param0: globalAndroid.widget.TextView, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public onClick(param0: globalAndroid.view.View): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module braintreepayments {
		export module api {
			export module dropin {
				export module view {
					export class PaymentMethodItemView {
						public static class: java.lang.Class<com.braintreepayments.api.dropin.view.PaymentMethodItemView>;
						public getPaymentMethodNonce(): com.braintreepayments.api.models.PaymentMethodNonce;
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
						public setOnDeleteIconClick(param0: globalAndroid.view.View.OnClickListener): void;
						public setPaymentMethod(param0: com.braintreepayments.api.models.PaymentMethodNonce, param1: boolean): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					}
				}
			}
		}
	}
}

//Generics information:

