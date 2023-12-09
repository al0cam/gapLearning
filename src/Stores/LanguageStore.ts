import { writable } from "svelte/store";

type Translations = {
    [key: string]: string;
};


const DEFAULT_LANGUAGE = "English";
const LIST_OF_LANGUAGES = ["English", "Croatian"];

function loadTranslations(language: string) {
    return import(`../Translations/${language}.json`);
}    

let translations: Translations = await loadTranslations(DEFAULT_LANGUAGE);

function createStore() {
    const { subscribe, set, update } = writable(translations);

    return {
        subscribe,
        setLanguage: async (language: string) => {
            translations = await loadTranslations(language);
            set(translations);
        },
        getLanguages: () => LIST_OF_LANGUAGES,
        getDefaultLanguage: () => DEFAULT_LANGUAGE,
    };
}

export const languageStore = createStore();
