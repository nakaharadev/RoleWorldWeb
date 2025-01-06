import Theme, { ThemeContext } from "../util/Theme";

export default function Separator({ title }) {
    return (
        <ThemeContext.Consumer>
            {({ style }) => (
                <div class="separator">
                    <p style={{ "color": style.main_text_color }} class="separator_title localized settings_customization_block_title">{ title }</p>
                    <div style={{
                        "backgroundColor": style.horizontal_separator_color
                    }} class="separator_line"></div>
                </div>
            )}
        </ThemeContext.Consumer>
    );
}