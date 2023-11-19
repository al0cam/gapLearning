export class Settings{
    language: String;
    hours: number;
    minutes: number
    seconds: number;
    theme: String;
    constructor(language?: String, hours?: number, minutes?: number, seconds?: number, theme?: String){
        this.language = language || "en";
        this.hours = hours || 0;
        this.minutes = minutes || 20;
        this.seconds = seconds || 0;
        this.theme = theme || "light";
    }
}