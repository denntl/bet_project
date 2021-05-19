import React from 'react';
import moment from "moment/moment";
import FootballTime from "../../helpers/match_time/footballTime";
import {cashoutBet} from "../../helpers/data_account";
import {getEventBySports} from "../../helpers/proccess_data";

class Cash_out extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginToken: this.props.loginToken,
            cash_out: this.props.cash_out,
            combineName: this.props.combineName,
            count: this.props.count,
            setIntervalCount: 0,
            allEvents: [],
            cashOutValue: {}
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            loginToken: nextProps.loginToken,
            cash_out: nextProps.cash_out,
            combineName: nextProps.combineName,
            count: nextProps.count,
            allEvents: nextProps.allEvents,
        })
    }
    componentDidMount(){

        this.interval = setInterval(() => {
            this.setState({setIntervalCount: this.state.setIntervalCount + 1})
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    cashoutBetClick =(isMultiple, betId)=>{
        $(`.button_cash_out-` + betId).removeClass("active");
        $(`.button_cash_out-` + betId).addClass("loading");

        cashoutBet(isMultiple, betId, this.state.loginToken, (err, data)=> {
            if (!err) {
                $(`.button_cash_out-` + betId).removeClass("loading");
                $(`.button_cash_out-` + betId).addClass("success");
                this.props.setUnsettledBets(data.unsettled_count);
                this.props.setBalance();

                let cashOutValueBetId = this.state.cashOutValue;
                cashOutValueBetId["button"+betId] = data.cashout_amount;//set key "button"+betId: val data.cashout_amount
                this.setState({cashOutValue: cashOutValueBetId});//setState cashOutValueBetId

                setTimeout(() => {
                    //$(`.my_bets_table-` + betId).remove();
                    this.props.removeBetFromState('cash_out', betId);
                }, 5000);
            } else {

                //console.log('cashoutBetClick 2', err);

                setTimeout(() => {
                     //$(`.my_bets_table-` + betId).remove();
                    this.props.removeBetFromState('cash_out', betId);
                }, 5000);

                /** надо обработать ошибку и как-то вывести, а не убрать лоадер и показать успех как ниже **/
                $(`.button_cash_out-` + betId).removeClass("loading");
                $(`.button_cash_out-` + betId).addClass("success");
            }
        })
    };
    render() {
        return(
            <div>
                {
                    this.state.cash_out && this.state.cash_out.length ?
                        <div className="bet_info with_tables">
                            {
                                this.state.cash_out.map((bet, ind) => {
                                    if (typeof bet.bets != "undefined") {
                                        return <div className={`my_bets_table settled ${'my_bets_table-' + bet.id}`}
                                                    key={ind}>
                                            <div className={`my_bets_table_header hd-${bet.id}`}
                                                 onClick={() => this.props.toggleHistoryLine(bet.id)}>
                                                <div
                                                    className="item_header">{bet.total_stake} {this.state.combineName[bet.multiple_type]}</div>

                                                <div className="item_betStateContainer">
                                                    <span className="item_betState_label edit_bet">Edit Bet</span>

                                                </div>
                                            </div>
                                            <div className={`OpenBetItem_details id-${bet.id}`}>
                                                <div className="OpenBetItem_ParticipantContainer my_bets">
                                                    {
                                                        bet.bets.map((val, index) => {
                                                             //console.log('KKKKKKKKKKKKKK', val)
                                                            return <div className="OpenBetItem_Participant" key={index}>
                                                                <div className="OpenBetItem_wrapp">
                                                                    <div className="OpenBetItem_Participant_header">
                                                                        <span
                                                                            className={`OpenBetItem_Participant_icon`}></span>
                                                                        <span className="OpenBetItem_Participant_text"> {
                                                                            val.bet_description == 1 || val.bet_description == 2 ?
                                                                                val.participants.map((team) => {
                                                                                    if (val.bet_description == team.position) {
                                                                                        return team.name
                                                                                    }
                                                                                })
                                                                                : val.bet_description == "X" ? "Draw" : val.bet_description
                                                                        }
                                                                            <span
                                                                                className="OpenBetItem_Participant_line">
                                                                    {val.line == null ||
                                                                    val.line === "underfined" ||
                                                                    val.line == "" ?
                                                                        "" : val.line}
                                                                </span>
                                                                </span>
                                                                        <span
                                                                            className="OpenBetItem_Participant_odds">{val.rate}</span>
                                                                        <div
                                                                            className={`BetScore_Goal ${val.id}-goal-icon`}>GOAL
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="OpenBetItem_ParticipantMarket">{val.market_description}</div>
                                                                </div>
                                                                <div className="OpenBetItem_Participant_Fixture">
                                                                    <div
                                                                        className="OpenBetItem_Participant_Fixture_description my_bets">
                                                                        <span
                                                                            className="my_bet_participants">{val.participants[0].name} vs {val.participants[1].name}</span>
                                                                        {
                                                                            (bet.status == 'won' || bet.status == 'lost') ? '' :
                                                                                <span
                                                                                    className="BetScore">{val.score != null && Object.keys(val.score).length ? val.score[0].value + '-' + val.score[1].value : ''}</span>
                                                                        }
                                                                        <span className="match_time">
                                                                            {moment(moment.utc(val.event_date)).local().format("ddd DD MMM HH:mm")}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        })

                                                    }


                                                </div>
                                                <div className="stakeToReturnContainer my_bets">
                                                    <div className="UnitStake my_bets">
                                                        <div className="unitStake_Title my_bets">Stake</div>
                                                        <div className="unitStake_Content my_bets">
                                                            {bet.total_stake}
                                                            <span className="currency">EUR</span>
                                                        </div>
                                                    </div>
                                                    <div className="toReturnWin my_bets">
                                                        <div className="toReturnWin_Title my_bets">To Return</div>
                                                        {/*<div className="toReturnWin_Content my_bets">{bet.status == "won" ? bet.to_return : "0.00"}*/}
                                                        <div className="toReturnWin_Content my_bets">{bet.to_return}
                                                            <span
                                                                className="currency">EUR</span></div>
                                                    </div>
                                                    <div className="CloseBetButton"
                                                         onClick={() => this.cashoutBetClick(true, bet.id)}>
                                                        <div className="CloseBetButton_wrapp">
                                                            <div
                                                                className={`button_cash_out my_bets active ${`button_cash_out-` + bet.id}`}>
                                                                <span className="button_cash_text">Cash out</span>
                                                                {this.state.cashOutValue["button" + bet.id] ?
                                                                    <span
                                                                        className="cash">{this.state.cashOutValue["button" + bet.id]}
                                                                        <span className="currency">EUR</span> </span>
                                                                    : <span style={{
                                                                        color: "#116b4f",
                                                                        fontSize: '12px'
                                                                    }}>{bet.amount_to_cashout} EUR</span>
                                                                }
                                                            </div>
                                                            {/*<div className="button_cash_out no_active">*/}
                                                            {/*<span className="button_cash_text">Cash Out Unavaliable</span>*/}
                                                            {/*</div>*/}
                                                            {/*<div className="autoCashOut"></div>*/}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    } else {
                                        return <div className={`my_bets_table settled ${'my_bets_table-' + bet.id}`}
                                                    key={ind}>
                                            <div className={`my_bets_table_header hd-${bet.id}`}
                                                 onClick={() => this.props.toggleHistoryLine(bet.id)}>
                                                <div className="item_header">{bet.stake} Single</div>
                                                <div className="item_betStateContainer">
                                                    <span className="item_betState_label edit_bet">Edit Bet</span>

                                                </div>
                                            </div>
                                            <div className={`OpenBetItem_details id-${bet.id}`}>
                                                <div className="OpenBetItem_ParticipantContainer my_bets">
                                                    <div className="OpenBetItem_Participant">
                                                        <div className="OpenBetItem_wrapp">
                                                            <div className="OpenBetItem_Participant_header">
                                                                <span className={`OpenBetItem_Participant_icon`}></span>
                                                                <span className="OpenBetItem_Participant_text"> {
                                                                    bet.bet_description == 1 || bet.bet_description == 2 ?
                                                                        bet.participants.map((team) => {
                                                                            if (bet.bet_description == team.position) {
                                                                                return team.name
                                                                            }
                                                                        })
                                                                        : bet.bet_description == "X" ? "Draw" : bet.bet_description
                                                                }
                                                                    <span className="OpenBetItem_Participant_line">
                                                                {bet.line == null ||
                                                                bet.line === "underfined" ||
                                                                bet.line == "" ?
                                                                    "" : bet.line}
                                                            </span>
                                                        </span>
                                                                <span
                                                                    className="OpenBetItem_Participant_odds">{bet.rate}</span>
                                                                <div
                                                                    className={`BetScore_Goal ${bet.id}-goal-icon`}>GOAL
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="OpenBetItem_ParticipantMarket">{bet.market_description}</div>
                                                        </div>
                                                        <div className="OpenBetItem_Participant_Fixture">
                                                            <div
                                                                className="OpenBetItem_Participant_Fixture_description my_bets">
                                                                <span className="my_bet_participants">{bet.event}</span>
                                                                {
                                                                    (bet.status == 'won' || bet.status == 'lost') ? '' :
                                                                        <span className="BetScore">
                                                            {bet.score != null && Object.keys(bet.score).length ? bet.score[0].value + '-' + bet.score[1].value : ''}
                                                        </span>
                                                                }
                                                                {getEventBySports(this.state.allEvents, bet.fixture_id, bet.sport_id) == null ?
                                                                    <span className="match_time">
                                                                        {moment(moment.utc(bet.event_date)).local().format("ddd DD MMM HH:mm")}
                                                                    </span> :
                                                                    <FootballTime
                                                                        event={getEventBySports(this.state.allEvents, bet.fixture_id, bet.sport_id)}
                                                                        setIntervalCount={this.state.setIntervalCount}
                                                                        eventStartDate={bet.event_date}
                                                                        serverTimestamp={bet.server_timestamp}
                                                                    />}
                                                            </div>


                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="stakeToReturnContainer my_bets">
                                                    <div className="UnitStake my_bets">
                                                        <div className="unitStake_Title my_bets">Stake</div>
                                                        <div className="unitStake_Content my_bets">{bet.stake} <span
                                                            className="currency">EUR</span></div>
                                                    </div>
                                                    <div className="toReturnWin my_bets">
                                                        <div className="toReturnWin_Title my_bets">To Return</div>
                                                        {/*<div className="toReturnWin_Content my_bets">{bet.status == "won" ? bet.to_return : "0.00"}*/}
                                                        <div className="toReturnWin_Content my_bets">{bet.to_return}
                                                            <span
                                                                className="currency">EUR</span></div>
                                                    </div>
                                                    <div className="CloseBetButton"
                                                         onClick={() => this.cashoutBetClick(false, bet.id)}>
                                                        <div className="CloseBetButton_wrapp">
                                                            <div
                                                                className={`button_cash_out my_bets active ${"button_cash_out-" + bet.id}`}>{/*active loading success*/}
                                                                <span className="button_cash_text">Cash out</span>
                                                                {this.state.cashOutValue["button" + bet.id] ?
                                                                    <span
                                                                        className="cash">{this.state.cashOutValue["button" + bet.id]}
                                                                        <span className="currency">EUR</span> </span>
                                                                    : <span style={{
                                                                        color: "#116b4f",
                                                                        fontSize: '12px'
                                                                    }}>{bet.amount_to_cashout} EUR</span>
                                                                }
                                                            </div>
                                                            {/*<div className="button_cash_out no_active">*/}
                                                            {/*<span className="button_cash_text">Cash Out Unavaliable</span>*/}
                                                            {/*</div>*/}
                                                            {/*<div className="autoCashOut"></div>*/}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }

                                })
                            }
                            {
                                this.state.count > this.state.cash_out.length ?
                                    <div className="ShowMoreBetsButton" onClick={() => this.props.showMore()}><span>Show More Bets</span></div>
                                    :""
                            }
                        </div>
                    :
                        <div className="EmptyMsg my_bets">You have no bets available for Cash Out
                            <p className="emptymsg_linetwo">Bets that can be fully or partially cashed out appear here</p>
                        </div>
                }
            </div>
        )

    }
}

export default Cash_out;
