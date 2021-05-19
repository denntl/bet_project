import React from 'react';
import moment from "moment";
import ManagMatch from "../../../in_play/partials/managMatch";

class SingleGamePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            singleLeagueData: this.props.singleLeagueData,
            currentFixtureData: this.props.currentFixtureData,
            activeTab: this.props.activeTab,
            sportId: this.props.sportId
        };
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            singleLeagueData: nextProps.singleLeagueData,
            currentFixtureData: nextProps.currentFixtureData,
            sportId: nextProps.sportId
        });
    }

    changeTab = (tab) => {
        this.setState({
            activeTab: tab
        });
    }

    render() {

        return <div>
                    <div className="header">
                        <div className="ScrollableHorizontalNavBar MarketGroupHorizontalNavBar">
                            <div className="ScrollableHorizontalNavBar_ButtonContainer  nav nav-tabs" role="tablist">
                                {
                                    this.state.currentFixtureData.Groups instanceof Array &&
                                    this.state.currentFixtureData.Groups.length ?
                                        this.state.currentFixtureData.Groups.map((tab) => {
                                            return  <a href="javascript: void(0)"
                                                       key={tab}
                                                       className={`MarketGroupNavBarButton ${this.state.activeTab == tab.toLowerCase() ? "active" : ""}`}
                                                       onClick={() => this.changeTab(tab.toLowerCase())}>
                                                            {tab[0].toUpperCase() + tab.slice(1)}
                                                   </a>
                                        }) : ''
                                }
                            </div>
                        </div>
                        <div className="MarketGroupExtraData">
                            <div className="MarketGroupExtraData_LeftContainer">
                                <div className="MarketGroupExtraData_Time">
                                    <div className="MarketGroupExtraData_TimeLabel">Start Time</div>
                                    <div className="MarketGroupExtraData_TimeStamp">
                                        {moment(moment.utc(this.state.currentFixtureData.Fixture.StartDate)).local().format("DD MMM HH:mm")}
                                    </div>
                                </div>
                            </div>
                            <div className="MarketGroupExtraData_RightContainer">
                                <div className="MatchAlertsButton">
                                    <div className="MatchAlertsButton_Icon CouponMatchAlertsButton_Icon"></div>
                                    <div className="MatchAlertsButton_Label CouponMatchAlertsButton_Label">Match
                                        Alerts
                                    </div>
                                </div>
                                <div className="MarketGroupExtraData_Icons ">
                                    <div
                                        className="MarketGroupExtraData_IconsVideoAvailable MarketGroupExtraData_IconsGeneric "></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content tab-content clearfix">
                        <section className="" role="tabpanel">
                            <ManagMatch
                                typeSport={this.state.sportId}
                                participants={this.state.currentFixtureData.Fixture.Participants}
                                markets={this.state.currentFixtureData.Markets}
                                eventId={this.state.currentFixtureData.FixtureId}
                                fromPage="eventView"
                                currentMarket={false}
                                fromEventView={true}
                                showOnlyGroup={this.state.activeTab}
                                addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}
                            />
                        </section>
                    </div>
                </div>
    }
}

export default SingleGamePage;