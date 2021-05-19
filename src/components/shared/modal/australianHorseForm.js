import React from 'react';



class AustralianHorseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topNav: this.props.activePartAustralianHorseForm
        }
    }
    componentDidMount() {
        if ($('.scroll_block').length) {
            $('.scroll_block').mCustomScrollbar({
                axis: "y",
                theme: "minimal",
                scrollInertia: 550,
                scrollbarPosition: "inside"
            });
        }
    }
    changeTab = (tab) => {
        this.setState({
            topNav: tab
        })
    }
    render() {
        return(
            <div id="career" className="modal_bet new_window audioModal" role="dialog">
                <div className="modal_content career scroll_block">
                    <div className="top_header career austrHorse">
                        <button type="button" className="close" onClick={() => this.props.closeModal('australianHorseForm')}></button>
                        <div className="logo"></div>
                        <ul className="navMenu austrHorse">
                            <li className={`${this.state.topNav == "raceCards" ? "active":""}`} onClick={()=>this.changeTab('raceCards')}>Race Cards</li>
                            <li className={`${this.state.topNav == "raceOverview" ? "active":""}`} onClick={()=>this.changeTab('raceOverview')}>Race Overview</li>
                            <li className={`${this.state.topNav == "jockeyForm" ? "active":""}`} onClick={()=>this.changeTab('jockeyForm')}>JockeyForm</li>
                            <li className={`${this.state.topNav == "trainerForm" ? "active":""}`} onClick={()=>this.changeTab('trainerForm')}>Trainer Form</li>
                            <li className={`${this.state.topNav == "horseForm" ? "active":""}`} onClick={()=>this.changeTab('horseForm')}>Horse Form</li>
                            <li className={`${this.state.topNav == "blackBook" ? "active":""}`} onClick={()=>this.changeTab('blackBook')}>Black Book</li>
                        </ul>
                    </div>
                    <div className="containerMain austrHors">
                        <div className="austrHorseSideBar">
                            <div className="panel panel-leftnavi">
                                <div className="panel-heading-title">
                                    <span>Featured Events</span>
                                    <span className="date">20 Mar 2019</span>
                                </div>
                                <div className="panel-body">
                                    <div className="panel-group">
                                        <div className="panel panel-default">
                                            <div className="panel-heading meeting-heading" role="tab"
                                                 id="collapseListGroupHeading_133081">
                                                <h4 className="panel-title">
                                                    <a>Doomben</a>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {this.state.topNav == "raceCards" ?
                        <div className="austrHorsTabsContent">
                            <div className="placeholders">
                                <div className="texttitle">
                                    <b> Doomben &nbsp; 20 Mar 2019</b>
                                </div>
                                <div className="button-container">
                                    <a href="javascript:void(0)" className="btn-placeholders active" >Today</a>
                                    <a href="javascript:void(0)" className="btn-placeholders" >Tomorrow</a>
                                </div>
                            </div>
                            <div className="goingsoft">
                                <div className="texttitle">GOING: HEAVY 9</div>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead className="panel-heading-title">
                                    <tr>
                                        <th colSpan="5" className="race-headerinfo">
                                            <p >
                                                Lucrf Super Mdn Plate
                                                2050m
                                            </p>
                                            <p className="track-description">
                                                Track: HEAVY 9 &nbsp;
                                                Partly Cloudy (Max: 32) &nbsp;
                                                Rail: Out 8m Entire Course. (Pent: 6.38).  &nbsp;

                                            </p>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th colSpan="5">
                                            <div className="trackText" >
                                                Undaunted, Serlina and Tavisfaction can all push
                                                forward.&amp;nbsp;UNDAUNTED (2) hasn't found it easy to win but is
                                                consistent and deserves one after placing at his past three outings. Led
                                                and boxed on when runner-up at Gold Coast last time. May be looking for
                                                this trip and gets his chance with Lloyd going in. SERLINA (12) is close
                                                to a win after narrow seconds at her past three runs. Only missed by a
                                                nose last time. Threat. HAFU (4) worked to the line well to be beaten
                                                less than a length last start. The longer trip should suit. CHAINSMOKER
                                                (1) placed last start and could peak up in trip third
                                                up.&amp;nbsp;SUGGESTED PLAY: Undaunted gets his chance. Backing to win.
                                            </div>
                                        </th>
                                    </tr>
                                    </thead>

                                </table>
                                <table className="table secondTable">
                                    <tbody>
                                    <tr className="active">
                                        <td className="racenumber" style={{width:'5%'}}>
                                            1
                                        </td>
                                        <td style={{textAlign: 'right', width: '5%'}}>
                                            85x53
                                        </td>
                                        <td style={{width:'60%'}}>

                                            <a className="ahorse fcolor"
                                               href="#">
                                                CHAINSMOKER
                                            </a>
                                            <br/>

                                            <a className="ahorse fcolor" style={{color:'#bbb'}}
                                               href="#">P
                                                DUNCAN</a> <br/>
                                            4YO &nbsp;BAY &nbsp;GELDING 57.0KG<br/>
                                            P H Duncan, R Burt, A Williamson &amp; S McKinstry<br/>
                                            <span style={{color:'#bbb'}}> Third-up today. First-up 5th of 7 starters at Sunshine Coast 4yo+ Mdn Feb 10 over 1400m, 4-3/4 len behind Top Glamour with 57.5kg. Second-up reared at start and lost ground; 3rd of 13 runners at Gold Coast Mdn Plate Mar 9 over 1800m, 1-3/4 len behind Lucadeal carrying 57.5kg. Could peak third up.</span>
                                        </td>
                                        <td style={{width:'20%'}}>
                                            8<br/>
                                            <a className="ahorse fcolor"
                                               href="#">
                                                B PENGELLY
                                            </a>
                                        </td>
                                        <td style={{textAlign: 'right', width: '10%'}}>
                                            <img className="img-thumbnail"
                                                 alt="White, Royal Blue And Red Striped Sleeves"
                                                 src="../../img/1126197.gif"
                                                 data-holder-rendered="true" style={{width: '61px', height: '90px'}}
                                                 onError="this.onerror = '';this.style.visibility='hidden';"/>
                                        </td>
                                    </tr>
                                    <tr className="active">
                                        <td className="racenumber" style={{width:'5%'}}>
                                            2
                                        </td>
                                        <td style={{textAlign: 'right', width: '5%'}}>
                                            30232

                                        </td>
                                        <td style={{width:'60%'}}>

                                            <a className="ahorse fcolor"
                                               href="#">
                                                CHAINSMOKER
                                            </a>
                                            <br/>

                                            <a className="ahorse fcolor" style={{color:'#bbb'}}
                                               href="#">UNDAUNTED </a> <br/>
                                            4YO &nbsp;BAY &nbsp;GELDING 57.0KG<br/>
                                            P H Duncan, R Burt, A Williamson &amp; S McKinstry<br/>
                                            <span style={{color:'#bbb'}}> Third-up today. First-up 5th of 7 starters at Sunshine Coast 4yo+ Mdn Feb 10 over 1400m, 4-3/4 len behind Top Glamour with 57.5kg. Second-up reared at start and lost ground; 3rd of 13 runners at Gold Coast Mdn Plate Mar 9 over 1800m, 1-3/4 len behind Lucadeal carrying 57.5kg. Could peak third up.</span>
                                        </td>
                                        <td style={{width:'20%'}}>
                                            4<br/>
                                            <a className="ahorse fcolor"
                                               href="#">
                                                J LLOYD
                                            </a>
                                        </td>
                                        <td style={{textAlign: 'right', width: '10%'}}>
                                            <img className="img-thumbnail"
                                                 alt="White, Royal Blue And Red Striped Sleeves"
                                                 src="../../img/1103458.gif"
                                                 data-holder-rendered="true" style={{width: '61px', height: '90px'}}
                                                 onError="this.onerror = '';this.style.visibility='hidden';"/>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                            :""}
                        {this.state.topNav == "raceOverview" ?
                            <div></div>
                            :""}
                        {this.state.topNav == "jockeyForm" ?
                        <div></div>
                        :""}
                        {this.state.topNav == "trainerForm" ?
                            <div></div>
                            :""}
                        {this.state.topNav == "horseForm" ?
                        <div></div>
                        :""}
                        {this.state.topNav == "blackBook" ?
                            <div></div>
                        :""}
                     </div>
                    <footer className="footerhorseForm">
                        <div style={{padding: '20px 10px 20px 10px'}}>© 2001-2019 bet365.com All rights reserved</div>
                    </footer>
                </div>
            </div>
        )

    }
}

export default AustralianHorseForm;