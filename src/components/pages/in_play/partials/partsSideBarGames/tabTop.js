import React from 'react';



class TabTop extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="tab-block" id="top">
                {/*~~~~~~~~~~~~~tennis block~~~~~~~~~~~~~~~~~~*/}
                <div className="classification_block tennis" >
                    <div className="classification_header tennis sport_olive_header"
                         data-toggle="collapse"
                         data-target="#classification_container_tennis"
                         aria-expanded="false"
                         aria-controls="collapse_classification_container">
                        <span className="classification_header_icon"></span>
                        <span className="classification_header_label">Tennis</span>
                    </div>
                    <div className="ClassificationContainer" id="tennis_block">
                        <div className="GameGroup collapse show"
                             id="classification_container_tennis" aria-expanded="true">


                            <div className="Market tennis_game_group">
                                <div className="Market-Header" data-toggle="collapse"
                                     data-target="#competition_container_tennis"
                                     aria-expanded="false"
                                     aria-controls="collapse_competition_container">
                                    <div className="competition_header">Match Tennis
                                    </div>

                                </div>
                                <span className="competition_icon_favourite" data-cat="#tennis_block"></span>
                                <div className="OneGameContainer" id="tennis_table">
                                    <div className="oneGame" >
                                        <div className="competition_header_clone"></div>
                                        <div className="Market-Cluster1 collapse show"
                                             id="competition_container_tennis" aria-expanded="true">

                                            <div data-game="#tennis_table_details" className="fixture" >
                                                <div className="team_stack">
                                                    <div className="team_stack_team">
                                                        Bangladesh
                                                    </div>
                                                    <div className="team_stack_team">
                                                        Laos
                                                    </div>
                                                </div>
                                                <div className="score_display_standart">
                                                    <div className="team_score">
                                                        <span className="score">1</span> <span
                                                        className="score">0</span> <span
                                                        className="score">0</span>
                                                    </div>
                                                    <div className="team_score">
                                                        <span className="score">1</span> <span
                                                        className="score">0</span> <span
                                                        className="score">0</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="open_icon" data-toggle="collapse"
                                                 data-target="#fixture_tennis" aria-expanded="false"
                                                 aria-controls="collapse_competition_container"></div>
                                            <div className="Market-Cluster collapse"
                                                 id="fixture_tennis" aria-expanded="true">
                                                <div className="market_render">
                                                    <div className="participant_abbreviated">
                                                        <span className="participant_abbreviated_name">1</span>
                                                        <span className="participant_abbreviated_odds yellow_text">-2000</span>
                                                    </div>
                                                    <div className="participant_abbreviated">
                                                        <span className="participant_abbreviated_name">2</span>
                                                        <span className="participant_abbreviated_odds yellow_text">-1200</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="game_icon_favourite" data-table="#tennis_table"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="classification_noGames">
                            All events have been moved to favourites
                        </div>
                    </div>

                </div>
                {/*~~~~~~~~~~~~~badminton block~~~~~~~~~~~~~~~~~~*/}
                <div className="classification_block badminton" >
                    <div className="classification_header badminton sport_blue_header"
                         data-toggle="collapse"
                         data-target="#classification_container_badminton"
                         aria-expanded="false"
                         aria-controls="collapse_classification_container">
                        <span className="classification_header_icon" ></span>
                        <span className="classification_header_label">Badminton</span>
                    </div>
                    <div className="ClassificationContainer" id="badminton_block">
                        <div className="GameGroup collapse show"
                             id="classification_container_badminton" aria-expanded="true">

                            <div className="Market badminton_game_group">
                                <div className="Market-Header" data-toggle="collapse"
                                     data-target="#competition_container_badminton"
                                     aria-expanded="false"
                                     aria-controls="collapse_competition_container">
                                    <div className="competition_header">Match Badminton
                                    </div>


                                </div>
                                <span className="competition_icon_favourite" data-cat="#badminton_block"></span>
                                <div className="OneGameContainer" id = "badminton_table">
                                    <div className="oneGame badminton_table">
                                        <div className="Market-Cluster1 collapse show"
                                             id="competition_container_badminton" aria-expanded="true">

                                            <div data-game="#badmintion_table_details" className="fixture">
                                                <div className="team_stack">
                                                    <div className="team_stack_team">
                                                        Bangladesh
                                                    </div>
                                                    <div className="team_stack_team">
                                                        Laos
                                                    </div>
                                                </div>
                                                <div className="score_display_standart">
                                                    <div className="team_score">
                                                        <span className="score">1</span> <span
                                                        className="score">0</span> <span
                                                        className="score">0</span>
                                                    </div>
                                                    <div className="team_score">
                                                        <span className="score">1</span> <span
                                                        className="score">0</span> <span
                                                        className="score">0</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="open_icon" data-toggle="collapse"
                                                 data-target="#fixture_badminton" aria-expanded="false"
                                                 aria-controls="collapse_competition_container"></div>
                                            <div className="Market-Cluster collapse"
                                                 id="fixture_badminton" aria-expanded="true">
                                                <div className="market_render">
                                                    <div className="participant_abbreviated">
                                                        <span className="participant_abbreviated_name">1</span>
                                                        <span className="participant_abbreviated_odds yellow_text">-2000</span>
                                                    </div>
                                                    <div className="participant_abbreviated">
                                                        <span className="participant_abbreviated_name">2</span>
                                                        <span className="participant_abbreviated_odds yellow_text">-1200</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="game_icon_favourite" data-table="#badminton_table"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="classification_noGames">
                            All events have been moved to favourites
                        </div>
                    </div>

                </div>
            </div>
        )

    }
}

export default TabTop;