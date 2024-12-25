import * as userData from "./app-data-userData.js";

export let currentLang = "";

export function setLang(value, callback = null) {
    currentLang = value;

    document.querySelector("#toggle_language").innerText = currentLang;
    userData.set("lang", currentLang)
    userData.save();

    let localize = localStorage.getItem("localize");
    if (localize == null || JSON.parse(localize).lang != currentLang) {
        fetch(`/web/locale?lang=${currentLang}&keys=*`)
            .then(response => response.json())
            .then(localize => {
                localize.lang = currentLang;
                localStorage.setItem("localize", JSON.stringify(localize));

                if (callback != null)
                    callback(localize);
            });
    }
}

export function toggleLang() {
    if (currentLang == "en")
        currentLang = "ru"
    else currentLang = "en";

    setLang(currentLang, localized => {
        document.querySelectorAll(".localized").forEach(elem => {
            if (elem.tagName.toLowerCase() == "input") {
                elem.placeholder = localized[elem.classList[elem.classList.length - 1]];
            } else {
                if (localized[elem.classList[elem.classList.length - 1]] == undefined) {
                    elem.innerHTML = localized[elem.classList[elem.classList.length - 2]];
                } else elem.innerHTML = localized[elem.classList[elem.classList.length - 1]];
            }
        });
    })
}