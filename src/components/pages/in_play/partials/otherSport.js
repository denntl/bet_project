import React from 'react';



class OtherSport extends React.Component {
    constructor(props) {
        super(props);
        // console.log('this.props.typeSport: ',this.props.typeSport)
        this.state = {
            typeSport: this.props.typeSport
        }
    }
    render() {
        return(
            <div className="play_classification in-play ">
                <div className="play_classification_header sport_orange_header">
                    <span>Greyhounds</span>
                    <div className="sport_events">
                        <div className="events_btn selected"></div>
                        <div className="events_btn"></div>
                        <div className="events_btn"></div>
                    </div>
                </div>
                <div className="play_classification_league">
                    <div className="play_league other_sport">
                        <div className="play_league_header other_sport">
                            <div className="competition_btn">
                                <div className="league_name"></div>
                                <div className="add_media_info">
                                    <div className="current_info">Each-way 1/4 1-2</div>
                                    <div className="media_btn">
                                        <div className="btn_loader_video"></div>
                                    </div>
                                </div>

                                <div className="favourite_icon_wrapper">
                                    <div className="favourite_icon"></div>

                                </div>
                            </div>
                            <div className="other_sport_header">
                                <div className="header_tabs">
                                    <div className="header_tabs_wrapp">
                                        <span className="header_tabs_label selected">Fixed Win</span>
                                    </div>
                                    <div className="header_tabs_wrapp">
                                        <span className="header_tabs_label">Fixed Place</span>
                                    </div>
                                    <div className="header_tabs_wrapp">
                                        <span className="header_tabs_label">Tote Win</span>
                                    </div>
                                    <div className="header_tabs_wrapp">
                                        <span className="header_tabs_label">Tote Place</span>
                                    </div>
                                </div>
                                <div className="header_name">Win and Each Way In-Play</div>
                                <div className="header_go_coupon">Go to Coupon</div>
                            </div>
                        </div>
                            <div className="play_league_group_wrapp opened">
                                <div className="ParticipantStemRenderer">
                                    <div className="Participant_General">
                                        {/*~~for horse~~*/}
                                        {this.state.typeSport == 687888 ?
                                            <div className="ParticipantCard">
                                                <div className="CardText">1</div>
                                            </div>
                                            :""
                                        }
                                        <div className="ParticipantImgContainer">

                                            <div className={this.state.typeSport == 687888 ? "ParticipantImg ParticipantHorseImg1": "ParticipantImg ParticipantImg1"}></div>
                                        </div>
                                        <div className="ParticipantRunnerInfo">
                                            <span className="ParticipantRunner">Rattling Moon</span>
                                            {/*~~for horse~~*/}
                                            {this.state.typeSport == 687888 ?
                                            < span className="ParticipantJockey">Mr C Dowson (7)</span> :""
                                            }
                                        </div>
                                        <div className="ParticipantRunnerOdds yellow_text">6.00</div>
                                    </div>
                                    <div className="Participant_General">
                                        <div className="ParticipantImgContainer">
                                            <div className="ParticipantImg ParticipantImg2"></div>
                                        </div>
                                        <div className="ParticipantRunnerInfo">
                                            <span className="ParticipantRunner">Conors Sky</span>
                                        </div>
                                        <div className="ParticipantRunnerOdds yellow_text">5.00</div>
                                    </div>
                                    <div className="Participant_General">
                                        <div className="ParticipantImgContainer">
                                            <div className="ParticipantImg ParticipantImg3"></div>
                                        </div>
                                        <div className="ParticipantRunnerInfo">
                                            <span className="ParticipantRunner">Conors Sky</span>
                                        </div>
                                        <div className="ParticipantRunnerOdds yellow_text">5.00</div>
                                    </div>
                                    <div className="Participant_General">
                                        <div className="ParticipantImgContainer">
                                            <div className="ParticipantImg ParticipantImg4"></div>
                                        </div>
                                        <div className="ParticipantRunnerInfo">
                                            <span className="ParticipantRunner">Conors Sky</span>
                                        </div>
                                        <div className="ParticipantRunnerOdds yellow_text">5.00</div>
                                    </div>
                                    <div className="Participant_General">
                                        <div className="ParticipantImgContainer">
                                            <div className="ParticipantImg ParticipantImg5"></div>
                                        </div>
                                        <div className="ParticipantRunnerInfo">
                                            <span className="ParticipantRunner">Conors Sky</span>
                                        </div>
                                        <div className="ParticipantRunnerOdds yellow_text">5.00</div>
                                    </div>
                                    <div className="Participant_General">
                                        <div className="ParticipantImgContainer">
                                            <div className="ParticipantImg ParticipantImg6"></div>
                                        </div>
                                        <div className="ParticipantRunnerInfo">
                                            <span className="ParticipantRunner">Conors Sky</span>
                                        </div>
                                        <div className="ParticipantRunnerOdds yellow_text">5.00</div>
                                    </div>
                                    <div className="Participant_General">
                                        <div className="ParticipantImgContainer">
                                            <div className=""></div>
                                        </div>
                                        <div className="ParticipantRunnerInfo horse_fav"> {/*~~ horse_fav for horse~~*/}
                                            <span className="ParticipantRunner">Favourite</span>
                                        </div>
                                        <div className="ParticipantRunnerOdds yellow_text">SP</div>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                </div>


        )

    }
}

export default OtherSport;
