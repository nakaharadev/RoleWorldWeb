import { useState } from "react";
import DoneButton from "./DoneButton";
import Input from "./Input";
import PasswordInput from "./PasswordInput";
import UiBlock from "./UiBlock";
import Theme, { ThemeContext } from "../util/Theme";

export default function Auth({ onAuthCallback }) {
    const AUTH_SIGN_IN = "sign_in";
    const AUTH_SIGN_UP = "sign_up";

    let [ authType, setAuthType ] = useState(AUTH_SIGN_IN);

    function getInputData() {
        if (authType == AUTH_SIGN_IN) {
            return {
                "type": "sign_in",
                "email": document.querySelector("#sign_in_email").value,
                "password": document.querySelector("#sign_in_password").value
            }
        } else {
            return {
                "type": "sign_up",
                "nickname": document.querySelector("#sign_up_nickname").value,
                "email": document.querySelector("#sign_up_email").value,
                "password": document.querySelector("#sign_up_password").value
            }
        }
    }

    function handleSignInFocus() {
        setAuthType(AUTH_SIGN_IN);
    }

    function handleSignUpFocus() {
        setAuthType(AUTH_SIGN_UP)
    }

    function auth() {
        let inputData = getInputData();
        let { type, ...sendData } = inputData;
        fetch(`http://192.168.0.114:8080/app/auth/${inputData.type}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "http://192.168.0.114:8080"
            },
            body: JSON.stringify(sendData)
        })
            .then(response => response.json())
            .then(json => {
                onAuthCallback(json);
            })
    }

    return (
        <ThemeContext.Consumer>
            {({ style }) => (
                <>
                    <div className="logo flex_block space_between_block align_center_block">
                        <img className="logo_img" src="/app_icon.png" alt="logo"/>
                        <p style={{ "color": style.main_text_color }} className="logo_text">RoleWorld</p>
                    </div>
                    <div className="flex_block child_center_block fill_parent" id="auth_block_container">
                        <div className="vertical_block">
                            <div className="fill_width_block space_between_block">
                                <p style={{
                                    transition: "color .2s",
                                    color: authType == AUTH_SIGN_IN ? style.main_text_color : style.hint_color
                                }} className="block_title" id="sign_in">Sign in</p>
                                <p style={{
                                    transition: "color .2s",
                                    color: authType == AUTH_SIGN_UP ? style.main_text_color : style.hint_color
                                }} className="block_title" id="sign_up">Sign up</p>
                            </div>
                            <UiBlock>
                                <div id="auth_block">
                                    <div className="vertical_block">
                                        <Input id="sign_in_email" classes="email" hint="email" onFocusCallback={ handleSignInFocus } />
                                        <PasswordInput id="sign_in_password" classes="password" type="password" hint="password" onFocusCallback={ handleSignInFocus } />
                                    </div>
                                    <div className="vertical_block">
                                        <Input id="sign_up_nickname" classes="nickname" hint="nickname" onFocusCallback={ handleSignUpFocus } />
                                        <Input id="sign_up_email" classes="email" type="email" hint="email" onFocusCallback={ handleSignUpFocus } />
                                        <PasswordInput id="sign_up_password" classes="password" type="password" hint="password" onFocusCallback={ handleSignUpFocus } />
                                        <PasswordInput id="sign_up_repeat_password" classes="repeat_password" type="password" hint="repeat password" onFocusCallback={ handleSignUpFocus } />
                                    </div>
                                </div>
                                <DoneButton callback={() => auth()}/>
                            </UiBlock>
                        </div>
                    </div>
                </>
            )}
        </ThemeContext.Consumer>
    );
}