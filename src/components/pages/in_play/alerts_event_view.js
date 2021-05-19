import React from 'react';

class AlertsEventViews extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sportId: this.props.sportId,
            alerts: {},
            localAlerts: this.props.localAlerts !== null? this.props.localAlerts : {},
            liveMatchSubMenu: true,
            fixtureId: this.props.fixtureId,
            participants: this.props.participants
        };
    }

    componentWillReceiveProps(nextProps, nextContext) {
        // console.log("4444444444", this.state.localAlerts)
        if(this.state.sportId != nextProps.sportId){
            this.setState({
                sportId: nextProps.sportId,
                fixtureId: nextProps.fixtureId,
                localAlerts: nextProps.localAlerts,
                participants: nextProps.participants,
            })
        }
    }
    componentDidMount() {
        let{ localAlerts, fixtureId } = this.state
        if(localAlerts && Object.keys(localAlerts).some((el) => el == fixtureId)){
            this.setState({
                alerts: localAlerts[fixtureId].alerts,
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(Object.keys(this.state.alerts).length == 0 || this.state.sportId != prevState.sportId){
            this.createAlerts(this.state.sportId)
            this.setState({
                liveMatchSubMenu: false,
            })
        }
    }

    createAlerts = (sportId) => {
        let alerts = {}
        if(sportId == 54094){
            alerts = {
                all: false,
                game_results: false,
                set_results: false,
            }
        } else if(sportId == 48242){
            alerts = {
                all: false,
                start_of_qtr: false,
                start_of_half: false,
                result_of_qtr: false,
                point_by_point: false,
            }
        } else if(sportId == 35709){
            alerts = {
                all: false,
                first_half: false,
                total: false,
            }
        } else if(sportId == 6046){
            alerts = {
                all: false,
                goal: false,
                corner: false,
                yellow_card: false,
                red_card: false,
                penalty: false,
                penalty_missed: false,
                substitutions: false,
            }
        } else{
            alerts = {
                all: false,
            }
        }

        this.setState({alerts})
    }

    toggle = () =>{
        this.setState({
            liveMatchSubMenu: !this.state.liveMatchSubMenu
        })
    }

    correctName = (el) => {
        let res = el.replace("_"," ")
        res = res.charAt(0).toUpperCase() + res.substr(1);
        return res
    }

    handleChange = (e, name) => {
        let {alerts} = this.state
        if(name == "all"){
            if(e.target.checked){
                alerts.all = true
                Object.keys(alerts).map((el) => {
                    alerts[el] = true;
                })
            }
            if(!e.target.checked){
                alerts.all = false
                Object.keys(alerts).map((el) => {
                    alerts[el] = false;
                })
            }
        }
        else {
            alerts[name] = !alerts[name]
            let isCheckedElements = Object.keys(alerts).some((el) => el != "all" && alerts[el])
            alerts.all = isCheckedElements? true : false
        }
        this.setState({alerts})
        this.saveAlertsToLocalStorage(alerts)
    }

    saveAlertsToLocalStorage = (alerts) => {
        let newLocalAlerts = {}
        let {localAlerts, fixtureId, sportId, participants} = this.state
        let newAlert = {
            alerts: alerts,
            sportId: sportId,
            participants: participants,
        }
        localAlerts[fixtureId] = newAlert
        Object.keys(localAlerts).map((el) => {
            if(localAlerts[el].alerts.all)
                newLocalAlerts[el] = localAlerts[el]
        })

        this.props.saveAlertsToLocalStorage(newLocalAlerts)

    }

    render() {
        let {all, ...alerts} = this.state.alerts
        // console.log("444444444", alerts)
        return(
            <ul>
                <li className="SingleMatchPopUp_Team">
                    <label>
                        <span className="choose_alerts_item_title">Get live alerts on this match</span>
                        <input className="checkbox"
                               type="checkbox"
                               checked={all}
                               onChange={(e) => this.handleChange(e,"all")}
                               name="checkbox-match"/>
                        <span className="checkbox-match"></span>
                    </label>
                </li>
                <li className="SingleMatchListNotificationPopUp-Header">
                    <span className="SingleMatchListNotificationPopUp-HeaderText" onClick={() => this.toggle()}>Choose alerts to receive for the match</span>
                </li>
                <li className={`LiveMatchAlertSubMenu ${this.state.liveMatchSubMenu == true ? "show":""}`}>
                    <ul>
                        {
                            Object.keys(alerts).map((el, index) => {
                                return  <li key = {index} className="SingleMatchPopUp_SubItem">
                                    <label>
                                        <span className="choose_alerts_item_title">{this.correctName(el)}</span>
                                        <input  className="checkbox"
                                                type="checkbox"
                                                name="checkbox-match"
                                                checked={this.state.alerts[el]}
                                                value={this.state.alerts[el]}
                                                onChange={(e) => this.handleChange(e,el)}/>
                                        <span className="checkbox-match"></span>
                                    </label>
                                </li>
                            })
                        }
                    </ul>
                </li>
            </ul>
        )
    }
}

export default AlertsEventViews;



// catchChanges = (livescore) => {
    // let newCurrentPeriod = livescore.Scoreboard.CurrentPeriod;
    // let oldCurrentPeriod = this.state.livescore.Scoreboard.CurrentPeriod;
    // let oldPeriods = this.state.livescore.Periods;
    // let newPeriods = livescore.Periods;
    // let newResults = livescore.Scoreboard.Results;
    // let oldResults = this.state.livescore.Scoreboard.Results;
    // if(this.state.sportId == 6046){}
    // if(this.state.sportId == 48242 ){
    //
    //     if([1,2,3,4].indexOf(oldCurrentPeriod) != -1 &&
    //         !oldPeriods[oldCurrentPeriod-1].IsFinished &&
    //         newPeriods[oldCurrentPeriod-1].IsFinished ){
    //             let result = `Result of ${oldCurrentPeriod}Q (${oldPeriods[oldCurrentPeriod-1].Results[0].Value} : ${oldPeriods[oldCurrentPeriod-1].Results[1].Value})`;
    //             this.state.matchAlerts.resultOfQtr? this.notifyMe(result) : ""
    //     }
    //
    //     if(oldCurrentPeriod != newCurrentPeriod && [1,2,3,4].indexOf(newCurrentPeriod) != -1){
    //         let title = `${newCurrentPeriod}Q is started`;
    //         (this.state.matchAlerts.startOfQtr)? this.notifyMe(title) : ""
    //         newCurrentPeriod == 3 && this.state.matchAlerts.startOfHalf? this.notifyMe("Start of Half") : ""
    //     }
    //
    //
    //     if((newResults[0].Value != oldResults[0].Value ) || (newResults[1].Value != oldResults[1].Value ) ){
    //         let title = `Point by Point Score ( ${newResults[0].Value} : ${newResults[1].Value})`;
    //         this.state.matchAlerts.pointByPoint? this.notifyMe(title) : ""
    //     }
    // }
    //
    // if(this.state.sportId == 54094){
    //     if( [1,2,3].indexOf(oldCurrentPeriod) != -1 &&
    //         this.state.matchAlerts.setResults &&
    //         (oldPeriods[oldCurrentPeriod -1].Results[0].Value != newPeriods[oldCurrentPeriod -1].Results[0].Value ||
    //          oldPeriods[oldCurrentPeriod -1].Results[1].Value != newPeriods[oldCurrentPeriod -1].Results[1].Value)){
    //             let result = `Set ${oldCurrentPeriod} Score ${newPeriods[oldCurrentPeriod -1].Results[0].Value}:${newPeriods[oldCurrentPeriod -1].Results[1].Value}`;
    //             this.notifyMe(result)
    //     }
    //
    //     if( [1,2,3].indexOf(oldCurrentPeriod) != -1 &&
    //         !oldPeriods[oldCurrentPeriod-1].IsFinished &&
    //         newPeriods[oldCurrentPeriod-1].IsFinished &&
    //         this.state.matchAlerts.gameResults){
    //             let result = `Result of ${oldCurrentPeriod} Game (${newPeriods[oldCurrentPeriod-1].Results[0].Value} : ${newPeriods[oldCurrentPeriod-1].Results[1].Value})`;
    //             this.notifyMe(result)
    //     }
    // }
    // if(this.state.sportId == 35709){
    //
    //     if((newResults[0].Value != oldResults[0].Value ) || (newResults[1].Value != oldResults[1].Value ) ){
    //         let title = `Total ( ${newResults[0].Value} : ${newResults[1].Value})`;
    //         this.state.matchAlerts.total ? this.notifyMe(title) : ""
    //     }
    //
    //     if(!oldPeriods[0].IsFinished &&
    //         newPeriods[0].IsFinished &&
    //         this.state.matchAlerts.firstHalf){
    //         let title = `First half is finished ( ${newResults[0].Value} : ${newResults[1].Value})`;
    //         this.notifyMe(title)
    //     }
    // }
// }

// notifyMe = (title) => {
//     this.props.notifyMe(title)
// }