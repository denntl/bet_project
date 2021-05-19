import React from 'react';


class AllGames extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
                    <div className="SecondaryNavigation" data-component-type="SecondaryNavigation">
                        <nav className="SecondaryNavigationList" >
                            {/*style={{`transition-timing-function`: 'cubic-bezier(0.1, 0.57, 0.1, 1)', transition-duration: '0ms', transform: 'translate(0px, 0px) translateZ(0px)'}}>*/}
                            <ul id="navList">
                                <li data-category="Featured" data-categoryheader="All Featured Games"
                                    data-placeholderimage="https://content001.bet365.com/Games/v3/GamePods/Featured-Lazy-Loader.png"
                                    className="active">
                                    <div className="Featured-Category icon"></div>
                                    <span>Featured</span>
                                </li>
                                <li data-category="Jackpots" data-categoryheader="All Jackpots"
                                    data-placeholderimage="https://content001.bet365.com/Games/v3/GamePods/Jackpot-Lazy-Loader.png">
                                    <div className="Jackpots-Category icon"></div>
                                    <span>Jackpots</span>
                                </li>
                                <li data-category="PremiumSlots" data-categoryheader="All Premium Slots"
                                    data-placeholderimage="https://content001.bet365.com/Games/v3/GamePods/Premium-Slots-Lazy-Loader.png"
                                    className="">
                                    <div className="PremiumSlots-Category icon"></div>
                                    <span>Premium Slots</span>
                                </li>
                                <li data-category="BonusSlots" data-categoryheader="All Bonus Slots"
                                    data-placeholderimage="https://content001.bet365.com/Games/v3/GamePods/Bonus-Slots-Lazy-Loader.png"
                                    className="">
                                    <div className="BonusSlots-Category icon"></div>
                                    <span>Bonus Slots</span>
                                </li>
                                <li data-category="VideoSlots" data-categoryheader="All Video Slots"
                                    data-placeholderimage="https://content001.bet365.com/Games/v3/GamePods/Video-Slots-Lazy-Loader.png"
                                    className="">
                                    <div className="VideoSlots-Category icon"></div>
                                    <span>Video Slots</span>
                                </li>
                                <li data-category="TableGames" data-categoryheader="All Table &amp; Card Games"
                                    data-placeholderimage="https://content001.bet365.com/Games/v3/GamePods/Table-Games-Lazy-Loader.png">
                                    <div className="TableGames-Category icon"></div>
                                    <span>Table Games</span>
                                </li>
                                <li data-category="Arcade" data-categoryheader="All Arcade Games"
                                    data-placeholderimage="https://content001.bet365.com/Games/v3/GamePods/Bonus-Slots-Lazy-Loader.png">
                                    <div className="Arcade-Category icon"></div>
                                    <span>Arcade</span>
                                </li>
                                <li data-category="InstantWins" data-categoryheader="All Instant Wins"
                                    data-placeholderimage="https://content001.bet365.com/Games/v3/GamePods/Instant-Wins-Lazy-Loader.png"
                                    className="">
                                    <div className="InstantWins-Category icon"></div>
                                    <span>Instant Wins</span>
                                </li>
                            </ul>
                            <div className="categoryBar"
                                 style={{width: '56px', transform: 'matrix(1, 0, 0, 1, 52.4375, 0)'}}></div>
                        </nav>
                    </div>




                    <div className="game-pod-grid-header">
                    <h1>All Featured Games</h1>

                <div className="game-pod-order-container">
                    <span className="game-pod-order-label">Order By</span>
                    <div className="game-pod-order-holder" style={{height: '38px'}}>
                        <div className="game-pod-current-order">
                            style={["background-image: url('//content001.bet365.com/Games/v3/sprites/Mega-Sprite.png')"]}>
                            Recommended
                        </div>
                        {/*<div data-filter="Recommended"*/}
                        {/*style={{backgroundImage: "url('//content001.bet365.com/Games/v3/sprites/Mega-Sprite.png')"}}*/}
                        {/*className="game-pod-order recommended active">*/}
                        {/*<span>Recommended</span>*/}
                        {/*</div>*/}
                        {/*<div data-filter="HighestRated"*/}
                        {/*style={{backgroundImage: "url('//content001.bet365.com/Games/v3/sprites/Mega-Sprite.png')"}}*/}
                        {/*className="game-pod-order highest-rated">*/}
                        {/*<span>Highest Rated</span>*/}
                        {/*</div>*/}
                        {/*<div data-filter="MostPlayed"*/}
                        {/*style={{backgroundImage: "url('//content001.bet365.com/Games/v3/sprites/Mega-Sprite.png')"}}*/}
                        {/*className="game-pod-order most-played">*/}
                        {/*<span>Most Played</span>*/}
                        {/*</div>*/}
                        {/*<div className="order-category-bar"*/}
                        {/*style={{width: '99px', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}></div>*/}
                    </div>
                </div>
                </div>

                <div className="main-content-wrapper all-games-page">
                    <div className="all-games-page__container">
                        <div className="game-grid-container">
                            <div className="game-pod-grid" data-component-type="GamePodGrid"
                                 data-initial-load-quantity="22">
                                <div className="slider-item-wrapper game-pod" data-gameid="European Roulette"
                                     style={{height: '198px'}}>
                                    <img className="slider-item-image game-pod-image b-loaded"
                                         alt="European Roulette"
                                         src="https://content001.bet365.com/Games/v3/GamePods/500x500-Roulette.jpg" />
                                    <div className="slider-item-content" data-gametoken="ROULETTE2"
                                         style={{top: '196px'}}>
                                                        <span className="slider-item-jackpot PodJackpot"
                                                              data-gameid="20968">20968</span>
                                        <div className="slider-item-name-container">
                                            <h2 className="slider-item-name">European Roulette</h2>
                                        </div>

                                        <div className="slider-item-rating">
                                            <div className="on">★</div>
                                            <div className="on">★</div>
                                            <div className="on">★</div>
                                            <div className="on">★</div>
                                            <div className="on">★</div>
                                        </div>
                                        <span className="slider-game-data-wrapper ">
                                                <span className="slide-game-data plays">Plays<span>60</span></span>
                                            </span>
                                        <a href="#" className="slide-game-launch">Play</a>
                                    </div>
                                </div>
                                <div className="slider-item-wrapper game-pod" data-gameid="Baccarat"
                                     style={{height: '198px'}}>
                                    <img className="slider-item-image game-pod-image b-loaded" alt="Baccarat"
                                         src="https://content001.bet365.com/Games/v3/GamePods/500x500-Baccarat.jpg" />
                                    <div className="slider-item-content" data-gametoken="BACCARAT2"
                                         style={{top: '196px'}}>
                                                        <span className="slider-item-jackpot PodJackpot"
                                                              data-gameid="20976">20976</span>
                                        <div className="slider-item-name-container">
                                            <h2 className="slider-item-name">Baccarat</h2>
                                        </div>

                                        <div className="slider-item-rating">
                                            <div className="on">★</div>
                                            <div className="on">★</div>
                                            <div className="on">★</div>
                                            <div className="on">★</div>
                                            <div className="on">★</div>
                                        </div>
                                        <span className="slider-game-data-wrapper ">
                                                <span className="slide-game-data plays">Plays<span>20</span></span>
                                            </span>
                                        <a href="#" className="slide-game-launch">Play</a>
                                    </div>
                                </div>
                                <div className="slider-item-wrapper game-pod" data-gameid="Spin O'Reely"
                                     style={{height: '198px'}}>
                                    <img className="slider-item-image game-pod-image b-loaded" alt="Spin O'Reely"
                                         src="https://content001.bet365.com/Games/v3/gamepods/500x500-Games-Pods-SpinOReely.jpg" />
                                    <div className="slider-item-content" data-gametoken="SPINOREELY"
                                         style={{top: '196px'}}>
                                                        <span className="slider-item-jackpot PodJackpot"
                                                              data-gameid="21000">21000</span>
                                        <div className="slider-item-name-container">
                                            <h2 className="slider-item-name">Spin O'Reely</h2>
                                        </div>

                                        <div className="slider-item-rating">
                                            <div className="on">★</div>
                                            <div className="on">★</div>
                                            <div className="on">★</div>
                                            <div className="on">★</div>
                                            <div className="on">★</div>
                                        </div>
                                        <span className="slider-game-data-wrapper ">
                                                <span className="slide-game-data plays">Plays<span>96</span></span>
                                            </span>
                                        <a href="#" className="slide-game-launch">Play</a>
                                    </div>
                                </div>
                                <div className="slider-item-wrapper game-pod" data-gameid="Blackjack"
                                     style={{height: '198px'}}>
                                    <img className="slider-item-image game-pod-image b-loaded" alt="Blackjack"
                                         src="https://content001.bet365.com/Games/v3/GamePods/500x500-Blackjack.jpg" />
                                    <div className="slider-item-content" data-gametoken="BLACKJACK2"
                                         style={{top: '196px'}}>
                                                        <span className="slider-item-jackpot PodJackpot"
                                                              data-gameid="20944">20944</span>
                                        <div className="slider-item-name-container">
                                            <h2 className="slider-item-name">Blackjack</h2>
                                        </div>

                                        <div className="slider-item-rating">
                                            <div className="on">★</div>
                                            <div className="on">★</div>
                                            <div className="on">★</div>
                                            <div className="on">★</div>
                                            <div className="on">★</div>
                                        </div>
                                        <span className="slider-game-data-wrapper ">
                                                <span className="slide-game-data plays">Plays<span>102</span></span>
                                            </span>
                                        <a href="#" className="slide-game-launch">Play</a>
                                    </div>
                                </div>
                                <div className="slider-item-wrapper game-pod" data-gameid="Viking Runecraft"
                                     style={{height: '198px'}}>
                                    <img className="slider-item-image game-pod-image b-loaded"
                                         alt="Viking Runecraft"
                                         src="https://content001.bet365.com/Games/v3/GamePods/500x500-Games-Pods-VikingRunecraft.jpg" />
                                    <div className="slider-item-content" data-gametoken="VIKINGRUNECRAFTPNG"
                                         style={{top: '196px'}}>
                                                        <span className="slider-item-jackpot PodJackpot"
                                                              data-gameid="34024">34024</span>
                                        <div className="slider-item-name-container">
                                            <h2 className="slider-item-name">Viking Runecraft</h2>
                                        </div>

                                        <div className="slider-item-rating">
                                            <div className="on">★</div>
                                            <div className="on">★</div>
                                            <div className="on">★</div>
                                            <div className="on">★</div>
                                            <div className="off">★</div>
                                        </div>
                                        <span className="slider-game-data-wrapper ">
                                                <span className="slide-game-data plays">Plays<span>47</span></span>
                                            </span>
                                        <a href="#" className="slide-game-launch">Play</a>
                                    </div>
                                </div>
                                <div className="slider-item-wrapper game-pod" data-gameid="Magic Ian"
                                     style={{height: '198px'}}>
                                    <img className="slider-item-image game-pod-image b-loaded" alt="Magic Ian"
                                         src="https://content001.bet365.com/Games/v3/GamePods/500x500-Games-Pods-Magician.jpg" />
                                    <div className="slider-item-content" data-gametoken="MAGICIAN"
                                         style={{top: '196px'}}>
                                                        <span className="slider-item-jackpot PodJackpot"
                                                              data-gameid="27881">27881</span>
                                        <div className="slider-item-name-container">
                                            <h2 className="slider-item-name">Magic Ian</h2>
                                        </div>

                                        <div className="slider-item-rating">
                                            <div className="on">★</div>
                                            <div className="on">★</div>
                                            <div className="on">★</div>
                                            <div className="on">★</div>
                                            <div className="off">★</div>
                                        </div>
                                        <span className="slider-game-data-wrapper ">
                                                <span className="slide-game-data plays">Plays<span>17</span></span>
                                            </span>
                                        <a href="#" className="slide-game-launch">Play</a>
                                    </div>
                                </div>
                                <div className="slider-item-wrapper game-pod" data-gameid="Blackjack"
                                     style={{height: '198px'}}>
                                    <img className="slider-item-image game-pod-image b-loaded" alt="Blackjack"
                                         src="https://content001.bet365.com/Games/v3/GamePods/500x500-Blackjack.jpg" />
                                    <div className="slider-item-content" data-gametoken="BLACKJACK2"
                                         style={{top: '196px'}}>
                                                        <span className="slider-item-jackpot PodJackpot"
                                                              data-gameid="20944">20944</span>
                                        <div className="slider-item-name-container">
                                            <h2 className="slider-item-name">Blackjack</h2>
                                        </div>

                                        <div className="slider-item-rating">
                                            <div className="on">★</div>
                                            <div className="on">★</div>
                                            <div className="on">★</div>
                                            <div className="on">★</div>
                                            <div className="on">★</div>
                                        </div>
                                        <span className="slider-game-data-wrapper ">
                                                <span className="slide-game-data plays">Plays<span>102</span></span>
                                            </span>
                                        <a href="#" className="slide-game-launch">Play</a>
                                    </div>
                                </div>
                                <div className="slider-item-wrapper game-pod" data-gameid="Baccarat"
                                     style={{height: '198px'}}>
                                    <img className="slider-item-image game-pod-image b-loaded" alt="Baccarat"
                                         src="https://content001.bet365.com/Games/v3/GamePods/500x500-Baccarat.jpg" />
                                    <div className="slider-item-content" data-gametoken="BACCARAT2"
                                         style={{top: '196px'}}>
                                                        <span className="slider-item-jackpot PodJackpot"
                                                              data-gameid="20976">20976</span>
                                        <div className="slider-item-name-container">
                                            <h2 className="slider-item-name">Baccarat</h2>
                                        </div>

                                        <div className="slider-item-rating">
                                            <div className="on">★</div>
                                            <div className="on">★</div>
                                            <div className="on">★</div>
                                            <div className="on">★</div>
                                            <div className="on">★</div>
                                        </div>
                                        <span className="slider-game-data-wrapper ">
                                                <span className="slide-game-data plays">Plays<span>20</span></span>
                                            </span>
                                        <a href="#" className="slide-game-launch">Play</a>
                                    </div>
                                </div>
                                <div className="slider-item-wrapper game-pod" data-gameid="Viking Runecraft"
                                     style={{height: '198px'}}>
                                    <img className="slider-item-image game-pod-image b-loaded"
                                         alt="Viking Runecraft"
                                         src="https://content001.bet365.com/Games/v3/GamePods/500x500-Games-Pods-VikingRunecraft.jpg" />
                                    <div className="slider-item-content" data-gametoken="VIKINGRUNECRAFTPNG"
                                         style={{top: '196px'}}>
                                                        <span className="slider-item-jackpot PodJackpot"
                                                              data-gameid="34024">34024</span>
                                        <div className="slider-item-name-container">
                                            <h2 className="slider-item-name">Viking Runecraft</h2>
                                        </div>

                                        <div className="slider-item-rating">
                                            <div className="on">★</div>
                                            <div className="on">★</div>
                                            <div className="on">★</div>
                                            <div className="on">★</div>
                                            <div className="off">★</div>
                                        </div>
                                        <span className="slider-game-data-wrapper ">
                                                <span className="slide-game-data plays">Plays<span>47</span></span>
                                            </span>
                                        <a href="#" className="slide-game-launch">Play</a>
                                    </div>
                                </div>
                                <div className="slider-item-wrapper game-pod" data-gameid="Magic Ian"
                                     style={{height: '198px'}}>
                                    <img className="slider-item-image game-pod-image b-loaded" alt="Magic Ian"
                                         src="https://content001.bet365.com/Games/v3/GamePods/500x500-Games-Pods-Magician.jpg" />
                                    <div className="slider-item-content" data-gametoken="MAGICIAN"
                                         style={{top: '196px'}}>
                                                        <span className="slider-item-jackpot PodJackpot"
                                                              data-gameid="27881">27881</span>
                                        <div className="slider-item-name-container">
                                            <h2 className="slider-item-name">Magic Ian</h2>
                                        </div>

                                        <div className="slider-item-rating">
                                            <div className="on">★</div>
                                            <div className="on">★</div>
                                            <div className="on">★</div>
                                            <div className="on">★</div>
                                            <div className="off">★</div>
                                        </div>
                                        <span className="slider-game-data-wrapper ">
                                                <span className="slide-game-data plays">Plays<span>17</span></span>
                                            </span>
                                        <a href="#" className="slide-game-launch">Play</a>
                                    </div>
                                </div>
                                <div className="slider-item-wrapper game-pod" data-gameid="Viking Runecraft"
                                     style={{height: '198px'}}>
                                    <img className="slider-item-image game-pod-image b-loaded"
                                         alt="Viking Runecraft"
                                         src="https://content001.bet365.com/Games/v3/GamePods/500x500-Games-Pods-VikingRunecraft.jpg" />
                                    <div className="slider-item-content" data-gametoken="VIKINGRUNECRAFTPNG"
                                         style={{top: '196px'}}>
                                                        <span className="slider-item-jackpot PodJackpot"
                                                              data-gameid="34024">34024</span>
                                        <div className="slider-item-name-container">
                                            <h2 className="slider-item-name">Viking Runecraft</h2>
                                        </div>

                                        <div className="slider-item-rating">
                                            <div className="on">★</div>
                                            <div className="on">★</div>
                                            <div className="on">★</div>
                                            <div className="on">★</div>
                                            <div className="off">★</div>
                                        </div>
                                        <span className="slider-game-data-wrapper ">
                                                <span className="slide-game-data plays">Plays<span>47</span></span>
                                            </span>
                                        <a href="#" className="slide-game-launch">Play</a>
                                    </div>
                                </div>
                                <div className="slider-item-wrapper game-pod" data-gameid="Baccarat"
                                     style={{height: '198px'}}>
                                    <img className="slider-item-image game-pod-image b-loaded" alt="Baccarat"
                                         src="https://content001.bet365.com/Games/v3/GamePods/500x500-Baccarat.jpg" />
                                    <div className="slider-item-content" data-gametoken="BACCARAT2"
                                         style={{top: '196px'}}>
                                                        <span className="slider-item-jackpot PodJackpot"
                                                              data-gameid="20976">20976</span>
                                        <div className="slider-item-name-container">
                                            <h2 className="slider-item-name">Baccarat</h2>
                                        </div>

                                        <div className="slider-item-rating">
                                            <div className="on">★</div>
                                            <div className="on">★</div>
                                            <div className="on">★</div>
                                            <div className="on">★</div>
                                            <div className="on">★</div>
                                        </div>
                                        <span className="slider-game-data-wrapper ">
                                                <span className="slide-game-data plays">Plays<span>20</span></span>
                                            </span>
                                        <a href="#" className="slide-game-launch">Play</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default AllGames;
