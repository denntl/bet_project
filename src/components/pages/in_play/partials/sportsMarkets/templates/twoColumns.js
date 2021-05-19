import React from 'react';
import DefaultMarket from './defaultMarket';

class TwoColumns extends DefaultMarket {
    constructor(props) {
        super(props);

        this.state = {
            hideMarketGroupButton: this.props.hideMarketGroupButton,
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
            hideMarketGroupButton: nextProps.hideMarketGroupButton,
            template: nextProps.template,
            market: nextProps.market,
            currentMarket: nextProps.currentMarket,
            participants: nextProps.participants,
            // fromEventView: nextProps.fromEventView,
            eventId: nextProps.eventId,
            typeSport: nextProps.typeSport,
            typeMarket: nextProps.typeMarket,
            currentMarketId: nextProps.currentMarketId,
            fromPage: nextProps.fromPage
        });
    }

    render(){
        let { market: { limits:{min=null, max=null} = {}, systemLimit:{min:combineMin=null, max:combineMax=null}={}  } = {} } = this.state
        if (this.state.fromPage == "eventView") {

            return <div className={`MarketGroup ${this.state.market.marketStatus != 1 ?"suspended":"" }`}>
                {
                    this.state.hideMarketGroupButton ? '' :
                        <div className="MarketGroupButton" onClick={() => this.toggleMarket(this.state.classNameLower)}>
                            <span className="MarketGroupButton_Text">
                                {typeof this.state.market.alias == 'string' && this.state.market.alias.length ? this.state.market.alias : this.state.market.Name}
                                <span className="suspended_Text"> - Currently Suspended</span>
                                </span>

                        </div>
                }
                <div className={`MarketGroup_Wrapper ${this.state.classNameLower}-market`}>
                    <div className="MarketGroupContainer">
                        <div className="Market_table">
                            {Object.keys(this.state.template.bets).map((key, index) => {
                                return <div key={`${index}-firsts`} className="Participant grid2" id={`${this.state.template.bets[key].Id}-in_play`} onClick={() => this.props.addToBetSlip(
                                    {
                                        id: this.state.eventId,
                                        sportId: this.state.typeSport,
                                        marketName: this.state.typeMarket,
                                        marketId: this.state.currentMarketId,
                                        min: min,
                                        max: max,
                                        combineMin: combineMin,
                                        combineMax: combineMax,
                                        participants: this.state.participants,
                                        typeMarketBet: this.state.typeMarket,
                                        alias: this.state.market.alias,
                                    }, this.state.template.bets[key], this.state.template.bets[key].oldName)}>
                                    <span className="participant_name ">{this.state.template.bets[key].Status == 3 || this.state.blockNameOdd? "" : this.state.template.bets[key].Name}</span>
                                    <span className="participant_odds yellow_text">{(this.state.template.bets[key].Status == 2 || this.state.template.bets[key].Status == 3)? "" : this.state.template.bets[key].Price}</span>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
                {this.state.hideMarketGroupButton ? '' : <div className="MarketGroup_FavouriteButton "></div>}
            </div>;
        } else if (this.state.fromPage == "leftSidebar") {

            return <div className="Market_table">
                {Object.keys(this.state.template.bets).map((key, index) => {
                  return  <div key={index} className="Participant grid2" id={`${this.state.template.bets[key].Id}-in_play`} style={{flexDirection: "column"}} onClick={() => this.props.addToBetSlip(
                        {
                            id: this.state.eventId,
                            sportId: this.state.typeSport,
                            marketName: this.state.typeMarket,
                            marketId: this.state.currentMarketId,
                            min: min,
                            max: max,
                            combineMin: combineMin,
                            combineMax: combineMax,
                            participants: this.state.participants,
                            typeMarketBet: this.state.typeMarket
                        }, this.state.template.bets[key], this.state.template.bets[key].oldName)}>
                        <span className="participant_name ">{this.state.template.bets[key].Status == 3 || this.state.blockNameOdd? "" : this.state.template.bets[key].oldName}</span>
                        <span className="participant_odds yellow_text">{(this.state.template.bets[key].Status == 2 || this.state.template.bets[key].Status == 3)? "" : this.state.template.bets[key].Price}</span>
                    </div>
                })}
            </div>;
        } else if (this.state.fromPage == "topCouponTable") {
            return  <div>
                    <div className="stake_name_header">
                        <span className="stake_name">
                            {typeof this.state.market.alias == 'string' && this.state.market.alias.length ? this.state.market.alias : this.state.market.Name}
                        </span>
                    </div>
                    <div className="Market_table">
                        {Object.keys(this.state.template.bets).map((key, index) => {
                            return  <div key={index} className="Participant grid2" id={`${this.state.template.bets[key].Id}-in_play`} onClick={() => this.props.addToBetSlip(
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
                                }, this.state.template.bets[key], this.state.template.bets[key].oldName)}>
                                <span className="participant_name ">{this.state.template.bets[key].Status == 3 || this.state.blockNameOdd? "" : this.state.template.bets[key].Name}</span>
                                <span className="participant_odds yellow_text">{(this.state.template.bets[key].Status == 2 || this.state.template.bets[key].Status == 3)? "" : this.state.template.bets[key].Price}</span>
                            </div>
                        })}
                    </div>
                    </div>
        } else if (this.state.fromPage == "rightColumn") {
            return <div className="match_grid grid1cols">
                <div className="title_container">
                    <div className="title_name">{typeof this.state.market.alias == 'string' && this.state.market.alias.length ? this.state.market.alias : this.state.market.Name}</div>
                    <div className="title_icon"></div>
                </div>
                <div className="match_participant_row">
                    {
                        Object.keys(this.state.template.bets).map((key, index) => {
                            return <div className="match_participant" key={index}  id={`${this.state.template.bets[key].Id}-in_play`} onClick={() => this.props.addToBetSlip(
                                                {
                                                    id: this.state.eventId,
                                                    sportId: this.state.typeSport,
                                                    marketName: this.state.typeMarket,
                                                    marketId: this.state.currentMarketId,
                                                    min: min,
                                                    max: max,
                                                    combineMin: combineMin,
                                                    combineMax: combineMax,
                                                    participants: this.state.participants,
                                                    typeMarketBet: this.state.typeMarket,
                                                    alias: this.state.market.alias,
                                                }, this.state.template.bets[key], this.state.template.bets[key].oldName)}>
                                <div className="participant_name">
                                    {this.state.template.bets[key].Status == 3 || this.state.blockNameOdd? "" : this.state.template.bets[key].Name}
                                </div>
                                <div className="participant_odds yellow_text">
                                    {(this.state.template.bets[key].Status == 2 || this.state.template.bets[key].Status == 3)? "" : this.state.template.bets[key].Price}
                                </div>
                            </div>
                        })
                    }



                </div>
            </div>
        } else if (this.state.fromPage == "main"){
            return <div className="Market_table сolumnW33">
                    {Object.keys(this.state.template.bets).map((key, index) => {
                        return  <div key={index} className="Participant grid2" id={`${this.state.template.bets[key].Id}-in_play`} onClick={() => this.props.addToBetSlip(
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
                            }, this.state.template.bets[key], this.state.template.bets[key].oldName)}>
                            <span className="participant_name "></span>
                            <span className="participant_odds yellow_text">{(this.state.template.bets[key].Status == 2 || this.state.template.bets[key].Status == 3)? "" : this.state.template.bets[key].Price}</span>
                        </div>
                    })}
                </div>;
        }else {
            return <div className="Market_table">
                {Object.keys(this.state.template.bets).map((key, index) => {
                    return  <div key={index} className="Participant grid2" id={`${this.state.template.bets[key].Id}-in_play`} onClick={() => this.props.addToBetSlip(
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
                        }, this.state.template.bets[key], this.state.template.bets[key].oldName)}>
                        <span className="participant_name ">{this.state.template.bets[key].Status == 3 || this.state.blockNameOdd? "" : this.state.template.bets[key].Name}</span>
                        <span className="participant_odds yellow_text">{(this.state.template.bets[key].Status == 2 || this.state.template.bets[key].Status == 3)? "" : this.state.template.bets[key].Price}</span>
                    </div>
                })}
            </div>;
        }




    }
}

export default TwoColumns ;