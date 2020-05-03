import * as application from 'tns-core-modules/application';
import { setupBraintreeAppDeligate, setUrlScheme, handleReturnUrl } from "nativescript-braintree";
import { handleOpenURL, AppURL } from 'nativescript-urlhandler';
import { LaunchEventData, launchEvent, on } from 'tns-core-modules/application';


handleOpenURL((appURL: AppURL) => {
    console.log('Got the following appURL', appURL.params);
    //handleReturnUrl(appURL, application.ios)
});

if (application.ios) {
    //setUrlScheme("org.nativescript.demo.payments");
    setupBraintreeAppDeligate("org.nativescript.demo.payments");
}

let launchListener = (args: LaunchEventData) => {
    console.log("The appication was launched!");
    //setUrlScheme("org.nativescript.demo.payments");
};

on(launchEvent, launchListener);

application._start({ moduleName: "main-page" });
