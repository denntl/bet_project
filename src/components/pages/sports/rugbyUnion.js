import React from 'react';



class RugbyUnion extends React.Component {
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
            <div id="page_rugbyUnion"  className="page">
                <div  className="header">
                    <div  className="title ClassificationName">Rugby Union</div>
                    <div  className="nav-tabs">
                        <a href="#next-24-hrs" data-toggle="tab"  className="ClassificationHeader-PeriodOption" data-toggle="tab" role="tab">Next 24 hrs</a>
                        <a href="#all" data-toggle="tab"  className="ClassificationHeader-PeriodOption active" data-toggle="tab" role="tab">All</a>
                    </div>
                </div>
                <div  className="content">
                    <div  className="SplashContainer">
                        <div   className="tab-content">
                            <div  className="tab-pane" id="next-24-hrs">
                                <div  className="NoAvailableMarkets ">
                                    <div  className="desc">Sorry, there are no markets currently available in this category.</div>
                                    <div  className="info">At bet365 we aim to offer the most comprehensive betting service across all international sports. If you feel we are not covering an event or market that we should please contact us.</div>
                                </div>
                            </div>
                            <div  className="tab-pane active" id="all">
                                <div  className="MarketGroup">
                                    <div  className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_FIBA_World_Cup_Women" aria-expanded="false" aria-controls="collapse_FIBA_World_Cup_Women">European Rugby Champions Cup</div>
                                    <div  className="MarketGroup collapse show" id="collapse_FIBA_World_Cup_Women" aria-expanded="true">
                                        <div  className="Market">
                                            <div  className="Market-Header" data-toggle="collapse" data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false" aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                                <div  className="Market-GroupName">Match Coupon</div>
                                            </div>
                                            <div  className="Market-Cluster collapse show" id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                                <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  />Game Betting 3-Way<span className="checkmark"></span></label></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="MarketGroup collapse show" id="collapse_FIBA_World_Cup_Women" aria-expanded="true">
                                        <div  className="Market">
                                            <div  className="Market-Header" data-toggle="collapse" data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false" aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                                <div  className="Market-GroupName">Match Betting</div>
                                            </div>
                                            <div  className="Market-Cluster collapse show" id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                                <div  className="item"><a href="#" className="CouponLink_Label">Cardiff Blues v Glasgow</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Castres v Exeter Chiefs</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Edinburgh v Toulon</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Leicester v Scarlets</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Munster v Gloucester</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Newcastle Falcons v Montpellier</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Racing Metro v Ulster</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Saracens v Lyon</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Toulouse v Leinster</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Wasps v Bath</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div  className="MarketGroup">
                                    <div  className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_FIBA_World_Cup_Women" aria-expanded="false" aria-controls="collapse_FIBA_World_Cup_Women">Mitre 10 Cup</div>
                                    <div  className="MarketGroup collapse show" id="collapse_FIBA_World_Cup_Women" aria-expanded="true">
                                        <div  className="Market">
                                            <div  className="Market-Header" data-toggle="collapse" data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false" aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                                <div  className="Market-GroupName">Match Coupon</div>
                                                <div  className="Market-HeaderAllCheckbox">
                                                    <label  className="Market-AllLabel checkbox no-collapsable"><input type="checkbox"   />All<span className="checkmark"></span></label>
                                                </div>
                                            </div>
                                            <div  className="Market-Cluster collapse show" id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                                <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Game Betting 3-Way</a></div>
                                                <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Game Betting 2-Way</a></div>
                                                <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">1st Half Betting 3-Way</a></div>
                                                <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">1st Half Betting 2-Way</a></div>
                                            </div>
                                        </div>

                                        <div  className="Market">
                                            <div  className="Market-Header" data-toggle="collapse" data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false" aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                                <div  className="Market-GroupName">Main</div>
                                            </div>
                                            <div  className="Market-Cluster collapse show" id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                                <div  className="item"><a href="#" className="CouponLink_Label">Alternative Handicap 2-Way</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Alternative Handicap 3-Way</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Race to (Points)</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Double Result</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Double Result 5-Way</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Winning Margin</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Winning Margin 13-Way</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Winning Margin 4-Way</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Winning Margin 17-Way</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Exact Winning Margin</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">HT/FT Winning Margin</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">To Win Both Halves</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Match Outcome 4-Way</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Highest Scoring Half</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Either Team to Win to Nil</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Start +12.5</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Tribet</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Total Points Odd/Even</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">To Qualify</a></div>
                                            </div>
                                        </div>

                                        <div  className="Market">
                                            <div  className="Market-Header" data-toggle="collapse" data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false" aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                                <div  className="Market-GroupName">Score</div>
                                            </div>
                                            <div  className="Market-Cluster collapse show" id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                                <div  className="item"><a href="#" className="CouponLink_Label">Team to Score First</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Team to Score First Try</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Team to Score Last</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Team Scoring First Wins Game</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Score First / Full Time</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Score First / Half Time / Full Time</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Score 1st Try / Match Result</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Score 1st Try / 1st Half Result</a></div>
                                            </div>
                                        </div>

                                        <div  className="Market">
                                            <div  className="Market-Header" data-toggle="collapse" data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false" aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                                <div  className="Market-GroupName">Team</div>
                                            </div>
                                            <div  className="Market-Cluster collapse show" id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                                <div  className="item"><a href="#" className="CouponLink_Label">Team Total Points Odd/Even</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Team to Win Both Halves</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Team to Win Either Half</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Team to Trail in Match</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Team with Highest Scoring Half</a></div>
                                            </div>
                                        </div>

                                        <div  className="Market">
                                            <div  className="Market-Header" data-toggle="collapse" data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false" aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                                <div  className="Market-GroupName">1st Half</div>
                                            </div>
                                            <div  className="Market-Cluster collapse show" id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                                <div  className="item"><a href="#" className="CouponLink_Label">1st Half Total Odd/Even</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">1st Half Winning Margin</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">1st Half Winning Margin 5-Way</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">1st Half Start +8.5</a></div>
                                            </div>
                                        </div>

                                        <div  className="Market">
                                            <div  className="Market-Header" data-toggle="collapse" data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false" aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                                <div  className="Market-GroupName">Match Betting</div>
                                            </div>
                                            <div  className="Market-Cluster collapse show" id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                                <div  className="item"><a href="#" className="CouponLink_Label">Auckland v Wellington</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Otago v Hawkes Bay</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Tasman v Canterbury</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Waikato v Northland</a></div>
                                            </div>
                                        </div>
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

export default RugbyUnion;
