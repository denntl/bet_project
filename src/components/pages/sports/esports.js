import React from 'react';



class Esports extends React.Component {
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
            <div id="page_esports" className="page">
                <div className="header">
                    <div class="CreateCouponContainer ">
                        <div class="CreateCouponTab ">
                            <div class="CreateCouponTab_Count ">0</div>
                            <div class="CreateCouponTab_Selections ">Selections</div>
                            <div class="CreateCouponTab_Button ">Create Coupon</div>
                        </div>
                    </div>
                    <div className="title ClassificationName">Esports</div>
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
                                <div className="LiveInPlayHeader">
                                    <div className="LiveInPlayHeader_Container">
                                        <div className="LiveInPlayHeader_LiveLabel">Live</div>
                                        <div className="LiveInPlayHeader_InPlayLabel">In-Play</div>
                                        <div className="LiveInPlayHeader_InPlayNumber">4</div>
                                    </div>
                                </div>

                                <section id="" className="ContentPlate">
                                    <div className="MarketGroup">
                                        <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_LOL_World_Champs" aria-expanded="false" aria-controls="collapse_LOL_World_Champs">
                                            <div className="Market-GroupName">LOL - World Champs</div>
                                        </div>
                                        <div className="Market-Cluster collapse show" id="collapse_LOL_World_Champs" aria-expanded="true">
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Group Betting</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Match Winner 2-Way</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Team to Score the Most
                                                Kills</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Team to Draw First Blood -
                                                Map 1</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">First Team to Get 10 Kills
                                                - Map 1</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Team to Destroy the First
                                                Tower</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Total Towers Destroyed
                                                Over/Under</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Team to Destroy the First
                                                Inhibitor</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Total Inhibitors Destroyed
                                                Over/Under</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Team to Slay the First
                                                Dragon</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Total Dragons Slain
                                                Over/Under</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Team to Slay the First
                                                Baron</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Total Barons Slain
                                                Over/Under</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Kill Handicap</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Total Kills Scored
                                                Over/Under - Map 1</a></div>
                                        </div>
                                    </div>
    
                                    <div className="MarketGroup">
                                        <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_PUBG_PGL_Fall" aria-expanded="false" aria-controls="collapse_PUBG_PGL_Fall">
                                            <div className="Market-GroupName">PUBG - PGL Fall</div>
                                        </div>
                                        <div className="Market-Cluster collapse show" id="collapse_PUBG_PGL_Fall" aria-expanded="true">
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Round Winner</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Top 3 Round Finish</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Team - Most Kills in Round
                                                3</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Round 3 Team - Points
                                                Match-Ups</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Round 3 Team - Kills
                                                Match-Ups</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Round 4 Team - Points
                                                Match-Ups</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Round 4 Team - Kills
                                                Match-Ups</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Round 5 Team - Points
                                                Match-Ups</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Round 5 Team - Kills
                                                Match-Ups</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Round 6 Team - Points
                                                Match-Ups</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Round 6 Team - Kills
                                                Match-Ups</a></div>
                                        </div>
                                    </div>
    
                                    <div className="MarketGroup">
                                        <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_CS_GO_StarSeries_i_League" aria-expanded="false" aria-controls="collapse_CS_GO_StarSeries_i_League">
                                            <div className="Market-GroupName">CS:GO - StarSeries i-League</div>
                                        </div>
                                        <div className="Market-Cluster collapse show" id="collapse_CS_GO_StarSeries_i_League" aria-expanded="true">
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Match Winner 2-Way</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Round Winner 2-Way - Map 1</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Rounds Handicap</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Match Handicap</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Total Maps Over/Under</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Correct Map Score</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">To Win at Least 1 Map</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Map 1 Winner 2-Way</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Map 2 Winner 2-Way</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Round Winner 2-Way - Map 2</a></div>
                                        </div>
                                    </div>
    
                                    <div className="MarketGroup">
                                        <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_Hearthstone_HCT_Fall_Champ" aria-expanded="false" aria-controls="collapse_Hearthstone_HCT_Fall_Champ">
                                            <div className="Market-GroupName">Hearthstone - HCT Fall Champ</div>
                                            <div className="Market-HeaderAllCheckbox">
                                                <label className="Market-AllLabel checkbox no-collapsable"><input type="checkbox"/>All<span className="checkmark"></span></label>
                                            </div>
                                        </div>
                                        <div className="Market-Cluster collapse show" id="collapse_Hearthstone_HCT_Fall_Champ" aria-expanded="true">
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">To Win Outright</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">To Reach the Final</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Region of Winner</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Group Betting</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Group Qualification</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Winner's Group</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Match Winner 2-Way</a></div>
                                        </div>
                                    </div>
    
                                    <div className="MarketGroup">
                                        <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_DOTA2_ESL_One_Hamburg" aria-expanded="false" aria-controls="collapse_DOTA2_ESL_One_Hamburg">
                                            <div className="Market-GroupName">DOTA2 - ESL One Hamburg</div>
                                            <div className="Market-HeaderAllCheckbox">
                                                <label className="Market-AllLabel checkbox no-collapsable"><input type="checkbox"/>All<span className="checkmark"></span></label>
                                            </div>
                                        </div>
                                        <div className="Market-Cluster collapse show" id="collapse_DOTA2_ESL_One_Hamburg" aria-expanded="true">
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">To Win Outright</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">To Reach the Final</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Region of Winner</a></div>
                                        </div>
                                    </div>
    
                                    <div className="MarketGroup">
                                        <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_DOTA2_Kuala_Lumpur_Major" aria-expanded="false" aria-controls="collapse_DOTA2_Kuala_Lumpur_Major">
                                            <div className="Market-GroupName">DOTA2 - Kuala Lumpur Major</div>
                                            <div className="Market-HeaderAllCheckbox">
                                                <label className="Market-AllLabel checkbox no-collapsable"><input type="checkbox"/>All<span className="checkmark"></span></label>
                                            </div>
                                        </div>
                                        <div className="Market-Cluster collapse show" id="collapse_DOTA2_Kuala_Lumpur_Major" aria-expanded="true">
                                            <div className="item"><label className="checkbox"><input type="checkbox"/>To Win Outright<span className="checkmark"></span></label></div>
                                            <div className="item"><label className="checkbox"><input type="checkbox"/>To Reach the Final<span className="checkmark"></span></label></div>
                                        </div>
                                    </div>
    
                                    <div className="MarketGroup">
                                        <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_CS_GO_BLAST_Pro_Series" aria-expanded="false" aria-controls="collapse_CS_GO_BLAST_Pro_Series">
                                            <div className="Market-GroupName">CS:GO - BLAST Pro Series</div>
                                            <div className="Market-HeaderAllCheckbox">
                                                <label className="Market-AllLabel checkbox no-collapsable"><input type="checkbox"/>All<span className="checkmark"></span></label>
                                            </div>
                                        </div>
                                        <div className="Market-Cluster collapse show" id="collapse_CS_GO_BLAST_Pro_Series" aria-expanded="true">
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">To Win Outright</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">To Reach the Final</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Team vs Field</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Betting Without
                                                Astralis</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Region of Winner</a></div>
                                        </div>
                                    </div>
    
                                    <div className="MarketGroup">
                                        <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_CS_GO_ECS_Match_1" aria-expanded="false" aria-controls="collapse_CS_GO_ECS_Match_1">
                                            <div className="Market-GroupName">CS:GO - ECS - Match 1</div>
                                            <div className="Market-HeaderAllCheckbox">
                                                <label className="Market-AllLabel checkbox no-collapsable"><input type="checkbox"/>All<span className="checkmark"></span></label>
                                            </div>
                                        </div>
                                        <div className="Market-Cluster collapse show" id="collapse_CS_GO_ECS_Match_1" aria-expanded="true">
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Match Winner 2-Way</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Round Winner 2-Way - Map 1</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Rounds Handicap</a></div>
                                        </div>
                                    </div>
    
                                    <div className="MarketGroup">
                                        <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_CS_GO_ECS_Match_2" aria-expanded="false" aria-controls="collapse_CS_GO_ECS_Match_2">
                                            <div className="Market-GroupName">CS:GO - ECS - Match 2</div>
                                            <div className="Market-HeaderAllCheckbox">
                                                <label className="Market-AllLabel checkbox no-collapsable"><input type="checkbox"/>All<span className="checkmark"></span></label>
                                            </div>
                                        </div>
                                        <div className="Market-Cluster collapse show" id="collapse_CS_GO_ECS_Match_2" aria-expanded="true">
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Match Winner 2-Way</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Round Winner 2-Way - Map 1</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Rounds Handicap</a></div>
                                        </div>
                                    </div>
    
                                    <div className="MarketGroup">
                                        <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_CS_GO_ESEA_MDL" aria-expanded="false" aria-controls="collapse_CS_GO_ESEA_MDL">
                                            <div className="Market-GroupName">CS:GO - ESEA MDL</div>
                                            <div className="Market-HeaderAllCheckbox">
                                                <label className="Market-AllLabel checkbox no-collapsable"><input type="checkbox"/>All<span className="checkmark"></span></label>
                                            </div>
                                        </div>
                                        <div className="Market-Cluster collapse show" id="collapse_CS_GO_ESEA_MDL" aria-expanded="true">
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Match Winner 2-Way</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Round Winner 2-Way - Map 1</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Rounds Handicap</a></div>
                                        </div>
                                    </div>
    
                                    <div className="MarketGroup">
                                        <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_CS_GO_eXTREMESLAND_Asia_Finals" aria-expanded="false" aria-controls="collapse_CS_GO_eXTREMESLAND_Asia_Finals">
                                            <div className="Market-GroupName">CS:GO - eXTREMESLAND Asia Finals</div>
                                            <div className="Market-HeaderAllCheckbox">
                                                <label className="Market-AllLabel checkbox no-collapsable"><input type="checkbox"/>All<span className="checkmark"></span></label>
                                            </div>
                                        </div>
                                        <div className="Market-Cluster collapse show" id="collapse_CS_GO_eXTREMESLAND_Asia_Finals" aria-expanded="true">
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">To Win Outright</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">To Reach the Final</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Match Winner 2-Way</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Round Winner 2-Way - Map 1</a></div>
                                        </div>
                                    </div>
    
                                    <div className="MarketGroup">
                                        <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_CS_GO_Gfinity_Spring_Series" aria-expanded="false" aria-controls="collapse_CS_GO_Gfinity_Spring_Series">
                                            <div className="Market-GroupName">CS:GO - Gfinity Spring Series</div>
                                            <div className="Market-HeaderAllCheckbox">
                                                <label className="Market-AllLabel checkbox no-collapsable"><input type="checkbox"/>All<span className="checkmark"></span></label>
                                            </div>
                                        </div>
                                        <div className="Market-Cluster collapse show" id="collapse_CS_GO_Gfinity_Spring_Series" aria-expanded="true">
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Match Winner 2-Way</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Match Handicap</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Correct Map Score</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Total Maps Over/Under</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">To Win at Least 1 Map</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Rounds Handicap</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Map 1 Winner 2-Way</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Map 2 Winner 2-Way</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Round Winner 2-Way - Map 1</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Round Winner 2-Way - Map 2</a></div>
                                        </div>
                                    </div>
    
                                    <div className="MarketGroup">
                                        <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_CS_GO_Thunderpick_Invitational" aria-expanded="false" aria-controls="collapse_CS_GO_Thunderpick_Invitational">
                                            <div className="Market-GroupName">CS:GO - Thunderpick Invitational</div>
                                            <div className="Market-HeaderAllCheckbox">
                                                <label className="Market-AllLabel checkbox no-collapsable"><input type="checkbox"/>All<span className="checkmark"></span></label>
                                            </div>
                                        </div>
                                        <div className="Market-Cluster collapse show" id="collapse_CS_GO_Thunderpick_Invitational" aria-expanded="true">
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Match Winner 2-Way</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Round Winner 2-Way - Map 1</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Rounds Handicap</a></div>
                                        </div>
                                    </div>
    
                                    <div className="MarketGroup">
                                        <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_DOTA2_Autumn_Brawl" aria-expanded="false" aria-controls="collapse_DOTA2_Autumn_Brawl">
                                            <div className="Market-GroupName">DOTA2 - Autumn Brawl</div>
                                            <div className="Market-HeaderAllCheckbox">
                                                <label className="Market-AllLabel checkbox no-collapsable"><input type="checkbox"/>All<span className="checkmark"></span></label>
                                            </div>
                                        </div>
                                        <div className="Market-Cluster collapse show" id="collapse_DOTA2_Autumn_Brawl" aria-expanded="true">
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Match Winner 2-Way</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Map 1 Winner 2-Way</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Map 2 Winner 2-Way</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Match Handicap</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Total Maps Over/Under</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">To Win at Least 1\ Map</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Correct Map Score</a></div>
                                        </div>
                                    </div>
    
                                    <div className="MarketGroup">
                                        <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_DOTA2_DreamLeague" aria-expanded="false" aria-controls="collapse_DOTA2_DreamLeague">
                                            <div className="Market-GroupName">DOTA2 - DreamLeague</div>
                                            <div className="Market-HeaderAllCheckbox">
                                                <label className="Market-AllLabel checkbox no-collapsable"><input type="checkbox"/>All<span className="checkmark"></span></label>
                                            </div>
                                        </div>
                                        <div className="Market-Cluster collapse show" id="collapse_DOTA2_DreamLeague" aria-expanded="true">
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">To Win Outright</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">To Reach the Final</a></div>
                                        </div>
                                    </div>
    
    
                                    <div className="MarketGroup">
                                        <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_DOTA2_King_s_Cup" aria-expanded="false" aria-controls="collapse_DOTA2_King_s_Cup">
                                            <div className="Market-GroupName">DOTA2 - King's Cup</div>
                                            <div className="Market-HeaderAllCheckbox">
                                                <label className="Market-AllLabel checkbox no-collapsable"><input type="checkbox"/>All<span className="checkmark"></span></label>
                                            </div>
                                        </div>
                                        <div className="Market-Cluster collapse show" id="collapse_DOTA2_King_s_Cup" aria-expanded="true">
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Match Winner 2-Way</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Match Winner 3-Way</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Match Handicap</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Map 1 Winner 2-Way</a></div>
                                            <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Map 2 Winner 2-Way</a></div>
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

export default Esports;
