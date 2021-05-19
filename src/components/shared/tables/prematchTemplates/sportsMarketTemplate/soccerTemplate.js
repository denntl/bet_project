import React from 'react';
import {NavLink} from "react-router-dom";

class SoccerTemplate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allEvents: this.props.allEvents,
            currentDayOfWeek: this.getCurrentDayOfWeek()
        }
    }

    getCurrentDayOfWeek() {
        let d = new Date();
        let weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        return weekday[d.getDay()];
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            allEvents: nextProps.allEvents
        })
    }

    // toggle(id) {
    //     console.log(id);
    //     if ($('#'+id).hasClass('show')) {
    //         $('#'+id).removeClass('show');
    //     } else {
    //         $('#'+id).addClass('show');
    //     }
    // }
    toggleLocation(id) {
        if ($('#loc_'+id).hasClass('none')) {
            $('#loc_'+id).removeClass('none');
        } else {
            $('#loc_'+id).addClass('none');
        }
    }
    toggleMarketgroup(id) {
        if ($('#'+id).hasClass('none')) {
            $('#'+id).removeClass('none');
        } else {
            $('#'+id).addClass('none');
        }
    }


    render(){
        return Object.keys(this.state.allEvents).map((marketName, index) => {
            return <div key={`MarketGroup-${marketName}`} className="MarketGroup" >
                <div className="MarketGroup-GroupName" onClick={() => this.toggleMarketgroup('MarketGroup-GroupName-' + marketName)}>{typeof this.state.allEvents[marketName].alias == 'string' && this.state.allEvents[marketName].alias.length ? this.state.allEvents[marketName].alias : this.state.allEvents[marketName].name}</div>
                <div className={`MarketGroup ${index === 0 ? "" : "none"}`} id={`MarketGroup-GroupName-${marketName}`}>

                    <div className="Market">
                        <div className="Market-Header" onClick={() => {this.toggleLocation('Main-GroupName-'+marketName)}}>
                            <div className="Market-GroupName">Main Lists</div>
                        </div>
                        <div className="Market-Cluster none" id={`loc_Main-GroupName-${marketName}`}>
                            <div className="item">
                                <NavLink className="CouponLink_Label" to="/sports/soccer/today"
                                         onClick={() => this.props.showCurrentDayOfWeekMatches(

                                        )}
                                >
                                    {this.state.currentDayOfWeek}'s Matches
                                </NavLink>
                            </div>
                            <div className="item">
                                <span className="CouponLink_Label">International List</span>
                            </div>
                            <div className="item">
                                <NavLink className="CouponLink_Label" to="/sports/soccer/euro-list"
                                         onClick={() => this.props.showEliteEuroListMatches(

                                         )}
                                >
                                    Elite Euro List
                                </NavLink>
                            </div>
                            <div className="item">
                                <span className="CouponLink_Label">UK List</span>
                            </div>
                            <div className="item">
                                <span className="CouponLink_Label">Club Friendly List</span>
                            </div>
                        </div>
                    </div>

                    {Object.keys(this.state.allEvents[marketName].locations).map((locationName) => {
                        return <div key={locationName} className="Market">
                            <div className="Market-Header " onClick={(e) => {
                                this.toggleLocation(marketName + "_" + locationName);
                            }}>
                                <div
                                    className="Market-GroupName">{this.state.allEvents[marketName].locations[locationName].alias ? this.state.allEvents[marketName].locations[locationName].alias : this.state.allEvents[marketName].locations[locationName].name}</div>
                                <div className="Market-HeaderAllCheckbox">
                                    <label className="Market-AllLabel checkbox no-collapsable">
                                        <input type="checkbox"/>All<span className="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <div className="Market-Cluster none" id={`loc_${marketName}_${locationName}`}>
                                {Object.keys(this.state.allEvents[marketName].locations[locationName].leagues).map((leagueName) => {
                                    return <div key={this.state.allEvents[marketName].locations[locationName].leagues[leagueName].id} className="item">
                                        <label className="checkbox">
                                            <input type="checkbox" className="item-checkbox"/>
                                            <span className="checkmark"></span>
                                        </label>
                                        <NavLink className="CouponLink_Label" to="/sports/soccer/leagues" onClick={() => this.props.showGamesBets(
                                            this.state.allEvents[marketName].locations[locationName].leagues[leagueName].name,
                                            this.state.allEvents[marketName].locations[locationName].leagues[leagueName].id,
                                            marketName,
                                            this.state.allEvents[marketName].locations[locationName].leagues
                                        )}>
                                            {this.state.allEvents[marketName].locations[locationName].leagues[leagueName].name}
                                        </NavLink>
                                    </div>
                                })}
                            </div>
                        </div>
                    })}
                </div>
            </div>;
        })
    }
}

export default SoccerTemplate;