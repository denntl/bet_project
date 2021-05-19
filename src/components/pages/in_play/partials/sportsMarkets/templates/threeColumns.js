import React from 'react';
import DefaultMarket from './defaultMarket';

class ThreeColumns extends DefaultMarket {
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
            marketsCount: this.props.marketsCount,
            blockNameOdd: this.props.blockNameOdd,
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
            fromPage: nextProps.fromPage,
            marketsCount: nextProps.marketsCount,
        });
    }

    selectEvent(fixtureId){
        window.localStorage.setItem("selectedEventId", fixtureId);
        location.href = '//' + location.host + '/in-play?fixtureId=' + fixtureId;
    }

    renderMainBets(){
        let returnBody = [];
        let count = 0;
        for(let key in this.state.template.bets){
            let bet = this.state.template.bets[key];

            let position = count == 0 ? 0 : count == 1 ? 2 : 1;

            returnBody[position] = <div className={`value_wrapp ${bet.Id}-in_play`} key={`table-total-participant-${bet.Id}`} id={` ${bet.Id}-in_play`} onClick={() => this.props.addToBetSlip({
                id: this.state.eventId,
                sportId: this.state.typeSport,
                marketName: this.state.typeMarket,
                marketId: this.state.currentMarketId,
                participants: this.state.participants,
                alias: this.state.market.alias,
                min: min,
                max: max,
                combineMin: combineMin,
                combineMax: combineMax,
                typeMarketBet: this.state.typeMarket
            }, bet, bet.oldName)}>

                { this.state.market.Id == 59 && count === 1 ?
                    <span className="participant_name">No {this.state.market.Name}</span>
                :
                    <span className="participant_name"></span>
                }
                <span className="participant_odds yellow_text">{(bet.Status == 2 || bet.Status == 3) ? "" : bet.Price}</span>
            </div>;


                count++


        }

        return returnBody; }

    render(){


        let { market: { limits:{min=null, max=null} = {}, systemLimit:{min:combineMin=null, max:combineMax=null}={}  } = {} } = this.state
        let tempBody = [];

        let needTwoColumns = false;
        //if(this.state.currentMarketId == 56) {
            Object.keys(this.state.template.bets).map((key, index) => {
                let bet = this.state.template.bets[key];
                if (key == 'No Goal' && (bet.Price < 1 || bet.Price == '')) {
                    needTwoColumns = true;
                }
            });
        //}

        Object.keys(this.state.template.bets).map((key, index) => {
            let bet = this.state.template.bets[key];

            if(! needTwoColumns || key != 'No Goal') {
                tempBody.push(
                    <div key={index} className={`Participant grid${needTwoColumns ? 2 : 3}`} id={`${bet.Id}-in_play`}
                         onClick={() => this.props.addToBetSlip(
                             {
                                 id: this.state.eventId,
                                 sportId: this.state.typeSport,
                                 marketName: this.state.typeMarket,
                                 marketId: this.state.currentMarketId,
                                 participants: this.state.participants,
                                 typeMarketBet: this.state.typeMarket,
                                 min: min,
                                 max: max,
                                 combineMin: combineMin,
                                 combineMax: combineMax,
                                 alias: this.state.market.alias,
                             }, bet, bet.oldName)}>
                        <span
                            className="participant_name mobile_hide">{bet.Status == 3 || this.state.blockNameOdd ? "" : bet.Name}</span>
                        <span
                            className="participant_odds yellow_text">{(bet.Status == 2 || bet.Status == 3) ? "" : bet.Price}</span>
                    </div>);
            }
        });

        let returnBody =  <div className="Market_table">{tempBody}</div>;

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
                        {returnBody}
                    </div>
                </div>
                {
                    this.state.hideMarketGroupButton ? '' :
                        <div className="MarketGroup_FavouriteButton "></div>
                }
            </div>;
        }

        /** ПОКА ЧТО НЕ ПОДКЛЮЧЕНО/НЕ ИСПОЛЬЗУЕТСЯ НА МОБ !! **/

        if (this.state.fromPage == "all" || this.state.fromPage == "home" || this.state.fromPage == "prematch") {
            return returnBody;
        }
        // if (this.state.fromPage == "prematch") {
        //     let tempBodyTwoColumns = [];
        //     Object.keys(this.state.template.bets).map((key, index) => {
        //         let bet = this.state.template.bets[key];
        //         tempBodyTwoColumns.push(
        //             <div key={index} className="Participant grid2" id={`${bet.Id}-in_play`} onClick={() => this.props.addToBetSlip(
        //                 {
        //                     id: this.state.eventId,
        //                     sportId: this.state.typeSport,
        //                     marketName: this.state.typeMarket,
        //                     marketId: this.state.currentMarketId,
        //                     participants: this.state.participants,
        //                     typeMarketBet: this.state.typeMarket,
        //                     alias: this.state.market.alias,
        //                 }, bet, bet.oldName)}>
        //                 <span className="participant_name mobile_hide">{bet.Status == 3 || this.state.blockNameOdd? "" : bet.Name}</span>
        //                 <span className="participant_odds yellow_text">{(bet.Status == 2 || bet.Status == 3)? "" : bet.Price}</span>
        //             </div>);
        //
        //     });
        // }


        /** А ТУТ НАДО ИЗБАВИТСЯ ОТ home, away, draw И СФОРМИРОВАТЬ КАК returnBody ЧЕРЕЗ Object.keys().map **/

        if (this.state.fromPage == "main") {

            return <div className="column сolumnW33">
                {this.renderMainBets()}
                </div>
        }


        // if (this.state.fromPage == "main") {
        //
        //     return <div className="column">
        //         {
        //             Object.keys(this.state.template.bets).map((key, index) => {
        //
        //                 let bet = this.state.template.bets[key];
        //                 return  <div className="value_wrapp" key={index} id={` ${bet.Id}-in_play`} onClick={() => this.props.addToBetSlip(
        //                     {
        //                         id: this.state.eventId,
        //                         sportId: this.state.typeSport,
        //                         marketName: this.state.typeMarket,
        //                         marketId: this.state.currentMarketId,
        //                         participants: this.state.participants,
        //                         typeMarketBet: this.state.typeMarket,
        //                         alias: this.state.market.alias
        //                     }, bet, bet.oldName)}>
        //                     <span className="participant_name"></span>
        //                     <span className="participant_odds yellow_text">{(bet.Status == 2 || bet.Status == 3) ? "" : bet.Price}</span>
        //                 </div>
        //
        //             })
        //         }
        //
        //             {/*<div className="value_wrapp" id={`${typeof home != "undefined" ? home.Id : ""}-in_play`} onClick={() => this.props.addToBetSlip({id: this.state.eventId, sportId: this.state.typeSport, marketName: this.state.typeMarket, marketId: this.state.currentMarketId, participants: this.state.participants, typeMarketBet: "1X2"}, home, 1)}>*/}
        //                 {/*<span className="participant_name"></span>*/}
        //                 {/*<span className="participant_odds yellow_text">{typeof home != "undefined" ? home.Price : ""}</span>*/}
        //             {/*</div>*/}
        //             {/*<div className="value_wrapp" id={`${typeof away != "undefined" ? away.Id : ""}-in_play`} onClick={() => this.props.addToBetSlip({id: this.state.eventId, sportId: this.state.typeSport, marketName: this.state.typeMarket, marketId: this.state.currentMarketId, participants: this.state.participants, typeMarketBet: "1X2"}, away, 2)}>*/}
        //                 {/*<span className="participant_name"></span>*/}
        //                 {/*<span className="participant_odds yellow_text">{typeof away != "undefined" ? away.Price : ""}</span>*/}
        //             {/*</div>*/}
        //             {/*<div className="value_wrapp" id={`${typeof draw != "undefined" ? draw.Id : ""}-in_play`} onClick={() => this.props.addToBetSlip({id: this.state.eventId, sportId: this.state.typeSport, marketName: this.state.typeMarket, marketId: this.state.currentMarketId, participants: this.state.participants, typeMarketBet: "1X2"}, draw, "X")}>*/}
        //                 {/*<span className="participant_name"></span>*/}
        //                 {/*<span className="participant_odds yellow_text">{typeof draw != "undefined" ? draw.Price : ""}</span>*/}
        //             {/*</div>*/}
        //         </div>
        // }

        if (this.state.fromPage == "leftSidebar") {
           return  Object.keys(this.state.template.bets).map((key, index) => {
                let bet = this.state.template.bets[key];
                return   <div key={`${index}-game-group-render-participant-1`} className="market_render">
                    <div className={`participant_abbreviated ${bet.Id}-in_play`}  onClick={() => this.props.addToBetSlip({
                        id: this.state.eventId,
                        sportId: this.state.typeSport,
                        marketName: this.state.typeMarket,
                        participants: this.state.participants,
                        typeMarketBet:  this.state.typeMarket,
                        marketId: this.state.currentMarketId,
                        min: min,
                        max: max,
                        combineMin: combineMin,
                        combineMax: combineMax,
                        alias: this.state.market.alias,
                    }, bet, bet.oldName)}>
                        <span className="participant_abbreviated_name">{(bet.Status == 3 || this.state.blockNameOdd)? "" : bet.oldName}</span>
                        <span className="participant_abbreviated_odds yellow_text">{(bet.Status == 2 || bet.Status == 3)? "" : bet.Price}</span>
                    </div>
                </div>
            })


            }

        if (this.state.fromPage == "rightColumn") {
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
                                    participants: this.state.participants,
                                    typeMarketBet: this.state.typeMarket,
                                    alias: this.state.market.alias,
                                    min: min,
                                    max: max,
                                    combineMin: combineMin,
                                    combineMax: combineMax,
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

        }

            if (this.state.fromPage == "highlights") {
              //  console.log("WWWWWWWWWWWWWW", this.state)
               return <div className="highlights_data">
                   {
                       Object.keys(this.state.template.bets).map((key, index) => {
                           let bet = this.state.template.bets[key];
                          // console.log("JJJJJJJJJJJJJJJJJ", this.state)
                           return <div className="value_column" key={`table-total-participant-${bet.Id}-${index}`}>
                               <div className={`ParticipantOdds yellow_text ${bet.Id}-in_play`} id={`${bet.Id}-in_play`}
                                    onClick={() => this.props.addToBetSlip({
                                        id: this.state.eventId,
                                        sportId: this.state.typeSport,
                                        marketName: this.state.typeMarket,
                                        marketId: this.state.currentMarketId,
                                        participants: this.state.participants,
                                        min: min,
                                        max: max,
                                        combineMin: combineMin,
                                        combineMax: combineMax,
                                        alias: this.state.market.alias,
                                        typeMarketBet: this.state.typeMarket
                                    }, bet, bet.oldName)}>{(bet.Status == 2 || bet.Status == 3)? "" : bet.Price}</div>
                           </div>
                       })
                   }
                    <div className="value_column" onClick={() => this.selectEvent(this.state.eventId)}>
                        <div className="ParticipantLink">{this.state.marketsCount}</div>
                    </div>
                </div>

            } else {
                return "";
            }
    }
}

export default ThreeColumns;