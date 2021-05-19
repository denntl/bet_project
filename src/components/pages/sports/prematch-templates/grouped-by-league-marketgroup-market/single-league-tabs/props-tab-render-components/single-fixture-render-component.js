import React from 'react';
import moment from "moment";
import ManagMatch from "../../../../../in_play/partials/managMatch";

class SingleFixtureRenderComponent extends React.Component {

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
            dropDownFixture:false,
            currentFixtureObj: this.getFirstFixture(this.props.singleLeagueData, this.props.currentMarketId),
            currentLeagueId: this.props.currentLeagueId
        };
    }

    componentWillReceiveProps(nextProps){
        if(this.state.singleLeagueData !== nextProps.singleLeagueData){
            if(nextProps.currentLeagueId !== this.state.currentLeagueId){
                this.setState({
                    currentFixtureObj: this.getFirstFixture(
                        nextProps.singleLeagueData,
                        nextProps.currentMarketId
                    ),
                    currentLeagueId: nextProps.currentLeagueId
                });
            }
            if(nextProps.currentMarketId !== this.state.currentMarketId){
                this.setState({
                    currentFixtureObj: this.getFirstFixture(
                        nextProps.singleLeagueData,
                        nextProps.currentMarketId
                    ),
                    currentMarketId: nextProps.currentMarketId
                });
            }
        }

        this.setState({
            currentMarketName: nextProps.currentMarketName,
            currentLeagueMarkets: nextProps.currentLeagueMarkets,
            singleLeagueData: nextProps.singleLeagueData,
            sportId: nextProps.sportId,
            setIntervalCount: nextProps.setIntervalCount,
            sportName: nextProps.sportName,
        });
    }

    changeCurrentFixtureObj(fixtureObj){
        this.toggle('change_fixture');
        this.setState({
            currentFixtureObj: fixtureObj
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
        if (type == "change_fixture") {
            this.setState({dropDownFixture: !this.state.dropDownFixture})
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
        let currentFixtureName = this.state.currentFixtureObj !== null ?
            this.state.currentFixtureObj.Fixture.Participants[0].Name +
                (this.state.currentLeagueId == 64 ? ' @ ' : ' VS ') +
                    this.state.currentFixtureObj.Fixture.Participants[1].Name : '';

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
                            <div className="rightContent" onClick={(e)=>{this.toggle('change_fixture'); e.stopPropagation() }}>
                                <div className="dropDown_LeagueFixture">
                                    {currentFixtureName}
                                </div>
                            </div>
                        </div>

                        {this.state.dropDownFixture ?
                            <div className="ChangeLeague_drop_down_list">
                                {Object.keys(this.state.singleLeagueData).map((date) => {

                                    return Object.keys(this.state.singleLeagueData[date]).map((eventIndex) => {

                                        let participants = this.state.singleLeagueData[date][eventIndex].Fixture.Participants;
                                        let fixtureName = participants[0].Name +
                                                (this.state.currentLeagueId == 64 ? ' @ ' : ' VS ')
                                                    + participants[1].Name;

                                        return <div key={`fixture-dropdown-` + date + '-' + eventIndex}
                                                    className={`ChangeMarket_item ${fixtureName === currentFixtureName ? 'active' : ''}`}
                                                    onClick={() => this.changeCurrentFixtureObj(
                                                        this.state.singleLeagueData[date][eventIndex]
                                                    )}
                                                >
                                            {fixtureName}
                                        </div>;
                                    })
                                })}
                            </div>
                            :""
                        }
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

                        <div className="MarketGroup_Wrapper matches_events ">
                            <div className="MarketGroupButton" onClick={()=>this.toggleEvents('single_event')}>
                                <span className="MarketGroupButton_Text pre-match">
                                    {
                                        this.state.currentFixtureObj.Fixture.Participants[0].Name +
                                            (this.state.currentLeagueId == 64 ? ' @ ' : ' VS ')
                                                + this.state.currentFixtureObj.Fixture.Participants[1].Name
                                    }
                                </span>
                                <span className="cm-MarketSubGroup_BookCloses">Start Time
                                    {' ' + moment(moment.utc(this.state.currentFixtureObj.Fixture.StartDate)).local().format("DD MMM HH:mm")}
                                </span>
                            </div>
                             <div className="single_event_wrapp single_event">
                            <ManagMatch
                                needTwoColumnsRender={true}
                                blockNameOdd={true}
                                hideMarketGroupButton={true}
                                fromPage={"eventView"}
                                eventId={this.state.currentFixtureObj.FixtureId}
                                typeSport={this.state.sportId}
                                participants={this.state.currentFixtureObj.Fixture.Participants}
                                currentMarket={this.state.currentMarketName}
                                markets={this.state.currentFixtureObj.Markets}
                                addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}
                            />
                             </div>
                        </div>
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

export default SingleFixtureRenderComponent;