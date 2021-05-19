import React from 'react';



class MatchAlert extends React.Component {
    constructor(props) {
        super(props);

    }
    chooseAlert=()=>{
        if ($('.choose_alerts_variants').hasClass('show'))
            $('.choose_alerts_variants').removeClass('show')
        else(
            $('.choose_alerts_variants').addClass('show')
        )
    };


    render() {
        return(
            <div id="match_alert" className="modal_bet new_window" role="dialog">
                <div className="modal_content">
                    <div className="modalHeader">
                        <button type="button" className="close" onClick={() => this.props.closeModal('match')}></button>
                        <div className="base_header_title">Live Match Alerts</div>
                        <div className="base_header_subtitle">England Premier League</div>
                    </div>
                    <div className="modal-body">
                        <ul className="nav nav-tabs">
                            <li ><a data-toggle="tab" href="#matches" className="active">Matches</a></li>
                            <li><a data-toggle="tab" href="#teams">Teams</a></li>
                        </ul>

                        <div className="tab-content">
                            <div id="matches" className="tab-pane active">
                                <div className="scroll-block">
                                    <div className="choose_alerts">
                                        <div className="choose_alerts_title" onClick={()=>this.chooseAlert()}>Choose the alerts you receive</div>
                                        <div className="choose_alerts_variants ">
                                            <div className="choose_alerts_item">
                                                <label>
                                                    <span className="choose_alerts_item_title">Full Time Result</span>
                                                    <input className="checkbox" type="checkbox" name="checkbox-match"/>
                                                    <span className="checkbox-match"></span>
                                                </label>

                                            </div>
                                            <div className="choose_alerts_item">
                                                <label>
                                                    <span className="choose_alerts_item_title">Goals</span>
                                                    <input className="checkbox" type="checkbox" name="checkbox-match"/>
                                                    <span className="checkbox-match"></span>
                                                </label>
                                            </div>
                                            <div className="choose_alerts_item">
                                                <label>
                                                    <span className="choose_alerts_item_title">Half Time Result</span>
                                                    <input className="checkbox" type="checkbox" name="checkbox-match"/>
                                                    <span className="checkbox-match"></span>
                                                </label>
                                            </div>
                                            <div className="choose_alerts_item">
                                                <label>
                                                    <span className="choose_alerts_item_title">Kick Off</span>
                                                    <input className="checkbox" type="checkbox" name="checkbox-match"/>
                                                    <span className="checkbox-match"></span>
                                                </label>
                                            </div>
                                            <div className="choose_alerts_item">
                                                <label>
                                                    <span className="choose_alerts_item_title">Red Cards</span>
                                                    <input className="checkbox" type="checkbox" name="checkbox-match"/>
                                                    <span className="checkbox-match"></span>
                                                </label>
                                            </div>
                                            <div className="choose_alerts_item">
                                                <label>
                                                    <span className="choose_alerts_item_title">Yellow Cards</span>
                                                    <input className="checkbox" type="checkbox" name="checkbox-match"/>
                                                    <span className="checkbox-match"></span>
                                                </label>
                                            </div>
                                            <div className="choose_alerts_item">
                                                <label>
                                                    <span className="choose_alerts_item_title">Corners</span>
                                                    <input className="checkbox" type="checkbox" name="checkbox-match"/>
                                                    <span className="checkbox-match"></span>
                                                </label>
                                            </div>
                                            <div className="choose_alerts_item">
                                                <label>
                                                    <span className="choose_alerts_item_title">Penalties</span>
                                                    <input className="checkbox" type="checkbox" name="checkbox-match"/>
                                                    <span className="checkbox-match"></span>
                                                </label>
                                            </div>
                                            <div className="choose_alerts_item">
                                                <label>
                                                    <span className="choose_alerts_item_title">Penalties Missed</span>
                                                    <input className="checkbox" type="checkbox" name="checkbox-match"/>
                                                    <span className="checkbox-match"></span>
                                                </label>
                                            </div>
                                            <div className="choose_alerts_item">
                                                <label>
                                                    <span className="choose_alerts_item_title">Substitutions</span>
                                                    <input className="checkbox" type="checkbox" name="checkbox-match"/>
                                                    <span className="checkbox-match"></span>
                                                </label>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="duration_container">
                                        <div className="duration_item">
                                            <label>
                                                <span className="choose_alerts_item_title duration_btn">This Week</span>
                                                <input className="checkbox" type="checkbox" name="checkbox-match"/>
                                                <span className="checkbox-match"></span>
                                            </label>
                                        </div>
                                        <div className="duration_item">
                                            <label>
                                                <span className="choose_alerts_item_title duration_btn">All Seasons</span>
                                                <input className="checkbox" type="checkbox" name="checkbox-match"/>
                                                <span className="checkbox-match"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="match_schedule_table">
                                        <div className="schedule_header">Sat 24 Nov</div>
                                        <div className="match_schedule_event">
                                            <label>
                                                <span className="match_event_title">Brighton v Leicester</span>
                                                <input className="checkbox" type="checkbox" name="checkbox-match"/>
                                                <span className="checkbox-match"></span>
                                            </label>
                                        </div>
                                        <div className="match_schedule_event">
                                            <label>
                                                <span className="match_event_title">Everton v Cardiff</span>
                                                <input className="checkbox" type="checkbox" name="checkbox-match"/>
                                                <span className="checkbox-match"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="match_schedule_table">
                                        <div className="schedule_header">Sat 24 Nov</div>
                                        <div className="match_schedule_event">
                                            <label>
                                                <span className="match_event_title">Brighton v Leicester</span>
                                                <input className="checkbox" type="checkbox" name="checkbox-match"/>
                                                <span className="checkbox-match"></span>
                                            </label>
                                        </div>
                                        <div className="match_schedule_event">
                                            <label>
                                                <span className="match_event_title">Everton v Cardiff</span>
                                                <input className="checkbox" type="checkbox" name="checkbox-match"/>
                                                <span className="checkbox-match"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="matches_btnDone_wrapp">
                                    <div className="matches_btnDone" onClick={() => this.props.closeModal('match')}>Done</div>
                                </div>

                            </div>
                            <div id="teams" className="tab-pane fade">
                                <div className="team_list scroll-block">
                                        <div className="match_schedule_event">
                                            <div className="team_item">
                                                <label>
                                                    <span className="match_event_title">Arsenal</span>
                                                    <input className="checkbox" type="checkbox" name="checkbox-match"/>
                                                    <span className="checkbox-match"></span>
                                                </label>
                                            </div>
                                            <div className="team_item">
                                                <label>
                                                    <span className="match_event_title">Bournemouth</span>
                                                    <input className="checkbox" type="checkbox" name="checkbox-match"/>
                                                    <span className="checkbox-match"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="match_schedule_event">
                                            <div className="team_item">
                                                <label>
                                                    <span className="match_event_title">Brighton</span>
                                                    <input className="checkbox" type="checkbox" name="checkbox-match"/>
                                                    <span className="checkbox-match"></span>
                                                </label>
                                            </div>
                                            <div className="team_item">
                                                <label>
                                                    <span className="match_event_title">Burnley</span>
                                                    <input className="checkbox" type="checkbox" name="checkbox-match"/>
                                                    <span className="checkbox-match"></span>
                                                </label>
                                            </div>
                                        </div>
                                </div>
                                <div className="matches_btnDone_wrapp">
                                    <div className="matches_btnDone" onClick={() => this.props.closeModal('match')}>Done</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )

    }
}

export default MatchAlert;