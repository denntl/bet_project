import React from 'react';


class HorseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topNav: this.props.activePartHorseForm
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
                                onClick={() => this.props.closeModal('horseForm')}></button>
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
                            <li className={`greyhoundForm_nav_item horse ${this.state.topNav == "runners" ? "active" : ""}`}
                                onClick={() => this.changeTab('runners')}>Declared Runners
                            </li>
                            <li className={`greyhoundForm_nav_item horse ${this.state.topNav == "jockeyBookings" ? "active" : ""}`}
                                onClick={() => this.changeTab('jockeyBookings')}>Jockey Bookings
                            </li>
                            <li className={`greyhoundForm_nav_item horse ${this.state.topNav == "trainerEntries" ? "active" : ""}`}
                                onClick={() => this.changeTab('trainerEntries')}>Trainer Entries
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
                            {this.state.topNav == "runners" ?
                                <div></div>
                                : ""}
                            {this.state.topNav == "jockeyBookings" ?
                                <div></div>
                                : ""}
                            {this.state.topNav == "trainerEntries" ?
                                <div></div>
                                : ""}

                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default HorseForm;