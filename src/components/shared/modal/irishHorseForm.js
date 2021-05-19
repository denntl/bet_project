import React from 'react';


class IrishHorseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topNav: this.props.activePartIrishHorseForm
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
                                onClick={() => this.props.closeModal('irishHorseForm')}></button>
                        <div className="logo"></div>
                    </div>
                    <div className="containerMain horseForm">
                        <ul className="greyhoundForm_nav">
                            <li className={`greyhoundForm_nav_item horse ${this.state.topNav == "racecards" ? "active" : ""}`}
                                onClick={() => this.changeTab('racecards')}>Racecards
                            </li>
                            <li className={`greyhoundForm_nav_item horse ${this.state.topNav == "fastResults" ? "active" : ""}`}
                                onClick={() => this.changeTab('fastResults')}>Fast Results
                            </li>
                            <li className={`greyhoundForm_nav_item horse ${this.state.topNav == "fullResults" ? "active" : ""}`}
                                onClick={() => this.changeTab('fullResults')}>Full Results
                            </li>
                            <li className={`greyhoundForm_nav_item horse ${this.state.topNav == "resultsArchive" ? "active" : ""}`}
                                onClick={() => this.changeTab('resultsArchive')}>Results Archive
                            </li>
                            <li className={`greyhoundForm_nav_item horse ${this.state.topNav == "going" ? "active" : ""}`}
                                onClick={() => this.changeTab('going')}>Going
                            </li>
                            <li className={`greyhoundForm_nav_item horse ${this.state.topNav == "nonRunners" ? "active" : ""}`}
                                onClick={() => this.changeTab('nonRunners')}>Non-Runners
                            </li>
                            <li className={`greyhoundForm_nav_item horse ${this.state.topNav == "aBCGuide" ? "active" : ""}`}
                                onClick={() => this.changeTab('aBCGuide')}>ABC Guide
                            </li>
                            <li className={`greyhoundForm_nav_item horse ${this.state.topNav == "todayPointers" ? "active" : ""}`}
                                onClick={() => this.changeTab('todayPointers')}>Today's Pointers
                            </li>
                            <li className={`greyhoundForm_nav_item horse ${this.state.topNav == "trainer" ? "active" : ""}`}
                                onClick={() => this.changeTab('trainer')}>Trainer and Jockey Stats
                            </li>
                            <li className={`greyhoundForm_nav_item horse ${this.state.topNav == "formSearch" ? "active" : ""}`}
                                onClick={() => this.changeTab('formSearch')}>Form Search
                            </li>
                            <li className={`greyhoundForm_nav_item horse ${this.state.topNav == "nagMe" ? "active" : ""}`}
                                onClick={() => this.changeTab('nagMe')}>Nag Me
                            </li>
                        </ul>
                        <div className="greyhoundForm_content">
                            {this.state.topNav == "racecards" ?
                                <div>
                                    <div className="bread">
                                        <ul>
                                            <li><a href="javascript:void(0)">Racing Form</a><span
                                                className="pipe">/</span></li>
                                            <li className="on">Today</li>
                                        </ul>

                                    </div>
                                    <div className="tab t2">
                                        <ul className="tab-ul">
                                            <li className="l active"><a href="javascript:void(0)"
                                                                    className="a">Today</a></li>
                                            <li className="l "><a href="javascript:void(0)"
                                                                  className="a">Tomorrow</a></li>
                                            <li className="l "><a href="javascript:void(0)"
                                                                  className="a">Thu Mar 21 </a></li>
                                            <li className="l "><a href="javascript:void(0)"
                                                                  className="a">Fri Mar 22 </a></li>
                                            <li className="l "><a href="javascript:void(0)"
                                                                  className="a">Sat Mar 23 </a></li>
                                            <li className="l "><a href="javascript:void(0)"
                                                                  className="a">Sun Mar 24 </a></li>
                                            <li className="l "><a href="javascript:void(0)"
                                                                  className="a">Mon Mar 25 </a></li>
                                        </ul>
                                    </div>
                                    <div className="block">
                                        <section className="block_content">
                                            <div className="content-header">
                                                <h1>Today's Racecards</h1>
                                            </div>
                                            <div className="anchor-links">
                                                <a href="javascript:void(0)" className="anchor-link">Mahoning Valley</a>
                                                <a href="javascript:void(0)" className="anchor-link">Philadelphia
                                                    Park</a>
                                                <a href="javascript:void(0)" className="anchor-link">Sam Houston
                                                    Race Park</a>
                                                <a href="javascript:void(0)" className="anchor-link">Sunland Park</a>
                                                <a href="javascript:void(0)" className="anchor-link">Turf Paradise</a>
                                            </div>
                                            <section className="rac-dgp">
                                                <h3 className="hdr t2" id="Mahoning Valley">
                                                    Mahoning Valley </h3>

                                                <ul className="list hdr-sublinks">
                                                    <li><strong>Surface:</strong> Dirt</li>
                                                </ul>

                                                <ul>
                                                    <li className="rac-cards  click">
                                                        <div className="ix ixt">16:45</div>
                                                        <div className="ix ixc">
                                                            <a href="javascript:void(0)"
                                                               className="ixa"> Race 1 - Maiden Special Weight
                                                                (3yo, 5f 110y, 7 runners)
                                                            </a></div>
                                                        <div className="ix ixv">
                                                            result
                                                        </div>
                                                    </li>

                                                    <li className="rac-cards  click">
                                                        <div className="ix ixt">17:12</div>
                                                        <div className="ix ixc">
                                                            <a href="javascript:void(0)"
                                                               className="ixa"> Race 2 - Claiming
                                                                (3yo+, 1m 70y, 8 runners)
                                                            </a></div>
                                                        <div className="ix ixv">
                                                            result
                                                        </div>
                                                    </li>

                                                    <li className="rac-cards  click">
                                                        <div className="ix ixt">17:40</div>
                                                        <div className="ix ixc">
                                                            <a href="javascript:void(0)"
                                                               className="ixa"> Race 3 - Claiming
                                                                (3yo+, 1m, 8 runners)
                                                            </a></div>
                                                        <div className="ix ixv">
                                                            result
                                                        </div>
                                                    </li>

                                                    <li className="rac-cards  click">
                                                        <div className="ix ixt">18:08</div>
                                                        <div className="ix ixc">
                                                            <a href="javascript:void(0)"
                                                               className="ixa"> Race 4 - Allowance Optional Claiming
                                                                (3yo+, 6f, 8 runners)
                                                            </a></div>
                                                        <div className="ix ixv">
                                                            Preview
                                                        </div>
                                                    </li>

                                                    <li className="rac-cards  click">
                                                        <div className="ix ixt">18:36</div>
                                                        <div className="ix ixc">
                                                            <a href="javascript:void(0)"
                                                               className="ixa"> Race 5 - Maiden Special Weight
                                                                (3yo+, 6f, 12 runners)
                                                            </a></div>
                                                        <div className="ix ixv">
                                                            result
                                                        </div>
                                                    </li>

                                                    <li className="rac-cards  click">
                                                        <div className="ix ixt">19:04</div>
                                                        <div className="ix ixc">
                                                            <a href="javascript:void(0)"
                                                               className="ixa"> Race 6 - Claiming
                                                                (3yo+, 5f 110y, 8 runners)
                                                            </a></div>
                                                        <div className="ix ixv">
                                                            result
                                                        </div>
                                                    </li>

                                                    <li className="rac-cards  click">
                                                        <div className="ix ixt">19:33</div>
                                                        <div className="ix ixc">
                                                            <a href="javascript:void(0)"
                                                               className="ixa"> Race 7 - Claiming
                                                                (3yo+, 6f, 12 runners)
                                                            </a></div>
                                                        <div className="ix ixv">
                                                            result
                                                        </div>
                                                    </li>

                                                    <li className="rac-cards  click">
                                                        <div className="ix ixt">20:02</div>
                                                        <div className="ix ixc">
                                                            <a href="javascript:void(0)"
                                                               className="ixa"> Race 8 - Claiming
                                                                (3yo+, 5f 110y, 12 runners)
                                                            </a></div>
                                                        <div className="ix ixv">
                                                            result
                                                        </div>
                                                    </li>

                                                </ul>
                                            </section>
                                        </section>
                                        <aside id="sidebar" className="sui-content" role="complementary">

                                        </aside>
                                    </div>
                                </div>
                                : ""}
                            {this.state.topNav == "fastResults" ?
                                <div></div>
                                : ""}
                            {this.state.topNav == "fullResults" ?
                                <div></div>
                                : ""}
                            {this.state.topNav == "resultsArchive" ?
                                <div></div>
                                : ""}
                            {this.state.topNav == "going" ?
                                <div></div>
                                : ""}
                            {this.state.topNav == "nonRunners" ?
                                <div></div>
                                : ""}
                            {this.state.topNav == "aBCGuide" ?
                                <div></div>
                                : ""}
                            {this.state.topNav == "todayPointers" ?
                                <div></div>
                                : ""}
                            {this.state.topNav == "trainer" ?
                                <div></div>
                                : ""}
                            {this.state.topNav == "formSearch" ?
                                <div></div>
                                : ""}
                            {this.state.topNav == "nagMe" ?
                                <div></div>
                                : ""}

                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default IrishHorseForm;