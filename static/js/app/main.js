import { auth } from "./app-controllers-authController.js"
import * as app from "./app-controllers-appController.js"

function getMainPage(userData, authLoad) {
    let buttonContainer = document.querySelector("#done_button_container");

    return fetch(`/web/main_page?id=${userData.userId}`)
            .then(response => response.text())
            .then(mainHtml => {
                if (authLoad) app.initAfterAuth(mainHtml, userData)
                else app.init(mainHtml, userData)
            });
}

function main() {
    let userData = localStorage.getItem("userData");
    if (userData != null) {
        getMainPage(JSON.parse(userData), false);
    } else {
        auth(getMainPage);
    }
}

window.onload = function() {
    main();
}