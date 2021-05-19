import React from 'react';



class Snooker extends React.Component {
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
            <div id="page_snooker"  className="page">
                <div  className="header">
                    <div  className="title ClassificationName">Snooker</div>
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
                                    <div  className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_FIBA_World_Cup_Women" aria-expanded="false" aria-controls="collapse_FIBA_World_Cup_Women">In-Play</div>
                                    <div  className="Market-Cluster collapse show" id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Elliot Slessor v Sean O'Sullivan</a></div>
                                        <div  className="item"><a href="#" className="CouponLink_Label">Alexander Ursenbacher v Kishan Hirani</a></div>
                                        <div  className="item"><a href="#" className="CouponLink_Label">Kyren Wilson v Akani Songsermsawad</a></div>
                                        <div  className="item"><a href="#" className="CouponLink_Label">Ricky Walden v Hammad Miah</a></div>
                                        <div  className="item"><a href="#" className="CouponLink_Label">Stuart Bingham v Duane Jones</a></div>
                                    </div>
                                </div>

                                <div  className="MarketGroup">
                                    <div  className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_FIBA_World_Cup_Women" aria-expanded="false" aria-controls="collapse_FIBA_World_Cup_Women">The Masters 2019</div>
                                    <div  className="MarketGroup collapse show" id="collapse_FIBA_World_Cup_Women" aria-expanded="true">
                                        <div  className="Market">
                                            <div  className="Market-Header" data-toggle="collapse" data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false" aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                                <div  className="Market-GroupName">Tournament Markets</div>
                                            </div>
                                            <div  className="Market-Cluster collapse show" id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                                <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">To Win Outright</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div  className="MarketGroup">
                                    <div  className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_FIBA_World_Cup_Women" aria-expanded="false" aria-controls="collapse_FIBA_World_Cup_Women">English Open 2018</div>
                                    <div  className="MarketGroup collapse show" id="collapse_FIBA_World_Cup_Women" aria-expanded="true">
                                        <div  className="Market">
                                            <div  className="Market-Header" data-toggle="collapse" data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false" aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                                <div  className="Market-GroupName">Match Markets</div>
                                            </div>
                                            <div  className="Market-Cluster collapse show" id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                                <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">To Win Match</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Handicap Betting</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Alternative Match Handicap</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Total Frames 2-Way</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Total Frames 3-Way</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Asian Handicap</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Asian Total</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Correct Score</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Match Centuries 2-Way</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Match Centuries</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Player Centuries 2-Way</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Player Match Centuries</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Either Player to Win 3 Successive Frames?</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">147 Break in Match</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Highest Break in Match</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">To Win 1st Frame</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">1st Frame - Handicap 2-Way</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">1st Frame - A Break of 50+</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">1st Frame - A Break of 100+</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">1st Frame - Winning Margin</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">1st Frame - Highest Break</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">1st Frame - Highest Break Total</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">1st Frame - Player Breaks</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">1st Frame - Player Points Odd/Even</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">1st Frame - Total Points Odd/Even</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Race to (Frames)</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Leader After 1st Four Frames</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Score After 1st Four Frames</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Match to go to a Deciding Frame</a></div>
                                                <div  className="item"><a href="#" className="CouponLink_Label">Total Frames Odd/Even</a></div>
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

export default Snooker;
