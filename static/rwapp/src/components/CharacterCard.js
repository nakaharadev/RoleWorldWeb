import { useState } from "react";
import { ThemeContext } from "../util/Theme";
import CharacterSex from "./CharacterSex";

export default function CharacterCard({ characterJson }) {
    let [ isHover, setIsHover ] = useState(false);

    function handleMouseEnter() {
        setIsHover(true);
    }

    function handleMouseLeave() {
        setIsHover(false);
    }

    return (
        <ThemeContext.Consumer>
            {({ style }) => (
                <div style={{
                    width: "100%",
                    marginBottom: "10px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    backgroundColor: isHover ? style.hovered_bg : "transparent",
                    borderRadius: "45px"
                }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <div style={{
                        width: "90px",
                        position: "relative",
                        marginRight: "10px",
                    }}>
                        <img style={{
                            width: "90px"
                        }} src={`http://192.168.0.114:8080/app/get_character/avatar/${characterJson.id}`}/>
                        <CharacterSex type="minimalized" name={characterJson.sex} />
                    </div>
                    <p style={{
                        color: style.main_text_color,
                        fontSize: "17pt"
                    }}>{characterJson.name}</p>
                </div>
            )}
        </ThemeContext.Consumer>
    );
}