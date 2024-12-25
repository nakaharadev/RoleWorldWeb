import { auth } from "./app-controllers-authController.js"
import * as app from "./app-controllers-appController.js"
import * as lang from "./app-util-langUtil.js"

function getMainPage(userData, authLoad) {
    return fetch(`/web/main_page?id=${userData.userId}&lang=${userData.lang}&theme=${userData.theme}`)
            .then(response => response.text())
            .then(mainHtml => {
                if (authLoad) app.initAfterAuth(mainHtml, userData)
                else app.init(mainHtml, userData)
            });
}

function main() {
    let userData = JSON.parse(localStorage.getItem("userData"));

    let css = document.createElement("link");
    css.rel = "stylesheet";
    css.type = "text/css";
    css.id = "main_stylesheet";

    if (userData != null) {
        css.href = `/css/app.css?theme=${userData.theme}`;
        document.querySelector("head").appendChild(css);

        document.querySelector(".bg_source").src = `/video/${userData.theme}_background.mp4`;
        document.querySelector(".video_bg").load();

        getMainPage(userData, false);
    } else {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.querySelector(".bg_source").src = "/video/dark_background.mp4";
            css.href = "/css/app.css?theme=dark";
        } else {
            document.querySelector(".bg_source").src = "/video/light_background.mp4";
            css.href = "/css/app.css?theme=light";
        }
        document.querySelector("head").appendChild(css);
        document.querySelector(".video_bg").load();

        document.querySelector("#toggle_language").innerText = navigator.language;
        lang.setLang(navigator.language);
        
        auth(getMainPage);
    }
}

window.onload = function() {
    main();
}