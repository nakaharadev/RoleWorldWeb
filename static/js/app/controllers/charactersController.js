let charactersList = []

function loadCharacter(id) {
    let character = JSON.parse(localStorage.getItem(`character_${id}`))
    charactersList.push(character);

    fetch(`/web/character_card?id=${id}`)
            .then(response => response.text())
            .then(htmlData => {
                let list = document.querySelector("#characters_data");
                list.querySelector(".empty_list_hint").style.display = "none";

                var elem = new DOMParser().parseFromString(htmlData, "text/html");
                elem.querySelector(".character_name").innerText = character.name;
                list.innerHTML += new XMLSerializer().serializeToString(elem);
            });

    fetch(`/web/extended_character_card?id=${id}`)
                .then(response => response.text())
                .then(htmlData => {
                    let list = document.querySelector("#characters");
                    list.querySelector(".empty_content_hint").style.display = "none";

                    var elem = new DOMParser().parseFromString(htmlData, "text/html");
                    elem.querySelector(".extended_character_name").innerText = character.name;
                    if (character.desc.length == 0)
                        elem.querySelector(".extended_character_description").innerText = "Тут пока пусто :("
                    else elem.querySelector(".extended_character_description").innerText = character.desc;
                    if (character.bio.length == 0)
                        elem.querySelector(".extended_character_bio").innerText = "Тут пока пусто :("
                    else elem.querySelector(".extended_character_bio").innerText = character.bio;
                    list.innerHTML += new XMLSerializer().serializeToString(elem);
                });
}

function getCharacterData(id) {
    fetch(`/app/get_character/${id}`)
        .then(response => response.text())
        .then(characterData => {
            saveCharacterData(JSON.parse(characterData))
        });
}

export function load(idList) {
    idList.forEach(id => loadCharacter(id));
}

export function saveData(data) {
    localStorage.setItem(`character_${data.id}`, JSON.stringify(data));
}

export function getData(userData, callback) {
    let ids = userData.characters.split(' ');
    ids.forEach(id => {
        getCharacterData(id);
    });
}