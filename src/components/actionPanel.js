import React from 'react';
import MultiplyCombine from "./shared/tables/multiplyCombine";
import Modal_Login from "./shared/modal/modal_login";
import ModalCustomError from "./shared/modal/modalCustomError.js";
import {getEventsGroupedByColumn, placeBet} from "./helpers/data";
import Settled from "./pages/action_panel/settled";
import Unsettled from "./pages/action_panel/unsettled";
import Live from "./pages/action_panel/live";
import Cash_out from "./pages/action_panel/cash_out";
import {getBetsHistory} from "./helpers/data_account";
import All_info from "./pages/action_panel/all_info";
import {Link} from "react-router-dom";
import RightColumn from "./shared/tables/rightColumn";
import Soccer from "./pages/sports/soccer";




class ActionPanel extends React.Component {

    mount = false;

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
        this.state = {
            odds: this.props.odds,
            requestSend: false,
            betsById: null,
            allEvents: [],
            loginToken: this.props.loginToken,
            isLogin: false,
            show_modal: false,
            stretch: this.props.stretch,
            bets: this.props.bets,
            currentTotalStake: this.props.currentTotalStake,
            multiCombine: this.props.multiCombine,
            equalMatch: false,
            differntMatch: false,
            equalBet: false,
            equalBetId: false,
            single: 0,
            quickBet: this.props.quickBet,
            countBets: 0,
            betTab: "bet_slip",
            myBetsTab:"cash_out",
            betPlaced: false,
            helpTooltip:false,
            quickBetSwitch: this.props.quickBetEnabled,
            cash_out: false,
            combineMin: null,
            combineMax: null,
            live_bets: false,
            settled_bets: false,
            unsettled_bets: false,
            unsettled_bets_count: this.props.unsettled_bets,
            all_info: false,
            /** ПОМЕНЯТЬ НА cash_out В БУДУЩЕМ **/
            history_type: "unsettled_sports",
            period_type: "",
            maxSelections: this.props.maxSelections,
            limit: {
                cash_out: 5,
                settled: 5,
                unsettled: 5,
                live: 5,
                all: 5,
            },
            maxStake: false,
            minStake: false,
            acceptChanges: false,
            offset: 0,
            stakeNull: false,
            show_modal_error: false,
            typeError: "",
            data: []
        }

        //this.resizeBlock = this.resizeBlock.bind(this);
        this.removeBet = this.removeBet.bind(this);
        this.betMax = this.betMax.bind(this);
        this.createStake = this.createStake.bind(this);
        this.createStakeCombine = this.createStakeCombine.bind(this);

        // this.saveBetToLocalStorage = this.saveBetToLocalStorage.bind(this);
        this.placeBet = this.placeBet.bind(this);
        this.closeModal = this.closeModal.bind(this);


    }


    fetchBetsHistory = (period_type='',history_type='', withoutTimeout=false, changedTab='', limit=0, offset=0) => {

        if(this.state.requestSend == false && this.state.loginToken && this.mount) {

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

            getBetsHistory(this.state.loginToken, objGet, function(err, data){
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


                    //console.log(obj);


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

                    this.setState(obj);

                    // this.setState({
                    //     betsHistory: false,
                    //     no_criteria: false
                    // })
                }

                this.setState({
                    requestSend: false
                })

                if(withoutTimeout == false && this.state.betTab == 'my_bets'){

                    setTimeout(() => {
                        this.fetchBetsHistory('', '', withoutTimeout, '');
                    }, 5000);
                }
            }.bind(this));
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
                                //console.log('TUTACTion', newData.data[ind]['bets'][index]['score'][index2]);

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
            history_type = "all";
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
        this.props.showPopUpHistory("accountUser", "history")
    }
    toggle = (type) => {
        if(!this.state.loginToken) {
            this.setState({
                quickBetSwitch: false,
                isLogin: false,
                show_modal: true
            });

            return;
        }
        if(!this.state.quickBetSwitch){
            if(Object.keys(this.state.bets).length) {
                this.props.changeProps("quickBetDialog")
            } else{
                this.props.enableQuickBet();
            }

        } else {
            if(Object.keys(this.state.quickBet).length){
                let newBets = this.state.quickBet
                this.props.disableQuickBet();
                this.props.saveBetToLocalStorage(newBets, this.state.currentTotalStake, this.state.multiCombine)
            } else{
                this.props.disableQuickBet();
            }
        }
    }

    componentWillUnmount(){
        this.mount = false;
    }

    componentDidMount() {
        this.mount = true;
        this.setState({
            multiCombine: this.props.multiCombine
        });
        if(this.state.betTab == 'my_bets'){
            this.fetchBetsHistory();
        };
        let markets = true;
        let column = "right_column";
        getEventsGroupedByColumn(this.state.odds, markets, column, function(err, data) {
            if (!err) {
                this.setState({
                    data: data
                })
            } else {
                console.log('err future events', err)
            }
        }.bind(this))
    }


    componentDidUpdate(prevProps, prevState) {

        if (window.localStorage.getItem("currentStake") != null || window.localStorage.getItem("currentStake") != undefined) {
            let currentStake = JSON.parse(window.localStorage.getItem("currentStake"));
           // $('.selected_bet').removeClass("selected_bet")
            for (var i in currentStake.bets) {
                $('.'+i).addClass("selected_bet")
            }
        }
        // if (this.state.betTab == "my_bets") {
        //     if (this.state.myBetsTab != prevState.myBetsTab) {
        //         this.fetchBetsHistory(this.state.history_type, this.state.period_type, this.state.myBetsTab)
        //     }
        // }
    }

    componentWillReceiveProps(nextProps) {
        // console.log("actionPanel", this.state)
            let countBets = Object.keys(nextProps.bets).length;
           // //console.log(countBets)
            if (countBets >= 2) {
                 let equal=[];

                let arrUnic = {};
                let equalMatch = false;
                let combineMin = null;
                let combineMax = null;
                Object.keys(nextProps.bets).map((bet, index) => {
                    let {combineMin:nextCombineMin, combineMax:nextCombineMax} = nextProps.bets[bet].info
                    if(combineMin === null && nextCombineMin !== null){
                        combineMin = nextCombineMin
                    }
                    if(combineMin !== null && nextCombineMin !== null && nextCombineMin > combineMin){
                        combineMin = nextCombineMin
                    }
                    if(combineMax === null && nextCombineMax !== null){
                        combineMax = nextCombineMax
                    }
                    if(combineMax !== null && nextCombineMax !== null && nextCombineMax < combineMax){
                        combineMax = nextCombineMax
                    }

                    arrUnic[nextProps.bets[bet].info.id] = [];
                });
                if(this.state.combineMin != combineMin || this.state.combineMax != combineMax){
                    this.setState({
                        combineMin,combineMax
                    })
                }
                // console.log("7777777777", combineMin,combineMax)
                Object.keys(nextProps.bets).map((bet, index) => {
                    Object.keys(arrUnic).map((unic) => {
                        if (unic == nextProps.bets[bet].info.id) {
                            arrUnic[unic].push(nextProps.bets[bet])
                        }
                    })
                });

                equalMatch =  Object.keys(arrUnic).some((unic) => {
                    if (arrUnic[unic].length > 1) {
                        return true;
                    }
                })

                Object.keys(arrUnic).map((val) => {
                    if (arrUnic[val].length > 1) {
                        arrUnic[val].map((el) => {
                            equal.push(el.bet.Id)
                        })
                    }
                })

                let differntMatch = false;
                if (Object.keys(arrUnic).length > 1) {
                    differntMatch = true;
                }

                this.setState({
                     equalMatch: equalMatch,
                     differntMatch: differntMatch,
                     equalBetId: equal
                });


            }
            var total = nextProps.currentTotalStake;
        var multiCombine =  nextProps.multiCombine;

        this.setState({
            bets: nextProps.bets,
            currentTotalStake: nextProps.currentTotalStake,
            multiCombine: nextProps.multiCombine,
            countBets: countBets,
            odds: nextProps.odds
        });
      //  //console.log('part 1', nextProps, countBets)

        if (Object.keys(this.state.bets).length != countBets) {
             total = 0;

            for (var i in nextProps.bets) {
                let st = 0;
                if (nextProps.bets[i].stake != "") {
                    st = nextProps.bets[i].stake;
                }
                total += parseFloat(st);
            }
            ////console.log('1',total);
            ////console.log('count',countBets);


            if (countBets == 0) {
                multiCombine = {};

            } else {

                ////console.log('456', nextProps.multiCombine);

                this.state.multiCombine = nextProps.multiCombine;

                let combineUpdate = {};
                for (var ind in this.state.multiCombine) {
                    ////console.log('index', ind)
                    let selectedBet = ind;
                    if (countBets >= parseInt(ind)) {
                        let bet = this.props.calculationBet(countBets, selectedBet);
                        ////console.log('factorial',bet)
                        let res = (this.state.multiCombine[ind].stake * bet).toFixed(2);
                        this.state.multiCombine[ind] = {
                            res: res,
                            stake: this.state.multiCombine[ind].stake
                        }
                        combineUpdate[ind] = this.state.multiCombine[ind];
                    }
                }

                multiCombine = combineUpdate;
                //console.log('combineUpdate', combineUpdate)

                for (var x in multiCombine) {
                    total += parseFloat(multiCombine[x].res);
                }



            }
            //console.log('part 2', nextProps, total, multiCombine)
//             let mCombineforStorage =  Object.keys(multiCombine).length ? multiCombine : nextProps.multiCombine;
//
// //console.log('1:', total)
// //console.log('2:', nextProps.currentTotalStake)
// //console.log('3:', this.state.multiCombine)
//
//             this.saveBetToLocalStorage(nextProps.bets, total, multiCombine);
            ////console.log('part 2', total, multiCombine)


        }
        let betTab;
        if (nextProps.loginToken === false) {
           betTab = "bet_slip"
        } else {
           betTab = this.state.betTab
        }
        this.setState({
            allEvents: nextProps.allEvents,
            multiCombine: multiCombine,
            currentTotalStake: total,
            loginToken: nextProps.loginToken,
            betTab: betTab,
            unsettled_bets_count: nextProps.unsettled_bets,
            quickBetSwitch: nextProps.quickBetEnabled,
            quickBet: nextProps.quickBet,
            odds: nextProps.odds,
            maxSelections: nextProps.maxSelections,
            stretch: nextProps.stretch,
        });
        let markets = true;
        let column = "right_column";
        getEventsGroupedByColumn(nextProps.odds, markets, column, function(err, data) {
            if (!err) {
                this.setState({
                    data: data
                })
            } else {
                console.log('err future events', err)
            }
        }.bind(this))
    }

    resizeBlock=()=>{
        this.props.resizeBlock();
        // if (this.state.stretch) {
        //     this.setState({
        //         stretch: false
        //     });
        // } else {
        //     this.setState({
        //         stretch: true
        //     });
        // }

    }

    removeBet(id) {
        this.props.removeBet(id);
    }

    removeBetFromState = (type, betId) => {
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
        this.setState(newState);
    }


    betMax() {

    }

    MaxLengthInput(event) {
        let e = event.target;
        e.value = e.value.replace(/[^\d,.]*/g, '')
            .replace(/([.])[.]+/g, '$1')
            .replace(/^[^\d]*(\d+([.,]\d{0,5})?).*$/g, '$1');//можно вводить цыфры и не больше одной точки
        if (e.value.indexOf(".") != '-1') {
            e.value = e.value.substring(0, e.value.indexOf(".") + 3); // цифра 4, устанавливает количество цифр после запятой,
            // т.е. если 4, то максимум 3 цифры после запятой
        }
    }

    createStake(stake, obj, index) {
        // console.log("666666666666",stake, obj, index)
        let bet = obj.PriceDecimal;
        var res;
        let total = 0;
        if (stake.length) {
            res = parseFloat(stake) * parseFloat(bet);
            this.state.bets[index]['resStake'] = res.toFixed(2);
            this.state.bets[index]['stake'] = stake;
            for (var i in this.state.bets) {
                let correctStake = 0;
                if (this.state.bets[i].stake != "") {
                    correctStake =  this.state.bets[i].stake
                }
                total += parseFloat(correctStake);
            }
            // this.state.bets.forEach((bet) => {
            //      total += parseFloat(bet.stake);
            //  });

            for (var x in this.state.multiCombine) {
                total += parseFloat(this.state.multiCombine[x].res);
            }
            
            this.setState({
                bets: this.state.bets,
                currentTotalStake: total,
                stakeNull: false
            })
        } else {
            this.state.bets[index]['resStake'] = "";
            this.state.bets[index]['stake'] = "";

            for (var i in this.state.bets) {
                let correctStake = 0;
                if (this.state.bets[i].stake != "") {
                    correctStake =  this.state.bets[i].stake
                }
                total += parseFloat(correctStake);
            }

            for (var x in this.state.multiCombine) {
                total += parseFloat(this.state.multiCombine[x].res);
            }
            // this.state.bets.forEach((bet) => {
            //     total += parseFloat(bet.stake);
            // });

            this.setState({
                bets: this.state.bets,
                currentTotalStake: total,
                stakeNull: false
            })
        }
        $(".greenBorder").removeClass("greenBorder")
        $(".combine-1").val("");
        window.localStorage.removeItem("stakeNull");
        this.props.saveBetToLocalStorage(this.state.bets, total, this.state.multiCombine)
    }

    createStakeCombine(res, stake, multiCombine) {
        let total = 0;
        let correctStake = 0;

        if (multiCombine == null ) {

            for (var i in this.state.bets) {




                this.state.bets[i].resStake = (parseFloat(this.state.bets[i].bet.PriceDecimal) * stake).toFixed(2);
                if (stake != "") {
                    this.state.bets[i].stake = stake;
                } else {
                    this.state.bets[i].stake = 0;
                }

                total += parseFloat(this.state.bets[i].stake);
            }


            if (Object.keys(this.state.multiCombine).length) {
                for (var i in this.state.multiCombine) {

                    total +=   parseFloat(this.state.multiCombine[i].res);
                }
            }
//console.log('oneTotal', total)
            multiCombine = this.state.multiCombine;


        } else {
            let valueCombineBet;
            Object.keys(multiCombine).forEach((val) => valueCombineBet = multiCombine[val]);

            if (valueCombineBet == 0) {
                for (var i in this.state.bets) {
                    if (this.state.bets[i].stake != "") {
                        correctStake =  this.state.bets[i].stake
                    }
                    total += parseFloat(correctStake);
                }
                for (var x in this.state.multiCombine) {
                    total += parseFloat(this.state.multiCombine[x].res);
                }

            } else {

                for (var i in multiCombine) {
                    this.state.multiCombine[i] = multiCombine[i];
                }
//console.log('aaaaa', this.state.multiCombine)
                for (var x in this.state.multiCombine) {
                    total += parseFloat(this.state.multiCombine[x].res);
                }

                //console.log('total1', total)
                //console.log('currentbets', this.state.bets)
                let xxxx = 0;

                for (var i in this.state.bets) {
                    let temStake = 0;
                    if (this.state.bets[i].stake != "") {
                        temStake =  this.state.bets[i].stake
                    }
                    total += parseFloat(temStake);
                    xxxx += parseFloat(temStake);
                }
                //  //console.log('total state', this.state.currentTotalStake)
               // total = this.state.currentTotalStake + total;
                //console.log('xxxx', xxxx)
                //console.log('total', total)
            }

        }

//console.log('last', this.state.bets);
        $(".greenBorder").removeClass("greenBorder")
        this.props.saveBetToLocalStorage(this.state.bets, total.toFixed(2), multiCombine)
        this.setState({
            bets: this.state.bets,
            currentTotalStake: total.toFixed(2),
            multiCombine: multiCombine
        })
    }


    toggleCombine() {
        if ($('.main_combine, .extra_combine, .MultipleBets_SubHeader').hasClass("hide")) {
            $('.main_combine.hide, .extra_combine.hide, .MultipleBets_SubHeader.hide').addClass("show");
            $('.main_combine.show, .extra_combine.show, .MultipleBets_SubHeader.hide').removeClass("hide");
        } else {
            $('.main_combine.show, .extra_combine.show, .MultipleBets_SubHeader.hide').addClass("hide");
            $('.main_combine.show, .extra_combine.show, .MultipleBets_SubHeader.hide').removeClass("show");
        }

    }
    placeBet() {

        if(!this.state.loginToken){
            this.setState({
                isLogin: false,
                show_modal: true
            })
            return;
        }
        let stakeNull = false;
        let stakeNullCombine = false;

        if (parseFloat(this.state.currentTotalStake) == 0) {
            stakeNullCombine = true;
            // jQuery для подсветки ячейки
            $(".bsMultipleContainer input").addClass("greenBorderError greenBorder")
            setTimeout(function() {
                $(".bsMultipleContainer input").removeClass("greenBorderError")
            }, 5000);
        }
        Object.keys(this.state.bets).map((id) => {
            let {stake} = this.state.bets[id]
            if ((stake == "" || stake == 0) && stakeNullCombine) {
                stakeNull = true;
                // jQuery для подсветки ячейки
                $("#"+id+"-stake").addClass("greenBorderError greenBorder");
                setTimeout(function() {
                    $("#"+id+"-stake").removeClass("greenBorderError ");
                }, 1000);

            }
        })

        if(this.checkAllLimits(this.state.bets, this.state.multiCombine)){
            return;
        }
        let obj = {
            token: this.state.loginToken,
            bet: this.state.bets,
            multiCombine: [],
            total: this.state.currentTotalStake
        }
        for (var ind in this.state.multiCombine) {
            let comb = {
                type: ind,
                res: this.state.multiCombine[ind].res,
                stake: this.state.multiCombine[ind].stake,
                rate: this.props.calculationBet(Object.keys(this.state.bets).length, ind)
            }
            obj.multiCombine.push(comb)
        }

        if (stakeNull === false || stakeNullCombine === false) {
            //console.log('place bet', JSON.stringify(obj));
            $('.load_place_bet').show();
            $('.bs-Footer.accept').hide();
            $('.bs-MultipleBets, .bs-Header_RemoveAll, .single-section.bs-StandardBet').addClass("opacity")
            placeBet(obj, function (err, data) {
                if (!err) {
                    window.localStorage.removeItem('stakeNull');
                    $('.load_place_bet').hide();
                    $('.bs-MultipleBets, .bs-Header_RemoveAll, .single-section.bs-StandardBet').removeClass("opacity");
                    this.removeBet("all");
                    this.props.setUnsettledBets(data.unsettled_count);
                    this.props.setBalance();
                    this.setState({
                        betPlaced: obj
                    })
                    Object.keys(this.state.betPlaced.bet).map((ind) => {
                        if(this.state.betPlaced.bet[ind].stake.length == 0 || this.state.betPlaced.bet[ind].stake == 0){
                            $("#"+ind).hide()
                        }
                    })
                } else {
                    console.log("44444444444", err.response.data.error)
                    if("Need to accept changes." == err.response.data.error){
                        $('.load_place_bet').hide();
                        $('.bs-Footer.accept').show();
                        $('.bs-MultipleBets, .bs-Header_RemoveAll, .single-section.bs-StandardBet').removeClass("opacity")
                    } else {
                        // $('.load_place_bet').hide()
                        // $('.bs-MultipleBets, .bs-Header_RemoveAll, .single-section.bs-StandardBet').removeClass("opacity")
                        //this.removeBet("all")
                        this.setState({
                            show_modal_error: true,
                            typeError: err.response.data.error
                        })
                    }
                }
            }.bind(this))
        } else {
            let idx =  window.localStorage.getItem("stakeNull") != null ? window.localStorage.getItem("stakeNull") : 0;
            let res = parseInt(idx ) + 1;
            window.localStorage.setItem("stakeNull", res);
            if (idx >= 2) {
                this.setState({
                    stakeNull: true
                })
            }
        }

        /** PLACE BET **/

    }
    closeModal() {
        this.setState({
            show_modal: false,
        })
    }

    closeErrorModal = () => {
        $(".bs-Footer.accept ").show()
        this.setState({
            show_modal_error: false,
        })
    }

    checkAllLimits = (bets={}, multiCombine={}) => {
        let stopFunc = false
        Object.keys(bets).map((el) => {
            let {stake, info:{min=null, max=null}={}} = bets[el]
            if( stake != "" || stake != 0){
                if(max !== null && +max < +stake){
                    this.setState({
                        maxStake: true,
                        acceptChanges: true
                    })
                    stopFunc = true;
                }
                if(min !== null && +min > +stake){
                    this.setState({
                        minStake: true,
                        acceptChanges: true,
                    })
                    stopFunc = true;
                }
            }
        })

        if(Object.keys(multiCombine).length){
            Object.keys(multiCombine).map((el) => {
                console.log("1111",multiCombine[el].stake, this.state.combineMin)
                if(this.state.combineMin !== null && multiCombine[el].stake < this.state.combineMin){
                    this.setState({
                        minStake: true,
                        acceptChanges: true,
                    })
                    stopFunc = true;
                }
                if(this.state.combineMax !== null && multiCombine[el].stake > this.state.combineMax){
                    this.setState({
                        maxStake: true,
                        acceptChanges: true,
                    })
                    stopFunc = true;
                }
            })
        }

        return stopFunc? true : false
    }

    acceptChanged = () => {
        if(this.state.acceptChanges){
            if(Object.keys(this.state.bets).some((bet) => bet.changed)){
                this.props.acceptChanged();
            }
            this.updateStakeValue()
        } else{
            this.props.acceptChanged();
        }
    }

    updateStakeValue = () => {
        let {bets, multiCombine} = this.state
        Object.keys(bets).map((el) => {
            let {stake, info:{min=null, max=null}={}, bet:{Price}={}} = bets[el]
            if(max !== null && +max < +stake){
                bets[el].stake = max;
                bets[el].resStake = +max*+Price;
            }
            if(min !== null && +min > +stake){
                bets[el].stake = min;
                bets[el].resStake = +min*+Price;
            }
        })
        if(Object.keys(multiCombine).length){
            Object.keys(multiCombine).map((el) => {
                if(this.state.combineMin !== null && multiCombine[el].stake < this.state.combineMin){
                    multiCombine[el].stake = this.state.combineMin
                    multiCombine[el].res = multiCombine[el].bet * this.state.combineMin
                }
                if(this.state.combineMax !== null && multiCombine[el].stake > this.state.combineMax){
                    multiCombine[el].stake = this.state.combineMax
                    multiCombine[el].res = multiCombine[el].bet * this.state.combineMax
                }
            })
        }

        this.setState({
            acceptChanges: false,
            minStake: false,
            maxStake: false,
            bets: bets
        })
        let total = this.updateCurrentTotalStake(bets, this.state.multiCombine)
        this.props.saveBetToLocalStorage(bets, total, multiCombine)
    }

    updateCurrentTotalStake = (bets={}, multiCombine={}) => {
        let total = 0;
        Object.keys(bets).map((el) => {
            total += Number(bets[el].stake)
        })
        if(Object.keys(multiCombine).length !== 0){
            Object.keys(multiCombine).map((el) => {
                let {res} = multiCombine[el]
                total += +res
            })
        }
        return total;
    }

    changeBetTab = (tab) => {
        this.setState({
            betTab:tab
        }, () => {

            if (tab == "my_bets") {
                this.fetchBetsHistory();//this.state.history_type, this.state.period_type, this.state.myBetsTab
            }
        })
    }

    closeBetPlaced = () => {
        this.setState({
            betPlaced: false
        })
    }

    reUseTheSelections = () => {
        let multiCombine = {};
        this.state.betPlaced.multiCombine.map((combine) => {
            multiCombine[combine.type] = combine;
        });
        this.props.saveBetToLocalStorage(this.state.betPlaced.bet, this.state.betPlaced.total, multiCombine);
        this.closeBetPlaced();
    }

    showPopUpHistory = () => {
        this.props.showForm("accountUser", "history")
    }

    toggleHistoryLine(id) {
        if ($('.my_bets_actionpanel .OpenBetItem_details.id-' + id).hasClass("slow_appear")) {
            $('.my_bets_actionpanel .OpenBetItem_details.id-' + id).removeClass("slow_appear").show(200);
            $('.my_bets_actionpanel .OpenBetItem_header.hd-' + id).removeClass("header_bordered");
        } else {
            $('.my_bets_actionpanel .OpenBetItem_details.id-' + id).addClass("slow_appear").hide(200);
            $('.my_bets_actionpanel .OpenBetItem_header.hd-' + id).addClass("header_bordered");
        }
    }
    toggleQuickBetHelp = () =>{
            this.setState({helpTooltip: !this.state.helpTooltip})
    }

    resStake = (bet) => {
        return  this.state.bets[bet].resStake ? Number(this.state.bets[bet].resStake).toFixed(2) : "0.00"
    }
    changedClass = (bet) => {
        return(
            `bs-Item bs-SingleItem
             ${ this.state.differntMatch && this.state.equalMatch && this.state.equalBetId.some((el) => el == bet) ? "red_line" : ""}
             ${ typeof this.state.bets[bet].changed != "undefined" && this.state.bets[bet].changed === true  ? "oddsChange changed": ""}
             ${ typeof this.state.bets[bet].suspended != "undefined" && this.state.bets[bet].suspended === true  ? "suspended": ""}`
        )
    }
    render() {
        return(
            <div id="action_panel" className={`page_right_content  ${this.state.stretch ? "stretch" : ""}`}>
                <div className="icon_buttons">
                    {/*<div className="icon_block icon_refresh"></div>*/}
                    {/*<div className="icon_block icon_news"></div>*/}
                    {/*<div className="icon_block icon_sound"></div>*/}
                    {/*<div className="icon_block icon_live_scores"></div>*/}
                    {/*<div className="icon_block icon_search"></div>*/}
                    {/*<div className="icon_block icon_rules"></div>*/}
                    {/*<div className="icon_block icon_status"></div>*/}
                    <div className={`icon_block icon_resize`} onClick={() => this.resizeBlock()}></div>

                </div>
                <div className="bet_slip_block">
                    <div className="bet_slip_header green_header">
                        <span className={this.state.betTab == "bet_slip" ? "active" :""} onClick={()=>this.changeBetTab("bet_slip")}>Bet Slip</span>
                        {
                            this.state.loginToken ?
                                <span className={`my_bets ${this.state.betTab == "my_bets" ? "active" :""}`} onClick={()=>this.changeBetTab("my_bets")}>My Bets
                                    {this.state.unsettled_bets_count == 0 ?
                                        ""
                                        :
                                        <span className="my_bets_count">{this.state.unsettled_bets_count}</span>
                                    }

                                </span>

                                : ""
                        }
                    </div>
                    {this.state.betTab == "bet_slip" ?
                        <div className="bet_slip_container">
                            {
                                this.props.page == "in-play" ?
                                    <div className="bs-Header">
                                        <div className="bs-ChangeSlipTypeContainer">
                                            {this.props.page == "in-play" ?
                                                <div className="qb-Container">
                                                    <div className="qb-Btn"  onClick={()=>{this.toggle('quickBetSwitch')}}>
                                                        <span className="qb-Btn_Text-quick">Quick Bet</span>
                                                        <span className={`qb-Btn_Switch-${this.state.quickBetSwitch ? 'true' : 'false'} `}></span>
                                                    </div>
                                                </div>
                                                :
                                                <span></span>
                                            }
                                            {this.state.quickBetSwitch ?
                                                <div className="bs-HelpWrapper">
                                                    <div className="bs-help"
                                                         onClick={() => this.toggleQuickBetHelp()}>Help
                                                    </div>
                                                    {this.state.helpTooltip ?
                                                        <div className="bs-helpTooltip">
                                                            <div className="bs-helpTooltip_Header">Quick Single
                                                                Betting
                                                            </div>
                                                            <div className="bs-helpTooltip_Close"
                                                                 onClick={() => this.toggleQuickBetHelp()}></div>
                                                            <div className="bs-helpTooltip_List">
                                                                        <span
                                                                            className="bs-helpTooltip_List_num">1</span>
                                                                <span className="bs-helpTooltip_List_text">Click a selection</span>
                                                            </div>
                                                            <div className="bs-helpTooltip_List">
                                                                        <span
                                                                            className="bs-helpTooltip_List_num">2</span>
                                                                <span
                                                                    className="bs-helpTooltip_List_text">Enter Stake</span>
                                                            </div>
                                                            <div className="bs-helpTooltip_List">
                                                                        <span
                                                                            className="bs-helpTooltip_List_num">3</span>
                                                                <span className="bs-helpTooltip_List_text">Press 'Place Bet'</span>
                                                            </div>

                                                        </div>
                                                        : ""
                                                    }
                                                </div>
                                                :
                                                <div className="bs-BetSlipType">
                                                    <div className="bs-BetSlipType_Selection">
                                                        <div className="bs-BetSlipType_SelectionText">Standard
                                                        </div>
                                                    </div>
                                                    <div className="bs-BetSlipType_Options">
                                                        <ul className="bs-Dropdown_Items">
                                                            <li className="bs-Dropdown_Item selected">
                                                                <div
                                                                    className="bs-Dropdown_ItemText ">Standard
                                                                </div>
                                                            </li>
                                                            <li className="bs-Dropdown_Item">
                                                                <div className="bs-Dropdown_ItemText">Banker
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                        {
                                            Object.keys(this.state.bets).length ?
                                                <div className="bs-Header_RemoveAll">
                                                    <a href="#" className="bs-Header_RemoveAllLink" onClick={(e) => {
                                                        e.preventDefault();
                                                        this.removeBet('all')
                                                    }}>Remove All</a>
                                                </div>
                                                : ""
                                        }
                                    </div>
                                :
                                    Object.keys(this.state.bets).length ?
                                         <div className="bs-Header">
                                        <div className="bs-ChangeSlipTypeContainer">
                                                <div className="bs-BetSlipType">
                                                    <div className="bs-BetSlipType_Selection">
                                                        <div className="bs-BetSlipType_SelectionText">Standard
                                                        </div>
                                                    </div>
                                                    <div className="bs-BetSlipType_Options">
                                                        <ul className="bs-Dropdown_Items">
                                                            <li className="bs-Dropdown_Item selected">
                                                                <div
                                                                    className="bs-Dropdown_ItemText ">Standard
                                                                </div>
                                                            </li>
                                                            <li className="bs-Dropdown_Item">
                                                                <div className="bs-Dropdown_ItemText">Banker
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                        </div>
                                        {
                                            Object.keys(this.state.bets).length ?
                                                <div className="bs-Header_RemoveAll">
                                                    <a href="#" className="bs-Header_RemoveAllLink" onClick={(e) => {
                                                        e.preventDefault();
                                                        this.removeBet('all')
                                                    }}>Remove All</a>
                                                </div>
                                                : ""
                                        }
                                    </div>
                                        : ""
                            }

                            {
                                Object.keys(this.state.bets).length ?
                                    <div className="bet_slip_wrapper">

                                        <div className="bet_slip_full-text">

                                            <div className="single-section bs-StandardBet">
                                                <div>
                                                    {/*<div className="bs-Item bs-SingleItem suspended  oddsChange">*/}
                                                    {/*<div className="bs-SelectionRow">*/}
                                                    {/*<a href="#" className="bs-RemoveColumn_btn"></a>*/}

                                                    {/*<div className="bs-Selection">*/}
                                                    {/*<div className="bs-Selection_Desc">Akira Santillan </div>*/}
                                                    {/*<div className="bs-Selection_Details">Match Winner</div>*/}
                                                    {/*<div className="bs-Selection_Details">James Duckworth v Akira Santillan</div>*/}
                                                    {/*</div>*/}
                                                    {/*<div className="bs-OddsContainer">*/}
                                                    {/*<div className="bs-Odds">2.05</div>*/}
                                                    {/*<div className="oddsChangeHighlightWrapper">*/}
                                                    {/*<div className="oddsChangeHighlight"></div>*/}
                                                    {/*</div>*/}
                                                    {/*<div className="bs-ItemStatus">Suspended</div>*/}
                                                    {/*</div>*/}
                                                    {/*</div>*/}
                                                    {/*<div className="bs-ItemOverlay"></div>*/}
                                                    {/*<div className="stake bs-StakeData ">*/}
                                                    {/*<div className="bs-StakeAndToReturnContainer">*/}
                                                    {/*<div className="bs-Stake">*/}
                                                    {/*<input type="" className="stk bs-Stake_TextBox" placeholder = "Stake"/>*/}
                                                    {/*</div>*/}
                                                    {/*<div className="bs-StakeToReturn">*/}
                                                    {/*<div className="bs-StakeToReturn_Text">Return</div>*/}
                                                    {/*<span className="bs-StakeToReturn_Value ">0.00</span>*/}
                                                    {/*</div>*/}
                                                    {/*<div className="bs-StakeToReturnBreakDownContainer">*/}
                                                    {/*<a href="#" className=" bs-StakeToReturnBreakDownLink">To Return</a>*/}
                                                    {/*</div>*/}

                                                    {/*</div>*/}
                                                    {/*<div className="bs-BetMax">*/}
                                                    {/*<span className="bs-BetMax_Text">Bet Max</span>*/}
                                                    {/*<div className="bs-RepeatStake">*/}
                                                    {/*<span className="bs-RepeatStake_Pipe">|</span>*/}
                                                    {/*<span className="bs-RepeatStake_Text">Repeat Stake</span>*/}
                                                    {/*</div>*/}
                                                    {/*</div>*/}
                                                    {/*</div>*/}
                                                    {/*</div>*/}
                                                    {/*<div className="bs-Item bs-SingleItem oddsChange">*/}
                                                    {/*<div className="bs-SelectionRow">*/}
                                                    {/*<a href="#" className="bs-RemoveColumn_btn"></a>*/}

                                                    {/*<div className="bs-Selection">*/}
                                                    {/*<div className="bs-Selection_Desc">Akira Santillan </div>*/}
                                                    {/*<div className="bs-Selection_Details">Match Winner</div>*/}
                                                    {/*<div className="bs-Selection_Details">James Duckworth v Akira Santillan</div>*/}
                                                    {/*</div>*/}
                                                    {/*<div className="bs-OddsContainer">*/}
                                                    {/*<div className="bs-Odds">2.05</div>*/}
                                                    {/*<div className="oddsChangeHighlightWrapper">*/}
                                                    {/*<div className="oddsChangeHighlight"></div>*/}
                                                    {/*</div>*/}
                                                    {/*<div className="bs-ItemStatus">Suspended</div>*/}
                                                    {/*</div>*/}
                                                    {/*</div>*/}
                                                    {/*<div className="bs-ItemOverlay"></div>*/}
                                                    {/*<div className="stake bs-StakeData ">*/}
                                                    {/*<div className="bs-StakeAndToReturnContainer">*/}
                                                    {/*<div className="bs-Stake">*/}
                                                    {/*<input type="" className="stk bs-Stake_TextBox" placeholder = "Stake"/>*/}
                                                    {/*</div>*/}
                                                    {/*<div className="bs-StakeToReturn">*/}
                                                    {/*<div className="bs-StakeToReturn_Text">Return</div>*/}
                                                    {/*<span className="bs-StakeToReturn_Value ">0.00</span>*/}
                                                    {/*</div>*/}
                                                    {/*<div className="bs-StakeToReturnBreakDownContainer">*/}
                                                    {/*<a href="#" className=" bs-StakeToReturnBreakDownLink">To Return</a>*/}
                                                    {/*</div>*/}

                                                    {/*</div>*/}
                                                    {/*<div className="bs-BetMax">*/}
                                                    {/*<span className="bs-BetMax_Text">Bet Max</span>*/}
                                                    {/*<div className="bs-RepeatStake">*/}
                                                    {/*<span className="bs-RepeatStake_Pipe">|</span>*/}
                                                    {/*<span className="bs-RepeatStake_Text">Repeat Stake</span>*/}
                                                    {/*</div>*/}
                                                    {/*</div>*/}
                                                    {/*</div>*/}
                                                    {/*</div>*/}
                                                    {Object.keys(this.state.bets).map((bet, index) => {

                                                        return  <div key={`${this.state.bets[bet].info.id}-bet-${index}`} className={`${this.changedClass(bet)}`}>
                                                            <div className="bs-SelectionRow">
                                                                <a href="#" className="bs-RemoveColumn_btn" onClick={(e) => { e.preventDefault(); this.removeBet(bet)}}></a>

                                                                <div className="bs-Selection">
                                                                    {/*<div className="bs-Selection_Desc">*/}
                                                                        {/*{  this.state.bets[bet].typeBet == "X" ? "Draw" :*/}
                                                                            {/*this.state.bets[bet].typeBet == 1 || this.state.bets[bet].typeBet == 2 ?*/}
                                                                            {/*this.state.bets[bet].info.participants.map((team) => {*/}
                                                                                {/*if (team.Position == this.state.bets[bet].typeBet) {*/}
                                                                                    {/*return team.Name*/}
                                                                                {/*}*/}
                                                                            {/*})*/}
                                                                                {/*: this.state.bets[bet].typeBet*/}

                                                                        {/*}*/}
                                                                    {/*</div>*/}
                                                                    <div className="bs-Selection_Desc">
                                                                            {this.state.bets[bet].bet.Name}
                                                                            {this.state.bets[bet].bet.Line == null? "" :
                                                                                <span className = "bs-Selection_Desc-Line">{this.state.bets[bet].bet.Line}</span>}
                                                                    </div>
                                                                    <div className="bs-Selection_Details">{typeof this.state.bets[bet].info.alias == 'string' && this.state.bets[bet].info.alias.length? this.state.bets[bet].info.alias : this.state.bets[bet].info.typeMarketBet}</div>
                                                                    <div className="bs-Selection_Details">{`${this.state.bets[bet].info.participants[0]['Name']} v ${this.state.bets[bet].info.participants[1]['Name']}`}</div>
                                                                </div>
                                                                <div className="bs-OddsContainer">
                                                                    <div className="bs-Odds">{this.state.bets[bet].bet.Price}</div>
                                                                    <div className="oddsChangeHighlightWrapper">
                                                                        <div className="oddsChangeHighlight"></div>
                                                                    </div>
                                                                    <div className="bs-ItemStatus">Suspended</div>
                                                                </div>
                                                            </div>
                                                            <div className="bs-ItemOverlay"></div>
                                                            <div className="stake bs-StakeData ">
                                                                <div className="bs-StakeAndToReturnContainer">
                                                                    <div className="bs-Stake">
                                                                        <input type=""
                                                                               className="stk bs-Stake_TextBox"
                                                                               onInput={(e) => this.MaxLengthInput(e)}
                                                                               id={`${this.state.bets[bet].bet.Id}-stake`}
                                                                               placeholder = "Stake"
                                                                               onChange={(e) => this.createStake(e.target.value, this.state.bets[bet].bet, bet)}
                                                                               value={this.state.bets[bet].stake}/>
                                                                    </div>
                                                                    <div className="bs-StakeToReturn">
                                                                        <div className="bs-StakeToReturn_Text">Return</div>
                                                                        <span className="bs-StakeToReturn_Value ">{this.resStake(bet)}</span>
                                                                    </div>
                                                                    {/*<div className="bs-StakeToReturnBreakDownContainer">*/}
                                                                    {/*<a href="#" className=" bs-StakeToReturnBreakDownLink">To Return</a>*/}
                                                                    {/*</div>*/}

                                                                </div>
                                                                <div className="bs-BetMax">
                                                                    <span className="bs-BetMax_Text" onClick={() => this.betMax()}>Bet Max</span>
                                                                    { /*
                                                                <div className="bs-RepeatStake">
                                                                    <span className="bs-RepeatStake_Pipe">|</span>
                                                                    <span className="bs-RepeatStake_Text">Repeat Stake</span>
                                                                </div>
                                                                */ }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    })
                                                    }


                                                </div>

                                            </div>
                                            {this.state.differntMatch ?
                                                <div className="bs-MultipleBets">
                                                    {
                                                        Object.keys(this.state.bets).length > 1 ?
                                                    <div className="bsMultipleContainer">
                                                        <div className="bs-MultipleBets_Header">
                                                            <a href="#" className="bs-MbHeader_Link" onClick={(e) => {e.preventDefault(); this.toggleCombine()}}>Show all multiples</a>
                                                        </div>
                                                        <div className="MultipleBets_SubHeader hide">
                                                            <div className="bs-MultipleBets_SubHeaderContainer">
                                                                <span className="bs-MultipleBets_BettypeHeader">Bet Type</span>
                                                                <span className="bs-MultipleBets_StakeHeader">Unit Stake</span>
                                                                <span className="bs-MultipleBets_EwHeader"></span>
                                                            </div>
                                                        </div>
                                                            <MultiplyCombine equalMatch={this.state.equalMatch} maxLengthInput={(e) => this.MaxLengthInput(e)} showTreblesModal={(obj) => this.props.showTreblesModal(obj) } count={this.state.countBets} multiCombine={this.state.multiCombine} bets={this.state.bets} createStakeCombine={(res, stake, multiCombine) => this.createStakeCombine(res, stake, multiCombine)} calculationBet={(count, type) => this.props.calculationBet(count, type)}/>
                                                    </div>
                                                            :

                                                            ""
                                                    }

                                                </div>

                                                :
                                                <span></span>
                                            }

                                            {
                                                this.state.differntMatch && this.state.equalMatch ?
                                                    <div className="bs-Alert red_line">
                                                        <div className="bs-Alert_Msg">Multiple options are restricted for the highlighted selections</div>
                                                    </div>
                                                    : ""

                                            }
                                            {
                                                this.state.stakeNull ?
                                                    <div className="bs-Alert ">
                                                        <div className="bs-Alert_Msg">Please enter a stake</div>
                                                    </div>
                                                    : ""
                                            }
                                            {
                                                this.state.maxSelections ?
                                                    <div className="bs-Alert ">
                                                        <div className="bs-Alert_Msg">Maximum 14 Selections already made</div>
                                                    </div>
                                                    : ""
                                            }

                                            {
                                                this.state.maxStake ?
                                                    <div className="bs-Alert ">
                                                        <div className="bs-Alert_Msg">Where highlighted, the stake is above our maximum. Press 'Accept Changes' to update the amount</div>
                                                    </div>
                                                    : ""
                                            }
                                            {
                                                this.state.minStake ?
                                                    <div className="bs-Alert ">
                                                        <div className="bs-Alert_Msg">Where highlighted, the stake is below our minimum. Press 'Accept Changes' to update the amount</div>
                                                    </div>
                                                    : ""
                                            }


                                    <div className="bs-FeedBack load_place_bet">
                                        <a href="javascript:void(0)" className="bs-BtnWrapper">
                                            <div className="bs-Btn">
                                                <span className="bs-BtnText_NoMessage"></span>
                                                <span className="bs-BtnText_NoMessageSpinner"></span>
                                            </div>
                                        </a>
                                    </div>

                                <div className="bs-Footer accept ">
                                    {
                                        (Object.keys(this.state.bets).some((bet) => {
                                           return (this.state.bets[bet].changed != "undefined" && this.state.bets[bet].changed === true) || this.state.acceptChanges
                                        })) ?

                                                        <div>
                                                            {this.state.acceptChanges ? "" :
                                                                <div className="bs-Alert">
                                                                    <div className="bs-Alert_Msg">The line, odds or
                                                                        availability of your selections has changed.
                                                                    </div>
                                                                </div>
                                                            }
                                                            <a href="javascript: void(0)" className="acceptChanges bs-BtnWrapper" onClick={() => this.acceptChanged()}>
                                                                <div className="bs-Btn">
                                                                    Accept Changes
                                                                </div>
                                                            </a>
                                                        </div>
                                                        :
                                                        <a href="#" className="placeBet bs-BtnWrapper" onClick={(e) => {e.preventDefault(); this.placeBet()}}>
                                                            <div className="bs-Btn">
                                                                <span className="bs-TotalStake totalStake">{this.state.currentTotalStake ? this.state.currentTotalStake : "0.00"}</span>
                                                                <span className="bs-IsoCurrency isoCurrency">USD</span>
                                                                <span className="bs-BtnText">Place Bet</span>
                                                            </div>
                                                        </a>

                                                }

                                            </div>
                                        </div>

                                    </div>
                                    :
                                    this.state.betPlaced ?
                                        <div className="bet_placed">
                                            <div className="bet_placed_header">
                                                <p className="bet_placed_header_text">Bet Ref QE3832567971F</p>
                                                <p className="header_BetSlipType"> Standard</p>
                                            </div>
                                            <div className="bet_placed_sub_header_wrapp">
                                                <div className="bet_placed_sub_header">
                                                    <span className="bet_placed_sub_header_text">Bet Placed</span>
                                                </div>
                                                <div className="bet_placed_sub_header_link" onClick={() => this.closeBetPlaced()}>Done</div>
                                            </div>
                                            <div className="bet_placed_Retain" onClick={() => this.reUseTheSelections()}>
                                                <div className="header_retain_link">Reuse these selections</div>
                                            </div>
                                            <div className="header_MatchAlerts">
                                                <label>
                                                    <span className="header_MatchAlertsHeader-text">Get live alerts on this match</span>
                                                    <input className="checkbox" type="checkbox" name="checkbox-match"/>
                                                    <span className="checkbox-match"></span>
                                                </label>
                                            </div>
                                            {

                                                Object.keys(this.state.betPlaced.bet).map((id, index) => {
                                                    let oldName = Number(this.state.betPlaced.bet[id].bet.oldName) - 1;
                                                    let commandName = typeof this.state.betPlaced.bet[id].info.participants[oldName] == 'object' &&
                                                        typeof this.state.betPlaced.bet[id].info.participants[oldName].Name != 'undefined' ?
                                                        this.state.betPlaced.bet[id].info.participants[oldName].Name : '';

                                                    let marketName = this.state.betPlaced.bet[id].bet.Name == "X" || this.state.betPlaced.bet[id].bet.Name == "Draw" ? "Draw" : commandName;

                                                    return  <div key={`${id}-${index}-placed`} className="single-section StandardBet" id ={id}>
                                                        <div className="selectionRowContainer">
                                                        <div className="selectionRow">
                                                            <div className="selectionName">{this.state.betPlaced.bet[id].bet.Name}</div>
                                                            <div className="selectionOdds">{this.state.betPlaced.bet[id].bet.Price}</div>
                                                        </div>
                                                        <div className="selectionDetails">{typeof this.state.betPlaced.bet[id].info.alias == 'string' && this.state.betPlaced.bet[id].info.alias.length? this.state.betPlaced.bet[id].info.alias : this.state.betPlaced.bet[id].info.typeMarketBet}</div>
                                                        <div className="selectionDetails">{`${this.state.betPlaced.bet[id].info.participants[0].Name} v ${this.state.betPlaced.bet[id].info.participants[1].Name}`}</div>
                                                        </div>
                                                            {
                                                            this.state.betPlaced.bet[id].stake != "" || this.state.betPlaced.bet[id].stake !== 0 ?
                                                                <div className="stakeToReturnContainer">
                                                                    <div className="UnitStake">
                                                                        <div className="unitStake_Title">Stake</div>
                                                                        <div className="unitStake_Content">{this.state.betPlaced.bet[id].stake}</div>
                                                                    </div>
                                                                    <div className="toReturnWin">
                                                                        <div className="toReturnWin_Title">To Return</div>
                                                                        <div className="toReturnWin_Content">{this.state.betPlaced.bet[id].resStake}</div>
                                                                    </div>
                                                                </div>
                                                                : <span></span>
                                                        }


                                                    </div>
                                                })
                                            }
                                            {
                                                ////console.log('yyyyyyyyyyyyy', this.state.betPlaced)
                                                Object.keys(this.state.betPlaced.multiCombine).map((id, index) => {
                                                    //console.log('hhhhhhhhhhhhhhhh', this.state.betPlaced.multiCombine[id])
                                                    return  <div key={`${id}-${index}-placed`} className="single-section StandardBet">
                                                        <div className="selectionDetails">{`${this.state.betPlaced.multiCombine[id].rate} x ${this.state.betPlaced.multiCombine[id].stake} Doubles`}</div>

                                                                <div className="stakeToReturnContainer">
                                                                    <div className="UnitStake">
                                                                        <div className="unitStake_Title">Stake</div>
                                                                        <div className="unitStake_Content">{this.state.betPlaced.multiCombine[id].stake}</div>
                                                                    </div>
                                                                    <div className="toReturnWin">
                                                                        <div className="toReturnWin_Title">To Return</div>
                                                                        <div className="toReturnWin_Content">{this.state.betPlaced.multiCombine[id].res}</div>
                                                                    </div>
                                                                </div>

                                                    </div>
                                                })
                                            }




                                            <div className="bet_placed_total">
                                                Total Stake
                                                <span className="bet_placed_total_total">{this.state.betPlaced.total}</span>
                                            </div>

                                        </div>
                                        :
                                    <div className="EmptyMsg">Click a price to add a selection</div>


                            }

                            {
                                !this.state.loginToken && this.state.show_modal ?
                                    <Modal_Login closeModal={() => this.closeModal()}
                                                 setToken={(token) => this.props.setToken(token)}
                                                 loginToken={this.state.loginToken}/>
                                    : ""
                            }
                            {
                                this.state.show_modal_error ?
                                    <ModalCustomError closeErrorModal={() => this.closeErrorModal()}
                                    typeError = {this.state.typeError}/>
                                    : ""
                            }


                        </div>
                    :""}
                    {this.state.betTab == "my_bets" ?
                        <div className="my_bets_container my_bets_actionpanel">
                            <nav className="my_bets_nav">
                                <ul>
                                    <li className={`my_bets_links ${this.state.myBetsTab =="cash_out" ? "active" :""}`} onClick={()=>this.changeMyBetTab("cash_out")}>Cash Out</li>
                                    <li className={`my_bets_links ${this.state.myBetsTab =="live" ? "active" :""}`} onClick={()=>this.changeMyBetTab("live")}>Live</li>
                                    <li className={`my_bets_links ${this.state.myBetsTab =="unsettled" ? "active" :""}`} onClick={()=>this.changeMyBetTab("unsettled")}>Unsettled</li>
                                    <li className={`my_bets_links ${this.state.myBetsTab =="settled" ? "active" :""}`} onClick={()=>this.changeMyBetTab("settled")}>Settled</li>
                                    <li className={`my_bets_links ${this.state.myBetsTab =="all" ? "active" :""}`} onClick={()=>this.changeMyBetTab("all")}>All</li>
                                </ul>
                            </nav>
                            {
                                this.state.myBetsTab == "cash_out" ?
                                  <Cash_out
                                      allEvents={this.state.allEvents}
                                      removeBetFromState={(type, betId) => this.removeBetFromState(type, betId)}
                                      count={this.state.cash_out.count}
                                      showMore={()=> this.showMore()}
                                      setBalance={() => this.props.setBalance()}
                                      loginToken={this.state.loginToken}
                                      setUnsettledBets={(count) => this.props.setUnsettledBets(count)}
                                      updateProfile={(data) => this.props.updateProfile(data)}
                                      toggleHistoryLine={(id) => this.toggleHistoryLine(id)}
                                      bets={this.state.cash_out.data}
                                      combineName={this.combineName}/>
                                :""
                            }
                            {this.state.myBetsTab == "live" ?
                                <Live
                                    allEvents={this.state.allEvents}
                                    count={this.state.live_bets.count}
                                    showMore={()=> this.showMore()}
                                    toggleHistoryLine={(id) => this.toggleHistoryLine(id)}
                                    bets={this.state.live_bets.data}
                                    combineName={this.combineName}/>
                                :""
                            }
                            {this.state.myBetsTab == "unsettled" ?
                                <Unsettled
                                    allEvents={this.state.allEvents}
                                    count={this.state.unsettled_bets.count}
                                    showMore={()=> this.showMore()}
                                    toggleHistoryLine={(id) => this.toggleHistoryLine(id)}
                                    bets={this.state.unsettled_bets.data}
                                    combineName={this.combineName}/>
                                :""
                            }
                            {this.state.myBetsTab == "settled" ?
                                <Settled
                                    count={this.state.settled_bets.count}
                                    showMore={()=> this.showMore()}
                                    toggleHistoryLine={(id) => this.toggleHistoryLine(id)}
                                    bets={this.state.settled_bets.data}
                                    combineName={this.combineName}
                                    showPopUpHistory={() => this.showPopUpHistory()}/>
                                : ""
                            }
                            {
                                this.state.myBetsTab == "all" ?
                                   <All_info
                                       allEvents={this.state.allEvents}
                                       count={this.state.all_info.count}
                                       showMore={()=> this.showMore()}
                                       toggleHistoryLine={(id) => this.toggleHistoryLine(id)}
                                       bets={this.state.all_info.data}
                                       combineName={this.combineName}
                                       showPopUpHistory={() => this.showPopUpHistory()}/>
                                    : ""
                            }

                        </div>
                    :""}

                </div>
                <Link to="/live_casino" className="play_banner">
                    <div className="banner_link_block">
                        <div> Live Dealers </div>
                        <div>Play Now</div>
                    </div>
                    <div className="img_banner_block">
                        <img src="/assets/img/140x58px-LiveDealers_V8R.png" alt="LiveDealers"/>
                    </div>
                </Link>
                <div className="choice_game_block">
                    <Link to={{
                        pathname: '/casino/casino_home/game',
                        search: 'id=556'
                        }} className="choice_game">
                        <img src="/assets/img/139x50px-Blackjack_V8L.png" alt="Blackjack"/>
                            <span>Blackjack</span>
                    </Link>
                    <Link to={{
                        pathname: '/casino/casino_home/game',
                        search: 'id=830'
                        }} className="choice_game">
                        <img src="/assets/img/139x50px-Roulette_V8L.png" alt="Roulette"/>
                            <span>Roulette</span>
                    </Link>
                    <Link to={{
                        pathname: '/casino/casino_home/game',
                        search: 'id=825'
                    }} className="choice_game">
                        <img src="/assets/img/139x50px-HiLoGambler_V8L.png" alt="Hi-Lo Gambler"/>
                            <span>Hi-Lo Gambler</span>
                    </Link>
                </div>
                <div className="info_block">
                    {/*<div className="info_details">*/}
                        {/*<div className="info_details_header">2 Goals Ahead Early Payout Offer</div>*/}
                        {/*<div className="info_details_content">*/}
                            {/*<div className="info_details_img">*/}
                                {/*<img src="/assets/img/ex_ChampsLeague_EarlyPayoutOffer_0818.jpg" alt="info_details"/>*/}
                            {/*</div>*/}
                            {/*<div className="info_details_text">*/}
                                {/*Earn up to 100% more. New & eligible customers only. T&Cs apply.*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="info_details">*/}
                        {/*<div className="info_details_header">Euro Soccer Bonus </div>*/}
                        {/*<div className="info_details_content">*/}
                            {/*<div className="info_details_img">*/}
                                {/*<img src="/assets/img/ex_90x50_EuroSoccerBonus_0518.jpg" alt="info_details"/>*/}
                            {/*</div>*/}
                            {/*<div className="info_details_text">*/}
                                {/*Earn up to 100% more. New & eligible customers only. T&Cs apply.*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    <div className="info_details" onClick={()=>this.props.showForm('liveStreaming', 'siteFeatures')}>
                        <div className="info_details_header">Bet Builder</div>
                        <div className="info_details_content">
                            <div className="info_details_img">
                                <img src="/assets/img/ex_90x50_BetBuilder_v2ArsenalvManCity_eng.jpg" alt="info_details"/>
                            </div>
                            <div className="info_details_text">
                                Create your own personalised Soccer bet. T&Cs apply.
                            </div>
                        </div>
                    </div>
                </div>

                {  this.props.page == "sports" ?
                    <RightColumn
                        odds={this.state.odds}
                        data={this.state.data}
                        setSelectedEventFromOtherPage={(event) => this.props.setSelectedEventFromOtherPage(event)}
                        addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}
                    />
                : ""
                }

            </div>
        )

    }
}

export default ActionPanel;
