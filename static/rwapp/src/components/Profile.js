import { LanguageContext } from "../util/Language";
import { ThemeContext } from "../util/Theme";
import { data } from "../util/UserData";
import ProfileCharacters from "./ProfileCharacters";
import Separator from "./Separator";

export default function Profile() {
    let userData = data.authData;

    return (
        <ThemeContext.Consumer>
            {({ style }) => (
                <LanguageContext.Consumer>
                    {({ lang }) => (
                        <div className="fill_parent vertical_block">
                            <div className="horizontal_block fill_width_block profile_content_block" id="user_data">
                                <div className="horizontal_block">
                                    <img id="user_avatar" src={`http://192.168.0.114:8080/app/get_user_data/${userData.userId}/avatar`}/>
                                    <div className="vertical_block">
                                        <div className="user_name">
                                            <p style={{ "color": style.main_text_color }} className="non_margin profile_editable" id="profile_user_name">{userData.nickname}</p>
                                            <input style={{ "color": style.main_text_color }} className="profile_input" type="text" id="profile_user_name_input" placeholder={lang.nickname}/>
                                        </div>
                                        <div className="user_id">
                                            <p style={{ "color": style.main_text_color }} className="non_margin underline_text profile_editable" id="profile_user_id">{userData.showId}</p>
                                            <input style={{ "color": style.main_text_color }} className="profile_input" type="text" id="profile_user_id_input" placeholder={userData.userId}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Separator title={lang.profile_friends_block_title}/>
                            <div className="horizontal_block fill_width_block profile_content_block" id="friends_data">
                                <p style={{ "color": style.hint_color }} className="empty_list_hint localized profile_friends_block_empty">{lang.profile_friends_block_empty}</p>
                            </div>
                            <Separator title={lang.profile_characters_block_title}/>
                            <ProfileCharacters />
                        </div>
                    )}
                </LanguageContext.Consumer>
            )}
        </ThemeContext.Consumer>
    );
}