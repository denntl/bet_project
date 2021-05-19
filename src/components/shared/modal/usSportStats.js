import React from 'react';



class UsSportStats extends React.Component {
    constructor(props) {
        super(props);
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
    render() {
        return(
            <div id="usSportStats" className="modal_bet new_window usSportStats" role="dialog">
                <div className="modal_content scroll_block">
                    <div className="top_header usSportStats">
                        <button type="button" className="close" onClick={() => this.props.closeModal('usSportsStats')}></button>
                        <div className="logo betStats"></div>
                    </div>
                    <div className="containerMain usSportStats">
                        <ul className="dynamic-persistent-menu">
                            <li className="persistent-menu-menu-item">CFL</li>
                            <li className="persistent-menu-menu-item">MLB</li>
                            <li className="persistent-menu-menu-item">NBA</li>
                            <li className="persistent-menu-menu-item">NHL</li>
                            <li className="persistent-menu-menu-item">OTHER</li>
                            <li className="persistent-menu-menu-item">NCAAB</li>
                            <li className="persistent-menu-menu-item">NCAAF</li>
                            <li className="persistent-menu-menu-item">NFL</li>
                            <li className="persistent-menu-menu-item">WNBA</li>
                        </ul>
                    <div className="home-menu">
                        <div className="home-block">
                            <div className="home-block-header">CFL</div>
                            <ul className="home-block-list">
                                <li className="home-block-item">Databases</li>
                                <li className="home-block-item">Defensive Statistics</li>
                                <li className="home-block-item">Game Logs</li>
                                <li className="home-block-item">Hot and Not 10</li>
                            </ul>
                            <div className="home-block-btn">more</div>
                        </div>
                        <div className="home-block">
                            <div className="home-block-header">MLB</div>
                            <ul className="home-block-list">
                                <li className="home-block-item">Databases</li>
                                <li className="home-block-item">Defensive Statistics</li>
                                <li className="home-block-item">Game Logs</li>
                                <li className="home-block-item">Hot and Not 10</li>
                            </ul>
                            <div className="home-block-btn">more</div>
                        </div>
                        <div className="home-block">
                            <div className="home-block-header">NBA</div>
                            <ul className="home-block-list">
                                <li className="home-block-item">Databases</li>
                                <li className="home-block-item">Defensive Statistics</li>
                                <li className="home-block-item">Game Logs</li>
                                <li className="home-block-item">Hot and Not 10</li>
                            </ul>
                            <div className="home-block-btn">more</div>
                        </div>
                        <div className="home-block">
                            <div className="home-block-header">NHL</div>
                            <ul className="home-block-list">
                                <li className="home-block-item">Databases</li>
                                <li className="home-block-item">Defensive Statistics</li>
                                <li className="home-block-item">Game Logs</li>
                                <li className="home-block-item">Hot and Not 10</li>
                            </ul>
                            <div className="home-block-btn">more</div>
                        </div>
                        <div className="home-block">
                            <div className="home-block-header">NCAAB</div>
                            <ul className="home-block-list">
                                <li className="home-block-item">Databases</li>
                                <li className="home-block-item">Defensive Statistics</li>
                                <li className="home-block-item">Game Logs</li>
                                <li className="home-block-item">Hot and Not 10</li>
                            </ul>
                            <div className="home-block-btn">more</div>
                        </div>
                        <div className="home-block">
                            <div className="home-block-header">NCAAF</div>
                            <ul className="home-block-list">
                                <li className="home-block-item">Databases</li>
                                <li className="home-block-item">Defensive Statistics</li>
                                <li className="home-block-item">Game Logs</li>
                                <li className="home-block-item">Hot and Not 10</li>
                            </ul>
                            <div className="home-block-btn">more</div>
                        </div>
                        <div className="home-block">
                            <div className="home-block-header">NFL</div>
                            <ul className="home-block-list">
                                <li className="home-block-item">Databases</li>
                                <li className="home-block-item">Defensive Statistics</li>
                                <li className="home-block-item">Game Logs</li>
                                <li className="home-block-item">Hot and Not 10</li>
                            </ul>
                            <div className="home-block-btn">more</div>
                        </div>
                        <div className="home-block">
                            <div className="home-block-header">WNBA</div>
                            <ul className="home-block-list">
                                <li className="home-block-item">Databases</li>
                                <li className="home-block-item">Defensive Statistics</li>
                                <li className="home-block-item">Game Logs</li>
                                <li className="home-block-item">Hot and Not 10</li>
                            </ul>
                            <div className="home-block-btn">more</div>
                        </div>
                    </div>


                    </div>
                </div>
            </div>
        )

    }
}

export default UsSportStats;