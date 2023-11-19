import { writable } from "svelte/store";
import { Settings } from "../Models/Settings";

interface SettingsModal{
    settings: Settings;
    modal: HTMLDialogElement | null;
}

function createStore(){
    const {subscribe, set, update} = writable<SettingsModal>({
        settings: new Settings(),
        modal: null
    });

    function showModal(){
        console.log("show modal")
        update(store => {
            store.modal?.showModal();
            return store;
        })
    }

    function closeModal(){
        update(store => {
            store.modal?.close();
            return store;
        })
    }

    return {
        subscribe,
        set,
        update,
        showModal,
        closeModal,
    }
}

export const settingsStore = createStore();