import React from 'react';
import {NavLink} from "react-router-dom";

class AllLeaguesPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            leaguesData: this.props.leaguesData,
            sportName: this.props.sportName
        };
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            leaguesData: nextProps.leaguesData,
            sportName: nextProps.sportName
        });
    }

    toggleLocation(id) {
        if ($('#loc_'+id).hasClass('none')) {
            $('#loc_'+id).removeClass('none');
        } else {
            $('#loc_'+id).addClass('none');
        }
    }

    toggleMarketGroup(id) {
        if ($('#'+id).hasClass('none')) {
            $('#'+id).removeClass('none');
        } else {
            $('#'+id).addClass('none');
        }
    }

    render() {
        /** Need for click to teams and header **/
        let defaultSingleLeagueRequestParams = {};

        return Object.keys(this.state.leaguesData).map((leagueId) => {

            return <div key={`MarketGroup-${leagueId}`} className="MarketGroup">
                <div className="MarketGroup-GroupName" onClick={() => this.toggleMarketGroup('MarketGroup-GroupName-' + leagueId)}>
                    {this.state.leaguesData[leagueId].name}
                </div>
                <div className={`MarketGroup ${leagueId === 0 ? "" : "none"}`} id={`MarketGroup-GroupName-${leagueId}`}>
                    {Object.keys(this.state.leaguesData[leagueId]['groups']).map((groupName) => {

                        return <div key={groupName} className="Market">
                            <div className="Market-Header " onClick={(e) => {
                                this.toggleLocation(leagueId + "_" + groupName.replace(/ /, '_'));
                            }}>
                                <div className="Market-GroupName firstLetterUpper">
                                    {this.state.leaguesData[leagueId]['groups'][groupName].name}
                                </div>
                                <div className="Market-HeaderAllCheckbox">
                                    <label className="Market-AllLabel checkbox no-collapsable">
                                        <input type="checkbox"/>All<span className="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <div className="Market-Cluster none" id={`loc_${leagueId}_${groupName.replace(/ /, '_')}`}>
                                {Object.keys(this.state.leaguesData[leagueId]['groups'][groupName]['markets']).map((marketId) => {

                                    let market = this.state.leaguesData[leagueId]['groups'][groupName]['markets'][marketId];
                                    let marketName = typeof market.alias == 'string' && market.alias.length ?
                                        market.alias : market.name;

                                    if(! defaultSingleLeagueRequestParams[leagueId]) {
                                        defaultSingleLeagueRequestParams[leagueId] = [
                                            this.state.leaguesData[leagueId]['name'],
                                            this.state.leaguesData[leagueId].identity,
                                            marketName,
                                            marketId
                                        ];
                                    }

                                    return <div key={marketId} className="item">
                                            <label className="checkbox">
                                                <input type="checkbox" className="item-checkbox"/>
                                                <span className="checkmark"></span>
                                            </label>
                                            <NavLink className="CouponLink_Label"
                                                     to={`/sports/${this.state.sportName.toLowerCase()}/leagues`}
                                                     onClick={() => {this.props.showSingleLeagueByMarket(
                                                         this.state.leaguesData[leagueId]['name'],
                                                         this.state.leaguesData[leagueId].identity,
                                                         marketName,
                                                         marketId
                                                     )}}>
                                                {marketName}
                                            </NavLink>
                                        </div>
                                })}
                            </div>
                        </div>
                        //}
                    })}
                    

                    <div key={`game-props`} className="Market">
                        <div className="Market-Header " onClick={(e) => {
                            this.toggleLocation(leagueId + "_game-props");
                        }}>
                            <div className="Market-GroupName firstLetterUpper">
                                Game Props
                            </div>
                            <div className="Market-HeaderAllCheckbox">
                                <label className="Market-AllLabel checkbox no-collapsable">
                                    <input type="checkbox"/>All<span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <div className="Market-Cluster none" id={`loc_${leagueId}_game-props`}>
                            {this.state.leaguesData[leagueId]['games'] ? Object.keys(this.state.leaguesData[leagueId]['games']).map((eventId) => {

                                return <div key={`${leagueId}-${eventId}`} className="item">
                                    <label className="checkbox">
                                        <input type="checkbox" className="item-checkbox"/>
                                        <span className="checkmark"></span>
                                    </label>
                                    <NavLink className="CouponLink_Label"
                                         to={`/sports/${this.state.sportName.toLowerCase()}/leagues/game`}
                                         onClick={() => {
                                             this.props.fetchFixtureAndSingleLeagueData(
                                                 eventId,
                                                 defaultSingleLeagueRequestParams[leagueId][0],
                                                 this.state.leaguesData[leagueId].identity,
                                                 defaultSingleLeagueRequestParams[leagueId][2],
                                                 defaultSingleLeagueRequestParams[leagueId][3],
                                             );
                                         }}
                                    >
                                        {this.state.leaguesData[leagueId]['games'][eventId].name}
                                    </NavLink>
                                </div>
                            }) : ''}
                        </div>
                    </div>
                </div>
            </div>;
        })
    }

}

export default AllLeaguesPage;