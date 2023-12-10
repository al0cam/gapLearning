export class Timer{
    hours: number;
    minutes: number;
    seconds: number;
    tickingHours: number;
    tickingMinutes: number;
    tickingSeconds: number;

    constructor(hours: number, minutes: number, seconds: number){
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.tickingHours = hours;
        this.tickingMinutes = minutes;
        this.tickingSeconds = seconds;
    }

    getFormattedTime(){
        let tickingHours = this.tickingHours.toString();
        let tickingMinutes = this.tickingMinutes.toString();
        let tickingSeconds = this.tickingSeconds.toString();

        if(tickingHours.length < 2)
            tickingHours = "0" + tickingHours;
        if(tickingMinutes.length < 2)
            tickingMinutes = "0" + tickingMinutes;
        if(tickingSeconds.length < 2)
            tickingSeconds = "0" + tickingSeconds;

        if(this.tickingHours > 0)
            return `${tickingHours}:${tickingMinutes}:${tickingSeconds}`;
        else
            return `${tickingMinutes}:${tickingSeconds}`;
    }

    setHours(hours: number){
        this.hours = hours;
        return this;
    }

    setMinutes(minutes: number){
        this.minutes = minutes;
        return this;
    }

    setSeconds(seconds: number){
        this.seconds = seconds;
        return this;
    }

    setTickingHours(tickingHours: number){
        this.tickingHours = tickingHours;
        return this;
    }
    
    setTickingMinutes(tickingMinutes: number){
        this.tickingMinutes = tickingMinutes;
        return this;
    }
    
    setTickingSeconds(tickingSeconds: number){
        this.tickingSeconds = tickingSeconds;
        return this;
    }
    
    // Methods for ticking time
    addHour(){
        this.tickingHours++;
        return this;
    }

    addMinute(){
        if(this.tickingMinutes < 59)
            this.tickingMinutes++;
        else{
            this.addHour();
            this.tickingMinutes = 0;
        }
        return this;
    }

    addSecond(){
        if(this.tickingSeconds < 59)
            this.tickingSeconds++;
        else{
            this.addMinute();
            this.tickingSeconds = 0;
        }
        return this;
    }

    subtractHour(){
        if(this.tickingHours > 0)
            this.tickingHours--;
        return this;
    }

    subtractMinute(){
        if(this.tickingMinutes > 0)
            this.tickingMinutes--;
        else{
            this.subtractHour();
            this.tickingMinutes = 59;
        }
        return this;
    }

    subtractSecond(){
        if(this.tickingSeconds > 0)
            this.tickingSeconds--;
        else{
            this.subtractMinute();
            this.tickingSeconds = 59;
        }
        return this;
    }

    tick()
    {
        this.subtractSecond();
        return this;
    }

    reset(){
        this.tickingHours = this.hours;
        this.tickingMinutes = this.minutes;
        this.tickingSeconds = this.seconds;
        return this;
    }
}