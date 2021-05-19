import React from "react";
import moment from "moment/moment";

class FootballTime extends React.Component {

    static defaultProps = {
        timeFormat: 'YYYY/MM/DD HH:mm'
    }

    interval = null;
    different = null;
    baseDifferent = null;
    setIntervalCount = null;
    currentPeriod = 0;

    checkIsFinishedCurrentPeriod(livescorePeriods){
        if(livescorePeriods !== null && typeof livescorePeriods == 'object'){
            this.currentPeriod = Object.keys(livescorePeriods).length;
            if(this.currentPeriod > 0){
                return typeof livescorePeriods.find((element, ind, arr, thisArg) => {
                    if((this.currentPeriod == ind + 1) && element['IsFinished']){
                        return true;
                    }
                }) != 'undefined';
            }
        }

        return false;
    }

    constructor(props) {
        super(props);

        let livescorePeriods = this.props.event != null &&
            typeof this.props.event != 'undefined' &&
            this.props.event['livescoreOrigin'] != null &&
            typeof this.props.event['livescoreOrigin'] != 'undefined' &&
            typeof this.props.event['livescoreOrigin']['Periods'] != 'undefined' ?
                this.props.event['livescoreOrigin']['Periods'] : null;

        if(livescorePeriods === null) {
            livescorePeriods = this.props.event != null &&
                typeof this.props.event != 'undefined' &&
                this.props.event['Livescore'] != null &&
                typeof this.props.event['Livescore'] != 'undefined' &&
                typeof this.props.event['Livescore']['Periods'] != 'undefined' ?
                    this.props.event['Livescore']['Periods'] : null;
        }

        if(livescorePeriods === null){
            livescorePeriods = this.props.event != null &&
                typeof this.props.event != 'undefined' &&
                this.props.event['livescore'] != null &&
                typeof this.props.event['livescore'] != 'undefined' &&
                typeof this.props.event['livescore']['Periods'] != 'undefined' ?
                    this.props.event['livescore']['Periods'] : null;
        }

        let isFinish = this.checkIsFinishedCurrentPeriod(livescorePeriods);

        this.setIntervalCount = this.props.setIntervalCount;

        this.state = {
            timeFormat: this.props.timeFormat,
            eventStartDate: this.props.eventStartDate,
            serverTimestamp: this.props.serverTimestamp,
            event: this.props.event ? this.props.event : null,
            isFinishedCurrentPeriod: isFinish,

            matchTime: '',
            timeInSeconds: 2700,
            halfInSeconds: 900,
            timeWitHalfInSeconds: 3600,
            twoTimesWithHalf: 6300
        };
    }

    componentWillReceiveProps(nextProps){

        let livescore = nextProps.event != null &&
            typeof nextProps.event != 'undefined' &&
            nextProps.event['livescoreOrigin'] != null &&
            typeof nextProps.event['livescoreOrigin'] != 'undefined' ?
                nextProps.event['livescoreOrigin'] : null;

        if(livescore === null){
            livescore = nextProps.event != null &&
                typeof nextProps.event != 'undefined' &&
                nextProps.event['Livescore'] != null &&
                typeof nextProps.event['Livescore'] != 'undefined' ?
                    nextProps.event['Livescore'] : null;
        }

        if(livescore === null){
            livescore = nextProps.event != null &&
                typeof nextProps.event != 'undefined' &&
                nextProps.event['livescore'] != null &&
                typeof nextProps.event['livescore'] != 'undefined' ?
                    nextProps.event['livescore'] : null;
        }

        let different = livescore !== null ?
                typeof livescore['Scoreboard'] != 'undefined' &&
                livescore['Scoreboard'] != null  &&
                typeof livescore['Scoreboard']['Time'] != 'undefined' &&
                livescore['Scoreboard']['Time'] != null ?
                    parseInt(livescore['Scoreboard']['Time']) : null : null;

        if(different === null){
            different = livescore !== null ?
                typeof livescore['Scoreboard'] != 'undefined' &&
                livescore['Scoreboard'] != null  &&
                typeof livescore['Scoreboard']['Time'] != 'undefined' &&
                livescore['Scoreboard']['Time'] != null ?
                    parseInt(livescore['Scoreboard']['Time']) : null : null;
        }

        //typeof this.props.fromPage != 'undefined' && nextProps.event && this.props.fromPage == 'event_view' &&
        if(different !== null && livescore !== null){
            let serverTimestamp = nextProps.event.serverTimestamp ? nextProps.event.serverTimestamp : nextProps.event.ServerTimestamp;
            different += serverTimestamp - livescore.timestamp;
        }

        let eventChanged = this.state.event &&
            ((nextProps.event.fixtureId ? nextProps.event.fixtureId : nextProps.event.FixtureId) != (this.state.event.fixtureId ? this.state.event.fixtureId : this.state.event.FixtureId));

        let livescorePeriods = nextProps.event != null &&
            typeof nextProps.event != 'undefined' &&
            nextProps.event['livescoreOrigin'] != null &&
            typeof nextProps.event['livescoreOrigin'] != 'undefined' &&
            typeof nextProps.event['livescoreOrigin']['Periods'] != 'undefined' ?
                nextProps.event['livescoreOrigin']['Periods'] : null;

        if(livescorePeriods == null) {
            livescorePeriods = nextProps.event != null &&
            typeof nextProps.event != 'undefined' &&
            nextProps.event['Livescore'] != null &&
            typeof nextProps.event['Livescore'] != 'undefined' &&
            typeof nextProps.event['Livescore']['Periods'] != 'undefined' ?
                nextProps.event['Livescore']['Periods'] : null;
        }

        if(livescorePeriods == null){
            livescorePeriods = nextProps.event != null &&
                typeof nextProps.event != 'undefined' &&
                nextProps.event['livescore'] != null &&
                typeof nextProps.event['livescore'] != 'undefined' &&
                typeof nextProps.event['livescore']['Periods'] != 'undefined' ?
                    nextProps.event['livescore']['Periods'] : null;
        }

        let isFinish = this.checkIsFinishedCurrentPeriod(livescorePeriods);


        // после 1го тайма пишет 60 неверно
        //        if((Math.abs(different - this.different) > 10 || eventChanged) && !isFinish){

        if(different > this.different || eventChanged){
            this.baseDifferent = different;
            this.different = different;
            this.setIntervalBody();
        } else if(this.setIntervalCount < nextProps.setIntervalCount && !isFinish){
            this.setIntervalCount = nextProps.setIntervalCount;
            this.different = this.different + 1;
            this.setIntervalBody();
        }

        if(isFinish){
            switch (this.currentPeriod) { // учитывает тайм - аккуратно
                case 1:
                    this.setState({
                        matchTime: '45:00'
                    });
                    break;
                case 2:
                case 3:
                case 4:
                    this.setState({
                        matchTime: '90:00'
                    });
                    break;
            }
        }


        this.setState({
            timeFormat: nextProps.timeFormat,
            eventStartDate: nextProps.eventStartDate,
            serverTimestamp: nextProps.serverTimestamp,
            event: nextProps.event ? nextProps.event : null,
            isFinishedCurrentPeriod: isFinish,
        }, () => {
            let d = new Date(this.state.eventStartDate);
            let startTimestamp = (d.getTime() + (d.getTimezoneOffset()*60*1000) * -1)/1000;
            if ((startTimestamp > this.state.serverTimestamp) && livescore === null) {
                if(parseInt(startTimestamp) > 0 && this.state.serverTimestamp > 0){
                    this.setState({
                        matchTime: moment.unix(startTimestamp).format(this.state.timeFormat)
                    });
                }
            } else if (startTimestamp < this.state.serverTimestamp || livescore !== null) {
                //this.different = this.state.serverTimestamp - startTimestamp;
                //this.setIntervalBody();
            }
        });
    }

    componentDidMount() {
        let d = new Date(this.state.eventStartDate);
        let startTimestamp = (d.getTime() + (d.getTimezoneOffset()*60*1000) * -1)/1000;
        let livescore = this.state.event != null &&
        typeof this.state.event != 'undefined' &&
        this.state.event['livescoreOrigin'] != null &&
        typeof this.state.event['livescoreOrigin'] != 'undefined' ?
            this.state.event['livescoreOrigin'] : null;

        if(livescore === null) {
            livescore = this.state.event != null &&
            typeof this.state.event != 'undefined' &&
            this.state.event['Livescore'] != null &&
            typeof this.state.event['Livescore'] != 'undefined' ?
                this.state.event['Livescore'] : null;
        }

        if(livescore === null){
            livescore = this.state.event != null &&
            typeof this.state.event != 'undefined' &&
            this.state.event['livescore'] != null &&
            typeof this.state.event['livescore'] != 'undefined' ?
                this.state.event['livescore'] : null;
        }

        if ((startTimestamp > this.state.serverTimestamp) && livescore === null) {//будущий матч
            if(parseInt(startTimestamp) > 0 && this.state.serverTimestamp > 0){
                this.setState({
                    matchTime: moment.unix(startTimestamp).format(this.state.timeFormat)
                });
            }
        } else if (startTimestamp < this.state.serverTimestamp || livescore !== null) {

            let different = livescore !== null ?
                typeof livescore['Scoreboard'] != 'undefined' &&
                livescore['Scoreboard'] != null  &&
                typeof livescore['Scoreboard']['Time'] != 'undefined' &&
                livescore['Scoreboard']['Time'] != null ?
                    parseInt(livescore['Scoreboard']['Time']) : null : null;

            if(different === null){
                different = livescore !== null ?
                    typeof livescore['Scoreboard'] != 'undefined' &&
                    livescore['Scoreboard'] != null  &&
                    typeof livescore['Scoreboard']['Time'] != 'undefined' &&
                    livescore['Scoreboard']['Time'] != null ?
                        parseInt(livescore['Scoreboard']['Time']) : null : null;
            }

            if(different !== null && livescore !== null){
                let serverTimestamp = this.state.event.serverTimestamp ? this.state.event.serverTimestamp : this.state.event.ServerTimestamp;
                different += serverTimestamp - livescore.timestamp;
            }

            this.different = different;
            this.setIntervalBody();
        }
    }

    setIntervalBody = () => {
        this.setState({
            matchTime: this.secondsToMatchTime(this.different, true)
        });
    }

    componentWillUnmount() {
        clearInterval(this.interval);
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
        return this.state.matchTime;
    }
}

export default FootballTime;