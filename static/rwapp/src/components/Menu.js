import { useState } from "react";
import { LanguageContext } from "../util/Language";
import { ThemeContext } from "../util/Theme";
import MenuButton from "./MenuButton";
import UiBlock from "./UiBlock";

export default function Menu({ onMenuButtonPressedCallback }) {
    let [ currentActive, setCurrentActive ] = useState("open_profile");

    let isActiveMap = {
        "open_profile": useState(true),
        "open_characters": useState(false),
        "open_chats": useState(false),
        "open_settings": useState(false)
    }

    function handleClick(id) {
        onMenuButtonPressedCallback(id);
        isActiveMap[currentActive][1](false);
        isActiveMap[id][1](true);
        setCurrentActive(id);
    }

    return (
        <ThemeContext.Consumer>
            {({ style }) => (
                <LanguageContext.Consumer>
                    {({ lang }) => (
                        <UiBlock styles={{
                            "margin": "30px 30px 30px 0",
                            "justifyContent": "space-between"
                        }}>
                            <div>
                                <div className="logo flex_block space_between_block align_center_block static_pos">
                                    <img className="logo_img" src="http://192.168.0.114:8080/img/app_icon.png" alt="logo"/>
                                    <p className="logo_text" style={{ "color": style.main_text_color }}>RoleWorld</p>
                                </div>
                                <div className="vertical_block margin_top" id="navigation_block">
                                    <MenuButton localizationClass={"menu_profile_btn"} id={"open_profile"} callback={handleClick} title={lang.menu_profile_btn} isActive={isActiveMap.open_profile[0]} />
                                    <MenuButton localizationClass={"menu_characters_btn"} id={"open_characters"} callback={handleClick} title={lang.menu_characters_btn} isActive={isActiveMap.open_characters[0]} />
                                    <MenuButton localizationClass={"menu_chats_btn"} id={"open_chats"} callback={handleClick} title={lang.menu_chats_btn} isActive={isActiveMap.open_chats[0]} />
                                </div>
                            </div>
                            <MenuButton localizationClass={"menu_settings_btn"} id={"open_settings"} callback={handleClick} title={lang.menu_settings_btn} isActive={isActiveMap.open_settings[0]} />
                        </UiBlock>
                    )}
                </LanguageContext.Consumer>
            )}
        </ThemeContext.Consumer>
    );
}