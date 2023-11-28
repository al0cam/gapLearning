import { writable } from "svelte/store";

type Translations = {
    [key: string]: string;
};

const DEFAULT_LANGUAGE = "English";
const LIST_OF_LANGUAGES = ["English", "Croatian"];

function loadTranslations(language: string) {
    return import(`../Translations/${language}.json`);
}    

function createStore() {

    const { subscribe, set, update } = writable(DEFAULT_LANGUAGE);

    let translations: Translations = {};

    return {
        subscribe,
        setLanguage: async (language: string) => {
            set(language);
            translations = await loadTranslations(language);
            console.log(translations);
            update(() => language);
        },
        translate: (key: string) => {
            return translations[key] || key;
        },
        getLanguages: () => LIST_OF_LANGUAGES,
        getDefaultLanguage: () => DEFAULT_LANGUAGE,
    };
}

export const languageStore = createStore();
