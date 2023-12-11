export class Timer{
    // TODO: add short and long break time 
    hours: number;
    minutes: number;
    seconds: number;
    // TODO: find a way to set these values in a reactive way
    defaultHours: number;
    defaultMinutes: number;
    defaultSeconds: number;

    finished: boolean = false;

    constructor(hours: number, minutes: number, seconds: number, defaultHours?: number, defaultMinutes?: number, defaultSeconds?: number){
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.defaultHours = defaultHours || hours;
        this.defaultMinutes = defaultMinutes || minutes;
        this.defaultSeconds = defaultSeconds || seconds;
    }

    getFormattedTime(){
        let hours = this.hours.toString();
        let minutes = this.minutes.toString();
        let seconds = this.seconds.toString();

        if(hours.length < 2)
            hours = "0" + hours;
        if(minutes.length < 2)
            minutes = "0" + minutes;
        if(seconds.length < 2)
            seconds = "0" + seconds;

        if(this.hours > 0)
            return `${hours}:${minutes}:${seconds}`;
        else
            return `${minutes}:${seconds}`;
    }

    setHours(hours: number){
        this.hours = hours;
        this.hours = hours;
        return this;
    }

    setMinutes(minutes: number){
        this.minutes = minutes;
        this.minutes = minutes;
        return this;
    }

    setSeconds(seconds: number){
        this.seconds = seconds;
        return this;
    }
    
    // Methods for ticking time
    addHour(){
        this.hours++;
        return this;
    }

    addMinute(){
        if(this.minutes < 59)
            this.minutes++;
        else{
            this.addHour();
            this.minutes = 0;
        }
        return this;
    }

    addSecond(){
        if(this.seconds < 59)
            this.seconds++;
        else{
            this.addMinute();
            this.seconds = 0;
        }
        return this;
    }

    subtractHour(){
        if(this.hours > 0)
            this.hours--;
        return this;
    }

    subtractMinute(){
        if(this.minutes > 0)
            this.minutes--;
        else if(this.hours > 0){
            this.subtractHour();
            this.minutes = 59;
        }
        return this;
    }

    subtractSecond(){
        if(this.seconds > 0)
            this.seconds--;
        else if(this.minutes > 0){
            this.subtractMinute();
            this.seconds = 59;
        }
        else 
            this.finished = true;
        return this;
    }

    tick()
    {
        this.subtractSecond();
        return this;
    }

    isFinished(){
        return this.finished;
    }

    reset(){
        this.finished = false;
        this.hours = this.defaultHours;
        this.minutes = this.defaultMinutes;
        this.seconds = this.defaultSeconds;
        return this;
    }
}