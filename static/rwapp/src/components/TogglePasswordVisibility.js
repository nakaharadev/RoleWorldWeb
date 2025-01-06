import { useState } from "react";
import { ThemeContext } from "../util/Theme";

export default function TogglePasswordVisiblity({ callback }) {
    let [ isHide, setIsHide ] = useState(true);
    let [ isHover, setIsHover ] = useState(false);

    function handleClick() {
        setIsHide(!isHide);
        callback();
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
                <div>
                    <svg onClick={handleClick} style={{
                        "cursor": "pointer",
                        "height": "30px",
                        "display": isHide ? "block" : "none"
                    }} onMouseEnter={handleEnter} onMouseLeave={handleLeave} version="1.1" id="layer1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 512 512" xmlSpace="preserve">
                        <path style={{
                            "fill": isHover ? style.main_text_color : style.placeholder_color,
                            "transition": "fill .2s"
                        }} className="password_visibility_path" d="M256.4,402.9c-97.4,0-187.6-44.5-231.4-114.8c-14.6-23.3-14.9-52.4-0.7-75.9c20.5-33.8,52.1-62.5,91.4-83.1
                            c39.3-20.6,84.8-32.2,131.4-33.5c100.6-2.8,194.8,42.3,240,114.8c14.6,23.4,14.9,52.4,0.7,75.9c-20.5,33.7-52.1,62.4-91.4,83
                            c-39.3,20.6-84.8,32.1-131.4,33.5C262.1,402.9,259.2,402.9,256.4,402.9z M256,118.5c-2.7,0-5.5,0-8.2,0.1
                            C161.3,121,81.3,162.4,43.9,224.1c-9.7,16-9.5,35.9,0.5,51.8c39.8,63.7,122.3,104,211.9,104c2.7,0,5.3,0,8-0.1
                            c86.4-2.4,166.4-43.8,203.8-105.4c9.7-16,9.5-35.9-0.5-51.8l0,0C427.8,158.8,345.4,118.5,256,118.5z"/>
                        <path style={{
                            "fill": isHover ? style.main_text_color : style.placeholder_color,
                            "transition": "fill .2s"
                        }} className="password_visibility_path" d="M256,342.5c-47.7,0-86.5-38.8-86.5-86.5s38.8-86.5,86.5-86.5s86.5,38.8,86.5,86.5S303.7,342.5,256,342.5z
                                M256,192.5c-35,0-63.5,28.5-63.5,63.5c0,35,28.5,63.5,63.5,63.5c35,0,63.5-28.5,63.5-63.5C319.5,221,291,192.5,256,192.5z"/>
                    </svg>
        
                    <svg onClick={handleClick} style={{
                        "cursor": "pointer",
                        "height": "30px",
                        "display": isHide ? "none" : "block"
                    }} onMouseEnter={handleEnter} onMouseLeave={handleLeave} version="1.1" id="layer1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 512 512" xmlSpace="preserve">
                        <path style={{
                            "fill": isHover ? style.main_text_color : style.placeholder_color,
                            "transition": "fill .2s"
                        }} className="password_visibility_path" d="M120.2,362.1c5.2-5.3,3.9-14.1-2.6-17.7c-30.5-17.5-55.9-40.8-73.3-68.5c-10-16-10.2-35.8-0.5-51.8
                            c37.4-61.6,117.4-103,203.8-105.5c2.8-0.1,5.5-0.1,8.2-0.1c30.4,0,59.9,4.7,87.2,13.3c4.1,1.3,8.5,0.2,11.5-2.8v0
                            c5.9-6,3.4-16.2-4.7-18.7c-32.2-10.1-67.6-15.7-102.9-14.7c-46.6,1.3-92,12.9-131.4,33.5c-39.3,20.6-71,49.3-91.4,83.1
                            c-14.2,23.5-13.9,52.6,0.7,75.9c19.2,30.8,47.5,56.9,81.2,76.2c4.5,2.6,10.2,1.8,13.8-1.9L120.2,362.1z"/>
                        <path style={{
                            "fill": isHover ? style.main_text_color : style.placeholder_color,
                            "transition": "fill .2s"
                        }} className="password_visibility_path" d="M130.7,351.3"/>
                        <path style={{
                            "fill": isHover ? style.main_text_color : style.placeholder_color,
                            "transition": "fill .2s"
                        }} className="password_visibility_path" d="M122.9,372.9L68,427.8c-4.5,4.5-4.5,11.8,0,16.3c2.2,2.2,5.2,3.4,8.1,3.4s5.9-1.1,8.1-3.4l61.4-61.4
                            c34.1,13,71.9,20.2,110.9,20.2c2.8,0,5.7,0,8.5-0.1c46.6-1.3,92-12.9,131.4-33.5c39.4-20.6,71-49.3,91.4-83
                            c14.1-23.4,13.9-52.5-0.7-75.9c-20.7-33.2-51.7-60.7-88.8-80.4l45.9-45.9c4.5-4.5,4.5-11.8,0-16.3s-11.8-4.5-16.3,0L140,355.7
                            M308.3,220c7.1,10.2,11.2,22.7,11.2,36c0,35-28.5,63.5-63.5,63.5c-13.4,0-25.8-4.2-36-11.2L308.3,220z M468.1,274.4
                            c-37.4,61.6-117.4,103-203.8,105.4c-2.7,0.1-5.3,0.1-8,0.1c-32.5,0-64-5.3-92.9-15.1l40.1-40.1c14.6,11.1,32.8,17.8,52.5,17.8
                            c47.7,0,86.5-38.8,86.5-86.5c0-19.7-6.6-37.9-17.8-52.5l56.5-56.5c36.4,18,66.6,43.9,86.3,75.5C477.5,238.6,477.7,258.4,468.1,274.4
                            z"/>
                        <path style={{
                            "fill": isHover ? style.main_text_color : style.placeholder_color,
                            "transition": "fill .2s"
                        }} className="password_visibility_path" d="M294.6,187.3c2.8-2.8,2-7.6-1.6-9.3c-11.3-5.4-23.9-8.4-37.2-8.4c-47.7,0-86.5,38.8-86.5,86.5
                            c0,13.2,3,25.8,8.3,37c1.7,3.6,6.5,4.4,9.3,1.6L294.6,187.3z"/>
                        <path style={{
                            "fill": isHover ? style.main_text_color : style.placeholder_color,
                            "transition": "fill .2s"
                        }} className="password_visibility_path" d="M298.6,196.7"/>
                    </svg>
                </div>
            )}
        </ThemeContext.Consumer>
    );
}