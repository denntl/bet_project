import React from 'react';



class RugbyLeague extends React.Component {
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
            <div id="page_rugbyLeague"  className="page">
                <div  className="header">
                    <div  className="title ClassificationName">Rugby League</div>
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
                                    <div  className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_FIBA_World_Cup_Women" aria-expanded="false" aria-controls="collapse_FIBA_World_Cup_Women">International</div>
                                    <div  className="MarketGroup collapse show" id="collapse_FIBA_World_Cup_Women" aria-expanded="true">
                                        <div  className="Market">
                                            <div  className="Market-Header" data-toggle="collapse" data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false" aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                                <div  className="Market-GroupName">Match Coupon</div>
                                                <div  className="Market-HeaderAllCheckbox">
                                                    <label  className="Market-AllLabel checkbox no-collapsable"><input type="checkbox"   />All<span className="checkmark"></span></label>
                                                </div>
                                            </div>
                                            <div  className="Market-Cluster collapse show" id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                                <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Game Betting 2-Way</a></div>
                                                <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Game Betting 3-Way</a></div>
                                            </div>
                                        </div>

                                        <div  className="Market">
                                            <div  className="Market-Header" data-toggle="collapse" data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false" aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                                <div  className="Market-GroupName">Main</div>
                                            </div>
                                            <div  className="Market-Cluster collapse show" id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                                <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Winning Margin 4-Way</a></div>
                                            </div>
                                        </div>

                                        <div  className="Market">
                                            <div  className="Market-Header" data-toggle="collapse" data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false" aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                                <div  className="Market-GroupName">Match Betting</div>
                                            </div>
                                            <div  className="Market-Cluster collapse show" id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                                <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Tonga v Australia</a></div>
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

export default RugbyLeague;
