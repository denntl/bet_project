import React from 'react';
import Sidebar from "../sidebar";
import ActionPanel from "../actionPanel";
import Home from "./sports/home";
import {Switch, Route} from 'react-router-dom';
import Baseball from "./sports/baseball";
import Basketball from "./sports/basketball";
import Bowls from "./sports/bowls";
import AmericanFootball from "./sports/americanFootball";
import BoxingUfc from "./sports/boxing-ufc";
import Cricket from "./sports/cricket";
import Cycling from "./sports/cycling";
import Darts from "./sports/darts";
import Esports from "./sports/esports";
import Futsal from "./sports/futsal";
import Golf from "./sports/golf";
import GaelicPorts from "./sports/gaelicPorts";
import Lotto from "./sports/lotto";
import MotorSportsFormula1 from "./sports/motorSportsFormula1";
import MotorSportsSupercars from "./sports/motorSportsSupercars";
import MotorSportsNascar from "./sports/motorSportsNascar";
import MotorSportsMotorbikes from "./sports/motorSportsMotorbikes";
import RugbyLeague from "./sports/rugbyLeague";
import RugbyUnion from "./sports/rugbyUnion";
import Snooker from "./sports/snooker";
import Soccer from "./sports/soccer";
import Specials from "./sports/specials";
import Sweeden from "./sports/sweeden";
import Tennis from "./sports/tennis";
import VirtualSports from "./sports/virtualSports";
import MoreSports from "./sports/moreSports";
import TopEvents from "./sports/topEvents";
import Speedway from "./sports/speedway";
import UnitedKingdom from "./sports/unitedKingdom";
import Greyhounds from "./sports/greyhounds";
import HorseRacing from "./sports/horseRacing";
import IceHockey from "./sports/iceHockey";
import OddsOnCoupon from "./sports/oddsOnCoupon";
import WinterSports from "./sports/winterSports";
import Volleyball from "./sports/volleyball";
import DefaultPage from "../shared/defaultPage";
import GroupedByLeagueMarketGroupMarket
    from "./sports/prematch-templates/grouped-by-league-marketgroup-market/grouped-by-league-marketgroup-market";


class Sports extends DefaultPage {
    constructor(props) {
        super(props);

        this.state = {
            show_modal: false,
            allSports: this.props.allSports,
            allEvents: this.props.allEvents,
            allFixtures: [],
            allLigues: [],
            allMarkets: [],
            sports: this.props.sports,
            bets: this.props.bets,
            currentTotalStake: this.props.currentTotalStake,
            multiCombine: this.props.multiCombine,
            odds: this.props.odds,
            loginToken: this.props.loginToken,
            selectedLeagueId: false,
            selectedEventFromOtherPage: this.props.selectedEventFromOtherPage,
            maxSelections: this.props.maxSelections,
            stretch: false,
        };
        this.addToBetSlip = this.addToBetSlip.bind(this);
        this.removeBet = this.removeBet.bind(this);
        this.calculationBet = this.calculationBet.bind(this);
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
    componentDidUpdate() {
        if (window.localStorage.getItem("currentStake") != null || window.localStorage.getItem("currentStake") != undefined) {
            let currentStake = JSON.parse(window.localStorage.getItem("currentStake"));
            $('.selected_bet').removeClass("selected_bet");
            for (var i in currentStake.bets) {
                $('#'+ i +'-in_play, .'+ i +'-in_play').addClass("selected_bet");
                $('#'+ i +'-prematch, .'+ i +'-prematch').addClass("selected_bet")
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            allEvents: nextProps.allEvents,
            sports: nextProps.sports,
            allSports: nextProps.allSports,
            odds: nextProps.odds,
            bets: nextProps.bets,
            currentTotalStake: nextProps.currentTotalStake,
            multiCombine: nextProps.multiCombine,
            unsettled_bets: nextProps.unsettled_bets,
            loginToken: nextProps.loginToken,
            selectedEventFromOtherPage: nextProps.selectedEventFromOtherPage,
            maxSelections: nextProps.maxSelections
        })
    }
    changeCurrentLeagueId = (id = false) => {
        this.setState({
            selectedLeagueId: id
        })
    }

    render() {
        return(
<div>
            <div className="main_content">
                <div className="main_content_wrapper">
                    <Sidebar changeCurrentLeagueId={(id) => this.changeCurrentLeagueId(id)}/>
                        <Route exact path="/" render={() => <Home
                            setSelectedEventFromOtherPage={(eventObj) => this.props.setSelectedEventFromOtherPage(eventObj)}
                            odds={this.state.odds}
                            sports={this.state.sports}
                            allSports={this.state.allSports}
                            addToBetSlip={(info, bet, typeBet) => this.addToBetSlip(info, bet, typeBet)}
                            eventCount={this.state.allEvents.length}
                            loginToken={this.state.loginToken}
                            showForm={(type, kind) => this.props.showForm(type, kind)}
                        />}

                        />
                        <Route exact path="/sports" render={() => <Home
                            setSelectedEventFromOtherPage={(eventObj) => this.props.setSelectedEventFromOtherPage(eventObj)}
                            odds={this.state.odds}
                            sports={this.state.sports}
                            allSports={this.state.allSports }
                            addToBetSlip={(info, bet, typeBet) => this.addToBetSlip(info, bet, typeBet)}
                            eventCount={this.state.allEvents.length}
                            loginToken={this.state.loginToken}
                            showForm={(type, kind) => this.props.showForm(type, kind)}
                        /> }
                        />
                        <Route  path="/sports/home" render={() => <Home
                            setSelectedEventFromOtherPage={(eventObj) => this.props.setSelectedEventFromOtherPage(eventObj)}
                            odds={this.state.odds}
                            sports={this.state.sports}
                            allSports={this.state.allSports}
                            addToBetSlip={(info, bet, typeBet) => this.addToBetSlip(info, bet, typeBet)}
                            eventCount={this.state.allEvents.length}
                            loginToken={this.state.loginToken}
                            showForm={(type, kind) => this.props.showForm(type, kind)}
                        />}
                        />
                        <Route  path="/sports/baseball" render={() => <Baseball />}/>
                        <Route  path="/sports/basketball" render={() => <GroupedByLeagueMarketGroupMarket
                            showForm={(type, kind) => this.props.showForm(type, kind)}
                            sportId={48242}
                            sportName={'Basketball'}
                            oddsType={this.state.odds}
                            addToBetSlip={(info, bet, typeBet) => this.addToBetSlip(info, bet, typeBet)}
                            activeTab={'main props'}
                        />}/>
                        <Route  path="/sports/handball" render={() => <GroupedByLeagueMarketGroupMarket
                            showForm={(type, kind) => this.props.showForm(type, kind)}
                            sportId={35709}
                            sportName={'Handball'}
                            oddsType={this.state.odds}
                            addToBetSlip={(info, bet, typeBet) => this.addToBetSlip(info, bet, typeBet)}
                            activeTab={'main'}
                        />}/>{/*<Basketball addToBetSlip={(info, bet, typeBet) => this.addToBetSlip(info, bet, typeBet)} />*/}
                        <Route  path="/sports/bowls" render={() => <Bowls/>}/>
                        <Route  path="/sports/live" render={() => <Home/>}/>
                        <Route  path="/sports/american-football" render={() => <AmericanFootball/>}/>
                        <Route  path="/sports/boxing-ufc" render={() => <BoxingUfc/>}/>
                        <Route  path="/sports/cricket" render={() => <Cricket/>}/>
                        <Route  path="/sports/cycling" render={() => <Cycling/>}/>
                        <Route  path="/sports/darts" render={() => <Darts/>}/>
                        <Route  path="/sports/esports" render={() => <Esports/>}/>
                        <Route  path="/sports/futsal" render={() => <Futsal/>}/>
                        <Route  path="/sports/gaelic-ports" render={() => <GaelicPorts />}/>
                        <Route  path="/sports/golf" render={() => <Golf/>}/>
                        <Route  path="/sports/greyhounds" render={() => <Greyhounds/>}/>
                        <Route  path="/sports/horse-racing" render={() => <HorseRacing/>}/>
                        <Route  path="/sports/ice-hockey" render={() => <IceHockey/>}/>
                        <Route  path="/sports/lotto" render={() => <Lotto/>}/>
                        <Route  path="/sports/motor-sports-formula-1" render={() => <MotorSportsFormula1/>}/>
                        <Route  path="/sports/motor-sports-supercars" render={() => <MotorSportsSupercars/>}/>
                        <Route  path="/sports/motor-sports-motorbikes" render={() => <MotorSportsMotorbikes/>}/>
                        <Route  path="/sports/motor-sports-nascar" render={() => <MotorSportsNascar/>}/>
                        <Route  path="/sports/rugby-league" render={() => <RugbyLeague/>}/>
                        <Route  path="/sports/rugby-union" render={() => <RugbyUnion/>}/>
                        <Route  path="/sports/snooker" render={() => <Snooker/>}/>
                        <Route  path="/sports/soccer" render={() => <Soccer
                                setSelectedEventFromOtherPage={(event) => this.props.setSelectedEventFromOtherPage(event)}
                                changeCurrentLeagueId={(id) => this.changeCurrentLeagueId(id)}
                                currentLeagueId={this.state.selectedLeagueId}
                                showForm={(type, kind) => this.props.showForm(type, kind)}
                                odds={this.state.odds}
                                events={typeof this.state.sports[6046] != 'undefined' ? this.state.sports[6046] : {}}
                                addToBetSlip={(info, bet, typeBet) => this.addToBetSlip(info, bet, typeBet)}
                                eventCount={this.state.allEvents.length}
                                selectedEventFromOtherPage={this.state.selectedEventFromOtherPage}
                            />}
                        />
                        <Route  path="/sports/specials" render={() => <Specials/>}/>
                        <Route  path="/sports/sweden" render={() => <Sweeden/>}/>
                        <Route  path="/sports/united-kingdom" render={() => <UnitedKingdom/>}/>
                        <Route  path="/sports/speedway" render={() => <Speedway/>}/>
                        <Route  path="/sports/tennis" render={() => <GroupedByLeagueMarketGroupMarket
                            showForm={(type, kind) => this.props.showForm(type, kind)}
                            sportId={54094}
                            sportName={'Tennis'}
                            oddsType={this.state.odds}
                            addToBetSlip={(info, bet, typeBet) => this.addToBetSlip(info, bet, typeBet)}
                            activeTab={'main'}
                        />}/>{/*<Tennis addToBetSlip={(info, bet, typeBet) => this.addToBetSlip(info, bet, typeBet)} />*/}
                        <Route  path="/sports/virtual-sports" render={() => <VirtualSports/>}/>
                        <Route  path="/sports/volleyball" render={() => <GroupedByLeagueMarketGroupMarket
                            showForm={(type, kind) => this.props.showForm(type, kind)}
                            sportId={154830}
                            sportName={'Volleyball'}
                            oddsType={this.state.odds}
                            addToBetSlip={(info, bet, typeBet) => this.addToBetSlip(info, bet, typeBet)}
                            activeTab={'main'}
                        />}/>
                        <Route  path="/sports/winter-sports" render={() => <WinterSports/>}/>
                        <Route  path="/sports/more-sports" render={() => <MoreSports/>}/>
                        <Route  path="/sports/odds-on-coupon" render={() => <OddsOnCoupon/>}/>
                        <Route  path="/sports/top-events" render={() => <TopEvents/>}/>
                </div>





                <ActionPanel
                    setSelectedEventFromOtherPage={(event) => this.props.setSelectedEventFromOtherPage(event)}
                    saveBetToLocalStorage={(bets, total, combine) => this.props.saveBetToLocalStorage(bets, total, combine)}
                    allEvents={this.state.allEvents}
                    setBalance={() => this.props.setBalance()}
                    showTreblesModal={(obj) => this.props.showTreblesModal(obj)}
                    bets={this.state.bets}
                    currentTotalStake={this.state.currentTotalStake}
                    multiCombine={this.state.multiCombine}
                    page={`sports`}
                    addToBetSlip={(info, bet, typeBet) => this.addToBetSlip(info, bet, typeBet)}
                    removeBet={(id) => this.removeBet(id)}
                    calculationBet={(countBets, selectedBet) => this.calculationBet(countBets, selectedBet)}
                    setToken={(token) => this.props.setToken(token)}
                    loginToken={this.props.loginToken}
                    acceptChanged={() => this.acceptChanged()}
                    setUnsettledBets={(count) => this.props.setUnsettledBets(count)}
                    unsettled_bets={this.state.unsettled_bets}
                    showForm={(type, kind) => this.props.showForm(type, kind)}
                    updateProfile={(obj) => this.props.updateProfile(obj)}
                    maxSelections={this.state.maxSelections}
                    odds={this.state.odds}
                    resizeBlock = {()=>this.resizeBlock()}
                    stretch = {this.state.stretch}
                />
            </div>
        {this.props.footer}
        </div>
        )

    }
}

export default Sports;
