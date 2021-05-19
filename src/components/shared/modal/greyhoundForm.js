import React from 'react';


class GreyhoundForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topNav: this.props.activePartGreyhoundForm
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
        return (
            <div id="career" className="modal_bet new_window audioModal" role="dialog">
                <div className="modal_content career scroll_block">
                    <div className="top_header career">
                        <button type="button" className="close"
                                onClick={() => this.props.closeModal('greyhoundForm')}></button>
                        <div className="logo"></div>
                    </div>
                    <div className="containerMain greyhoundForm">
                        <ul className="greyhoundForm_nav">
                            <li className={`greyhoundForm_nav_item ${this.state.topNav == "news" ? "active" : ""}`}
                                onClick={() => this.changeTab('news')}>News
                            </li>
                            <li className={`greyhoundForm_nav_item ${this.state.topNav == "raceCards" ? "active" : ""}`}
                                onClick={() => this.changeTab('raceCards')}>Race Cards
                            </li>
                            <li className={`greyhoundForm_nav_item ${this.state.topNav == "fastRes" ? "active" : ""}`}
                                onClick={() => this.changeTab('fastRes')}>Fast Results
                            </li>
                            <li className={`greyhoundForm_nav_item ${this.state.topNav == "results" ? "active" : ""}`}
                                onClick={() => this.changeTab('results')}>Results
                            </li>
                            <li className={`greyhoundForm_nav_item ${this.state.topNav == "nonRunners" ? "active" : ""}`}
                                onClick={() => this.changeTab('nonRunners')}>Non Runners
                            </li>
                            <li className={`greyhoundForm_nav_item ${this.state.topNav == "abc" ? "active" : ""}`}
                                onClick={() => this.changeTab('abc')}>ABC Guide
                            </li>
                        </ul>
                        <div className="greyhoundForm_content">
                            {this.state.topNav == "news" ?
                                <div>
                                    <div className="content_header">Top Greyhounds News</div>
                                    <div className="descriptionContent">
                                        <div className="description_img">
                                            <img src="../../../img/skysports-greyhound-racing-wimbledon_3916293.jpg" alt=""/>
                                        </div>
                                        <div className="description_text">
                                            <div className="description_title">Greyhound preview - March 18</div>
                                            <p>We run the rule over Monday's greyhounds action and pick out our best bets, as well as providing race-by-race selections.</p>
                                        </div>
                                    </div>
                                </div>
                                : ""}
                            {this.state.topNav == "raceCards" ?
                                <div></div>
                                : ""}
                            {this.state.topNav == "fastRes" ?
                                <div></div>
                                : ""}
                            {this.state.topNav == "results" ?
                                <div></div>
                                : ""}
                            {this.state.topNav == "nonRunners" ?
                                <div></div>
                                : ""}
                            {this.state.topNav == "abc" ?
                                <div></div>
                                : ""}

                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default GreyhoundForm;