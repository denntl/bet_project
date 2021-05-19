import React from 'react';
import ActionPanel from "../actionPanel";
import Footer from "../footer";
import {getBetsHistory} from "../helpers/data_account";
import moment from "moment/moment";
import Settled from "./my_bets/settled";
import Unsettled from "./my_bets/unsettled";
import Live from "./my_bets/live";
import Cash_out from "./my_bets/cash_out";
import All_info from "./my_bets/all_info";


class MyBets extends React.Component {
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
            allEvents: [],
            betsById: null,
            requestSend: false,
            loginToken: this.props.loginToken,
            myBetsTab:"cash_out",
            cash_out: false,
            live_bets: false,
            unsettled_bets: false,
            settled_bets: false,
            all_info: false,
            /** ПОМЕНЯТЬ НА cash_out В БУДУЩЕМ **/
            history_type: "unsettled_sports",
            period_type: "",
            bets: {},
            currentTotalStake: 0,
            multiCombine: {},
            unsettled_bets_count: this.props.unsettled_bets_count,
            maxSelections: this.props.maxSelections,
            limit: {
                cash_out: 10,
                settled: 10,
                unsettled: 10,
                live: 10,
                all: 10
            },
            offset: 0,
            odds: this.props.odds,
            stretch: false,
        }

    }
    resizeBlock =()=> {
        if (this.state.stretch) {
            this.setState({
                stretch: false
            });
        } else {
            this.setState({
                stretch: true
            });
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            loginToken: nextProps.loginToken,
            maxSelections: nextProps.maxSelections,
            allEvents: nextProps.allEvents,
            unsettled_bets_count: nextProps.unsettled_bets_count,
            odds: nextProps.odds
        })
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     if (nextState.settled_bets != this.state.settled_bets || nextState.unsettled_bets != this.state.unsettled_bets) {
    //         return true
    //     } else {
    //         return false
    //     }
    // }

    componentDidMount() {
        // let currentStake = this.props.getCurrentStake();
        //
        // if (currentStake) {
        //     this.setState({
        //         bets: currentStake.bets,
        //         currentTotalStake: currentStake.currentTotalStake,
        //         multiCombine: currentStake.multiCombine,
        //     })
        // }
        this.fetchBetsHistory();

        $('.scroll_block').mCustomScrollbar({
            axis: "y",
            theme: "minimal",
            scrollInertia: 550,
            scrollbarPosition: "inside"
        });

    }

    fetchBetsHistory = (period_type='',history_type='', withoutTimeout=false, changedTab='', limit=0, offset=0) => {
        if(this.state.requestSend == false && location.pathname == "/my_bets" && this.state.loginToken) {

            changedTab = changedTab != '' ? changedTab : this.state.myBetsTab;
            history_type = history_type != '' ? history_type : this.state.history_type;
            period_type = period_type != '' ? period_type : this.state.period_type;

            if(this.state.source != null){
                this.state.cancel();
            }

            let objGet = {};

            objGet['limit'] = this.state.limit[changedTab] + limit;
            objGet['offset'] = this.state.offset + offset;

            objGet['history_type'] = history_type;
            objGet['period_type'] = period_type;
            this.state.limit[changedTab] = objGet['limit'];

            this.setState({
                limit: this.state.limit,
                requestSend: true
            })

            getBetsHistory(this.state.loginToken, objGet, (err, data) => {
                if (!err) {
                    //console.log("success", data)
                    let obj = {};
                    switch (changedTab) {
                        case "settled":
                            obj['settled_bets'] = data;
                            break;
                        case "unsettled":
                            obj['unsettled_bets'] = data;
                            break;
                        case "live":
                            obj['live_bets'] = data;
                            break;
                        case "cash_out":
                            this.compareData('cash_out', data);
                            obj['cash_out'] = data;
                            break;
                        case "all":
                            obj['all_info'] = data;
                            break;
                    }
                    this.setState(obj)


                } else {

                    data = {data: []};
                    let obj = {};
                    switch (changedTab) {
                        case "settled":
                            obj['settled_bets'] = data;
                            break;
                        case "unsettled":
                            obj['unsettled_bets'] = data;
                            break;
                        case "live":
                            obj['live_bets'] = data;
                            break;
                        case "cash_out":
                            this.compareData('cash_out', data);
                            obj['cash_out'] = data;
                            break;
                        case "all":
                            obj['all_info'] = data;
                            break;
                    }

                    this.setState(obj)


                    // this.setState({
                    //     betsHistory: false,
                    //     no_criteria: false
                    // })
                }

                this.setState({
                    requestSend: false
                });

                if(withoutTimeout == false){
                    setTimeout(() => {//
                        this.fetchBetsHistory('', '', withoutTimeout, '');
                    }, 5000);
                }
            });
        }
    }

    compareData=(type, newData)=>{
        let groupedById = {};
        if(this.state.betsById == null){
            Object.keys(newData.data).map((ind) => {
                groupedById[newData.data[ind]['id']] = newData.data[ind];
            });
        } else {
            groupedById = this.state.betsById;
            Object.keys(newData.data).map((ind) => {
                if(typeof groupedById[newData.data[ind]['id']] != 'undefined'){
                    if (typeof newData.data[ind]['bets'] != 'undefined') {
                        newData.data[ind]['bets'].map((elem, index) => {
                            newData.data[ind]['bets'][index]['score'].map((elem, index2) => {
                                console.log('TUT', newData.data[ind]['bets'][index]['score'][index2]);

                                if (newData.data[ind]['bets'][index]['score'][index2]['value'] != groupedById[newData.data[ind]['id']]['bets'][index]['score'][index2]['value']) {
                                    $('.'+newData.data[ind]['bets'][index]['id']+'-goal-icon').addClass('show');
                                    setTimeout(() => {
                                        $('.'+newData.data[ind]['bets'][index]['id']+'-goal-icon').removeClass('show');
                                    }, 7000);
                                }
                            });
                        });
                    } else {
                        if (
                            typeof newData.data[ind]['score'] != 'undefined' &&
                            typeof groupedById[newData.data[ind]['id']]['score'] != 'undefined'
                        ) {
                            newData.data[ind]['score'].map((elem, index) => {
                                if (newData.data[ind]['score'][index]['value'] != groupedById[newData.data[ind]['id']]['score'][index]['value']) {
                                    $('.'+newData.data[ind]['id']+'-goal-icon').addClass('show');
                                    setTimeout(() => {
                                        $('.'+newData.data[ind]['id']+'-goal-icon').removeClass('show');
                                    }, 7000);
                                }
                            });
                        }
                    }
                }
                groupedById[newData.data[ind]['id']] = newData.data[ind];
            });
        }

        this.setState({betsById: groupedById})
    }

    showMore = () => {
        this.fetchBetsHistory('', '', true, '', 5);
    }

    changeMyBetTab = (tab) => {

        let history_type = this.state.history_type;
        let period_type = this.state.period_type;
        if (tab == "cash_out") {
            /** ПОМЕНЯТЬ НА cash_out В БУДУЩЕМ **/
            history_type = "unsettled_sports";
            period_type = "all";
        }
        if (tab == "settled") {
            history_type = "settled_sports";
            period_type = "24hours";
        }
        if (tab == "unsettled") {
            history_type = "unsettled_sports";
            period_type = "all";
        }
        if (tab == "live") {
            history_type = "live_sports";
        }
        if (tab == "all") {
            history_type = "all_sports";
            period_type = "all";
        }


        this.setState({
            myBetsTab:tab,
            history_type: history_type,
            period_type: period_type
        })

        if (this.state.myBetsTab != tab) {
            this.fetchBetsHistory(period_type, history_type, true, tab)
        }
    }

    showPopUpHistory = () => {
        this.props.showForm("accountUser", "history")
    }

    acceptChanged = () => {
        Object.keys(this.state.bets).map((ind) => {
            this.state.bets[ind]['changed'] = false
        })
        this.setState({
            bets: this.state.bets
        })
    }

    removeBetFromState=(type, betId)=>{
        let newDataArr = [];
        let newState = {};
        let clonedObj = Object.assign({}, this.state[type]);
        Object.keys(clonedObj['data']).map((ind) => {
            if(betId != clonedObj['data'][ind]['id']){
                newDataArr.push(clonedObj['data'][ind]);
            }
        });
        clonedObj['data'] = newDataArr;
        clonedObj['count'] = newDataArr.length;
        newState[type] = clonedObj;

        console.log(type, betId, newState);

        this.setState(newState);
    }

    removeBet(id) {
        let arr = {};
        let st = 0;
        let total = 0;

        if (id != "all") {
            for (var i in this.state.bets) {
                if (i != id) {
                    arr[i] = this.state.bets[i];
                    if (this.state.bets[i].stake != "") {
                        st = this.state.bets[i].stake;
                    }
                    total += parseFloat(st);
                }

            }

            $('.' + id ).removeClass('selected_bet');
            $('.' + id + "-premath" ).removeClass('selected_bet');
            console.log('remove', arr);
            console.log('remove', this.state.bets);
            console.log('remove', this.state.multiCombine);
            console.log('remove', this.state.currentTotalStake);
            let count = Object.keys(arr).length;

            let multiCombine ={};

            console.log('remove total1', total);
            for (var x in this.state.multiCombine) {

                if (count >= x ) {

                    let betNew = this.calculationBet(count, x);
                    let stake = "";
                    if (this.state.multiCombine[x].stake != "") {
                        stake =  this.state.multiCombine[x].stake
                    } else {
                        stake = 0
                    }
                    let res  =  stake * betNew;


                    multiCombine[x] = {
                        res: res,
                        stake: this.state.multiCombine[x].stake
                    };
                    // console.log('qwer', this.state.multiCombine[x].res)
                    total += parseFloat(multiCombine[x].res)
                }
            }

            console.log('remove multiCombine', multiCombine);
            console.log('remove total', total);

            // for (var x in multiCombine) {
            //     total += parseFloat(multiCombine[x].res);
            // }


            console.log('remove', multiCombine);

            this.setState({
                currentTotalStake: total,
                multiCombine: multiCombine
            })

        } else {
            window.localStorage.removeItem("currentStake");
            $('.selected_bet').removeClass('selected_bet');
            this.setState({
                currentTotalStake: 0,
                multiCombine: {}
            })
        }

        this.setState({
            bets: arr
        })
    }
        toggleHistoryLine(id) {
            if ($('.my_bets_page .OpenBetItem_details.id-' + id).hasClass("slow_appear")) {
                $('.my_bets_page .OpenBetItem_details.id-' + id).removeClass("slow_appear").show(200);
                $('.my_bets_page .my_bets_table_header.hd-' + id).removeClass("header_bordered");
            } else {
                $('.my_bets_page .OpenBetItem_details.id-' + id).addClass("slow_appear").hide(200);
                $('.my_bets_page .my_bets_table_header.hd-' + id).addClass("header_bordered");
            }
        }
    render() {
        return(
            <div>
            <div className="main_content my_bets">
                <div className="main_content_wrapper">
                    <div className="home_page my_bets">
                        <div className="columns_container">
                            <div className="column_one">
                                <div className="home_page_header my_bets_header">
                                    <nav className="my_bets_nav">
                                        <ul>
                                            <li className={`my_bets_links ${this.state.myBetsTab =="cash_out" ? "active" :""}`} onClick={()=>this.changeMyBetTab("cash_out")}>Cash Out</li>
                                            <li className={`my_bets_links ${this.state.myBetsTab =="live" ? "active" :""}`} onClick={()=>this.changeMyBetTab("live")}>Live</li>
                                            <li className={`my_bets_links ${this.state.myBetsTab =="unsettled" ? "active" :""}`} onClick={()=>this.changeMyBetTab("unsettled")}>Unsettled</li>
                                            <li className={`my_bets_links ${this.state.myBetsTab =="settled" ? "active" :""}`} onClick={()=>this.changeMyBetTab("settled")}>Settled</li>
                                            <li className={`my_bets_links ${this.state.myBetsTab =="all" ? "active" :""}`} onClick={()=>this.changeMyBetTab("all")}>All</li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="tab_content_wrapp scroll_block">
                                <div className="tab_content my_bets my_bets_page">
                                    {this.state.myBetsTab == "cash_out" ?
                                        <div className="tab_details">
                                            {
                                                this.state.cash_out ?
                                                    <Cash_out
                                                        allEvents={this.state.allEvents}
                                                        removeBetFromState={(type, betId) => this.removeBetFromState(type, betId)}
                                                        showMore={()=> this.showMore()}
                                                        setBalance={() => this.props.setBalance()}
                                                        toggleHistoryLine={(id) => this.toggleHistoryLine(id)}
                                                        cash_out={this.state.cash_out.data}
                                                        count={this.state.cash_out.count}
                                                        combineName={this.combineName}
                                                        loginToken={this.state.loginToken}
                                                        setUnsettledBets={(count) => this.props.setUnsettledBets(count)}
                                                        updateProfile={(obj) => this.props.updateProfile(obj)}/>
                                                    :
                                                    <div className="bet_info empty">
                                                        <p className="bet_info_text line_one">You have no bets available for Cash Out</p>
                                                        <p className="bet_info_text">Bets that can be fully or partially cashed out appear here</p>
                                                    </div>
                                            }

                                        </div>
                                        :""
                                    }
                                    {this.state.myBetsTab == "live" ?
                                       <Live
                                           allEvents={this.state.allEvents}
                                           showMore={()=> this.showMore()}
                                           toggleHistoryLine={(id) => this.toggleHistoryLine(id)}
                                           live_bets={this.state.live_bets.data}
                                           count={this.state.live_bets.count}
                                           combineName={this.combineName} />
                                        :""
                                    }
                                    {this.state.myBetsTab == "unsettled" ?
                                       <Unsettled
                                           allEvents={this.state.allEvents}
                                           showMore={()=> this.showMore()}
                                           toggleHistoryLine={(id) => this.toggleHistoryLine(id)}
                                           unsettled_bets={this.state.unsettled_bets.data}
                                           count={this.state.unsettled_bets.count}
                                           combineName={this.combineName}/>
                                        :""
                                    }
                                    {this.state.myBetsTab == "settled" ?
                                        <Settled
                                            allEvents={this.state.allEvents}
                                            showMore={()=> this.showMore()}
                                            toggleHistoryLine={(id) => this.toggleHistoryLine(id)}
                                            settled_bets={this.state.settled_bets.data}
                                            count={this.state.settled_bets.count}
                                            showPopUpHistory={() => this.showPopUpHistory()}
                                            combineName={this.combineName}/>
                                        :""
                                    }
                                    {this.state.myBetsTab == "all" ?
                                        <div className="tab_details">
                                            {
                                                this.state.all_info ?
                                                    <All_info
                                                        allEvents={this.state.allEvents}
                                                        showMore={()=> this.showMore()}
                                                        toggleHistoryLine={(id) => this.toggleHistoryLine(id)}
                                                        combineName={this.combineName}
                                                        all_info={this.state.all_info.data}
                                                        count={this.state.all_info.count}
                                                        showPopUpHistory={() => this.showPopUpHistory()}
                                                    />
                                                    :
                                                    <div className="bet_info empty">
                                                        <p className="bet_info_text line_one">You have no bets</p>
                                                        <p className="bet_info_text">Come back to Edit, Cash Out or find out the status of your most recent bets</p>
                                                    </div>
                                            }

                                        </div>
                                        :""
                                    }
                                </div>
                                <Footer/>
                                </div>
                            </div>
                        </div>

                    </div>

                    <ActionPanel
                        addToBetSlip={(info, bet, typeBet) => this.addToBetSlip(info, bet, typeBet)}
                        allEvents = {this.state.allEvents}
                        showTreblesModal={(obj) => this.props.showTreblesModal(obj)}
                        bets={this.state.bets}
                        currentTotalStake={this.state.currentTotalStake}
                        multiCombine={this.state.multiCombine}
                        page={`my_bets`}
                        calculationBet={(countBets, selectedBet) => this.calculationBet(countBets, selectedBet)}
                        updateProfile={(obj) => this.props.updateProfile(obj)}
                        removeBet={(id) => this.removeBet(id)}
                        setToken={(token) => this.props.setToken(token)}
                        acceptChanged={() => this.acceptChanged()}
                        loginToken={this.props.loginToken}
                        setUnsettledBets={(count) => this.props.setUnsettledBets(count)}
                        unsettled_bets={this.state.unsettled_bets_count}
                        showForm={(type, kind) => this.props.showForm(type, kind)}
                        setBalance={() => this.props.setBalance()}
                        showPopUpHistory={() => this.showPopUpHistory()}
                        odds={this.state.odds}
                        maxSelections={this.props.maxSelections}
                        resizeBlock = {()=>this.resizeBlock()}
                        stretch = {this.state.stretch}
                    />

                </div>

            </div>

            </div>
        )

    }
}

export default MyBets;