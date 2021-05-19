import React from 'react';



class MotorSports extends React.Component {
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
        });
        $('.ContentPlate input.item-checkbox:checkbox').click(function(){
            $(this).parents('.page').find('.CreateCouponContainer').addClass('visible');
            var i_count = $('.ContentPlate input.item-checkbox:checkbox:checked').length;
            $(this).parents('.page').find('.CreateCouponTab_Count').html(i_count);
        });
    }
    render() {
        return(
            <div id="page_motorsports" className="page">
                <div className="header">
                    <div class="CreateCouponContainer ">
                        <div class="CreateCouponTab ">
                            <div class="CreateCouponTab_Count ">0</div>
                            <div class="CreateCouponTab_Selections ">Selections</div>
                            <div class="CreateCouponTab_Button ">Create Coupon</div>
                        </div>
                    </div>
                    <div className="title ClassificationName">Motor Sports</div>
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
                                <div className="MarketGroup">
                                    <div className="MarketGroup-GroupName" data-toggle="collapse" ata-target="#collapse_LOL_World_Champs" aria-expanded="false" aria-controls="collapse_LOL_World_Champs">
                                        <div className="Market-GroupName">USA Grand Prix</div>
                                    </div>

                                    <div className="Market-Cluster collapse show" id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                        <div className="item"><label className="Market-AllLabel checkbox no-collapsable"><input
                                            type="checkbox"/><span>To Win Outright</a></div>
                                        <div className="item"><label className="Market-AllLabel checkbox no-collapsable"><input
                                            type="checkbox"/><span>Fastest Qualifier</a></div>
                                        <div className="item"><label className="Market-AllLabel checkbox no-collapsable"><input
                                            type="checkbox"/><span>Podium Finish</a></div>
                                        <div className="item"><label className="Market-AllLabel checkbox no-collapsable"><input
                                            type="checkbox"/><span>Top 6 Finish</a></div>
                                        <div className="item"><label className="Market-AllLabel checkbox no-collapsable"><input
                                            type="checkbox"/><span>Points Finish</a></div>
                                        <div className="item"><label className="Market-AllLabel checkbox no-collapsable"><input
                                            type="checkbox"/><span>Fastest in Practice 1</a></div>
                                        <div className="item"><label className="Market-AllLabel checkbox no-collapsable"><input
                                            type="checkbox"/><span>Fastest Lap</a></div>
                                        <div className="item"><label className="Market-AllLabel checkbox no-collapsable"><input
                                            type="checkbox"/><span>Combination Podium Finish</a></div>
                                        <div className="item"><label className="Market-AllLabel checkbox no-collapsable"><input
                                            type="checkbox"/><span>Both Cars Points Finish</a></div>
                                        <div className="item"><label className="Market-AllLabel checkbox no-collapsable"><input
                                            type="checkbox"/><span>Qualifying Winning Margin</a></div>
                                        <div className="item"><label className="Market-AllLabel checkbox no-collapsable"><input
                                            type="checkbox"/><span>Winning Margin</a></div>
                                        <div className="item"><label className="Market-AllLabel checkbox no-collapsable"><input
                                            type="checkbox"/><span>Qualifying Winning Car</a></div>
                                        <div className="item"><label className="Market-AllLabel checkbox no-collapsable"><input
                                            type="checkbox"/><span>Winning Car</a></div>
                                        <div className="item"><label className="Market-AllLabel checkbox no-collapsable"><input
                                            type="checkbox"/><span>Safety Car Period During Race</a></div>
                                        <div className="item"><label className="Market-AllLabel checkbox no-collapsable"><input
                                            type="checkbox"/><span>Fastest Qualifier, Fastest Lap and Race Winner</a></div>
                                        </div>
                                        <div className="item"><label className="Market-AllLabel checkbox no-collapsable"><input
                                            type="checkbox"/><span>Driver Specials</a></div>
                                        <div className="item"><label className="Market-AllLabel checkbox no-collapsable"><input
                                            type="checkbox"/><span>Grid Position of Winner</a></div>
                                        <div className="item"><label className="Market-AllLabel checkbox no-collapsable"><input
                                            type="checkbox"/><span>Winning Nationality</a></div>
                                        <div className="item"><label className="Market-AllLabel checkbox no-collapsable"><input
                                            type="checkbox"/><span>Number of Classified Drivers</a></div>
                                        <div className="item"><label className="Market-AllLabel checkbox no-collapsable"><input
                                            type="checkbox"/><span>Number of Classified Drivers 3-Way</a></div>
                                        <div className="item"><label className="Market-AllLabel checkbox no-collapsable"><input
                                            type="checkbox"/><span>To be Classified</a></div>
                                        <div className="item"><label className="Market-AllLabel checkbox no-collapsable"><input
                                            type="checkbox"/><span>Both Cars to be Classified</a></div>
                                        <div className="item"><label className="Market-AllLabel checkbox no-collapsable"><input
                                            type="checkbox"/><span>First Driver to Retire</a></div>
                                        <div className="item"><label className="Market-AllLabel checkbox no-collapsable"><input
                                            type="checkbox"/><span>First Constructor Retiremen</a></div>
                                    </div>
                                </div>
                                <div className="MarketGroup">
                                    <div className="MarketGroup-GroupName" data-toggle="collapse" ata-target="#collapse_LOL_World_Champs" aria-expanded="false" aria-controls="collapse_LOL_World_Champs">
                                        <div className="Market-GroupName">Formula 1 Drivers Championship 2018</div>
                                    </div>

                                    <div className="Market-Cluster collapse show" id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                        <div className="item"><label className="Market-AllLabel checkbox no-collapsable"><input
                                            type="checkbox"/><span>To Win Outright</a></div>
                                    </div>
                                </div>

                                <div className="MarketGroup">
                                    <div className="MarketGroup-GroupName" data-toggle="collapse" ata-target="#collapse_LOL_World_Champs" aria-expanded="false" aria-controls="collapse_LOL_World_Champs">
                                        <div className="Market-GroupName">Formula 1 Constructors Championship 2018</div>
                                    </div>

                                    <div className="Market-Cluster collapse show" id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                        <div className="item"><label className="Market-AllLabel checkbox no-collapsable"><input
                                            type="checkbox"/><span>To Win Outright</a></div>
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

export default MotorSports;
