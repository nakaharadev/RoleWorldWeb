import * as userData from "./app-data-userData.js";
import * as characters from "./app-controllers-charactersController.js";
import * as lang from "./app-util-langUtil.js"

function initMenu() {
    let buttons = document.querySelectorAll(".nav_button");

    buttons.forEach(elem => {
        elem.addEventListener("click", function() {
            buttons.forEach(element => {
                if (element.className.includes("active_nav_button")) {
                    document.querySelector(`#${element.id.substring(5)}`).classList.remove("visible_block");
                    element.classList.remove("active_nav_button");
                }
            });

            document.querySelector(`#${elem.id.substring(5)}`).classList.add("visible_block");
            elem.classList.add("active_nav_button");
        });
    });
}

function initSettings() {
    document.querySelector("#toggle_language").innerText = userData.get("lang");
    document.querySelector("#toggle_language").addEventListener("click", function() {
        lang.toggleLang();
    });

    if (userData.get("theme") == "dark") document.querySelector("#is_dark_theme").checked = true;
    document.querySelector("#is_dark_theme").addEventListener("change", function(event) {
        if (event.target.checked) {
            userData.set("theme", "dark");
        } else {
            userData.set("theme", "light");
        }
        userData.save();

        document.querySelector("#main_stylesheet").href = `/css/app.css?theme=${userData.get("theme")}`;
        let bg = document.querySelector(".video_bg");
        let clonedBg = bg.cloneNode(true);
        bg.style.opacity = 1;
        clonedBg.querySelector(".bg_source").src = `/video/${userData.get("theme")}_background.mp4`;
        clonedBg.load();
        document.querySelector("body").insertBefore(clonedBg, document.querySelector("body").firstChild);
        let intervalId = setInterval(function() {
            if (bg.style.opacity > 0) {
                bg.style.opacity -= 0.01;
            } else {
                clearInterval(intervalId);
                document.querySelectorAll(".video_bg")[1].remove();
            }
        }, 2);
    });
}

function initProfile() {
    document.querySelector("#profile_user_name").innerText = userData.get("nickname");

    let isEditable = false;
    document.querySelector("#edit_user_profile").addEventListener("click", function() {
        document.querySelectorAll(".profile_editable").forEach(elem => {
            if (!isEditable) {
                elem.style.display = "none";
                document.querySelector(`#${elem.id}_input`).style.display = "block";
                document.querySelector(`#${elem.id}_input`).value = elem.innerText;
            } else {
                elem.style.display = "block";
                document.querySelector(`#${elem.id}_input`).style.display = "none";
                elem.innerText = document.querySelector(`#${elem.id}_input`).value;
            }
        });

        isEditable = !isEditable;
    });
}

function saveUserData(data) {
    userData.setAllValues(data);
    userData.save();
}

function initAfterAuth(htmlData, data) {
    document.querySelector("#main_app_block").innerHTML = htmlData;

    saveUserData(data);
    characters.getData(data);
    document.querySelector("#profile_user_id").innerText = data.showId;

    initMenu();
    initSettings();
    initProfile();
}

function init(htmlData, data) {
    document.querySelector("#main_app_block").innerHTML = htmlData;

    userData.setAllValues(data);

    document.querySelector("#profile_user_id").innerText = data.showId;
    characters.load(data.characters.split(' '));

    initMenu();
    initSettings();
    initProfile();
}

export { init, initAfterAuth }