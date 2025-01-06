import React from "react";

let defLight = {
    "placeholder_color": "#444",
    "transparent_ui_block_bg": "#dededeaa",
    "main_text_color": "#000",
    "ui_block_bg": "#dedede",
    "ui_contrast_color": "#ff526d",
    "hovered_bg": "#89898966",
    "hint_color": "#313233",
    "darked_text_color": "#212223",
    "selector_hovered_bg": "#000",
    "separator_color": "#515253",
    "horizontal_separator_color": "#515253",
    "selector_bg": "#ccc",
    "bg_path": "/video/light_background.mp4",
    "bg_type": "video"
}

let defDark = {
    "name": "dark",
    "placeholder_color": "#aaa",
    "transparent_ui_block_bg": "#121212aa",
    "main_text_color": "#fff",
    "ui_block_bg": "#121212",
    "ui_contrast_color": "#a32cc4",
    "hovered_bg": "#23232366",
    "hint_color": "#ccc",
    "darked_text_color": "#ddd",
    "selector_hovered_bg": "#000",
    "separator_color": "#212223",
    "horizontal_separator_color": "#aaa",
    "selector_bg": "#000",
    "bg_path": "/video/dark_background.mp4",
    "bg_type": "video"
}

export const themes = {
    "light": defLight,
    "dark": defDark
}

export const ThemeContext = React.createContext({
    "style": themes.dark,
    "isDark": true,
    "toggleIsDark": (value) => {}
});