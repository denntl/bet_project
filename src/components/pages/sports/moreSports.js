import React from 'react';



class MoreSports extends React.Component {
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
            <div id="page_moresports" className="page">
                <div className="header">
                    <div class="CreateCouponContainer ">
                        <div class="CreateCouponTab ">
                            <div class="CreateCouponTab_Count ">0</div>
                            <div class="CreateCouponTab_Selections ">Selections</div>
                            <div class="CreateCouponTab_Button ">Create Coupon</div>
                        </div>
                    </div>
                    <div className="title ClassificationName">More Sports</div>
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
                                    <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_LOL_World_Champs" aria-expanded="false" aria-controls="collapse_LOL_World_Champs">
                                        <div className="Market-GroupName">AFL 2019</div>
                                        <div className="Market-HeaderAllCheckbox">
                                            <label className="Market-AllLabel checkbox no-collapsable"><input type="checkbox"/>All<span className="checkmark"></span></label>
                                        </div>
                                    </div>
                                    <div className="Market-Cluster collapse show" id="collapse_LOL_World_Champs" aria-expanded="true">
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Grand Final Winner</a></div>
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Coleman Medal</a></div>
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Top 4 Finish</a></div>
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Top 8 Finish</a></div>
                                    </div>
                                </div>

                                <div className="MarketGroup">
                                    <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_LOL_World_Champs" aria-expanded="false" aria-controls="collapse_LOL_World_Champs">
                                        <div className="Market-GroupName">AFL Brownlow Medal 2019</div>
                                    </div>
                                    <div className="Market-Cluster collapse show" id="collapse_LOL_World_Champs" aria-expanded="true">
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Brownlow Medal</a></div>
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

export default MoreSports;
