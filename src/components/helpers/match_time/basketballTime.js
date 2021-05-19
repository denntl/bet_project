import React from "react";
import moment from "moment/moment";

class BasketballTime extends React.Component {

    setIntervalCount = null;

    constructor(props) {
        super(props);
        this.state = {
            event: this.props.event,
            fromPage: this.props.fromPage,
            scoreboardTime: this.getScoreboardTime(this.props.event),
            isEventNotActive: (this.isTimeoutNow(this.props.event) || this.isEventNotActive(this.props.event))
        };
    }

    componentDidMount() {
        this.setIntervalCount = this.props.setIntervalCount;
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            event: nextProps.event,
            fromPage: nextProps.fromPage,
        });
        if(this.setIntervalCount < nextProps.setIntervalCount){
            let scoreboardTime = this.getScoreboardTime(nextProps.event);
            if(this.isTimeoutNow(nextProps.event) || this.isEventNotActive(nextProps.event)){
                this.setState({
                    scoreboardTime: scoreboardTime,
                    isEventNotActive: true
                });
            } else {
                let differenceBetweenServerFront = Math.abs(scoreboardTime - this.state.scoreboardTime);
                let time = (this.state.isEventNotActive || differenceBetweenServerFront > 30) ?
                    scoreboardTime - 1 :
                        this.state.scoreboardTime - 1;

                this.setState({
                    scoreboardTime: time < 0 ? 0 : time,
                    isEventNotActive: false
                });
            }
            this.setIntervalCount = nextProps.setIntervalCount;
        }
    }

    getCurrentPeriod(event){
        let currentEventPeriod = '';
        let eventLivescore = this.getEventLivescore(event);
        if(eventLivescore && typeof eventLivescore.Scoreboard !== 'undefined'){
            let currentPeriod = eventLivescore.Scoreboard.CurrentPeriod;
            switch (currentPeriod) {
                case 1:
                    currentEventPeriod = 'Q1';
                    break;
                case 2:
                    currentEventPeriod = 'Q2';
                    break;
                case 3:
                    currentEventPeriod = 'Q3';
                    break;
                case 4:
                    currentEventPeriod = 'Q4';
                    break;
                case 40:
                    currentEventPeriod = 'OV';
                    break;
                case 80:
                    currentEventPeriod = 'BT';
                    break;
                case 100:
                case 101:
                    currentEventPeriod = 'FT';
                    break;
            }
            if(currentEventPeriod !== '' && this.isTimeoutNow(event)){
                currentEventPeriod = currentEventPeriod + ' TO';
            }
        }

        return currentEventPeriod;
    }

    getScoreboardTime(event){
        let scoreboardTime = 0;
        let eventLivescore = this.getEventLivescore(event);
        if(
            eventLivescore !== null &&
            typeof eventLivescore.Scoreboard !== 'undefined' &&
            typeof eventLivescore.Scoreboard.Time !== 'undefined'
        ){
            scoreboardTime = parseInt(eventLivescore.Scoreboard.Time);
        }

        return scoreboardTime;
    }

    /** is Half Or Finished **/
    isEventNotActive(event){
        let eventLivescore = this.getEventLivescore(event);
        if(eventLivescore && typeof eventLivescore.Scoreboard !== 'undefined'){
            let currentPeriod = eventLivescore.Scoreboard.CurrentPeriod;
            if(
                currentPeriod == 1 || currentPeriod == 2 || currentPeriod == 3 || currentPeriod == 4 || currentPeriod == 40
            ){
                return false;
            }
        }

        return true;
    }

    getEventLivescore(event){
        if(event !== null && typeof event !== 'undefined') {
            if (event.livescoreOrigin !== null && typeof event.livescoreOrigin !== 'undefined'){

                return event.livescoreOrigin;
            } else if (event.Livescore !== null && typeof event.Livescore !== 'undefined'){

                return event.Livescore;
            } else if (event.livescore !== null && typeof event.livescore !== 'undefined'){

                return event.livescore;
            }
        }

        return null;
    }

    isTimeoutNow = (event) => {
        let eventLivescore = this.getEventLivescore(event);
        if(
            eventLivescore !== null &&
            typeof eventLivescore.Scoreboard !== 'undefined' &&
            typeof eventLivescore.Scoreboard.Description !== 'undefined'
        ){
            let description = eventLivescore.Scoreboard.Description;

            return (description == 6 || description == 7 || description == 8 || description == 9);
        }

        return false;
    }

    secondsToMatchTime(duration, hourAsMinute) {
        let seconds = parseInt(duration%60)
            , minutes = parseInt((duration/(60))%60)
            , hours = parseInt((duration/(60*60))%24);
        if(hourAsMinute){
            minutes += hours * 60;
            minutes = (minutes < 10) ? "0" + minutes : minutes;
            seconds = (seconds < 10) ? "0" + seconds : seconds;

            return minutes + ":" + seconds;
        }
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours + ":" + minutes + ":" + seconds;
    }

    render() {
        if(this.state.fromPage == 'event_view'){

            return this.secondsToMatchTime(this.state.scoreboardTime, true);
        }

        return this.secondsToMatchTime(this.state.scoreboardTime, true) + ' ' + this.getCurrentPeriod(this.state.event);
    }
}

export default BasketballTime;