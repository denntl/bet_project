import React from 'react';
import DefaultMarket from './defaultMarket';
import moment from "moment";
import {NavLink} from "react-router-dom";

class GroupThreeMarkets extends DefaultMarket {
    constructor(props) {
        super(props);

        this.state = {
            template: props.template,
            market: props.market,
            currentMarket: props.currentMarket,
            participants: props.participants,
            // fromEventView: props.fromEventView,
            classNameLower: this.props.currentMarketId,
            eventId: this.props.eventId,
            typeSport: this.props.typeSport,
            typeMarket: this.props.typeMarket,
            currentMarketId: this.props.currentMarketId,
            fromPage: this.props.fromPage,
            blockNameOdd: this.props.blockNameOdd
        };

    }
    componentWillReceiveProps(nextProps) {

        this.setState({
            template: nextProps.template,
            market: nextProps.market,
            currentMarket: nextProps.currentMarket,
            participants: nextProps.participants,
            // fromEventView: nextProps.fromEventView,
            eventId: nextProps.eventId,
            typeSport: nextProps.typeSport,
            typeMarket: nextProps.typeMarket,
            currentMarketId: nextProps.currentMarketId,
            fromPage: nextProps.fromPage,
        });
    }

    render(){
        let { market: { limits:{min=null, max=null} = {}, systemLimit:{min:combineMin=null, max:combineMax=null}={}  } = {} } = this.state
        //console.log("11111", this.state)
        let bets = this.state.template.bets
        let toggleM = this.state.currentMarketId.replace(/ /, '_')
        let header = <div className="MarketGroupButton"
                     //id = {(this.state.currentMarketId).replace(/ /, '_')}
                     onClick={()=>this.toggleMarket(toggleM)}>
                                        <span className="MarketGroupButton_Text">
                                            {typeof this.state.market.alias == 'string' && this.state.market.alias.length ? this.state.market.alias : this.state.market.Name}
                                            <span className="suspended_Text"> - Currently Suspended</span>
                                            </span>
                    </div>

        let grayHeader = <div className="MarketColumnHeader">
                            {
                                Object.keys(this.state.template.titles).map((el, index) => {
                                    return <div
                                        className="MarketColumnHeader-item"
                                        key={index}>
                                        {this.state.template.titles[el]}</div>
                                })
                            }
                        </div>
        let body = <div className="marker_row_wrapp_wrapp mainMarketColumns flex-column">
                {
                    Object.keys(bets).map((bet, index) => {
                        return <div className="Market_table row33" key = {index}>
                            {
                                Object.keys(bets[bet]).map((el, indexEl) => {
                                    let name = bets[bet][el].Name
                                    return(
                                        <div id={`${bets[bet][el].Id}-prematch`}
                                             key = {indexEl}
                                             className="Participant grid2 width33"
                                             onClick={() => this.props.addToBetSlip(
                                                 {
                                                     id: this.state.eventId,
                                                     sportId: this.state.typeSport,
                                                     marketName: this.state.typeMarket,
                                                     marketId: this.state.currentMarketId,
                                                     participants: this.state.participants,
                                                     min: min,
                                                     max: max,
                                                     combineMin: combineMin,
                                                     combineMax: combineMax,
                                                     typeMarketBet: this.state.typeMarket,
                                                     alias: this.state.market.alias,
                                                 }, bets[bet][el], bets[bet][el].oldName)}>
                                                <span className="participant_name">
                                                    {bets[bet][el].Name == "Over" || bets[bet][el].Name == "Under"? name[0] : ""}
                                                    {bets[bet][el].Line? <span style = {{marginLeft: "5px"}}>{bets[bet][el].Line}</span> : ""}
                                                </span>
                                            <span className="participant_odds yellow_text">{bets[bet][el].Status != 2? bets[bet][el].Price : ""}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    })
                }
            </div>
        if(this.state.fromPage == "prematch"){
            return body
        }
        if(this.state.fromPage == "eventView"){
            return  <div className={`MarketGroup ${this.state.market.marketStatus != 1 ?"suspended":"" }`}>
                        {header}
                        <div className={`${this.state.currentMarketId}-market`.replace(/ /, '_')}>
                            {grayHeader}
                            {body}
                        </div>
                    </div>
        } else {
            return '';
        }
    }
}

export default GroupThreeMarkets ;