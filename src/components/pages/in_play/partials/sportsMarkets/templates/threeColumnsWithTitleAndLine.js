import React from 'react';
import DefaultMarket from './defaultMarket';

class ThreeColumnsWithTitleAndLine extends DefaultMarket {
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
        let toggleM = this.state.currentMarketId.replace(/ /, '_')
        if (this.state.fromPage == "all"){

            return <div className="Market_table">
                {
                    Object.keys(this.state.template.bets).map((betKey) => {
                        return Object.keys(this.state.template.bets[betKey]).map((bet, index) => {
                            return <div key={`under-over-${index}-${this.state.template.bets[betKey][bet]['Id']}-in_play-all`} id={`${this.state.template.bets[betKey][bet]['Id']}-in_play`} className="Participant grid3" onClick={() => this.props.addToBetSlip({
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
            </div>;
        }

        if (this.state.fromPage == "main"){

            return <div className="Market_table сolumnW33">
                {
                    Object.keys(this.state.template.bets).map((betKey) => {
                        return Object.keys(this.state.template.bets[betKey]).map((bet, index) => {
                            return <div key={`under-over-${index}-${this.state.template.bets[betKey][bet]['Id']}-in_play-all`} id={`${this.state.template.bets[betKey][bet]['Id']}-in_play`} className="Participant grid3" onClick={() => this.props.addToBetSlip({
                                id: this.state.eventId,
                                sportId: this.state.typeSport,
                                marketName: this.state.typeMarket,
                                marketId: this.state.currentMarketId,
                                participants: this.state.participants,
                                typeMarketBet: this.state.currentMarket,
                                alias: this.state.market.alias,
                                min: min,
                                max: max,
                                combineMin: combineMin,
                                combineMax: combineMax,
                            }, this.state.template.bets[betKey][bet], 1)}>
                                <span className="participant_name">{this.state.template.bets[betKey][bet].Status == 3 || this.state.blockNameOdd? "" : this.state.template.bets[betKey][bet].Name[0]} {this.state.template.bets[betKey][bet].Status == 3? "" : this.state.template.bets[betKey][bet].Line} </span>
                                <span className="participant_odds yellow_text">{(this.state.template.bets[betKey][bet].Status == 2 || this.state.template.bets[betKey][bet].Status == 3)? "" : this.state.template.bets[betKey][bet].Price}</span>

                            </div>
                        });
                    })
                }
                {/*<div className="Participant grid3" >*/}
                    {/*<span className="participant_name"/>*/}
                    {/*<span className="participant_odds yellow_text"/>*/}
                {/*</div>*/}
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
            let position = 1;
            let betsBySide = {
                left: {},
                right: {}
            };

            Object.keys(betsNonOrder).sort().forEach(function(key) {
                bets[key] = betsNonOrder[key];
            });
            Object.keys(bets).map((line) => {
                if(position == 1){
                    betsBySide['left'][line] = bets[line];
                    position = 2;
                } else {
                    betsBySide['right'][line] = bets[line];
                    position = 1;
                }
            });

            let isRightColumnsEmpty = Object.keys(betsBySide['right']).length == 0;

            return <div className={`MarketGroup ${this.state.market.marketStatus != 1 ?"suspended":"" }`}>
                {
                    this.state.hideMarketGroupButton ? '' :
                        <div className="MarketGroupButton"
                             id = {(this.state.currentMarketId + '-one')}
                             onClick={()=>this.toggleMarket(toggleM)}>
                                        <span className="MarketGroupButton_Text">
                                            {typeof this.state.market.alias == 'string' && this.state.market.alias.length ? this.state.market.alias : this.state.market.Name}
                                            <span className="suspended_Text"> - Currently Suspended</span>
                                        </span>
                        </div>
                }
                <div style={{display: 'flex'}}>
                    <div className={`MarketGroup_Wrapper ${this.state.currentMarketId}-market`} key={`one`} style={{width: `${isRightColumnsEmpty ? '100' : '50'}% !important`}}>
                        {
                            Object.keys(betsBySide['left']).map((line, index) => {
                                let betsCount = Object.keys(betsBySide['left'][line]).length;

                                return betsCount ?
                                    <div key={`under-over-div-${index}`}>
                                        <div key={`market-under-over-twice-${index}`} className="MarketLabel width_25 mobile_hide">
                                            {index == 0 ? <div className="MarketColumnHeader ">&nbsp;</div>: ''}
                                            <div className="ParticipantRowValue">
                                                <span className="ParticipantRowValue_Name">{line}</span>
                                            </div>
                                        </div>
                                        {
                                            Object.keys(betsBySide['left'][line]).map((bet) => {

                                                return <div key={`market-under-over-${betsBySide['left'][line][bet].Id}`} className={`MarketValues width_${betsCount == 1 ? '75' : '37_5'} mobileWidth50`}>
                                                    {index == 0 ? <div className="MarketColumnHeader mobile_hide">
                                                        <span className="mobile_hide">{bet}</span>
                                                    </div>: ''}
                                                    <div className="ParticipantOddsOnly" id={`${betsBySide['left'][line][bet].Id}-in_play`} onClick={() => this.props.addToBetSlip({
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
                                                    }, this.state.template.bets[line][bet], 1)}>
                                                        <span className="ParticipantOddsOnly_Odds yellow_text">
                                                            {(betsBySide['left'][line][bet].Status == 2 || betsBySide['left'][line][bet].Status == 3)
                                                                ? "" : betsBySide['left'][line][bet].Price
                                                            }
                                                        </span>
                                                    </div>
                                                </div>
                                            })
                                        }
                                    </div> : '';
                            })
                        }
                    </div>


                    {isRightColumnsEmpty ? '' : <div className={`MarketGroup_Wrapper ${this.state.currentMarketId}-market`} key={`two`} style={{width: '50% !important'}}>
                        {
                            Object.keys(betsBySide['right']).map((line, index) => {
                                let betsCount = Object.keys(betsBySide['right'][line]).length;

                                return betsCount ?
                                    <div key={`under-over-div-${index}`}>
                                        <div key={`market-under-over-twice-${index}`} className="MarketLabel width_25 mobile_hide">
                                            {index == 0 ? <div className="MarketColumnHeader ">&nbsp;</div>: ''}
                                            <div className="ParticipantRowValue">
                                                <span className="ParticipantRowValue_Name">{line}</span>
                                            </div>
                                        </div>
                                        {
                                            Object.keys(betsBySide['right'][line]).map((bet) => {

                                                return <div key={`market-under-over-${betsBySide['right'][line][bet].Id}`} className={`MarketValues width_${betsCount == 1 ? '75' : '37_5'} mobileWidth50`}>
                                                    {index == 0 ? <div className="MarketColumnHeader mobile_hide">
                                                        <span className="mobile_hide">{bet}</span>
                                                    </div>: ''}
                                                    <div className="ParticipantOddsOnly" id={`${betsBySide['right'][line][bet].Id}-in_play`} onClick={() => this.props.addToBetSlip({
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
                                                    }, this.state.template.bets[line][bet], 1)}>
                                                        <span className="ParticipantOddsOnly_Odds yellow_text">
                                                            {(betsBySide['right'][line][bet].Status == 2 || betsBySide['right'][line][bet].Status == 3)
                                                                ? "" : betsBySide['right'][line][bet].Price
                                                            }
                                                        </span>
                                                    </div>
                                                </div>
                                            })
                                        }
                                    </div> : '';
                            })
                        }
                    </div>}

                </div>
                {this.state.hideMarketGroupButton ? '' : <div className="MarketGroup_FavouriteButton "></div>}
            </div>;

        } else if (this.state.fromPage == "eventView") {
            //console.log(this.state.currentMarketId );
            /** Не альтернативные **/
            return <div key={`under-over-no-alter`} className={`${this.state.halfWidth? "halfWidth" : ""}`}>
                    <div className={`MarketGroup ${this.state.market.marketStatus != 1 ?"suspended":"" }`}>
                        {
                            this.state.hideMarketGroupButton ? '' :
                                <div className="MarketGroupButton"
                                      id = {(this.state.currentMarketId + '-one')}
                                      onClick={()=>this.toggleMarket(toggleM)}>
                                        <span className="MarketGroupButton_Text">
                                            {typeof this.state.market.alias == 'string' && this.state.market.alias.length ? this.state.market.alias : this.state.market.Name}
                                            <span className="suspended_Text"> - Currently Suspended</span>
                                        </span>
                                </div>
                        }
                        <div className={`MarketGroup_Wrapper ${this.state.currentMarketId}-market`}>
                            {
                                Object.keys(this.state.template.bets).map((column, index) => {
                                    let betsCount = Object.keys(this.state.template.bets[column]).length;

                                    return betsCount ?
                                        <div key={`under-over-div-${index}`}>
                                            <div key={`market-under-over-twice-${index}`} className="MarketLabel width_25 mobile_hide">
                                                {index == 0 ? <div className="MarketColumnHeader ">&nbsp;</div>: ''}
                                                <div className="ParticipantRowValue">
                                                    <span className="ParticipantRowValue_Name">{column}</span>
                                                </div>
                                            </div>
                                            {
                                                Object.keys(this.state.template.bets[column]).map((bet) => {

                                                    return <div key={`market-under-over-${this.state.template.bets[column][bet].Id}`} className={`MarketValues width_${betsCount == 1 ? '75' : '37_5'} mobileWidth50`}>
                                                                {index == 0 ? <div className="MarketColumnHeader mobile_hide">
                                                                    <span className="mobile_hide">{bet}</span>
                                                                </div>: ''}
                                                                <div className="ParticipantOddsOnly" id={`${this.state.template.bets[column][bet].Id}-in_play`} onClick={() => this.props.addToBetSlip({
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
                                                                }, this.state.template.bets[column][bet], 1)}>
                                                                    <span className="ParticipantOddsOnly_Odds yellow_text">{(this.state.template.bets[column][bet].Status == 2 ||this.state.template.bets[column][bet].Status == 3)? "" : this.state.template.bets[column][bet].Price}</span>
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
                        typeof this.state.template.betsAlternative == 'object' &&
                            Object.keys(this.state.template.betsAlternative).length ?

                            /** Альтернативные **/

                            <div className={`MarketGroup ${this.state.market.marketStatus != 1 ?"suspended":"" }`}>
                                <div className="MarketGroupButton" id = {(this.state.currentMarketId + '-second')} onClick={()=>this.toggleAlternativeMarket(toggleM)}>
                                    <span className="MarketGroupButton_Text">Alternative {typeof this.state.market.alias == 'string' && this.state.market.alias.length ? this.state.market.alias : this.state.market.Name}
                                        <span className="suspended_Text"> - Currently Suspended</span>
                                    </span>
                                </div>
                                <div className={`${this.state.currentMarketId}-alternative-market`.replace(/ /, '_')}>
                                    {
                                        Object.keys(this.state.template.betsAlternative).map((column, index) => {

                                            return Object.keys(this.state.template.betsAlternative[column]).length ?
                                                <div key={`under-over-alter-in-${index}`}>
                                                    <div key={`market-under-over-second-${index}`} className="MarketLabel width_25 mobile_hide">
                                                        {index == 0 ? <div className="MarketColumnHeader ">&nbsp;</div>: ''}
                                                        <div className="ParticipantRowValue">
                                                            <span className="ParticipantRowValue_Name">{column}</span>
                                                        </div>
                                                    </div>
                                                    {
                                                        Object.keys(this.state.template.betsAlternative[column]).map((bet) => {

                                                            return <div key={`market-under-over-second-${this.state.template.betsAlternative[column][bet].Id}`} className="MarketValues width_37_5 mobileWidth50">
                                                                {index == 0 ? <div className="MarketColumnHeader mobile_hide">
                                                                    <span className="mobile_hide">{bet}</span>
                                                                </div>: ''}
                                                                <div className="ParticipantOddsOnly" id={`${this.state.template.betsAlternative[column][bet].Id}-in_play`} onClick={() => this.props.addToBetSlip({
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
                                                                }, this.state.template.betsAlternative[column][bet], 1)}>
                                                                    <span className="ParticipantOddsOnly_Odds yellow_text">{(this.state.template.betsAlternative[column][bet].Status == 2 || this.state.template.betsAlternative[column][bet].Status == 3)? "" : this.state.template.betsAlternative[column][bet].Price}</span>
                                                                </div>
                                                            </div>;
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
        }

        if (this.state.fromPage == "prematch" ){

            return <div className="Market_table">
                {
                    Object.keys(this.state.template.bets).map((betKey) => {
                        return Object.keys(this.state.template.bets[betKey]).map((bet, index) => {
                            return <div key={`under-over-${index}-${this.state.template.bets[betKey][bet]['Id']}-in_play-all`} id={`${this.state.template.bets[betKey][bet]['Id']}-in_play`} className="Participant grid2" onClick={() => this.props.addToBetSlip({
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
        } else {
            return '';
        }
    }
}

export default ThreeColumnsWithTitleAndLine;