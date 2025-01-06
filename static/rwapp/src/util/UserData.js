export let data = {
    theme: undefined,
    lang: undefined,
    authData: undefined
}

export function loadData() {
    let userDataString = localStorage.getItem("userData");
    if (!userDataString)
        return false;

    data = JSON.parse(userDataString);

    return true;
}

export function set(key, value) {
    data[key] = value;
}

export function writeInStorage() {
    localStorage.setItem("userData", JSON.stringify(data));
}