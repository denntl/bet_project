import React from 'react';
import {Switch, Route, BrowserRouter, Redirect} from 'react-router-dom';
import {browserHistory} from 'react-router';
import Header from './header';
import Footer from './footer';
import Sports from './pages/sports';
import In_play from './pages/in_play';
import Casino from './pages/casino';
import LiveCasino from './pages/live_casino';
import Poker from './pages/poker';
import Vegas from './pages/vegas';
import Bingo from './pages/bingo';
import Games from './pages/games';
import Modal_Bet from "./shared/modal/modal_bet";
import {getEvents, getSports, getCheckBets, getEventsLivescore, getFutureEventsHighlights} from "./helpers/data";
import LostLogin from "./shared/modal/lost_login";
import JoinNow from "./shared/modal/join_now";
import MakeDeposit from "./shared/modal/makeDeposit";
import AccountUser from "./pages/user_account/account_user";
import FailedLogin from "./shared/modal/failed_login";
import TransferBalance from "./shared/modal/transferBalance";
import {getBalance, getProfile} from "./helpers/data_account";
import AccountHelper from "./pages/user_account/account_helper";
import ChooseMarket from "./shared/modal/choose_market";
import ActivateBetSlip from "./shared/modal/activateBetSlip";
import MyBets from "./pages/my_bets";
import FreeSpin from "./shared/modal/free_spin";
import Soccer from "./pages/sports/soccer";
import ResponsibleGamblingMain from "./shared/modal/responsibleGamblingMain";
import LiveStreaming from "./shared/modal/liveStreaming";
import FormAndStats from "./shared/modal/formAndStats";
import AudioModal from "./shared/modal/audioModal";
import UsSportStats from "./shared/modal/usSportStats";
import Career from "./shared/modal/career";
import Affiliates from "./shared/modal/affiliates";
import GreyhoundForm from "./shared/modal/greyhoundForm";
import LiveScore from "./shared/modal/liveScore";
import ScoreResults from "./shared/modal/scoreResults";
import HorseForm from "./shared/modal/horseForm";
import RacingArchive from "./shared/modal/racingArchive";
import AustralianHorseForm from "./shared/modal/australianHorseForm";
import IrishHorseForm from "./shared/modal/irishHorseForm";




class App extends React.Component {

    betsInterval = null;
    alertsInterval = null;
    constructor(props) {
        super(props);
        let token;
        if (window.localStorage.getItem('loginToken') != undefined) {
            token = window.localStorage.getItem('loginToken');
        } else {
            token = false;
        }

        let currentPage, updateEvents, locationPathname, arr;
        locationPathname = location.pathname.split("/")[1]
        arr = ["","in-play", "my-bets", "sports"].indexOf(locationPathname)
        if (arr != -1) {
            currentPage = "sports";
        }
        if(locationPathname == "live_casino"){
            currentPage = "casino"
        } else {
            currentPage = locationPathname;
        }
        this.state = {
            selectedEventFromOtherPage: null,
            bets: {},
            currentTotalStake: 0,
            multiCombine: {},
            //updateEvents: updateEvents,
            currentPage: currentPage,
            profile: {},
            odds: typeof window.localStorage.getItem("oddsType") == 'string'
                && window.localStorage.getItem("oddsType").length
                  ? window.localStorage.getItem("oddsType") : "decimal",
            loginToken: token,
            lostLogin: false,
            joinNow: false,
            unsettled_bets: 0,
            makeDeposit: false,
            accountUser: false,
            accountHelper:false,
            activePartAccountUser: false,
            activePartLiveStreaming: false,
            activePartHelp: false,
            activePartHelpInner:false,
            activePartResponsible: false,
            activePartFormAndStats:false,
            activePartCareer:false,
            activePartAffiliates:false,
            activePartGreyhoundForm:false,
            activePartHorseForm:false,
            activePartIrishHorseForm:false,
            activePartAustralianHorseForm:false,
            activePartLiveScore:false,
            account_user:false,
            localAlerts:JSON.parse(window.localStorage.getItem("notifications")) === null? {} : JSON.parse(window.localStorage.getItem("notifications")),
            livescoreAllAlerts: {},
            failedLogin: false,
            chooseMarket:false,
            isCasinoPage:true,
            activateBetSlip:true,
            transferBalance:false,
            responsibleGambling:false,
            liveStreaming:false,
            formAndStats:false,
            usSportsStats:false,
            audioModal:false,
            careerBet:false,
            affiliates:false,
            greyhoundForm:false,
            horseForm:false,
            liveScore:false,
            scoreResults:false,
            racingArchive:false,
            irishHorseForm:false,
            australianHorseForm:false,
            quickBetEnabled: window.localStorage.getItem("quickBet") == 'enable',
            quickBet: {},
            allEvents: [],
            maxSelections: false,
            sports: {
                other: [],
                6046: [],
                621569:[],
                687888: [],
                687893: [],
                48242: [],
                687896: [],
                154830:[],
                35232: [],
                291987: [],
                389537: [],
                530129: [],
                35706:[],
                388764:[],
                261354: [],
                165874: [],
                154914: [],
                274792: [],
                307126: [],
                154919: [],
                154923: [],
                54094: [],
                131506: [],
                262622: [],
                265917: [],
                687887: [],
                687894: [],
                687895: [],
                1149093: [],
                46957: [],
                687897: [],
                452674: [],
                35709: [],
                274791: [],
                687889: [],
                687890: []
            },
            allSports: [],
            showUserBal: false
        }
    }

    setSelectedEventFromOtherPage = (eventObj) => {

        console.log('setSelectedEventFromOtherPage', eventObj)

        this.setState({
            selectedEventFromOtherPage: eventObj
        });
    }

    /** Избавляемся от лишних параллельных запросов **/
    getEventsData =()=>{
        if (location.pathname == "/sports" || location.pathname == "/" || location.pathname == "/in-play" || location.pathname == "/in-play/event_view" || location.pathname == "/in-play/overview" ) {
            getEvents(this.state.odds, function (err, events) {
                if (!err) {
                    let sports = this.state.sports;
                    Object.keys(events).forEach((ind) => {
                        sports[parseInt(ind)] = events[ind];
                    });
                    this.setState({
                        allEvents: events,
                        sports: sports
                    });
                }
                //setTimeout(() => {
                //if (this.state.updateEvents) {
                    this.getEventsData();
                //}
                //}, 5000);
            }.bind(this), 2);
        } else {
            /** Лучше пока раз в 3 сек проверять сменилась ли сраница, нежели сравнивать миллион раз в DidUpdate сложную логику **/
            setTimeout(() => {
                this.getEventsData();
            }, 3000);
        }
    }

    componentWillUnmount() {
        clearInterval(this.betsInterval);
    }

    catchChanges = (newLivescore) => {
        let {livescoreAllAlerts:oldLivescore} = this.state
        let localAlerts = JSON.parse(window.localStorage.getItem("notifications"));
        let newLocalAlerts = {};
        if( Object.keys(oldLivescore).length === 0){
            this.state.livescoreAllAlerts = newLivescore;
            return;
        }
        // console.log("________________________________________")
        // console.log("newLivescore",newLivescore)
        // console.log("oldLivescore",oldLivescore)
        // console.log("localAlerts",localAlerts)
        // console.log("________________________________________")
        if(Object.keys(localAlerts).length !== Object.keys(newLivescore).length){
            Object.keys(localAlerts).map((el) => {
                if(newLivescore[el]){
                    newLocalAlerts[el] = localAlerts[el]
                } else {
                    // let total = `${oldLivescore[el].Scoreboard.Results[0].Value} : ${oldLivescore[el].Scoreboard.Results[1].Value}`
                    let body = `${localAlerts[el].participants[0].Name} @ ${localAlerts[el].participants[1].Name} `
                    this.notifyMe(`Match is finished`, body)
                }
            })
            this.saveAlertsToLocalStorage(newLocalAlerts)
        } else{
            newLocalAlerts = localAlerts
        }
        if(Object.keys(newLocalAlerts).length !== 0){
            Object.keys(newLocalAlerts).map((el) => {
                if(newLocalAlerts[el].sportId === 6046 && oldLivescore[el]){
                    this.checkFootballChanges(newLocalAlerts[el], oldLivescore[el], newLivescore[el], el)
                    this.state.livescoreAllAlerts[el] = newLivescore[el]
                }
                if(newLocalAlerts[el].sportId === 48242 && oldLivescore[el]){
                    this.checkBasketballChanges(newLocalAlerts[el], oldLivescore[el], newLivescore[el], el)
                    this.state.livescoreAllAlerts[el] = newLivescore[el]
                }
                if(newLocalAlerts[el].sportId === 54094 && oldLivescore[el]){
                    this.checkTennisChanges(newLocalAlerts[el], oldLivescore[el], newLivescore[el], el)
                    this.state.livescoreAllAlerts[el] = newLivescore[el]
                }
            })
        }
    }

    checkTennisChanges = (localAlerts, oldLivescore, newLivescore, element) => {
        console.log("________________________________________")
        console.log("newLivescore",newLivescore)
        console.log("oldLivescore",oldLivescore)
        console.log("localAlerts",localAlerts)
        console.log("________________________________________")
        this.state.livescoreAllAlerts[element] = newLivescore

        let title
        let firstTeam = localAlerts.participants[0].Name
        let secondTeam = localAlerts.participants[1].Name
        let total = `${newLivescore.Scoreboard.Results[0].Value} : ${newLivescore.Scoreboard.Results[1].Value}`
        let name = `${firstTeam} @ ${secondTeam}`
        let body = `${total}`

        if(oldLivescore.Scoreboard.Results[0].Value != newLivescore.Scoreboard.Results[0].Value ||
            oldLivescore.Scoreboard.Results[1].Value != newLivescore.Scoreboard.Results[1].Value){
            this.notifyMe(name, body)
        }

    }
    checkBasketballChanges = (localAlerts, oldLivescore, newLivescore, element) => {
        // console.log("________________________________________")
        // console.log("newLivescore",newLivescore)
        // console.log("oldLivescore",oldLivescore)
        // console.log("localAlerts",localAlerts)
        // console.log("________________________________________")
        this.state.livescoreAllAlerts[element] = newLivescore
        let newIncidents = newLivescore.incidents
        let oldIncidents = oldLivescore.incidents

        if(Object.keys(newLivescore.Periods).length >  Object.keys(oldLivescore).length) {
            Object.keys(newLivescore.Periods).map((el) => {
                if(!oldLivescore.Periods[el]){
                    let title
                    if(localAlerts.alerts.start_of_qtr){title = `Start of ${el+1} Quarter` }
                    if(localAlerts.alerts.start_of_half && el == 2){title = `Start of second half`}
                    if(localAlerts.alerts.result_of_qtr){title = `Result of ${el} quarter: ${newLivescore.Periods[el-1].Results[1].Value} : ${newLivescore.Periods[el-1].Results[1].Value}`}
                    let firstTeam = localAlerts.participants[0].Name
                    let secondTeam = localAlerts.participants[1].Name
                    let total = `${newLivescore.Scoreboard.Results[0].Value} : ${newLivescore.Scoreboard.Results[1].Value}`
                    let name = `${firstTeam} @ ${secondTeam} (${total}) `
                    let body = `${title}`
                    this.notifyMe(name, body)
                }
            })
        }

        if(Object.keys(newIncidents).length == Object.keys(oldIncidents).length){
            return;
        } else{
            Object.keys(newIncidents).map((el) => {
                if(!oldIncidents[el]){
                    let title = null
                    switch (Number(newIncidents[el].type)){
                        case 30:
                            title = localAlerts.alerts.point_by_point? "Three points": null
                            break;
                        case 28:
                            title = localAlerts.alerts.point_by_point? "Two points" : null
                            break;
                        default: title = null
                    }
                    console.log("555555", newIncidents[el].type)

                    if(title !== null){
                        let firstTeam = localAlerts.participants[0].Name
                        let secondTeam = localAlerts.participants[1].Name
                        let currentTeam = Number(newIncidents[el].position) == 1? firstTeam : secondTeam
                        let total = `${newLivescore.Scoreboard.Results[0].Value} : ${newLivescore.Scoreboard.Results[1].Value}`
                        let name = `${firstTeam} @ ${secondTeam} (${total}) `
                        let body = `${title} - ${currentTeam}`
                        this.notifyMe(name, body)
                    }
                }
            })
        }
    }
    checkFootballChanges = (localAlerts, oldLivescore, newLivescore, element) => {
        this.state.livescoreAllAlerts[element] = newLivescore
        let newIncidents = newLivescore.incidents
        let oldIncidents = oldLivescore.incidents
        if(Object.keys(newIncidents).length == Object.keys(oldIncidents).length){
            return;
        } else{
            Object.keys(newIncidents).map((el) => {
                if(!oldIncidents[el]){
                    let title = null
                    switch (Number(newIncidents[el].type)){
                        case 1:
                            title = localAlerts.alerts.corner? "Corner": null
                            break;
                        case 6:
                            title = localAlerts.alerts.yellow_card? "Yellow card" : null
                            break;
                        case 7:
                            title = localAlerts.alerts.red_card? "Red card" : null
                            break;
                        case 8:
                            title = localAlerts.alerts.penalty? "Penalty" : null
                            break;
                        case 9:
                            title = localAlerts.alerts.goal? "Goal" : null
                            break;
                        case 10:
                            title = localAlerts.alerts.substitutions? "Substitutions" : null
                            break;
                        case 40:
                            title = localAlerts.alerts.penalty_missed? "Missed penalty" : null
                            break;
                        default: title = null
                    }
                    console.log("555555", newIncidents[el].type)

                    if(title !== null){
                        let firstTeam = localAlerts.participants[0].Name
                        let secondTeam = localAlerts.participants[1].Name
                        let currentTeam = Number(newIncidents[el].position) == 1? firstTeam : secondTeam
                        let total = `${newLivescore.Scoreboard.Results[0].Value} : ${newLivescore.Scoreboard.Results[1].Value}`
                        let name = `${firstTeam} @ ${secondTeam} (${total}) `
                        let body = `${title} - ${currentTeam}`
                        this.notifyMe(name, body)
                    }
                }
            })
        }

    }

    notifyMe = (title, body) => {
        console.log("notify", title)
        if (Notification.permission !== "granted") {//!this.state.matchAlerts[event]
            Notification.requestPermission();
            console.log("notify granded")
        } else {
            let notification = new Notification(title, {
                icon: '/img/logo.jpg',
                body: body,
            });
            notification.onclick = function () {
            };
        }
    }

    getEventsLivescore = (localAlerts) => {
        let arr =[];
        let livescore = {};
        Object.keys(localAlerts).map((elem) => {
            arr.push(elem)
        })
        let string = arr.join(',')
        getEventsLivescore(string, function(err, data) {
            if (!err) {
                this.catchChanges(data)
            } else {
                console.log('err eventsLivescore', err)
            }
        }.bind(this))

    }

    componentDidMount() {
        this.alertsInterval = setInterval(() => {
            let localAlerts = JSON.parse(window.localStorage.getItem("notifications"))? JSON.parse(window.localStorage.getItem("notifications")) : null;
            if(localAlerts !== null && Object.keys(localAlerts).length !== 0){
                this.getEventsLivescore(localAlerts)
            }
        }, 5000)
        this.betsInterval = setInterval(() => {
            if(this.state.loginToken){
                this.setBalance()
            }
            let bets = this.state.quickBetEnabled? this.state.quickBet : this.state.bets
            let betsForState = this.state.quickBetEnabled? "quickBet" : "bets"
            if(Object.keys(bets).length) {
                let check_bets = Object.keys(bets).join(",")
                getCheckBets(check_bets, (err, data) => {
                    if(!err) {
                        // console.log("444444444444", data)

                        let needToUpdateBetState = false;

                        Object.keys(bets).map((id) => {
                            /**
                             * Если изменился коефициент - меняем стейт + добавляем changed
                             */
                            // console.log("11111111111", this.state.bets)
                            // console.log("22222222222", data)
                            if( bets[id].bet.PriceDecimal != data[id].PriceDecimal ||
                                bets[id].bet.PriceAmerican != data[id].PriceAmerican ||
                                bets[id].bet.PriceFraction != data[id].PriceFraction){
                                    bets[id]['changed'] = true;
                                    console.log("changed1")
                                    bets[id].bet.PriceDecimal = data[id].PriceDecimal;
                                    bets[id].bet.PriceAmerican = data[id].PriceAmerican;
                                    bets[id].bet.PriceFraction = data[id].PriceFraction;
                                    /**
                                     * заполняем Price в зависимости от выбранного odds type
                                     */
                                    switch (this.state.odds) {
                                        case 'decimal':
                                        case 'Decimal':
                                            bets[id].bet.Price = data[id].PriceDecimal;
                                            break;
                                        case 'american':
                                        case 'American':
                                            bets[id].bet.Price = data[id].PriceAmerican;
                                            break;
                                        case 'fraction':
                                        case 'Fraction':
                                            bets[id].bet.Price = data[id].PriceFraction;
                                            break;
                                    }
                                    needToUpdateBetState = true;
                            }
                            /**
                             * Если изменился статус на 2,3 - добавляем suspended
                             */
                            if(data[id].Status == 3|| data[id].Status == 2){
                                bets[id]['changed'] = true;
                                bets[id]['suspended'] = true;
                                console.log("changed2")

                                bets[id].bet.Status = data[id].Status;
                                needToUpdateBetState = true;
                            } else if(bets[id]['suspended'] == true && data[id].Status == 1){
                                bets[id]['changed'] = true;
                                bets[id]['suspended'] = false;
                                console.log("changed3")
                                bets[id].bet.Status = data[id].Status;
                                needToUpdateBetState = true;
                            }
                        })

                        if(needToUpdateBetState){
                            this.setState({
                                [betsForState]: bets
                            });
                            betsForState == "bets"?
                                this.saveBetToLocalStorage(bets, this.state.currentTotalStake, this.state.multiCombine)
                                :
                                ""
                        }
                    }
                });
            }
        }, 3000);

        let currentStake = this.getCurrentStake();
        if (currentStake) {
            this.setState({
                bets: currentStake.bets,
                currentTotalStake: currentStake.currentTotalStake,
                multiCombine: currentStake.multiCombine
            })
        }
        /** Вынес из исключений потому что там приходят данные по отображаемым маркетам **/
        getSports('', (err, data) => {
            this.setState({
                allSports: data
            })
        });

        this.getEventsData();
        if (this.state.loginToken) {
            getProfile(this.state.loginToken, function(err, data) {
                if (!err) {
                    this.setState({
                        profile: data,
                        unsettled_bets: data.unsettled_count,
                    })
                    this.changeOdds(data.odds_format);
                } else {
                    this.removeToken();
                }
            }.bind(this))
        }

        // для удаления из бетслипа при окончании игры
        // let tempArr = this.state.sports;
        // let newArr = [];
        // setInterval(() => {
        //     tempArr[6046].map((event, index) => {
        //         if (event.FixtureId != 4263049) {
        //             newArr.push(event)
        //         }
        //     })
        //     tempArr[6046] = newArr
        //
        //
        //     this.setState({
        //         sports: tempArr
        //     })
        // }, 10000);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.odds != this.state.odds) {
            getEvents(this.state.odds, function(err, events) {

                let sports =  this.state.sports;

                Object.keys(events).forEach((ind) => {
                    sports[parseInt(ind)] = events[ind];
                });

                this.setState({
                    allEvents: events,
                    sports: sports
                });

            }.bind(this));
        }
        //if (this.state.updateEvents != prevState.updateEvents) {

                //this.getEventsData();
       // }

    }

    changeOdds = (odd) => {
        console.log("changeOdds",odd)
        this.setState({
            odds: odd
        })
        window.localStorage.setItem("oddsType", odd);
    }

    changeMaxSelections = (value) => {
        this.setState({
            maxSelections: value
        })
    }

    showTreblesModal = (obj) => {
        this.setState({
            show_modal: true,
            combineCalculation: obj
        })
    }

    closeModal = (type = null) => {
        if (type == null) {
            this.setState({
                show_modal: false,

            })
        } else {
            if(type == "transferBalance") {
                console.log(type)
                this.setState({
                    [type]: !this.state[type]
                })
            }
            if (type == "lost") {
                this.setState({
                    lostLogin: false
                })
            }
            if (type == "join") {
                this.setState({
                    joinNow: false

                })
            }
            if (type == "makeDeposit"){
                this.setState({
                    makeDeposit: false
                })
            }
            if (type == "accountUser"){
                this.setState({
                    accountUser: false
                })
            }
            if(type == "accountHelper"){
                this.setState({
                    accountHelper:false
                })
            }
            if(type == "chooseMarket"){
                this.setState({
                    chooseMarket:false
                })
            }
            if(type == "activateBetSlip"){
                this.setState({
                    activateBetSlip:false
                })
            }
            if(type == "freeSpin"){
                this.setState({
                    isCasinoPage:false
                })
            }
            if(type == "responsibleGambling"){
                this.setState({
                    responsibleGambling:false
                })
            }
            if(type == "liveStreaming"){
                this.setState({
                    liveStreaming:false
                })
            }
            if(type == "formAndStats"){
                this.setState({
                    formAndStats:false
                })
            }
            if(type == "usSportsStats"){
                this.setState({
                    usSportsStats:false
                })
            }
            if(type == "audioModal"){
                this.setState({
                    audioModal:false
                })
            }
            if(type == "careerBet"){
                this.setState({
                    careerBet:false
                })
            }
            if(type == "affiliates"){
                this.setState({
                    affiliates:false
                })
            }
            if(type == "greyhoundForm"){
                this.setState({
                    greyhoundForm:false
                })
            }
            if(type == "horseForm"){
                this.setState({
                    horseForm:false
                })
            }
            if(type == "irishHorseForm"){
                this.setState({
                    irishHorseForm:false
                })
            }
            if(type == "liveScore"){
                this.setState({
                    liveScore:false
                })
            }
            if(type == "scoreResults"){
                this.setState({
                    scoreResults:false
                })
            }
            if(type == "racingArchive"){
                this.setState({
                    racingArchive:false
                })
            }
            if(type == "australianHorseForm"){
                this.setState({
                    australianHorseForm:false
                })
            }


        }

    }

    failedLoginModalShow=(status)=>{
        if (status === false) {
            $('.loginBtn').show();
            $('.loginBtn.load').hide();
        }
        this.setState({
            failedLogin: status ? true : false
        })
    }

    showForm = (type, kind, sub) => {
        if(type == "transferBalance") {
            this.setState({
                transferBalance: true
            })
        }
        if (type == "lost") {
            this.setState({
                lostLogin: true
            })
        }
        if (type == "join") {
            this.setState({
                joinNow: true
            })
        }
        if (type == "makeDeposit"){
            this.setState({
                makeDeposit: true
            })
        }
        if (type == "accountUser"){

            let activePartAccountUser = false;

            if (kind != "undefined") {
                activePartAccountUser =  kind
            }

            this.setState({
                accountUser: true,
                activePartAccountUser: activePartAccountUser
            })
        }
        if (type == "accountHelper"){
            let activePartHelp = false;
            let activePartHelpInner = false;

            if (kind != "undefined") {
                activePartHelp =  kind;
            }
            if (sub != "undefined") {
                activePartHelpInner = sub
            }
            this.setState({
                accountHelper:true,
                activePartHelp: activePartHelp,
                activePartHelpInner: activePartHelpInner
            })
        }
        if(type == "chooseMarket"){
            this.setState({
                chooseMarket:true
            })
        }
        if(type == "responsibleGambling"){
            let activePartResponsible = false;

            if (kind != "undefined") {
                activePartResponsible =  kind
            }
            this.setState({
                responsibleGambling:true,
                activePartResponsible: activePartResponsible
            })
        }
        if(type == "liveStreaming"){
            let activePartLiveStreaming = false;

            if (kind != "undefined") {
                activePartLiveStreaming =  kind
            }
            this.setState({
                liveStreaming:true,
                activePartLiveStreaming: activePartLiveStreaming
            })
        }
        if(type == "formAndStats"){
            let activePartFormAndStats = false;

            if (kind != "undefined") {
                activePartFormAndStats =  kind
            }
            this.setState({
                formAndStats:true,
                activePartFormAndStats: activePartFormAndStats
            })
        }
        if(type == "usSportsStats"){
            this.setState({
                usSportsStats:true
            })
        }
        if(type == "liveScore"){
            let activePartLiveScore = false;

            if (kind != "undefined") {
                activePartLiveScore =  kind
            }
            this.setState({
                liveScore:true,
                activePartLiveScore: activePartLiveScore
            })
        }
        if(type == "scoreResults"){
            this.setState({
                scoreResults:true
            })
        }
        if(type == "audioModal"){
            this.setState({
                audioModal:true
            })
        }
        if(type == "scoreResults"){
            this.setState({
                scoreResults:true
            })
        }
        if(type == "racingArchive"){
            this.setState({
                racingArchive:true
            })
        }
        if (type == "careerBet"){

            let activePartCareer = false;

            if (kind != "undefined") {
                activePartCareer =  kind
            }

            this.setState({
                careerBet: true,
                activePartCareer: activePartCareer
            })
        }
        if (type == "affiliates"){

            let activePartAffiliates = false;

            if (kind != "undefined") {
                activePartAffiliates =  kind
            }

            this.setState({
                affiliates: true,
                activePartAffiliates:  activePartAffiliates
            })
        }
        if (type == "greyhoundForm"){

            let activePartGreyhoundForm = false;

            if (kind != "undefined") {
                activePartGreyhoundForm =  kind
            }

            this.setState({
                greyhoundForm: true,
                activePartGreyhoundForm:  activePartGreyhoundForm
            })
        }
        if (type == "horseForm"){

            let activePartHorseForm = false;

            if (kind != "undefined") {
                activePartHorseForm =  kind
            }

            this.setState({
                horseForm: true,
                activePartHorseForm:  activePartHorseForm
            })
        }
        if (type == "irishHorseForm"){

            let activePartIrishHorseForm = false;

            if (kind != "undefined") {
                activePartIrishHorseForm  =  kind
            }

            this.setState({
                irishHorseForm: true,
                activePartIrishHorseForm:  activePartIrishHorseForm
            })
        }
        if (type == "australianHorseForm"){

            let activePartAustralianHorseForm = false;

            if (kind != "undefined") {
                activePartAustralianHorseForm =  kind
            }

            this.setState({
                australianHorseForm: true,
                activePartAustralianHorseForm: activePartAustralianHorseForm
            })
        }

    }

    setToken = (token) => {
        window.localStorage.setItem("loginToken", token);
        getProfile(token, function(err, data) {
            if (!err) {
                console.log("profile", data)
                this.setState({
                    profile: data,
                    unsettled_bets: data.unsettled_count,
                    odds: data.odds_format
                })
            }
        }.bind(this))
        this.setState({
            loginToken: token
        })
    }

    removeToken = () => {
        window.localStorage.removeItem("loginToken")
        this.setState({
            loginToken: false,
            profile: {}
        })
    }

    updateProfile = (obj) => {
        this.state.profile[obj.key] = obj.value;
        this.setState({
            profile: this.state.profile,
        })
        if (obj.key == "odds_format") {
            this.setState({
                odds: obj.value
            })
            window.localStorage.setItem("oddsType", obj.value)

        }
    }

    updateBalance = (obj) => {
        this.state.profile.balance = obj;
        this.setState({
            profile: this.state.profile,
        })
    }

    saveBetToLocalStorage(bets, total, multiCombine) {
        this.setState({
            bets: bets,
            currentTotalStake: total,
            multiCombine: multiCombine
        })
        let currentStake = {
            bets: bets,
            currentTotalStake: total,
            multiCombine: multiCombine
        };
        window.localStorage.setItem("currentStake", JSON.stringify(currentStake));
    }

    saveAlertsToLocalStorage = (localAlerts) => {
        console.log('saveAlertsToLocalStorage', localAlerts)
        this.setState({localAlerts})
        window.localStorage.setItem("notifications", JSON.stringify(localAlerts));
    }

    getCurrentStake() {
        if (window.localStorage.getItem("currentStake") != null || window.localStorage.getItem("currentStake") != undefined) {
            let arr = JSON.parse(window.localStorage.getItem("currentStake"));
            // let refBets = {};
            // for (let x in arr.bets) {
            //     console.log("@@@@@@@@@@@@@", typeof x)
            //     refBets[x + ""] = arr.bets[x];
            // }
            // arr.bets = refBets;
            return arr
        } else {
            return false
        }
    }

    setUnsettledBets = (count=0) => {
            this.setState({
                unsettled_bets: count
            })
    }
    changePage = (name) => {
        if (name != "sports") {
            this.setState({
                currentPage: name,
                //updateEvents: false
            })
        } else {
            this.setState({
                currentPage: name,
                //updateEvents: true
            })
        }
    }

    setBalance = () => {
        getBalance(this.state.loginToken, (err, data) => {
            if (!err) {
                this.state.profile.balance = data.balance;
               this.setState({
                profile: this.state.profile
               })
            } else {
                console.log('err getbalance', err)
            }
        })
    }

    changeStateQuickBet = (quickBetNew) => {
        this.setState({
            quickBet: quickBetNew
        })
    }



    render() {
            return (
            <BrowserRouter history={browserHistory}>
                <div>
                    <Header
                        changeOdds={(odd) => this.changeOdds(odd)}
                        odds={this.state.odds}
                        showForm={(type, kind) => this.showForm(type, kind)}
                        loginToken={this.state.loginToken}
                        failedLoginModalShow={(status)=>this.failedLoginModalShow(status)}
                        removeToken={() => this.removeToken()}
                        setToken={(token) => this.setToken(token)}
                        profile={this.state.profile}
                        updateProfile={(obj) => this.updateProfile(obj)}
                        unsettled_bets={this.state.unsettled_bets}
                        changePage={(name) => this.changePage(name)}
                        currentPage={this.state.currentPage}
                        setBalance={() => this.setBalance()}
                    />
                                <Switch>
                                    <Route  exact path="/"      render={() => <Sports
                                        setBalance={() => this.setBalance()}
                                        unsettled_bets={this.state.unsettled_bets}
                                        updateProfile={(obj) => this.updateProfile(obj)}
                                        setUnsettledBets={(count) => this.setUnsettledBets(count)}
                                        showForm={(type, kind) => this.showForm(type, kind)}
                                        saveBetToLocalStorage={(bets, total, multiCombine) =>this.saveBetToLocalStorage(bets, total, multiCombine)}
                                        loginToken={this.state.loginToken}
                                        setToken={(token) => this.setToken(token)}
                                        allEvents={this.state.allEvents}
                                        allSports={this.state.allSports}
                                        sports={this.state.sports}
                                        footer={<Footer  showForm={(type, kind, sub) => this.showForm(type, kind, sub)}/>}
                                        odds={this.state.odds}
                                        showTreblesModal={(obj) => this.showTreblesModal(obj)}
                                        bets={this.state.bets}
                                        currentTotalStake={this.state.currentTotalStake}
                                        multiCombine={this.state.multiCombine}
                                        selectedEventFromOtherPage={this.state.selectedEventFromOtherPage}
                                        maxSelections={this.state.maxSelections}
                                        changeMaxSelections={(value) => this.changeMaxSelections(value)}
                                        setSelectedEventFromOtherPage={(event) => this.setSelectedEventFromOtherPage(event)}
                                    />} />
                                    <Route  path="/sports"      render={() => <Sports
                                        setBalance={() => this.setBalance()}
                                        unsettled_bets={this.state.unsettled_bets}
                                        updateProfile={(obj) => this.updateProfile(obj)}
                                        setUnsettledBets={(count) => this.setUnsettledBets(count)}
                                        showForm={(type, kind) => this.showForm(type, kind)}
                                        saveBetToLocalStorage={(bets, total, multiCombine) =>this.saveBetToLocalStorage(bets, total, multiCombine)}
                                        loginToken={this.state.loginToken}
                                        setToken={(token) => this.setToken(token)}
                                        allEvents={this.state.allEvents}
                                        allSports={this.state.allSports}
                                        sports={this.state.sports}
                                        footer={<Footer showForm={(type, kind, sub) => this.showForm(type, kind, sub)}/>}
                                        odds={this.state.odds}
                                        showTreblesModal={(obj) => this.showTreblesModal(obj)}
                                        bets={this.state.bets}
                                        currentTotalStake={this.state.currentTotalStake}
                                        multiCombine={this.state.multiCombine}
                                        maxSelections={this.state.maxSelections}
                                        changeMaxSelections={(value) => this.changeMaxSelections(value)}
                                        selectedEventFromOtherPage={this.state.selectedEventFromOtherPage}
                                        setSelectedEventFromOtherPage={(event) => this.setSelectedEventFromOtherPage(event)}
                                    />}/>
                                    <Route  path="/in-play"     render={() => <In_play
                                        localAlerts={this.state.localAlerts}
                                        setBalance={() => this.setBalance()}
                                        unsettled_bets={this.state.unsettled_bets}
                                        updateProfile={(obj) => this.updateProfile(obj)}
                                        setUnsettledBets={(count) => this.setUnsettledBets(count)}
                                        saveBetToLocalStorage={(bets, total, multiCombine) =>this.saveBetToLocalStorage(bets, total, multiCombine)}
                                        saveAlertsToLocalStorage={(alerts) =>this.saveAlertsToLocalStorage(alerts)}
                                        loginToken={this.state.loginToken}
                                        setToken={(token) => this.setToken(token)}
                                        odds={this.state.odds}
                                        footer={<Footer  showForm={(type, kind, sub) => this.showForm(type, kind, sub)}/>}
                                        allEvents={this.state.allEvents}
                                        allSports={this.state.allSports}
                                        sports={this.state.sports}
                                        showTreblesModal={(obj) => this.showTreblesModal(obj)}
                                        bets={this.state.bets}
                                        currentTotalStake={this.state.currentTotalStake}
                                        multiCombine={this.state.multiCombine}
                                        showForm={(type, kind) => this.showForm(type, kind)}
                                        quickBet={this.state.quickBet}
                                        maxSelections={this.state.maxSelections}
                                        changeMaxSelections={(value) => this.changeMaxSelections(value)}
                                        changePropsApp={(value)=>this.changeMaxSelections(value)}
                                        quickBetEnabled={this.state.quickBetEnabled}
                                        changeStateQuickBet={(quickBetArr) => this.changeStateQuickBet(quickBetArr)}
                                        setSelectedEventFromOtherPage={(event) => this.setSelectedEventFromOtherPage(event)}
                                    />}/>
                                    <Route  path="/casino"      render={() => <Casino loginToken={this.state.loginToken} footer={<Footer showForm={(type, kind, sub) => this.showForm(type, kind, sub)}/>}/>}/>
                                    <Route  path="/live_casino" render={() => <LiveCasino loginToken={this.state.loginToken} />} />
                                    <Route  path="/games"       render={() => <Games/>}/>
                                    <Route  path="/poker"       render={() => <Poker/>}/>
                                    {/*<Route  path="/vegas"       render={() => <Vegas/>}/>*/}
                                    <Route  path="/bingo"       render={() => <Bingo loginToken={this.state.loginToken}/> }/>
                                    {
                                        this.state.loginToken && (location.pathname == "/sports" || location.pathname == "/" || location.pathname == "/in-play" || location.pathname == "/my_bets")  ?
                                            <Route  path="/my_bets"     render={() =>
                                                <MyBets allEvents={this.state.allEvents}
                                                        setBalance={() => this.setBalance()}
                                                        updateProfile={(obj) => this.updateProfile(obj)}
                                                        unsettled_bets_count={this.state.unsettled_bets}
                                                        setToken={(token) => this.setToken(token)}
                                                        setUnsettledBets={(count) => this.setUnsettledBets(count)}
                                                        loginToken={this.state.loginToken} showForm={(type, kind) => this.showForm(type, kind)}
                                                        showTreblesModal={(obj) => this.showTreblesModal(obj)}
                                                        odds={this.state.odds}
                                                        maxSelections={this.state.maxSelections}
                                                        changeMaxSelections={(value) => this.changeMaxSelections(value)}
                                                />}/>
                                            : <Redirect to="/" />
                                    }
                                </Switch>
                    {/*<Footer />*/}
                    {this.state.show_modal ?
                        <div className="Modal_wrapp">
                            <Modal_Bet closeModal={() => this.closeModal()} combineCalculation={this.state.combineCalculation}/>
                        </div>
                        : ""
                    }
                    { this.state.joinNow ?
                        <div className="Modal_wrapp">
                            <JoinNow
                                closeModal = {(type) => this.closeModal(type)}
                                setToken={(token) => this.setToken(token)}
                               />
                        </div>
                        : ""
                    }
                    {
                        this.state.lostLogin  ?
                            <div className="Modal_wrapp">
                                <LostLogin
                                    closeModal = {(type) => this.closeModal(type)}
                                    setToken={(token) => this.setToken(token)}
                                />
                            </div>
                            : ""
                    }
                    {
                        this.state.makeDeposit ?
                            <div className="Modal_wrapp make_dep">
                                <MakeDeposit closeModal = {(type) => this.closeModal(type)}/>
                            </div>
                            : ""
                    }
                    {
                        this.state.accountUser ?
                            <div className="Modal_wrapp">
                                <AccountUser
                                    currentPage={this.state.currentPage}
                                    loginToken={this.state.loginToken}
                                    closeModal = {(type) => this.closeModal(type)}
                                    activePartAccountUser={this.state.activePartAccountUser}
                                    profile={this.state.profile}
                                    showUserBal={this.state.showUserBal}
                                    setBalance={() => this.setBalance()}
                                />
                            </div>
                            : ""
                    }
                    {
                        this.state.failedLogin ?
                            <div className="Modal_wrapp">
                                <FailedLogin setToken={(token) => this.setToken(token)} failedLoginModalShow={(status)=>this.failedLoginModalShow(status)} />
                            </div>
                            : ""
                    }
                    {
                        this.state.accountHelper ?
                            <div className="Modal_wrapp">
                                <AccountHelper
                                    closeModal = {(type) => this.closeModal(type)}
                                    activePartHelp ={this.state.activePartHelp}
                                    activePartHelpInner ={this.state.activePartHelpInner}
                                />
                            </div>
                            : ""
                    }

                    {
                        this.state.chooseMarket ?
                            <div className="Modal_wrapp">
                                <ChooseMarket closeModal = {(type) => this.closeModal(type)}/>

                            </div>
                        :""

                    }
                    {
                        this.state.transferBalance?
                            <div className="Modal_wrapp">
                                <TransferBalance closeModal = {(type) => this.closeModal(type)}
                                                 loginToken = {this.state.loginToken}
                                                 updateBalance = {(obj) => this.updateBalance(obj)}/>
                            </div>
                            :""

                    }

                    {
                        this.state.responsibleGambling ?
                            <div className="Modal_wrapp">
                                <ResponsibleGamblingMain
                                    closeModal = {(type) => this.closeModal(type)}
                                    activePartResponsible={this.state.activePartResponsible}
                                />
                            </div>
                            :""

                    }
                    {
                        this.state.liveStreaming ?
                            <div className="Modal_wrapp">
                                <LiveStreaming
                                    closeModal = {(type) => this.closeModal(type)}
                                    activePartLiveStreaming ={this.state.activePartLiveStreaming}
                                />
                            </div>
                            :""

                    }
                    {
                        this.state.formAndStats ?
                            <div className="Modal_wrapp">
                                <FormAndStats
                                    closeModal = {(type) => this.closeModal(type)}
                                    activePartFormAndStats = {this.state.activePartFormAndStats}
                                />
                            </div>
                            :""

                    }
                    {
                        this.state.careerBet ?
                            <div className="Modal_wrapp">
                                <Career
                                    closeModal = {(type) => this.closeModal(type)}
                                    activePartCareer = {this.state.activePartCareer}
                                />
                            </div>
                            :""

                    }
                    {
                        this.state.affiliates ?
                            <div className="Modal_wrapp">
                                <Affiliates
                                    closeModal = {(type) => this.closeModal(type)}
                                    activePartAffiliates = {this.state.activePartAffiliates}
                                />
                            </div>
                            :""

                    }
                    {
                        this.state.usSportsStats ?
                            <div className="Modal_wrapp">
                                <UsSportStats
                                    closeModal = {(type) => this.closeModal(type)}
                                />
                            </div>
                            :""

                    }
                    {
                        this.state.audioModal ?
                            <div className="Modal_wrapp">
                                <AudioModal
                                    closeModal = {(type) => this.closeModal(type)}
                                />
                            </div>
                            :""

                    }
                    {
                        this.state.liveScore ?
                            <div className="Modal_wrapp">
                                <LiveScore
                                    closeModal = {(type) => this.closeModal(type)}
                                    activePartLiveScore = {this.state.activePartLiveScore}
                                />
                            </div>
                            :""

                    }
                    {
                        this.state.scoreResults ?
                            <div className="Modal_wrapp">
                                <ScoreResults
                                    closeModal = {(type) => this.closeModal(type)}
                                />
                            </div>
                            :""

                    }
                    {
                        this.state.racingArchive ?
                            <div className="Modal_wrapp">
                                <RacingArchive
                                    closeModal = {(type) => this.closeModal(type)}
                                />
                            </div>
                            :""

                    }
                    {
                        this.state.greyhoundForm ?
                            <div className="Modal_wrapp">
                                <GreyhoundForm
                                    closeModal = {(type) => this.closeModal(type)}
                                    activePartGreyhoundForm = {this.state.activePartGreyhoundForm}
                                />
                            </div>
                            :""

                    }
                    {
                        this.state.horseForm ?
                            <div className="Modal_wrapp">
                                <HorseForm
                                    closeModal = {(type) => this.closeModal(type)}
                                    activePartHorseForm = {this.state.activePartHorseForm}
                                />
                            </div>
                            :""

                    }
                    {
                        this.state.irishHorseForm ?
                            <div className="Modal_wrapp">
                                <IrishHorseForm
                                    closeModal = {(type) => this.closeModal(type)}
                                    activePartIrishHorseForm = {this.state.activePartIrishHorseForm}
                                />
                            </div>
                            :""

                    }
                    {
                        this.state.australianHorseForm ?
                            <div className="Modal_wrapp">
                                <AustralianHorseForm
                                    closeModal = {(type) => this.closeModal(type)}
                                    activePartAustralianHorseForm = {this.state.activePartAustralianHorseForm}
                                />
                            </div>
                            :""

                    }
                    {/*{*/}
                        {/*this.state.isCasinoPage ?*/}
                            {/*<div className="Modal_wrapp">*/}
                                {/*<FreeSpin closeModal = {(type) => this.closeModal(type)}/>*/}
                            {/*</div>*/}
                        {/*:""*/}
                    {/*}*/}

                    {/*<div className="Modal_wrapp">*/}
                        {/*<ActivateBetSlip closeModal = {(type) => this.closeModal(type)}/>*/}
                    {/*</div>*/}

                    {/*<div className="Modal_wrapp">*/}
                        {/*<Varify/>*/}
                    {/*</div>*/}
                </div>
            </BrowserRouter>
        )
    }
}

export default App;


