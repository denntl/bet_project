import React from 'react';



class Baseball extends React.Component {
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
            <div id="page_baseball" className="page">
                <div className="header">
                    <div class="CreateCouponContainer ">
                        <div class="CreateCouponTab ">
                            <div class="CreateCouponTab_Count ">0</div>
                            <div class="CreateCouponTab_Selections ">Selections</div>
                            <div class="CreateCouponTab_Button ">Create Coupon</div>
                        </div>
                    </div>
                    <div className="title ClassificationName">Baseball</div>
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
                                        <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_MLB" aria-expanded="false" aria-controls="collapse_MLB">MLB</div>
                                        <div className="MarketGroup collapse show" id="collapse_MLB" aria-expanded="true">
                                            <div className="Market">
                                                <div className="Market-Header" data-toggle="collapse" data-target="#collapse_MLB_Lines" aria-expanded="false" aria-controls="collapse_MLB_Lines">
                                                    <div className="Market-GroupName">Lines</div>
                                                    <div className="Market-HeaderAllCheckbox">
                                                        <label className="Market-AllLabel checkbox no-collapsable"><input type="checkbox"  />All<span className="checkmark"></span></label>
                                                    </div>
                                                </div>
                                                <div className="Market-Cluster collapse show" id="collapse_MLB_Lines" aria-expanded="true">
                                                    <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Game Lines</a></div>
                                                    <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">4 1/2 Innings</a></div>
                                                    <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">3-Way</a></div>
                                                    <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">5 Innings</a></div>
                                                    <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">2nd Quarter</a></div>
                                                </div>
                                            </div>
                                            <div className="Market">
                                                <div className="Market-Header" data-toggle="collapse" data-target="#collapseMLB_Props" aria-expanded="false" aria-controls="collapseMLB_Props">
                                                    <div className="Market-GroupName">Main Props</div>
                                                </div>
                                                <div className="Market-Cluster collapse show" id="collapseMLB_Props" aria-expanded="true">
                                                    <div className="item"><a href="#" className="CouponLink_Label">1st Innings Winner</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">A Run in the 1st Innings</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">1st Innings Runs</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">1st Innings Hits</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Most Hits in the 1st Innings</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Top 1st Run</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Top 1st Hit</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Bottom 1st Run</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Bottom 1st Hit</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">3 Innings Line</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">7 Innings Line</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Race to (Runs)</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">3 Innings Total</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">7 Innings Total</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Lead After (Innings)</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Extra Innings</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">First Team to Score</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Last Team to Score</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Team Scoring First Wins Game</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Game Totals - Bands</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Alternative 3-Way Run Line</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Alternative Total 3-Way</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Alternative 5 Innings Line</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Alternative 5 Innings Total</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Team with Highest Scoring Innings</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Double Result</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Winning Margins</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">First Home Run of Game Will be</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Game Total Odd/Even</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Highest Scoring Period</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Team Totals</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Team Hits</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Team Total Odd/Even</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Total Hits</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">Most Hits</a></div>
                                                </div>
    
                                            </div>
                                            <div className="Market">
                                                <div className="Market-Header" data-toggle="collapse" data-target="#collapse_MLB_Game_Props" aria-expanded="false" aria-controls="collapse_MLB_Game_Props">
                                                    <div className="Market-GroupName">Game Props</div>
                                                </div>
                                                <div className="Market-Cluster collapse show" id="collapse_MLB_Game_Props" aria-expanded="true">
                                                    <div className="item"><a href="#" className="CouponLink_Label">ATL Braves @ NY Mets</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">DET Tigers @ MIN Twins</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">HOU Astros @ TOR Blue Jays</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">KC Royals @ CIN Reds</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">MIA Marlins @ WAS Nationals</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">MIL Brewers @ STL Cardinals</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">OAK Athletics @ SEA Mariners</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">PIT Pirates @ CHI Cubs</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">SD Padres @ SF Giants</a></div>
                                                    <div className="item"><a href="#" className="CouponLink_Label">TEX Rangers @ LA Angels</a></div>
                                                </div>
    
                                            </div>
                                        </div>
                                    </div>
                                    <div className="MarketGroup">
                                        <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_Japanese_Baseball" aria-expanded="false" aria-controls="collapse_Japanese_Baseball">Japanese_Baseball
                                        </div>
                                        <div className="MarketGroup collapse show" id="collapse_Japanese_Baseball" aria-expanded="true">
                                            <div className="Market">
                                                <div className="Market-Header" data-toggle="collapse" data-target="#collapse_Japanese_Baseball_Lines" aria-expanded="false" aria-controls="collapse_Japanese_Baseball_Lines">
                                                    <div className="Market-GroupName">Lines</div>
                                                    <div className="Market-HeaderAllCheckbox">
                                                        <label className="Market-AllLabel checkbox no-collapsable"><input type="checkbox"  />All<span className="checkmark"></span></label>
                                                    </div>
                                                </div>
                                                <div className="Market-Cluster collapse show" id="collapse_Japanese_Baseball_Lines" aria-expanded="true">
                                                    <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Game Lines</a></div>
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
                                                    <div className="Market-GroupName">MLB Futures 2018</div>
                                                    <div className="Market-HeaderAllCheckbox">
                                                        <label className="Market-AllLabel checkbox no-collapsable"><input type="checkbox"  />All<span className="checkmark"></span></label>
                                                    </div>
                                                </div>
                                                <div className="Market-Cluster collapse show" id="collapse_Futures_Lines" aria-expanded="true">
                                                    <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">To Win Outright</a></div>
                                                    <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">To Win League</a></div>
                                                    <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">To Win Division</a></div>
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

export default Baseball;
