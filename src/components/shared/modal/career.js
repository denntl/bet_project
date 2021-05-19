import React from 'react';
import CareerHome from "./careerTabs/careerHome";
import CareerAboutUs from "./careerTabs/careerAboutUs";
import CareerCurrentVacancies from "./careerTabs/careerCurrentVacancies";
import CareerGraduateScheme from "./careerTabs/careerGraduateScheme";
import CareerContact from "./careerTabs/careerContact";



class Career extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            topTab:this.props.activePartCareer
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
            topTab: tab
        })
    }

    render() {
        return(
            <div id="career" className="modal_bet new_window audioModal" role="dialog">
                <div className="modal_content career scroll_block">
                    <div className="top_header career">
                            <button type="button" className="close" onClick={() => this.props.closeModal('careerBet')}></button>
                            <div className="logo"></div>
                            <nav className="career_nav">
                                <ul>
                                    <li className={`top-link ${this.state.topTab == "home" ? "active":""} `} onClick={()=>this.changeTab('home')}>Home</li>
                                    <li className={`top-link ${this.state.topTab == "aboutUs" ? "active":""} `} onClick={()=>this.changeTab('aboutUs')}>About Us</li>
                                    <li className={`top-link ${this.state.topTab == "currentVacancies" ? "active":""} `} onClick={()=>this.changeTab('currentVacancies')}>Current Vacancies</li>
                                    <li className={`top-link ${this.state.topTab == "graduateScheme" ? "active":""} `} onClick={()=>this.changeTab('graduateScheme')}>Graduate Scheme</li>
                                    <li className={`top-link ${this.state.topTab == "contact" ? "active":""} `} onClick={()=>this.changeTab('contact')}>Contact</li>
                                </ul>
                            </nav>
                    </div>
                    <div className="containerMain white">
                        {this.state.topTab == "home" ?
                            <CareerHome/>
                        :""}
                        {this.state.topTab == "aboutUs" ?
                            <CareerAboutUs/>
                            :""}
                        {this.state.topTab == "currentVacancies" ?
                            <CareerCurrentVacancies/>
                            :""}
                        {this.state.topTab == "graduateScheme" ?
                            <CareerGraduateScheme/>
                            :""}
                        {this.state.topTab == "contact" ?
                            <CareerContact/>
                        :""}
                    </div>
                    <div className="careerFooter">
                            <ul className="footer_nav">
                                <li className={`footer-link ${this.state.topTab == "home" ? "active":""} `} onClick={()=>this.changeTab('home')}>Home</li>
                                <li className={`footer-link ${this.state.topTab == "aboutUs" ? "active":""} `} onClick={()=>this.changeTab('aboutUs')}>About Us</li>
                                <li className={`footer-link ${this.state.topTab == "currentVacancies" ? "active":""} `} onClick={()=>this.changeTab('currentVacancies')}>Current Vacancies</li>
                                <li className={`footer-link ${this.state.topTab == "graduateScheme" ? "active":""} `} onClick={()=>this.changeTab('graduateScheme')}>Graduate Scheme</li>
                                <li className={`footer-link ${this.state.topTab == "contact" ? "active":""} `} onClick={()=>this.changeTab('contact')}>Contact</li>
                            </ul>
                        <small> © 2001-2019 bet365 Careers. All rights reserved.</small>

                    </div>
                </div>
            </div>
        )

    }
}

export default Career;