import { get, writable } from "svelte/store";
import { DefaultValues } from "../Models/DefaultValues";

function createStore() {
    const { subscribe, set, update } = writable(new DefaultValues());
    
    return {
        subscribe,
        set,
        update,
    }
}

export const defaultValuesStore = createStore();