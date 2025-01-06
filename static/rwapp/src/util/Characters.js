let callbacks = [];

export let characters = [];

export function deleteCharactersDuplicates(autowrite = false) {
    let indices = []

    for (let i = 0; i < characters.length; i++) {
        for (let j = 0; j < characters.length; j++) {
            if (characters[i].id == characters[j].id)
                indices.push(i);
        }
    }

    indices.forEach(index => {
        characters.splice(index, index);
    });

    if (autowrite)
        localStorage.setItem("characters", characters)
}

export function parseCharactersIDs(IDs) {
    return IDs.split(" ");
}

export function addCharacter(characterJson, autowrite = false) {
    if (!characters.includes(characterJson)) {
        characters.push(characterJson);
        if (autowrite)
            localStorage.setItem("characters", JSON.stringify(characters));

        callbacks.forEach(callback => callback(characterJson));
    }
}

export function addCharacters(charactersJsonArray, autowrite = false) {
    charactersJsonArray.forEach(elem => {
        addCharacter(elem, autowrite);
    })
}

export function loadCharacter(id, autowrite = false) {
    fetch(`http://192.168.0.114:8080/app/get_character/${id}`)
        .then(response => response.json())
        .then(json => addCharacter(json, autowrite));
}

export function loadCharacters(idList = [], autowrite = false) {
    idList.forEach(elem => {
        loadCharacter(elem, autowrite);
    });
}

export function readCharactersFromStorage() {
    let storageData = localStorage.getItem("characters");
    if (!storageData)
        return false;

    characters = JSON.parse(storageData);

    return true;
}

export function addCharacterAddCallback(callback) {
    callbacks.push(callback);
}