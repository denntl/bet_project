import React from 'react';



class TabVideo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="tab-block" id="media">
                {/*~~~~~~~~~~~~~soccer block~~~~~~~~~~~~~~~~~~*/}
                <div className="classification_block soccer" >
                    <div className="classification_header soccer green_header"
                         data-toggle="collapse" data-target="#classification_container_soccer"
                         aria-expanded="false"
                         aria-controls="collapse_classification_container">
                        <span className="classification_header_icon"></span>
                        <span className="classification_header_label">Soccer</span>
                    </div>
                    <div className="ClassificationContainer" id="soccer_block">
                        <div className="GameGroup collapse show" id="classification_container_soccer"
                             aria-expanded="true">

                            <div className="Market soccer_game_group">
                                <div className="Market-Header" data-toggle="collapse"
                                     data-target="#competition_container"
                                     aria-expanded="false"
                                     aria-controls="collapse_competition_container">
                                    <div className="competition_header">Match Soccer
                                    </div>

                                </div>
                                <span className="competition_icon_favourite" data-cat="#soccer_block"></span>
                                <div className="OneGameContainer" id = "soccer_table">
                                    <div className="oneGame soccer_table" >
                                        <div className="Market-Cluster1 collapse show"
                                             id="competition_container" aria-expanded="true">


                                            <div data-game="#soccer_table_details" className="fixture" >

                                                <div className="team_stack">
                                                    <div className="team_stack_team">
                                                        Bangladesh
                                                    </div>
                                                    <div className="team_stack_team">
                                                        Laos
                                                    </div>
                                                </div>
                                                <div className="score_display_standart">
                                                    <div className="video_icon"></div>
                                                    <div className="team_score">
                                                        <span className="score">1</span>-<span
                                                        className="score">0</span>
                                                    </div>
                                                    <div className="game_timer">
                                                        78:27
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="open_icon" data-toggle="collapse" data-target="#fixture" aria-expanded="false"
                                                 aria-controls="collapse_competition_container"></div>
                                            <div className="Market-Cluster collapse" id="fixture"
                                                 aria-expanded="true">
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
                                        <span className="game_icon_favourite" data-table="#soccer_table"></span>
                                    </div>
                                </div>

                            </div>
                            <div className="classification_noGames">
                                All events have been moved to favourites
                            </div>

                        </div>



                    </div>
                </div>
            </div>
        )

    }
}

export default TabVideo;