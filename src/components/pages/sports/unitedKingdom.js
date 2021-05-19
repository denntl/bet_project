import React from 'react';



class UnitedKingdom extends React.Component {
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
            <div id="page_unitedKingdom"  className="page">
                <div  className="header">
                    <div  className="title ClassificationName">United Kingdom</div>
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
                                    <div  className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_LOL_World_Champs" aria-expanded="false" aria-controls="collapse_LOL_World_Champs">
                                        <div  className="Market-GroupName">Swedish Idol 2018</div>
                                        <div  className="Market-HeaderAllCheckbox">
                                            <label  className="Market-AllLabel checkbox no-collapsable"><input type="checkbox"   />All<span className="checkmark"></span></label>
                                        </div>
                                    </div>
                                    <div  className="Market-Cluster collapse show" id="collapse_LOL_World_Champs" aria-expanded="true">
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">To Win Outright</a></div>
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Next Elimination</a></div>
                                    </div>
                                </div>


                                <div  className="MarketGroup">
                                    <div  className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_LOL_World_Champs" aria-expanded="false" aria-controls="collapse_LOL_World_Champs">
                                        <div  className="Market-GroupName">UK General Election</div>
                                        <div  className="Market-HeaderAllCheckbox">
                                            <label  className="Market-AllLabel checkbox no-collapsable"><input type="checkbox"   />All<span className="checkmark"></span></label>
                                        </div>
                                    </div>
                                    <div  className="Market-Cluster collapse show" id="collapse_LOL_World_Champs" aria-expanded="true">
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">UK General Election</a></div>
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Year of Next Election</a></div>
                                    </div>
                                </div>

                                <div  className="MarketGroup">
                                    <div  className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_LOL_World_Champs" aria-expanded="false" aria-controls="collapse_LOL_World_Champs">
                                        <div  className="Market-GroupName">UK Politics - Next Permanent Party Leaders</div>
                                    </div>
                                    <div  className="Market-Cluster collapse show" id="collapse_LOL_World_Champs" aria-expanded="true">
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">UK Politics - Next Permanent Party Leaders</a></div>
                                    </div>
                                </div>

                                <div  className="MarketGroup">
                                    <div  className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_LOL_World_Champs" aria-expanded="false" aria-controls="collapse_LOL_World_Champs">
                                        <div  className="Market-GroupName">X Factor 2018</div>
                                        <div  className="Market-HeaderAllCheckbox">
                                            <label  className="Market-AllLabel checkbox no-collapsable"><input type="checkbox"   />All<span className="checkmark"></span></label>
                                        </div>
                                    </div>
                                    <div  className="Market-Cluster collapse show" id="collapse_LOL_World_Champs" aria-expanded="true">
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">To Win Outright</a></div>
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Winning Judge</a></div>
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Top Overs</a></div>
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Top Group</a></div>
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Top Girl</a></div>
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Top Boy</a></div>
                                    </div>
                                </div>

                                <div  className="MarketGroup">
                                    <div  className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_LOL_World_Champs" aria-expanded="false" aria-controls="collapse_LOL_World_Champs">
                                        <div  className="Market-GroupName">Big Brother</div>
                                        <div  className="Market-HeaderAllCheckbox">
                                            <label  className="Market-AllLabel checkbox no-collapsable"><input type="checkbox"   />All<span className="checkmark"></span></label>
                                        </div>
                                    </div>
                                    <div  className="Market-Cluster collapse show" id="collapse_LOL_World_Champs" aria-expanded="true">
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">To Win Outright</a></div>
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Top Man</a></div>
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Top Woman</a></div>
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Gender of Winner</a></div>
                                    </div>
                                </div>

                                <div  className="MarketGroup">
                                    <div  className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_LOL_World_Champs" aria-expanded="false" aria-controls="collapse_LOL_World_Champs">
                                        <div  className="Market-GroupName">Royal Births 2019</div>
                                    </div>
                                    <div  className="Market-Cluster collapse show" id="collapse_LOL_World_Champs" aria-expanded="true">
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Royal Births 2019</a></div>
                                    </div>
                                </div>

                                <div  className="MarketGroup">
                                    <div  className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_LOL_World_Champs" aria-expanded="false" aria-controls="collapse_LOL_World_Champs">
                                        <div  className="Market-GroupName">Strictly Come Dancing 2018</div>
                                        <div  className="Market-HeaderAllCheckbox">
                                            <label  className="Market-AllLabel checkbox no-collapsable"><input type="checkbox"   />All<span className="checkmark"></span></label>
                                        </div>
                                    </div>
                                    <div  className="Market-Cluster collapse show" id="collapse_LOL_World_Champs" aria-expanded="true">
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">To Win Outright</a></div>
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Top Man</a></div>
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Top Woman</a></div>
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Gender of Winner</a></div>
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Next Elimination</a></div>
                                    </div>
                                </div>

                                <div  className="MarketGroup">
                                    <div  className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_LOL_World_Champs" aria-expanded="false" aria-controls="collapse_LOL_World_Champs">
                                        <div  className="Market-GroupName">BBC Sports Personality of the Year 2018</div>
                                    </div>
                                    <div  className="Market-Cluster collapse show" id="collapse_LOL_World_Champs" aria-expanded="true">
                                        <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">To Win Outright</a></div>
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

export default UnitedKingdom;