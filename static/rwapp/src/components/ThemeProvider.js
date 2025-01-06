import { useState } from "react";
import { ThemeContext, themes } from "../util/Theme";
import * as userData from "../util/UserData";

export default function ThemeProvider({ children }) {
    let defaultTheme = undefined;

    if (!userData.loadData()) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            defaultTheme = themes.dark;
            userData.set("theme", {
                isDark: true
            });
        } else {
            defaultTheme = themes.light;
            userData.set("theme", {
                isDark: false
            });
        }
    } else {
        defaultTheme = userData.data.theme.isDark ? themes.dark : themes.light;
    }

    const [ theme, setTheme ] = useState({
        "style": defaultTheme,
        "isDark": userData.data.theme.isDark
    })

    function toggleIsDark(value) {
        userData.set("theme", {
            "isDark": value
        });
        userData.writeInStorage();

        setTheme(prevTheme => ({
            ...prevTheme,
            isDark: value,
            style: value ? themes.dark : themes.light
        }))
    }

    return (
        <ThemeContext.Provider value={{ ...theme, toggleIsDark }}>
            { children }
        </ThemeContext.Provider>
    );
} 