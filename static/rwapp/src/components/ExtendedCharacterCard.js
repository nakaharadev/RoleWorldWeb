import { LanguageContext } from "../util/Language";
import { ThemeContext } from "../util/Theme";
import CharacterSex from "./CharacterSex";
import ExtendedCharacterCardDescription from "./ExtendedCharacterCardDescription";

export default function ExtendedCharacterCard({ characterJson }) {
    return (
        <LanguageContext.Consumer>
            {({ lang }) => (
                <ThemeContext.Consumer>
                    {({ style }) => (
                        <div style={{
                            width: "100%",
                            marginBottom: "30px",
                            boxSizing: "border-box"
                        }} class="vertical_block">
                            <div class="horizontal_block flex_block child_center_vertical_block">
                                <div style={{
                                    width: "100px",
                                    height: "100px",
                                    marginRight: "20px",
                                    position: "relative"
                                }}>
                                    <img style={{
                                        width: "100px",
                                        height: "100px"
                                    }} src={`http://192.168.0.114:8080/app/get_character/avatar/${characterJson.id}`}/>
                                    <CharacterSex name={characterJson.sex} />
                                </div>
                                <p style={{
                                    color: style.main_text_color,
                                    fontSize: "21pt",
                                    fontFamily: "Kumbh Sans, sans-serif",
                                    fontOpticalSizing: "auto",
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    margin: 0,
                                    marginRight: "15px",
                                    cursor: "pointer"
                                }} class="extended_character_name underline_text">{ characterJson.name }</p>
                            </div>
                            <div style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                                marginTop: "10px"
                            }} class="horizontal_block">
                                <ExtendedCharacterCardDescription title={ lang.description } content={ characterJson.desc == "" ? lang.character_data_empty_hint : characterJson.desc } />
                                <div class="vertical_separator" />
                                <ExtendedCharacterCardDescription title={ lang.bio } content={ characterJson.bio == "" ? lang.character_data_empty_hint : characterJson.bio } />
                            </div>
                        </div>
                    )}
                </ThemeContext.Consumer>
            )}
        </LanguageContext.Consumer>
    );
}