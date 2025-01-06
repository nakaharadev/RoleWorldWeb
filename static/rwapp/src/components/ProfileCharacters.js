import { characters } from "../util/Characters";
import { LanguageContext } from "../util/Language";
import { ThemeContext } from "../util/Theme";
import CharacterCard from "./CharacterCard";

export default function ProfileCharacters() {
    function getCharacters() {
        let charactersList = [];

        characters.forEach(elem => {
            charactersList.push(<CharacterCard characterJson={elem}/>)
        });

        return charactersList;
    }

    return (
        <ThemeContext.Consumer>
            {({ style }) => (
                <LanguageContext.Consumer>
                    {({ lang }) => (
                        <div className="vertical_block fill_width_block profile_content_block child_center_vertical_block" id="characters_data">
                            {
                                characters.length == 0 ? <p style={{ "color": style.hint_color }} className="empty_list_hint localized profile_characters_block_empty">{lang.profile_characters_block_empty}</p> : getCharacters()
                            }
                        </div>
                    )}
                </LanguageContext.Consumer>
            )}
        </ThemeContext.Consumer>
    );
}