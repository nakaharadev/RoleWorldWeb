import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../util/Theme";

export default function VideoBackground() {
    let videoRef = useRef()
    let context = useContext(ThemeContext);

    useEffect(() => {
        videoRef.current.load();
    }, [context.style]);

    return (
        <ThemeContext.Consumer>
            {({ style }) => (
                <video style={{
                    "position": "fixed",
                    "top": 0,
                    "left": 0,
                    "width": "100%",
                    "height": "100%",
                    "zIndex": -1,
                    'objectFit': "cover",
                    "opacity": 1,
                }} ref={videoRef} autoPlay muted loop>
                    <source src={style.bg_path} type="video/mp4"/>
                </video>
            )}
        </ThemeContext.Consumer>
    );
}