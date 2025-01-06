import { LanguageContext } from "../util/Language";
import { ThemeContext } from "../util/Theme";
import ClickableSpan from "./ClickableSpan";
import { characters } from "../util/Characters";
import ExtendedCharacterCard from "./ExtendedCharacterCard";

export default function Characters() {
    function handleSpanClick(id) {
        console.log(id);
    }

    function getCharacters() {
        let charactersList = [];
    
        characters.forEach(elem => {
            charactersList.push(<ExtendedCharacterCard characterJson={elem}/>)
        });
    
        return charactersList;
    }

    return (
        <ThemeContext.Consumer>
            {({ style }) => (
                <LanguageContext.Consumer>
                    {({ lang }) => (
                        <div className="fill_parent vertical_block child_center_vertical_block">
                            {
                                characters.length == 0 ? (
                                    <p style={{ "color": style.hint_color }} className="empty_content_hint localized characters_list_empty_hint">
                                        <span dangerouslySetInnerHTML={{
                                            __html: `${lang.characters_list_empty_hint} `
                                        }}/>
                                        <ClickableSpan id={"create_character_span"} text={ lang.characters_list_empty_span } callback={handleSpanClick}/>?
                                    </p>
                                ) : (
                                    getCharacters()
                                )
                            }
                        </div>
                    )}
                </LanguageContext.Consumer>
            )}
        </ThemeContext.Consumer>
    );
}