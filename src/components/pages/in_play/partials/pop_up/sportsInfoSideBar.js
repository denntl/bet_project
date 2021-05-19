import React from 'react';



class SportsInfoSideBar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {

    }

    render() {
        return(
            <div className="pop_up_sport soccer">
                <div className="pop_up_sport_wrapper">
                    <div className="pop_up_sport_header soccer">
                        Soccer {this.props.sportId}
                    </div>
                    <div className="Scroller_Content pop_up_sport_ClassificationContainer ">
                        <div className="Competition ">
                            <div className="Competition_Header ">Italy Campionato Primavera 1
                                <span className="Competition_FavouriteButton "></span>
                            </div>

                            <div className="pop_up_CompetitionContainer">
                                <div className="Fixture Fixture-hasTimer">
                                    <div className="Fixture_GameTimer">45:00</div>
                                    <div className="Fixture_TeamName ">
                                        <span className="Fixture_TeamNameOne ">Genoa U19</span>
                                        <span className="Fixture_TeamNameVersus "> v </span>
                                        <span className="Fixture_TeamNameTwo ">AC Milan U19</span>
                                    </div>
                                    <div className="Fixture_Score ">0-0</div>
                                    <div className="Fixture_FavouriteButton "></div>
                                </div>
                                <div className="Fixture Fixture-hasTimer ">
                                    <div className="Fixture_GameTimer">45:00</div>
                                    <div className="Fixture_TeamName ">
                                        <span className="Fixture_TeamNameOne ">Sassuolo U19</span>
                                        <span className="Fixture_TeamNameVersus "> v </span>
                                        <span className="Fixture_TeamNameTwo ">Sampdoria U19</span>
                                    </div>
                                    <div className="Fixture_Score ">0-0</div>
                                    <div className="Fixture_FavouriteButton "></div>
                                </div>
                            </div>
                        </div>

                        <div className="Competition ">
                            <div className="Competition_Header ">Italy Campionato Primavera 1
                                <span className="Competition_FavouriteButton "></span>
                            </div>

                            <div className="pop_up_CompetitionContainer">
                                <div className="Fixture Fixture-hasTimer">
                                    <div className="Fixture_GameTimer">45:00</div>
                                    <div className="Fixture_TeamName ">
                                        <span className="Fixture_TeamNameOne ">Genoa U19</span>
                                        <span className="Fixture_TeamNameVersus "> v </span>
                                        <span className="Fixture_TeamNameTwo ">AC Milan U19</span>
                                    </div>
                                    <div className="Fixture_Score ">0-0</div>
                                    <div className="Fixture_FavouriteButton "></div>
                                </div>
                                <div className="Fixture Fixture-hasTimer ">
                                    <div className="Fixture_GameTimer">45:00</div>
                                    <div className="Fixture_TeamName ">
                                        <span className="Fixture_TeamNameOne ">Sassuolo U19</span>
                                        <span className="Fixture_TeamNameVersus "> v </span>
                                        <span className="Fixture_TeamNameTwo ">Sampdoria U19</span>
                                    </div>
                                    <div className="Fixture_Score ">0-0</div>
                                    <div className="Fixture_FavouriteButton "></div>
                                </div>
                            </div>
                        </div>

                        <div className="Competition ">
                            <div className="Competition_Header ">Italy Campionato Primavera 1
                                <span className="Competition_FavouriteButton "></span>
                            </div>

                            <div className="pop_up_CompetitionContainer">
                                <div className="Fixture Fixture-hasTimer">
                                    <div className="Fixture_GameTimer">45:00</div>
                                    <div className="Fixture_TeamName ">
                                        <span className="Fixture_TeamNameOne ">Genoa U19</span>
                                        <span className="Fixture_TeamNameVersus "> v </span>
                                        <span className="Fixture_TeamNameTwo ">AC Milan U19</span>
                                    </div>
                                    <div className="Fixture_Score ">0-0</div>
                                    <div className="Fixture_FavouriteButton "></div>
                                </div>
                                <div className="Fixture Fixture-hasTimer ">
                                    <div className="Fixture_GameTimer">45:00</div>
                                    <div className="Fixture_TeamName ">
                                        <span className="Fixture_TeamNameOne ">Sassuolo U19</span>
                                        <span className="Fixture_TeamNameVersus "> v </span>
                                        <span className="Fixture_TeamNameTwo ">Sampdoria U19</span>
                                    </div>
                                    <div className="Fixture_Score ">0-0</div>
                                    <div className="Fixture_FavouriteButton "></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default SportsInfoSideBar;