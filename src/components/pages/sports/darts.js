import React from 'react';



class Darts extends React.Component {
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
            <div id="page_darts" className="page">
                <div className="header">
                    <div className="CreateCouponContainer ">
                        <div className="CreateCouponTab ">
                            <div className="CreateCouponTab_Count ">0</div>
                            <div className="CreateCouponTab_Selections ">Selections</div>
                            <div className="CreateCouponTab_Button ">Create Coupon</div>
                        </div>
                    </div>
                    <div className="title ClassificationName">Darts</div>
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
                                        <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_World_Championship_2019" aria-expanded="false" aria-controls="collapse_World_Championship_2019">PDC World Championship 2019
                                        </div>
                                        <div className="MarketGroup collapse show" id="collapse_World_Championship_2019" aria-expanded="true">
                                            <div className="Market">
                                                <div className="Market-Header" data-toggle="collapse" data-target="#collapse_World_Championship_2019_Tournament_Markets" aria-expanded="false" aria-controls="collapse_World_Championship_2019_Tournament_Markets">
                                                    <div className="Market-GroupName">Tournament Markets</div>
                                                </div>
                                                <div className="Market-Cluster collapse show" id="collapse_World_Championship_2019_Tournament_Markets" aria-expanded="true">
                                                    <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">To Win
                                                        Outright</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className="MarketGroup">
                                        <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_European_Tour_13_2018" aria-expanded="false" aria-controls="collapse_European_Tour_13_2018">European Tour 13 2018
                                        </div>
                                        <div className="MarketGroup collapse show" id="collapse_European_Tour_13_2018" aria-expanded="true">
                                            <div className="Market">
                                                <div className="Market-Header" data-toggle="collapse" data-target="#collapse_European_Tour_13_2018_Tournament_Markets" aria-expanded="false" aria-controls="collapse_European_Tour_13_2018_Tournament_Markets">
                                                    <div className="Market-GroupName">Tournament Markets</div>
                                                </div>
                                                <div className="Market-Cluster collapse show" id="collapse_European_Tour_13_2018_Tournament_Markets" aria-expanded="true">
                                                    <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">To Win
                                                        Outright</a></div>
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

export default Darts;
