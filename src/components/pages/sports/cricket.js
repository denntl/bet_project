import React from 'react';



class Cricket extends React.Component {
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
            <div id="page_cricket" className="page">
                <div className="header">
                    <div class="CreateCouponContainer ">
                        <div class="CreateCouponTab ">
                            <div class="CreateCouponTab_Count ">0</div>
                            <div class="CreateCouponTab_Selections ">Selections</div>
                            <div class="CreateCouponTab_Button ">Create Coupon</div>
                        </div>
                    </div>
                    <div className="title ClassificationName">Cricket</div>
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
                                        <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_In_Play" aria-expanded="false" aria-controls="collapse_In_Play">
                                            <div className="Market-GroupName">In-Play</div>
                                        </div>
                                        <div className="Market-Cluster collapse show" id="collapse_In_Play" aria-expanded="true">
                                            <div  className="item Market_PWidth-100"><a href="#" className="CouponLink_Label">Central Districts vs Canterbury - Plunket Shield</a></div>
                                            <div  className="item Market_PWidth-100"><a href="#" className="CouponLink_Label">Northern Districts vs Otago - Plunket Shield</a></div>
                                            <div  className="item Market_PWidth-100"><a href="#" className="CouponLink_Label">Pakistan vs Australia - 1st Test</a></div>
                                            <div  className="item Market_PWidth-100"><a href="#" className="CouponLink_Label">Wellington vs Auckland - Plunket Shield</a></div>
                                        </div>
                                    </div>
                                    <div className="MarketGroup">
                                        <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_Match_Coupon" aria-expanded="false" aria-controls="collapse_Match_Coupon">
                                            <div className="Market-GroupName">Match Coupon</div>
                                        </div>
                                        <div className="Market-Cluster collapse show" id="collapse_Match_Coupon" aria-expanded="true">
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Regional Super50</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">APL T20</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Sri Lanka vs England 2nd ODI</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Pakistan vs Australia 1st Test</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Plunket Shield</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Twenty20 Big Bash</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Sri Lanka vs England 1st Test</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">South Africa vs Zimbabwe - 2nd Twenty20 Match</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">India vs Windies 2nd Test</a></div>
                                        </div>
                                    </div>
    
                                    <div className="MarketGroup">
                                        <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_Sri_Lanka_vs_England_2nd_ODI" aria-expanded="false" aria-controls="collapse_Sri_Lanka_vs_England_2nd_ODI">
                                            <div className="Market-GroupName">Sri Lanka vs England 2nd ODI</div>
                                        </div>
                                        <div className="Market-Cluster collapse show" id="collapse_Sri_Lanka_vs_England_2nd_ODI" aria-expanded="true">
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">To Win the Match</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">To Win the Toss</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Match Handicap</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Man of the Match</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Top Team Batsman</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Top Team Bowler</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Highest Opening Partnership</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Most Match Sixes</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Team To Make Highest 1s 15 Overs Score</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">1st Over Total Runs</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">A Fifty to be Scored in the Match</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">A Hundred to be Scored in the Match</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">1st Wicket Method</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Runs at Fall of 1st Wicket</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Most Run Outs (Fielding)</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">1st Innings Score</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Total Runs in Match</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Total Match Sixes</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Batsman Matches</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Batsman to Score a Fifty in the Match</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Batsman to Score a Hundred in the Match</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Highest Individual Score</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Player Performances</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Race to 10 Runs</a></div>
                                        </div>
                                    </div>
                                    <div className="MarketGroup">
                                        <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_Sri_Lanka_v_England_ODI_Series" aria-expanded="false" aria-controls="collapse_Sri_Lanka_v_England_ODI_Series">
                                            <div className="Market-GroupName">Sri Lanka v England (ODI Series)</div>
                                            <div className="Market-HeaderAllCheckbox">
                                                <label className="Market-AllLabel checkbox no-collapsable"><input type="checkbox"/>All<span className="checkmark"></span></label>
                                            </div>
                                        </div>
                                        <div className="Market-Cluster collapse show" id="collapse_Sri_Lanka_v_England_ODI_Series" aria-expanded="true">
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">To Win Outright</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Series Correct Score</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Top Team Batsman</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Top Team Bowler</a></div>
                                        </div>
                                    </div>
    
                                    <div className="MarketGroup">
                                        <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_India_vs_Windies_2nd_Test" aria-expanded="false" aria-controls="collapse_India_vs_Windies_2nd_Test">
                                            <div className="Market-GroupName">India vs Windies 2nd Test</div>
                                        </div>
                                        <div className="Market-Cluster collapse show" id="collapse_India_vs_Windies_2nd_Test" aria-expanded="true">
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">To Win the Match</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">To Win the Toss</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Double Chance</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Man of the Match</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Top Team 1st Innings Batsman</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Top Team 1st Innings Bowler</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Highest 1st Innings Opening Partnership</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Draw No Bet</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">1st Innings Lead</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">1st Over Total Runs</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">1st Wicket Method</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Runs at Fall of 1st Wicke</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Most Run Outs (Fielding)</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">A Fifty to be Scored in the 1st Innings</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">A Hundred to be Scored in the 1st Innings</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">A Hundred to be Scored in the Match</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Team Batsman to Score a Fifty in 1st Innings</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Team Batsman to Score a Hundred in 1st Innings</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Batsman to Score a Fifty in 1st Innings</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Batsman to Score a Hundred in 1st Innings</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Batsman to Score a Hundred in the Match</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Batsman to Score a Fifty in the Match</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Batsman Matches</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Player Performances</a></div>
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

export default Cricket;
