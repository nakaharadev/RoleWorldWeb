import { useState } from "react";
import { ThemeContext } from "../util/Theme";

export default function DoneButton({ callback }) {
    let [ isHover, setIsHover ] = useState(false);
    
    function handleEnter() {
        setIsHover(true);
    }
    
    function handleLeave() {
        setIsHover(false);
    }

    return (
        <ThemeContext.Consumer>
            {({ style }) => (
                <div className="fill_width_block flex_block child_center_block">
                    <p style={{
                        "color": isHover ? style.ui_contrast_color : style.main_text_color,
                        "fontSize": "19pt",
                        "fontFamily": "Raleway, sans-serif",
                        "fontOptical-sizing": "auto",
                        "fontStyle": "normal",
                        "fontWeight": "bold",
                        "margin": 0,
                        "transition": "color .2s, text-shadow .2s",
                        "textAlign": "center",
                        "cursor": "pointer",
                        "textShadow": isHover ? `0 0 10px ${style.ui_contrast_color}` : "none"
                    }} onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={callback}>Done</p>
                </div>
            )}
        </ThemeContext.Consumer>
    );
}