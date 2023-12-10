import { writable } from "svelte/store";
import { Timer } from "../Models/Timer";

function createStore (){
    const { subscribe, set, update } = writable(new Timer(0, 20, 0));

    // need method tick that will decrement the timer by 1 second
    let interval: number | null = null;

    return {
        subscribe,
        set,
        update,
        reset: () => update(timer => timer.reset()),
        addHour: () => update(timer => timer.addHour()),
        addMinute: () => update(timer => timer.addMinute()),
        addSecond: () => update(timer => timer.addSecond()),
        subtractHour: () => update(timer => timer.subtractHour()),
        subtractMinute: () => update(timer => timer.subtractMinute()),
        subtractSecond: () => update(timer => timer.subtractSecond()),
        setHours: (hours: number) => update(timer => timer.setHours(hours)),
        setMinutes: (minutes: number) => update(timer => timer.setMinutes(minutes)),
        setSeconds: (seconds: number) => update(timer => timer.setSeconds(seconds)),
        start: () => interval = setInterval(() => update(timer => timer.tick()), 1000),
        stop: () => interval ? clearInterval(interval): null
    }
}

export const timerStore = createStore();
