import React from 'react';
import {NavLink} from "react-router-dom";

class TennisTemplate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allEvents: this.props.allEvents,
            sportId: this.props.sportId
        }

    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            allEvents: nextProps.allEvents,
            sportId: nextProps.sportId
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
//console.log(id)
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
        // console.log('this.state.allEvents', this.state.allEvents);

        return Object.keys(this.state.allEvents).map((leagueId, index) => {
            return <div key={`MarketGroup-${leagueId}`} className="MarketGroup" >
                <div className="MarketGroup-GroupName" onClick={() => this.toggleMarketgroup('MarketGroup-GroupName-' + leagueId)}>{  this.state.allEvents[leagueId].name }</div>
                <div className={`MarketGroup ${index === 0 ? "" : "none"}`} id={`MarketGroup-GroupName-${leagueId}`}>

                    {/*<div className="Market">*/}
                        {/*<div className="Market-Header">*/}
                            {/*<div className="Market-GroupName">Main Lists*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className="Market-Cluster collapse show"*/}
                             {/*id="collapse_Soccer_Full_Time_Result_Main_List">*/}
                            {/*<div className="item">*/}
                                {/*<span className="CouponLink_Label" onClick={() => this.props.showGamesBets("Wednesday's Matches")}>Wednesday's Matches</span>*/}
                            {/*</div>*/}
                            {/*<div className="item">*/}
                                {/*<span className="CouponLink_Label" onClick={() => this.props.showGamesBets("International List")}>International List</span>*/}
                            {/*</div>*/}
                            {/*<div className="item">*/}
                                {/*<span className="CouponLink_Label" onClick={() => this.props.showGamesBets("Elite Euro List<")}>Elite Euro List</span>*/}
                            {/*</div>*/}
                            {/*<div className="item">*/}
                                {/*<span className="CouponLink_Label" onClick={() => this.props.showGamesBets("UK List")}>UK List</span>*/}
                            {/*</div>*/}
                            {/*<div className="item">*/}
                                {/*<span className="CouponLink_Label" onClick={() => this.props.showGamesBets("Club Friendly List")}>Club Friendly List</span>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}

                    {Object.keys(this.state.allEvents[leagueId]['groups']).map((groupName) => {
                        //if (this.state.allEvents[marketName].name == "1X2") {
                            return <div key={groupName} className="Market">
                                <div className="Market-Header " onClick={(e) => {
                                    this.toggleLocation(leagueId + "_" + groupName.replace(/ /, '_'));
                                }}>
                                    <div
                                        className="Market-GroupName firstLetterUpper">{this.state.allEvents[leagueId]['groups'][groupName].name}</div>
                                    <div className="Market-HeaderAllCheckbox">
                                        <label className="Market-AllLabel checkbox no-collapsable">
                                            <input type="checkbox"/>All<span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="Market-Cluster none" id={`loc_${leagueId}_${groupName.replace(/ /, '_')}`}>
                                    {Object.keys(this.state.allEvents[leagueId]['groups'][groupName]['markets']).map((marketId) => {
                                        return typeof this.props.marketsCol[marketId] != 'undefined' ?


                                        <div key={marketId} className="item">
                                            <label className="checkbox">
                                                <input type="checkbox" className="item-checkbox"/>
                                                <span className="checkmark"></span>
                                            </label>
                                            <NavLink className="CouponLink_Label" to="/sports/tennis/leagues"
                                                  onClick={() => this.props.showGamesBets(
                                                      this.state.allEvents[leagueId]['name'],
                                                      leagueId,
                                                      this.state.allEvents[leagueId]['groups'][groupName]['markets'][marketId].name,
                                                      marketId,
                                                      this.state.allEvents[leagueId]['groups'][groupName]['markets']
                                                  )}>
                                                {this.state.allEvents[leagueId]['groups'][groupName]['markets'][marketId].name}
                                                </NavLink>
                                        </div> : '';
                                    })}
                                </div>
                            </div>
                        //}
                    })}
                </div>
            </div>;
        })
    }
}

export default TennisTemplate;