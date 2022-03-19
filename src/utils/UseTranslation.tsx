import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import engLish from "./localization/en.json"


export const UseTranslationHook = () => {
    i18n
        .use(initReactI18next)
        .init({
            resources: {
                en: {
                    translation: engLish
                }
            },
            lng: "en",
            fallbackLng: "en",
            interpolation: {
                escapeValue: false
            }
        });
}