import React from 'react';



class BoxingUfc extends React.Component {
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
            <div id="page_boxing" className="page">
                <div className="header">
                    <div class="CreateCouponContainer ">
                        <div class="CreateCouponTab ">
                            <div class="CreateCouponTab_Count ">0</div>
                            <div class="CreateCouponTab_Selections ">Selections</div>
                            <div class="CreateCouponTab_Button ">Create Coupon</div>
                        </div>
                    </div>
                    <div className="title ClassificationName">Boxing/UFC</div>
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
                                        <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_Boxing_Upcoming_Fights" aria-expanded="false" aria-controls="collapse_Boxing_Upcoming_Fights">
                                            <div className="Market-GroupName">Boxing - Upcoming Fights</div>
                                            <div className="Market-HeaderAllCheckbox">
                                                <label className="Market-AllLabel checkbox no-collapsable"><input type="checkbox"/>All<span className="checkmark"></span></label>
                                            </div>
                                        </div>
                                        <div className="Market-Cluster collapse show" id="collapse_Boxing_Upcoming_Fights" aria-expanded="true">
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">To Win Fight</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Fight Outcome</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Round Betting</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Round Group Betting</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Will Fight go the Distance?</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Total Rounds</a></div>
                                        </div>
                                    </div>
                                    <div className="MarketGroup">
                                        <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_UFC" aria-expanded="false" aria-controls="collapse_UFC">
                                            <div className="Market-GroupName">UFC</div>
                                        </div>
                                        <div className="Market-Cluster collapse show" id="collapse_UFC" aria-expanded="true">
                                            <div className="item"><label className="checkbox"><input type="checkbox"/> Match-Ups<span className="checkmark"></span></label></div>
                                        </div>
                                    </div>
    
                                    <div className="MarketGroup">
                                        <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_World_Super_Series_Super_Lightweight" aria-expanded="false" aria-controls="collapse_World_Super_Series_Super_Lightweight">
                                            <div className="Market-GroupName">World Super Series - Super Lightweight</div>
                                        </div>
                                        <div className="Market-Cluster collapse show" id="collapse_World_Super_Series_Super_Lightweight" aria-expanded="true">
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">To Win Outright</a></div>
                                            </div>
                                    </div>
    
                                    <div className="MarketGroup">
                                        <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_World_Super_Series_Bantamweight" aria-expanded="false" aria-controls="collapse_World_Super_Series_Bantamweight">
                                            <div className="Market-GroupName">World Super Series - Bantamweight</div>
                                        </div>
                                        <div className="Market-Cluster collapse show" id="collapse_World_Super_Series_Bantamweight" aria-expanded="true">
                                            <div className="item"><label className="checkbox"><input type="checkbox"/> To Win Outright<span className="checkmark"></span></label>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className="MarketGroup">
                                        <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_World_Super_Series_Cruiserweight" aria-expanded="false" aria-controls="collapse_World_Super_Series_Cruiserweight">
                                            <div className="Market-GroupName">World Super Series - Cruiserweight</div>
                                        </div>
                                        <div className="Market-Cluster collapse show" id="collapse_World_Super_Series_Cruiserweight" aria-expanded="true">
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">To Win Outright</a></div>
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

export default BoxingUfc;
