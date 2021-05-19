import React from 'react';
import ManagMatch from "../../pages/in_play/partials/managMatch";
import TableHighlights from "./tableHighlights";
import Link from "react-router-dom/es/Link";
import {NavLink} from "react-router-dom";


class TopCouponTable extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            topCouponData: this.props.topCouponData,
            odds: this.props.odds
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState( {
            topCouponData: nextProps.topCouponData,
            odds: nextProps.odds
        })
    }

    render() {
        return (
            <div className = "topCouponContainer">
                {
                    this.state.topCouponData == null ? "" :
                        this.state.topCouponData.map((event, index) => {
                            return  <div key = {index} className="coupon_table">
                                        <div className="coupon_table_header">
                                            <div className="img_container">
                                                <img src="/img/coupon_img2.jpg" alt="coupon_img"/>
                                            </div>
                                            <div className="header_container">
                                                <div className="header_competition">{event.Fixture.League.Name}</div>
                                                <div className="fixture_block">
                                                    <NavLink to="/sports/soccer/leagues/game"
                                                         onClick={() => this.props.setSelectedEventFromOtherPage(event)}
                                                    >
                                                        <span className="fixture_label">
                                                            <span className = "team-1">{event.Fixture.Participants[0].Name} </span>
                                                            v
                                                            <span className = "team-2"> {event.Fixture.Participants[1].Name}</span>
                                                        </span>
                                                    </NavLink>

                                                    {/*<Link to={{*/}
                                                        {/*pathname:"/in-play/event_view",*/}
                                                        {/*search: 'id='+event.FixtureId,*/}
                                                        {/*state:"game"*/}
                                                    {/*}} className="link"*/}
                                                    {/*onClick={() => this.props.setSelectedEventFromOtherPage(event)}>*/}
                                                        {/*<span className="fixture_label">*/}
                                                            {/*<span className = "team-1">{event.Fixture.Participants[0].Name} </span>*/}
                                                            {/*v*/}
                                                            {/*<span className = "team-2"> {event.Fixture.Participants[1].Name}</span>*/}
                                                        {/*</span>*/}
                                                    {/*</Link>*/}
                                                    {/*<span className="fixture_label">*/}
                                                        {/*<span className = "team-1">{event.Fixture.Participants[0].Name} </span>*/}
                                                        {/*v*/}
                                                        {/*<span className = "team-2"> {event.Fixture.Participants[1].Name}</span>*/}
                                                    {/*</span>*/}
                                                    <div className="fixture_icon"></div>
                                                </div>
                                                <NavLink to="/sports/soccer/leagues/game"
                                                         onClick={() => this.props.setSelectedEventFromOtherPage(event)}
                                                         className="header_link yellow_text"
                                                >
                                                    More Markets
                                                </NavLink>
                                            </div>
                                        </div>
                                       <ManagMatch
                                           currentMarket={false}
                                           fromPage="topCouponTable"
                                           typeSport={event.Fixture.Sport.Id}
                                           eventId={event.FixtureId}
                                           participants={event.Fixture.Participants}
                                           markets={event.Markets}
                                           addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}/>
                                    </div>
                        })
                }
            </div>

            // <div className="coupon_table">
            //     <div className="coupon_table_header">
            //         <div className="img_container">
            //             <img src="/img/coupon_img2.jpg" alt="coupon_img"/>
            //         </div>
            //         <div className="header_container">
            //             <div className="header_competition">Portugal Primeira Liga</div>
            //             <div className="fixture_block">
            //                 <div className="fixture_label">Braga v Sporting</div>
            //                 <div className="fixture_icon"></div>
            //             </div>
            //             <a href="#" className="header_link yellow_text">More Markets</a>
            //         </div>
            //     </div>
            //     <div className="match_table_grid">
            //         <div className="match_grid grid3cols">
            //             <div className="title_container">
            //                 <div className="title_name">Full Time Result</div>
            //                 <div className="title_icon"></div>
            //             </div>
            //             <div className="match_participant_row">
            //                 <div className="match_participant">
            //                     <div className="participant_name">
            //                         Braga
            //                     </div>
            //                     <div className="participant_odds yellow_text">
            //                         1.25
            //                     </div>
            //                 </div>
            //                 <div className="match_participant">
            //                     <div className="participant_name">
            //                         Draw
            //                     </div>
            //                     <div className="participant_odds yellow_text">
            //                         2.02
            //                     </div>
            //                 </div>
            //                 <div className="match_participant">
            //                     <div className="participant_name">
            //                         Sporting
            //                     </div>
            //                     <div className="participant_odds yellow_text">
            //                         1.06
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //         <div className="match_grid grid3cols">
            //             <div className="title_container">
            //                 <div className="title_name">Correct Score</div>
            //                 <div className="title_icon"></div>
            //             </div>
            //             <div className="match_participant_row">
            //                 <div className="match_participant">
            //                     <div className="participant_name">
            //                         Braga 1-0
            //                     </div>
            //                     <div className="participant_odds yellow_text">
            //                         1.052
            //                     </div>
            //                 </div>
            //                 <div className="match_participant">
            //                     <div className="participant_name">
            //                         Braga 2-0
            //                     </div>
            //                     <div className="participant_odds yellow_text">
            //                         5.3
            //                     </div>
            //                 </div>
            //                 <div className="match_participant">
            //                     <div className="participant_name">
            //                         Braga 2-1
            //                     </div>
            //                     <div className="participant_odds yellow_text">
            //                         2.3
            //                     </div>
            //                 </div>
            //             </div>
            //             <div className="match_participant_row">
            //                 <div className="match_participant">
            //                     <div className="participant_name">
            //                         Braga 1-0
            //                     </div>
            //                     <div className="participant_odds yellow_text">
            //                         1.03
            //                     </div>
            //                 </div>
            //                 <div className="match_participant">
            //                     <div className="participant_name">
            //                         Braga 2-0
            //                     </div>
            //                     <div className="participant_odds yellow_text">
            //                         2.3
            //                     </div>
            //                 </div>
            //                 <div className="match_participant">
            //                     <div className="participant_name">
            //                         Braga 2-1
            //                     </div>
            //                     <div className="participant_odds yellow_text">
            //                         1.3
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //         <div className="match_grid grid2cols">
            //             <div className="title_container">
            //                 <div className="title_name">Total Goals</div>
            //                 <div className="title_icon"></div>
            //             </div>
            //             <div className="match_participant_row">
            //                 <div className="match_participant">
            //                     <div className="participant_name">
            //                         Under 2.5
            //                     </div>
            //                     <div className="participant_odds yellow_text">
            //                         1.03
            //                     </div>
            //                 </div>
            //                 <div className="match_participant">
            //                     <div className="participant_name">
            //                         Over 2.5
            //                     </div>
            //                     <div className="participant_odds yellow_text">
            //                         -134
            //                     </div>
            //                 </div>
            //
            //             </div>
            //         </div>
            //
            //         <div className="match_grid grid3cols">
            //             <div className="title_container">
            //                 <div className="title_name">Full Time Result</div>
            //                 <div className="title_icon"></div>
            //             </div>
            //             <div className="match_participant_row">
            //                 <div className="match_participant">
            //                     <div className="participant_name">
            //                         Braga
            //                     </div>
            //                     <div className="participant_odds yellow_text">
            //                         3.25
            //                     </div>
            //                 </div>
            //                 <div className="match_participant">
            //                     <div className="participant_name">
            //                         Draw
            //                     </div>
            //                     <div className="participant_odds yellow_text">
            //                         1.05
            //                     </div>
            //                 </div>
            //                 <div className="match_participant">
            //                     <div className="participant_name">
            //                         Sporting
            //                     </div>
            //                     <div className="participant_odds yellow_text">
            //                         2.02
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //
            //     </div>
            // </div>
        );
    }


}

export default TopCouponTable;