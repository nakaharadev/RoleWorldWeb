import { LanguageContext } from "../util/Language";
import CustomizationSettings from "./CustomizationSettings";
import LanguageSettings from "./LanguageSettings";
import Separator from "./Separator";

export default function Settings() {
    return (
        <LanguageContext.Consumer>
            {({ lang }) => (
                <div className="fill_parent vertical_block">
                    <LanguageSettings />
                    <Separator title={lang.settings_customization_block_title}/>
                    <CustomizationSettings />
                </div>
            )}
        </LanguageContext.Consumer>
    );
}