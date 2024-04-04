import { get, writable } from "svelte/store";
import { Timer } from "../Models/Timer";
import { defaultValuesStore } from "./DefaultValuesStore";
import type { DefaultValues } from "../Models/DefaultValues";

function createStore (){
    const { subscribe, set, update } = writable(new Timer(0, 20, 0));

    let interval: number | undefined;

    // TODO: add short and long break time
    // TODO: Add set times to cookies so the user doesnt have to add them 10 times over and over
    
    
    function reset()
    {
        let defaultValues = get(defaultValuesStore);
        update(timer => timer.setHours(defaultValues.defaultHours)
        .setMinutes(defaultValues.defaultMinutes)
        .setSeconds(defaultValues.defaultSeconds)
        .setFinished(false));
    }

    // TODO: consider that the same timer is used for the short and long break
    // in other words, the timer needs to be able to swap between times 
    // each timer should display changes while they are happening ???
    // Sounds like 3 timers is the easiest way to do this
    // three stores for each timer and then its ez life, all the problems dissapear
    defaultValuesStore.subscribe((defaultValues: DefaultValues) => {
        update(timer => timer.setHours(defaultValues.defaultHours)
        .setMinutes(defaultValues.defaultMinutes)
        .setSeconds(defaultValues.defaultSeconds)
        .setFinished(false));
    });

    return {
        subscribe,
        set,
        update,
        reset,
        setHours: (hours: number) => update(timer => timer.setHours(hours)),
        setMinutes: (minutes: number) => update(timer => timer.setMinutes(minutes)),
        setSeconds: (seconds: number) => update(timer => timer.setSeconds(seconds)),
        start: () => interval = setInterval(() => {
            update(timer => timer.tick());
            subscribe(timer => {
                if(timer.isFinished()){
                    console.log("Timer is finished");
                    timerStore.stop();
                    timerStore.reset();
                }
            });
        } , 1000),
        stop: () => interval ? clearInterval(interval): null
    }
}

export const timerStore = createStore();
