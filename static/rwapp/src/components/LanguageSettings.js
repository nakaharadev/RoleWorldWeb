import { useState } from "react";
import { LanguageContext } from "../util/Language";
import { ThemeContext } from "../util/Theme";

export default function LanguageSettings() {
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
                <LanguageContext.Consumer>
                    {({ lang, ruEnToggle }) => (
                        <div class="fill_width_block horizontal_block space_between_block settings_field non_padding">
                            <p style={{
                                "color": style.main_text_color
                            }} class="settings_field_title localized settings_field_lang">{ lang.settings_field_lang }</p>
                            <p style={{
                                "color": isHover ? style.main_text_color : style.hint_color,
                                "backgroundColor": style.selector_bg
                            }} onMouseEnter={handleEnter} onMouseLeave={handleLeave} class="settings_selector" id="toggle_language" onClick={ruEnToggle}>{ lang.name }</p>
                        </div>
                    )}
                </LanguageContext.Consumer>
            )}
        </ThemeContext.Consumer>
    );
}