import React from 'react';
import {NavLink} from "react-router-dom";

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sportName: this.props.sportName,
            gameName: this.props.gameName,
            leagueName: this.props.leagueName,
            activePeriodFilter: this.props.activePeriodFilter,
            leaguesData: this.props.leaguesData,
            singleLeagueData: this.props.singleLeagueData,
            currentFixtureData: this.props.currentFixtureData,
            currentFixtureId: this.props.currentFixtureId,
            currentLeagueId: this.props.currentLeagueId
        };
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            sportName: nextProps.sportName,
            gameName: nextProps.gameName,
            leagueName: nextProps.leagueName,
            leaguesData: nextProps.leaguesData,
            activePeriodFilter: nextProps.activePeriodFilter,
            singleLeagueData: nextProps.singleLeagueData,
            currentFixtureData: nextProps.currentFixtureData,
            currentFixtureId: nextProps.currentFixtureId,
            currentLeagueId: nextProps.currentLeagueId
        });
    }

    render() {
        return  (this.state.currentFixtureData || this.state.singleLeagueData) ? <div className="header">
                    <div className="BreadcrumbTrail">
                        <NavLink to={`/sports/${this.state.sportName.toLowerCase()}`}
                                 onClick={() => this.props.comeBackToPage('main')}
                                 className="BreadcrumbTrail_BackButton">
                            {this.state.sportName}
                        </NavLink>
                        <div className="BreadcrumbTrail_TrailInner">
                            <NavLink to={`/sports/${this.state.sportName.toLowerCase()}`}
                                     onClick={() => this.props.comeBackToPage('main')}
                                     className="BreadcrumbTrail_Breadcrumb">
                                {this.state.sportName}
                            </NavLink>
                            <div className="BreadcrumbTrail_Divider">/</div>
                            {
                                this.state.currentFixtureData ?
                                    <NavLink to={{pathname: "/sports/"+this.state.sportName.toLowerCase()+"/leagues"}}
                                             onClick={() => this.props.comeBackToPage('leagues')}
                                             className="BreadcrumbTrail_Breadcrumb">
                                        {this.state.leagueName}
                                    </NavLink> :
                                    <div className="BreadcrumbTrail_Breadcrumb dropdown">
                                        <span className="DropDownToggle" data-toggle="dropdown">{this.state.leagueName}</span>
                                        <div className="DropDownContainer dropdown-menu">
                                            {
                                                Object.keys(this.state.leaguesData).map((leagueId) => {
                                                    return<div key={`${leagueId}-drop`}
                                                                 className={`DropDownItem ${this.state.leaguesData[leagueId].identity == this.state.currentLeagueId?"selected": "" }`}
                                                                 onClick={() => this.props.changeCurrentLeague(
                                                                     this.state.leaguesData[leagueId].name,
                                                                     this.state.leaguesData[leagueId].identity
                                                                 )}>
                                                            {this.state.leaguesData[leagueId].name}
                                                        </div>
                                                })
                                            }
                                        </div>
                                    </div>
                            }
                            {this.state.currentFixtureData ? <div className="BreadcrumbTrail_Divider">/</div> : ''}
                            {
                                this.state.currentFixtureData ?
                                    <div className="BreadcrumbTrail_Breadcrumb dropdown">
                                        <span className="DropDownToggle" data-toggle="dropdown">{this.state.gameName}</span>
                                        <div className="DropDownContainer dropdown-menu">
                                            {
                                                Object.keys(this.state.singleLeagueData).map((date) => {

                                                    return Object.keys(this.state.singleLeagueData[date]).map((eventIndex) => {
                                                        let event = this.state.singleLeagueData[date][eventIndex];
                                                        let participants = event.Fixture.Participants;
                                                        let gameName = participants[0].Name +
                                                            (this.state.currentLeagueId == 64 ? ' @ ' : ' VS ')
                                                                + participants[1].Name;

                                                        return <div key={`${event.FixtureId}-drop`}
                                                                 className={`DropDownItem ${event.FixtureId == this.state.currentFixtureId ? 'selected' : ''}`}
                                                                 onClick={() => this.props.fetchFixtureData(event.FixtureId)}>
                                                                    {gameName}
                                                            </div>
                                                    })
                                                })
                                            }
                                        </div>
                                    </div> : ''
                            }
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
                        <a href="javascript:void(0)"
                           className={`ClassificationHeader-PeriodOption ${this.state.activePeriodFilter == "24" ? "active" : ""}`}
                           onClick={() => this.props.clickPeriodFilterHandler('24')}>
                            Next 24 hrs
                        </a>
                        <a href="javascript:void(0)"
                           className={`ClassificationHeader-PeriodOption  ${this.state.activePeriodFilter == "all" ? "active" : ""}`}
                           onClick={() => this.props.clickPeriodFilterHandler('all')}>
                            All
                        </a>
                    </div>
                </div>
    }
}

export default Header;