import * as userData from "./app-data-userData.js";
import * as characters from "./app-controllers-charactersController.js";

function initMenu() {
    let buttons = document.querySelectorAll(".nav_button");

    buttons.forEach(elem => {
        elem.addEventListener("click", function() {
            buttons.forEach(element => {
                if (element.className.includes("active_nav_button")) {
                    if (element.id == "open_profile")       document.querySelector("#profile").classList.remove("visible_block");
                    if (element.id == "open_characters")    document.querySelector("#characters").classList.remove("visible_block");
                    if (element.id == "open_chats")         document.querySelector("#chats").classList.remove("visible_block");

                    element.classList.remove("active_nav_button");
                }
            });

            if (elem.id == "open_profile")      document.querySelector("#profile").classList.add("visible_block");
            if (elem.id == "open_characters")   document.querySelector("#characters").classList.add("visible_block");
            if (elem.id == "open_chats")        document.querySelector("#chats").classList.add("visible_block");
            elem.classList.add("active_nav_button");
        });
    });
}

function saveUserData(data) {
    userData.setAllValues(data);
    localStorage.setItem("userData", JSON.stringify(data));
}

function initAfterAuth(htmlData, data) {
    document.querySelector("#main_app_block").innerHTML = htmlData;
    saveUserData(data);
    characters.getData(data, loadCharacters);
}

function init(htmlData, data) {
    document.querySelector("#main_app_block").innerHTML = htmlData;
    userData.setAllValues(data);

    document.querySelector("#profile_user_id").innerText = data.showId;
    characters.load(data.characters.split(' '));

    initMenu();
}

export { init, initAfterAuth }