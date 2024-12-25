import * as userData from "./app-data-userData.js";

let charactersList = []

function loadCharacter(id) {
    let characterJson = localStorage.getItem(`character_${id}`);
    if (characterJson == null)
        return;

    let character = JSON.parse(characterJson);
    charactersList.push(character);

    fetch(`/web/character_card?id=${id}&sex=${character.sex}_sex_icon`)
            .then(response => response.text())
            .then(htmlData => {
                let list = document.querySelector("#characters_data");
                list.querySelector(".empty_list_hint").style.display = "none";

                var elem = new DOMParser().parseFromString(htmlData, "text/html");
                elem.querySelector(".character_name").innerText = character.name;
                list.innerHTML += new XMLSerializer().serializeToString(elem);
            });

    fetch(`/web/extended_character_card?id=${id}&lang=${userData.get("lang")}&sex=${character.sex}_sex_icon`)
                .then(response => response.text())
                .then(htmlData => {
                    let list = document.querySelector("#characters");
                    list.querySelector(".empty_content_hint").style.display = "none";

                    var elem = new DOMParser().parseFromString(htmlData, "text/html");
                    elem.querySelector(".extended_character_name").innerText = character.name;
                    if (character.desc.length != 0)
                        elem.querySelector(".extended_character_description").innerText = character.desc;
                    if (character.bio.length != 0)
                        elem.querySelector(".extended_character_bio").innerText = character.bio;
                    list.innerHTML += new XMLSerializer().serializeToString(elem);
                });
}

function getCharacterData(id, callback = undefined) {
    fetch(`/app/get_character/${id}`)
        .then(response => response.text())
        .then(characterData => {
            saveData(JSON.parse(characterData))
            if (callback != undefined) callback(id)
        });
}

export function load(idList) {
    idList.forEach(id => loadCharacter(id));
}

export function saveData(data) {
    localStorage.setItem(`character_${data.id}`, JSON.stringify(data));
}

export function getData(userData) {
    let ids = userData.characters.split(' ');
    ids.forEach(id => {
        getCharacterData(id, loadCharacter);
    });
}