import React from 'react';
import {NavLink} from "react-router-dom";
import ResponsibleGambling from "./responsibleGamblingTabs/responsibleGambling";
import StayInControl from "./responsibleGamblingTabs/stayInControl";
import SupportAndAdvice from "./responsibleGamblingTabs/supportAndAdvice";






class ResponsibleGamblingMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topTab:this.props.activePartLiveStreaming,
            isResponsibleGambling:false,
            isSupportAndAdvice:false,
            isStayInControl:false,
            isMainPage:true
        };
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
            isMainPage:false
        })
        if (tab == 'responsibleGambling') {
            this.setState({
                isResponsibleGambling:true,
                isSupportAndAdvice:false,
                isStayInControl:false,
            })
        }
        if (tab == 'stayInControl') {
            this.setState({
                isResponsibleGambling:false,
                isSupportAndAdvice:false,
                isStayInControl:true,
            })
        }
        if (tab == 'supportAndAdvice') {
            this.setState({
                isResponsibleGambling:false,
                isSupportAndAdvice:true,
                isStayInControl:false,
            })
        }
    }
    goMainPage=()=>{
        this.setState({
            isMainPage:true,
            isResponsibleGambling:false,
            isSupportAndAdvice:false,
            isStayInControl:false,
        })
    }

    render() {
        return(
            <div id="responsibleGambling" className="modal_bet new_window responsibleGambling" role="dialog">
                <div className="modal_content scroll_block">
                        <div className="responsible_top_banner_header">
                            <button type="button" className="close" onClick={() => this.props.closeModal('responsibleGambling')}></button>
                            <div className="responsibleLogo" onClick={()=>this.goMainPage()}/>
                            <nav className="responsible_nav">
                                <ul>
                                    <li className={`top-link ${this.state.isResponsibleGambling ? 'active' : ''}`}><a title="Responsible Gambling" onClick={()=>this.changeTab("responsibleGambling")}>Responsible Gambling</a></li>
                                    <li className={`top-link ${this.state.isStayInControl ? 'active' : ''}`}><a title="Stay in Control" onClick={()=>this.changeTab("stayInControl")}>Stay in Control</a></li>
                                    <li className={`top-link ${this.state.isSupportAndAdvice ? 'active' : ''}`}><a title="Support and Advice" onClick={()=>this.changeTab("supportAndAdvice")}>Support and Advice</a></li>
                                </ul>
                            </nav>
                        </div>
                    {this.state.isMainPage ?
                        <div className="mainPage">
                            <div className="responsible_top_banner">
                                <div className="top_banner_slogan">
                                    <div className="top_banner_slogan_text">
                                        Making sure <span>everyone</span> gambles responsibly.
                                    </div>
                                    <div className="top_banner_slogan_btn"><a>Find Out More</a></div>
                                </div>
                            </div>
                            <div className="r_tools">
                                <div className="r_tools_title">Useful tools to help you stay in control of your gambling</div>
                                <div className="r_tools_container">
                                    <div className="r_tools_prod">
                                        <div className="r_tools_prod_img">
                                            <img src="../img/tools-dep-limits.svg" alt="icon"/>
                                        </div>
                                        <div className="r_tools_prod_title">Deposit Limits</div>
                                        <div className="r_tools_prod_text">Limit the amount you can deposit in hours and days</div>
                                    </div>
                                    <div className="r_tools_prod">
                                        <div className="r_tools_prod_img">
                                            <img src="../img/tools-reality-checks.svg" alt="icon"/>
                                        </div>
                                        <div className="r_tools_prod_title">Reality Checks</div>
                                        <div className="r_tools_prod_text">Set up notifications to help you manage your time</div>
                                    </div>
                                    <div className="r_tools_prod">
                                        <div className="r_tools_prod_img">
                                            <img src="../img/tools-time-out.svg" alt="icon"/>
                                        </div>
                                        <div className="r_tools_prod_title">Time-Out</div>
                                        <div className="r_tools_prod_text">Give yourself a break from gambling</div>
                                    </div>
                                    <div className="r_tools_prod">
                                        <div className="r_tools_prod_img">
                                            <img src="../img/tools-self-excl.svg" alt="icon"/>
                                        </div>
                                        <div className="r_tools_prod_title">Self-Exclusion</div>
                                        <div className="r_tools_prod_text">Stay in control of your gambling</div>
                                    </div>

                                </div>
                            </div>
                            <div className="r_facts">
                                <div className="headline-and-cta">
                                    <div className="headline-and-cta__headline">Do you <strong>really</strong> know how gambling works?</div>
                                    <a href="#" className="headline-and-cta__cta">READ THE FACTS</a>
                                </div>
                            </div>
                            <div className="r_features">
                                <div className="r_features_prod">
                                    <div className="r_features_prod_text">
                                        <div className="r_features_prod_title">Protecting Minors</div>
                                        <div className="r_features_prod_info">It is against the law for those under the age of 18 to gamble and bet365 takes its responsibility to prevent underage gambling very seriously.</div>
                                        <div className="r_features_prod_link">Find out more</div>
                                    </div>
                                    <div className="r_features_prod_img right"></div>
                                </div>
                                <div className="r_features_prod">
                                    <div className="r_features_prod_text">
                                        <div className="r_features_prod_title">Helping Friends and Family</div>
                                        <div className="r_features_prod_info">If you are concerned about the gambling behaviour of a friend or family member, don't hesitate and help them get the support they need.</div>
                                        <div className="r_features_prod_link">Find out more</div>
                                    </div>
                                    <div className="r_features_prod_img right"></div>
                                </div>
                            </div>
                            <div className="r-helpful-orgs">
                                <div className="r-helpful-orgs_title">Helpful Organisations</div>
                                <div className="r-helpful-orgs_text">There are a number of independent gambling support organisations who offer free and confidential advice with a range of contact methods.</div>
                                <div className="cta-link">See full list</div>
                            </div>

                        </div>
                    :
                        <div>
                            {this.state.isResponsibleGambling ?
                                <ResponsibleGambling/>
                                :""
                            }
                            {this.state.isStayInControl ?
                                <StayInControl/>
                                :""
                            }
                            {this.state.isSupportAndAdvice ?
                                <SupportAndAdvice/>
                                :""
                            }
                        </div>
                    }
                    <div className="r_footer">
                        <div className="r_footer_container">
                            <div className="r_footer_links">
                                <a href="#">Recognising a Problem</a>
                                <a href="#">Stay in Control</a>
                                <a href="#">Take a Break</a>
                                <a href="#">Support and Advice</a>
                                <a href="#">Protecting Minors</a>
                                <a href="#">Contact Us</a>
                            </div>
                            <div className="r_footer_logo"/>
                            <div className="r_footer_info">
                                <a href="#" className="icon_mga"></a>
                                <div className="icon_limited"></div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        )}
}

export default ResponsibleGamblingMain;