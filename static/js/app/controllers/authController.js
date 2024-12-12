let currentAuthMode = "sign_in";

function sendAuthMessage(request, callback) {
    return fetch("/app/auth/sign_in", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(request)
    })
        .then(response => response.json())
        .then(json => callback(json, true));
}

export function auth(callback) {
     fetch("/web/auth_page")
        .then(response => response.text())
        .then(htmlData => {
            document.querySelector("#main_app_block").innerHTML = htmlData;

            document.querySelectorAll(".toggle_password_visible_container").forEach(elem => {
                let isShow = true;
                elem.addEventListener("click", function() {
                    if (isShow) {
                        elem.querySelectorAll("svg").forEach(svg => {
                            if (svg.id.includes("show")) {
                                svg.style.display = "none"
                            } else {
                                svg.style.display = "block"
                            }
                        });
                        document.querySelector('#' + elem.id.substring(0, elem.id.length - 8)).type = "text"
                    } else {
                        elem.querySelectorAll("svg").forEach(svg => {
                            if (svg.id.includes("hide")) {
                                svg.style.display = "none"

                            } else {
                                svg.style.display = "block"
                            }
                        });
                        document.querySelector('#' + elem.id.substring(0, elem.id.length - 8)).type = "password"
                    }

                    isShow = !isShow;
                });
            });

            document.querySelectorAll(".text_input").forEach(elem => {
                elem.addEventListener("click", function() {
                    let id = elem.id;
                    if (id.includes("up")) {
                        currentAuthMode = "sign_up";
                        document.querySelector("#auth_done").innerText = "Регистрация"
                    } else if (id.includes("in")) {
                        currentAuthMode = "sign_in";
                        document.querySelector("#auth_done").innerText = "Вход"
                    }
                });
            });

            document.querySelector("#auth_done").addEventListener("click", function(event) {
                if (currentAuthMode === "sign_in") {
                    let request = {
                        email: document.querySelector("#sign_in_email").value,
                        password: document.querySelector("#sign_in_password").value
                    };

                    sendAuthMessage(request, callback);

                    return true;
                } else if (currentAuthMode === "sign_up") {
                    let password = document.querySelector("#sign_up_password").value;
                    let repeatPassword = document.querySelector("#sign_up_password_repeat").value;

                    if (password === repeatPassword) {
                        let request = {
                            email: document.querySelector("#sign_up_email").value,
                            nickname: document.querySelector("#sign_up_nickname").value,
                            password: password
                        };

                        sendAuthMessage(request, callback);

                        return true;
                    }
                }

                return false;
            });
        })
}