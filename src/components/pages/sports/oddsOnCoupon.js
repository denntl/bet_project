import React from 'react';



class OddsOnCoupon extends React.Component {
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
            <div id="page_oddcoupon" className="page">
                <div className="header">
                    <div class="CreateCouponContainer ">
                        <div class="CreateCouponTab ">
                            <div class="CreateCouponTab_Count ">0</div>
                            <div class="CreateCouponTab_Selections ">Selections</div>
                            <div class="CreateCouponTab_Button ">Create Coupon</div>
                        </div>
                    </div>
                    <div className="title ClassificationName">Odds On Coupon</div>
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
                                <div className="ScrollableHorizontalNavBar_ButtonContainer nav nav-tabs" role="tablist">
                                    <a href="#Soccer-panel" className="OddsOnCouponNavBarButton active" id="Soccer-tab" data-toggle="tab" role="tab">Soccer</a>
                                    <a href="#Tennis-panel" className="OddsOnCouponNavBarButton" id="Tennis-tab" data-toggle="tab" role="tab">Tennis</a>
                                    <a href="#AmericanFootball-panel" className="OddsOnCouponNavBarButton" id="AmericanFootball-tab" data-toggle="tab" role="tab">American Football</a>
                                    <a href="#Basketball-panel" className="OddsOnCouponNavBarButton" id="Basketball-tab" data-toggle="tab" role="tab">Basketball</a>
                                    <a href="#Darts-panel" className="OddsOnCouponNavBarButton" id="Darts-tab" data-toggle="tab" role="tab">Darts</a>
                                    <a href="#Handball-panel" className="OddsOnCouponNavBarButton" id="Handball-tab" data-toggle="tab" role="tab">Handball</a>
                                    <a href="#IceHockey-panel" className="OddsOnCouponNavBarButton" id="IceHockey-tab" data-toggle="tab" role="tab">Ice Hockey</a>
                                    <a href="#RugbyUnion-panel" className="OddsOnCouponNavBarButton" id="RugbyUnion-tab" data-toggle="tab" role="tab">Rugby Union</a>
                                    <a href="#Snooker-panel" className="OddsOnCouponNavBarButton" id="Snooker-tab" data-toggle="tab" role="tab">Snooker</a>
                                    <a href="#Volleyball-panel" className="OddsOnCouponNavBarButton" id="Volleyball-tab" data-toggle="tab" role="tab">Volleyball</a>
                                </div>
                                
                                <div className="ContentRow tab-content clearfix">
                                    <section id="Soccer-panel" className="tab-pane fade show active" role="tabpanel">
                                            <div className="FilterClassificationHeader">
                                                <div className="FilterClassificationHeader_Title">Soccer</div>                                        
                                                <div className="FilterClassificationHeader_TimeDropDown">
                                                    <span className="TimeDropDown">Next 3 hours</span>
                                                </div>                                        
                                                <div className="FilterClassificationHeader_Sort">
                                                    <div className="FilterClassificationHeader_SortLabel">Sort by</div>                                        
                                                    <div className="SortButtons">
                                                        <div className="SortButtons_Button SortButtons_Selected">Date</div>                                        
                                                        <div className="SortButtons_Button">Price</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="OddsOnGrid">
                                                <div className="OddsOnColumn OddsOnColumn_W5 OddsOnColumn_Date">
                                                    <div className="OddsOnColumnHeader"></div>
                                            
                                                    <div className="OddsOnParticipantDate">
                                                        <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">14:00</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantDate">
                                                        <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">14:00</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantDate">
                                                        <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">14:00</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantDate">
                                                        <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">14:00</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantDate">
                                                        <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">14:05</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantDate">
                                                        <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">14:30</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantDate">
                                                        <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">15:20</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantDate">
                                                        <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">15:20</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantDate">
                                                        <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">15:30</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantDate">
                                                        <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">15:30</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantDate">
                                                        <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">15:30</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantDate">
                                                        <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">15:40</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantDate">
                                                        <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">15:40</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantDate">
                                                        <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">15:45</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantDate">
                                                        <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">15:45</span>
                                                    </div>
                                                </div>
                                            
                                                <div className="OddsOnColumn OddsOnColumn_W5 OddsOnColumn_Fixture">
                                                    <div className="OddsOnColumnHeader"></div>
                                            
                                                    <div className="OddsOnParticipantFixture">
                                                        <span className="OddsOnParticipantFixture_Teams">Acassuso Reserves v CA Atlanta Reserves</span><span className="OddsOnParticipantFixture_Competition">Argentina Reserve League</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantFixture">
                                                        <span className="OddsOnParticipantFixture_Teams">Baladiyet El Mahallah v MS Tla</span><span className="OddsOnParticipantFixture_Competition">Egypt Division 2</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantFixture">
                                                        <span className="OddsOnParticipantFixture_Teams" >Ferencvarosi Women v Viktória FC-Szombathely Women</span><span className="OddsOnParticipantFixture_Competition" >Hungary NBI Women</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantFixture">
                                                        <span className="OddsOnParticipantFixture_Teams">Venus Maramures Women v Independenta Baia Mare Women</span><span className="OddsOnParticipantFixture_Competition">Romania Cup Women</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantFixture">
                                                        <div className="OddsOnParticipantFixture_Icons">
                                                            <div className="OddsOnParticipantFixture_IconsVideoAvailable OddsOnParticipantFixture_IconsGeneric"></div>
                                                        </div><span className="OddsOnParticipantFixture_Teams">Al Dhafra SCC v Emirates Club RAK</span><span className="OddsOnParticipantFixture_Competition">UAE Premier League</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantFixture">
                                                        <span className="OddsOnParticipantFixture_Teams">Aizawl FC v Bethlehem VT FC</span><span className="OddsOnParticipantFixture_Competition">India Mizoram Premier League</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantFixture">
                                                        <span className="OddsOnParticipantFixture_Teams">Al-Shahaniya SC v Umm Salal</span><span className="OddsOnParticipantFixture_Competition">Qatar Stars League</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantFixture">
                                                        <span className="OddsOnParticipantFixture_Teams">Al Duhail v Al-Kharitiyath SC</span><span className="OddsOnParticipantFixture_Competition">Qatar Stars League</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantFixture">
                                                        <span className="OddsOnParticipantFixture_Teams">Al-Muharraq v Budaiya</span><span className="OddsOnParticipantFixture_Competition">Bahrain Kings Cup</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantFixture">
                                                        <span className="OddsOnParticipantFixture_Teams">Al-Riffa v Busaiteen</span><span className="OddsOnParticipantFixture_Competition">Bahrain Kings Cup</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantFixture">
                                                        <span className="OddsOnParticipantFixture_Teams">Maccabi Herzliya v Hapoel Kfar Shalem</span><span className="OddsOnParticipantFixture_Competition">Israel Liga Alef South</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantFixture">
                                                        <span className="OddsOnParticipantFixture_Teams">Al Ittifaq Dammam v Al Hazm</span><span className="OddsOnParticipantFixture_Competition">Saudi Arabia Premier League</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantFixture">
                                                        <span className="OddsOnParticipantFixture_Teams">Al Salmiyah SC v Al Fahaheel SC</span><span className="OddsOnParticipantFixture_Competition">Kuwait League</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantFixture">
                                                        <span className="OddsOnParticipantFixture_Teams">Universitatea Cluj v ACS Poli Timisoara</span><span className="OddsOnParticipantFixture_Competition">Romania Liga II</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantFixture">
                                                        <span className="OddsOnParticipantFixture_Teams">Al Bidda SC v Al-Wakrah SC</span><span className="OddsOnParticipantFixture_Competition">Qatar League 2</span>
                                                    </div>
                                                </div>
                                            
                                                <div className="OddsOnColumn OddsOnColumn_W5 OddsOnColumn_Participant">
                                                    <div className="OddsOnColumnHeader">
                                                        1
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">1.53</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">1.33</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">1.12</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">34.00</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">1.66</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">1.33</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">3.80</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">1.10</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">1.28</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">1.45</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">1.70</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">1.66</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">1.30</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">1.062</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">9.00</span>
                                                    </div>
                                                </div>
                                            
                                                <div className="OddsOnColumn OddsOnColumn_W5 OddsOnColumn_Participant">
                                                    <div className="OddsOnColumnHeader">
                                                        X
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">3.75</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">4.20</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">8.00</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">26.00</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">3.80</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">4.75</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">3.60</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">8.00</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">4.75</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">4.00</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">3.40</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">3.70</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">5.25</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">9.50</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">6.50</span>
                                                    </div>
                                                </div>
                                            
                                                <div className="OddsOnColumn OddsOnColumn_W5 OddsOnColumn_Participant">
                                                    <div className="OddsOnColumnHeader">
                                                        2
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">5.00</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">8.00</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">13.00</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">1.012</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">4.33</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">6.50</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">1.72</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">17.00</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">9.00</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">7.00</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">4.75</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">4.50</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">7.50</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">19.00</span>
                                                    </div>
                                            
                                                    <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                        <span className="ParticipantOddsOnly_Odds">1.18</span>
                                                    </div>
                                                </div>
                                            </div>
                                    </section>
                                    <section id="Tennis-panel" className="tab-pane fade" role="tabpanel">
                                            <div className="FilterClassificationHeader">
                                                <div className="FilterClassificationHeader_Title">Tennis</div>                                        
                                                <div className="FilterClassificationHeader_TimeDropDown">
                                                    <span className="TimeDropDown">Next 3 hours</span>
                                                </div>                                        
                                                <div className="FilterClassificationHeader_Sort">
                                                    <div className="FilterClassificationHeader_SortLabel">Sort by</div>                                        
                                                    <div className="SortButtons">
                                                        <div className="SortButtons_Button SortButtons_Selected">Date</div>                                        
                                                        <div className="SortButtons_Button">Price</div>
                                                    </div>
                                                </div>
                                            </div>                                        
                                        <div className="OddsOnGrid">
                                            <div className="OddsOnColumn OddsOnColumn_W4 OddsOnColumn_Date">
                                                <div className="OddsOnColumnHeader"></div>
                                        
                                                <div className="OddsOnParticipantDate">
                                                    <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">14:00</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantDate">
                                                    <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">14:00</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantDate">
                                                    <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">14:00</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantDate">
                                                    <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">14:00</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantDate">
                                                    <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">14:00</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantDate">
                                                    <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">14:30</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantDate">
                                                    <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">14:30</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantDate">
                                                    <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">14:30</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantDate">
                                                    <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">14:30</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantDate">
                                                    <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">14:30</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantDate">
                                                    <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">14:30</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantDate">
                                                    <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">14:30</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantDate">
                                                    <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">14:30</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantDate">
                                                    <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">14:30</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantDate">
                                                    <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">14:30</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantDate">
                                                    <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">14:30</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantDate">
                                                    <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">14:30</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantDate">
                                                    <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">14:30</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantDate">
                                                    <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">14:30</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantDate">
                                                    <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">14:30</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantDate">
                                                    <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">15:00</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantDate">
                                                    <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">15:00</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantDate">
                                                    <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">15:00</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantDate">
                                                    <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">15:00</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantDate">
                                                    <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">15:00</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantDate">
                                                    <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">15:30</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantDate">
                                                    <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">16:00</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantDate">
                                                    <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">16:00</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantDate">
                                                    <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">16:00</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantDate">
                                                    <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">16:00</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantDate">
                                                    <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">16:00</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantDate">
                                                    <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">16:00</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantDate">
                                                    <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">16:00</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantDate">
                                                    <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">16:00</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantDate">
                                                    <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">16:00</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantDate">
                                                    <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">16:00</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantDate">
                                                    <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">16:00</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantDate">
                                                    <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">16:00</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantDate">
                                                    <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">16:30</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantDate">
                                                    <span className="OddsOnParticipantDate_Date">25 Oct</span><span className="OddsOnParticipantDate_Time">16:30</span>
                                                </div>
                                            </div>
                                        
                                            <div className="OddsOnColumn OddsOnColumn_W4 OddsOnColumn_Fixture">
                                                <div className="OddsOnColumnHeader"></div>
                                        
                                                <div className="OddsOnParticipantFixture">
                                                    <div className="OddsOnParticipantFixture_Icons">
                                                        <div className="OddsOnParticipantFixture_IconsVideoAvailable OddsOnParticipantFixture_IconsGeneric"></div>
                                                    </div><span className="OddsOnParticipantFixture_Teams" >Krejcikova/Siniakova vs Melichar/Peschke</span><span className="OddsOnParticipantFixture_Competition">WTA Finals WD</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantFixture">
                                                    <span className="OddsOnParticipantFixture_Teams">Ignacio Monzon vs Francisco Cerundolo</span><span className="OddsOnParticipantFixture_Competition">ITF Brazil F6</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantFixture">
                                                    <div className="OddsOnParticipantFixture_Icons">
                                                        <div className="OddsOnParticipantFixture_IconsVideoAvailable OddsOnParticipantFixture_IconsGeneric"></div>
                                                    </div><span className="OddsOnParticipantFixture_Teams">Roberto Bautista-Agut vs Dusan Lajovic</span><span className="OddsOnParticipantFixture_Competition">ATP Basel</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantFixture">
                                                    <div className="OddsOnParticipantFixture_Icons">
                                                        <div className="OddsOnParticipantFixture_IconsVideoAvailable OddsOnParticipantFixture_IconsGeneric"></div>
                                                    </div><span className="OddsOnParticipantFixture_Teams">Stefanos Tsitsipas vs Peter Gojowczyk</span><span className="OddsOnParticipantFixture_Competition">ATP Basel</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantFixture">
                                                    <span className="OddsOnParticipantFixture_Teams">Lesley Kerkhove vs Chloe Paquet</span><span className="OddsOnParticipantFixture_Competition">ITF Women Oslo</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantFixture">
                                                    <span className="OddsOnParticipantFixture_Teams">Jastrzebska/William vs Giavara/Minetti</span><span className="OddsOnParticipantFixture_Competition">ITF Women Stockholm WD</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantFixture">
                                                    <span className="OddsOnParticipantFixture_Teams">Viktorovitch/Zaar vs Shaulskaya/Vikhrianova</span><span className="OddsOnParticipantFixture_Competition">ITF Women Stockholm WD</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantFixture">
                                                    <span className="OddsOnParticipantFixture_Teams">Liauw A Fong/Pipa vs Mezan/Petrovic</span><span className="OddsOnParticipantFixture_Competition">ITF Women Stockholm WD</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantFixture">
                                                    <span className="OddsOnParticipantFixture_Teams">Peddi Reddy/Rittberger vs Bechri/Hoedt</span><span className="OddsOnParticipantFixture_Competition">ITF Women Monastir WD</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantFixture">
                                                    <span className="OddsOnParticipantFixture_Teams">Njiric/Zawadzka vs J Figueras/Zuger</span><span className="OddsOnParticipantFixture_Competition">ITF Women Monastir WD</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantFixture">
                                                    <span className="OddsOnParticipantFixture_Teams">Dhoe/Peters vs Geerts/Heyman</span><span className="OddsOnParticipantFixture_Competition">ITF Germany F16 MD</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantFixture">
                                                    <span className="OddsOnParticipantFixture_Teams">Karola P Bejenaru vs Marie Mattel</span><span className="OddsOnParticipantFixture_Competition">ITF Women Lousada</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantFixture">
                                                    <span className="OddsOnParticipantFixture_Teams">Olga Helmi vs Mariana Campino</span><span className="OddsOnParticipantFixture_Competition">ITF Women Lousada</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantFixture">
                                                    <div className="OddsOnParticipantFixture_Icons">
                                                        <div className="OddsOnParticipantFixture_IconsVideoAvailable OddsOnParticipantFixture_IconsGeneric"></div>
                                                    </div><span className="OddsOnParticipantFixture_Teams">Dimitar Kuzmanov vs Riccardo Balzerani</span><span className="OddsOnParticipantFixture_Competition">ITF Italy F33</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantFixture">
                                                    <span className="OddsOnParticipantFixture_Teams">Eduard Esteve Lobato vs Davide Galoppini</span><span className="OddsOnParticipantFixture_Competition">ITF Italy F33</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantFixture">
                                                    <span className="OddsOnParticipantFixture_Teams">Federica Di Sarra vs Ylena In-Albon</span><span className="OddsOnParticipantFixture_Competition">ITF Women Santa Margherita</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantFixture">
                                                    <div className="OddsOnParticipantFixture_Icons">
                                                        <div className="OddsOnParticipantFixture_IconsVideoAvailable OddsOnParticipantFixture_IconsGeneric"></div>
                                                    </div><span className="OddsOnParticipantFixture_Teams">Dalila Spiteri vs Kaja Juvan</span><span className="OddsOnParticipantFixture_Competition">ITF Women Santa Margherita</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantFixture">
                                                    <span className="OddsOnParticipantFixture_Teams">Varvara Lepchenko vs Whitney Osuigwe</span><span className="OddsOnParticipantFixture_Competition">ITF Women Macon</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantFixture">
                                                    <span className="OddsOnParticipantFixture_Teams">Ann Li vs Hailey Baptiste</span><span className="OddsOnParticipantFixture_Competition">ITF Women Macon</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantFixture">
                                                    <span className="OddsOnParticipantFixture_Teams">Giuliana Olmos vs Jessica Pegula</span><span className="OddsOnParticipantFixture_Competition">ITF Women Macon</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantFixture">
                                                    <span className="OddsOnParticipantFixture_Teams">Ronnie Schneider vs Roy Smith</span><span className="OddsOnParticipantFixture_Competition">ITF USA F28B</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantFixture">
                                                    <span className="OddsOnParticipantFixture_Teams">Michael Redlicki vs Jonathan Chang</span><span className="OddsOnParticipantFixture_Competition">ITF USA F28B</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantFixture">
                                                    <span className="OddsOnParticipantFixture_Teams">Mora/S Izquierdo vs Eminefendic/F Flores</span><span className="OddsOnParticipantFixture_Competition">ITF Tunisia F37 MD</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantFixture">
                                                    <span className="OddsOnParticipantFixture_Teams">Celikbilek/Mannapov vs Matuszewski/Terczynski</span><span className="OddsOnParticipantFixture_Competition">ITF Germany F16 MD</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantFixture">
                                                    <span className="OddsOnParticipantFixture_Teams">Mulder/Visscher vs Milatova/Skachkova</span><span className="OddsOnParticipantFixture_Competition">ITF Women Lousada WD</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantFixture">
                                                    <span className="OddsOnParticipantFixture_Teams">Jose Pereira vs Francisco Comesana</span><span className="OddsOnParticipantFixture_Competition">ITF Brazil F6</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantFixture">
                                                    <div className="OddsOnParticipantFixture_Icons">
                                                        <div className="OddsOnParticipantFixture_IconsVideoAvailable OddsOnParticipantFixture_IconsGeneric"></div>
                                                    </div><span className="OddsOnParticipantFixture_Teams">Dominic Thiem vs Sam Querrey</span><span className="OddsOnParticipantFixture_Competition">ATP Vienna</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantFixture">
                                                    <div className="OddsOnParticipantFixture_Icons">
                                                        <div className="OddsOnParticipantFixture_IconsVideoAvailable OddsOnParticipantFixture_IconsGeneric"></div>
                                                    </div><span className="OddsOnParticipantFixture_Teams">Robin Anderson vs Jessika Ponchet</span><span className="OddsOnParticipantFixture_Competition">ITF Women Saguenay</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantFixture">
                                                    <span className="OddsOnParticipantFixture_Teams">Arthur Reymond vs Louis Wessels</span><span className="OddsOnParticipantFixture_Competition">ITF Germany F16</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantFixture">
                                                    <span className="OddsOnParticipantFixture_Teams">Hering/Parres Azcoitia vs Losciale/Scotti</span><span className="OddsOnParticipantFixture_Competition">ITF Women Lousada WD</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantFixture">
                                                    <span className="OddsOnParticipantFixture_Teams">Maesfranckx/Mironova vs Jorge/Nuudi</span><span className="OddsOnParticipantFixture_Competition">ITF Women Lousada WD</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantFixture">
                                                    <div className="OddsOnParticipantFixture_Icons">
                                                        <div className="OddsOnParticipantFixture_IconsVideoAvailable OddsOnParticipantFixture_IconsGeneric"></div>
                                                    </div><span className="OddsOnParticipantFixture_Teams">Alexei Popyrin vs Alexander Zverev</span><span className="OddsOnParticipantFixture_Competition">ATP Basel</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantFixture">
                                                    <span className="OddsOnParticipantFixture_Teams">Alves/Juhaszova vs Anshba/Boskovic</span><span className="OddsOnParticipantFixture_Competition">ITF Women Santa Margherita WD</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantFixture">
                                                    <div className="OddsOnParticipantFixture_Icons">
                                                        <div className="OddsOnParticipantFixture_IconsVideoAvailable OddsOnParticipantFixture_IconsGeneric"></div>
                                                    </div><span className="OddsOnParticipantFixture_Teams">Cuk/Stefanini vs Ivakhnenko/Zarycka</span><span className="OddsOnParticipantFixture_Competition">ITF Women Santa Margherita WD</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantFixture">
                                                    <div className="OddsOnParticipantFixture_Icons">
                                                        <div className="OddsOnParticipantFixture_IconsVideoAvailable OddsOnParticipantFixture_IconsGeneric"></div>
                                                    </div><span className="OddsOnParticipantFixture_Teams">Kekez/Raspudic vs Fornell-Mestres/Giner</span><span className="OddsOnParticipantFixture_Competition">ITF Italy F33 MD</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantFixture">
                                                    <span className="OddsOnParticipantFixture_Teams">Danielle Lao vs Louisa Chirico</span><span className="OddsOnParticipantFixture_Competition">ITF Women Macon</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantFixture">
                                                    <span className="OddsOnParticipantFixture_Teams">Sophie Chang vs Allie Kiick</span><span className="OddsOnParticipantFixture_Competition">ITF Women Macon</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantFixture">
                                                    <div className="OddsOnParticipantFixture_Icons">
                                                        <div className="OddsOnParticipantFixture_IconsVideoAvailable OddsOnParticipantFixture_IconsGeneric"></div>
                                                    </div><span className="OddsOnParticipantFixture_Teams">Dasha Lopatetskaya vs Manon Arcangioli</span><span className="OddsOnParticipantFixture_Competition">ITF Women Saguenay</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantFixture">
                                                    <span className="OddsOnParticipantFixture_Teams">Kyrylo Tsygura vs Maxime Tchoutakian</span><span className="OddsOnParticipantFixture_Competition">ITF USA F28B</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantFixture">
                                                    <span className="OddsOnParticipantFixture_Teams">Salisbury/Skupski vs Mies/Podlipnik-Castillo</span><span className="OddsOnParticipantFixture_Competition">ATP Vienna MD</span>
                                                </div>
                                            </div>
                                        
                                            <div className="OddsOnColumn OddsOnColumn_W4 OddsOnColumn_Participant">
                                                <div className="OddsOnColumnHeader">
                                                    1
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">1.50</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">8.00</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">1.33</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">1.33</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">1.40</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">1.40</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">1.20</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">1.28</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">3.00</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">1.30</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">7.50</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">1.44</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">1.020</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">1.20</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">1.33</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">4.50</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">10.00</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">1.40</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">1.44</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">4.00</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">1.16</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">1.14</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">1.025</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">1.40</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">1.25</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">1.20</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">1.44</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">2.62</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">3.40</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">1.14</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">17.00</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">7.00</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">2.50</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">4.00</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">3.75</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">1.20</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">5.00</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">1.25</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">4.00</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">1.44</span>
                                                </div>
                                            </div>
                                        
                                            <div className="OddsOnColumn OddsOnColumn_W4 OddsOnColumn_Participant">
                                                <div className="OddsOnColumnHeader">
                                                    2
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">2.50</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">1.062</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">3.25</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">3.25</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">2.75</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">2.75</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">4.33</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">3.50</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">1.36</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">3.40</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">1.071</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">2.62</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">11.00</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">4.33</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">3.25</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">1.16</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">1.030</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">2.75</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">2.62</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">1.22</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">4.50</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">5.00</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">10.50</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">2.75</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">3.75</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">4.33</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">2.62</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">1.44</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">1.30</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">5.00</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">1.005</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">1.10</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">1.50</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">1.22</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">1.25</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">4.33</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">1.14</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">3.75</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">1.22</span>
                                                </div>
                                        
                                                <div className="OddsOnParticipantOddsOnly ParticipantOddsOnly Participant_General">
                                                    <span className="ParticipantOddsOnly_Odds">2.62</span>
                                                </div>
                                            </div>
                                        </div>
                                
                                    </section>
                                    <section id="AmericanFootball-panel" className="tab-pane fade" role="tabpanel">
                                            <div className="FilterClassificationHeader">
                                                <div className="FilterClassificationHeader_Title">American Football</div>                                        
                                                <div className="FilterClassificationHeader_TimeDropDown">
                                                    <span className="TimeDropDown">Next 3 hours</span>
                                                </div>                                        
                                                <div className="FilterClassificationHeader_Sort">
                                                    <div className="FilterClassificationHeader_SortLabel">Sort by</div>                                        
                                                    <div className="SortButtons">
                                                        <div className="SortButtons_Button SortButtons_Selected">Date</div>                                        
                                                        <div className="SortButtons_Button">Price</div>
                                                    </div>
                                                </div>
                                            </div>
                                      <div className="NoResultsMessage "><div className="NoResultsMessage_Text " >Sorry, there are no markets available for this time period, please extend your search.</div></div>
                                    </section>
                                    <section id="Basketball-panel" className="tab-pane fade" role="tabpanel">
                                            <div className="FilterClassificationHeader">
                                                <div className="FilterClassificationHeader_Title">Basketball</div>                                        
                                                <div className="FilterClassificationHeader_TimeDropDown">
                                                    <span className="TimeDropDown">Next 3 hours</span>
                                                </div>                                        
                                                <div className="FilterClassificationHeader_Sort">
                                                    <div className="FilterClassificationHeader_SortLabel">Sort by</div>                                        
                                                    <div className="SortButtons">
                                                        <div className="SortButtons_Button SortButtons_Selected">Date</div>                                        
                                                        <div className="SortButtons_Button">Price</div>
                                                    </div>
                                                </div>
                                            </div>
                                      <div className="NoResultsMessage "><div className="NoResultsMessage_Text " >Sorry, there are no markets available for this time period, please extend your search.</div></div>
                                    </section>
                                    <section id="Darts-panel" className="tab-pane fade" role="tabpanel">
                                            <div className="FilterClassificationHeader">
                                                <div className="FilterClassificationHeader_Title">Darts</div>                                        
                                                <div className="FilterClassificationHeader_TimeDropDown">
                                                    <span className="TimeDropDown">Next 3 hours</span>
                                                </div>                                        
                                                <div className="FilterClassificationHeader_Sort">
                                                    <div className="FilterClassificationHeader_SortLabel">Sort by</div>                                        
                                                    <div className="SortButtons">
                                                        <div className="SortButtons_Button SortButtons_Selected">Date</div>                                        
                                                        <div className="SortButtons_Button">Price</div>
                                                    </div>
                                                </div>
                                            </div>
                                      <div className="NoResultsMessage "><div className="NoResultsMessage_Text " >Sorry, there are no markets available for this time period, please extend your search.</div></div>
                                    </section>
                                    <section id="Handball-panel" className="tab-pane fade" role="tabpanel">
                                            <div className="FilterClassificationHeader">
                                                <div className="FilterClassificationHeader_Title">Handball</div>                                        
                                                <div className="FilterClassificationHeader_TimeDropDown">
                                                    <span className="TimeDropDown">Next 3 hours</span>
                                                </div>                                        
                                                <div className="FilterClassificationHeader_Sort">
                                                    <div className="FilterClassificationHeader_SortLabel">Sort by</div>                                        
                                                    <div className="SortButtons">
                                                        <div className="SortButtons_Button SortButtons_Selected">Date</div>                                        
                                                        <div className="SortButtons_Button">Price</div>
                                                    </div>
                                                </div>
                                            </div>
                                      <div className="NoResultsMessage "><div className="NoResultsMessage_Text " >Sorry, there are no markets available for this time period, please extend your search.</div></div>
                                    </section>
                                    <section id="IceHockey-panel" className="tab-pane fade" role="tabpanel">
                                            <div className="FilterClassificationHeader">
                                                <div className="FilterClassificationHeader_Title">Ice Hockey</div>                                        
                                                <div className="FilterClassificationHeader_TimeDropDown">
                                                    <span className="TimeDropDown">Next 3 hours</span>
                                                </div>                                        
                                                <div className="FilterClassificationHeader_Sort">
                                                    <div className="FilterClassificationHeader_SortLabel">Sort by</div>                                        
                                                    <div className="SortButtons">
                                                        <div className="SortButtons_Button SortButtons_Selected">Date</div>                                        
                                                        <div className="SortButtons_Button">Price</div>
                                                    </div>
                                                </div>
                                            </div>
                                      <div className="NoResultsMessage "><div className="NoResultsMessage_Text " >Sorry, there are no markets available for this time period, please extend your search.</div></div>
                                    </section>
                                    <section id="RugbyUnion-panel" className="tab-pane fade" role="tabpanel">
                                            <div className="FilterClassificationHeader">
                                                <div className="FilterClassificationHeader_Title">Rugby Union</div>                                        
                                                <div className="FilterClassificationHeader_TimeDropDown">
                                                    <span className="TimeDropDown">Next 3 hours</span>
                                                </div>                                        
                                                <div className="FilterClassificationHeader_Sort">
                                                    <div className="FilterClassificationHeader_SortLabel">Sort by</div>                                        
                                                    <div className="SortButtons">
                                                        <div className="SortButtons_Button SortButtons_Selected">Date</div>                                        
                                                        <div className="SortButtons_Button">Price</div>
                                                    </div>
                                                </div>
                                            </div>
                                      <div className="NoResultsMessage "><div className="NoResultsMessage_Text " >Sorry, there are no markets available for this time period, please extend your search.</div></div>
                                    </section>
                                    <section id="Snooker-panel" className="tab-pane fade" role="tabpanel">
                                            <div className="FilterClassificationHeader">
                                                <div className="FilterClassificationHeader_Title">Snooker</div>                                        
                                                <div className="FilterClassificationHeader_TimeDropDown">
                                                    <span className="TimeDropDown">Next 3 hours</span>
                                                </div>                                        
                                                <div className="FilterClassificationHeader_Sort">
                                                    <div className="FilterClassificationHeader_SortLabel">Sort by</div>                                        
                                                    <div className="SortButtons">
                                                        <div className="SortButtons_Button SortButtons_Selected">Date</div>                                        
                                                        <div className="SortButtons_Button">Price</div>
                                                    </div>
                                                </div>
                                            </div>
                                      <div className="NoResultsMessage "><div className="NoResultsMessage_Text " >Sorry, there are no markets available for this time period, please extend your search.</div></div>
                                    </section>
                                    <section id="Volleyball-panel" className="tab-pane fade" role="tabpanel">
                                            <div className="FilterClassificationHeader">
                                                <div className="FilterClassificationHeader_Title">Volleyball</div>                                        
                                                <div className="FilterClassificationHeader_TimeDropDown">
                                                    <span className="TimeDropDown">Next 3 hours</span>
                                                </div>                                        
                                                <div className="FilterClassificationHeader_Sort">
                                                    <div className="FilterClassificationHeader_SortLabel">Sort by</div>                                        
                                                    <div className="SortButtons">
                                                        <div className="SortButtons_Button SortButtons_Selected">Date</div>                                        
                                                        <div className="SortButtons_Button">Price</div>
                                                    </div>
                                                </div>
                                            </div>
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

export default OddsOnCoupon;
