import React from 'react';
import {Link, NavLink, Route} from "react-router-dom";
import GroupedByLeagueMarketGroupMarket
    from "./pages/sports/prematch-templates/grouped-by-league-marketgroup-market/grouped-by-league-marketgroup-market";


class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

//sidebar games moved to favourities
        var appData = [];
        $('.sidebar_icon_star').click(function () {
            var category_name = $(this).data('item');
            var parent = $(this).parents('.menu-item');
            let item =parent[0].className;
          //  console.log('parent', parent);
            $(this).toggleClass('starBtnOn');

            $.fn.animateAppendTo = function(sel, speed) {
                var newEle = parent.clone(true).appendTo(sel),
                    newPos = newEle.position();
                newEle.hide();
                parent.addClass('animated_move').animate(newPos, speed, function() {
                    newEle.show();
                    parent.remove();
                });
                return newEle;
            };

            if ($(this).hasClass("starBtnOn")) {
              //  console.log('++');
              // parent.appendTo('.FavouritesContainer');
               parent.animateAppendTo('.FavouritesContainer', 500);
             //  console.log('parent: ', parent);
                //console.log('appData:',parent[0].className);
                //console.log('appData1:',item);

                appData.push(item);
                //обновляется массив в локал сторедже
                localStorage.setItem('userFavourite', JSON.stringify({aD:appData}));

            }
            else {
              //  console.log('--');
               // parent.appendTo($('.sidebar_wrapper' + category_name), 1000);
               parent.animateAppendTo(('.sidebar_wrapper' + category_name), 500);

                let index = appData.indexOf(item);//опрeделяем индекс
              //  console.log('parent[0].className: ',parent[0].className,',','index: ',index);
                if (index !== -1) appData.splice(index, 1);// удаляем по индексу
              //  console.log('appData:',appData);
                //обновляешь массив в сторедже
                localStorage.setItem('userFavourite', JSON.stringify({aD:appData}));
            }
        });

        //load favorite item menu
        if(JSON.parse(localStorage.getItem('userFavourite'))) {
            appData = JSON.parse(localStorage.getItem('userFavourite')).aD;
           // console.log('loadAppData:',appData);
            appData.forEach((item)=>{
                let elem = document.getElementsByClassName(item)[0];
                let favElem = document.getElementsByClassName('FavouritesContainer')[0];
                let star = elem.children[1];
                favElem.appendChild(elem);
                star? star.classList.toggle('starBtnOn'): "";
            })
        };
        $('.ClassificationDropDown_link').click(function(){
            $('.ClassificationDropDown').toggleClass('open');
        });
    }

    render() {
        return(
            <div className="sidebar_wrapper SidebarWrapper">
                <div className="sidebar">
                    <span className="menu-item"><NavLink to="/sports/home" name="home" className="sidebar_link"> Home</NavLink></span>
                    <span className="menu-item"><NavLink to="/in-play" name="" className="sidebar_link"> Live <span className="yellow_text">In-Play</span></NavLink></span>
                    <div className="FavouritesContainer "></div>
                    <div className="sidebar_wrapper UnitItem" id="american_football_item">
                    <span className="menu-item american_football"><NavLink to="/sports/american-football" name="american-football" className="sidebar_link"> American Football</NavLink><div className="sidebar_icon_star" data-item="#american_football_item"></div></span>
                    </div>
                    <div className="sidebar_wrapper UnitItem" id="baseball_item">
                    <span className="menu-item baseball"><NavLink to="/sports/baseball" name="baseball" className="sidebar_link"> Baseball</NavLink><div className="sidebar_icon_star " data-item="#baseball_item"></div></span>
                    </div>
                    <div className="sidebar_wrapper UnitItem" id="handball_item">
                    <span className="menu-item handball">
                        <NavLink to="/sports/handball" name="handball" className="sidebar_link"> Handball</NavLink>
                        <div className="sidebar_icon_star " data-item="#handball_item"></div></span>
                    </div>
                    <div className="sidebar_wrapper UnitItem" id="basketball_item">
                    <span className="menu-item basketball"><NavLink to="/sports/basketball" name="basketball" className="sidebar_link"> Basketball</NavLink><div className="sidebar_icon_star" data-item="#basketball_item"></div></span>
                    </div>
                    <div className="sidebar_wrapper UnitItem" id="bowls_item">
                    <span className="menu-item bowls"><NavLink to="/sports/bowls" name="bowls" className="sidebar_link"> Bowls</NavLink><div className="sidebar_icon_star" data-item="#bowls"></div></span>
                    </div>
                    <div className="sidebar_wrapper UnitItem" id="boxing_UFC_item">
                    <span className="menu-item boxing_UFC"><NavLink to="/sports/boxing-ufc" name="boxing-ufc" className="sidebar_link"> Boxing/UFC</NavLink><div className="sidebar_icon_star" data-item="#boxing_UFC_item"></div></span>
                    </div>
                    <div className="sidebar_wrapper UnitItem" id="cricket_item">
                    <span className="menu-item cricket"><NavLink to="/sports/cricket" name="cricket" className="sidebar_link"> Cricket</NavLink><div className="sidebar_icon_star" data-item="#cricket_item"></div></span>
                    </div>
                    <div className="sidebar_wrapper UnitItem" id="cycling_item">
                    <span className="menu-item cycling"><NavLink to="/sports/cycling" name="cycling" className="sidebar_link"> Cycling</NavLink><div className="sidebar_icon_star" data-item="#cycling_item"></div></span>
                    </div>
                    <div className="sidebar_wrapper UnitItem" id="darts_item">
                    <span className="menu-item darts"><NavLink to="/sports/darts" name="darts" className="sidebar_link"> Darts</NavLink><div className="sidebar_icon_star" data-item="#darts_item"></div></span>
                    </div>
                        <div className="sidebar_wrapper UnitItem" id="esports_item">
                    <span className="menu-item esports"><NavLink to="/sports/esports" name="esports" className="sidebar_link"> Esports</NavLink><div className="sidebar_icon_star" data-item="#esports_item"></div></span>
                        </div>
                    <div className="sidebar_wrapper UnitItem" id="futsal_item">
                    <span className="menu-item futsal"><NavLink to="/sports/futsal" name="futsal" className="sidebar_link"> Futsal</NavLink><div className="sidebar_icon_star" data-item="#futsal_item"></div></span>
                    </div>
                    <div className="sidebar_wrapper UnitItem" id="gaelic-sports_item">
                    <span className="menu-item gaelic-sports"><NavLink to="/sports/gaelic-ports" name="gaelic-ports" className="sidebar_link"> Gaelic Sports</NavLink><div className="sidebar_icon_star" data-item="#gaelic-sports_item"></div></span>
                    </div>
                    <div className="sidebar_wrapper UnitItem" id="golf_item">
                    <span className="menu-item golf"><NavLink to="/sports/golf" name="golf" className="sidebar_link"> Golf</NavLink><div className="sidebar_icon_star" data-item="#golf_item"></div></span>
                    </div>
                    <div className="sidebar_wrapper UnitItem" id="greyhounds_item">
                    <span className="menu-item greyhounds"><NavLink to="/sports/greyhounds" name="greyhounds" className="sidebar_link"> Greyhounds</NavLink><div className="sidebar_icon_star" data-item="#greyhounds_item"></div></span>
                    </div>
                    <div className="sidebar_wrapper UnitItem" id="horse-racing_item">
                    <span className="menu-item horse-racing"><NavLink to="/sports/horse-racing" name="horse-racing" className="sidebar_link"> Horse Racing</NavLink><div className="sidebar_icon_star" data-item="#horse-racing_item"></div></span>
                    </div>
                    <div className="sidebar_wrapper UnitItem" id="ice-hockey_item">
                    <span className="menu-item ice-hockey"><NavLink to="/sports/ice-hockey" name="ice-hockey" className="sidebar_link"> Ice Hockey</NavLink><div className="sidebar_icon_star" data-item="#ice-hockey_item"></div></span>
                    </div>
                    <div className="sidebar_wrapper UnitItem" id="lotto_item">
                    <span className="menu-item lotto"><NavLink to="/sports/lotto" name="lotto" className="sidebar_link"> Lotto</NavLink><div className="sidebar_icon_star" data-item="#lotto_item"></div></span>
                    </div>
                    <div className="sidebar_wrapper UnitItem" id="motor-sports_item">
                    <span className=" motor-sports">
                        {/*<NavLink to="/sports/motor-sports" name="motor-sports" className="sidebar_link"> Motor Sports</NavLink><div className="sidebar_icon_star" data-item="#motor_sport_item"></div></span>*/}
                        <span className="ClassificationDropDown_link"> Motor Sports</span>
                        <div className="ClassificationDropDown ">
                            <div className="sidebar_wrapper UnitItem" id="formula-1">
                                <span className="menu-item formula-1"><NavLink to="/sports/motor-sports-formula-1" name="motor-sports-formula-1" className="sidebar_link">Formula 1</NavLink><div className="sidebar_icon_star" data-item="#formula-1"></div></span>
                            </div>
                             <div className="sidebar_wrapper UnitItem" id="motor-sports-motorbikes">
                                <span className="menu-item motor-sports-motorbikes"><NavLink to="/sports/motor-sports-motorbikes" name="motor-sports-motorbikes" className="sidebar_link">Motorbikes</NavLink><div className="sidebar_icon_star" data-item="#motor-sports-motorbikes"></div></span>
                             </div>
                            <div className="sidebar_wrapper UnitItem" id="motor-sports-nascar">
                                <span className="menu-item motor-sports-nascar"><NavLink to="/sports/motor-sports-nascar" name="motor-sports-nascar" className="sidebar_link">Nascar</NavLink><div className="sidebar_icon_star" data-item="#motor-sports-nascar"></div></span>
                            </div>
                            <div className="sidebar_wrapper UnitItem" id="motor-sports-supercars">
                                <span className="menu-item motor-sports-supercars"><NavLink to="/sports/motor-sports-supercars" name="motor-sports-supercars" className="sidebar_link">Supercars</NavLink><div className="sidebar_icon_star" data-item="#motor-sports-supercars"></div></span>
                            </div>
                        </div>
                    </span>
                    </div>
                    <div className="sidebar_wrapper UnitItem" id="rugby-league_item">
                    <span className="menu-item rugby-league"><NavLink to="/sports/rugby-league" name="rugby-league" className="sidebar_link"> Rugby League</NavLink><div className="sidebar_icon_star" data-item="#rugby-league_item"></div></span>
                    </div>
                    <div className="sidebar_wrapper UnitItem" id="rugby-union_item">
                    <span className="menu-item rugby-union"><NavLink to="/sports/rugby-union" name="rugby-union" className="sidebar_link"> Rugby Union</NavLink><div className="sidebar_icon_star" data-item="#rugby-union_item"></div></span>
                    </div>
                    <div className="sidebar_wrapper UnitItem" id="snooker_item">
                    <span className="menu-item snooker"><NavLink to="/sports/snooker" name="snooker" className="sidebar_link"> Snooker</NavLink><div className="sidebar_icon_star" data-item="#snooker_item"></div></span>
                    </div>
                    <div className="sidebar_wrapper UnitItem" id="soccer_item">
                    <span className="menu-item soccer"><NavLink to="/sports/soccer" name="soccer" onClick={() => this.props.changeCurrentLeagueId()} className="sidebar_link"> Soccer</NavLink><div className="sidebar_icon_star" data-item="#soccer_item"></div></span>
                    </div>
                    <div className="sidebar_wrapper UnitItem" id="specials_item">
                    <span className="menu-item specials"><NavLink to="/sports/specials" name="specials" className="sidebar_link"> Specials</NavLink><div className="sidebar_icon_star" data-item="#specials_item"></div></span>
                    </div>
                    <div className="sidebar_wrapper UnitItem" id="sweden_item">
                    <span className="menu-item sweden"><NavLink to="/sports/sweden" name="sweden" className="sidebar_link"> Sweden</NavLink><div className="sidebar_icon_star" data-item="#sweden_item"></div></span>
                    </div>
                    <div className="sidebar_wrapper UnitItem" id="united-kingdom_item">
                    <span className="menu-item united-kingdom"><NavLink to="/sports/united-kingdom" name="united-kingdom" className="sidebar_link"> United Kingdom</NavLink><div className="sidebar_icon_star" data-item="#united-kingdom_item"></div></span>
                    </div>
                    <div className="sidebar_wrapper UnitItem" id="speedway_item">
                    <span className="menu-item speedway"><NavLink to="/sports/speedway" name="speedway" className="sidebar_link"> Speedway</NavLink><div className="sidebar_icon_star" data-item="#speedway_item"></div></span>
                    </div>
                    <div className="sidebar_wrapper UnitItem" id="american_football_item">
                    <span className="menu-item"><NavLink to="/sports/tennis" name="tennis" className="sidebar_link"> Tennis</NavLink><div className="sidebar_icon_star" data-item="#tennis_item"></div></span>
                    </div>
                    <div className="sidebar_wrapper UnitItem" id="virtual-sports_item">
                    <span className="menu-item virtual-sports"><NavLink to="/sports/virtual-sports" name="virtual-sports" className="sidebar_link"> Virtual Sports</NavLink><div className="sidebar_icon_star" data-item="#virtual_sportas_item"></div></span>
                    </div>
                    <div className="sidebar_wrapper UnitItem" id="volleyball_item">
                    <span className="menu-item volleyball"><NavLink to="/sports/volleyball" name="volleyball" className="sidebar_link"> Volleyball</NavLink><div className="sidebar_icon_star" data-item="volleyball_item"></div></span>
                    </div>
                    <div className="sidebar_wrapper UnitItem" id="winter-sports_item">
                    <span className="menu-item winter-sports"><NavLink to="/sports/winter-sports" name="winter-sports" className="sidebar_link"> Winter Sports</NavLink><div className="sidebar_icon_star" data-item="#winter_sports_item"></div></span>
                    </div>
                    <div className="sidebar_wrapper UnitItem" id="more-sports_item">
                    <span className="menu-item more-sports"><NavLink to="/sports/more-sports" name="more-sports" className="sidebar_link"> More Sports</NavLink><div className="sidebar_icon_star" data-item="#more_sports_item"></div></span>
                    </div>
                    <div className="sidebar_wrapper UnitItem" id="odds-on-coupon_item">
                    <span className="menu-item odds-on-coupon"><NavLink to="/sports/odds-on-coupon" name="odds-on-coupon" className="sidebar_link"> Odds On Coupon</NavLink><div className="sidebar_icon_star" data-item="#odds_on_coupon_item"></div></span>
                    </div>
                    <div className="sidebar_wrapper UnitItem" id="top-events_item">
                    <span className="menu-item top-events"><NavLink to="/sports/top-events" name="top-events" className="sidebar_link"> Top Events</NavLink><div className="sidebar_icon_star" data-item="#top_events_item"></div></span>
                    </div>
                </div>
            </div>
        )

    }
}

export default Sidebar;
