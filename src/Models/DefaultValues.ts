export class DefaultValues{
    defaultHours: number;
    defaultMinutes: number;
    defaultSeconds: number;
    defaultShortBreakMinutes: number;
    defaultShortBreakSeconds: number;
    defaultLongBreakMinutes: number;
    defaultLongBreakSeconds: number;
    defaultGapSeconds: number;

    constructor(defaultHours?: number, defaultMinutes?: number, defaultSeconds?: number, defaultShortBreakMinutes?: number, defaultShortBreakSeconds?: number, defaultLongBreakMinutes?: number, defaultLongBreakSeconds?: number, defaultGapSeconds?: number){
        this.defaultHours = defaultHours || 0;
        this.defaultMinutes = defaultMinutes || 20;
        this.defaultSeconds = defaultSeconds || 0;
        this.defaultShortBreakMinutes = defaultShortBreakMinutes || 5;
        this.defaultShortBreakSeconds = defaultShortBreakSeconds || 0;
        this.defaultLongBreakMinutes = defaultLongBreakMinutes || 15;
        this.defaultLongBreakSeconds = defaultLongBreakSeconds || 0;
        this.defaultGapSeconds = defaultGapSeconds || 10;
    }
}