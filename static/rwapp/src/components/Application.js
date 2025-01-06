import Menu from "./Menu";
import ContentContainer from "./ContentContainer";
import { useState } from "react";
import { addCharacterAddCallback, deleteCharactersDuplicates, loadCharacters, parseCharactersIDs, readCharactersFromStorage } from "../util/Characters";
import { data } from "../util/UserData";

export default function Application() {
    let [ menuState, setMenuState ] = useState("profile");

    addCharacterAddCallback(_ => {
        deleteCharactersDuplicates();
    })

    if (!readCharactersFromStorage()) {
        loadCharacters(parseCharactersIDs(data.authData.characters), true);
    }

    function handleMenuEvent(id) {
        setMenuState(id.substring(5));
    }

    return (
        <div className="horizontal_block fill_parent">
            <Menu onMenuButtonPressedCallback={handleMenuEvent}/>
            <ContentContainer menuEventState={menuState} />
        </div>
    );
}