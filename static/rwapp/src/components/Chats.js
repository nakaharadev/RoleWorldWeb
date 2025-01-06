import { LanguageContext } from "../util/Language";
import { ThemeContext } from "../util/Theme";
import ClickableSpan from "./ClickableSpan";

export default function Chats() {
    function handleSpanClick(id) {
        console.log(id);
    }

    return (
        <ThemeContext.Consumer>
            {({ style }) => (
                <LanguageContext.Consumer>
                    {({ lang }) => (
                        <div className="fill_parent vertical_block child_center_vertical_block">
                            <p style={{ "color": style.hint_color }} className="empty_content_hint localized chats_list_empty_hint">
                                <span dangerouslySetInnerHTML={{
                                    __html: `${lang.chats_list_empty_hint} `
                                }}/>
                                <ClickableSpan id={"create_character_span"} text={ lang.chats_list_empty_span } callback={handleSpanClick}/>?
                            </p>
                        </div>
                    )}
                </LanguageContext.Consumer>
            )}
        </ThemeContext.Consumer>
        
    );
}