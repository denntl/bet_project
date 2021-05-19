import React from 'react';
import {NavLink} from "react-router-dom";
import moment from "moment/moment";



class BasketballHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sportName: this.props.sportName,
            leagueName: this.props.leagueName,
            allLeagues: this.props.allLeagues,
            gameName: this.props.gameName,
            allEventsDate: this.props.allEventsDate,
            activeFilter: this.props.activeFilter,
            activeTab: "matches"
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            sportName: nextProps.sportName,
            //leagueName: nextProps.leagueName,
            allLeagues: nextProps.allLeagues
        })
    }
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
        this.props.changeLeague(id, leagueName);
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
        this.props.comeBack(null, activeFilter)
    }
    changeTab = (tab) => {
        this.setState({
            activeTab: tab
        })
        this.props.changeTab(tab)
    }

    render() {
     //   console.log('xxxxxxx', this.state)
        return(
            <div>
                {Object.keys(this.state.allLeagues).length ?
                    <div className="header">
                        <div className="BreadcrumbTrail">
                            <div className="BreadcrumbTrail_BackButton"></div>
                            <div className="BreadcrumbTrail_TrailInner">
                                <NavLink to={{pathname: "/sports/"+this.state.sportName.toLowerCase()}} onClick={() => this.goBack(this.state.activeFilter)} className="BreadcrumbTrail_Breadcrumb">{this.state.sportName}</NavLink>
                                <div className="BreadcrumbTrail_Divider">/</div>
                                <div className="BreadcrumbTrail_Breadcrumb dropdown">
                                    <span className="DropDownToggle" data-toggle="dropdown" >{this.state.leagueName}</span>
                                            <div className="DropDownContainer dropdown-menu">
                                                {
                                                    Object.keys(this.state.allLeagues).map((league) => {

                                                        return <div key={`${league}-top-menu`} className={`DropDownItem ${this.state.leagueName == this.state.allLeagues[league].name ? "selected" : ""}`} onClick={() => this.changeLeague(league, this.state.allLeagues[league].name)}>{this.state.allLeagues[league].name}</div>
                                                    })
                                                }

                                            </div>
                                </div>
                            </div>
                        </div>
                        <div className="ScrollableHorizontalNavBar MarketGroupHorizontalNavBar">
                            <div className="ScrollableHorizontalNavBar_ButtonContainer  nav nav-tabs">
                                <a href="javascript:void(0)" className={`MarketGroupNavBarButton ${this.state.activeTab == "matches" ? "active" : ""}`}  onClick={() => this.changeTab("matches")}>Matches</a>
                                <a href="javascript:void(0)" className={`MarketGroupNavBarButton ${this.state.activeTab == "outrights" ? "active" : ""}`}  onClick={() => this.changeTab("outrights")}>Outrights</a>
                            </div>
                        </div>
                    </div>
                    :

                        typeof this.state.gameName != "undefined" ?
                            <div className="header">
                                <div className="BreadcrumbTrail">
                                    <div className="BreadcrumbTrail_BackButton"></div>
                                    <div className="BreadcrumbTrail_TrailInner">
                                        <NavLink to={{pathname: "/sports/"+this.state.sportName.toLowerCase()}} onClick={() => this.goBack(this.state.activeFilter)} className="BreadcrumbTrail_Breadcrumb">{this.state.sportName}</NavLink>
                                        <div className="BreadcrumbTrail_Divider">/</div>
                                        <NavLink to={{pathname: "/sports/"+this.state.sportName.toLowerCase()+"/leagues"}} className="BreadcrumbTrail_Breadcrumb">{this.state.leagueName}</NavLink>
                                        <div className="BreadcrumbTrail_Divider">/</div>
                                        <div className="BreadcrumbTrail_Breadcrumb dropdown">
                                            <span className="DropDownToggle"
                                                  data-toggle="dropdown">{this.state.gameName}</span>
                                            <div className="DropDownContainer dropdown-menu">
                                                {
                                                    Object.keys(this.state.allEventsDate).map((event) => {
                                                        let gameName = this.state.allEventsDate[event].Fixture.Participants[0].Name +" v " +this.state.allEventsDate[event].Fixture.Participants[1].Name;
                                                        return <div key={`${this.state.allEventsDate[event].FixtureId}-drop`} className="DropDownItem" onClick={() => this.changeGame(this.state.allEventsDate[event].FixtureId, gameName)}>{gameName}</div>
                                                    })
                                                }

                                            </div>
                                        </div>

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

export default BasketballHeader;
