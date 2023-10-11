export class Timer{
    hours: number;
    minutes: number;
    seconds: number;

    constructor(hours: number, minutes: number, seconds: number){
        this.hours = hours || 0;
        this.minutes = minutes || 20;
        this.seconds = seconds || 0;
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
        else{
            this.subtractHour();
            this.minutes = 59;
        }
        return this;
    }

    subtractSecond(){
        if(this.seconds > 0)
            this.seconds--;
        else{
            this.subtractMinute();
            this.seconds = 59;
        }
        return this;
    }

    tick()
    {
        this.subtractSecond();
        return this;
    }

}