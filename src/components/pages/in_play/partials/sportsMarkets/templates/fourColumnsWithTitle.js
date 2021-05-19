import React from 'react';
import DefaultMarket from './defaultMarket';

class ThreeColumnsWithTitle extends DefaultMarket {
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
            fromEventView: nextProps.fromEventView,
            eventId: nextProps.eventId,
            typeSport: nextProps.typeSport,
            typeMarket: nextProps.typeMarket,
            currentMarketId: nextProps.currentMarketId,
            fromPage: nextProps.fromPage
        });
    }

    render() {
        let { market: { limits:{min=null, max=null} = {}, systemLimit:{min:combineMin=null, max:combineMax=null}={}  } = {} } = this.state
        // if (this.state.fromPage == "main") {
        //     return <div className="column">
        //         {
        //             twiceMarketObj[mustDisplayLineId].map((bet, index) => {
        //                 if (bet.Name == "Over") {
        //                     return  <div className="value_wrapp" key={`under-over-${index}-under`} id={`${bet.Id}-in_play`} onClick={() => this.props.addToBetSlip({id: this.state.eventId, sportId: this.state.typeSport, marketName: this.state.typeMarket, marketId: this.state.currentMarketId, participants: this.state.participants, typeMarketBet: "Under/Over"}, bet, 1)}>
        //                         <span className="participant_name"></span>
        //                         <span className="participant_odds yellow_text"><span className="desc_bets" style={{color: "#ddd"}}>O {mustDisplayLineId}</span> {bet.Price} </span>
        //                     </div>
        //                 }
        //                 if (bet.Name == "Under") {
        //                     return <div className="value_wrapp" key={`under-over-${index}-over`} id={`${bet.Id}-in_play`} onClick={() => this.props.addToBetSlip({id: this.state.eventId, sportId: this.state.typeSport, marketName: this.state.typeMarket, marketId: this.state.currentMarketId, participants: this.state.participants, typeMarketBet: "Under/Over"}, bet, 1)}>
        //                         <span className="participant_name"></span>
        //                         <span className="participant_odds yellow_text"><span className="desc_bets" style={{color: "#ddd"}}>U {mustDisplayLineId}</span> {bet.Price}</span>
        //                     </div>
        //                 }
        //
        //             })
        //         }
        //         <div className="value_wrapp">
        //             <span className="participant_name"></span>
        //             <span className="participant_odds yellow_text"></span>
        //         </div>
        //     </div>
        // }

        if (this.state.fromPage == "all"){

            return <div className="Market_table">
                {
                    Object.keys(this.state.template.bets).map((betKey) => {
                        return Object.keys(this.state.template.bets[betKey]).map((bet, index) => {
                            return <div key={`under-over-${index}-in_play-all`} id={`${this.state.template.bets[betKey][bet]['Id']}-in_play`} className="Participant grid3" onClick={() => this.props.addToBetSlip({
                                id: this.state.eventId,
                                sportId: this.state.typeSport,
                                marketName: this.state.market.Name,
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

        if (this.state.fromPage == "eventView") {

            /** Не альтернативные **/

            return <div key={`under-over-no-alter`}>
                <div className={`MarketGroup ${this.state.market.marketStatus != 1 ?"suspended":"" }`}>

                    {
                        this.state.hideMarketGroupButton ? '' :
                            <div className="MarketGroupButton"
                                 onClick={() => this.toggleMarket(this.state.currentMarketId)}>
                                <span className="MarketGroupButton_Text">
                                    {typeof this.state.market.alias == 'string' && this.state.market.alias.length ? this.state.market.alias : this.state.market.Name}
                                    <span className="suspended_Text"> - Currently Suspended</span>
                                    </span>
                            </div>
                    }

                    <div className={`MarketGroup_Wrapper ${this.state.currentMarketId}-market`}>
                        {
                            Object.keys(this.state.template.bets).map((column, index) => {

                                return Object.keys(this.state.template.bets[column]).length ?
                                    <div key={`under-over-div-${index}`}>
                                        <div key={`market-under-over-twice-${index}`} className="MarketLabel width_25 mobile_hide">
                                            <div className="MarketColumnHeader ">&nbsp;</div>
                                            <div className="ParticipantRowValue">
                                                <span className="ParticipantRowValue_Name">{column}</span>
                                            </div>
                                        </div>
                                        {
                                            Object.keys(this.state.template.bets[column]).map((bet, index) => {

                                                return <div key={`market-under-over-with-index${index}`} className="MarketValues width_25 mobileWidth50">
                                                    <div className="MarketColumnHeader mobile_hide">
                                                        <span className="mobile_hide">{bet}</span>
                                                    </div>
                                                    <div className="ParticipantOddsOnly" id={`${this.state.template.bets[column][bet].Id}-in_play`} onClick={() => this.props.addToBetSlip({
                                                        id: this.state.eventId,
                                                        sportId: this.state.typeSport,
                                                        marketName: this.state.market.Name,
                                                        marketId: this.state.currentMarketId,
                                                        min: min,
                                                        max: max,
                                                        combineMin: combineMin,
                                                        combineMax: combineMax,
                                                        participants: this.state.participants,
                                                        typeMarketBet: this.state.currentMarket,
                                                        alias: this.state.market.alias,
                                                    }, this.state.template.bets[column][bet], 1)}>
                                                        <span className="ParticipantOddsOnly_Odds yellow_text">{(this.state.template.bets[column][bet].Status == 2 || this.state.template.bets[column][bet].Status == 3)? "" : this.state.template.bets[column][bet].Price}</span>
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
                            <div className="MarketGroupButton" onClick={()=>this.toggleAlternativeMarket(this.state.currentMarketId)}>
                                <span className="MarketGroupButton_Text">Alternative {typeof this.state.market.alias == 'string' && this.state.market.alias.length ? this.state.market.alias : this.state.market.Name}
                                    <span className="suspended_Text"> - Currently Suspended</span>
                                </span>
                            </div>
                            <div className={`MarketGroup_Wrapper ${this.state.currentMarketId}-alternative-market`}>
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

                                                        return <div key={`market-under-over-second-${this.state.template.betsAlternative[column][bet].Id}`} className="MarketValues width_25 mobileWidth50">
                                                            {index == 0 ? <div className="MarketColumnHeader mobile_hide">
                                                                <span className="mobile_hide">{bet}</span>
                                                            </div>: ''}
                                                            <div className="ParticipantOddsOnly" id={`${this.state.template.betsAlternative[column][bet].Id}-in_play`} onClick={() => this.props.addToBetSlip({
                                                                id: this.state.eventId,
                                                                sportId: this.state.typeSport,
                                                                marketName: this.state.market.Name,
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
        } else{
            return "";
        }
    }
}

export default ThreeColumnsWithTitle;