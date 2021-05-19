import React from 'react';
import moment from "moment";
import ManagMatch from "../../../../../in_play/partials/managMatch";

class AllFixturesByBlockRenderComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentMarketName: this.props.currentMarketName,
            dropDown: false,
            currentLeagueMarkets: this.props.currentLeagueMarkets,
            singleLeagueData: this.props.singleLeagueData,
            currentMarketId: this.props.currentMarketId,
            sportId: this.props.sportId,
            setIntervalCount: this.props.setIntervalCount,
            sportName: this.props.sportName,
            currentFixtureObj: this.getFirstFixture(this.props.singleLeagueData, this.props.currentMarketId),
            currentLeagueId: this.props.currentLeagueId
        };
    }

    componentWillReceiveProps(nextProps){
        if(
            nextProps.currentLeagueId !== this.state.currentLeagueId &&
            nextProps.singleLeagueData !== this.state.singleLeagueData
        ){
            this.setState({
                currentFixtureObj: this.getFirstFixture(
                    nextProps.singleLeagueData,
                    nextProps.currentMarketId
                ),
                currentLeagueId: nextProps.currentLeagueId
            });
        }
        this.setState({
            currentMarketName: nextProps.currentMarketName,
            currentLeagueMarkets: nextProps.currentLeagueMarkets,
            singleLeagueData: nextProps.singleLeagueData,
            sportId: nextProps.sportId,
            setIntervalCount: nextProps.setIntervalCount,
            sportName: nextProps.sportName,
            currentMarketId: nextProps.currentMarketId
        });
    }

    getFirstFixture(singleLeagueData, currentMarketId){
        if(singleLeagueData !== null && typeof singleLeagueData === 'object'){
            for(let date in singleLeagueData){
                for(let eventIndex in singleLeagueData[date]){
                    for(let marketIndex in singleLeagueData[date][eventIndex].Markets){
                        if(singleLeagueData[date][eventIndex].Markets[marketIndex].Id == currentMarketId){

                            return singleLeagueData[Object.keys(singleLeagueData)[0]][0];
                        }
                    }
                }
            }
        }

        return null;
    }

    toggle = (type) => {
        if (type == "change_market") {
            this.setState({dropDown: !this.state.dropDown})
        }
    }

    toggleEvents(id) {
        if ($('.'+id).hasClass('none')) {
            $('.'+id).removeClass('none').show(200);
        } else {
            $('.'+id).addClass('none').hide(200);
        }
    }

    render() {

        return <section id="Matches_panel" className="tab-pane fade show active" role="tabpanel">
            <div className="CouponModule">
                <div className="MarketGrid">
                    <div className="MarketGroup CouponMarketGroup">
                        <div className="MarketGroupButton dropDown" onClick={() => this.toggleEvents("matches_events")}>
                            <div className="leftContent">
                                <div className="CouponMarketGroupButton_Title">
                                    <span>{this.state.currentMarketName}</span>
                                </div>
                                <div className="dropDown_change_market" onClick={(e)=>{this.toggle('change_market'); e.stopPropagation() }}>
                                    <span className="ChangeMarket">Change Market</span>
                                </div>
                            </div>
                        </div>
                        {this.state.dropDown ?
                            <div className="ChangeMarket_drop_down_list">
                                {
                                    Object.keys(this.state.currentLeagueMarkets).map((market) => {

                                        let marketName = this.state.currentLeagueMarkets[market].alias != '' ?
                                            this.state.currentLeagueMarkets[market].alias :
                                            this.state.currentLeagueMarkets[market].name;

                                        return <div key={`${market}-tab`}
                                                    className={`ChangeMarket_item ${this.state.currentMarketName == marketName ? "active" : "" }`}
                                                    onClick={() => {
                                                        this.props.changeCurrentMarket(
                                                            this.state.currentLeagueMarkets[market].id,
                                                            marketName
                                                        );
                                                        this.toggle('change_market');
                                                    }}>
                                            {marketName}
                                        </div>
                                    })
                                }
                            </div>
                            : ""
                        }
                        {
                            Object.keys(this.state.singleLeagueData).map((date) => {
                                return this.state.singleLeagueData[date].map((event) => {
                                    return <div className="MarketGroup_Wrapper matches_events ">
                                                <div className="MarketGroupButton" onClick={()=>this.toggleEvents('single_event')}>
                                                    <span className="MarketGroupButton_Text pre-match">
                                                        {
                                                            event.Fixture.Participants[0].Name +
                                                            (this.state.currentLeagueId == 64 ? ' @ ' : ' VS ')
                                                            + event.Fixture.Participants[1].Name
                                                        }
                                                    </span>
                                                    <span className="cm-MarketSubGroup_BookCloses">Start Time
                                                        {' ' + moment(moment.utc(event.Fixture.StartDate)).local().format("DD MMM HH:mm")}
                                                    </span>
                                                </div>
                                                <div className="single_event_wrapp single_event">
                                                    <ManagMatch
                                                        hideMarketGroupButton={true}
                                                        fromPage={"eventView"}
                                                        eventId={event.FixtureId}
                                                        typeSport={this.state.sportId}
                                                        participants={event.Fixture.Participants}
                                                        currentMarket={this.state.currentMarketName}
                                                        markets={event.Markets}
                                                        addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}
                                                        blockNameOdd={true}
                                                    />
                                                </div>
                                            </div>;
                                })
                            })
                        }
                    </div>

                    <div className="LiveAlertsMarketGroupPopupLauncher_BackgroundWrapper">
                        <div className="LiveAlertsMarketGroupPopupLauncher">
                            <div className="LiveAlertsMarketGroupPopupLauncher_ContentWrapper">
                                <div className="LiveAlertsMarketGroupPopupLauncher_HeaderLabel">Live Match Alerts</div>
                                <div className="LiveAlertsMarketGroupPopupLauncher_DescriptionLabel">Notifications for goals, results, and more</div>
                            </div>
                            <div className="LiveAlertsMarketGroupPopupLauncher_ContentWrapper">
                                <div className="LiveAlertsMarketGroupPopupLauncher_OpenButton" onClick={() => this.props.showForm("match")} >Open Alerts</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    }
}

export default AllFixturesByBlockRenderComponent;