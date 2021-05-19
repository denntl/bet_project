import React from 'react';
import moment from "moment/moment";
import {getEventsGroupedByColumn} from "../../helpers/data";
import ManagMatch from "../../pages/in_play/partials/managMatch";
import {NavLink} from "react-router-dom";

class RightColumn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            odds: this.props.odds,
            data: this.props.data,

        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            odds: nextProps.odds,
            data: nextProps.data
        });

    }

    componentDidMount() {

    }

    render() {
        return(
               <div>
                {
                    this.state.data.map((event, index) => {
                        return <div className="right_column_table" key={index}>
                            <div className="header_small">
                                <div className="img_container">
                                    <img src="/assets/img/hl_Football_ManCity_PepGuardiola_0417.jpg" alt="foto"/>
                                </div>
                                <div className="header_container green_header">
                                    <NavLink to="/sports/soccer/leagues/game"
                                             onClick={() => this.props.setSelectedEventFromOtherPage(event)}>
                                        <div className="header_competition">
                                            {`${event.Fixture.Sport.Name == "Football" ? "Soccer" : event.Fixture.Sport.Name} ${event.Fixture.League.Name}`}
                                        </div>
                                        <div className="fixture_block">
                                            <div className="fixture_label">
                                                {`${event.Fixture.Participants[0].Name} v ${event.Fixture.Participants[1].Name}`}
                                            </div>
                                            <div className="fixture_icon"></div>
                                        </div>
                                    </NavLink>
                                    {/*<a href="#" className="header_link yellow_text">More Markets</a>*/}

                                </div>
                            </div>
                            <ManagMatch
                                currentMarket={false}
                                fromPage="rightColumn"
                                typeSport={event.Fixture.Sport.Id}
                                eventId={event.FixtureId}
                                participants={event.Fixture.Participants}
                                markets={event.Markets}
                                addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}/>

                        </div>
                    })
                }
               </div>
        )
    }
}

export default RightColumn;