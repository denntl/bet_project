import React from 'react';
import moment from "moment/moment";
import {getEventBySports} from "../../helpers/proccess_data";
import FootballTime from "../../helpers/match_time/footballTime";


class Live extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            live_bets: this.props.live_bets,
            combineName: this.props.combineName,
            count: this.props.count,
            allEvents: [],
            setIntervalCount: 0,
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            live_bets: nextProps.live_bets,
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

    render() {
        return(
            <div className="tab_details">
                {
                    this.state.live_bets && this.state.live_bets.length ?
                        <div>
                        {/*<div className="bet_info with_tables">*/}
                            {/*<div className="my_bets_table settled">*/}
                                {/*<div className="my_bets_table_header">*/}
                                    {/*<div className="item_header">1.00 Single</div>*/}
                                    {/*<div className="item_betStateContainer">*/}
                                        {/*<span className="item_betState_label edit_bet">Edit Bet</span>*/}

                                    {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className="OpenBetItem_details">*/}
                                    {/*<div className="OpenBetItem_ParticipantContainer">*/}
                                        {/*<div className="OpenBetItem_Participant">*/}
                                            {/*<div className="OpenBetItem_Participant_header">*/}
                                                {/*<span className="OpenBetItem_Participant_icon status8"></span>*/}
                                                {/*<span className="OpenBetItem_Participant_text">Young Challengers</span>*/}
                                                {/*<span className="OpenBetItem_Participant_odds">2.70</span>*/}
                                            {/*</div>*/}
                                            {/*<div className="OpenBetItem_ParticipantMarket">Fulltime Result</div>*/}
                                            {/*<div className="OpenBetItem_Participant_Fixture">*/}
                                                {/*<div className="OpenBetItem_Participant_Fixture_description"> Young Challengers v Postal Department </div>*/}
                                                {/*<div className="BetScores_wrapp">*/}
                                                    {/*<div className="BetScore">0-0</div>*/}
                                                    {/*<div className="BetScore_Goal">Goal</div> /!*class show*!/*/}
                                                    {/*<div className="BetScore_Time">09:37</div>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*<div className="stakeToReturnContainer my_bets">*/}
                                        {/*<div className="UnitStake my_bets">*/}
                                            {/*<div className="unitStake_Title my_bets">Stake</div>*/}
                                            {/*<div className="unitStake_Content my_bets">0.10 <span*/}
                                                {/*className="currency">EUR</span></div>*/}
                                        {/*</div>*/}
                                        {/*<div className="toReturnWin my_bets">*/}
                                            {/*<div className="toReturnWin_Title my_bets">To Return</div>*/}
                                            {/*<div className="toReturnWin_Content my_bets">0.28 <span*/}
                                                {/*className="currency">EUR</span></div>*/}
                                        {/*</div>*/}
                                        {/*<div className="CloseBetButton">*/}
                                            {/*<div className="CloseBetButton_wrapp">*/}
                                                {/*<div className="button_cash_out my_bets active">*/}
                                                    {/*<span className="button_cash_text">Cash out</span>*/}
                                                    {/*<span className="cash">0.11</span>*/}
                                                    {/*<span className="currency">EUR</span>*/}
                                                {/*</div>*/}
                                                {/*<div className="button_cash_out no_active">*/}
                                                    {/*<span className="button_cash_text">Cash Out Unavaliable</span>*/}
                                                {/*</div>*/}
                                                {/*<div className="autoCashOut"></div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}


                                {/*</div>*/}
                            {/*</div>*/}


                        {/*</div>*/}
                            <div className="bet_info with_tables">
                                {
                                    this.state.live_bets.map((bet, ind) => {
                                        console.log('KKKKKKKKKKKKKK', bet);
                                        if (typeof bet.bets != "undefined") {
                                            return   <div className="my_bets_table settled" key={ind}>
                                                <div className={`my_bets_table_header hd-${bet.id}`} onClick={() => this.props.toggleHistoryLine(bet.id)}>
                                                    <div className="item_header">{bet.total_stake} {this.state.combineName[bet.multiple_type]}</div>

                                                    <div className="item_betStateContainer">
                                                        <span className="item_betState_label edit_bet">Edit Bet</span>

                                                    </div>
                                                </div>
                                                <div className={`OpenBetItem_details id-${bet.id}`}>
                                                    <div className="OpenBetItem_ParticipantContainer my_bets">
                                                        {
                                                            bet.bets.map((val, index) => {
                                                                return  <div className="OpenBetItem_Participant" key={index}>
                                                                        <div className="OpenBetItem_wrapp">
                                                                            <div className="OpenBetItem_Participant_header">
                                                                                    <span className={`OpenBetItem_Participant_icon`}></span>
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
                                                                                    <div className={`BetScore_Goal ${val.id}-goal-icon`}>GOAL</div>
                                                                                </div>
                                                                            <div className="OpenBetItem_ParticipantMarket">{ val.market_description }</div>
                                                                        </div>
                                                                    <div className="OpenBetItem_Participant_Fixture">
                                                                        <div className="OpenBetItem_Participant_Fixture_description my_bets">
                                                                            <span className="my_bet_participants">{val.participants[0].name} vs {val.participants[1].name}</span>
                                                                            {
                                                                                (bet.status == 'won' || bet.status == 'lost') ? '' :
                                                                                    <span className="BetScore">{val.score != null && Object.keys(val.score).length ? val.score[0].value + '-' + val.score[1].value : ''}</span>
                                                                            }
                                                                            {getEventBySports(this.state.allEvents, bet.fixture_id, bet.sport_id) == null ?
                                                                                <span className="match_time">
                                                                                    {moment(moment.utc(bet.event_date)).local().format("ddd DD MMM HH:mm")}
                                                                                </span> :
                                                                                <FootballTime event = {getEventBySports(this.state.allEvents, bet.fixture_id, bet.sport_id)}
                                                                                              setIntervalCount={this.state.setIntervalCount}
                                                                                              eventStartDate={bet.event_date}
                                                                                              serverTimestamp={bet.server_timestamp}
                                                                                />
                                                                            }
                                                                        </div>
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
                                                            {/*<div className="toReturnWin_Content my_bets">{bet.status == "won" ? bet.to_return : "0.00"} */}
                                                            <div className="toReturnWin_Content my_bets">{bet.to_return}
                                                            <span className="currency">EUR</span>
                                                            </div>
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
                                                                <div className={`BetScore_Goal ${bet.id}-goal-icon`}>GOAL</div>
                                                            </div>
                                                            <div className="OpenBetItem_ParticipantMarket">{ bet.market_description }</div>
                                                            </div>
                                                            <div className="OpenBetItem_Participant_Fixture">
                                                                <div className="OpenBetItem_Participant_Fixture_description my_bets">
                                                                    <span className="my_bet_participants">{bet.event}</span>
                                                                    {
                                                                        (bet.status == 'won' || bet.status == 'lost') ? '' :
                                                                            <span className="BetScore">{bet.score != null && Object.keys(bet.score).length ? bet.score[0].value + '-' + bet.score[1].value : ''}</span>
                                                                    }
                                                                    {getEventBySports(this.state.allEvents, bet.fixture_id, bet.sport_id) == null ?
                                                                        <span className="match_time">
                                                                            {moment(moment.utc(bet.event_date)).local().format("ddd DD MMM HH:mm")}
                                                                        </span> :
                                                                        <FootballTime event = {getEventBySports(this.state.allEvents, bet.fixture_id, bet.sport_id)}
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
                                                            <span className="currency">EUR</span>
                                                            </div>
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

                            </div>
                            {
                                this.state.count > this.state.live_bets.length ?
                                    <div className="ShowMoreBetsButton" onClick={() => this.props.showMore()}><span>Show More Bets</span></div>
                                    : ""
                            }

                        </div>
                        :
                        <div className="bet_info empty">
                            <p className="bet_info_text line_one">There are no bets Live Now</p>
                            <p className="bet_info_text">Any of your In-Play bets can be viewed here</p>
                        </div>
                }



            </div>
        )

    }
}

export default Live;
