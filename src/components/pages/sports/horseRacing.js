import React from 'react';



class Racing extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        $('.RaceMeetingCluster').owlCarousel({
        items: 8,
            loop: false,
            margin: 10
        });
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
            <div id="page_horseracing" className="page">
                    <div className="header">
                <div className="title ClassificationName">Greyhounds</div>
                <div className="nav-tabs">
                    <a href="#next-24-hrs" className="ClassificationHeader-PeriodOption" data-toggle="tab" role="tab">Next 24 hrs</a>
                    <a href="#all" className="ClassificationHeader-PeriodOption active" data-toggle="tab" role="tab">All</a>
                </div>
            </div>
                    <div className="content">
                        <div className="SplashContainer">
                            <div  className="tab-content">
                                <div className="tab-pane fade" role="tabpanel" id="next-24-hrs">
                                    <div className="NoAvailableMarkets ">
                                        <div className="desc">Sorry, there are no markets currently available in this category.</div>
                                        <div className="info">At bet365 we aim to offer the most comprehensive betting service across all international sports. If you feel we are not covering an event or market that we should please contact us.</div>
                                    </div>
                                </div>
                                <div className="tab-pane fade show active" role="tabpanel" id="all">
                                    <div className="LiveInPlayHeader">
                                        <div className="LiveInPlayHeader_Container">
                                            <div className="LiveInPlayHeader_LiveLabel">Live</div>      
                                            <div className="LiveInPlayHeader_InPlayLabel">In-Play</div>     
                                            <div className="LiveInPlayHeader_InPlayNumber">7</div>
                                        </div>
                                    </div>
        
                                    <div className="MarketGroup">
                                        <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_FIBA_World_Cup_Women" aria-expanded="false" aria-controls="collapse_FIBA_World_Cup_Women">Next Three <span className="RacingMarketGroup_Link">Next 3 Coupon</span></div>
        
                                        <div className="Market-Cluster collapse show" id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                                <div className="ntr-NextRacesContainer  Horses">
                                                    <div className="ntr-NextRacesContainer_Container">
                                                        <div className="ntr-Fixture">
                                                            <div className="ntr-Fixture_Header">
                                                                3.45 Newmarket (Race 5)
                                                            </div>
                                                
                                                            <div className="ntr-Fixture_ParticipantContainer">
                                                                <div className="ntr-Participant">
                                                                    <div className="ntr-Participant_SilkUk"><img src="https://www.imagecache365.com/JockeySilksTransparent/220727.GIF" className="ntr-Participant_Silk" /></div>
                                                
                                                                    <div className="ntr-ParticipantDetails">
                                                                        <div className="ntr-Participant_Horse">
                                                                            Prefontaine
                                                                        </div>
                                                
                                                                        <div className="ntr-Participant_Jockey">
                                                                            Andrea Atzeni
                                                                        </div>
                                                                    </div>
                                                
                                                                    <div className="ntr-Participant_Odds">
                                                                        3.25
                                                                    </div>
                                                                </div>
                                                
                                                                <div className="ntr-Participant">
                                                                    <div className="ntr-Participant_SilkUk"><img src="https://www.imagecache365.com/JockeySilksTransparent/302344.GIF" className="ntr-Participant_Silk" /></div>
                                                
                                                                    <div className="ntr-ParticipantDetails">
                                                                        <div className="ntr-Participant_Horse">
                                                                            Fearless Warrior
                                                                        </div>
                                                
                                                                        <div className="ntr-Participant_Jockey">
                                                                            Oisin Murphy
                                                                        </div>
                                                                    </div>
                                                
                                                                    <div className="ntr-Participant_Odds">
                                                                        4.50
                                                                    </div>
                                                                </div>
                                                
                                                                <div className="ntr-Participant">
                                                                    <div className="ntr-Participant_SilkUk"><img src="https://www.imagecache365.com/JockeySilksTransparent/78128.GIF" className="ntr-Participant_Silk" /></div>
                                                
                                                                    <div className="ntr-ParticipantDetails">
                                                                        <div className="ntr-Participant_Horse">
                                                                            Skymax
                                                                        </div>
                                                
                                                                        <div className="ntr-Participant_Jockey">
                                                                            Harry Bentley
                                                                        </div>
                                                                    </div>
                                                
                                                                    <div className="ntr-Participant_Odds">
                                                                        5.50
                                                                    </div>
                                                                </div>
                                                            </div>
                                                
                                                            <div className="ntr-Fixture_ViewAllButtonWrapper">
                                                                <div className="ntr-Fixture_ViewAllButton">
                                                                    View Full Race
                                                                </div>
                                                            </div>
                                                        </div>
                                                
                                                        <div className="ntr-Fixture">
                                                            <div className="ntr-Fixture_Header">
                                                                3.50 Navan (Race 5)
                                                            </div>
                                                
                                                            <div className="ntr-Fixture_ParticipantContainer">
                                                                <div className="ntr-Participant">
                                                                    <div className="ntr-Participant_SilkUk"><img src="https://www.imagecache365.com/JockeySilksTransparent/43185.GIF" className="ntr-Participant_Silk" /></div>
                                                
                                                                    <div className="ntr-ParticipantDetails">
                                                                        <div className="ntr-Participant_Horse">
                                                                            Dapper Power
                                                                        </div>
                                                
                                                                        <div className="ntr-Participant_Jockey">
                                                                            W M Lordan
                                                                        </div>
                                                                    </div>
                                                
                                                                    <div className="ntr-Participant_Odds">
                                                                        2.37
                                                                    </div>
                                                                </div>
                                                
                                                                <div className="ntr-Participant">
                                                                    <div className="ntr-Participant_SilkUk"><img src="https://www.imagecache365.com/JockeySilksTransparent/6077.GIF" className="ntr-Participant_Silk" /></div>
                                                
                                                                    <div className="ntr-ParticipantDetails">
                                                                        <div className="ntr-Participant_Horse">
                                                                            Shareva
                                                                        </div>
                                                
                                                                        <div className="ntr-Participant_Jockey">
                                                                            D P McDonogh
                                                                        </div>
                                                                    </div>
                                                
                                                                    <div className="ntr-Participant_Odds">
                                                                        5.00
                                                                    </div>
                                                                </div>
                                                
                                                                <div className="ntr-Participant">
                                                                    <div className="ntr-Participant_SilkUk"><img src="https://www.imagecache365.com/JockeySilksTransparent/387043.GIF" className="ntr-Participant_Silk" /></div>
                                                
                                                                    <div className="ntr-ParticipantDetails">
                                                                        <div className="ntr-Participant_Horse">
                                                                            Al Batal
                                                                        </div>
                                                
                                                                        <div className="ntr-Participant_Jockey">
                                                                            Amy O'Hanlon
                                                                        </div>
                                                                    </div>
                                                
                                                                    <div className="ntr-Participant_Odds">
                                                                        6.50
                                                                    </div>
                                                                </div>
                                                            </div>
                                                
                                                            <div className="ntr-Fixture_ViewAllButtonWrapper">
                                                                <div className="ntr-Fixture_ViewAllButton">
                                                                    View Full Race
                                                                </div>
                                                            </div>
                                                        </div>
                                                
                                                        <div className="ntr-Fixture">
                                                            <div className="ntr-Fixture_Header">
                                                                Race 8 Happy Valley
                                                            </div>
                                                
                                                            <div className="ntr-Fixture_ParticipantContainer">
                                                                <div className="ntr-Participant">
                                                                    <div className="ntr-Participant_SilkAus"><img src="https://www.imagecache365.com/JockeySilksTransparent/aussilks/115054_8_4_512.png" className="ntr-Participant_Silk" /></div>
                                                
                                                                    <div className="ntr-ParticipantDetails">
                                                                        <div className="ntr-Participant_Horse">
                                                                            Jade Theatre
                                                                        </div>
                                                
                                                                        <div className="ntr-Participant_Jockey">
                                                                            Z Purton
                                                                        </div>
                                                                    </div>
                                                
                                                                    <div className="ntr-Participant_Odds">
                                                                        2.30
                                                                    </div>
                                                                </div>
                                                
                                                                <div className="ntr-Participant">
                                                                    <div className="ntr-Participant_SilkAus"><img src="https://www.imagecache365.com/JockeySilksTransparent/aussilks/115054_8_5_512.png" className="ntr-Participant_Silk" /></div>
                                                
                                                                    <div className="ntr-ParticipantDetails">
                                                                        <div className="ntr-Participant_Horse">
                                                                            Sparkling Dragon
                                                                        </div>
                                                
                                                                        <div className="ntr-Participant_Jockey">
                                                                            M F Poon
                                                                        </div>
                                                                    </div>
                                                
                                                                    <div className="ntr-Participant_Odds">
                                                                        4.80
                                                                    </div>
                                                                </div>
                                                
                                                                <div className="ntr-Participant">
                                                                    <div className="ntr-Participant_SilkAus"><img src="https://www.imagecache365.com/JockeySilksTransparent/aussilks/115054_8_3_512.png" className="ntr-Participant_Silk" /></div>
                                                
                                                                    <div className="ntr-ParticipantDetails">
                                                                        <div className="ntr-Participant_Horse">
                                                                            Zero Hedge
                                                                        </div>
                                                
                                                                        <div className="ntr-Participant_Jockey">
                                                                            S Clipperton
                                                                        </div>
                                                                    </div>
                                                
                                                                    <div className="ntr-Participant_Odds">
                                                                        7.00
                                                                    </div>
                                                                </div>
                                                            </div>
                                                
                                                            <div className="ntr-Fixture_ViewAllButtonWrapper">
                                                                <div className="ntr-Fixture_ViewAllButton">
                                                                    View Full Race
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                        </div>
                                    </div>
                                    
                                    <div className="MarketGroup">
                                        <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_FIBA_World_Cup_Women" aria-expanded="false" aria-controls="collapse_FIBA_World_Cup_Women">Australia & New Zealand</div>
            
                                        <div className="Market-Cluster MarketRaceMeeting collapse show" id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                                <div className="DaySelectContainer">
                                                                    <div className="MarketContainerTab MarketContainerTab_Selected ">
                                                                                        <div className="MarketContainerTab_Title">Wednesday</div>
                                                                    </div>
                                                </div>
                                                <div className="RacingMarketGroupChild">                        
                                                        <div className="RaceMeeting">                                                        
                                                            <div className="MeetingHeader">
                                                                <div className="MeetingHeader_LeftContainer">
                                                                    <div className="MeetingHeader_RaceName">Harlow</div>
                                                                </div>                                            
                                                                <div className="MeetingHeader_RightContainer">
                                                                    <div className="MeetingHeader_Video">VIDEO</div>
                                                                </div>
                                                            </div>
                    
                                                            <div className="RaceMeetingCluster carousel-wrapper  owl-carousel owl-theme">
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">1</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">2</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">3</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">4</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">5</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">6</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">-15m 11s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">7</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">8
                                                                    </div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">14m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">9</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">29m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">10</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0h 46m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">11</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 1m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">12</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 16m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">13</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 30m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">14</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 49m</div>
                                                                </div>
                                                            </div>                                                    
                                                        </div>
                                                         <div className="RaceMeeting">                                                        
                                                            <div className="MeetingHeader">
                                                                <div className="MeetingHeader_LeftContainer">
                                                                    <div className="MeetingHeader_RaceName">Swindon</div>
                                                                </div>                                            
                                                                <div className="MeetingHeader_RightContainer">
                                                                </div>
                                                            </div>
                    
                                                            <div className="RaceMeetingCluster carousel-wrapper  owl-carousel owl-theme">
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">1</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">2</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">3</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">4</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">5</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">6</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">-15m 11s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">7</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">8
                                                                    </div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">14m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">9</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">29m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">10</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0h 46m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">11</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 1m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">12</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 16m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">13</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 30m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">14</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 49m</div>
                                                                </div>
                                                            </div>
                                                            <div className="RaceMeeting_FixedWinPriceAvailable">Early Prices Available</div>
                                                        </div>
                                                         <div className="RaceMeeting">                                                        
                                                            <div className="MeetingHeader">
                                                                <div className="MeetingHeader_LeftContainer">
                                                                    <div className="MeetingHeader_RaceName">Central Park</div>
                                                                </div>                                            
                                                                <div className="MeetingHeader_RightContainer">
                                                                    <div className="MeetingHeader_Video">VIDEO</div>
                                                                </div>
                                                            </div>
                    
                                                            <div className="RaceMeetingCluster carousel-wrapper  owl-carousel owl-theme">
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">1</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">2</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">3</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">4</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">5</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">6</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">-15m 11s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">7</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">8
                                                                    </div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">14m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">9</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">29m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">10</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0h 46m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">11</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 1m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">12</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 16m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">13</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 30m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">14</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 49m</div>
                                                                </div>
                                                            </div>
                                                            <div className="RaceMeeting_FixedWinPriceAvailable">Early Prices Available</div>
                                                        </div>
                                                         <div className="RaceMeeting">                                                        
                                                            <div className="MeetingHeader">
                                                                <div className="MeetingHeader_LeftContainer">
                                                                    <div className="MeetingHeader_RaceName">Newcastle</div>
                                                                </div>                                            
                                                                <div className="MeetingHeader_RightContainer">
                                                                    <div className="MeetingHeader_Video">VIDEO</div>
                                                                </div>
                                                            </div>
                    
                                                            <div className="RaceMeetingCluster carousel-wrapper  owl-carousel owl-theme">
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">1</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">2</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">3</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">4</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">5</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">6</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">-15m 11s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">7</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">8
                                                                    </div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">14m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">9</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">29m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">10</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0h 46m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">11</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 1m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">12</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 16m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">13</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 30m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">14</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 49m</div>
                                                                </div>
                                                            </div>
                                                            
                                                        </div>
                                                         <div className="RaceMeeting">                                                        
                                                            <div className="MeetingHeader">
                                                                <div className="MeetingHeader_LeftContainer">
                                                                    <div className="MeetingHeader_RaceName">Central Park</div>
                                                                </div>                                            
                                                                <div className="MeetingHeader_RightContainer">
                                                                    <div className="MeetingHeader_Video">VIDEO</div>
                                                                </div>
                                                            </div>
                    
                                                            <div className="RaceMeetingCluster carousel-wrapper  owl-carousel owl-theme">
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">1</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">2</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">3</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">4</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">5</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">6</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">-15m 11s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">7</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">8
                                                                    </div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">14m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">9</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">29m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">10</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0h 46m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">11</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 1m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">12</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 16m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">13</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 30m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">14</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 49m</div>
                                                                </div>
                                                            </div>
                                                            <div className="RaceMeeting_FixedWinPriceAvailable">Early Prices Available</div>
                                                        </div>
                                                         <div className="RaceMeeting">                                                        
                                                            <div className="MeetingHeader">
                                                                <div className="MeetingHeader_LeftContainer">
                                                                    <div className="MeetingHeader_RaceName">Central Park</div>
                                                                </div>                                            
                                                                <div className="MeetingHeader_RightContainer">
                                                                    <div className="MeetingHeader_Video">VIDEO</div>
                                                                </div>
                                                            </div>
                    
                                                            <div className="RaceMeetingCluster carousel-wrapper  owl-carousel owl-theme">
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">1</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">2</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">3</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">4</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">5</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">6</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">-15m 11s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">7</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">8
                                                                    </div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">14m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">9</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">29m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">10</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0h 46m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">11</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 1m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">12</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 16m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">13</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 30m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">14</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 49m</div>
                                                                </div>
                                                            </div>
                                                            <div className="RaceMeeting_FixedWinPriceAvailable">Early Prices Available</div>
                                                        </div>
                                                         <div className="RaceMeeting">                                                        
                                                            <div className="MeetingHeader">
                                                                <div className="MeetingHeader_LeftContainer">
                                                                    <div className="MeetingHeader_RaceName">Central Park</div>
                                                                </div>                                            
                                                                <div className="MeetingHeader_RightContainer">
                                                                    <div className="MeetingHeader_Video">VIDEO</div>
                                                                </div>
                                                            </div>
                    
                                                            <div className="RaceMeetingCluster carousel-wrapper  owl-carousel owl-theme">
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">1</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">2</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">3</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">4</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">5</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">6</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">-15m 11s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">7</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">8
                                                                    </div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">14m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">9</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">29m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">10</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0h 46m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">11</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 1m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">12</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 16m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">13</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 30m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">14</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 49m</div>
                                                                </div>
                                                            </div>
                                                            <div className="RaceMeeting_FixedWinPriceAvailable">Early Prices Available</div>
                                                        </div>
                                                         <div className="RaceMeeting">                                                        
                                                            <div className="MeetingHeader">
                                                                <div className="MeetingHeader_LeftContainer">
                                                                    <div className="MeetingHeader_RaceName">Central Park</div>
                                                                </div>                                            
                                                                <div className="MeetingHeader_RightContainer">
                                                                    <div className="MeetingHeader_Video">VIDEO</div>
                                                                </div>
                                                            </div>
                    
                                                            <div className="RaceMeetingCluster carousel-wrapper  owl-carousel owl-theme">
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">1</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">2</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">3</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">4</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">5</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">6</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">-15m 11s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">7</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">8
                                                                    </div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">14m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">9</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">29m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">10</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0h 46m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">11</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 1m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">12</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 16m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">13</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 30m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">14</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 49m</div>
                                                                </div>
                                                            </div>
                                                            <div className="RaceMeeting_FixedWinPriceAvailable">Early Prices Available</div>
                                                        </div>
                                                         <div className="RaceMeeting">                                                        
                                                            <div className="MeetingHeader">
                                                                <div className="MeetingHeader_LeftContainer">
                                                                    <div className="MeetingHeader_RaceName">Central Park</div>
                                                                </div>                                            
                                                                <div className="MeetingHeader_RightContainer">
                                                                    <div className="MeetingHeader_Video">VIDEO</div>
                                                                </div>
                                                            </div>
                    
                                                            <div className="RaceMeetingCluster carousel-wrapper  owl-carousel owl-theme">
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">1</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">2</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">3</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">4</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">5</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">6</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">-15m 11s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">7</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">8
                                                                    </div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">14m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">9</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">29m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">10</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0h 46m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">11</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 1m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">12</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 16m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">13</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 30m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">14</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 49m</div>
                                                                </div>
                                                            </div>
                                                            <div className="RaceMeeting_FixedWinPriceAvailable">Early Prices Available</div>
                                                        </div>
                                                </div>
                                        </div>
                                    </div>      
        
                                    <div className="MarketGroup">
                                        <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_FIBA_World_Cup_Women" aria-expanded="false" aria-controls="collapse_FIBA_World_Cup_Women">UK &amp; Ireland<div className="RacingMarketGroup_StatusInProgress ">Racing In Progress</div></div>
            
                                        <div className="Market-Cluster MarketRaceMeeting collapse show" id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                                <div className="DaySelectContainer">
                                                                    <div className="MarketContainerTab">
                                                                                        <div className="MarketContainerTab_Title">Friday</div>
                                                                    </div>
                                                                    <div className="MarketContainerTab  MarketContainerTab_Selected">
                                                                                        <div className="MarketContainerTab_Title">Wednesday</div>
                                                                    </div>
                                                </div>
                                                <div className="RacingMarketGroupChild">                        
                                                        <div className="RaceMeeting">                                                        
                                                            <div className="MeetingHeader">
                                                                <div className="MeetingHeader_LeftContainer">
                                                                    <div className="MeetingHeader_RaceName">Harlow</div>
                                                                </div>                                            
                                                                <div className="MeetingHeader_RightContainer">
                                                                    <div className="MeetingHeader_Video">VIDEO</div>
                                                                </div>
                                                            </div>
                    
                                                            <div className="RaceMeetingCluster carousel-wrapper  owl-carousel owl-theme">
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">1</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">2</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">3</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">4</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">5</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">6</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">-15m 11s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">7</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">8
                                                                    </div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">14m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">9</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">29m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">10</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0h 46m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">11</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 1m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">12</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 16m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">13</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 30m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">14</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 49m</div>
                                                                </div>
                                                            </div>                                                    
                                                        </div>
                                                         <div className="RaceMeeting">                                                        
                                                            <div className="MeetingHeader">
                                                                <div className="MeetingHeader_LeftContainer">
                                                                    <div className="MeetingHeader_RaceName">Swindon</div>
                                                                </div>                                            
                                                                <div className="MeetingHeader_RightContainer">
                                                                </div>
                                                            </div>
                    
                                                            <div className="RaceMeetingCluster carousel-wrapper  owl-carousel owl-theme">
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">1</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">2</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">3</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">4</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">5</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">6</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">-15m 11s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">7</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">8
                                                                    </div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">14m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">9</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">29m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">10</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0h 46m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">11</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 1m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">12</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 16m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">13</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 30m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">14</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 49m</div>
                                                                </div>
                                                            </div>
                                                            <div className="RaceMeeting_FixedWinPriceAvailable">Early Prices Available</div>
                                                        </div>
                                                         <div className="RaceMeeting">                                                        
                                                            <div className="MeetingHeader">
                                                                <div className="MeetingHeader_LeftContainer">
                                                                    <div className="MeetingHeader_RaceName">Central Park</div>
                                                                </div>                                            
                                                                <div className="MeetingHeader_RightContainer">
                                                                    <div className="MeetingHeader_Video">VIDEO</div>
                                                                </div>
                                                            </div>
                    
                                                            <div className="RaceMeetingCluster carousel-wrapper  owl-carousel owl-theme">
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">1</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">2</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">3</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">4</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">5</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">6</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">-15m 11s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">7</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">8
                                                                    </div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">14m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">9</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">29m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">10</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0h 46m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">11</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 1m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">12</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 16m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">13</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 30m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">14</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 49m</div>
                                                                </div>
                                                            </div>
                                                            <div className="RaceMeeting_FixedWinPriceAvailable">Early Prices Available</div>
                                                        </div>
                                                         <div className="RaceMeeting">                                                        
                                                            <div className="MeetingHeader">
                                                                <div className="MeetingHeader_LeftContainer">
                                                                    <div className="MeetingHeader_RaceName">Newcastle</div>
                                                                </div>                                            
                                                                <div className="MeetingHeader_RightContainer">
                                                                    <div className="MeetingHeader_Video">VIDEO</div>
                                                                </div>
                                                            </div>
                    
                                                            <div className="RaceMeetingCluster carousel-wrapper  owl-carousel owl-theme">
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">1</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">2</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">3</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">4</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">5</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">6</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">-15m 11s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">7</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">8
                                                                    </div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">14m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">9</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">29m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">10</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0h 46m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">11</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 1m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">12</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 16m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">13</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 30m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">14</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 49m</div>
                                                                </div>
                                                            </div>
                                                            
                                                        </div>
                                                         <div className="RaceMeeting">                                                        
                                                            <div className="MeetingHeader">
                                                                <div className="MeetingHeader_LeftContainer">
                                                                    <div className="MeetingHeader_RaceName">Central Park</div>
                                                                </div>                                            
                                                                <div className="MeetingHeader_RightContainer">
                                                                    <div className="MeetingHeader_Video">VIDEO</div>
                                                                </div>
                                                            </div>
                    
                                                            <div className="RaceMeetingCluster carousel-wrapper  owl-carousel owl-theme">
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">1</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">2</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">3</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">4</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">5</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">6</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">-15m 11s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">7</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">8
                                                                    </div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">14m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">9</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">29m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">10</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0h 46m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">11</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 1m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">12</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 16m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">13</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 30m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">14</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 49m</div>
                                                                </div>
                                                            </div>
                                                            <div className="RaceMeeting_FixedWinPriceAvailable">Early Prices Available</div>
                                                        </div>
                                                         <div className="RaceMeeting">                                                        
                                                            <div className="MeetingHeader">
                                                                <div className="MeetingHeader_LeftContainer">
                                                                    <div className="MeetingHeader_RaceName">Central Park</div>
                                                                </div>                                            
                                                                <div className="MeetingHeader_RightContainer">
                                                                    <div className="MeetingHeader_Video">VIDEO</div>
                                                                </div>
                                                            </div>
                    
                                                            <div className="RaceMeetingCluster carousel-wrapper  owl-carousel owl-theme">
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">1</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">2</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">3</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">4</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">5</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">6</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">-15m 11s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">7</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">8
                                                                    </div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">14m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">9</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">29m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">10</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0h 46m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">11</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 1m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">12</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 16m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">13</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 30m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">14</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 49m</div>
                                                                </div>
                                                            </div>
                                                            <div className="RaceMeeting_FixedWinPriceAvailable">Early Prices Available</div>
                                                        </div>
                                                         <div className="RaceMeeting">                                                        
                                                            <div className="MeetingHeader">
                                                                <div className="MeetingHeader_LeftContainer">
                                                                    <div className="MeetingHeader_RaceName">Central Park</div>
                                                                </div>                                            
                                                                <div className="MeetingHeader_RightContainer">
                                                                    <div className="MeetingHeader_Video">VIDEO</div>
                                                                </div>
                                                            </div>
                    
                                                            <div className="RaceMeetingCluster carousel-wrapper  owl-carousel owl-theme">
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">1</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">2</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">3</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">4</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">5</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">6</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">-15m 11s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">7</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">8
                                                                    </div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">14m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">9</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">29m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">10</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0h 46m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">11</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 1m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">12</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 16m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">13</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 30m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">14</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 49m</div>
                                                                </div>
                                                            </div>
                                                            <div className="RaceMeeting_FixedWinPriceAvailable">Early Prices Available</div>
                                                        </div>
                                                         <div className="RaceMeeting">                                                        
                                                            <div className="MeetingHeader">
                                                                <div className="MeetingHeader_LeftContainer">
                                                                    <div className="MeetingHeader_RaceName">Central Park</div>
                                                                </div>                                            
                                                                <div className="MeetingHeader_RightContainer">
                                                                    <div className="MeetingHeader_Video">VIDEO</div>
                                                                </div>
                                                            </div>
                    
                                                            <div className="RaceMeetingCluster carousel-wrapper  owl-carousel owl-theme">
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">1</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">2</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">3</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">4</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">5</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">6</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">-15m 11s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">7</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">8
                                                                    </div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">14m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">9</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">29m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">10</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0h 46m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">11</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 1m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">12</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 16m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">13</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 30m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">14</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 49m</div>
                                                                </div>
                                                            </div>
                                                            <div className="RaceMeeting_FixedWinPriceAvailable">Early Prices Available</div>
                                                        </div>
                                                         <div className="RaceMeeting">                                                        
                                                            <div className="MeetingHeader">
                                                                <div className="MeetingHeader_LeftContainer">
                                                                    <div className="MeetingHeader_RaceName">Central Park</div>
                                                                </div>                                            
                                                                <div className="MeetingHeader_RightContainer">
                                                                    <div className="MeetingHeader_Video">VIDEO</div>
                                                                </div>
                                                            </div>
                    
                                                            <div className="RaceMeetingCluster carousel-wrapper  owl-carousel owl-theme">
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">1</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">2</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">3</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">4</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">5</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">6</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">-15m 11s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">7</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">8
                                                                    </div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">14m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">9</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">29m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">10</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0h 46m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">11</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 1m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">12</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 16m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">13</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 30m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">14</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 49m</div>
                                                                </div>
                                                            </div>
                                                            <div className="RaceMeeting_FixedWinPriceAvailable">Early Prices Available</div>
                                                        </div>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="MarketGroup">
                                        <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_FIBA_World_Cup_Women" aria-expanded="false" aria-controls="collapse_FIBA_World_Cup_Women">Australia & New Zealand</div>
            
                                        <div className="Market-Cluster MarketRaceMeeting collapse show" id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                                <div className="DaySelectContainer">
                                                                    <div className="MarketContainerTab MarketContainerTab_Selected ">
                                                                                        <div className="MarketContainerTab_Title">Wednesday</div>
                                                                    </div>
                                                </div>
                                                <div className="RacingMarketGroupChild">                        
                                                        <div className="RaceMeeting">                                                        
                                                            <div className="MeetingHeader">
                                                                <div className="MeetingHeader_LeftContainer">
                                                                    <div className="MeetingHeader_RaceName">Harlow</div>
                                                                </div>                                            
                                                                <div className="MeetingHeader_RightContainer">
                                                                    <div className="MeetingHeader_Video">VIDEO</div>
                                                                </div>
                                                            </div>
                    
                                                            <div className="RaceMeetingCluster carousel-wrapper  owl-carousel owl-theme">
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">1</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">2</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">3</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">4</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">5</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">6</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">-15m 11s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">7</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">8
                                                                    </div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">14m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">9</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">29m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">10</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0h 46m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">11</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 1m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">12</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 16m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">13</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 30m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">14</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 49m</div>
                                                                </div>
                                                            </div>                                                    
                                                        </div>
                                                         <div className="RaceMeeting">                                                        
                                                            <div className="MeetingHeader">
                                                                <div className="MeetingHeader_LeftContainer">
                                                                    <div className="MeetingHeader_RaceName">Swindon</div>
                                                                </div>                                            
                                                                <div className="MeetingHeader_RightContainer">
                                                                </div>
                                                            </div>
                    
                                                            <div className="RaceMeetingCluster carousel-wrapper  owl-carousel owl-theme">
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">1</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">2</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">3</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">4</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">5</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">6</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">-15m 11s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">7</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">8
                                                                    </div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">14m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">9</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">29m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">10</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0h 46m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">11</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 1m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">12</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 16m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">13</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 30m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">14</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 49m</div>
                                                                </div>
                                                            </div>
                                                            <div className="RaceMeeting_FixedWinPriceAvailable">Early Prices Available</div>
                                                        </div>
                                                         <div className="RaceMeeting">                                                        
                                                            <div className="MeetingHeader">
                                                                <div className="MeetingHeader_LeftContainer">
                                                                    <div className="MeetingHeader_RaceName">Central Park</div>
                                                                </div>                                            
                                                                <div className="MeetingHeader_RightContainer">
                                                                    <div className="MeetingHeader_Video">VIDEO</div>
                                                                </div>
                                                            </div>
                    
                                                            <div className="RaceMeetingCluster carousel-wrapper  owl-carousel owl-theme">
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">1</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">2</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">3</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">4</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">5</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">6</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">-15m 11s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">7</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">8
                                                                    </div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">14m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">9</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">29m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">10</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0h 46m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">11</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 1m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">12</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 16m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">13</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 30m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">14</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 49m</div>
                                                                </div>
                                                            </div>
                                                            <div className="RaceMeeting_FixedWinPriceAvailable">Early Prices Available</div>
                                                        </div>
                                                         <div className="RaceMeeting">                                                        
                                                            <div className="MeetingHeader">
                                                                <div className="MeetingHeader_LeftContainer">
                                                                    <div className="MeetingHeader_RaceName">Newcastle</div>
                                                                </div>                                            
                                                                <div className="MeetingHeader_RightContainer">
                                                                    <div className="MeetingHeader_Video">VIDEO</div>
                                                                </div>
                                                            </div>
                    
                                                            <div className="RaceMeetingCluster carousel-wrapper  owl-carousel owl-theme">
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">1</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">2</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">3</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">4</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">5</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">6</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">-15m 11s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">7</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">8
                                                                    </div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">14m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">9</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">29m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">10</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0h 46m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">11</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 1m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">12</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 16m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">13</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 30m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">14</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 49m</div>
                                                                </div>
                                                            </div>
                                                            
                                                        </div>
                                                         <div className="RaceMeeting">                                                        
                                                            <div className="MeetingHeader">
                                                                <div className="MeetingHeader_LeftContainer">
                                                                    <div className="MeetingHeader_RaceName">Central Park</div>
                                                                </div>                                            
                                                                <div className="MeetingHeader_RightContainer">
                                                                    <div className="MeetingHeader_Video">VIDEO</div>
                                                                </div>
                                                            </div>
                    
                                                            <div className="RaceMeetingCluster carousel-wrapper  owl-carousel owl-theme">
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">1</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">2</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">3</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">4</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">5</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">6</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">-15m 11s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">7</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">8
                                                                    </div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">14m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">9</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">29m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">10</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0h 46m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">11</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 1m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">12</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 16m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">13</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 30m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">14</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 49m</div>
                                                                </div>
                                                            </div>
                                                            <div className="RaceMeeting_FixedWinPriceAvailable">Early Prices Available</div>
                                                        </div>
                                                         <div className="RaceMeeting">                                                        
                                                            <div className="MeetingHeader">
                                                                <div className="MeetingHeader_LeftContainer">
                                                                    <div className="MeetingHeader_RaceName">Central Park</div>
                                                                </div>                                            
                                                                <div className="MeetingHeader_RightContainer">
                                                                    <div className="MeetingHeader_Video">VIDEO</div>
                                                                </div>
                                                            </div>
                    
                                                            <div className="RaceMeetingCluster carousel-wrapper  owl-carousel owl-theme">
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">1</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">2</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">3</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">4</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">5</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">6</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">-15m 11s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">7</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">8
                                                                    </div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">14m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">9</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">29m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">10</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0h 46m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">11</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 1m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">12</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 16m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">13</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 30m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">14</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 49m</div>
                                                                </div>
                                                            </div>
                                                            <div className="RaceMeeting_FixedWinPriceAvailable">Early Prices Available</div>
                                                        </div>
                                                         <div className="RaceMeeting">                                                        
                                                            <div className="MeetingHeader">
                                                                <div className="MeetingHeader_LeftContainer">
                                                                    <div className="MeetingHeader_RaceName">Central Park</div>
                                                                </div>                                            
                                                                <div className="MeetingHeader_RightContainer">
                                                                    <div className="MeetingHeader_Video">VIDEO</div>
                                                                </div>
                                                            </div>
                    
                                                            <div className="RaceMeetingCluster carousel-wrapper  owl-carousel owl-theme">
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">1</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">2</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">3</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">4</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">5</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">6</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">-15m 11s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">7</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">8
                                                                    </div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">14m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">9</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">29m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">10</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0h 46m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">11</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 1m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">12</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 16m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">13</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 30m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">14</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 49m</div>
                                                                </div>
                                                            </div>
                                                            <div className="RaceMeeting_FixedWinPriceAvailable">Early Prices Available</div>
                                                        </div>
                                                         <div className="RaceMeeting">                                                        
                                                            <div className="MeetingHeader">
                                                                <div className="MeetingHeader_LeftContainer">
                                                                    <div className="MeetingHeader_RaceName">Central Park</div>
                                                                </div>                                            
                                                                <div className="MeetingHeader_RightContainer">
                                                                    <div className="MeetingHeader_Video">VIDEO</div>
                                                                </div>
                                                            </div>
                    
                                                            <div className="RaceMeetingCluster carousel-wrapper  owl-carousel owl-theme">
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">1</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">2</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">3</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">4</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">5</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">6</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">-15m 11s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">7</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">8
                                                                    </div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">14m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">9</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">29m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">10</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0h 46m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">11</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 1m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">12</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 16m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">13</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 30m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">14</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 49m</div>
                                                                </div>
                                                            </div>
                                                            <div className="RaceMeeting_FixedWinPriceAvailable">Early Prices Available</div>
                                                        </div>
                                                         <div className="RaceMeeting">                                                        
                                                            <div className="MeetingHeader">
                                                                <div className="MeetingHeader_LeftContainer">
                                                                    <div className="MeetingHeader_RaceName">Central Park</div>
                                                                </div>                                            
                                                                <div className="MeetingHeader_RightContainer">
                                                                    <div className="MeetingHeader_Video">VIDEO</div>
                                                                </div>
                                                            </div>
                    
                                                            <div className="RaceMeetingCluster carousel-wrapper  owl-carousel owl-theme">
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">1</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">2</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">3</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">4</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">5</div>
                                                                    <div className="Status">Result</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">6</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">-15m 11s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">7</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">8
                                                                    </div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">14m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">9</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">29m 48s</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">10</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">0h 46m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">11</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 1m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">12</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 16m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">13</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 30m</div>
                                                                </div>
                    
                                                                <div className="item RaceMeetingContainer">
                                                                    <div className="RaceName">14</div>
                                                                    <input type="checkbox" name="" />
                                                                    <div className="CountdownHighlighted">1h 49m</div>
                                                                </div>
                                                            </div>
                                                            <div className="RaceMeeting_FixedWinPriceAvailable">Early Prices Available</div>
                                                        </div>
                                                </div>
                                        </div>
                                    </div>                            
        
                                    <div className="MarketGroup">
                                        <div className="MarketGroup-GroupName" data-toggle="collapse" data-target="#collapse_FIBA_World_Cup_Women" aria-expanded="false" aria-controls="collapse_FIBA_World_Cup_Women">Antepost</div>
                                        <div className="MarketGroup collapse show" id="collapse_FIBA_World_Cup_Women" aria-expanded="true">
                                            <div className="Market">
                                                <div className="Market-Header" data-toggle="collapse" data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false" aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                                    <div className="Market-GroupName">Australia &amp; New Zealand</div>                            
                                                </div>
                                                <div className="Market-Cluster collapse show" id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                                    <div className="item"><label className="checkbox"><input type="checkbox" name="" />The Great Chase<span className="checkmark"></span></label></div>
                                                    <div className="item"><label className="checkbox"><input type="checkbox" name="" />Topgun<span className="checkmark"></span></label></div>
                                                    <div className="item"><label className="checkbox"><input type="checkbox" name="" />Stayers Topgun<span className="checkmark"></span></label></div>
                                                    <div className="item"><label className="checkbox"><input type="checkbox" name="" />Melbourne Cup<span className="checkmark"></span></label></div>
                                                </div>
                                            </div>
                                        </div>
                                    
                                        <div className="MarketGroup collapse show" id="collapse_FIBA_World_Cup_Women" aria-expanded="true">
                                            <div className="Market">
                                                <div className="Market-Header" data-toggle="collapse" data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false" aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                                    <div className="Market-GroupName">UK &amp; Ireland</div>                            
                                                </div>
                                                <div className="Market-Cluster collapse show" id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                                    <div className="item"><label className="checkbox"><input type="checkbox" name="" />All England Cup<span className="checkmark"></span></label></div>
                                                    <div className="item"><label className="checkbox"><input type="checkbox" name="" />Henlow Derby<span className="checkmark"></span></label></div>
                                                    <div className="item"><label className="checkbox"><input type="checkbox" name="" />British Breeders Stakes<span className="checkmark"></span></label></div>
                                                    <div className="item"><label className="checkbox"><input type="checkbox" name="" />2019 Greyhound Derby<span className="checkmark"></span></label></div>
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

export default Racing;
