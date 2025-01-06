import { useState } from "react";
import Characters from "./Characters";
import Chats from "./Chats";
import Profile from "./Profile";
import Settings from "./Settings";
import UiBlock from "./UiBlock";

export default function ContentContainer({ menuEventState }) {
    function getComponent(id) {
        switch (id) {
            case "profile": return <Profile />
            case "characters": return <Characters />
            case "chats": return <Chats />
            case "settings": return <Settings />
        }
    }

    return (
        <UiBlock styles={{
            "margin": "30px 0",
            "width": "100%"
        }}>
            { getComponent(menuEventState) }
        </UiBlock>
    );
}