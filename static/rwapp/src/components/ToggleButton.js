import React, { useState } from "react";
import { ThemeContext } from "../util/Theme";

export default function ToggleButton({ callback, defaultValue }) {
    let [ isChecked, setIsChecked ] = useState(defaultValue);

    function handleChange() {
        setIsChecked(!isChecked);
        callback(!isChecked);
    }

    return (
        <ThemeContext.Consumer>
            {({ style }) => (
                <label class="switch" style={{
                    "position": "relative",
                    "display": "inline-block",
                    "width": "60px",
                    "height": "34px",
                }}>
                    <input style={{
                        "opacity": 0,
                        "width": 0,
                        "height": 0,
                    }} type="checkbox" checked={isChecked} onChange={handleChange}/>
                    <span className="slider" style={{
                        "width": "60px",
                        "position": "absolute",
                        "cursor": "pointer",
                        "top": 0,
                        "left": 0,
                        "right": 0,
                        "bottom": 0,
                        "backgroundColor": isChecked ? style.ui_contrast_color : style.hint_color,
                        "transition": "background-color .4s",
                        "borderRadius": "17px"
                    }}></span>
                    <span style={{
                        "position": "absolute",
                        "height": "26px",
                        "width": "26px",
                        "left": "4px",
                        "bottom": "4px",
                        "backgroundColor": style.main_text_color,
                        "transition": ".4s",
                        "borderRadius": "17px",
                        "transform": isChecked ? "translateX(26px)" : "translateX(0)",
                        "cursor": "pointer"
                    }}></span>
                </label>
            )}
        </ThemeContext.Consumer>
    );
}