import Theme, { ThemeContext } from "../util/Theme";
import { useState } from "react";

export default function ClickableSpan({ id, text, callback }) {
    let [ isHover, setIsHover ] = useState(false);

    function handleClick(event) {
        callback(event.target.id);
    }

    function handleEnter() {
        setIsHover(true);
    }

    function handleLeave() {
        setIsHover(false);
    }

    return (
        <ThemeContext.Consumer>
            {({ style }) => (
                <span style={{
                    "textDecoration": "underline",
                    "color": isHover ? style.main_text_color : style.hint_color,
                    "cursor": "pointer",
                    "transition": "color .2s"
                }} id={id} onClick={handleClick} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>{text}</span>
            )}
        </ThemeContext.Consumer>
    );
}