import React from 'react';
import {getEventBySports} from "../../helpers/proccess_data";


class Settled extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            settled_bets: this.props.settled_bets,
            combineName: this.props.combineName,
            count: this.props.count
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            settled_bets: nextProps.settled_bets,
            combineName: nextProps.combineName,
            count: nextProps.count

        })
    }

    render() {
        // console.log("test", this.state)
        return(
            <div className="tab_details">
                {
                    this.state.settled_bets && this.state.settled_bets.length ?


                        <div className="bet_info with_tables">
                            {
                                this.state.settled_bets.map((bet, ind) => {
                                    console.log("settled_bets",bet)
                                    if (typeof bet.bets != "undefined") {
                                        return   <div className="my_bets_table settled" key={ind}>
                                            <div className={`my_bets_table_header hd-${bet.id}`} onClick={() => this.props.toggleHistoryLine(bet.id)}>
                                                <div className="item_header">{bet.total_stake} {this.state.combineName[bet.multiple_type]}</div>
                                                <div className="item_betStateContainer">
                                                    <span className="item_betState_label">{
                                                        bet.cashed_amount != null ?
                                                            <span>Cashed Out <span className="item_betState_label return">{bet.cashed_amount}</span></span> :
                                                                bet.status == "won" ? "Returned" :
                                                                    bet.status == "lost" ? "Lost" : ''}
                                                                </span>
                                                    {
                                                        bet.status == "won" ?
                                                            <span className="item_betState_label return">{bet.to_return}</span>
                                                            : ""
                                                    }
                                                </div>
                                            </div>
                                            <div className={`OpenBetItem_details id-${bet.id}`}>
                                                <div className="OpenBetItem_ParticipantContainer my_bets">
                                                    {
                                                        bet.bets.map((val, index) => {
                                                            return  <div className="OpenBetItem_Participant" key={index}>
                                                                        <div className="OpenBetItem_wrapp">
                                                                            <div className="OpenBetItem_Participant_header">
                                                                                <span className={`OpenBetItem_Participant_icon ${index === 0 ? bet.status == "won" ? "status1" : bet.status == "lost" ? "status2" : "status3" : "status3" }`}></span>
                                                                                <span className="OpenBetItem_Participant_text"> {
                                                                                    val.bet_description == 1 || val.bet_description == 2 ?
                                                                                        val.participants.map((team) => {
                                                                                            if (val.bet_description == team.position) {
                                                                                                return team.name
                                                                                            }
                                                                                        })
                                                                                        : val.bet_description == "X" ? "Draw" :  val.bet_description
                                                                                    }
                                                                                    <span className="OpenBetItem_Participant_line">
                                                                                        {val.line == null ||
                                                                                        val.line === "underfined" ||
                                                                                        val.line == ""?
                                                                                            "" :  val.line}
                                                                                    </span>
                                                                                </span>
                                                                                <span className="OpenBetItem_Participant_odds">{val.rate}</span>
                                                                            </div>
                                                                            <div className="OpenBetItem_ParticipantMarket">{ val.market_description }</div>
                                                                        </div>
                                                                        <div className="OpenBetItem_Participant_Fixture">
                                                                    <div className="OpenBetItem_Participant_Fixture_description my_bets"> <span className="my_bet_participants">{val.participants[0].name} vs {val.participants[1].name}</span> </div>
                                                                </div>
                                                            </div>
                                                        })
                                                    }


                                                </div>
                                                <div className="stakeToReturnContainer my_bets">
                                                    <div className="UnitStake my_bets">
                                                        <div className="unitStake_Title my_bets">Stake</div>
                                                        <div className="unitStake_Content my_bets">{bet.total_stake} <span
                                                            className="currency">EUR</span></div>
                                                    </div>
                                                    <div className="toReturnWin my_bets">
                                                        <div className="toReturnWin_Title my_bets">To Return</div>
                                                        <div className="toReturnWin_Content my_bets">{bet.status == "cashout" ? bet.cashed_amount : bet.to_return} <span
                                                            className="currency">EUR</span></div>
                                                    </div>
                                                    <div className="CloseBetButton opacity_btn">
                                                        <div className="CloseBetButton_wrapp">
                                                            <div className="button_cash_out my_bets active"><span
                                                                className="button_cash_text">Cash out</span><span
                                                                className="cash">0.11</span><span
                                                                className="currency">EUR</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    } else {
                                        return   <div className="my_bets_table settled" key={ind}>
                                            <div className={`my_bets_table_header hd-${bet.id}`} onClick={() => this.props.toggleHistoryLine(bet.id)}>
                                                <div className="item_header">{bet.stake} Single</div>
                                                <div className="item_betStateContainer">
                                                    <span className="item_betState_label">{bet.cashed_amount != null ? <span>Cashed Out <span className="item_betState_label return">{bet.cashed_amount}</span></span> : bet.status == "won" ? "Returned" : bet.status == "lost" ? "Lost" : ''}</span>
                                                    {
                                                        bet.status == "won" ?
                                                            <span className="item_betState_label return">{bet.to_return}</span>
                                                            : ""
                                                    }
                                                </div>
                                            </div>
                                            <div className={`OpenBetItem_details id-${bet.id}`}>
                                                <div className="OpenBetItem_ParticipantContainer my_bets">
                                                    <div className="OpenBetItem_Participant">
                                                        <div className="OpenBetItem_wrapp">
                                                        <div className="OpenBetItem_Participant_header">
                                                            <span className={`OpenBetItem_Participant_icon ${bet.status == "won" ? "status1" : bet.status == "lost" ? "status2" : ''}`}></span>
                                                            <span className="OpenBetItem_Participant_text"> {
                                                                bet.bet_description == 1 || bet.bet_description == 2 ?
                                                                    bet.participants.map((team) => {
                                                                        if (bet.bet_description == team.position) {
                                                                            return team.name
                                                                        }
                                                                    })
                                                                    : bet.bet_description == "X" ? "Draw" :  bet.bet_description
                                                                }
                                                                <span className="OpenBetItem_Participant_line">
                                                                    {bet.line == null ||
                                                                     bet.line === "underfined" ||
                                                                     bet.line == ""?
                                                                        "" :  bet.line}
                                                                </span>
                                                            </span>
                                                            <span className="OpenBetItem_Participant_odds">{bet.rate}</span>
                                                        </div>
                                                        <div className="OpenBetItem_ParticipantMarket">{ bet.market_description }</div>
                                                        </div>
                                                            <div className="OpenBetItem_Participant_Fixture">
                                                            <div className="OpenBetItem_Participant_Fixture_description my_bets"> <span className="my_bet_participants">{bet.event}</span> </div>
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
                                                        <div className="toReturnWin_Title my_bets">Return</div>
                                                        <div className="toReturnWin_Content my_bets">{bet.status == "cashout" ? bet.cashed_amount: bet.to_return} <span
                                                            className="currency">EUR</span></div>
                                                    </div>
                                                    <div className="CloseBetButton opacity_btn">
                                                        <div className="CloseBetButton_wrapp">
                                                            <div className="button_cash_out my_bets active"><span
                                                                className="button_cash_text">Cash out</span><span
                                                                className="cash">0.11</span><span
                                                                className="currency">EUR</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }

                                })
                            }
                            {
                                this.state.count > this.state.settled_bets.length ?
                                    <div className="ShowMoreBetsButton" onClick={() => this.props.showMore()}><span>Show More Bets</span></div>
                                    : ""
                            }
                            <p className="bet_info_text view_older_bets under_table" onClick={() => this.props.showPopUpHistory()}>View older bets</p>

                        </div>
                     :
                        <div className="EmptyMsg my_bets">There are no Settled bets
                            <p className="emptymsg_linetwo">Settled bets appear here for 24 hours</p>
                            <p className="bet_info_text view_older_bets" onClick={() => this.props.showPopUpHistory()}>View older bets</p>
                        </div>
                }

            </div>
        )

    }
}

export default Settled;
