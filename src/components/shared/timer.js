import React from 'react';



class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            clock: ""
        }
    }

    componentDidMount() {
         this.clear = setInterval(function () {
            let timeNow = this.clock();
            this.setState({
                clock: timeNow
            });
        }.bind(this), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.clear)
    }

    clock() {
        var d = new Date();
        var month_num = d.getMonth()
        var day = d.getDate();
        var hours = d.getHours();
        var minutes = d.getMinutes();
        var seconds = d.getSeconds();

        var month, date_time;

        month = new Array("января", "февраля", "марта", "апреля", "мая", "июня",
            "июля", "августа", "сентября", "октября", "ноября", "декабря");

        if (day <= 9) day = "0" + day;
        if (hours <= 9) hours = "0" + hours;
        if (minutes <= 9) minutes = "0" + minutes;
        if (seconds <= 9) seconds = "0" + seconds;

        var minuteTimezoneOffset = d.getTimezoneOffset();
        var hourTimezoneOffset = minuteTimezoneOffset/-60;
        if(hourTimezoneOffset >= 0){
            hourTimezoneOffset = '+' + hourTimezoneOffset;
        }

        date_time = + hours + ':' + minutes + ':' + seconds + ' GMT' + hourTimezoneOffset;

        return date_time;
    }

    render() {
        return(
            <time id="doc_time">{this.state.clock}</time>
        )

    }
}

export default Timer;
