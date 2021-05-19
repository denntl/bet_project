import React from 'react';
import TableGames from "../../shared/tables/tableGames";



class IceHockey extends React.Component {
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
       return (
           <div id="page_iceHockey" className="page">
               <div className="header">
                   <div className="title ClassificationName">Ice Hockey</div>
                   <div className="nav-tabs">
                       <a href="#next-24-hrs" className="ClassificationHeader-PeriodOption">Next 24
                           hrs</a>
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
                                       service across all international sports. If you feel we are not covering an event
                                       or market that we should please contact us.
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
                               <div className="MarketGroup">
                                   <div className="MarketGroup-GroupName" data-toggle="collapse"
                                        data-target="#collapse_FIBA_World_Cup_Women" aria-expanded="false"
                                        aria-controls="collapse_FIBA_World_Cup_Women">NHL
                                   </div>
                                   <div className="MarketGroup collapse show" id="collapse_FIBA_World_Cup_Women"
                                        aria-expanded="true">
                                       <div className="Market">
                                           <div className="Market-Header" data-toggle="collapse"
                                                data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false"
                                                aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                               <div className="Market-GroupName">Lines</div>
                                               <div className="Market-HeaderAllCheckbox">
                                                   <label className="Market-AllLabel checkbox no-collapsable"><input
                                                       type="checkbox"/>All<span className="checkmark"></span></label>
                                               </div>
                                           </div>
                                           <div className="Market-Cluster collapse show"
                                                id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                               <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Game Lines</a></div>
                                               <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">3-Way</a></div>
                                               <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">1st Period</a></div>
                                           </div>
                                       </div>

                                       <div className="Market">
                                           <div className="Market-Header" data-toggle="collapse"
                                                data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false"
                                                aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                               <div className="Market-GroupName">Main</div>
                                           </div>
                                           <div className="Market-Cluster collapse show"
                                                id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                               <div className="item"><a href="#" className="CouponLink_Label">Alternative Puck
                                                   Line 2-Way</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Alternative
                                                   Total 2-Way</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Winning
                                                   Margin</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Correct
                                                   Score</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Double
                                                   Chance</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Highest Scoring
                                                   Period</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Will Game go to
                                                   Shootout?</a></div>
                                           </div>
                                       </div>

                                       <div className="Market">
                                           <div className="Market-Header" data-toggle="collapse"
                                                data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false"
                                                aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                               <div className="Market-GroupName">Score</div>
                                           </div>
                                           <div className="Market-Cluster collapse show"
                                                id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                               <div className="item"><a href="#" className="CouponLink_Label">Team to Score
                                                   First</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Team to Score
                                                   Last</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Team Scoring
                                                   First Wins Game</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Game Total -
                                                   Odd/Even</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Time of 1st
                                                   Score</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Race to 3
                                                   Goals</a></div>
                                           </div>
                                       </div>

                                       <div className="Market">
                                           <div className="Market-Header" data-toggle="collapse"
                                                data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false"
                                                aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                               <div className="Market-GroupName">Game Props</div>
                                           </div>
                                           <div className="Market-Cluster collapse show"
                                                id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                               <div className="item"><a href="#" className="CouponLink_Label">ARZ Coyotes @
                                                   MIN Wild</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">BUF Sabres @ VGS
                                                   Golden Knights</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">CAR Hurricanes @
                                                   TB Lightning</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">COL Avalanche @
                                                   NY Rangers</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">DAL Stars @ NJ
                                                   Devils</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">EDM Oilers @ WIN
                                                   Jets</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">FLA Panthers @
                                                   PHI Flyers</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">VAN Canucks @
                                                   PIT Penguins</a></div>
                                           </div>
                                       </div>
                                   </div>
                               </div>

                               <div className="MarketGroup">
                                   <div className="MarketGroup-GroupName" data-toggle="collapse"
                                        data-target="#collapse_FIBA_World_Cup_Women" aria-expanded="false"
                                        aria-controls="collapse_FIBA_World_Cup_Women">Danish Metal Ligaen
                                   </div>
                                   <div className="MarketGroup collapse show" id="collapse_FIBA_World_Cup_Women"
                                        aria-expanded="true">
                                       <div className="Market">
                                           <div className="Market-Header" data-toggle="collapse"
                                                data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false"
                                                aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                               <div className="Market-GroupName">Lines</div>
                                               <div className="Market-HeaderAllCheckbox">
                                                   <label className="Market-AllLabel checkbox no-collapsable"><input
                                                       type="checkbox"/>All<span className="checkmark"></span></label>
                                               </div>
                                           </div>
                                           <div className="Market-Cluster collapse show"
                                                id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                               <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Game Lines</a></div>
                                               <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">3-Way</a></div>
                                               <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">1st Period</a></div>
                                           </div>
                                       </div>

                                       <div className="Market">
                                           <div className="Market-Header" data-toggle="collapse"
                                                data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false"
                                                aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                               <div className="Market-GroupName">Main</div>
                                           </div>
                                           <div className="Market-Cluster collapse show"
                                                id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                               <div className="item"><a href="#" className="CouponLink_Label">Alternative Puck
                                                   Line 2-Way</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Alternative
                                                   Total 2-Way</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Winning
                                                   Margin</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Correct
                                                   Score</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Double
                                                   Chance</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Highest Scoring
                                                   Period</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Will Game go to
                                                   Shootout?</a></div>
                                           </div>
                                       </div>

                                       <div className="Market">
                                           <div className="Market-Header" data-toggle="collapse"
                                                data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false"
                                                aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                               <div className="Market-GroupName">Score</div>
                                           </div>
                                           <div className="Market-Cluster collapse show"
                                                id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                               <div className="item"><a href="#" className="CouponLink_Label">Team to Score
                                                   First</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Team to Score
                                                   Last</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Team Scoring
                                                   First Wins Game</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Game Total -
                                                   Odd/Even</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Time of 1st
                                                   Score</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Race to 3
                                                   Goals</a></div>
                                           </div>
                                       </div>

                                       <div className="Market">
                                           <div className="Market-Header" data-toggle="collapse"
                                                data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false"
                                                aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                               <div className="Market-GroupName">Game Props</div>
                                           </div>
                                           <div className="Market-Cluster collapse show"
                                                id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                               <div className="item"><a href="#" className="CouponLink_Label">Odense Bulldogs
                                                   vs Hvidovre Fighters</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Sonderjyske vs
                                                   Herlev Eagles</a></div>
                                           </div>
                                       </div>
                                   </div>
                               </div>

                               <div className="MarketGroup">
                                   <div className="MarketGroup-GroupName" data-toggle="collapse"
                                        data-target="#collapse_FIBA_World_Cup_Women" aria-expanded="false"
                                        aria-controls="collapse_FIBA_World_Cup_Women">KHL
                                   </div>
                                   <div className="MarketGroup collapse show" id="collapse_FIBA_World_Cup_Women"
                                        aria-expanded="true">
                                       <div className="Market">
                                           <div className="Market-Header" data-toggle="collapse"
                                                data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false"
                                                aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                               <div className="Market-GroupName">Lines</div>
                                               <div className="Market-HeaderAllCheckbox">
                                                   <label className="Market-AllLabel checkbox no-collapsable"><input
                                                       type="checkbox"/>All<span className="checkmark"></span></label>
                                               </div>
                                           </div>
                                           <div className="Market-Cluster collapse show"
                                                id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                               <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Game Lines</a></div>
                                               <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">3-Way</a></div>
                                               <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">1st Period</a></div>
                                           </div>
                                       </div>

                                       <div className="Market">
                                           <div className="Market-Header" data-toggle="collapse"
                                                data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false"
                                                aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                               <div className="Market-GroupName">Main</div>
                                           </div>
                                           <div className="Market-Cluster collapse show"
                                                id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                               <div className="item"><a href="#" className="CouponLink_Label">Alternative Puck
                                                   Line 2-Way</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Alternative
                                                   Total 2-Way</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Winning
                                                   Margin</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Correct
                                                   Score</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Double
                                                   Chance</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Highest Scoring
                                                   Period</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Will Game go to
                                                   Shootout?</a></div>
                                           </div>
                                       </div>

                                       <div className="Market">
                                           <div className="Market-Header" data-toggle="collapse"
                                                data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false"
                                                aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                               <div className="Market-GroupName">Score</div>
                                           </div>
                                           <div className="Market-Cluster collapse show"
                                                id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                               <div className="item"><a href="#" className="CouponLink_Label">Team to Score
                                                   First</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Team to Score
                                                   Last</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Goalscorers</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Team
                                                   Goalscorers</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Multi
                                                   Goalscorers</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">To Score In
                                                   Period</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Team Scoring
                                                   First Wins Game</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Game Total -
                                                   Odd/Even</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Time of 1st
                                                   Score</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Race to 3
                                                   Goals</a></div>
                                           </div>
                                       </div>

                                       <div className="Market">
                                           <div className="Market-Header" data-toggle="collapse"
                                                data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false"
                                                aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                               <div className="Market-GroupName">Game Props</div>
                                           </div>
                                           <div className="Market-Cluster collapse show"
                                                id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                               <div className="item"><a href="#" className="CouponLink_Label">AK Bars Kazan vs
                                                   Jokerit</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">AK Bars Kazan vs
                                                   Salavat Ulaev UFA</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Avtomobilist
                                                   Yekaterinburg vs Barys Astana</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">CSKA Moscow vs
                                                   Kunlun Red Star</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Dynamo Minsk vs
                                                   Dynamo Moscow</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Dynamo Riga vs
                                                   Amur Khabarovsk</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">HC Vityaz vs
                                                   Neftekhimik Niznekamsk</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">HC Vityaz vs
                                                   Severstal Cherepovec</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Lokomotiv
                                                   Yaroslavl vs Admiral Vladivostok</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Metallurg
                                                   Magnitogorsk vs Avangard Omsk</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Metallurg
                                                   Magnitogorsk vs Salavat Ulaev UFA</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">SKA St
                                                   Petersburg vs Dynamo Moscow</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Slovan
                                                   Bratislava vs Admiral Vladivostok</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Slovan
                                                   Bratislava vs Amur Khabarovsk</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Spartak Moscow
                                                   vs Dynamo Riga</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Torpedo Novgorod
                                                   vs Jokerit</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Traktor
                                                   Chelyabinsk vs Barys Astana</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Traktor
                                                   Chelyabinsk vs Sibir Novosibirsk</a></div>
                                           </div>
                                       </div>
                                   </div>
                               </div>

                               <div className="MarketGroup">
                                   <div className="MarketGroup-GroupName" data-toggle="collapse"
                                        data-target="#collapse_FIBA_World_Cup_Women" aria-expanded="false"
                                        aria-controls="collapse_FIBA_World_Cup_Women">Russia Championships Women
                                   </div>
                                   <div className="MarketGroup collapse show" id="collapse_FIBA_World_Cup_Women"
                                        aria-expanded="true">
                                       <div className="Market">
                                           <div className="Market-Header" data-toggle="collapse"
                                                data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false"
                                                aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                               <div className="Market-GroupName">Lines</div>
                                               <div className="Market-HeaderAllCheckbox">
                                                   <label className="Market-AllLabel checkbox no-collapsable"><input
                                                       type="checkbox"/>All<span className="checkmark"></span></label>
                                               </div>
                                           </div>
                                           <div className="Market-Cluster collapse show"
                                                id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                               <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">3-Way</a></div>
                                               <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Game Lines</a></div>
                                           </div>
                                       </div>

                                       <div className="Market">
                                           <div className="Market-Header" data-toggle="collapse"
                                                data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false"
                                                aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                               <div className="Market-GroupName">Main</div>
                                           </div>
                                           <div className="Market-Cluster collapse show"
                                                id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                               <div className="item"><a href="#" className="CouponLink_Label">Winning
                                                   Margin</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Correct
                                                   Score</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Double
                                                   Chance</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Highest Scoring
                                                   Period</a></div>
                                           </div>
                                       </div>

                                       <div className="Market">
                                           <div className="Market-Header" data-toggle="collapse"
                                                data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false"
                                                aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                               <div className="Market-GroupName">Score</div>
                                           </div>
                                           <div className="Market-Cluster collapse show"
                                                id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                               <div className="item"><label className="Market-AllLabel">Team Scoring
                                                   First Wins Game<span className="checkmark"></span></label></div>
                                               <div className="item"><label className="Market-AllLabel">Game Total -
                                                   Odd/Even<span className="checkmark"></span></label></div>
                                           </div>
                                       </div>

                                       <div className="Market">
                                           <div className="Market-Header" data-toggle="collapse"
                                                data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false"
                                                aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                               <div className="Market-GroupName">Game Props</div>
                                           </div>
                                           <div
                                               className="sm-MarketContainer sm-MarketContainer_NumColumns1 sm-Market_Open">
                                               <div className="item"><a href="#" className="CouponLink_Label">Agidel UFA Women
                                                   vs SKIF Nizhny Novgorod Women</a></div>
                                           </div>
                                       </div>
                                   </div>
                               </div>

                               <div className="MarketGroup">
                                   <div className="MarketGroup-GroupName" data-toggle="collapse"
                                        data-target="#collapse_FIBA_World_Cup_Women" aria-expanded="false"
                                        aria-controls="collapse_FIBA_World_Cup_Women">Russia VHL-B
                                   </div>
                                   <div className="MarketGroup collapse show" id="collapse_FIBA_World_Cup_Women"
                                        aria-expanded="true">
                                       <div className="Market">
                                           <div className="Market-Header" data-toggle="collapse"
                                                data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false"
                                                aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                               <div className="Market-GroupName">Lines</div>
                                               <div className="Market-HeaderAllCheckbox">
                                                   <label className="Market-AllLabel checkbox no-collapsable"><input
                                                       type="checkbox"/>All<span className="checkmark"></span></label>
                                               </div>
                                           </div>
                                           <div className="Market-Cluster collapse show"
                                                id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                               <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Game Lines</a></div>
                                               <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">3-Way</a></div>
                                           </div>
                                       </div>

                                       <div className="Market">
                                           <div className="Market-Header" data-toggle="collapse"
                                                data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false"
                                                aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                               <div className="Market-GroupName">Main</div>
                                           </div>
                                           <div className="Market-Cluster collapse show"
                                                id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                               <div className="item"><a href="#" className="CouponLink_Label">Winning
                                                   Margin</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Correct
                                                   Score</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Double
                                                   Chance</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Highest Scoring
                                                   Period</a></div>
                                           </div>
                                           <div className="Market-Header" data-toggle="collapse"
                                                data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false"
                                                aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                               <div className="Market-GroupName">Score</div>
                                           </div>
                                           <div className="Market-Cluster collapse show"
                                                id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                               <div className="item"><a href="#" className="CouponLink_Label">Team Scoring
                                                   First Wins Game</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Game Total -
                                                   Odd/Even</a></div>
                                           </div>
                                       </div>

                                       <div className="Market">
                                           <div className="Market-Header" data-toggle="collapse"
                                                data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false"
                                                aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                               <div className="Market-GroupName">Game Props</div>
                                           </div>
                                           <div className="Market-Cluster collapse show"
                                                id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                               <div className="item"><a href="#" className="CouponLink_Label">HC Mordovia
                                                   Saransk vs HC Krasnoyarskie Rysi</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Kristall Saratov
                                                   vs Altay Barnaul</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Yuzhny Ural
                                                   Junior vs HC Rostov</a></div>
                                           </div>
                                       </div>
                                   </div>
                               </div>

                               <div className="MarketGroup">
                                   <div className="MarketGroup-GroupName" data-toggle="collapse"
                                        data-target="#collapse_FIBA_World_Cup_Women" aria-expanded="false"
                                        aria-controls="collapse_FIBA_World_Cup_Women">Swedish Hockey League
                                   </div>
                                   <div className="MarketGroup collapse show" id="collapse_FIBA_World_Cup_Women"
                                        aria-expanded="true">
                                       <div className="Market">
                                           <div className="Market-Header" data-toggle="collapse"
                                                data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false"
                                                aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                               <div className="Market-GroupName">Lines</div>
                                               <div className="Market-HeaderAllCheckbox">
                                                   <label className="Market-AllLabel checkbox no-collapsable"><input
                                                       type="checkbox"/>All<span className="checkmark"></span></label>
                                               </div>
                                           </div>
                                           <div className="Market-Cluster collapse show"
                                                id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                               <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Game Lines</a></div>
                                               <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">3-Way</a></div>
                                               <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">1st Period</a></div>
                                           </div>
                                       </div>

                                       <div className="Market">
                                           <div className="Market-Header" data-toggle="collapse"
                                                data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false"
                                                aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                               <div className="Market-GroupName">Main</div>
                                           </div>
                                           <div className="Market-Cluster collapse show"
                                                id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                               <div className="item"><a href="#" className="CouponLink_Label">Alternative Puck
                                                   Line 2-Way</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Alternative
                                                   Total 2-Way</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Winning
                                                   Margin</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Correct
                                                   Score</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Double
                                                   Chance</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Highest Scoring
                                                   Period</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Will Game go to
                                                   Shootout?</a></div>
                                           </div>
                                       </div>

                                       <div className="Market">
                                           <div className="Market-Header" data-toggle="collapse"
                                                data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false"
                                                aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                               <div className="Market-GroupName">Score</div>
                                           </div>
                                           <div className="Market-Cluster collapse show"
                                                id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                               <div className="item"><a href="#" className="CouponLink_Label">Team to Score
                                                   First</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Team to Score
                                                   Last</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Team Scoring
                                                   First Wins Game</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Game Total -
                                                   Odd/Even</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Time of 1st
                                                   Score</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Race to 3
                                                   Goals</a></div>
                                           </div>
                                       </div>
                                       <div className="Market">
                                           <div className="Market-Header" data-toggle="collapse"
                                                data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false"
                                                aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                               <div className="Market-GroupName">Game Props</div>
                                           </div>
                                           <div className="Market-Cluster collapse show"
                                                id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                               <div className="item"><a href="#" className="CouponLink_Label">Frölunda HC vs
                                                   Luleå Hockey</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">IF Malmö
                                                   Redhawks vs Brynäs IF</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Örebro HK vs
                                                   Färjestads BK</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Skellefteå AIK
                                                   vs Djurgårdens IF</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Timrå IK vs
                                                   Rögle BK</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Växjö Lakers HC
                                                   vs HV71</a></div>
                                           </div>
                                       </div>
                                   </div>
                               </div>

                               <div className="MarketGroup">
                                   <div className="MarketGroup-GroupName" data-toggle="collapse"
                                        data-target="#collapse_FIBA_World_Cup_Women" aria-expanded="false"
                                        aria-controls="collapse_FIBA_World_Cup_Women">Champions Hockey League
                                   </div>
                                   <div className="MarketGroup collapse show" id="collapse_FIBA_World_Cup_Women"
                                        aria-expanded="true">
                                       <div className="Market">
                                           <div className="Market-Header" data-toggle="collapse"
                                                data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false"
                                                aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                               <div className="Market-GroupName">Lines</div>
                                               <div className="Market-HeaderAllCheckbox">
                                                   <label className="Market-AllLabel checkbox no-collapsable"><input
                                                       type="checkbox"/>All<span className="checkmark"></span></label>
                                               </div>
                                           </div>
                                           <div className="Market-Cluster collapse show"
                                                id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                               <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Game Lines</a></div>
                                               <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">3-Way</a></div>
                                               <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">1st Period</a></div>
                                           </div>
                                       </div>

                                       <div className="Market">
                                           <div className="Market-Header" data-toggle="collapse"
                                                data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false"
                                                aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                               <div className="Market-GroupName">Main</div>
                                           </div>
                                           <div className="Market-Cluster collapse show"
                                                id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                               <div className="item"><a href="#" className="CouponLink_Label">Alternative Puck
                                                   Line 2-Way</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Alternative
                                                   Total 2-Way</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Winning
                                                   Margin</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Correct
                                                   Score</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Double
                                                   Chance</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Highest Scoring
                                                   Period</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Will Game go to
                                                   Shootout?</a></div>
                                           </div>
                                       </div>
                                       <div className="Market">
                                           <div className="Market-Header" data-toggle="collapse"
                                                data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false"
                                                aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                               <div className="Market-GroupName">Score</div>
                                           </div>
                                           <div className="Market-Cluster collapse show"
                                                id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                               <div className="item"><a href="#" className="CouponLink_Label">Team to Score
                                                   First</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Team to Score
                                                   Last</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Team Scoring
                                                   First Wins Game</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Game Total -
                                                   Odd/Even</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Time of 1st
                                                   Score</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Race to 3
                                                   Goals</a></div>
                                               <div className="item"><label
                                                   className="Market-AllLabel">Goalscorers<span className="checkmark"></span></label></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Team
                                                   Goalscorers</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Multi
                                                   Goalscorers</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">To Score In
                                                   Period</a></div>
                                           </div>
                                       </div>

                                       <div className="Market">
                                           <div className="Market-Header" data-toggle="collapse"
                                                data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false"
                                                aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                               <div className="Market-GroupName">Game Props</div>
                                           </div>
                                           <div className="Market-Cluster collapse show"
                                                id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                               <div className="item"><a href="#" className="CouponLink_Label">Aalborg Pirates
                                                   vs Frölunda HC</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Bolzano vs GKS
                                                   Tychy</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Cardiff Devils
                                                   vs Växjö Lakers HC</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">HC 05 Banska
                                                   Bystrica vs Plzen</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">HK Neman Grodno
                                                   vs Eisbären Berlin</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">IF Malmö
                                                   Redhawks vs EHC München</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Jyp vs
                                                   Lugano</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Mountfield HK vs
                                                   Kärpät</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Nürnberg Ice
                                                   Tigers vs Rouen</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Salzburg vs
                                                   Bern</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Skellefteå AIK
                                                   vs Hifk</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Storhamar vs
                                                   Trinec</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Tappara vs
                                                   Djurgårdens IF</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Vienna Capitals
                                                   vs ZSC Lions</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Yunost Minsk vs
                                                   Tps</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Zug vs HC Kometa
                                                   Brno</a></div>
                                           </div>
                                       </div>
                                   </div>
                               </div>

                               <div className="MarketGroup">
                                   <div className="MarketGroup-GroupName" data-toggle="collapse"
                                        data-target="#collapse_FIBA_World_Cup_Women" aria-expanded="false"
                                        aria-controls="collapse_FIBA_World_Cup_Women">Czech Republic Extraliga
                                   </div>
                                   <div className="MarketGroup collapse show" id="collapse_FIBA_World_Cup_Women"
                                        aria-expanded="true">
                                       <div className="Market">
                                           <div className="Market-Header" data-toggle="collapse"
                                                data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false"
                                                aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                               <div className="Market-GroupName">Lines</div>
                                               <div className="Market-HeaderAllCheckbox">
                                                   <label className="Market-AllLabel checkbox no-collapsable"><input
                                                       type="checkbox"/>All<span className="checkmark"></span></label>
                                               </div>
                                           </div>
                                           <div className="Market-Cluster collapse show"
                                                id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                               <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Game Lines</a></div>
                                               <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">3-Way</a></div>
                                               <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">1st Period</a></div>
                                           </div>
                                       </div>

                                       <div className="Market">
                                           <div className="Market-Header" data-toggle="collapse"
                                                data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false"
                                                aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                               <div className="Market-GroupName">Main</div>
                                           </div>
                                           <div className="Market-Cluster collapse show"
                                                id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                               <div className="item"><a href="#" className="CouponLink_Label">Alternative Puck
                                                   Line 2-Way</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Alternative
                                                   Total 2-Way</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Winning
                                                   Margin</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Correct
                                                   Score</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Double
                                                   Chance</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Highest Scoring
                                                   Period</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Will Game go to
                                                   Shootout?</a></div>
                                           </div>
                                       </div>

                                       <div className="Market">
                                           <div className="Market-Header" data-toggle="collapse"
                                                data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false"
                                                aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                               <div className="Market-GroupName">Score</div>
                                           </div>
                                           <div className="Market-Cluster collapse show"
                                                id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                               <div className="item"><a href="#" className="CouponLink_Label">Team to Score
                                                   First</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Team to Score
                                                   Last</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Team Scoring
                                                   First Wins Game</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Game Total -
                                                   Odd/Even</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Time of 1st
                                                   Score</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Race to 3
                                                   Goals</a></div>
                                           </div>
                                       </div>


                                       <div className="Market">
                                           <div className="Market-Header" data-toggle="collapse"
                                                data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false"
                                                aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                               <div className="Market-GroupName">Game Props</div>
                                           </div>
                                           <div className="Market-Cluster collapse show"
                                                id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                               <div className="item"><a href="#" className="CouponLink_Label">HC Kometa Brno
                                                   vs Liberec</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">HC Olomouc vs
                                                   Dynamo Pardubice</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Karlovy Vary vs
                                                   Pirati Chomutov</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Litvinov vs
                                                   Sparta Praha</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Mountfield HK vs
                                                   Vitkovice</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Trinec vs
                                                   Plzen</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Zlín vs BK Mlada
                                                   Boleslav</a></div>
                                           </div>
                                       </div>
                                   </div>
                               </div>

                               <div className="MarketGroup">
                                   <div className="MarketGroup-GroupName" data-toggle="collapse"
                                        data-target="#collapse_FIBA_World_Cup_Women" aria-expanded="false"
                                        aria-controls="collapse_FIBA_World_Cup_Women">Finland SM Liiga
                                   </div>
                                   <div className="MarketGroup collapse show" id="collapse_FIBA_World_Cup_Women"
                                        aria-expanded="true">
                                       <div className="Market">
                                           <div className="Market-Header" data-toggle="collapse"
                                                data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false"
                                                aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                               <div className="Market-GroupName">Lines</div>
                                               <div className="Market-HeaderAllCheckbox">
                                                   <label className="Market-AllLabel checkbox no-collapsable"><input
                                                       type="checkbox"/>All<span className="checkmark"></span></label>
                                               </div>
                                           </div>
                                           <div className="Market-Cluster collapse show"
                                                id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                               <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Game Lines</a></div>
                                               <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">3-Way</a></div>
                                               <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">1st Period</a></div>
                                           </div>
                                       </div>

                                       <div className="Market">
                                           <div className="Market-Header" data-toggle="collapse"
                                                data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false"
                                                aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                               <div className="Market-GroupName">Main</div>
                                           </div>
                                           <div className="Market-Cluster collapse show"
                                                id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                               <div className="item"><a href="#" className="CouponLink_Label">Alternative Puck
                                                   Line 2-Way</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Alternative
                                                   Total 2-Way</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Winning
                                                   Margin</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Correct
                                                   Score</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Double
                                                   Chance</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Highest Scoring
                                                   Period</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Will Game go to
                                                   Shootout?</a></div>
                                           </div>
                                       </div>

                                       <div className="Market">
                                           <div className="Market-Header" data-toggle="collapse"
                                                data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false"
                                                aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                               <div className="Market-GroupName">Score</div>
                                           </div>
                                           <div className="Market-Cluster collapse show"
                                                id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                               <div className="item"><a href="#" className="CouponLink_Label">Team to Score
                                                   First</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Team to Score
                                                   Last</a></div>
                                               <div className="item"><label
                                                   className="Market-AllLabel">Goalscorers<span className="checkmark"></span></label></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Team
                                                   Goalscorers</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Multi
                                                   Goalscorers</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">To Score In
                                                   Period</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Team Scoring
                                                   First Wins Game</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Game Total -
                                                   Odd/Even</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Time of 1st
                                                   Score</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Race to 3
                                                   Goals</a></div>
                                           </div>
                                       </div>

                                       <div className="Market">
                                           <div className="Market-Header" data-toggle="collapse"
                                                data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false"
                                                aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                               <div className="Market-GroupName">Game Props</div>
                                           </div>
                                           <div className="Market-Cluster collapse show"
                                                id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                               <div className="item"><a href="#" className="CouponLink_Label">Pelicans vs
                                                   Tps</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Hpk vs
                                                   Kalpa</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Jukurit vs
                                                   Ässät</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Kookoo vs
                                                   Ilves</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Lukko vs
                                                   Sport</a></div>
                                           </div>
                                       </div>
                                   </div>
                               </div>

                               <div className="MarketGroup">
                                   <div className="MarketGroup-GroupName" data-toggle="collapse"
                                        data-target="#collapse_FIBA_World_Cup_Women" aria-expanded="false"
                                        aria-controls="collapse_FIBA_World_Cup_Women">Germany Eishockey Liga
                                   </div>
                                   <div className="MarketGroup collapse show" id="collapse_FIBA_World_Cup_Women"
                                        aria-expanded="true">
                                       <div className="Market">
                                           <div className="Market-Header" data-toggle="collapse"
                                                data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false"
                                                aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                               <div className="Market-GroupName">Lines</div>
                                               <div className="Market-HeaderAllCheckbox">
                                                   <label className="Market-AllLabel checkbox no-collapsable"><input
                                                       type="checkbox"/>All<span className="checkmark"></span></label>
                                               </div>
                                           </div>
                                           <div className="Market-Cluster collapse show"
                                                id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                               <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Game Lines</a></div>
                                               <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">3-Way</a></div>
                                               <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">1st Period</a></div>
                                           </div>
                                       </div>

                                       <div className="Market">
                                           <div className="Market-Header" data-toggle="collapse"
                                                data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false"
                                                aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                               <div className="Market-GroupName">Main</div>
                                           </div>
                                           <div className="Market-Cluster collapse show"
                                                id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                               <div className="item"><a href="#" className="CouponLink_Label">Alternative Puck
                                                   Line 2-Way</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Alternative
                                                   Total 2-Way</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Winning
                                                   Margin</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Correct
                                                   Score</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Double
                                                   Chance</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Highest Scoring
                                                   Period</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Will Game go to
                                                   Shootout?</a></div>
                                           </div>
                                       </div>

                                       <div className="Market">
                                           <div className="Market-Header" data-toggle="collapse"
                                                data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false"
                                                aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                               <div className="Market-GroupName">Score</div>
                                           </div>
                                           <div className="Market-Cluster collapse show"
                                                id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                               <div className="item"><a href="#" className="CouponLink_Label">Team to Score
                                                   First</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Team to Score
                                                   Last</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Team Scoring
                                                   First Wins Game</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Game Total -
                                                   Odd/Even</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Time of 1st
                                                   Score</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Race to 3
                                                   Goals</a></div>
                                           </div>
                                       </div>

                                       <div className="Market">
                                           <div className="Market-Header" data-toggle="collapse"
                                                data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false"
                                                aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                               <div className="Market-GroupName">Game Props</div>
                                           </div>
                                           <div className="Market-Cluster collapse show"
                                                id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                               <div className="item"><a href="#" className="CouponLink_Label">Adler Mannheim
                                                   vs ERC Ingolstadt</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Augsburger
                                                   Panther vs Krefeld Pinguine</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Dusseldorfer EG
                                                   vs Kölner Haie</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">EHC München vs
                                                   Schwenninger Wild Wings</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Eisbären Berlin
                                                   vs Grizzlys Wolfsburg</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Fischtown
                                                   Pinguins Bremerhaven vs Straubing Tigers</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Iserlohn
                                                   Roosters vs Nürnberg Ice Tigers</a></div>
                                           </div>
                                       </div>
                                   </div>
                               </div>

                               <div className="MarketGroup">
                                   <div className="MarketGroup-GroupName" data-toggle="collapse"
                                        data-target="#collapse_FIBA_World_Cup_Women" aria-expanded="false"
                                        aria-controls="collapse_FIBA_World_Cup_Women">British Elite League
                                   </div>
                                   <div className="MarketGroup collapse show" id="collapse_FIBA_World_Cup_Women"
                                        aria-expanded="true">
                                       <div className="Market">
                                           <div className="Market-Header" data-toggle="collapse"
                                                data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false"
                                                aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                               <div className="Market-GroupName">Lines</div>
                                               <div className="Market-HeaderAllCheckbox">
                                                   <label className="Market-AllLabel checkbox no-collapsable"><input
                                                       type="checkbox"/>All<span className="checkmark"></span></label>
                                               </div>
                                           </div>
                                           <div className="Market-Cluster collapse show"
                                                id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                               <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">Game Lines</a></div>
                                               <div  className="item"><label className="checkbox"><input type="checkbox" className="item-checkbox"  /><span className="checkmark"></span></label><a href="#" className="CouponLink_Label">3-Way</a></div>
                                           </div>
                                       </div>

                                       <div className="Market">
                                           <div className="Market-Header" data-toggle="collapse"
                                                data-target="#collapse_FIBA_World_Cup_Women_Lines" aria-expanded="false"
                                                aria-controls="collapse_FIBA_World_Cup_Women_Lines">
                                               <div className="Market-GroupName">Main</div>
                                           </div>
                                           <div className="Market-Cluster collapse show"
                                                id="collapse_FIBA_World_Cup_Women_Lines" aria-expanded="true">
                                               <div className="item"><a href="#" className="CouponLink_Label">Winning
                                                   Margin</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Correct
                                                   Score</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Double
                                                   Chance</a></div>
                                               <div className="item"><a href="#" className="CouponLink_Label">Highest Scoring
                                                   Period</a></div>
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

export default IceHockey;
