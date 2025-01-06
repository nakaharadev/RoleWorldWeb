import { useState } from "react";
import Input from "./Input";
import TogglePasswordVisiblity from "./TogglePasswordVisibility";

export default function PasswordInput({ id="", classes="", hint = "", onFocusCallback }) {
    let [ passwordIsShow, setPasswordIsShow ] = useState(false);

    function handleToggleVisibility() {
        setPasswordIsShow(!passwordIsShow);
    }

    return (
        <div style={{
            "width": "300px",
            "display": "flex",
        }}>
            <Input classes={classes} id={id} inputType={ passwordIsShow ? "text" : "password" } hint={hint} isPasswordInput={true} onFocusCallback={onFocusCallback} />
            <TogglePasswordVisiblity callback={handleToggleVisibility}/>
        </div>
    );
}