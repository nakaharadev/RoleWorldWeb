import Theme, { ThemeContext } from "../util/Theme";

export default function Input({ id="", classes="", inputType = "text", hint = "", isPasswordInput = false, onFocusCallback }) {
    return (
        <ThemeContext.Consumer>
            {({ style }) => (
                <input className={classes} id={id} type={inputType} placeholder={hint} onFocus={onFocusCallback} style={{
                    "marginBottom": "20px",
                    "width": isPasswordInput ? "100%" : "300px",
                    "color": style.main_text_color,
                    "background": "transparent",
                    "border": "none",
                    "fontSize": "15pt",
                    "fontFamily": "Raleway, sans-serif",
                    "fontOpticalSizing": "auto",
                    "fontStyle": "normal",
                }}/>
            )}
        </ThemeContext.Consumer>
    );
}