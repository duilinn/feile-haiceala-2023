import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources: {
            en: {
                translation: {
                    "Welcome to React": "Welcome to React and react-i18next",
                    "guess the county": "Guess the County",
                    "question": "Question",
                    "skip": "Skip",

                    "correct": "Correct",
                    "incorrect": "Incorrect",

                    "time's up": "Time's up!",

                    "donegal": "Donegal",
                    "mayo": "Mayo",
                    "galway": "Galway",
                    "clare": "Clare",
                    "kerry": "Kerry",
                    "cork": "Cork",
                    "waterford": "Waterford",

                    "you chose": "You chose",
                    "but": "but",
                    "was the correct answer": "was the correct answer",

                    "final score": "Final score",
                    "county": "County",
                    "last answer": "Last answer",
                    "new game": "New game",

                    "choose a county": "Choose a county",

                    "easy mode": "Easy mode",
                    "hard mode": "Hard mode",

                    "gameInstructions": "There are twenty questions. An extract from the Schools's collection (available on dúchas.ie) will be displayed, and you will have to guess which county the extract was collected from.",
                    "chooseDifficulty": "Choose a difficulty to start",
                    "easy": "Easy",
                    "hard": "Hard",
                    "easyDescription": "You will have to choose between Donegal, Galway and Kerry.",
                    "hardDescription": "You will have to choose between seven counties. This is very difficult, even for those with a good knowledge of Irish dialects!",
                }
            },
            ga: {
                translation: {
                    "Welcome to React": "Welcome to React and react-i18next",
                    "guess the county": "Tomhais an Contae",
                    "question": "ceist",
                    "skip": "Scipeáil",

                    "correct": "Ceart",
                    "incorrect": "Mícheart",

                    "time's up": "Tá an t-am caite!",

                    "donegal": "Dún na nGall",
                    "mayo": "Maigh Eo",
                    "galway": "Gaillimh",
                    "clare": "An Clár",
                    "kerry": "Ciarraí",
                    "cork": "Corcaigh",
                    "waterford": "Port Láirge",

                    "you chose": "Roghnaigh tú",
                    "but": "ach",
                    "was the correct answer": "a bhí ann",

                    "final score": "Scór deiridh",
                    "county": "Contae",
                    "last answer": "Freagra deireanach",
                    "new game": "Cluiche nua",

                    "choose a county": "Roghnaigh contae",

                    "easy mode": "Modh éasca",
                    "hard mode": "Modh deacair",

                    "gameInstructions": "Tá fiche ceist ann. Taispeánfar sliocht as Bailiúchán na Scol (le fáil ar dúchas.ie), agus beidh ort a thomhais cén contae as ar tháinig an sliocht sin.",
                    "chooseDifficulty": "Roghnaigh deacracht chun tosú",
                    "easy": "Éasca",
                    "hard": "Deacair",
                    "easyDescription": "Beidh ceann amháin de Dhún na nGall, Gaillimh agus Ciarraí le roghnú agat.",
                    "hardDescription": "Beidh ceann amháin de sheacht gcontae le roghnú agat. Tá sé seo an-deacair, fiú don saineolaí!",
                }
            }
        },
        lng: "en", // if you're using a language detector, do not define the lng option
        fallbackLng: "en",

        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    });
