import { auth } from "./app-controllers-authController.js"
import * as app from "./app-controllers-appController.js"

function getMainPage(userData) {
    let buttonContainer = document.querySelector("#done_button_container");

    return fetch("/web/main_page")
            .then(response => response.text())
            .then(mainHtml => app.initAfterAuth(mainHtml, userData));
}

function main() {
    let userData = localStorage.getItem("userData");
    if (userData != null) {
        getMainPage(JSON.parse(userData));
    } else {
        auth(getMainPage);
    }
}

window.onload = function() {
    main();
}