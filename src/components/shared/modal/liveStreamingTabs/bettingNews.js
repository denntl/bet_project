import React from 'react';



class BettingNews extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            innerTab:"home"
        }
    }
    changeInnerTab = (tab) =>{
        this.setState({
            innerTab: tab
        })
    }
    render() {
        return(
            <div>
                    <div className="tabs_wrapp">
                        <div className={`bottom_tab ${this.state.innerTab == "home" ? 'active' : ''}`} onClick={()=>this.changeInnerTab('home')}>Home</div>
                        <div className={`bottom_tab ${this.state.innerTab == "football" ? 'active' : ''}`} onClick={()=>this.changeInnerTab('football')}>Football</div>
                        <div className={`bottom_tab ${this.state.innerTab == "racing" ? 'active' : ''}`} onClick={()=>this.changeInnerTab('racing')}>Racing</div>
                        <div className={`bottom_tab ${this.state.innerTab == "cricket" ? 'active' : ''}`} onClick={()=>this.changeInnerTab('racing')}>Cricket</div>
                        <div className={`bottom_tab ${this.state.innerTab == "golf" ? 'active' : ''}`} onClick={()=>this.changeInnerTab('racing')}>Golf</div>
                        <div className={`bottom_tab ${this.state.innerTab == "tennis" ? 'active' : ''}`} onClick={()=>this.changeInnerTab('tennis')}>Tennis</div>
                        <div className={`bottom_tab ${this.state.innerTab == "motosports" ? 'active' : ''}`} onClick={()=>this.changeInnerTab('motosports')}>Motosports</div>
                        <div className={`bottom_tab ${this.state.innerTab == "rugbyUnion" ? 'active' : ''}`} onClick={()=>this.changeInnerTab('rugbyUnion')}>Rugby Union</div>
                        <div className={`bottom_tab ${this.state.innerTab == "rugbyLeague" ? 'active' : ''}`} onClick={()=>this.changeInnerTab('rugbyLeague')}>Rugby League</div>
                        <div className={`bottom_tab ${this.state.innerTab == "usSports" ? 'active' : ''}`} onClick={()=>this.changeInnerTab('usSports')}>US Sports</div>
                        <div className={`bottom_tab ${this.state.innerTab == "snooker" ? 'active' : ''}`} onClick={()=>this.changeInnerTab('snooker')}>Snooker</div>
                        <div className={`bottom_tab ${this.state.innerTab == "darts" ? 'active' : ''}`} onClick={()=>this.changeInnerTab('darts')}>Darts</div>
                    </div>

                <div className="streaming-main-body-container news">
                    {this.state.innerTab == "home" ?
                       <div className="innerContent">
                           <div className="tab-title_main">
                               <div className="titleMain">Sports Betting News</div>
                               <div id="SearchBox" className="search moveSearchBoxUp" data-elementid="SearchBox">
                                   <form>
                                       <div className="searchBox-Container">
                                           <input className="searchBox-input" type="text"  placeholder="Search"/>
                                           <a className="search-icon" href="#"></a>
                                       </div>
                                   </form>
                               </div>
                           </div>
                           <div className="news_wrapp">
                               <div className="news_item">
                                   <div className="news_img">
                                       <img src="../../img/180816-ful-aleksandar-mitrovic-home-02-496x286.jpg" alt="news"/>
                                   </div>
                                   <div className="category_link_block">
                                       <span className="category_link">Football</span> - <span className="category_link">Premier League</span>
                                   </div>
                                   <div className="newsTitle">Parker plotting Cottage upset</div>
                                   <p className="newsText">Caretaker Fulham manager Scott Parker has challenged his side to try and upset Liverpool's Premier League title bid at Craven Cottage on Sunday.</p>
                                   <div className="subLinksWrapp">
                                       <div className="subLink">Bet Now</div>
                                       <div className="subLink">Read More</div>
                                   </div>
                               </div>
                               <div className="news_item">
                                   <div className="news_img">
                                       <img src="../../img/180414-col-jerry-mina-496x286.jpg" alt="news"/>
                                   </div>
                                   <div className="category_link_block">
                                       <span className="category_link">Football</span> - <span className="category_link">Premier League</span>
                                   </div>
                                   <div className="newsTitle">Parker plotting Cottage upset</div>
                                   <p className="newsText">Caretaker Fulham manager Scott Parker has challenged his side to try and upset Liverpool's Premier League title bid at Craven Cottage on Sunday.</p>
                                   <div className="subLinksWrapp">
                                       <div className="subLink">Bet Now</div>
                                       <div className="subLink">Read More</div>
                                   </div>
                               </div>
                               <div className="news_item">
                                   <div className="news_img">
                                       <img src="../../img/180815-man-chris-hughton-02-496x286.jpg" alt="news"/>
                                   </div>
                                   <div className="category_link_block">
                                       <span className="category_link">Football</span> - <span className="category_link">Premier League</span>
                                   </div>
                                   <div className="newsTitle">Hughton wary of Lions threat</div>
                                   <p className="newsText">Brighton boss Chris Hughton has warned his players not to take anything for granted when they take on Millwall in the sixth round of the FA Cup.</p>
                                   <div className="subLinksWrapp">
                                       <div className="subLink">Bet Now</div>
                                       <div className="subLink">Read More</div>
                                   </div>
                               </div>

                           </div>
                           <div className="modules_left">
                               <div className="titleMain">More Sports Betting News</div>
                               <div className="secondaryArticle">
                                   <div className="news_img">
                                       <img src="../../img/180303-f1-lewis-hamilton-496x286.jpg" alt="news"/>
                                   </div>
                                   <div className="news_info">
                                       <div className="category_link_block">
                                           <span className="category_link">Football</span> - <span className="category_link">Premier League</span>
                                       </div>
                                       <div className="newsTitle">Hughton wary of Lions threat</div>
                                       <p className="newsText">Brighton boss Chris Hughton has warned his players not to take anything for granted when they take on Millwall in the sixth round of the FA Cup.</p>
                                   </div>
                               </div>
                               <div className="secondaryArticle">
                                   <div className="news_img">
                                       <img src="../../img/190122-tem-rafael-nadal-496x286.jpg" alt="news"/>
                                   </div>
                                   <div className="news_info">
                                       <div className="category_link_block">
                                           <span className="category_link">Tennis</span>
                                       </div>
                                       <div className="newsTitle">Nadal hopes to be ready for Fed</div>
                                       <p className="newsText">Rafael Nadal is hoping to recover from a knee problem in time to face old foe Roger Federer in the semi-finals of the BNP Paribas Open in Indian Wells.</p>
                                   </div>
                               </div>
                           </div>
                           <div className="recent_news modules_left">
                               <div className="titleMain">Recent Sports Betting News</div>
                                   <div className="recent_news_wrapp">
                                       <div className="news_item">
                                           <div className="category_link_block">
                                               <span className="category_link">Football</span> - <span className="category_link">Premier League</span>
                                           </div>
                                           <div className="newsTitle">Popovic: No complacency at Glory</div>
                                       </div>
                                       <div className="news_item">
                                           <div className="category_link_block">
                                               <span className="category_link">Rugby Union</span>
                                           </div>
                                           <div className="newsTitle">Williams wary of Ireland clash</div>
                                       </div>
                                       <div className="news_item">
                                           <div className="category_link_block">
                                               <span className="category_link">Rugby Union</span>
                                           </div>
                                           <div className="newsTitle">Williams wary of Ireland clash</div>
                                       </div>
                                       <div className="news_item">
                                           <div className="category_link_block">
                                               <span className="category_link">Rugby Union</span>
                                           </div>
                                           <div className="newsTitle">Williams wary of Ireland clash</div>
                                       </div>

                                   </div>
                               </div>

                       </div>
                        :""}

                </div>
            </div>
        )

    }
}

export default BettingNews;