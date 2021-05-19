import React from 'react';



class Golf extends React.Component {
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
            <div id="page_golf" className="page">
                <div className="header">
                    <div class="CreateCouponContainer ">
                        <div class="CreateCouponTab ">
                            <div class="CreateCouponTab_Count ">0</div>
                            <div class="CreateCouponTab_Selections ">Selections</div>
                            <div class="CreateCouponTab_Button ">Create Coupon</div>
                        </div>
                    </div>
                    <div className="title ClassificationName">Golf</div>
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
                                        <div className="Market-GroupName">In-Play</div>
                                    </div>
                                    <div className="Market-Cluster collapse show" id="collapse_LOL_World_Champs" aria-expanded="true">
                                        <div className="item"><label>Outright - Senior LPGA Championship<span className="checkmark"></span></label></div>
                                    </div>
                                </div>

                                <div className="MarketGroup">
                                    <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_LOL_World_Champs" aria-expanded="false" aria-controls="collapse_LOL_World_Champs">
                                        <div className="Market-GroupName">CJ Cup</div>
                                    </div>
                                    <div className="Market-Cluster collapse show" id="collapse_LOL_World_Champs" aria-expanded="true">
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">To Win Outright</a></div>
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">72 Hole Group
                                            Betting</a></div>
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">72 Hole Match
                                            Betting</a></div>
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Top American</a></div>
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Top European</a></div>
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Top Rest of World</a></div>
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Top Englishman</a></div>
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Top Australian</a></div>
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Top South African</a></div>
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Top 5 Finish</a></div>
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Top 10 Finish</a></div>
                                    </div>
                                </div>

                                <div className="MarketGroup">
                                    <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_LOL_World_Champs" aria-expanded="false" aria-controls="collapse_LOL_World_Champs">
                                        <div className="Market-GroupName">Andalucia Valderrama Masters</div>
                                    </div>
                                    <div className="Market-Cluster collapse show" id="collapse_LOL_World_Champs" aria-expanded="true">
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">To Win Outright</a></div>
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">72 Hole Group
                                            Betting</a></div>
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">72 Hole Match
                                            Betting</a></div>
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Top
                                            GB &amp; Ireland</a></div>
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Top Continental
                                            European</a></div>
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Top Rest of World</a></div>
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Top Australian</a></div>
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Top Frenchman</a></div>
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Top Scotsman</a></div>
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Top South African</a></div>
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Top Spaniard</a></div>
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Top 5 Finish</a></div>
                                    </div>
                                </div>


                                <div className="MarketGroup">
                                    <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_LOL_World_Champs" aria-expanded="false" aria-controls="collapse_LOL_World_Champs">
                                        <div className="Market-GroupName">Bridgestone Open</div>
                                    </div>
                                    <div className="Market-Cluster collapse show" id="collapse_LOL_World_Champs" aria-expanded="true">
                                        <div className="item"><label>To Win Outright<span className="checkmark"></span></label></div>
                                    </div>
                                </div>

                                <div className="MarketGroup">
                                    <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_LOL_World_Champs" aria-expanded="false" aria-controls="collapse_LOL_World_Champs">
                                        <div className="Market-GroupName">Buick LPGA Shanghai</div>
                                    </div>
                                    <div className="Market-Cluster collapse show" id="collapse_LOL_World_Champs" aria-expanded="true">
                                        <div className="item"><label>To Win Outright<span className="checkmark"></span></label></div>
                                    </div>
                                </div>

                                <div className="MarketGroup">
                                    <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_LOL_World_Champs" aria-expanded="false" aria-controls="collapse_LOL_World_Champs">
                                        <div className="Market-GroupName">Showdown at Shadow Creek</div>
                                    </div>
                                    <div className="Market-Cluster collapse show" id="collapse_LOL_World_Champs" aria-expanded="true">
                                        <div className="item"><label>To Win Match<span className="checkmark"></span></label></div>
                                    </div>
                                </div>

                                <div className="MarketGroup">
                                    <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_LOL_World_Champs" aria-expanded="false" aria-controls="collapse_LOL_World_Champs">
                                        <div className="Market-GroupName">2019 US Masters</div>
                                    </div>
                                    <div className="Market-Cluster collapse show" id="collapse_LOL_World_Champs" aria-expanded="true">
                                        <div className="item"><label>To Win Outright<span className="checkmark"></span></label></div>
                                    </div>
                                </div>

                                <div className="MarketGroup">
                                    <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_LOL_World_Champs" aria-expanded="false" aria-controls="collapse_LOL_World_Champs">
                                        <div className="Market-GroupName">2019 US Open</div>
                                    </div>
                                    <div className="Market-Cluster collapse show" id="collapse_LOL_World_Champs" aria-expanded="true">
                                        <div className="item"><label>To Win Outright<span className="checkmark"></span></label></div>
                                    </div>
                                </div>

                                <div className="MarketGroup">
                                    <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_LOL_World_Champs" aria-expanded="false" aria-controls="collapse_LOL_World_Champs">
                                        <div className="Market-GroupName">2019 The Open Championship</div>
                                    </div>
                                    <div className="Market-Cluster collapse show" id="collapse_LOL_World_Champs" aria-expanded="true">
                                        <div className="item"><label>To Win Outright<span className="checkmark"></span></label></div>
                                    </div>
                                </div>

                                <div className="MarketGroup">
                                    <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_LOL_World_Champs" aria-expanded="false" aria-controls="collapse_LOL_World_Champs">
                                        <div className="Market-GroupName">2019 PGA Championship</div>
                                    </div>
                                    <div className="Market-Cluster collapse show" id="collapse_LOL_World_Champs" aria-expanded="true">
                                        <div className="item"><label>To Win Outright<span className="checkmark"></span></label></div>
                                    </div>
                                </div>

                                <div className="MarketGroup">
                                    <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_LOL_World_Champs" aria-expanded="false" aria-controls="collapse_LOL_World_Champs">
                                        <div className="Market-GroupName">Ryder Cup 2020</div>
                                    </div>
                                    <div className="Market-Cluster collapse show" id="collapse_LOL_World_Champs" aria-expanded="true">
                                        <div className="item"><label>To Win Outright<span className="checkmark"></span></label></div>
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

export default Golf;
