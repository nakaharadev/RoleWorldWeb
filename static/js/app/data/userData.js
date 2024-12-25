let json = {}

function get(key) {
    return json[key];
}

function set(key, value) {
    json[key] = value;
}

function setAllValues(jsonValues) {
    for (let key in jsonValues) {
        json[key] = jsonValues[key];
    }
}

function getJson() {
    return json;
}

function save() {
    localStorage.setItem("userData", JSON.stringify(json));
}

export { get, set, setAllValues, getJson, save }