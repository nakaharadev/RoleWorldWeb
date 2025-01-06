import { ThemeContext } from "../util/Theme";

export default function ExtendedCharacterCardDescription({ title, content }) {
    return (
        <ThemeContext.Consumer>
            {({ style }) => (
                <div style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "10px",
                    flexDirection: "column"
                }} class="fill_parent inline_block">
                    <p style={{
                        color: style.main_text_color,
                        fontSize: "15pt",
                        fontFamily: "Assistant, sans-serif",
                        fontWeight: 300
                    }} class="non_margin">{ title }</p>
                    <p style={{
                        height: "100%",
                        marginTop: "5px",
                        boxSizing: "border-box",
                        color: style.darked_text_color,
                        fontSize: "13pt",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        fontFamily: "Montserrat, sans-serif",
                        fontOpticalSizing: "auto",
                        fontWeight: 200,
                        fontStyle: "normal"
                    }} class="extended_character_description non_margin localized character_data_empty_hint">{ content }</p>
                </div>
            )}
        </ThemeContext.Consumer>
    );
}