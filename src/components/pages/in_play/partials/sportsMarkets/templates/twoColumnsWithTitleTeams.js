import React from 'react';
import DefaultMarket from './defaultMarket';

class TwoColumnsWithTitleTeams extends DefaultMarket {
    constructor(props) {
        super(props);
        this.state = {
            hideMarketGroupButton: this.props.hideMarketGroupButton,
            template: props.template,
            market: props.market,
            currentMarket: props.currentMarket,
            participants: props.participants,
            fromEventView: props.fromEventView,
            classNameLower: this.constructor.name.toLowerCase(),
            eventId: this.props.eventId,
            needTwoColumnsRender: this.props.needTwoColumnsRender,
            typeSport: this.props.typeSport,
            typeMarket: this.props.typeMarket,
            currentMarketId: this.props.currentMarketId,
            fromPage: this.props.fromPage,
            halfWidth: this.props.halfWidth,
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
            needTwoColumnsRender: nextProps.needTwoColumnsRender,
            fromEventView: nextProps.fromEventView,
            eventId: nextProps.eventId,
            typeSport: nextProps.typeSport,
            typeMarket: nextProps.typeMarket,
            currentMarketId: nextProps.currentMarketId,
            fromPage: nextProps.fromPage,
            halfWidth: nextProps.halfWidth,
        });
    }

    render() {
        let { market: { limits:{min=null, max=null} = {}, systemLimit:{min:combineMin=null, max:combineMax=null}={}  } = {} } = this.state
        if (this.state.fromPage == "main"){

            return <div className="Market_table сolumnW33">
                {
                    Object.keys(this.state.template.bets).map((betKey) => {
                        return Object.keys(this.state.template.bets[betKey]).map((bet, index) => {
                            return <div key={`under-over-${index}-${this.state.template.bets[betKey][bet]['Id']}-in_play-all`} id={`${this.state.template.bets[betKey][bet]['Id']}-in_play`} className="Participant grid2" onClick={() => this.props.addToBetSlip({
                                id: this.state.eventId,
                                sportId: this.state.typeSport,
                                marketName: this.state.typeMarket,
                                marketId: this.state.currentMarketId,
                                participants: this.state.participants,
                                min: min,
                                max: max,
                                combineMin: combineMin,
                                combineMax: combineMax,
                                typeMarketBet: this.state.currentMarket,
                                alias: this.state.market.alias,
                            }, this.state.template.bets[betKey][bet], 1)}>
                                <span className="participant_name">{this.state.template.bets[betKey][bet].Status == 3? "" : this.state.template.bets[betKey][bet].Line} </span>
                                <span className="participant_odds yellow_text">{(this.state.template.bets[betKey][bet].Status == 2 || this.state.template.bets[betKey][bet].Status == 3)? "" : this.state.template.bets[betKey][bet].Price}</span>

                            </div>
                        });
                    })
                }

            </div>;
        }
        if (this.state.fromPage == "topCouponTable"){

            return  <div>
                        <div className="stake_name_header">
                                    <span className="stake_name">
                                        {typeof this.state.market.alias == 'string' && this.state.market.alias.length ? this.state.market.alias : this.state.market.Name}
                                    </span>
                        </div>
                        <div className="Market_table">
                            {
                                Object.keys(this.state.template.bets).map((betKey) => {
                                    return Object.keys(this.state.template.bets[betKey]).map((bet, index) => {
                                        return <div key={`under-over-${index}-in_play-all`} id={`${this.state.template.bets[betKey][bet]['Id']}-in_play`} className="Participant grid2" onClick={() => this.props.addToBetSlip({
                                            id: this.state.eventId,
                                            sportId: this.state.typeSport,
                                            marketName: this.state.typeMarket,
                                            marketId: this.state.currentMarketId,
                                            participants: this.state.participants,
                                            min: min,
                                            max: max,
                                            combineMin: combineMin,
                                            combineMax: combineMax,
                                            typeMarketBet: this.state.currentMarket,
                                            alias: this.state.market.alias,
                                        }, this.state.template.bets[betKey][bet], 1)}>
                                            <span className="participant_name">{this.state.template.bets[betKey][bet].Status == 3 || this.state.blockNameOdd? "" : this.state.template.bets[betKey][bet].Name} {this.state.template.bets[betKey][bet].Status == 3? "" : this.state.template.bets[betKey][bet].Line} </span>
                                            <span className="participant_odds yellow_text">{(this.state.template.bets[betKey][bet].Status == 2 || this.state.template.bets[betKey][bet].Status == 3)? "" : this.state.template.bets[betKey][bet].Price}</span>
                                        </div>
                                    });
                                })
                            }
                        </div>
                    </div>;
        }
        if (this.state.fromPage == "rightColumn"){
            return <div className="match_grid grid1cols">
                <div className="title_container">
                    <div className="title_name">{typeof this.state.market.alias == 'string' && this.state.market.alias.length ? this.state.market.alias : this.state.market.Name}</div>
                    <div className="title_icon"></div>
                </div>
                <div className="match_participant_row">
                    {
                                            Object.keys(this.state.template.bets).map((betKey) => {
                                                return Object.keys(this.state.template.bets[betKey]).map((bet, index) => {
                                                    return <div key={`under-over-${index}-in_play-all`} id={`${this.state.template.bets[betKey][bet]['Id']}-in_play`} className="Participant grid2" onClick={() => this.props.addToBetSlip({
                                                        id: this.state.eventId,
                                                        sportId: this.state.typeSport,
                                                        marketName: this.state.typeMarket,
                                                        marketId: this.state.currentMarketId,
                                                        participants: this.state.participants,
                                                        typeMarketBet: this.state.currentMarket,
                                                        min: min,
                                                        max: max,
                                                        combineMin: combineMin,
                                                        combineMax: combineMax,
                                                        alias: this.state.market.alias,
                                                    }, this.state.template.bets[betKey][bet], 1)}>
                                                        <span className="participant_name">{this.state.template.bets[betKey][bet].Status == 3 || this.state.blockNameOdd? "" : this.state.template.bets[betKey][bet].Name} {this.state.template.bets[betKey][bet].Status == 3? "" : this.state.template.bets[betKey][bet].Line} </span>
                                                        <span className="participant_odds yellow_text">{(this.state.template.bets[betKey][bet].Status == 2 || this.state.template.bets[betKey][bet].Status == 3)? "" : this.state.template.bets[betKey][bet].Price}</span>
                                                    </div>
                                                });
                                            })
                                        }


                </div>
            </div>

        }
        if (this.state.fromPage == "all" || this.state.fromPage == "home"){

            return <div className="Market_table">
                {
                    Object.keys(this.state.template.bets).map((betKey) => {
                        return Object.keys(this.state.template.bets[betKey]).map((bet, index) => {
                            return <div key={`under-over-${index}-in_play-all`} id={`${this.state.template.bets[betKey][bet]['Id']}-in_play`} className="Participant grid3" onClick={() => this.props.addToBetSlip({
                                    id: this.state.eventId,
                                    sportId: this.state.typeSport,
                                    marketName: this.state.typeMarket,
                                    marketId: this.state.currentMarketId,
                                    participants: this.state.participants,
                                    typeMarketBet: this.state.currentMarket,
                                    min: min,
                                    max: max,
                                    combineMin: combineMin,
                                    combineMax: combineMax,
                                    alias: this.state.market.alias,
                                }, this.state.template.bets[betKey][bet], 1)}>
                                <span className="participant_name">{this.state.template.bets[betKey][bet].Status == 3 || this.state.blockNameOdd? "" : this.state.template.bets[betKey][bet].Name} {this.state.template.bets[betKey][bet].Status == 3? "" : this.state.template.bets[betKey][bet].Line} </span>
                                <span className="participant_odds yellow_text">{(this.state.template.bets[betKey][bet].Status == 2 || this.state.template.bets[betKey][bet].Status == 3)? "" : this.state.template.bets[betKey][bet].Price}</span>
                            </div>
                        });
                    })
                }
            </div>;
        }
        if (this.state.fromPage == "prematch"){

            return <div className="Market_table">
                {
                    Object.keys(this.state.template.bets).map((betKey) => {
                        return Object.keys(this.state.template.bets[betKey]).map((bet, index) => {
                            return <div key={`under-over-${index}-in_play-all`} id={`${this.state.template.bets[betKey][bet]['Id']}-in_play`} className="Participant grid2" onClick={() => this.props.addToBetSlip({
                                id: this.state.eventId,
                                sportId: this.state.typeSport,
                                marketName: this.state.typeMarket,
                                marketId: this.state.currentMarketId,
                                participants: this.state.participants,
                                typeMarketBet: this.state.currentMarket,
                                min: min,
                                max: max,
                                combineMin: combineMin,
                                combineMax: combineMax,
                                alias: this.state.market.alias,
                            }, this.state.template.bets[betKey][bet], 1)}>
                                <span className="participant_name">{this.state.template.bets[betKey][bet].Status == 3 || this.state.blockNameOdd? "" : this.state.template.bets[betKey][bet].Name} {this.state.template.bets[betKey][bet].Status == 3? "" : this.state.template.bets[betKey][bet].Line} </span>
                                <span className="participant_odds yellow_text">{(this.state.template.bets[betKey][bet].Status == 2 || this.state.template.bets[betKey][bet].Status == 3)? "" : this.state.template.bets[betKey][bet].Price}</span>
                            </div>
                        });
                    })
                }
            </div>;
        }
        if (this.state.fromPage == "leftSidebar" ){

            return <div className="Market_table">
                {
                    Object.keys(this.state.template.bets).map((betKey) => {
                        return Object.keys(this.state.template.bets[betKey]).map((bet, index) => {
                            return <div key={`under-over-${index}-in_play-all`} id={`${this.state.template.bets[betKey][bet]['Id']}-in_play`} className="Participant grid3" onClick={() => this.props.addToBetSlip({
                                id: this.state.eventId,
                                sportId: this.state.typeSport,
                                marketName: this.state.typeMarket,
                                marketId: this.state.currentMarketId,
                                participants: this.state.participants,
                                typeMarketBet: this.state.currentMarket,
                                min: min,
                                max: max,
                                combineMin: combineMin,
                                combineMax: combineMax,
                                alias: this.state.market.alias,
                            }, this.state.template.bets[betKey][bet], 1)}>
                                <span className="participant_name">{this.state.template.bets[betKey][bet].Status == 3 || this.state.blockNameOdd? "" : this.state.template.bets[betKey][bet].oldName} {this.state.template.bets[betKey][bet].Status == 3? "" : this.state.template.bets[betKey][bet].Line} </span>
                                <span className="participant_odds yellow_text">{(this.state.template.bets[betKey][bet].Status == 2 || this.state.template.bets[betKey][bet].Status == 3)? "" : this.state.template.bets[betKey][bet].Price}</span>
                            </div>
                        });
                    })
                }
            </div>;
        }

        if(this.state.fromPage == "eventView" && this.state.needTwoColumnsRender){

            let betsNonOrder = this.state.template.bets;
            let bets = {};
            if(
                typeof this.state.template.betsAlternative == 'object' &&
                Object.keys(this.state.template.betsAlternative).length
            ){
                Object.keys(this.state.template.betsAlternative).map((line) => {
                    betsNonOrder[line] = this.state.template.betsAlternative[line];
                });
            }
            Object.keys(betsNonOrder).sort().forEach(function(key) {
                bets[key] = betsNonOrder[key];
            });

            return <div key={`under-over-no-alter`}>
                <div className={`MarketGroup CouponMarketGroup ${this.state.market.marketStatus != 1 ?"suspended":"" }`}>
                    {this.state.hideMarketGroupButton ? '' : <div className="MarketGroupButton" onClick={()=>this.toggleMarket(this.state.currentMarketId + '-one')}>
                            <span className="MarketGroupButton_Text">{typeof this.state.market.alias == 'string' && this.state.market.alias.length ? this.state.market.alias : this.state.market.Name}
                                <span className="suspended_Text"> - Currently Suspended</span>
                            </span>
                    </div>}
                    <div className={`MarketGroup_Wrapper ${this.state.currentMarketId}-one-market`}>
                        {
                            Object.keys(bets).map((column, index) => {

                                return Object.keys(bets[column]).length ?
                                    <div key={`under-over-div-${index}`} className="MarketGroupContainer clean_sheet">
                                        {
                                            Object.keys(bets[column]).map((bet) => {

                                                return <div key={`market-under-over-${bets[column][bet].Id}`} className="Market Market_General Market_PWidth-50">
                                                    {index == 0 ? <div className="MarketColumnHeader mobile_hide">
                                                        <span className="mobile_hide">{bet}</span>
                                                    </div> : ''}
                                                    <div className="ParticipantOddsOnly ParticipantCentered Participant_General ParticipantCentered_NoHandicap" id={`${bets[column][bet].Id}-in_play`} onClick={() => this.props.addToBetSlip({
                                                        id: this.state.eventId,
                                                        sportId: this.state.typeSport,
                                                        marketName: this.state.typeMarket,
                                                        marketId: this.state.currentMarketId,
                                                        participants: this.state.participants,
                                                        min: min,
                                                        max: max,
                                                        combineMin: combineMin,
                                                        combineMax: combineMax,
                                                        typeMarketBet: this.state.currentMarket,
                                                        alias: this.state.market.alias,
                                                    }, bets[column][bet], 1)}>

                                                        <span className="ParticipantCentered_Name">{bets[column][bet].Status == 3? "" : bets[column][bet].Line}</span>
                                                        <span className="ParticipantCentered_Odds">{(bets[column][bet].Status == 2 || bets[column][bet].Status == 3)? "" : bets[column][bet].Price}</span>
                                                    </div>
                                                </div>
                                            })
                                        }
                                    </div> : '';
                            })
                        }
                    </div>
                    {this.state.hideMarketGroupButton ? '' : <div className="MarketGroup_FavouriteButton "></div>}
                </div>
            </div>;

        } else if (this.state.fromPage == "eventView") {

            /** Не альтернативные **/

            return <div key={`under-over-no-alter`} className={`${this.state.halfWidth? "halfWidth" : ""}`}>
                    <div className={`MarketGroup CouponMarketGroup
                    ${typeof this.state.template.betsAlternative == 'object' && Object.keys(this.state.template.betsAlternative).length ? 'MarketGrid_PairL' : ''}
                    ${this.state.market.marketStatus != 1 ?"suspended":"" }`}>
                        {this.state.hideMarketGroupButton ? '' : <div className="MarketGroupButton" onClick={()=>this.toggleMarket(this.state.currentMarketId + '-one')}>
                            <span className="MarketGroupButton_Text">{typeof this.state.market.alias == 'string' && this.state.market.alias.length ? this.state.market.alias : this.state.market.Name}
                                <span className="suspended_Text"> - Currently Suspended</span>
                            </span>
                        </div>}
                        <div className={`MarketGroup_Wrapper ${this.state.currentMarketId}-one-market`}>
                            {
                                Object.keys(this.state.template.bets).map((column, index) => {

                                    return Object.keys(this.state.template.bets[column]).length ?
                                        <div key={`under-over-div-${index}`} className="MarketGroupContainer clean_sheet">
                                            {
                                                Object.keys(this.state.template.bets[column]).map((bet) => {

                                                    return <div key={`market-under-over-${this.state.template.bets[column][bet].Id}`} className="Market Market_General Market_PWidth-50">
                                                                <div className="MarketColumnHeader mobile_hide">
                                                                    <span className="mobile_hide">{bet}</span>
                                                                </div>
                                                                <div className="ParticipantOddsOnly ParticipantCentered Participant_General ParticipantCentered_NoHandicap" id={`${this.state.template.bets[column][bet].Id}-in_play`} onClick={() => this.props.addToBetSlip({
                                                                        id: this.state.eventId,
                                                                        sportId: this.state.typeSport,
                                                                        marketName: this.state.typeMarket,
                                                                        marketId: this.state.currentMarketId,
                                                                        participants: this.state.participants,
                                                                        min: min,
                                                                        max: max,
                                                                        combineMin: combineMin,
                                                                        combineMax: combineMax,
                                                                        typeMarketBet: this.state.currentMarket,
                                                                        alias: this.state.market.alias,
                                                                    }, this.state.template.bets[column][bet], 1)}>

                                                                    <span className="ParticipantCentered_Name">{this.state.template.bets[column][bet].Status == 3? "" : this.state.template.bets[column][bet].Line}</span>
                                                                    <span className="ParticipantCentered_Odds">{(this.state.template.bets[column][bet].Status == 2 || this.state.template.bets[column][bet].Status == 3)? "" : this.state.template.bets[column][bet].Price}</span>
                                                                </div>
                                                            </div>
                                                })
                                            }
                                        </div> : '';
                                })
                            }
                        </div>
                        {this.state.hideMarketGroupButton ? '' : <div className="MarketGroup_FavouriteButton "></div>}
                    </div>


                    {
                        typeof this.state.template.betsAlternative == 'object' && Object.keys(this.state.template.betsAlternative).length ?

                            /** Альтернативные **/

                            <div className={`MarketGroup CouponMarketGroup MarketGrid_PairL ${this.state.market.marketStatus != 1 ?"suspended":"" }`}>
                                <div className="MarketGroupButton" onClick={()=>this.toggleMarket(this.state.currentMarketId + '-one')}>
                                    <span className="MarketGroupButton_Text">Alternative {typeof this.state.market.alias == 'string' && this.state.market.alias.length ? this.state.market.alias : this.state.market.Name}
                                        <span className="suspended_Text"> - Currently Suspended</span>
                                    </span>
                                </div>
                                <div className={`MarketGroup_Wrapper ${this.state.currentMarketId}-one-market`}>
                                    {
                                        Object.keys(this.state.template.betsAlternative).map((column, index) => {

                                            return Object.keys(this.state.template.betsAlternative[column]).length ?
                                                <div key={`under-over-alter-in-${index}`} className="MarketGroupContainer clean_sheet">
                                                    {
                                                        Object.keys(this.state.template.betsAlternative[column]).map((bet) => {

                                                            return <div key={`market-under-over-${this.state.template.betsAlternative[column][bet].Id}`} className="Market Market_General Market_PWidth-50">
                                                                {index == 0 ? <div className="MarketColumnHeader mobile_hide">
                                                                    <span className="mobile_hide">{bet}</span>
                                                                </div> : ''}
                                                                <div className="ParticipantOddsOnly ParticipantCentered Participant_General ParticipantCentered_NoHandicap" id={`${this.state.template.betsAlternative[column][bet].Id}-in_play`} onClick={() => this.props.addToBetSlip({
                                                                    id: this.state.eventId,
                                                                    sportId: this.state.typeSport,
                                                                    marketName: this.state.typeMarket,
                                                                    marketId: this.state.currentMarketId,
                                                                    participants: this.state.participants,
                                                                    typeMarketBet: this.state.currentMarket,
                                                                    min: min,
                                                                    max: max,
                                                                    combineMin: combineMin,
                                                                    combineMax: combineMax,
                                                                    alias: this.state.market.alias,
                                                                }, this.state.template.betsAlternative[column][bet], 1)}>
                                                                    <span className="ParticipantCentered_Name">{this.state.template.betsAlternative[column][bet].Status == 3? "" : this.state.template.betsAlternative[column][bet].Line}</span>
                                                                    <span className="ParticipantCentered_Odds">{(this.state.template.betsAlternative[column][bet].Status == 2 || this.state.template.betsAlternative[column][bet].Status == 3)? "" : this.state.template.betsAlternative[column][bet].Price}</span>
                                                                </div>
                                                            </div>
                                                        })
                                                    }
                                                </div> : '';
                                        })
                                    }
                                </div>
                                <div className="MarketGroup_FavouriteButton "></div>
                            </div>
                            : ''
                    }
                </div>;
        } else{
            return "";
        }
    }
}

export default TwoColumnsWithTitleTeams;