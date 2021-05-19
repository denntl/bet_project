import React from 'react';
import moment from "moment";
import ManagMatch from "../../pages/in_play/partials/managMatch";
import {NavLink} from "react-router-dom";



class TableTotalgames extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSport: this.props.selectedSport,
            highlightsEvents: this.props.highlightsEvents,
            events: {},
            currentMarket: "1X2"
        }
        this.changeFormetArr = this.changeFormetArr.bind(this)
    }
    componentWillMount() {
        this.changeFormetArr(this.props.highlightsEvents);
    }
    componentWillReceiveProps(nextProps) {
        this.changeFormetArr(nextProps.highlightsEvents);
        this.setState({
            highlightsEvents: nextProps.highlightsEvents,
            selectedSport: nextProps.selectedSport
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.selectedSport != this.state.selectedSport) {
            let currentMarket;
            switch(this.state.selectedSport) {
                case "6046":
                case "35232":
                    currentMarket = "1X2"
                    break;
                case "154830":
                case "54094":
                    currentMarket = "12"
                    break;
                case "48242":
                    currentMarket = "Asian Handicap Including Overtime"
                    break;
            }
            this.setState({
                currentMarket: currentMarket
            })
        }
    }

    changeFormetArr(events) {
        let arr = {};
         events.forEach((event) => {

             var d = moment(event.Fixture.StartDate);
             d.month();
            let date =  d.format('ddd DD MMM');
             let ind = d.format('dddDDMMM');
             arr[ind] = {
                 date: date,
                 events: []
             }

        })
        events.forEach((event) => {
            var d = moment(event.Fixture.StartDate);
            d.month();
            let ind = d.format('dddDDMMM');
            arr[ind].events.push(event)
        })

        this.setState({
            events: arr
        })


    }
    selectEvent=(event)=>{



        this.props.setSelectedEventFromOtherPage(event);

        // window.localStorage.setItem("selectedEventId", fixtureId);
        // location.href = '//' + location.host + '/in-play?fixtureId=' + fixtureId;
    }

    addToBetSlip(info, bet, typeBet) {
        // console.log('66666666666666666666', info, bet, typeBet)
        if (Object.keys(bet).length) {
            // let type = typeBet == 1 ? 'home' : typeBet == 2 ? 'away' : "draw";
            if ($('.'+bet.Id+'-premath').hasClass('selected_bet')) {
                $('.'+bet.Id+'-premath').removeClass("selected_bet");
            } else {
                $('.'+bet.Id+'-premath').addClass("selected_bet");
            }

            this.props.addToBetSlip(info, bet, typeBet)
        } else {
            console.log("no bets")
        }


    }

    render() {
       // console.log('highlightsEvents', this.state)
        return(
            <div className="tab-content clearfix highlightsEvents" >
                <div className="tab-pane active">
                    <div className="green_header">
                        <span className="title">Highlights</span>
                        <a className="go_to">Go To Coupon</a>
                    </div>
                    {
                        Object.keys(this.state.events).map((id, index) => {
                            return   <div key={`table-total-${index}`} >
                                <div className="MarketCouponFixtureLabel">
                                    <div className="MarketHeaderLabel data">{this.state.events[id].date}</div>
                                    <div className="value_wrapp">
                                    <div className="value_column">
                                        <div className="MarketHeaderLabel">1</div>
                                    </div>
                                    <div className="value_column">
                                        <div className="MarketHeaderLabel">X</div>
                                    </div>
                                    <div className="value_column">
                                        <div className="MarketHeaderLabel">2</div>
                                    </div>
                                    <div className="value_column">
                                        <div className="MarketHeaderLabel"></div>
                                    </div>
                                    </div>
                                </div>
                                {
                                    this.state.events[id].events.map((event, index) => {
                                        return  <div key={`table-total-events-${index}`} className="MarketGroup">
                                            <div className="MarketCouponFixtureLabel">

                                                <div className="CouponParticipant">
                                                    <time>{moment(moment.utc(event.Fixture.StartDate)).local().format("HH:mm")}</time>


                                                    <NavLink to="/sports/soccer/leagues/game"
                                                         className="CouponParticipant-name"
                                                         onClick={() => this.selectEvent(event)}
                                                    >
                                                        {event.Fixture.Participants[0].Name} v {event.Fixture.Participants[1].Name}
                                                    </NavLink>




                                                    <div className="CouponParticipant-icon">
                                                        <div className="icon_video"></div>
                                                        <div className="icon_status"></div>
                                                    </div>
                                                </div>
                                                {event.Markets.length ?
                                                    // event.Markets !=null ?
                                                    <ManagMatch
                                                        currentMarket={this.state.currentMarket}
                                                        fromPage="highlights"
                                                        typeSport={this.state.selectedSport}
                                                        eventId={event.FixtureId}
                                                        participants={event.Fixture.Participants}
                                                        markets={event.Markets}
                                                        marketsCount={event.MarketsCount}
                                                        addToBetSlip={(info, bet, typeBet) => this.addToBetSlip(info, bet, typeBet)}
                                                    />

                                                    :

                                                        <div  className="value_wrapp">
                                                            <div className="value_column">
                                                                <div className="ParticipantOdds yellow_text"></div>
                                                            </div>
                                                            <div className="value_column">
                                                                <div className="ParticipantOdds yellow_text"></div>
                                                            </div>
                                                            <div className="value_column">
                                                                <div className="ParticipantOdds yellow_text"></div>
                                                            </div>
                                                            <div className="value_column" onClick={() => this.selectEvent(event.FixtureId)}>
                                                                <div className="ParticipantLink">0</div>
                                                            </div>
                                                        </div>

                                                }




                                            </div>

                                        </div>
                                    })
                                }
                            </div>

                        })
                    }

                </div>
            </div>
        )

    }
}

export default TableTotalgames;
