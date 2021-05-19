import React from 'react';



class TopEvents extends React.Component {
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
            <div id="page_topEvents"  className="page">
                <div  className="header">
                    <div  className="title ClassificationName">Top Events</div>
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
                            <div className="tab-pane active">
                                <div className="MultiMakerClassificationBar_ButtonContainer nav nav-tabs" role="tablist">
                                    <a href="#Soccer-panel" className="MultiMakerClassificationBarButton active" id="Soccer-tab" data-toggle="tab" role="tab">
                                        <div className="MultiMakerClassificationBarButton_Icon">
                                            <div className="MultiMakerClassificationIcon MultiMakerClassificationIcon-1"></div>
                                        </div>
                                        <div className="MultiMakerClassificationBarButton_Label">Soccer</div>
                                    </a>
                                    <a href="#Tennis-panel" className="MultiMakerClassificationBarButton" id="Tennis-tab" data-toggle="tab" role="tab">
                                        <div className="MultiMakerClassificationBarButton_Icon">
                                            <div className="MultiMakerClassificationIcon MultiMakerClassificationIcon-13"></div>
                                        </div>
                                        <div className="MultiMakerClassificationBarButton_Label">Tennis</div>
                                    </a>
                                    <a href="#AmericanFootball-panel" className="MultiMakerClassificationBarButton" id="AmericanFootball-tab" data-toggle="tab" role="tab">
                                        <div className="MultiMakerClassificationBarButton_Icon">
                                            <div className="MultiMakerClassificationIcon MultiMakerClassificationIcon-12"></div>
                                        </div>
                                        <div className="MultiMakerClassificationBarButton_Label">American Football</div>
                                    </a>
                                    <a href="#Basketball-panel" className="MultiMakerClassificationBarButton" id="Basketball-tab" data-toggle="tab" role="tab">
                                        <div className="MultiMakerClassificationBarButton_Icon">
                                            <div className="MultiMakerClassificationIcon MultiMakerClassificationIcon-18"></div>
                                        </div>
                                        <div className="MultiMakerClassificationBarButton_Label">Basketball</div>
                                    </a>
                                    <a href="#Darts-panel" className="MultiMakerClassificationBarButton" id="Darts-tab" data-toggle="tab" role="tab">
                                        <div className="MultiMakerClassificationBarButton_Icon">
                                            <div className="MultiMakerClassificationIcon MultiMakerClassificationIcon-15"></div>
                                        </div>
                                        <div className="MultiMakerClassificationBarButton_Label">Darts</div>
                                    </a>
                                    <a href="#IceHockey-panel" className="MultiMakerClassificationBarButton" id="IceHockey-tab" data-toggle="tab" role="tab">
                                        <div className="MultiMakerClassificationBarButton_Icon">
                                            <div className="MultiMakerClassificationIcon MultiMakerClassificationIcon-17"></div>
                                        </div>
                                        <div className="MultiMakerClassificationBarButton_Label">Ice Hockey</div>
                                    </a>
                                </div>
                                
                                <div className="ContentRow tab-content clearfix W100">
                                    <section id="Soccer-panel" className="ContentPlate tab-pane fade show active" role="tabpanel">
                                        <div className="MultiMakerScrollableHorizontalNavBar_ButtonContainer nav nav-tabs" role="tablist">
                                            <a href="#UEFAEuropaLeague-panel" className="MultiMakerCompetitionBarButton  active" id="Soccer-tab" data-toggle="tab" role="tab">UEFA Europa League</a>
                                            <a href="#EnglandPremierLeague-panel" className="MultiMakerCompetitionBarButton " id="Soccer-tab" data-toggle="tab" role="tab">England Premier League</a>
                                        </div>
                                        <div className="ContentRow tab-content clearfix">
                                            <section id="UEFAEuropaLeague-panel" className="tab-pane fade show active" role="tabpanel">
                                                <div className="MultiMakerScrollableHorizontalNavBar_ButtonContainer filtre">
                                                    <div className="MultiMakerMarketHeaderBarButton MultiMakerMarketHeaderBarButton_Selected">Full Time Result</div>
                                                    <div className="MultiMakerMarketHeaderBarButton">Double Chance</div>
                                                    <div className="MultiMakerMarketHeaderBarButton">Total Goals</div>
                                                    <div className="MultiMakerMarketHeaderBarButton">Both Teams to Score</div>
                                                    <div className="MultiMakerMarketHeaderBarButton">Result/Both Teams to Score</div>
                                                </div>
                                                <div className="MarketGroupContainer MarketGroupContainer_HasLabels">
                                                    <div className="MarketCouponFixtureLabelBase Market_General Market_HasLabels W50">
                                                        <div className="MarketColumnHeader MarketHeaderLabel MarketHeaderLabel_Date">
                                                            Thu 25 Oct
                                                        </div>
                                                
                                                        <div className="MultiMakerCouponParticipantWithBookCloses CouponParticipantIPPGBase">
                                                            <div className="MultiMakerCouponParticipantWithBookCloses_LeftSideContainer">
                                                                <div className="MultiMakerCouponParticipantWithBookCloses_BookCloses">
                                                                    17:55
                                                                </div>
                                                            </div>
                                                
                                                            <div className="MultiMakerCouponParticipantWithBookCloses_TeamKitContainer">
                                                                <div className="MultiMakerCouponParticipantWithBookCloses_KitElement tk-TeamKit tk-TeamKit_1-6">
                                                                    <svg className="tk-TeamKit_SVG" width="48" height="52" ></svg>
                                                                </div>
                                                
                                                                <div className="MultiMakerCouponParticipantWithBookCloses_KitElement tk-TeamKit tk-TeamKit_1-6">
                                                                    <svg className="tk-TeamKit_SVG" width="48" height="52" ></svg>
                                                                </div>
                                                            </div>
                                                
                                                            <div className="MultiMakerCouponParticipantWithBookCloses_NameContainer">
                                                                <div className="MultiMakerCouponParticipantWithBookCloses_Name">
                                                                    AC Milan
                                                                </div>
                                                
                                                                <div className="MultiMakerCouponParticipantWithBookCloses_Name">
                                                                    Real Betis
                                                                </div>
                                                            </div>
                                                
                                                            <div className="MultiMakerCouponParticipantWithBookCloses_Icons MultiMakerCouponParticipantWithBookCloses_Icons-1">
                                                                <div className="MultiMakerCouponParticipantWithBookCloses_IconsGeneric MultiMakerCouponParticipantWithBookCloses_IconsStats"></div>
                                                            </div>
                                                        </div>
                                                
                                                        <div className="MultiMakerCouponParticipantWithBookCloses CouponParticipantIPPGBase">
                                                            <div className="MultiMakerCouponParticipantWithBookCloses_LeftSideContainer">
                                                                <div className="MultiMakerCouponParticipantWithBookCloses_BookCloses">
                                                                    17:55
                                                                </div>
                                                            </div>
                                                
                                                            <div className="MultiMakerCouponParticipantWithBookCloses_TeamKitContainer">
                                                                <div className="MultiMakerCouponParticipantWithBookCloses_KitElement tk-TeamKit tk-TeamKit_1-6">
                                                                    <svg className="tk-TeamKit_SVG" width="48" height="52" ></svg>
                                                                </div>
                                                
                                                                <div className="MultiMakerCouponParticipantWithBookCloses_KitElement tk-TeamKit tk-TeamKit_1-3">
                                                                    <svg className="tk-TeamKit_SVG" width="48" height="52" ></svg>
                                                                </div>
                                                            </div>
                                                
                                                            <div className="MultiMakerCouponParticipantWithBookCloses_NameContainer">
                                                                <div className="MultiMakerCouponParticipantWithBookCloses_Name">
                                                                    AEK Larnaca
                                                                </div>
                                                
                                                                <div className="MultiMakerCouponParticipantWithBookCloses_Name">
                                                                    Ludogorets Razgrad
                                                                </div>
                                                            </div>
                                                
                                                            <div className="MultiMakerCouponParticipantWithBookCloses_Icons MultiMakerCouponParticipantWithBookCloses_Icons-1">
                                                                <div className="MultiMakerCouponParticipantWithBookCloses_IconsGeneric MultiMakerCouponParticipantWithBookCloses_IconsStats"></div>
                                                            </div>
                                                        </div>
                                                
                                                        <div className="MultiMakerCouponParticipantWithBookCloses CouponParticipantIPPGBase">
                                                            <div className="MultiMakerCouponParticipantWithBookCloses_LeftSideContainer">
                                                                <div className="MultiMakerCouponParticipantWithBookCloses_BookCloses">
                                                                    17:55
                                                                </div>
                                                            </div>
                                                
                                                            <div className="MultiMakerCouponParticipantWithBookCloses_TeamKitContainer">
                                                                <div className="MultiMakerCouponParticipantWithBookCloses_KitElement tk-TeamKit tk-TeamKit_1-2">
                                                                    <svg className="tk-TeamKit_SVG" width="48" height="52" ></svg>
                                                                </div>
                                                
                                                                <div className="MultiMakerCouponParticipantWithBookCloses_KitElement tk-TeamKit tk-TeamKit_1-6">
                                                                    <svg className="tk-TeamKit_SVG" width="48" height="52" ></svg>
                                                                </div>
                                                            </div>
                                                
                                                            <div className="MultiMakerCouponParticipantWithBookCloses_NameContainer">
                                                                <div className="MultiMakerCouponParticipantWithBookCloses_Name">
                                                                    Anderlecht
                                                                </div>
                                                
                                                                <div className="MultiMakerCouponParticipantWithBookCloses_Name" >
                                                                    Fenerbahce
                                                                </div>
                                                            </div>
                                                
                                                            <div className="MultiMakerCouponParticipantWithBookCloses_Icons MultiMakerCouponParticipantWithBookCloses_Icons-2">
                                                                <div className="MultiMakerCouponParticipantWithBookCloses_IconsLiveInPlay MultiMakerCouponParticipantWithBookCloses_IconsGeneric"></div>
                                                
                                                                <div className="MultiMakerCouponParticipantWithBookCloses_IconsGeneric MultiMakerCouponParticipantWithBookCloses_IconsStats"></div>
                                                            </div>
                                                        </div>
                                                
                                                        <div className="MultiMakerCouponParticipantWithBookCloses CouponParticipantIPPGBase">
                                                            <div className="MultiMakerCouponParticipantWithBookCloses_LeftSideContainer">
                                                                <div className="MultiMakerCouponParticipantWithBookCloses_BookCloses">
                                                                    17:55
                                                                </div>
                                                            </div>
                                                
                                                            <div className="MultiMakerCouponParticipantWithBookCloses_TeamKitContainer">
                                                                <div className="MultiMakerCouponParticipantWithBookCloses_KitElement tk-TeamKit tk-TeamKit_1-6">
                                                                    <svg className="tk-TeamKit_SVG" width="48" height="52" ></svg>
                                                                </div>
                                                
                                                                <div className="MultiMakerCouponParticipantWithBookCloses_KitElement tk-TeamKit tk-TeamKit_1-2">
                                                                    <svg className="tk-TeamKit_SVG" width="48" height="52" ></svg>
                                                                </div>
                                                            </div>
                                                
                                                            <div className="MultiMakerCouponParticipantWithBookCloses_NameContainer">
                                                                <div className="MultiMakerCouponParticipantWithBookCloses_Name">
                                                                    F91 Dudelange
                                                                </div>
                                                
                                                                <div className="MultiMakerCouponParticipantWithBookCloses_Name">
                                                                    Olympiakos
                                                                </div>
                                                            </div>
                                                
                                                            <div className="MultiMakerCouponParticipantWithBookCloses_Icons MultiMakerCouponParticipantWithBookCloses_Icons-1">
                                                                <div className="MultiMakerCouponParticipantWithBookCloses_IconsGeneric MultiMakerCouponParticipantWithBookCloses_IconsStats"></div>
                                                            </div>
                                                        </div>
                                                
                                                    </div>
                                                
                                                    <div className="MarketCouponValuesExplicit33 Market_General Market_PWidth-12-3333">
                                                        <div className="MarketColumnHeader MarketCouponValuesExplicit33_ReducedPadding">
                                                            1
                                                        </div>
                                                
                                                        <div className="MultiMakerParticipantOddsOnlyDarker Participant_General">
                                                            <span className="MultiMakerParticipantOddsOnlyDarker_Odds">1.95</span>
                                                        </div>
                                                
                                                        <div className="MultiMakerParticipantOddsOnlyDarker Participant_General">
                                                            <span className="MultiMakerParticipantOddsOnlyDarker_Odds">3.20</span>
                                                        </div>
                                                
                                                        <div className="MultiMakerParticipantOddsOnlyDarker Participant_General">
                                                            <span className="MultiMakerParticipantOddsOnlyDarker_Odds">2.25</span>
                                                        </div>
                                                
                                                        <div className="MultiMakerParticipantOddsOnlyDarker Participant_General">
                                                            <span className="MultiMakerParticipantOddsOnlyDarker_Odds">6.50</span>
                                                        </div>
                                                    </div>
                                                
                                                    <div className="MarketCouponValuesExplicit33 Market_General Market_PWidth-12-3333">
                                                        <div className="MarketColumnHeader MarketCouponValuesExplicit33_ReducedPadding">
                                                            X
                                                        </div>
                                                
                                                        <div className="MultiMakerParticipantOddsOnlyDarker Participant_General">
                                                            <span className="MultiMakerParticipantOddsOnlyDarker_Odds">3.40</span>
                                                        </div>
                                                
                                                        <div className="MultiMakerParticipantOddsOnlyDarker Participant_General">
                                                            <span className="MultiMakerParticipantOddsOnlyDarker_Odds">3.30</span>
                                                        </div>
                                                
                                                        <div className="MultiMakerParticipantOddsOnlyDarker Participant_General">
                                                            <span className="MultiMakerParticipantOddsOnlyDarker_Odds">3.60</span>
                                                        </div>
                                                
                                                        <div className="MultiMakerParticipantOddsOnlyDarker Participant_General">
                                                            <span className="MultiMakerParticipantOddsOnlyDarker_Odds">4.20</span>
                                                        </div>
                                                    </div>
                                                
                                                    <div className="MarketCouponValuesExplicit33 Market_General Market_PWidth-12-3333">
                                                        <div className="MarketColumnHeader MarketCouponValuesExplicit33_ReducedPadding">
                                                            2
                                                        </div>
                                                
                                                        <div className="MultiMakerParticipantOddsOnlyDarker Participant_General">
                                                            <span className="MultiMakerParticipantOddsOnlyDarker_Odds">4.60</span>
                                                        </div>
                                                
                                                        <div className="MultiMakerParticipantOddsOnlyDarker Participant_General">
                                                            <span className="MultiMakerParticipantOddsOnlyDarker_Odds">2.45</span>
                                                        </div>
                                                
                                                        <div className="MultiMakerParticipantOddsOnlyDarker Participant_General">
                                                            <span className="MultiMakerParticipantOddsOnlyDarker_Odds">3.30</span>
                                                        </div>
                                                
                                                        <div className="MultiMakerParticipantOddsOnlyDarker Participant_General">
                                                            <span className="MultiMakerParticipantOddsOnlyDarker_Odds">1.57</span>
                                                        </div>
                                                    </div>
                                                
                                                    <div className="MarketCouponFixtureLink Market_General">
                                                        <div className="MarketColumnHeader">
                                                            &nbsp;
                                                        </div>
                                                
                                                        <div className="CouponFixtureLinkParticipant MultiMakerCouponFixtureLinkParticipant">
                                                            <div className="CouponFixtureLinkParticipant_Name">
                                                                120
                                                            </div>
                                                        </div>
                                                
                                                        <div className="CouponFixtureLinkParticipant MultiMakerCouponFixtureLinkParticipant">
                                                            <div className="CouponFixtureLinkParticipant_Name">
                                                                95
                                                            </div>
                                                        </div>
                                                
                                                        <div className="CouponFixtureLinkParticipant MultiMakerCouponFixtureLinkParticipant">
                                                            <div className="CouponFixtureLinkParticipant_Name">
                                                                95
                                                            </div>
                                                        </div>
                                                
                                                        <div className="CouponFixtureLinkParticipant MultiMakerCouponFixtureLinkParticipant">
                                                            <div className="CouponFixtureLinkParticipant_Name">
                                                                95
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>                                    
                                            </section>
                                            <section id="EnglandPremierLeague-panel" className="tab-pane fade" role="tabpanel">
                                                <div className="MultiMakerScrollableHorizontalNavBar_ButtonContainer filtre">
                                                    <div className="MultiMakerMarketHeaderBarButton MultiMakerMarketHeaderBarButton_Selected">Full Time Result</div>
                                                    <div className="MultiMakerMarketHeaderBarButton">Double Chance</div>
                                                    <div className="MultiMakerMarketHeaderBarButton">Total Goals</div>
                                                    <div className="MultiMakerMarketHeaderBarButton">Both Teams to Score</div>
                                                    <div className="MultiMakerMarketHeaderBarButton">Result/Both Teams to Score</div>
                                                </div>
                                                <div className="NoResultsMessage "><div className="NoResultsMessage_Text " >Sorry, there are no markets available for this time period, please extend your search.</div></div>
                                            </section>
                                        </div>
                                    </section>
                                   <section id="Tennis-panel" className="ContentPlate tab-pane fade" role="tabpanel">
                                      <div className="NoResultsMessage "><div className="NoResultsMessage_Text " >Sorry, there are no markets available for this time period, please extend your search.</div></div>
                                    </section>
                                   <section id="AmericanFootball-panel" className="ContentPlate tab-pane fade" role="tabpanel">
                                      <div className="NoResultsMessage "><div className="NoResultsMessage_Text " >Sorry, there are no markets available for this time period, please extend your search.</div></div>
                                    </section>
                                   <section id="Basketball-panel" className="ContentPlate tab-pane fade" role="tabpanel">
                                      <div className="NoResultsMessage "><div className="NoResultsMessage_Text " >Sorry, there are no markets available for this time period, please extend your search.</div></div>
                                    </section>
                                   <section id="Darts-panel" className="ContentPlate tab-pane fade" role="tabpanel">
                                      <div className="NoResultsMessage "><div className="NoResultsMessage_Text " >Sorry, there are no markets available for this time period, please extend your search.</div></div>
                                    </section>
                                   <section id="IceHockey-panel" className="ContentPlate tab-pane fade" role="tabpanel">
                                      <div className="NoResultsMessage "><div className="NoResultsMessage_Text " >Sorry, there are no markets available for this time period, please extend your search.</div></div>
                                    </section>                                  
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default TopEvents;
