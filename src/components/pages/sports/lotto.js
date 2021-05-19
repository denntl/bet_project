import React from 'react';



class Lotto extends React.Component {
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
            <div id="page_lotto" className="page">
                <div className="header">
                    <div class="CreateCouponContainer ">
                        <div class="CreateCouponTab ">
                            <div class="CreateCouponTab_Count ">0</div>
                            <div class="CreateCouponTab_Selections ">Selections</div>
                            <div class="CreateCouponTab_Button ">Create Coupon</div>
                        </div>
                    </div>
                    <div className="title ClassificationName">Lotto</div>
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
                                    <div className="Market">
                                        <div className="Market-Header" data-toggle="collapse" data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false" aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                            <div className="Market-GroupName">49s</div>
                                            <div className="sm-LottoResults_HeaderButton">Results</div>
                                        </div>


                                        <div className="sm-LottoMarketGroup_CurrentInfo">
                                            Next Draw Tue 16 Oct 2018, 18:04
                                        </div>

                                        <div className="Market-Cluster collapse show" id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                            <div className="item"><a href="#" className="CouponLink_Label">Straight</a></div>
                                            <div className="item"><a href="#" className="CouponLink_Label">Combination</a></div>
                                            <div className="item"><a href="#" className="CouponLink_Label">Bonus Ball Number</a></div>
                                            <div className="item"><a href="#" className="CouponLink_Label">Bonus Ball Colour</a></div>
                                            <div className="item"><a href="#" className="CouponLink_Label">1st Number Drawn</a></div>
                                            <div className="item"><a href="#" className="CouponLink_Label">Total Value</a></div>
                                            <div className="item"><a href="#" className="CouponLink_Label">First Drawn Odd/Even</a></div>
                                            <div className="item"><a href="#" className="CouponLink_Label">HiLo</a></div>
                                            <div className="item"><a href="#" className="CouponLink_Label">Odd/Even</a></div>
                                        </div>
                                    </div>

                                    <div className="Market">
                                        <div className="Market-Header" data-toggle="collapse" data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false" aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                            <div className="Market-GroupName">Irish Lottery</div>
                                            <div className="sm-LottoResults_HeaderButton">Results</div>
                                        </div>
                                    </div>

                                    <div className="Market">
                                        <div className="Market-Header" data-toggle="collapse" data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false" aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                            <div className="Market-GroupName">Irish Daily Million</div>
                                            <div className="sm-LottoResults_HeaderButton">Results</div>
                                        </div>


                                        <div className="sm-LottoMarketGroup_CurrentInfo">
                                            Next Draw Tue 16 Oct 2018, 21:00
                                        </div>

                                        <div className="Market-Cluster collapse show" id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                            <div className="item"><a href="#" className="CouponLink_Label">Straight</a></div>
                                            <div className="item"><a href="#" className="CouponLink_Label">Combination</a></div>
                                            <div className="item"><a href="#" className="CouponLink_Label">Bonus Ball Number</a></div>
                                            <div className="item"><a href="#" className="CouponLink_Label">Total Value</a></div>
                                        </div>
                                    </div>

                                    <div className="Market">
                                        <div className="Market-Header" data-toggle="collapse" data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false" aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                            <div className="Market-GroupName">Euro Millions</div>
                                            <div className="sm-LottoResults_HeaderButton">Results</div>
                                        </div>


                                        <div className="sm-LottoMarketGroup_CurrentInfo">
                                            Next Draw Tue 16 Oct 2018, 19:30
                                        </div>

                                        <div className="Market-Cluster collapse show" id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                            <div className="item"><a href="#" className="CouponLink_Label">Straight</a></div>
                                            <div className="item"><a href="#" className="CouponLink_Label">Combination</a></div>
                                            <div className="item"><a href="#" className="CouponLink_Label">1st Number Drawn</a></div>
                                            <div className="item"><a href="#" className="CouponLink_Label">First Drawn Odd/Even</a></div>
                                            <div className="item"><a href="#" className="CouponLink_Label">HiLo</a></div>
                                            <div className="item"><a href="#" className="CouponLink_Label">Odd/Even</a></div>
                                            <div className="item"><a href="#" className="CouponLink_Label">Total Value</a></div>
                                        </div>
                                    </div>

                                    <div className="Market">
                                        <div className="Market-Header" data-toggle="collapse" data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false" aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                            <div className="Market-GroupName">Spanish Lottery</div>
                                            <div className="sm-LottoResults_HeaderButton">Results</div>
                                        </div>


                                        <div className="sm-LottoMarketGroup_CurrentInfo">
                                            Next Draw Thu 18 Oct 2018, 20:30
                                        </div>

                                        <div className="Market-Cluster collapse show" id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                            <div className="item"><a href="#" className="CouponLink_Label">Straight</a></div>
                                            <div className="item"><a href="#" className="CouponLink_Label">Combination</a></div>
                                            <div className="item"><a href="#" className="CouponLink_Label">Bonus Ball Number</a></div>
                                            <div className="item"><a href="#" className="CouponLink_Label">Total Value</a></div>
                                        </div>
                                    </div>

                                    <div className="Market">
                                        <div className="Market-Header" data-toggle="collapse" data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false" aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                            <div className="Market-GroupName">New York Lottery</div>
                                            <div className="sm-LottoResults_HeaderButton">Results</div>
                                        </div>

                                        <div className="sm-LottoMarketGroup_CurrentInfo">
                                            Next Draw Thu 18 Oct 2018, 04:21
                                        </div>

                                        <div className="Market-Cluster collapse show" id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                            <div className="item"><a href="#" className="CouponLink_Label">Straight</a></div>
                                            <div className="item"><a href="#" className="CouponLink_Label">Combination</a></div>
                                            <div className="item"><a href="#" className="CouponLink_Label">Bonus Ball Number</a></div>
                                            <div className="item"><a href="#" className="CouponLink_Label">Total Value</a></div>
                                        </div>
                                    </div>

                                    <div className="Market">
                                        <div className="Market-Header" data-toggle="collapse" data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false" aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                            <div className="Market-GroupName">German Lottery</div>
                                            <div className="sm-LottoResults_HeaderButton">Results</div>
                                        </div>

                                        <div className="sm-LottoMarketGroup_CurrentInfo">
                                            Next Draw Wed 17 Oct 2018, 17:25
                                        </div>

                                        <div className="Market-Cluster collapse show" id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                            <div className="item"><a href="#" className="CouponLink_Label">Straight</a></div>
                                            <div className="item"><a href="#" className="CouponLink_Label">Combination</a></div>
                                            <div className="item"><a href="#" className="CouponLink_Label">1st Number Drawn</a></div>
                                            <div className="item"><a href="#" className="CouponLink_Label">First Drawn Odd/Even</a></div>
                                            <div className="item"><a href="#" className="CouponLink_Label">HiLo</a></div>
                                            <div className="item"><a href="#" className="CouponLink_Label">Odd/Even</a></div>
                                            <div className="item"><a href="#" className="CouponLink_Label">Total Value</a></div>
                                        </div>
                                    </div>

                                    <div className="Market">
                                        <div className="Market-Header" data-toggle="collapse" data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false" aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                            <div className="Market-GroupName">French Lottery</div>
                                            <div className="sm-LottoResults_HeaderButton">Results</div>
                                        </div>


                                        <div className="sm-LottoMarketGroup_CurrentInfo">
                                            Next Draw Wed 17 Oct 2018, 19:35
                                        </div>

                                        <div className="Market-Cluster collapse show" id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                            <div className="item"><a href="#" className="CouponLink_Label">Straight</a></div>
                                            <div className="item"><a href="#" className="CouponLink_Label">Combination</a></div>
                                            <div className="item"><a href="#" className="CouponLink_Label">1st Number Drawn</a></div>
                                            <div className="item"><a href="#" className="CouponLink_Label">First Drawn Odd/Even</a></div>
                                            <div className="item"><a href="#" className="CouponLink_Label">HiLo</a></div>
                                            <div className="item"><a href="#" className="CouponLink_Label">Odd/Even</a></div>
                                            <div className="item"><a href="#" className="CouponLink_Label">Total Value</a></div>
                                        </div>
                                    </div>

                                    <div className="Market">
                                        <div className="Market-Header" data-toggle="collapse" data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false" aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                            <div className="Market-GroupName">Canadian Lottery</div>
                                            <div className="sm-LottoResults_HeaderButton">Results</div>
                                        </div>


                                        <div className="sm-LottoMarketGroup_CurrentInfo">
                                            Next Draw Thu 18 Oct 2018, 03:00
                                        </div>

                                        <div className="Market-Cluster collapse show" id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                            <div className="item"><a href="#" className="CouponLink_Label">Straight</a></div>
                                            <div className="item"><a href="#" className="CouponLink_Label">Combination</a></div>
                                            <div className="item"><a href="#" className="CouponLink_Label">Bonus Ball Number</a></div>
                                            <div className="item"><a href="#" className="CouponLink_Label">Total Value</a></div>
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

export default Lotto;
