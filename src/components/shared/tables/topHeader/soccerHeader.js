import React from 'react';
import {NavLink} from "react-router-dom";
import moment from "moment/moment";



class SoccerHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sportName: this.props.sportName,
            leagueName: this.props.leagueName,
            allLeagues: this.props.allLeagues,
            gameName: this.props.gameName,
            fromPage: this.props.fromPage,
            allEventsDate: this.props.allEventsDate,
            activeFilter: this.props.activeFilter,
            activeTab: this.props.activeTab,
            dropDown: false,
            marketsList: this.props.marketsList,
            marketsCol: this.props.marketsCol,
            currentMarketId: this.props.currentMarketId,
            currentLeagueTableData:this.props.currentLeagueTableData
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            sportName: nextProps.sportName,
            //leagueName: nextProps.leagueName,
            allLeagues: nextProps.allLeagues,
            fromPage: nextProps.fromPage,
            marketsList: nextProps.marketsList,
            marketsCol: nextProps.marketsCol,
            currentMarketId: nextProps.currentMarketId,
            currentLeagueTableData:nextProps.currentLeagueTableData,
            activeTab:nextProps.activeTab
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if (window.localStorage.getItem("currentStake") != null || window.localStorage.getItem("currentStake") != undefined) {
            let currentStake = JSON.parse(window.localStorage.getItem("currentStake"));

            $('.Participant.grid3').removeClass("selected_bet");
            for (var i in currentStake.bets) {
                $('#' + i + "-in_play").addClass("selected_bet");
                $('#'+ i +'-prematch').addClass("selected_bet");
            }
        }
    }
    // componentDidMount() {
    //     if (window.localStorage.getItem("currentStake") != null || window.localStorage.getItem("currentStake") != undefined) {
    //         let currentStake = JSON.parse(window.localStorage.getItem("currentStake"));
    //         $('.Participant.grid3').removeClass("selected_bet");
    //         for (var i in currentStake.bets) {
    //             $('#' + i + "-in_play").addClass("selected_bet");
    //             $('#'+ i +'-prematch').addClass("selected_bet");
    //         }
    //     }
    // }

    filterEvents = (time) => {
        let date_from =  moment.utc().format('YYYY-MM-DD HH:mm:ss');
        if (time == "24") {
            let date_to = moment.utc().add(1,'days').format('YYYY-MM-DD HH:mm:ss');
            this.props.fetchEventsGrouped(date_from, date_to, time);

        } else if (time == "all") {
           // let date_from =  moment.utc().add(6,'hours').format('YYYY-MM-DD HH:mm:ss');
            let date_to = moment.utc().add(1,'year').format('YYYY-MM-DD HH:mm:ss');
            this.props.fetchEventsGrouped(date_from, date_to, time)
        }
        this.setState({
            activeFilter: time
        })

    }
    changeLeague = (id, leagueName) => {
        this.props.changeLeague(id);
        this.setState({
            leagueName: leagueName
        })
    }

    changeGame = (id, gameName) => {
        this.props.changeGame(id);
        this.setState({
            gameName: gameName
        })
    }

    goBack = (activeFilter) => {
        // console.log("test", activeFilter)
        this.props.comeBack(null, activeFilter);
        this.props.changeCurrentLeagueId();
    }
    changeTab = (tab) => {
        this.setState({
            activeTab: tab
        });
        this.props.changeTab(tab)
    }
    toggle = () => {
        this.setState({
            dropDown: !this.state.dropDown
        });
    }
    render() {
        //console.log("AllLeagues", this.state.allLeagues);
        return(
            <div>
                {Object.keys(this.state.allLeagues).length ?
                    <div className="header">
                        <div className="BreadcrumbTrail">
                            {/*<div className="BreadcrumbTrail_BackButton" ></div>*/}
                            <NavLink to="/sports/soccer" onClick={() => this.goBack(this.state.activeFilter)} className="BreadcrumbTrail_BackButton"></NavLink>
                            <div className="BreadcrumbTrail_TrailInner">
                                <NavLink to={{pathname: "/sports/"+this.state.sportName.toLowerCase()}} onClick={() => this.goBack(this.state.activeFilter)} className="BreadcrumbTrail_Breadcrumb">{this.state.sportName}</NavLink>
                                <div className="BreadcrumbTrail_Divider">/</div>
                                <div className="BreadcrumbTrail_Breadcrumb dropdown">
                                    <span className="DropDownToggle" data-toggle="dropdown" >{this.state.leagueName}</span>
                                            <div className="DropDownContainer dropdown-menu">
                                                {
                                                    Object.keys(this.state.allLeagues).map((league) => {

                                                        return <div key={`${league}-top-menu`} className={`DropDownItem ${this.state.leagueName == this.state.allLeagues[league].name ? "selected" : ""}`} onClick={() => this.changeLeague(this.state.allLeagues[league].id, this.state.allLeagues[league].name)}>{this.state.allLeagues[league].name}</div>
                                                    })
                                                }

                                            </div>
                                </div>
                            </div>
                        </div>
                        <div className="ScrollableHorizontalNavBar MarketGroupHorizontalNavBar">
                            <div className="ScrollableHorizontalNavBar_ButtonContainer  nav nav-tabs">
                                <a href="javascript:void(0)" className={`MarketGroupNavBarButton ${this.state.activeTab == "matches" ? "active" : ""}`}  onClick={() => this.changeTab("matches")}>Matches</a>
                                <a href="javascript:void(0)" className={`MarketGroupNavBarButton ${this.state.activeTab == "teams" ? "active" : ""}`}  onClick={() => this.changeTab("teams")}>Teams</a>
                                {/*<a href="javascript:void(0)" className={`MarketGroupNavBarButton ${this.state.activeTab == "outrights" ? "active" : ""}`}  onClick={() => this.changeTab("outrights")}>Outrights</a>*/}
                                {this.state.currentLeagueTableData.length ?
                                <a href="javascript:void(0)" className={`MarketGroupNavBarButton ${this.state.activeTab == "table" ? "active" : ""}`}  onClick={() => this.changeTab("table")}>Table</a>
                                    :""}
                            </div>
                        </div>
                    </div>
                    :

                        typeof this.state.gameName != "undefined" ?
                            <div className="header">
                                <div className="BreadcrumbTrail">
                                    {/*<div className="BreadcrumbTrail_BackButton"></div>*/}
                                    <NavLink to="/sports/soccer/leagues" className="BreadcrumbTrail_BackButton"></NavLink>

                                    <div className="BreadcrumbTrail_TrailInner">
                                        <NavLink to={{pathname: "/sports/"+this.state.sportName.toLowerCase()}} onClick={() => this.goBack(this.state.activeFilter)} className="BreadcrumbTrail_Breadcrumb">{this.state.sportName}</NavLink>
                                        <div className="BreadcrumbTrail_Divider">/</div>

                                            {typeof this.state.leagueName == 'string' && this.state.leagueName.length ?
                                                    <NavLink
                                                        to={{
                                                            pathname: this.state.fromPage == 'today' ?
                                                                "/sports/"+this.state.sportName.toLowerCase()+"/today":
                                                                    this.state.fromPage == 'euro-list' ?
                                                                        "/sports/"+this.state.sportName.toLowerCase()+"/euro-list":
                                                                        "/sports/"+this.state.sportName.toLowerCase()+"/leagues"
                                                        }}
                                                        className="BreadcrumbTrail_Breadcrumb"
                                                        onClick={() => {(this.state.fromPage == 'today' || this.state.fromPage == 'euro-list') ? this.props.removeEventId(): ''}}
                                                    >
                                                        {this.state.fromPage == 'today' ? this.props.getCurrentDayOfWeek() + "'s Matches" :
                                                            this.state.fromPage == 'euro-list' ? 'Elite Euro List' : this.state.leagueName}
                                                    </NavLink>
                                                : ''}

                                            {typeof this.state.leagueName == 'string' && this.state.leagueName.length ?
                                                <div className="BreadcrumbTrail_Divider">/</div>
                                             : ''}

                                        <div className="BreadcrumbTrail_Breadcrumb dropdown">
                                            <span className={`${typeof this.state.leagueName == 'string' && this.state.leagueName.length ? 'DropDownToggle' : ''}`}
                                                  data-toggle="dropdown">{this.state.gameName}</span>





                                            {typeof this.state.leagueName == 'string' && this.state.leagueName.length &&
                                                Object.keys(this.state.allEventsDate).length > 1 ?
                                                <div className="DropDownContainer dropdown-menu">
                                                {
                                                    Object.keys(this.state.allEventsDate).map((event) => {
                                                        let gameName = this.state.allEventsDate[event].Fixture.Participants[0].Name + " v " + this.state.allEventsDate[event].Fixture.Participants[1].Name;

                                                        if(gameName != this.state.gameName) {
                                                            return <div
                                                                key={`${this.state.allEventsDate[event].FixtureId}-drop`}
                                                                className="DropDownItem"
                                                                onClick={() => this.changeGame(this.state.allEventsDate[event].FixtureId, gameName)}>{gameName}</div>
                                                        }
                                                    })
                                                }

                                            </div>: ''}
                                        </div>



                                        {(location.pathname == '/sports/soccer/today' || location.pathname == '/sports/soccer/euro-list') && typeof this.state.marketsList[this.state.currentMarketId] != 'undefined' ?
                                            <div className="BreadcrumbSelectMarket" onClick={()=>this.toggle()}>
                                                <span className="selectedMarket">{
                                                    this.state.marketsList[this.state.currentMarketId].alias ?
                                                        this.state.marketsList[this.state.currentMarketId].alias :
                                                            this.state.marketsList[this.state.currentMarketId].name
                                                }</span>
                                                {this.state.dropDown ?
                                                    <div className="DropDownContainerSelectMarket ">
                                                        {
                                                            Object.keys(this.state.marketsList).map((key) => {

                                                                if(
                                                                    typeof this.state.marketsCol[key] != 'undefined' &&
                                                                    this.state.currentMarketId != key
                                                                ){
                                                                    return <div className="DropDownItem" onClick={() => {
                                                                            this.props.changeCurrentMarket(key, this.state.marketsList[key].alias ?
                                                                                this.state.marketsList[key].alias :
                                                                                this.state.marketsList[key].name
                                                                            )
                                                                        }}>
                                                                            {
                                                                                this.state.marketsList[key].alias ?
                                                                                this.state.marketsList[key].alias :
                                                                                this.state.marketsList[key].name
                                                                            }
                                                                    </div>;
                                                                }
                                                                console.log(key, this.state.marketsCol[key])

                                                            })
                                                        }


                                                        {/*<div className="DropDownItem selected">Test</div>*/}
                                                        {/*<div className="DropDownItem">Test</div>*/}
                                                    </div>
                                                    :""
                                                }

                                            </div>
                                            : ''}




                                    </div>
                                </div>
                            </div>
                            :
                            <div className="header">
                                <div className="CreateCouponContainer ">
                                    <div className="CreateCouponTab ">
                                        <div className="CreateCouponTab_Count ">0</div>
                                        <div className="CreateCouponTab_Selections ">Selections</div>
                                        <div className="CreateCouponTab_Button ">Create Coupon</div>
                                    </div>
                                </div>

                                <div  className="title ClassificationName">{this.state.sportName}</div>
                                <div  className="PeriodOption-tabs nav-tabs">
                                    <a href="javascript:void(0)" className={`ClassificationHeader-PeriodOption ${this.state.activeFilter == "24" ? "active" : ""}`} onClick={() => this.filterEvents('24')}>Next 24 hrs</a>
                                    <a href="javascript:void(0)" className={`ClassificationHeader-PeriodOption  ${this.state.activeFilter == "all" ? "active" : ""}`} onClick={() => this.filterEvents('all')}>All</a>
                                </div>
                            </div>


                }

            </div>
        )

    }
}

export default SoccerHeader;
