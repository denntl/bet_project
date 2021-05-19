import React from 'react';



class Settled extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bets: this.props.bets,
            combineName: this.props.combineName,
            count: this.props.count

        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            bets: nextProps.bets,
            combineName: nextProps.combineName,
            count: nextProps.count


        })
    }

    render() {
        return(
            <div>

                {
                    this.state.bets && this.state.bets.length ?

                        <div className="my_bet_items_container">
                            <div className="cash_out" style={{display: 'none'}}>
                                <div className="cash_out_header">
                                    <div className="cash_out_header_text">
                                        Auto Cash Out
                                    </div>
                                    <div className="cash_out_header_icon">
                                        New
                                    </div>
                                </div>
                                <div className="cash_out_body">
                                    <div className="cash_out_body_text">
                                        <p>Set a rule to auto cash out your bet.</p>
                                        <p>It even works when logged out.</p>
                                        <div className="cash_out_link">Okay, got it</div>
                                    </div>
                                    <div className="cash_out_body_icon"/>
                                </div>

                            </div>
                            {

                                this.state.bets.map((bet, ind) => {
                                    if (typeof bet.bets != "undefined") {
                                        return  <div className="settled_tab" key={ind}>


                                            <div className="OpenBetItem">
                                                <div className={`OpenBetItem_header hd-${bet.id}`} onClick={() => this.props.toggleHistoryLine(bet.id)}>
                                                    <div className="name_container">
                                                        <span className="OpenBetItem_BetStake">{bet.total_stake}</span>
                                                        <span className="OpenBetItem_name">{this.state.combineName[bet.multiple_type]}</span>

                                                    </div>
                                                    <span className="OpenBetItem_subname" style={{display: 'none'}}>Malaysia U21 , Persija Jakarta </span>
                                                    <div className="return_container">
                                                        <div className="can_return show">
                                                            <span className="return_label">{bet.cashed_amount != null ? <span>Cashed Out <span className="item_betState_label return">{bet.cashed_amount}</span></span> : bet.status == "won" ? "Returned" : bet.status == "lost" ? "Lost" : ''}</span>
                                                            {
                                                                bet.status == "won" ?
                                                                    <span className="return_cash">{bet.to_return}</span>
                                                                    : ""
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="message_sub_header" style={{display: 'none'}}>Edit Bet is no longer available
                                                </div>
                                                <div className={`OpenBetItem_details id-${bet.id}`}>



                                                    {
                                                        bet.bets.map((val, index) => {
                                                            return  <div className="OpenBetItem_ParticipantContainer" key={index}>
                                                                <div className="OpenBetItem_Participant">
                                                                    <div className="OpenBetItem_Participant_header">
                                                                        <span className={`OpenBetItem_Participant_icon ${index === 0 ? bet.status == "won" ? "status1" : bet.status == "lost" ? "status2" : "status3" : "status3" }`}/> {/* class status0 status1 status2*/}
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
                                                                        <span
                                                                            className="OpenBetItem_Participant_odds">{val.rate}</span>
                                                                    </div>
                                                                    <div className="OpenBetItem_ParticipantMarket">{ val.market_description }
                                                                    </div>
                                                                    <div className="OpenBetItem_Participant_Fixture">
                                                                        <div className="OpenBetItem_Participant_Fixture_description">
                                                                            {val.event}
                                                                        </div>
                                                                        <div className="BetScores_wrapp" style={{display: 'none'}}>
                                                                            <div className="BetScore">0-0</div>
                                                                            <div className="BetScore_Goal">Goal</div>
                                                                            {/*class show*/}
                                                                            <div className="BetScore_Time">09:37</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        })
                                                    }






                                                    <div className="stakeToReturnContainer">
                                                        <div className="UnitStake">
                                                            <div className="unitStake_Title">Stake</div>
                                                            <div className="unitStake_Content">{bet.total_stake} <span
                                                                className="currency">EUR</span></div>
                                                        </div>
                                                        <div className="toReturnWin">
                                                            <div className="toReturnWin_Title">To Return</div>
                                                            <div className="toReturnWin_Content">{bet.status == "cashout" ? bet.cashed_amount : bet.to_return}<span
                                                                className="currency">EUR</span></div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    } else {
                                        return  <div className="settled_tab" key={ind}>
                                            <div className="OpenBetItem">
                                                <div className={`OpenBetItem_header hd-${bet.id}`} onClick={() => this.props.toggleHistoryLine(bet.id)}>
                                                    <div className="name_container">
                                                        <span className="OpenBetItem_BetStake">{bet.stake}</span>
                                                        <span className="OpenBetItem_name">Single</span>

                                                    </div>
                                                    <span className="OpenBetItem_subname" style={{display: 'none'}}>{
                                                        bet.bet_description == 1 || bet.bet_description == 2 ?
                                                            bet.participants.map((team) => {
                                                                if (bet.bet_description == team.position) {
                                                                    return team.name
                                                                }
                                                            })
                                                            : bet.bet_description == "X" ? "Draw" :  bet.bet_description
                                                    } </span>
                                                    <div className="return_container">
                                                        <div className="can_return show">
                                                            <span className="return_label">{bet.cashed_amount != null ? <span>Cashed Out <span className="item_betState_label return">{bet.cashed_amount}</span></span> : bet.status == "won" ? "Returned" : bet.status == "lost" ? "Lost" : ''}</span>
                                                            {
                                                                bet.status == "won" ?
                                                                    <span className="return_cash">{bet.to_return}</span>
                                                                    : ""
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="message_sub_header" style={{display: 'none'}}>Edit Bet is no longer available
                                                </div>
                                                <div className={`OpenBetItem_details id-${bet.id}`}>




                                                    <div className="OpenBetItem_ParticipantContainer">
                                                        <div className="OpenBetItem_Participant">
                                                            <div className="OpenBetItem_Participant_header">
                                                                <span className={`OpenBetItem_Participant_icon ${bet.status == "won" ? "status1" : bet.status == "lost" ? "status2" : ''}`}/> {/* class status0 status1 status2*/}
                                                                <span className="OpenBetItem_Participant_text">{
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
                                                                <span
                                                                    className="OpenBetItem_Participant_odds">{bet.rate}</span>
                                                            </div>
                                                            <div className="OpenBetItem_ParticipantMarket">{bet.market_description }
                                                            </div>
                                                            <div className="OpenBetItem_Participant_Fixture">
                                                                <div className="OpenBetItem_Participant_Fixture_description">
                                                                    {bet.event}
                                                                </div>
                                                                <div className="BetScores_wrapp" style={{display: 'none'}}>
                                                                    <div className="BetScore">0-0</div>
                                                                    <div className="BetScore_Goal">Goal</div>
                                                                    {/*class show*/}
                                                                    <div className="BetScore_Time">09:37</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="stakeToReturnContainer">
                                                        <div className="UnitStake">
                                                            <div className="unitStake_Title">Stake</div>
                                                            <div className="unitStake_Content">{bet.stake} <span
                                                                className="currency">EUR</span></div>
                                                        </div>
                                                        <div className="toReturnWin">
                                                            <div className="toReturnWin_Title">To Return</div>
                                                            <div className="toReturnWin_Content">{bet.status == "cashout" ? bet.cashed_amount : bet.to_return}<span
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
                                this.state.count > this.state.bets.length ?
                                    <div className="ShowMoreBetsButton" onClick={() => this.props.showMore()}><span>Show More Bets</span></div>
                                    :""
                            }
                            <div className="ViewOlderBetsButton" onClick={() => this.props.showPopUpHistory()}><span>View older bets</span></div>
                        </div>
                        :
                        <div className="EmptyMsg_container">
                            <div className="EmptyMsg">There are no Settled bets
                                <p className="emptymsg_linetwo">Settled bets appear here for 24
                                    hours</p>
                            </div>
                            <div className="ViewOlderBetsButton empty" onClick={() => this.props.showPopUpHistory()}><span>View older bets</span>
                        </div>
                    </div>
                }

            </div>

        )

    }
}

export default Settled;
