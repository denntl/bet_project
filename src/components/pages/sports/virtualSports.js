import React from 'react';



class VirtualSports extends React.Component {
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
            <div id="page_virtualSports"  className="page">
                <div  className="header">
                    <div  className="title ClassificationName">Virtual Sports</div>
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
                                <div className="ScrollableHorizontalNavBar_ButtonContainer nav nav-tabs" id="myTab" role="tablist">
                                    <a href="#HorseRacing-panel" className="OddsOnCouponNavBarButton active" id="HorseRacing-tab" data-toggle="tab" role="tab">Horse Racing</a>
                                    <a href="#Greyhounds-panel" className="OddsOnCouponNavBarButton" id="Greyhounds-tab" data-toggle="tab" role="tab">Greyhounds</a>
                                    <a href="#Soccer-panel" className="OddsOnCouponNavBarButton" id="Soccer-tab" data-toggle="tab" role="tab">Soccer</a>
                                    <a href="#MotorRacing-panel" className="OddsOnCouponNavBarButton" id="MotorRacing-tab" data-toggle="tab" role="tab">Motor Racing</a>
                                    <a href="#Speedway-panel" className="OddsOnCouponNavBarButton" id="Speedway-tab" data-toggle="tab" role="tab">Speedway</a>
                                    <a href="#Cycling-panel" className="OddsOnCouponNavBarButton" id="Cycling-tab" data-toggle="tab" role="tab">Cycling</a>
                                    <a href="#Tennis-panel" className="OddsOnCouponNavBarButton" id="Tennis-tab" data-toggle="tab" role="tab">Tennis</a>
                                    <a href="#Trotting-panel" className="OddsOnCouponNavBarButton" id="Trotting-tab" data-toggle="tab" role="tab">Trotting</a>
                                </div>
                                
                                <div className="ContentRow tab-content clearfix">
                                    <section id="HorseRacing-panel" className="tab-pane fade show active" role="tabpanel">
                                        <div className="MarketGrid">
                                            <div className="VirtualRacingVideoPlayer">
                                                <div className="VirtualRacingMeetingsButtonContainer">
                                                    <div className="MeetingButton MeetingButton_Selected">Britannia Way</div>
                                                    <div className="MeetingButton">Festival Downs</div>
                                                    <div className="MeetingButton">Victoria Park</div>
                                                </div>
                                            
                                                <div className="VirtualRacingVideoPlayer_VideoWindow">
                                                    <div className="VirtualRacingVideoPlayer_Spinner"></div>
                                                    <div className="MediaPlayer VirtualRacingVideoPlayer_HiddenPlayer">
                                                        <div className="MediaPlayerCoreContainer">
                                                            <video width="100%" height="100%" src="blob:https://www.bet365.com/e8d0528a-0fd9-4fd5-868e-540709f91cf3" className="hls-HLSStreamingModule"></video>
                                                            <div className="PlayView">
                                                                <div className="PlayView_Wrapper">
                                                                    <div className="PlayView_Message">
                                                                        Live Streaming Available
                                                                    </div>
                                                                    <div className="PlayView_Button">
                                                                        <svg width="45" height="45" xmlns="http://www.w3.org/2000/svg"></svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="MarketGroup CouponVirtualsMarketGroup">
                                                <div className="MarketGroupButton CouponVirtualsMarketGroupButton">
                                                    <div className="CouponVirtualsMarketGroupButton_RaceInfo">
                                                        <div className="CouponVirtualsMarketGroupButton_RaceInfoText">13.30 Britannia Way</div>
                                                    </div>
                                                    <div className="VirtualRaceNavBar_ButtonContainer RacingNavScoller_ScrollContent">
                                                        <div className="VirtualRaceNavBarButton VirtualRaceNavBarButton_Selected">13:30</div>
                                                        <div className="VirtualRaceNavBarButton">13:33</div>
                                                        <div className="VirtualRaceNavBarButton">13:36</div>
                                                        <div className="VirtualRaceNavBarButton">13:39</div>
                                                        <div className="VirtualRaceNavBarButton">13:42</div>
                                                        <div className="VirtualRaceNavBarButton">13:45</div>
                                                    </div>
                                                </div>
                                            
                                                <div className="Market_General">
                                                    <div className="ParticipantVirtualHorse ParticipantVirtual">
                                                        <div className="ParticipantVirtualHorse_DrawWrapper">
                                                            <span className="ParticipantVirtualHorse_DrawNumber">1</span>
                                                        </div>
                                            
                                                        <div className="VirtualSilk_HorseVirtual"><img src="https://www.imagecache365.com/VRSilks/VRSilksTrans/SilkSmall_01.png" className="VirtualSilk_Image" /></div>
                                            
                                                        <div className="ParticipantVirtual_Name">
                                                            <span className="ParticipantVirtual_Identifier">The Outlaw</span><span className="ParticipantVirtualHorse_Jockey">Martin Buhmann</span>
                                                        </div>
                                            
                                                        <div className="ParticipantVirtualOddsOnly Participant_General">
                                                            <span className="ParticipantVirtualOddsOnly_Odds">29.00</span>
                                                        </div>
                                                    </div>
                                            
                                                    <div className="ParticipantVirtualHorse ParticipantVirtual">
                                                        <div className="ParticipantVirtualHorse_DrawWrapper">
                                                            <span className="ParticipantVirtualHorse_DrawNumber">2</span>
                                                        </div>
                                            
                                                        <div className="VirtualSilk_HorseVirtual"><img src="https://www.imagecache365.com/VRSilks/VRSilksTrans/SilkSmall_02.png" className="VirtualSilk_Image" /></div>
                                            
                                                        <div className="ParticipantVirtual_Name">
                                                            <span className="ParticipantVirtual_Identifier">Chile</span><span className="ParticipantVirtualHorse_Jockey">Stefano De Marchi</span>
                                                        </div>
                                            
                                                        <div className="ParticipantVirtualOddsOnly Participant_General">
                                                            <span className="ParticipantVirtualOddsOnly_Odds">12.00</span>
                                                        </div>
                                                    </div>
                                            
                                                    <div className="ParticipantVirtualHorse ParticipantVirtual">
                                                        <div className="ParticipantVirtualHorse_DrawWrapper">
                                                            <span className="ParticipantVirtualHorse_DrawNumber">3</span>
                                                        </div>
                                            
                                                        <div className="VirtualSilk_HorseVirtual"><img src="https://www.imagecache365.com/VRSilks/VRSilksTrans/SilkSmall_03.png" className="VirtualSilk_Image" /></div>
                                            
                                                        <div className="ParticipantVirtual_Name">
                                                            <span className="ParticipantVirtual_Identifier">Caraca</span><span className="ParticipantVirtualHorse_Jockey">Michael Floater</span>
                                                        </div>
                                            
                                                        <div className="ParticipantVirtualOddsOnly Participant_General">
                                                            <span className="ParticipantVirtualOddsOnly_Odds">8.00</span>
                                                        </div>
                                                    </div>
                                            
                                                    <div className="ParticipantVirtualHorse ParticipantVirtual">
                                                        <div className="ParticipantVirtualHorse_DrawWrapper">
                                                            <span className="ParticipantVirtualHorse_DrawNumber">4</span>
                                                        </div>
                                            
                                                        <div className="VirtualSilk_HorseVirtual"><img src="https://www.imagecache365.com/VRSilks/VRSilksTrans/SilkSmall_04.png" className="VirtualSilk_Image" /></div>
                                            
                                                        <div className="ParticipantVirtual_Name">
                                                            <span className="ParticipantVirtual_Identifier">Sagacious</span><span className="ParticipantVirtualHorse_Jockey">Sven Ehrich</span>
                                                        </div>
                                            
                                                        <div className="ParticipantVirtualOddsOnly Participant_General">
                                                            <span className="ParticipantVirtualOddsOnly_Odds">11.00</span>
                                                        </div>
                                                    </div>
                                            
                                                    <div className="ParticipantVirtualHorse ParticipantVirtual">
                                                        <div className="ParticipantVirtualHorse_DrawWrapper">
                                                            <span className="ParticipantVirtualHorse_DrawNumber">5</span>
                                                        </div>
                                            
                                                        <div className="VirtualSilk_HorseVirtual"><img src="https://www.imagecache365.com/VRSilks/VRSilksTrans/SilkSmall_05.png" className="VirtualSilk_Image" /></div>
                                            
                                                        <div className="ParticipantVirtual_Name">
                                                            <span className="ParticipantVirtual_Identifier">Sniffer</span><span className="ParticipantVirtualHorse_Jockey">Chris Heil</span>
                                                        </div>
                                            
                                                        <div className="ParticipantVirtualOddsOnly Participant_General">
                                                            <span className="ParticipantVirtualOddsOnly_Odds">4.50</span>
                                                        </div>
                                                    </div>
                                            
                                                    <div className="ParticipantVirtualHorse ParticipantVirtual">
                                                        <div className="ParticipantVirtualHorse_DrawWrapper">
                                                            <span className="ParticipantVirtualHorse_DrawNumber">6</span>
                                                        </div>
                                            
                                                        <div className="VirtualSilk_HorseVirtual"><img src="https://www.imagecache365.com/VRSilks/VRSilksTrans/SilkSmall_06.png" className="VirtualSilk_Image" /></div>
                                            
                                                        <div className="ParticipantVirtual_Name">
                                                            <span className="ParticipantVirtual_Identifier">Malakk</span><span className="ParticipantVirtualHorse_Jockey">Tim Hollingwood</span>
                                                        </div>
                                            
                                                        <div className="ParticipantVirtualOddsOnly Participant_General">
                                                            <span className="ParticipantVirtualOddsOnly_Odds">19.00</span>
                                                        </div>
                                                    </div>
                                            
                                                    <div className="ParticipantVirtualHorse ParticipantVirtual">
                                                        <div className="ParticipantVirtualHorse_DrawWrapper">
                                                            <span className="ParticipantVirtualHorse_DrawNumber">7</span>
                                                        </div>
                                            
                                                        <div className="VirtualSilk_HorseVirtual"><img src="https://www.imagecache365.com/VRSilks/VRSilksTrans/SilkSmall_07.png" className="VirtualSilk_Image" /></div>
                                            
                                                        <div className="ParticipantVirtual_Name">
                                                            <span className="ParticipantVirtual_Identifier">The Same Again</span><span className="ParticipantVirtualHorse_Jockey">Don Hong</span>
                                                        </div>
                                            
                                                        <div className="ParticipantVirtualOddsOnly Participant_General">
                                                            <span className="ParticipantVirtualOddsOnly_Odds">17.00</span>
                                                        </div>
                                                    </div>
                                            
                                                    <div className="ParticipantVirtualHorse ParticipantVirtual">
                                                        <div className="ParticipantVirtualHorse_DrawWrapper">
                                                            <span className="ParticipantVirtualHorse_DrawNumber">8</span>
                                                        </div>
                                            
                                                        <div className="VirtualSilk_HorseVirtual"><img src="https://www.imagecache365.com/VRSilks/VRSilksTrans/SilkSmall_08.png" className="VirtualSilk_Image" /></div>
                                            
                                                        <div className="ParticipantVirtual_Name">
                                                            <span className="ParticipantVirtual_Identifier">Quasimoto</span><span className="ParticipantVirtualHorse_Jockey">Alexander Stepanets</span>
                                                        </div>
                                            
                                                        <div className="ParticipantVirtualOddsOnly Participant_General">
                                                            <span className="ParticipantVirtualOddsOnly_Odds">9.00</span>
                                                        </div>
                                                    </div>
                                            
                                                    <div className="ParticipantVirtualHorse ParticipantVirtual">
                                                        <div className="ParticipantVirtualHorse_DrawWrapper">
                                                            <span className="ParticipantVirtualHorse_DrawNumber">9</span>
                                                        </div>
                                            
                                                        <div className="VirtualSilk_HorseVirtual"><img src="https://www.imagecache365.com/VRSilks/VRSilksTrans/SilkSmall_09.png" className="VirtualSilk_Image" /></div>
                                            
                                                        <div className="ParticipantVirtual_Name">
                                                            <span className="ParticipantVirtual_Identifier">Chubby Cejka</span><span className="ParticipantVirtualHorse_Jockey">Marcel de Bruin</span>
                                                        </div>
                                            
                                                        <div className="ParticipantVirtualOddsOnly Participant_General">
                                                            <span className="ParticipantVirtualOddsOnly_Odds">21.00</span>
                                                        </div>
                                                    </div>
                                            
                                                    <div className="ParticipantVirtualHorse ParticipantVirtual">
                                                        <div className="ParticipantVirtualHorse_DrawWrapper">
                                                            <span className="ParticipantVirtualHorse_DrawNumber">10</span>
                                                        </div>
                                            
                                                        <div className="VirtualSilk_HorseVirtual"><img src="https://www.imagecache365.com/VRSilks/VRSilksTrans/SilkSmall_10.png" className="VirtualSilk_Image" /></div>
                                            
                                                        <div className="ParticipantVirtual_Name">
                                                            <span className="ParticipantVirtual_Identifier">King Tubby</span><span className="ParticipantVirtualHorse_Jockey">Ward Cheney</span>
                                                        </div>
                                            
                                                        <div className="ParticipantVirtualOddsOnly Participant_General">
                                                            <span className="ParticipantVirtualOddsOnly_Odds">26.00</span>
                                                        </div>
                                                    </div>
                                            
                                                    <div className="ParticipantVirtualHorse ParticipantVirtual">
                                                        <div className="ParticipantVirtualHorse_DrawWrapper">
                                                            <span className="ParticipantVirtualHorse_DrawNumber">11</span>
                                                        </div>
                                            
                                                        <div className="VirtualSilk_HorseVirtual"><img src="https://www.imagecache365.com/VRSilks/VRSilksTrans/SilkSmall_11.png" className="VirtualSilk_Image" /></div>
                                            
                                                        <div className="ParticipantVirtual_Name">
                                                            <span className="ParticipantVirtual_Identifier">Burger Queen</span><span className="ParticipantVirtualHorse_Jockey">Anatoly Golub</span>
                                                        </div>
                                            
                                                        <div className="ParticipantVirtualOddsOnly Participant_General">
                                                            <span className="ParticipantVirtualOddsOnly_Odds">15.00</span>
                                                        </div>
                                                    </div>
                                            
                                                    <div className="ParticipantVirtualHorse ParticipantVirtual">
                                                        <div className="ParticipantVirtualHorse_DrawWrapper">
                                                            <span className="ParticipantVirtualHorse_DrawNumber">12</span>
                                                        </div>
                                            
                                                        <div className="VirtualSilk_HorseVirtual"><img src="https://www.imagecache365.com/VRSilks/VRSilksTrans/SilkSmall_12.png" className="VirtualSilk_Image" /></div>
                                            
                                                        <div className="ParticipantVirtual_Name">
                                                            <span className="ParticipantVirtual_Identifier">Party People</span><span className="ParticipantVirtualHorse_Jockey">Zeev Ditzian</span>
                                                        </div>
                                            
                                                        <div className="ParticipantVirtualOddsOnly Participant_General">
                                                            <span className="ParticipantVirtualOddsOnly_Odds">81.00</span>
                                                        </div>
                                                    </div>
                                            
                                                    <div className="ParticipantVirtualHorse ParticipantVirtual">
                                                        <div className="ParticipantVirtualHorse_DrawWrapper">
                                                            <span className="ParticipantVirtualHorse_DrawNumber">13</span>
                                                        </div>
                                            
                                                        <div className="VirtualSilk_HorseVirtual"><img src="https://www.imagecache365.com/VRSilks/VRSilksTrans/SilkSmall_13.png" className="VirtualSilk_Image" /></div>
                                            
                                                        <div className="ParticipantVirtual_Name">
                                                            <span className="ParticipantVirtual_Identifier">The New Shmoo</span><span className="ParticipantVirtualHorse_Jockey">Kieran Tyler</span>
                                                        </div>
                                            
                                                        <div className="ParticipantVirtualOddsOnly Participant_General">
                                                            <span className="ParticipantVirtualOddsOnly_Odds">5.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="CouponCastMarketGroup">
                                                <div className="MarketGroupButton CouponRacingMarketGroupButton CouponCastMarketGroup_Open">
                                                    <div className="CouponRacingMarketGroupButton_RaceInfo">
                                                        <div className="CouponRacingMarketGroupButton_RaceInfoText">Forecast / Tricast</div>
                                                        <div className="CouponRacingMarketGroupButton_Raceoff Hidden">RACE OFF</div>
                                                    </div>
                                                </div>
                                            
                                                <div className="MarketGroup_Wrapper">
                                                    <div className="MarketGroupContainer CouponCastMarketGroupContainer">
                                                        <div className="MarketRacingCastRunner Market Market_General">
                                                            <div className="MarketColumnHeader MarketColumnHeaderCast">
                                                                <div className="MarketColumnHeaderCast_Text"></div>
                                                            </div>
                                            
                                                            <div className="RacingCastRunnerParticipant">
                                                                <span className="RacingCastRunnerParticipant_Number">1</span> <span className="RacingCastRunnerParticipant_Name">Gamezone</span>
                                                            </div>
                                            
                                                            <div className="RacingCastRunnerParticipant">
                                                                <span className="RacingCastRunnerParticipant_Number">2</span> <span className="RacingCastRunnerParticipant_Name">Zulu Warrior</span>
                                                            </div>
                                            
                                                            <div className="RacingCastRunnerParticipant">
                                                                <span className="RacingCastRunnerParticipant_Number">3</span> <span className="RacingCastRunnerParticipant_Name">Declined</span>
                                                            </div>
                                            
                                                            <div className="RacingCastRunnerParticipant">
                                                                <span className="RacingCastRunnerParticipant_Number">4</span> <span className="RacingCastRunnerParticipant_Name">Eyes Wide Shut</span>
                                                            </div>
                                            
                                                            <div className="RacingCastRunnerParticipant">
                                                                <span className="RacingCastRunnerParticipant_Number">5</span> <span className="RacingCastRunnerParticipant_Name">The Spaniard</span>
                                                            </div>
                                            
                                                            <div className="RacingCastRunnerParticipant">
                                                                <span className="RacingCastRunnerParticipant_Number">6</span> <span className="RacingCastRunnerParticipant_Name">No Limits</span>
                                                            </div>
                                            
                                                            <div className="RacingCastRunnerParticipant">
                                                                <span className="RacingCastRunnerParticipant_Number">7</span> <span className="RacingCastRunnerParticipant_Name">Ravanelli</span>
                                                            </div>
                                            
                                                            <div className="RacingCastRunnerParticipant">
                                                                <span className="RacingCastRunnerParticipant_Number">8</span> <span className="RacingCastRunnerParticipant_Name">Sack Race</span>
                                                            </div>
                                            
                                                            <div className="RacingCastRunnerParticipant">
                                                                <span className="RacingCastRunnerParticipant_Number">9</span> <span className="RacingCastRunnerParticipant_Name">Bonus Ball</span>
                                                            </div>
                                            
                                                            <div className="RacingCastRunnerParticipant">
                                                                <span className="RacingCastRunnerParticipant_Number">10</span> <span className="RacingCastRunnerParticipant_Name">Sugar Cube</span>
                                                            </div>
                                            
                                                            <div className="RacingCastRunnerParticipant">
                                                                <span className="RacingCastRunnerParticipant_Number">11</span> <span className="RacingCastRunnerParticipant_Name">The Thief</span>
                                                            </div>
                                            
                                                            <div className="RacingCastRunnerParticipant">
                                                                <span className="RacingCastRunnerParticipant_Number">12</span> <span className="RacingCastRunnerParticipant_Name">Firewater</span>
                                                            </div>
                                            
                                                            <div className="RacingCastRunnerParticipant">
                                                                <span className="RacingCastRunnerParticipant_Number">13</span> <span className="RacingCastRunnerParticipant_Name">Tea Boat</span>
                                                            </div>
                                            
                                                            <div className="RacingCastRunnerParticipant">
                                                                <span className="RacingCastRunnerParticipant_Number">14</span> <span className="RacingCastRunnerParticipant_Name">Tuck It Up</span>
                                                            </div>
                                            
                                                            <div className="RacingCastRunnerParticipant">
                                                                <span className="RacingCastRunnerParticipant_Number">15</span> <span className="RacingCastRunnerParticipant_Name">Good To Soft</span>
                                                            </div>
                                                        </div>
                                            
                                                        <div className="MarketRacingCast Market Market_General MarketRacingCast_ColSpan3 Market_PWidth-10">
                                                            <div className="MarketColumnHeader MarketColumnHeaderCast">
                                                                <div className="MarketColumnHeaderCast_Text">
                                                                    Forecast
                                                                </div>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">1st</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">1st</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">1st</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">1st</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">1st</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">1st</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">1st</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">1st</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">1st</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">1st</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">1st</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">1st</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">1st</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">1st</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">1st</span>
                                                            </div>
                                                        </div>
                                            
                                                        <div className="MarketRacingCast Market Market_General Market_PWidth-10">
                                                            <div className="MarketColumnHeader MarketColumnHeaderCast">
                                                                <div className="MarketColumnHeaderCast_Text"></div>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">2nd</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">2nd</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">2nd</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">2nd</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">2nd</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">2nd</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">2nd</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">2nd</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">2nd</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">2nd</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">2nd</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">2nd</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">2nd</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">2nd</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">2nd</span>
                                                            </div>
                                                        </div>
                                            
                                                        <div className="MarketRacingCast MarketRacingCastAny MarketRacingCast-groupend Market Market_General Market_PWidth-10">
                                                            <div className="MarketColumnHeader MarketColumnHeaderCast">
                                                                <div className="MarketColumnHeaderCast_Text"></div>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">Any</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">Any</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">Any</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">Any</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">Any</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">Any</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">Any</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">Any</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">Any</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">Any</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">Any</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">Any</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">Any</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">Any</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">Any</span>
                                                            </div>
                                                        </div>
                                            
                                                        <div className="MarketRacingCast Market Market_General MarketRacingCast_ColSpan4 Market_PWidth-10">
                                                            <div className="MarketColumnHeader MarketColumnHeaderCast">
                                                                <div className="MarketColumnHeaderCast_Text">
                                                                    Tricast
                                                                </div>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">1st</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">1st</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">1st</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">1st</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">1st</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">1st</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">1st</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">1st</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">1st</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">1st</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">1st</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">1st</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">1st</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">1st</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">1st</span>
                                                            </div>
                                                        </div>
                                            
                                                        <div className="MarketRacingCast Market Market_General Market_PWidth-10">
                                                            <div className="MarketColumnHeader MarketColumnHeaderCast">
                                                                <div className="MarketColumnHeaderCast_Text"></div>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">2nd</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">2nd</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">2nd</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">2nd</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">2nd</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">2nd</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">2nd</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">2nd</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">2nd</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">2nd</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">2nd</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">2nd</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">2nd</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">2nd</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">2nd</span>
                                                            </div>
                                                        </div>
                                            
                                                        <div className="MarketRacingCast Market Market_General Market_PWidth-10">
                                                            <div className="MarketColumnHeader MarketColumnHeaderCast">
                                                                <div className="MarketColumnHeaderCast_Text"></div>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">3rd</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">3rd</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">3rd</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">3rd</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">3rd</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">3rd</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">3rd</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">3rd</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">3rd</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">3rd</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">3rd</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">3rd</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">3rd</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">3rd</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">3rd</span>
                                                            </div>
                                                        </div>
                                            
                                                        <div className="MarketRacingCast MarketRacingCastAny MarketRacingCast-groupend Market Market_General Market_PWidth-10">
                                                            <div className="MarketColumnHeader MarketColumnHeaderCast">
                                                                <div className="MarketColumnHeaderCast_Text"></div>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">Any</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">Any</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">Any</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">Any</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">Any</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">Any</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">Any</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">Any</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">Any</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">Any</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">Any</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">Any</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">Any</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">Any</span>
                                                            </div>
                                            
                                                            <div className="RacingCastOrderParticipant">
                                                                <span className="RacingCastOrderParticipant_Text">Any</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            
                                                <div className="CouponCastFooter">
                                                    <div className="CouponCastFooter_Invalid">
                                                        <span className="CouponCastFooter_InvalidMessage">These selections are not valid</span>
                                                    </div>
                                            
                                                    <div className="CouponCastFooter_Footer">
                                                        <div className="CouponCastFooter_Addtoslip">Add to Bet Slip</div>
                                                        <div className="CouponCastFooter_Clear">Clear</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>                                    
                                    <section id="Greyhounds-panel" className="tab-pane fade" role="tabpanel">
                                        <div className="MarketGrid">                                            <div className="VirtualRacingVideoPlayer">
                                                <div className="VirtualRacingMeetingsButtonContainer">
                                                    <div className="MeetingButton MeetingButton_Selected">Britannia Way</div>
                                                    <div className="MeetingButton">Festival Downs</div>
                                                    <div className="MeetingButton">Victoria Park</div>
                                                </div>
                                            
                                                <div className="VirtualRacingVideoPlayer_VideoWindow">
                                                    <div className="VirtualRacingVideoPlayer_Spinner"></div>
                                                    <div className="MediaPlayer VirtualRacingVideoPlayer_HiddenPlayer">
                                                        <div className="MediaPlayerCoreContainer">
                                                            <video width="100%" height="100%" src="blob:https://www.bet365.com/e8d0528a-0fd9-4fd5-868e-540709f91cf3" className="hls-HLSStreamingModule"></video>
                                                            <div className="PlayView">
                                                                <div className="PlayView_Wrapper">
                                                                    <div className="PlayView_Message">
                                                                        Live Streaming Available
                                                                    </div>
                                                                    <div className="PlayView_Button">
                                                                        <svg width="45" height="45" xmlns="http://www.w3.org/2000/svg"></svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="MarketGroup CouponVirtualsMarketGroup">
                                            <div className="BettingSuspendedScreen "><div className="BettingSuspendedScreen_Message ">Sorry, this page is no longer available. Betting has closed or has been suspended.</div></div>
                                            </div>
                                        </div>
                                    </section>                                    
                                    <section id="Soccer-panel" className="tab-pane fade" role="tabpanel">
                                        <div className="MarketGrid">
                                                                                        <div className="VirtualRacingVideoPlayer">
                                                <div className="VirtualRacingMeetingsButtonContainer">
                                                    <div className="MeetingButton MeetingButton_Selected">Britannia Way</div>
                                                    <div className="MeetingButton">Festival Downs</div>
                                                    <div className="MeetingButton">Victoria Park</div>
                                                </div>
                                            
                                                <div className="VirtualRacingVideoPlayer_VideoWindow">
                                                    <div className="VirtualRacingVideoPlayer_Spinner"></div>
                                                    <div className="MediaPlayer VirtualRacingVideoPlayer_HiddenPlayer">
                                                        <div className="MediaPlayerCoreContainer">
                                                            <video width="100%" height="100%" src="blob:https://www.bet365.com/e8d0528a-0fd9-4fd5-868e-540709f91cf3" className="hls-HLSStreamingModule"></video>
                                                            <div className="PlayView">
                                                                <div className="PlayView_Wrapper">
                                                                    <div className="PlayView_Message">
                                                                        Live Streaming Available
                                                                    </div>
                                                                    <div className="PlayView_Button">
                                                                        <svg width="45" height="45" xmlns="http://www.w3.org/2000/svg"></svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="MarketGroup CouponVirtualsMarketGroup">
                                            <div className="BettingSuspendedScreen "><div className="BettingSuspendedScreen_Message ">Sorry, this page is no longer available. Betting has closed or has been suspended.</div></div>
                                            </div>
                                        </div>
                                    </section>                                    
                                    <section id="MotorRacing-panel" className="tab-pane fade" role="tabpanel">
                                        <div className="MarketGrid">
                                                                                        <div className="VirtualRacingVideoPlayer">
                                                <div className="VirtualRacingMeetingsButtonContainer">
                                                    <div className="MeetingButton MeetingButton_Selected">Britannia Way</div>
                                                    <div className="MeetingButton">Festival Downs</div>
                                                    <div className="MeetingButton">Victoria Park</div>
                                                </div>
                                            
                                                <div className="VirtualRacingVideoPlayer_VideoWindow">
                                                    <div className="VirtualRacingVideoPlayer_Spinner"></div>
                                                    <div className="MediaPlayer VirtualRacingVideoPlayer_HiddenPlayer">
                                                        <div className="MediaPlayerCoreContainer">
                                                            <video width="100%" height="100%" src="blob:https://www.bet365.com/e8d0528a-0fd9-4fd5-868e-540709f91cf3" className="hls-HLSStreamingModule"></video>
                                                            <div className="PlayView">
                                                                <div className="PlayView_Wrapper">
                                                                    <div className="PlayView_Message">
                                                                        Live Streaming Available
                                                                    </div>
                                                                    <div className="PlayView_Button">
                                                                        <svg width="45" height="45" xmlns="http://www.w3.org/2000/svg"></svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="MarketGroup CouponVirtualsMarketGroup">
                                            <div className="BettingSuspendedScreen "><div className="BettingSuspendedScreen_Message ">Sorry, this page is no longer available. Betting has closed or has been suspended.</div></div>
                                            </div>
                                        </div>
                                    </section>                                    
                                    <section id="Speedway-panel" className="tab-pane fade" role="tabpanel">
                                        <div className="MarketGrid">
                                                                                        <div className="VirtualRacingVideoPlayer">
                                                <div className="VirtualRacingMeetingsButtonContainer">
                                                    <div className="MeetingButton MeetingButton_Selected">Britannia Way</div>
                                                    <div className="MeetingButton">Festival Downs</div>
                                                    <div className="MeetingButton">Victoria Park</div>
                                                </div>
                                            
                                                <div className="VirtualRacingVideoPlayer_VideoWindow">
                                                    <div className="VirtualRacingVideoPlayer_Spinner"></div>
                                                    <div className="MediaPlayer VirtualRacingVideoPlayer_HiddenPlayer">
                                                        <div className="MediaPlayerCoreContainer">
                                                            <video width="100%" height="100%" src="blob:https://www.bet365.com/e8d0528a-0fd9-4fd5-868e-540709f91cf3" className="hls-HLSStreamingModule"></video>
                                                            <div className="PlayView">
                                                                <div className="PlayView_Wrapper">
                                                                    <div className="PlayView_Message">
                                                                        Live Streaming Available
                                                                    </div>
                                                                    <div className="PlayView_Button">
                                                                        <svg width="45" height="45" xmlns="http://www.w3.org/2000/svg"></svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="MarketGroup CouponVirtualsMarketGroup">
                                            <div className="BettingSuspendedScreen "><div className="BettingSuspendedScreen_Message ">Sorry, this page is no longer available. Betting has closed or has been suspended.</div></div>
                                            </div>
                                        </div>
                                    </section>                                    
                                    <section id="Cycling-panel" className="tab-pane fade" role="tabpanel">
                                        <div className="MarketGrid">
                                                                                        <div className="VirtualRacingVideoPlayer">
                                                <div className="VirtualRacingMeetingsButtonContainer">
                                                    <div className="MeetingButton MeetingButton_Selected">Britannia Way</div>
                                                    <div className="MeetingButton">Festival Downs</div>
                                                    <div className="MeetingButton">Victoria Park</div>
                                                </div>
                                            
                                                <div className="VirtualRacingVideoPlayer_VideoWindow">
                                                    <div className="VirtualRacingVideoPlayer_Spinner"></div>
                                                    <div className="MediaPlayer VirtualRacingVideoPlayer_HiddenPlayer">
                                                        <div className="MediaPlayerCoreContainer">
                                                            <video width="100%" height="100%" src="blob:https://www.bet365.com/e8d0528a-0fd9-4fd5-868e-540709f91cf3" className="hls-HLSStreamingModule"></video>
                                                            <div className="PlayView">
                                                                <div className="PlayView_Wrapper">
                                                                    <div className="PlayView_Message">
                                                                        Live Streaming Available
                                                                    </div>
                                                                    <div className="PlayView_Button">
                                                                        <svg width="45" height="45" xmlns="http://www.w3.org/2000/svg"></svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="MarketGroup CouponVirtualsMarketGroup">
                                            <div className="BettingSuspendedScreen "><div className="BettingSuspendedScreen_Message ">Sorry, this page is no longer available. Betting has closed or has been suspended.</div></div>
                                            </div>
                                        </div>
                                    </section>                                    
                                    <section id="Tennis-panel" className="tab-pane fade" role="tabpanel">
                                        <div className="MarketGrid">
                                                                                        <div className="VirtualRacingVideoPlayer">
                                                <div className="VirtualRacingMeetingsButtonContainer">
                                                    <div className="MeetingButton MeetingButton_Selected">Britannia Way</div>
                                                    <div className="MeetingButton">Festival Downs</div>
                                                    <div className="MeetingButton">Victoria Park</div>
                                                </div>
                                            
                                                <div className="VirtualRacingVideoPlayer_VideoWindow">
                                                    <div className="VirtualRacingVideoPlayer_Spinner"></div>
                                                    <div className="MediaPlayer VirtualRacingVideoPlayer_HiddenPlayer">
                                                        <div className="MediaPlayerCoreContainer">
                                                            <video width="100%" height="100%" src="blob:https://www.bet365.com/e8d0528a-0fd9-4fd5-868e-540709f91cf3" className="hls-HLSStreamingModule"></video>
                                                            <div className="PlayView">
                                                                <div className="PlayView_Wrapper">
                                                                    <div className="PlayView_Message">
                                                                        Live Streaming Available
                                                                    </div>
                                                                    <div className="PlayView_Button">
                                                                        <svg width="45" height="45" xmlns="http://www.w3.org/2000/svg"></svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="MarketGroup CouponVirtualsMarketGroup">
                                            <div className="BettingSuspendedScreen "><div className="BettingSuspendedScreen_Message ">Sorry, this page is no longer available. Betting has closed or has been suspended.</div></div>
                                            </div>
                                        </div>
                                    </section>                                    
                                    <section id="Trotting-panel" className="tab-pane fade" role="tabpanel">
                                        <div className="MarketGrid">                                            <div className="VirtualRacingVideoPlayer">
                                                <div className="VirtualRacingMeetingsButtonContainer">
                                                    <div className="MeetingButton MeetingButton_Selected">Britannia Way</div>
                                                    <div className="MeetingButton">Festival Downs</div>
                                                    <div className="MeetingButton">Victoria Park</div>
                                                </div>
                                            
                                                <div className="VirtualRacingVideoPlayer_VideoWindow">
                                                    <div className="VirtualRacingVideoPlayer_Spinner"></div>
                                                    <div className="MediaPlayer VirtualRacingVideoPlayer_HiddenPlayer">
                                                        <div className="MediaPlayerCoreContainer">
                                                            <video width="100%" height="100%" src="blob:https://www.bet365.com/e8d0528a-0fd9-4fd5-868e-540709f91cf3" className="hls-HLSStreamingModule"></video>
                                                            <div className="PlayView">
                                                                <div className="PlayView_Wrapper">
                                                                    <div className="PlayView_Message">
                                                                        Live Streaming Available
                                                                    </div>
                                                                    <div className="PlayView_Button">
                                                                        <svg width="45" height="45" xmlns="http://www.w3.org/2000/svg"></svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="MarketGroup CouponVirtualsMarketGroup">
                                            <div className="BettingSuspendedScreen "><div className="BettingSuspendedScreen_Message ">Sorry, this page is no longer available. Betting has closed or has been suspended.</div></div>
                                            </div>
                                        </div>
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

export default VirtualSports;
