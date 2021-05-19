import React from 'react';



class AmericanFootball extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        $('.no-collapsable').on('click', function (e) {
            e.stopPropagation();
        });
        $('.Market-AllLabel.checkbox').click(function(){
            var cluster = $(this).parents('.Market').find('.Market-Cluster');
            var allCheckbox = $(this).find('input[type="checkbox"]');
            if (allCheckbox.is(':checked')){
                cluster.find('input[type="checkbox"]').prop('checked', true);
            } else {
                cluster.find('input[type="checkbox"]').prop('checked', false);
            }
            var cupon_box = $(this).parents('.page').find('.CreateCouponContainer');
            cupon_box.addClass('visible');
            var all_count = $('.ContentPlate input.item-checkbox:checkbox:checked').length;
            cupon_box.find('.CreateCouponTab_Count').html(all_count);
            if (all_count <= 0){
                cupon_box.removeClass('visible');
            }
        });
        $('.ContentPlate input.item-checkbox:checkbox').click(function(){
            var cupon_box = $(this).parents('.page').find('.CreateCouponContainer');
            cupon_box.addClass('visible');
            var i_count = $('.ContentPlate input.item-checkbox:checkbox:checked').length;
            $(this).parents('.page').find('.CreateCouponTab_Count').html(i_count);
            if (i_count <= 0){
                cupon_box.removeClass('visible');
            }
        });
    }
    render() {
        return(
            <div id="page_american_football" className="page">
                <div className="header">
                    <div class="CreateCouponContainer ">
                        <div class="CreateCouponTab ">
                            <div class="CreateCouponTab_Count ">0</div>
                            <div class="CreateCouponTab_Selections ">Selections</div>
                            <div class="CreateCouponTab_Button ">Create Coupon</div>
                        </div>
                    </div>
                    <div className="title ClassificationName">American Football</div>
                    <div className="nav nav-tabs" role="tablist">
                        <a href="#next-24-hrs" className="ClassificationHeader-PeriodOption" data-toggle="tab" role="tab">Next 24 hrs</a>
                        <a href="#all" className="ClassificationHeader-PeriodOption active" data-toggle="tab" role="tab">All</a>
                    </div>
                </div>
                <div className="content">
                    <div className="SplashContainer">
                        <div className="tab-content clearfix">
                            <div className="tab-pane fade" role="tabpanel" id="next-24-hrs">
                                <div className="NoAvailableMarkets ">
                                    <div className="desc">Sorry, there are no markets currently available in this
                                        category.
                                    </div>
                                    <div className="info">At bet365 we aim to offer the most comprehensive betting
                                        service across all international sports. If you feel we are not covering an
                                        event or market that we should please contact us.
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade show active" role="tabpanel" id="all">
                                <section id="" className="ContentPlate">
                                    <div className="MarketGroup">
                                        <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_NFL" aria-expanded="false" aria-controls="collapse_NFL">NFL</div>
                                        <div className="MarketGroup collapse show" id="collapse_NFL" aria-expanded="true">
                                            <div className="Market">
                                                <div className="Market-Header" data-toggle="collapse" data-target="#collapse_NFL_Lines" aria-expanded="false" aria-controls="collapse_NFL_Lines">
                                                    <div className="Market-GroupName">Lines</div>
                                                    <div className="Market-HeaderAllCheckbox">
                                                        <label className="Market-AllLabel checkbox no-collapsable"><input type="checkbox"  />All<span className="checkmark"></span></label>
                                                    </div>
                                                </div>
                                                <div className="Market-Cluster collapse show" id="collapse_NFL_Lines" aria-expanded="true">
                                                    <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Game Lines</a></div>
                                                    <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">1st Half</a></div>
                                                    <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">2nd Half</a></div>
                                                    <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">1st Quarter</a></div>
                                                    <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">2nd Quarter</a></div>
                                                    <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">3rd Quarter</a></div>
                                                    <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">4th Quarter</a></div>
                                                    <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">3-Way</a></div>
                                                </div>
    
                                            </div>
                                            <div className="Market">
                                                <div className="Market-Header" data-toggle="collapse" data-target="#collapseNFL_Main_Props" aria-expanded="false" aria-controls="collapseNFL_Main_Props">
                                                    <div className="Market-GroupName">Main Props</div>
                                                </div>
                                                <div className="Market-Cluster collapse show" id="collapseNFL_Main_Props" aria-expanded="true">
                                                    <div className="item"><a href="#" className="CouponLink_Label">Alternative Point Spread 2-Way</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Alternative Total 2-Way</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Alternative Handicap 3-Way</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Alternative Total 3-Way</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Total Points (Bands)</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Result and Total</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Winning Margin</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Total Odd/Even</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Double Result</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Race to (Points)</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Highest Scoring Half</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Highest Scoring Quarter</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Team with Highest Scoring Quarter</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Game to Go to Overtime</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Total Pass Attempts</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Total Pass Yards</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">First Offensive Play of the Game</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Tribet</a></div>
                                                </div>
    
                                            </div>
                                            <div className="Market">
                                                <div className="Market-Header" data-toggle="collapse" data-target="#collapse_NFL_Score_Props" aria-expanded="false" aria-controls="collapse_NFL_Score_Props">
                                                    <div className="Market-GroupName">Score Props</div>
                                                </div>
                                                <div className="Market-Cluster collapse show" id="collapse_NFL_Score_Props" aria-expanded="true">
                                                    <div className="item"><a href="#" className="CouponLink_Label">Team to Make First Score 2-Way</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">First Score Method 3-Way</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">First Score Method 6-Way</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Time of First Score</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Team to Score Last</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Total Touchdowns 2-Way</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Total Touchdowns 3-Way</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Total Touchdowns 11-Way</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Total Field Goals Scored 2-Way</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Total Field Goals Scored 3-Way</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Total Field Goals Scored 7-Way</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Touchdown Scorers</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Multi Touchdown Scorers</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Team Touchdown Scorers</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Scorecast</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Anytime Scorecast</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Half Time Scorecast</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Longest Touchdown Scored</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Shortest Touchdown Scored</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Time of First Touchdown</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Time of First Field Goal Scored</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Longest Field Goal Scored</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Special Team or Defensive Touchdown Scored</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Successful 2 Point Conversion</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Safety Scored</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Player Total Pass Attempts</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Player Total Pass Completions</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Player Total Rush Attempt</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Player Total Rush Yards</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Player Total Passing Yards</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Player Total Receiving Yards</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Player Total Receptions</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Player Total Tackles and Assists Made</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Player Total Kicking Points</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Player Longest Pass Received</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Player Longest Pass Completion</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Player Longest Punt</a></div>    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="MarketGroup">
                                        <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_CFL" aria-expanded="false" aria-controls="collapse_CFL">CFL
                                        </div>
                                        <div className="MarketGroup collapse show" id="collapse_CFL" aria-expanded="true">
                                            <div className="Market">
                                                <div className="Market-Header" data-toggle="collapse" data-target="#collapse_CFL_Lines" aria-expanded="false" aria-controls="collapse_CFL_Lines">
                                                    <div className="Market-GroupName">Game Lines</div>
                                                    <div className="Market-HeaderAllCheckbox">
                                                        <label className="Market-AllLabel checkbox no-collapsable"><input type="checkbox"  />All<span className="checkmark"></span></label>
                                                    </div>
                                                </div>
                                                <div className="Market-Cluster collapse show" id="collapse_CFL_Lines" aria-expanded="true">
                                                    <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Game Lines</a></div>
                                                </div>
    
                                            </div>
                                            <div className="Market">
                                                <div className="Market-Header" data-toggle="collapse" data-target="#collapseCFL_Game_Props" aria-expanded="false" aria-controls="collapseCFL_Game_Props">
                                                    <div className="Market-GroupName">Game Props</div>
                                                </div>
                                                <div className="Market-Cluster collapse show" id="collapseCFL_Game_Props" aria-expanded="true">
                                                    <div className="item"><a href="#" className="CouponLink_Label">BC Lions @ HAM Tiger-Cats</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">SAS Roughriders @ MON Alouettes</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">TOR Argonauts @ CAL Stampeders</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">WIN Bluebombers @ EDM Eskimos</a></div>
                                                </div>
    
                                            </div>
                                        </div>
                                    </div>
                                    <div className="MarketGroup">
                                        <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_Futures" aria-expanded="false" aria-controls="collapse_Futures">Futures
                                        </div>
                                        <div className="MarketGroup collapse show" id="collapse_Futures" aria-expanded="true">
                                            <div className="Market">
                                                <div className="Market-Header" data-toggle="collapse" data-target="#collapse_Futures_Lines" aria-expanded="false" aria-controls="collapse_Futures_Lines">
                                                    <div className="Market-GroupName">NFL Futures 2018/19</div>
                                                    <div className="Market-HeaderAllCheckbox">
                                                        <label className="Market-AllLabel checkbox no-collapsable"><input type="checkbox"  />All<span className="checkmark"></span></label>
                                                    </div>
                                                </div>
                                                <div className="Market-Cluster collapse show" id="collapse_Futures_Lines" aria-expanded="true">
                                                    <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Season
                                                        Specials</a></div>
                                                    <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">MVP</a></div>
                                                    <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Season
                                                        Player Specials</a></div>
                                                    <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Winning
                                                        Conference</a></div>
                                                    <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">To Win
                                                        Outright</a></div>
                                                    <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">To Win
                                                        Conferenc</a></div>
                                                    <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">To Win
                                                        Division</a></div>
                                                </div>
    
                                            </div>
                                            <div className="Market">
                                                <div className="Market-Header" data-toggle="collapse" data-target="#collapseFutures_Game_Props" aria-expanded="false" aria-controls="collapseFutures_Game_Props">
                                                    <div className="Market-GroupName"><span>CFL Futures 2018</span></div>
                                                </div>
                                                <div className="Market-Cluster collapse show"
                                                     id="collapseFutures_Game_Props" aria-expanded="true">
                                                    <div className="item"><a href="#" className="CouponLink_Label">To Win Outright</a></div>
                                                </div>
    
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
        )

    }
}

export default AmericanFootball;
