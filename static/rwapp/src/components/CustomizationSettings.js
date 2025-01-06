import Localization, { LanguageContext } from "../util/Language";
import { ThemeContext } from "../util/Theme";
import { data } from "../util/UserData";
import ToggleButton from "./ToggleButton";

export default function CustomizationSettings() {
    return (
        <ThemeContext.Consumer>
            {({ style, isDark, toggleIsDark }) => (
                <LanguageContext.Consumer>
                    {({ lang }) => (
                        <div class="fill_width_block horizontal_block space_between_block settings_field">
                            <p style={{
                                "color": style.main_text_color
                            }} className="settings_field_title localized dark_theme">{ lang.dark_theme }</p>
                            <ToggleButton callback={toggleIsDark} defaultValue={isDark} />
                        </div>
                    )}
                </LanguageContext.Consumer>
            )}
        </ThemeContext.Consumer>
    );
}