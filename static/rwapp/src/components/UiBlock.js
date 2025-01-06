import PropTypes from "prop-types";
import Theme, { ThemeContext } from "../util/Theme";

export default function UiBlock({ children, styles }) {
    return (
        <ThemeContext.Consumer>
            {({ style }) => (
                <div style={{
                    "backdropFilter": "blur(5px)",
                    "borderRadius": "30px",
                    "padding": "30px",
                    "backgroundColor": style.transparent_ui_block_bg,
                    "display": "flex",
                    "flexDirection": "column",
                    ...styles
                }} className="ui_block">
                    { children }
                </div>
            )}
        </ThemeContext.Consumer>
    );
}

UiBlock.propTypes = {
    children: PropTypes.element.isRequired
}