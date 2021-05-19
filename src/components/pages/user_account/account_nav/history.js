import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PopUpInfo from "../pop-up/pop_up_information";
import PopUpBalanceSum from "../pop-up/pop_up_balance_sum";
import {getBetsHistory} from "../../../helpers/data_account";
import moment from "moment";
import HistoryMultiples from "../../../shared/modal/history_multiples";



class History extends React.Component {
    combineName = {
        1: "Singles",
        2: "Doubles",
        3: "Trebles",
        "3trixie": "Trixie",
        4: "4 Folds",
    "4yankee":" Yankee",
        5: "5 Folds",
    "5super_yankee": "Super Yankee",
        6: "6 Folds",
        7: "7 Folds",
        8: "8 Folds",
        9: "9 Folds",
        10: "10 Folds",
        11: "11 Folds",
        12: "12 Folds",
        13: "13 Folds",
        14: "14 Folds"
    }
    constructor(props) {
        super(props);
        this.state={
            balance: this.props.balance,
            submenu:"sports",
            pop_up_info:false,
            startDate: moment(),
            endDate: moment(),
            loginToken: this.props.loginToken,
            datePicker: true,
            betsHistory: false,
            no_criteria: false,
            showDetailes: false,
            combineDescription: false,
            currentPage: this.props.currentPage,
            limit: 10,
            offset: 0
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            balance: nextProps.balance,
            loginToken: nextProps.loginToken,
            currentPage: nextProps.currentPage
        })
    }

    componentDidMount() {

    }
    //change tabs
    changeSubMenu = (tab) => {
        this.setState({
            submenu: tab,
            currentPage: tab
        })
    }
    handleChangeStart = (date) => {
        console.log("date!!!!!", date)
        this.setState({
            startDate: date
        });
    }
    handleChangeEnd = (date) => {
        this.setState({
            endDate: date
        });
    }
    changeRadio = (type = null) => {
        if (type == "fixed") {
            this.setState({
                datePicker: !this.state.datePicker
            })
        } else {
            this.setState({
                datePicker: true
            })
        }

    }
    //modals
    closeModal = (type) =>{
        if (type == "balanceSum") {
            this.setState({
                pop_up_info: false
            })
        }
    }
    showModal = (type) =>{
        if (type == "balanceSum") {
            this.setState({
                pop_up_info: true
            })
        }
    }
    showContacts(){
        if ($('.contact_info').hasClass('show'))
            $('.contact_info').removeClass('show')
        else(
            $('.contact_info').addClass('show')
        )
    }
    showSearch = (limit=0, offset=0) => {

        console.log("limit",limit);
        let obj = {};
        obj["limit"] = this.state.limit + limit;
        console.log("limit2", obj["limit"]);
        obj["offset"] = this.state.offset +offset;
       let history_type = $(".account_info_container select[name='history_type']").val();
       let period_type = $(".account_info_container input[type='radio']:checked").val();
        obj['history_type'] = history_type;
       if (period_type == "fixed") {
            obj['date_from'] = moment(this.state.startDate).format('YYYY-MM-DD HH:mm:ss');
            obj['date_to'] = moment(this.state.endDate).format('YYYY-MM-DD HH:mm:ss');
       } else {
           obj['period_type'] = period_type;
       }

        getBetsHistory(this.state.loginToken, obj, (err, data) => {
            if (!err) {
                console.log("success", data)
                if (data.data.length) {
                    this.setState({
                        limit:  obj["limit"],
                        betsHistory: data.data,
                        count: data.count,
                        no_criteria: false
                    })
                } else {
                    this.setState({
                        betsHistory: false,
                        no_criteria: true
                    })
                }

            } else {
                console.log("err", data)
                this.setState({
                    betsHistory: false,
                    no_criteria: false
                })
            }
        })
    }

    toggleCalendar(className) {
        $('.'+ className).trigger("click")
    }
    changeHistoryType = () => {
        this.setState({
            betsHistory: false,
            no_criteria: false
        })
    }
    showDetailsBetHistory = (id) =>  {
        if (this.state.showDetailes || this.state.showDetailes === 0) {
            this.setState({
                showDetailes: false
            })
        } else {
            this.setState({
                showDetailes: id
            })
        }

    }

    showCombineDescription = (selections) => {
        this.setState({
            combineDescription: selections
        })
    }

    closeHistoryMultiples = () => {
        this.setState({
            combineDescription: false
        })
    }

    render() {

        return(
            <div className="userAccount_info">
                <div className="top_sub_menu">
                    <a href="#" className={`top_sub_menu_link ${this.state.submenu == "sports" ? "active":""}`} onClick={(e)=>{e.preventDefault(); this.changeSubMenu('sports')}}><span>Sports</span></a>
                    <a href="#" className={`top_sub_menu_link ${this.state.submenu == "casino"  ? 'active' : ''}`}  onClick={(e)=>{e.preventDefault(); this.changeSubMenu('casino')}}><span>Casino</span></a>
                    <a href="#" className={`top_sub_menu_link ${this.state.submenu == "poker"  ? 'active' : ''}`}  onClick={(e)=>{e.preventDefault(); this.changeSubMenu('poker')}}><span>Poker</span></a>
                    <a href="#" className={`top_sub_menu_link ${this.state.submenu == "other"  ? 'active' : ''}`}  onClick={(e)=>{e.preventDefault(); this.changeSubMenu('other')}}><span>Games/Bingo/Vegas</span></a>
                </div>
                {this.state.submenu == "sports" ?
                    <div className="account_info_container">
                        <div className="table_content">
                            <div className="tab_details_info history">
                                <div className="tab_title history">
                                    <span>Sports History (USD)</span>
                                    <div className="history_search_control">
                                        <div className="history_search_control_text">Sports Balance
                                            <a href="#" onClick={(e)=>{e.preventDefault(); this.showModal('balanceSum')}}>
                                                <span className="amount"> {this.state.balance[this.state.currentPage]}</span>
                                                <span className="currency"> USD</span>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                                <div className="historyType">
                                    <div className="form-group">
                                        <label>History type</label>
                                        <select name="history_type" id="" onChange={this.changeHistoryType}>
                                            <option value="unsettled_sports">Unsettled Sports Bets</option>
                                            <option value="settled_sports">Settled Sports Bets</option>
                                            <option value="101">Unsettled Lotto Bets</option>
                                            <option value="103">Settled Lotto Bets</option>
                                            <option value="16">Instant Games Bets</option>
                                            <option value="7">Deposits</option>
                                            <option value="8">Withdrawals</option>
                                            <option value="58">Transfers</option>
                                            <option value="1">Account Adjustments</option>
                                        </select>

                                    </div>
                                </div>
                                <div className="dateSearch">
                                    <div className="form-group datasearch_control">
                                        <input type="radio"  name="radio" value="24hours" defaultChecked={true} onChange={()=>this.changeRadio()}/>
                                        <label>Last 24 hours</label>
                                    </div>
                                    <div className="form-group datasearch_control">
                                        <input type="radio"  name="radio" value="48hours" onChange={()=>this.changeRadio()}/>
                                        <label>Last 48 hours</label>
                                    </div>
                                    <div className="form-group select_data">
                                        <input type="radio"  name="radio" value="fixed" onChange={()=>this.changeRadio("fixed")}/>
                                        <label>From</label>
                                        <div className="data_variation">
                                            <div className="calendar_icon" onClick={() => this.toggleCalendar("date_from")}/>
                                            <DatePicker
                                                selectsStart
                                                selected={this.state.startDate}
                                                startDate={this.state.startDate}
                                                endDate={this.state.endDate}
                                                onChange={this.handleChangeStart}
                                                dateFormat="DD/MM/YYYY"  locale="en-GB"
                                                disabled={this.state.datePicker}
                                                className="date_from"
                                            />
                                            <label>To</label>
                                            <div className="calendar_icon" onClick={() => this.toggleCalendar("date_to")}/>
                                            <DatePicker
                                                onChange={this.handleChangeEnd}
                                                selected={this.state.endDate}
                                                selectsEnd
                                                startDate={this.state.startDate}
                                                endDate={this.state.endDate}
                                                dateFormat="DD/MM/YYYY"  locale="en-GB"
                                                disabled={this.state.datePicker}
                                                className="date_to"
                                            />
                                        </div>
                                    </div>
                                    <button type="button" className="modal_btn" onClick={() => this.showSearch()}>Show</button>
                                </div>
                                <div className="history_list">
                                    {
                                        this.state.no_criteria ?
                                            <div className="no_criteria">There are no records matching this criteria. Please modify your criteria.</div>
                                            : ""
                                    }
                                    {/*<div className="no_criteria">Please note that all searches are limited to six month periods.</div>*/}
                                    {
                                        this.state.betsHistory ?
                                            <div className="history_results">
                                                 <table className="results-table">
                                                <thead className="results-header">
                                                <tr>
                                                    <th className="results-header-th ">Bet Details</th>
                                                    <th className="results-header-th text-center">Date/Time</th>
                                                    <th className="results-header-th text-center">Stake</th>
                                                    <th className="results-header-th text-center">Return</th>

                                                </tr>
                                                </thead>

                                                {
                                                    this.state.betsHistory.map((element, ind) => {
                                                        if (typeof element.bets != "undefined") {
                                                            return <tbody key={`${ind}-${element.id}-row-history`}>
                                                            <tr className={`summary-record bet-confirmation ${this.state.showDetailes === ind ? "show-res" :""}`} key={ind}>
                                                                <td className="result-item ">
                                                                    <div className="bet_details" onClick={() => this.showDetailsBetHistory(ind)}>

                                                                        {
                                                                            element.bets.map((bet, index) => {
                                                                                return <div key={`${bet.Id}-${index}-${ind}`}>
                                                                                    <span>
                                                                                        {
                                                                                            bet.bet_description == 1 || bet.bet_description == 2 ?
                                                                                                bet.participants.map((team) => {
                                                                                                    if (bet.bet_description == team.position) {
                                                                                                        return team.name + (bet.line ? ' ' + bet.line : '');
                                                                                                    }
                                                                                                })
                                                                                                : bet.bet_description == "X" ? "Draw" :  bet.bet_description
                                                                                        }
                                                                                    </span>
                                                                                    {` @ ${bet.rate}`}
                                                                                </div>
                                                                            })
                                                                        }
                                                                        <span style={{color: "#9c9c9c"}}>{this.combineName[element.multiple_type]} {`${Number(element.total_stake / element.unit_stake)} bets`} * $ {element.unit_stake}</span>
                                                                    </div>


                                                                </td>
                                                                <td className="result-item text-center">
                                                                    {element.datetime}
                                                                </td>
                                                                <td className="result-item text-right">
                                                                    {element.total_stake}
                                                                </td>
                                                                <td className="result-item text-right">
                                                                    {element.status == "won" ? element.to_return : "0.00"}
                                                                </td>

                                                            </tr>
                                                            <tr className={`res-${ind} ${ this.state.showDetailes === ind ? "show" : "extra_confirm_bet"}`}>
                                                                <td colSpan={4} className="bet_confirmation_wrapper">

                                                                    <div className="bet_confirmation">
                                                                        <div className="bet-confirmation-details">
                                                                            <span className="bold_text">Bet Confirmation - SB2295063121F - Internet</span> Time of bet: 27/12/2018 01:32:06
                                                                            <span className="print_text">Print</span>
                                                                        </div>
                                                                        <table className="results-table ">
                                                                            <thead>
                                                                            <tr>
                                                                                <th className="results-header-th  text-center">No.</th>
                                                                                <th className="results-header-th ">Selections</th>
                                                                                <th className="results-header-th ">Event</th>
                                                                                <th className="results-header-th text-center">Event Date</th>
                                                                                <th className="results-header-th text-center ">E/W Terms</th>
                                                                                <th className="results-header-th text-center">Odds</th>
                                                                                <th className="results-header-th text-center ">Result</th>
                                                                            </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                            {
                                                                                element.bets.map((bet, index) => {
                                                                                return  <tr key={`${index}-${bet.Id}`}>
                                                                                    <td className="result-item text-center">{bet.order}</td>
                                                                                    <td className="result-item ">       {
                                                                                        bet.bet_description == 1 || bet.bet_description == 2 ?
                                                                                            bet.participants.map((team) => {
                                                                                                if (bet.bet_description == team.position) {
                                                                                                    return team.name + (bet.line ? ' ' + bet.line : '');
                                                                                                }
                                                                                            })
                                                                                            : bet.bet_description == "X" ? "Draw" :  bet.bet_description

                                                                                    }</td>
                                                                                    <td className="result-item ">{bet.participants[0].name} vs {bet.participants[1].name}<br/> ({bet.market_description})</td>
                                                                                    <td className="result-item text-center">
                                                                                        {moment(moment.utc(bet.event_date)).local().format("DD/MM/YYYY")}
                                                                                    </td>
                                                                                    <td className="result-item text-center">None</td>
                                                                                    <td className="result-item text-center">{bet.rate}</td>
                                                                                    <td className="result-item text-center">{bet.status}</td>
                                                                                </tr>
                                                                                })
                                                                            }



                                                                            </tbody>
                                                                        </table>
                                                                        <div className="combine_table">
                                                                            <div className="multiples-bet-information-header">Multiples</div>
                                                                            <table className="results-table">
                                                                                <thead>
                                                                                <tr>
                                                                                    <th className="results-header-th ">Bet Type</th>
                                                                                    <th className="results-header-th text-center">No.of Bets</th>
                                                                                    <th className="results-header-th text-center">Unit Stake</th>
                                                                                    <th className="results-header-th text-center">Total Stake</th>
                                                                                    <th className="results-header-th text-center ">To Return</th>
                                                                                    <th className="results-header-th text-center ">Return</th>
                                                                                </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                <tr>
                                                                                    <td className="result-item"> <a className="result-item-link" href="javascript: void(0)" onClick={() => this.showCombineDescription(element.selections)}>{this.combineName[element.multiple_type]}</a></td>
                                                                                    <td className="result-item text-center">{Number(element.total_stake / element.unit_stake)}</td>
                                                                                    <td className="result-item text-center">{element.unit_stake}</td>
                                                                                    <td className="result-item text-center">{element.total_stake}</td>
                                                                                    <td className="result-item text-center"></td>
                                                                                    <td className="result-item text-center">{element.status == "won" ? element.to_return : "0.00"}</td>
                                                                                </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                        <div className="result"><span>Stake:  {element.total_stake} </span>  Return:  {element.status == "won" ? element.to_return : "0.00"}</div>
                                                                    </div>
                                                                    <div className="bet-confirmation-return-message">
                                                                        All bets are accepted and settled in accordance with our Terms and Conditions and Rules.
                                                                    </div>

                                                                </td>

                                                            </tr>
                                                            </tbody>
                                                        } else {
                                                            return <tbody>
                                                            <tr className={`summary-record bet-confirmation ${this.state.showDetailes === ind ? "show-res" :""}`} key={ind}>
                                                                <td className="result-item w365">
                                                                    <div className="bet_details" onClick={() => this.showDetailsBetHistory(ind)}>
                                                                        {
                                                                            element.bet_description == 1 || element.bet_description == 2 ?
                                                                                element.participants.map((team) => {
                                                                                    if (element.bet_description == team.position) {
                                                                                        return team.name + (element.line ? ' ' + element.line : '');
                                                                                    }
                                                                                })
                                                                                : element.bet_description == "X" ? "Draw" :  element.bet_description

                                                                        }
                                                                        {` @ ${element.rate}`}
                                                                        <br /> <span style={{color: "#9c9c9c"}}>$ {element.stake} Single</span>
                                                                    </div>


                                                                </td>
                                                                <td className="result-item text-center">
                                                                    {element.datetime}
                                                                </td>
                                                                <td className="result-item text-right">
                                                                    {element.stake}
                                                                </td>
                                                                <td className="result-item text-right">
                                                                    {element.status == "won" ? element.to_return : "0.00"}
                                                                </td>

                                                            </tr>
                                                            <tr className={`res-${ind} ${ this.state.showDetailes === ind ? "show" : "extra_confirm_bet"}`}>
                                                                <td colSpan={4} className="bet_confirmation_wrapper">

                                                                    <div className="bet_confirmation">
                                                                        <div className="bet-confirmation-details">
                                                                            <span className="bold_text">Bet Confirmation - SB2295063121F - Internet</span> Time of bet: 27/12/2018 01:32:06
                                                                            <span className="print_text">Print</span>
                                                                        </div>
                                                                        <table className="results-table ">
                                                                            <thead>
                                                                            <tr>
                                                                                <th className="results-header-th  text-center">No.</th>
                                                                                <th className="results-header-th ">Selections</th>
                                                                                <th className="results-header-th ">Event</th>
                                                                                <th className="results-header-th text-center">Event Date</th>
                                                                                <th className="results-header-th text-center ">E/W Terms</th>
                                                                                <th className="results-header-th text-center">Odds</th>
                                                                                <th className="results-header-th text-center ">Result</th>
                                                                            </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                            <tr>
                                                                                <td className="result-item text-center">1</td>
                                                                                <td className="result-item ">       {
                                                                                    element.bet_description == 1 || element.bet_description == 2 ?
                                                                                        element.participants.map((team) => {
                                                                                            if (element.bet_description == team.position) {
                                                                                                return team.name + (element.line ? ' ' + element.line : '');
                                                                                            }
                                                                                        })
                                                                                        : element.bet_description == "X" ? "Draw" :  element.bet_description

                                                                                }</td>
                                                                                <td className="result-item ">{element.event} <br/> ({element.market_description})</td>
                                                                                <td className="result-item text-center">
                                                                                    {moment(moment.utc(element.event_date)).local().format("DD/MM/YYYY")}
                                                                                </td>
                                                                                <td className="result-item text-center">None</td>
                                                                                <td className="result-item text-center">{element.rate}</td>
                                                                                <td className="result-item text-center">{element.status}</td>
                                                                            </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <div className="result"><span>Stake:  {element.stake}</span>   Return:  {element.status == "won" ? element.to_return : "0.00"}</div>
                                                                    </div>
                                                                    <div className="bet-confirmation-return-message">
                                                                        All bets are accepted and settled in accordance with our Terms and Conditions and Rules.
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        }

                                                    })
                                                }

                                            </table>
                                                {
                                                    this.state.count > this.state.betsHistory.length ?
                                                        <div className="show_more_table" onClick={() => this.showSearch(5)}>Show More</div>
                                                        : ""
                                                }
                                            </div>
                                            : ""
                                    }

                                </div>

                            </div>

                        </div>
                        {
                            this.state.combineDescription ?
                                <div className="Modal_wrapp">
                                    <HistoryMultiples closeHistoryMultiples={() => this.closeHistoryMultiples()} selections={this.state.combineDescription}/>
                                </div>
                                : ""
                        }

                    </div>
                :""
                }
                {this.state.submenu == "casino" ?
                    <div className="account_info_container">
                        <div className="table_content">
                            <div className="tab_details_info history">
                                <div className="tab_title history">
                                    <span>Casino History (USD)</span>
                                    <div className="history_search_control">
                                        <div className="history_search_control_text">Casino Balance
                                            <a href="#">
                                                <span className="amount"> {this.state.balance[this.state.currentPage]}</span>
                                                <span className="currency"> USD</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="historyType">
                                    <div className="form-group">
                                        <label>History type</label>
                                        <select name="history_type" id="">
                                            <option value="7">Deposits</option>
                                            <option value="8">Withdrawals</option>
                                            <option value="42">Transfers</option>
                                        </select>

                                    </div>
                                </div>
                                <div className="dateSearch">
                                    <div className="form-group datasearch_control">
                                        <input type="radio"  name="radio" value="last24h" defaultChecked={true} onChange={()=>this.changeRadio()}/>
                                        <label>Last 24 hours</label>
                                    </div>
                                    <div className="form-group datasearch_control">
                                        <input type="radio"  name="radio" value="last48h" onChange={()=>this.changeRadio()}/>
                                        <label>Last 48 hours</label>
                                    </div>
                                    <div className="form-group select_data">
                                        <input type="radio"  name="radio" value="fixed" onChange={()=>this.changeRadio("fixed")}/>
                                        <label>From</label>
                                        <div className="data_variation ">
                                            <div className="calendar_icon" onClick={() => this.toggleCalendar("date_from")}/>
                                            <DatePicker
                                                selectsStart
                                                selected={this.state.startDate}
                                                startDate={this.state.startDate}
                                                endDate={this.state.endDate}
                                                onChange={this.handleChangeStart}
                                                dateFormat="DD/MM/YYYY"  locale="en-GB"
                                                disabled={this.state.datePicker}
                                                className="date_from"
                                            />
                                            <label>To</label>
                                            <div className="calendar_icon" onClick={() => this.toggleCalendar("date_to")}/>
                                            <DatePicker
                                                onChange={this.handleChangeEnd}
                                                selected={this.state.endDate}
                                                selectsEnd
                                                startDate={this.state.startDate}
                                                endDate={this.state.endDate}
                                                dateFormat="DD/MM/YYYY"  locale="en-GB"
                                                disabled={this.state.datePicker}
                                                className="date_to"
                                            />
                                        </div>
                                    </div>
                                    <button type="button" className="modal_btn" >Show</button>
                                </div>
                                <div className="history_list">
                                    {
                                        this.state.no_criteria ?
                                            <div className="no_criteria">There are no records matching this criteria. Please modify your criteria.</div>
                                            : ""
                                    }
                                    <div className="no_criteria">Please note that all searches are limited to six month periods.</div>
                                    <div className="history_results">
                                        <table className="results-table">
                                            <thead className="results-header">
                                            <tr>
                                                <th className="results-header-th datetime-header">Date/Time</th>
                                                <th className="results-header-th reference-header">Reference</th>
                                                <th className="results-header-th description-header">Description</th>
                                                <th className="results-header-th product-header">Product</th>
                                                <th className="results-header-th deductions-header">Deductions</th>
                                                <th className="results-header-th additions-header">Additions</th>
                                            </tr>
                                            </thead>
                                            <tbody id="searchresults" className="summary-body">

                                            <tr className="summary-record">
                                                <td className="result-item result-item-datetime">
                                                    03/10/2018 21:51:33
                                                </td>
                                                <td className="result-item result-item-reference">
                                                    D1244995817MB
                                                </td>
                                                <td className="result-item result-item-description">
                                                    Deposit Skrill
                                                </td>
                                                <td className="result-item result-item-product">
                                                    Sports
                                                </td>
                                                <td className="result-item result-item-deductions">
                                                    0.00
                                                </td>
                                                <td className="result-item result-item-additions">
                                                    50.00
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                :""
                }
                {this.state.submenu == "poker" ?
                    <div className="account_info_container">
                        <div className="table_content">
                            <div className="tab_details_info history">
                                <div className="tab_title history">
                                    <span>Poker History (USD)</span>
                                    <div className="history_search_control">
                                        <div className="history_search_control_text">Poker Balance
                                            <a href="#">
                                                <span className="amount"> {this.state.balance[this.state.currentPage]}</span>
                                                <span className="currency"> USD</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="historyType">
                                    <div className="form-group">
                                        <label>History type</label>
                                        <select name="history_type" id="">
                                            <option value="7">Deposits</option>
                                            <option value="8">Withdrawals</option>
                                            <option value="42">Transfers</option>
                                        </select>

                                    </div>
                                </div>
                                <div className="dateSearch">
                                    <div className="form-group datasearch_control">
                                        <input type="radio"  name="radio" value="last24h" defaultChecked={true} onChange={()=>this.changeRadio()}/>
                                        <label>Last 24 hours</label>
                                    </div>
                                    <div className="form-group datasearch_control">
                                        <input type="radio"  name="radio" value="last48h" onChange={()=>this.changeRadio()}/>
                                        <label>Last 48 hours</label>
                                    </div>
                                    <div className="form-group select_data">
                                        <input type="radio"  name="radio" value="fixed" onChange={()=>this.changeRadio("fixed")}/>
                                        <label>From</label>
                                        <div className="data_variation ">
                                            <div className="calendar_icon" onClick={() => this.toggleCalendar("date_from")}/>
                                            <DatePicker
                                                selectsStart
                                                selected={this.state.startDate}
                                                startDate={this.state.startDate}
                                                endDate={this.state.endDate}
                                                onChange={this.handleChangeStart}
                                                dateFormat="DD/MM/YYYY"  locale="en-GB"
                                                disabled={this.state.datePicker}
                                                className="date_from"
                                            />
                                            <label>To</label>
                                            <div className="calendar_icon" onClick={() => this.toggleCalendar("date_to")}/>
                                            <DatePicker
                                                onChange={this.handleChangeEnd}
                                                selected={this.state.endDate}
                                                selectsEnd
                                                startDate={this.state.startDate}
                                                endDate={this.state.endDate}
                                                dateFormat="DD/MM/YYYY"  locale="en-GB"
                                                disabled={this.state.datePicker}
                                                className="date_to"
                                            />
                                        </div>
                                    </div>
                                    <button type="button" className="modal_btn" >Show</button>
                                </div>
                                <div className="history_list">
                                    {
                                        this.state.no_criteria ?
                                            <div className="no_criteria">There are no records matching this criteria. Please modify your criteria.</div>
                                            : ""
                                    }
                                    <div className="no_criteria">Please note that all searches are limited to six month periods.</div>
                                    <div className="history_results">
                                        <table className="results-table">
                                            <thead className="results-header">
                                            <tr>
                                                <th className="results-header-th datetime-header">Date/Time</th>
                                                <th className="results-header-th reference-header">Reference</th>
                                                <th className="results-header-th description-header">Description</th>
                                                <th className="results-header-th product-header">Product</th>
                                                <th className="results-header-th deductions-header">Deductions</th>
                                                <th className="results-header-th additions-header">Additions</th>
                                            </tr>
                                            </thead>
                                            <tbody id="searchresults" className="summary-body">

                                            <tr className="summary-record">
                                                <td className="result-item result-item-datetime">
                                                    03/10/2018 21:51:33
                                                </td>
                                                <td className="result-item result-item-reference">
                                                    D1244995817MB
                                                </td>
                                                <td className="result-item result-item-description">
                                                    Deposit Skrill
                                                </td>
                                                <td className="result-item result-item-product">
                                                    Sports
                                                </td>
                                                <td className="result-item result-item-deductions">
                                                    0.00
                                                </td>
                                                <td className="result-item result-item-additions">
                                                    50.00
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                :""
                }
                {this.state.submenu == "other" ?
                    <div className="account_info_container">
                        <div className="table_content">
                            <div className="tab_details_info history">
                                <div className="tab_title history">
                                    <span>Games/Bingo/Vegas History (USD)</span>
                                    <div className="history_search_control">
                                        <div className="history_search_control_text">Games/Bingo/Vegas Balance
                                            <a href="#">
                                                <span className="amount"> {this.state.balance[this.state.currentPage]}</span>
                                                <span className="currency"> USD</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="historyType">
                                    <div className="form-group">
                                        <label>History type</label>
                                        <select name="history_type" id="">
                                            <option value="10">Games/Bingo/Vegas Bets</option>
                                            <option value="7">Deposits</option>
                                            <option value="8">Withdrawals</option>
                                            <option value="57">Transfers</option>
                                            <option value="14">Account Adjustments</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="dateSearch">
                                    <div className="form-group datasearch_control">
                                        <input type="radio"  name="radio" value="last24h" defaultChecked={true} onChange={()=>this.changeRadio()}/>
                                        <label>Last 24 hours</label>
                                    </div>
                                    <div className="form-group datasearch_control">
                                        <input type="radio"  name="radio" value="last48h" onChange={()=>this.changeRadio()}/>
                                        <label>Last 48 hours</label>
                                    </div>
                                    <div className="form-group select_data">
                                        <input type="radio"  name="radio" value="fixed" onChange={()=>this.changeRadio("fixed")}/>
                                        <label>From</label>
                                        <div className="data_variation ">
                                            <div className="calendar_icon" onClick={() => this.toggleCalendar("date_from")}/>
                                            <DatePicker
                                                selectsStart
                                                selected={this.state.startDate}
                                                startDate={this.state.startDate}
                                                endDate={this.state.endDate}
                                                onChange={this.handleChangeStart}
                                                dateFormat="DD/MM/YYYY"  locale="en-GB"
                                                disabled={this.state.datePicker}
                                                className="date_from"
                                            />
                                            <label>To</label>
                                            <div className="calendar_icon" onClick={() => this.toggleCalendar("date_to")}/>
                                            <DatePicker
                                                onChange={this.handleChangeEnd}
                                                selected={this.state.endDate}
                                                selectsEnd
                                                startDate={this.state.startDate}
                                                endDate={this.state.endDate}
                                                dateFormat="DD/MM/YYYY"  locale="en-GB"
                                                disabled={this.state.datePicker}
                                                className="date_to"
                                            />
                                        </div>
                                    </div>
                                    <button type="button" className="modal_btn" >Show</button>
                                </div>
                                <div className="history_list">
                                    {
                                        this.state.no_criteria ?
                                            <div className="no_criteria">There are no records matching this criteria. Please modify your criteria.</div>
                                            : ""
                                    }
                                    <div className="no_criteria">Please note that all searches are limited to six month periods.</div>
                                    <div className="history_results">
                                        <table className="results-table">
                                            <thead className="results-header">
                                            <tr>
                                                <th className="results-header-th datetime-header">Date/Time</th>
                                                <th className="results-header-th reference-header">Reference</th>
                                                <th className="results-header-th description-header">Description</th>
                                                <th className="results-header-th product-header">Product</th>
                                                <th className="results-header-th deductions-header">Deductions</th>
                                                <th className="results-header-th additions-header">Additions</th>
                                            </tr>
                                            </thead>
                                            <tbody id="searchresults" className="summary-body">

                                            <tr className="summary-record">
                                                <td className="result-item result-item-datetime">
                                                    03/10/2018 21:51:33
                                                </td>
                                                <td className="result-item result-item-reference">
                                                    D1244995817MB
                                                </td>
                                                <td className="result-item result-item-description">
                                                    Deposit Skrill
                                                </td>
                                                <td className="result-item result-item-product">
                                                    Sports
                                                </td>
                                                <td className="result-item result-item-deductions">
                                                    0.00
                                                </td>
                                                <td className="result-item result-item-additions">
                                                    50.00
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                :""
                }
                {this.state.pop_up_info ?
                    <div className="Modal_wrapp">
                        <PopUpBalanceSum closeModal = {(type) => this.closeModal(type)}/>
                    </div>
                    :""
                }

            </div>
        )

    }
}

export default History;