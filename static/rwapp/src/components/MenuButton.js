import { useState } from "react";
import { ThemeContext } from "../util/Theme";

export default function MenuButton({ localizationClass, id, callback, title, isActive = false }) {
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
                <p style={{
                    "color": style.main_text_color,
                    "borderLeft": isActive ? `2px solid ${style.ui_contrast_color}` : "none",
                    "backgroundColor": isHover ? style.hovered_bg : "transparent"
                }} onMouseEnter={handleEnter} onMouseLeave={handleLeave} className={ `nav_button flex_block child_center_vertical_block localized ${localizationClass}` } id={id} onClick={handleClick}>{ title }</p>
            )}
        </ThemeContext.Consumer>
    );
}