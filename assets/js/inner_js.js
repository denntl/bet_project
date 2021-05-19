// function clock() {
//     var d = new Date();
//     var month_num = d.getMonth()
//     var day = d.getDate();
//     var hours = d.getHours();
//     var minutes = d.getMinutes();
//     var seconds = d.getSeconds();
//
//     var month, date_time;
//
//     month = new Array("января", "февраля", "марта", "апреля", "мая", "июня",
//         "июля", "августа", "сентября", "октября", "ноября", "декабря");
//
//     if (day <= 9) day = "0" + day;
//     if (hours <= 9) hours = "0" + hours;
//     if (minutes <= 9) minutes = "0" + minutes;
//     if (seconds <= 9) seconds = "0" + seconds;
//
//     date_time = + hours + ':' + minutes + ':' + seconds + '&nbsp; UK';

//     console.log('test', date_time);
//     if (document.layers) {
//         document.layers.doc_time.document.write(date_time);
//         document.layers.doc_time.document.close();
//     }
//     else document.getElementById("doc_time").innerHTML = date_time;
//     setTimeout(clock(), 1000);
// }
//
// clock();

// Second Menu
//     $('.drop_down_menu').click(function () {
//         var container = $(this);
//         var parent_container = container.parents('.second_menu');
//         parent_container.find('.sub_menu').removeClass('active');
//         container.children('.sub_menu').toggleClass('active');
//     });
//
//     $(document).mouseup(function (e) {
//         var parent_container = $('.second_menu');
//         if (parent_container.has(e.target).length === 0){
//              parent_container.find('.sub_menu').removeClass('active');
//         }
//     });
// END Second Menu

$(document).ready(function(){


// Second Menu
//     $('.menu_link').click(function () {
//         $(this).siblings('.sub_menu').toggleClass('active');
//      });

    $('.MarketSwitcherButton').click(function () {
        $(this).siblings('.MarketSwitcherScroller').toggleClass('opened');
    });
    $('.MarketSwitcherItem').click(function () {
        $('.MarketSwitcherItem.selected').removeClass('selected');
        $(this).toggleClass('selected');
        $('.MarketSwitcherScroller').removeClass('opened');
    });



//change search in header
    $('.input_search').click(function () {
        $('.search_block').addClass('focus');
    });
    $('.SearchHeader_CloseButton').click(function () {
        $('.search_block').removeClass('focus');
    });
//sidebar_link selected
    $('.sidebar_link').click(function(){
        $('.sidebar_link.selected').removeClass('selected');
        $(this).addClass('selected');
    });
    $('.sidebar').each(function () { // получаем все нужные нам ссылки
        var location = window.location.href; // получаем адрес страницы
        var link = this.href;                // получаем адрес ссылки
        if(location == link) {               // при совпадении адреса ссылки и адреса окна
            $(this).addClass('selected');  //добавляем класс
        }
    });

//active links in top header menu
//     $('.menu_link').each(function () { // получаем все нужные нам ссылки
//         var location = window.location.href; // получаем адрес страницы
//         var link = this.href;                // получаем адрес ссылки
//         if(location == link) {               // при совпадении адреса ссылки и адреса окна
//           $(this).addClass('active');  //добавляем класс
//        }
//      });


// sport slider
//     $('.sport_classification_slider').owlCarousel({
//         items:8,
//         nav: true,
//         URLhashListener:true,
//         startPosition: 'URLHash'
//     });
// sport slider In-Play
//     $('.in-play-slider').owlCarousel({
//         items:20,
//         nav: true
//     });
// sport schedule slider
//     $('.schedule_slider').owlCarousel({
//         items:18,
//         nav: true
//     });
// sport_slider select table
//     $(".slider_content").click(function(){
//         $(".slider_content.selected").removeClass("selected");
//         $(this).addClass("selected");
//         $('.play_classification').addClass("invisible");
//         $($(this).data('sport')).removeClass("invisible");
//     });

// schedule_slider select table
//     $(".slider_content").click(function(){
//         $(".slider_content.selected .title").removeClass("selected");
//         $(this).addClass("selected");
//     });

//opened play_league in table (collapsed rows)
//     $('.play_league_header').click(function() {
//         $(this).siblings('.play_league_group_wrapp').toggleClass('opened');
//     });
//
//     $('.play_league_group .InPlayEvent_HeaderButton').click(function () {
//         $(this).siblings('.participant_group').toggleClass('opened');
//         $(this).toggleClass('active');
//         $('.play_event').toggleClass('bordered');
//     });
//
//     $('.play_classification_header').click(function () {
//         $(this).siblings('.play_classification_league').toggleClass('invisible');
//         $(this).toggleClass('active')
//     })
//
// //hidden  league_header_buttons
//     $('.competition_btn').click(function() {
//         $(this).children('.league_header_buttons').toggleClass('visible');
//         $(this).siblings('.play_league_group_wrapp').toggleClass('opened');
//
//     });

//opened important_info in footer
    $('.important_info_header').click(function () {
        $('.important_info_content').toggleClass('opened');
    });
    $('.important_info_content .close_btn').click(function () {
        $('.important_info_content').toggleClass('opened');
    });

//resize right_column
    $('.icon_resize').click(function () {
        $('.page_right_content').toggleClass('stretch')
    });
//right column lock_btn
    $('.lock_btn').click(function () {
        $(this).toggleClass('active');
    })
// select video dropdown-menu
    $('.dropdown-menu a').on('click', function(){
        $(this).parent().parent().prev().html($(this).html());
    })
//match_info popup
    $('.match_information_container').click(function () {
        $('.match_info_popup').toggleClass('active')
    });
//icon_view hide  live_stream_video and match_live_view
    $('.icon_view').click(function () {
        $('.live_stream_video, .match_live_view').toggleClass('invisible');
    });
//play_icon in tables
    $('.play_icon_wrapper .play_icon').click(function () {
        $(this).toggleClass('selected');
    });
//opened play_league in table (gray bg)
//     $('.MarketGroupButton').click(function() {
//         $(this).siblings('.MarketGroup_Wrapper').toggleClass('invisible');
//
//     });



// close modal in Bet Builder tab
    $('.bbw-Menu_Close').click(function() {
        $('.bbw-Wizard ').removeClass('opened');
    });

    $('.ControlBar_AddSelection').click(function() {
        $('.bbw-Wizard ').addClass('opened');
    });
//how bbm-HowTo_Button work open
    $('.bbm-HowTo_Button').click(function() {
        $('.bbm-HowTo_content ').toggleClass('opened');
    });
//event_sidebar collapsed
//     $('.collapse_btn').click(function() {
//         if($('.event_sidebar').hasClass("collapsed") ){
//
//             $('.event_sidebar').toggleClass('collapsed');
//             setTimeout(function () {
//                 $('.classification_header').toggleClass('change_color');
//                 $('.classification_header_label').show(400);
//
//                 setTimeout(function () {
//                     $('.ClassificationContainer, .FavouriteContainer').show(400);
//                     $('.collapse_btn').removeClass('collapsed');
//                 }, 400)
//             },400);
//
//         } else {
//
//             $('.ClassificationContainer, .FavouriteContainer').hide(400);
//             setTimeout(function () {
//                 $('.classification_header').toggleClass('change_color');
//                 $('.classification_header_label').hide(400);
//                 setTimeout(function () {
//                     $('.event_sidebar').toggleClass('collapsed');
//                     $('.collapse_btn').addClass('collapsed');
//                 }, 400)
//             },400);
//
//         }
//     });
//when menu collapsed click on game
    $('.classification_block.soccer').click(function() {
        if($('.event_sidebar').hasClass("collapsed") ) {
            $('.pop_up_sport.soccer ').toggleClass('appear');
        }
        else{
            $('.pop_up_sport.soccer ').removeClass('appear')
        }
    });

//change game_datails in Event View
//     $(".fixture").click(function(){
//         $(".fixture.active").removeClass("active");
//         $(this).addClass("active");
//         $('.event_view_detail_sport').addClass("invisible animated fadeOut");
//         $($(this).data('game')).removeClass("invisible");
//     });

//hide score_board  in event_view_detail
//     $('.score_board_hide_bth').click(function () {
//         $('.score_board_container').css("display", "none");
//         $('.scoreboard_btn').addClass('appear');
//     });

    // $('.scoreboard_btn').click(function() {
    //     if($('.scoreboard_btn').hasClass("appear") ) {
    //         $(this).removeClass('appear');
    //         $('.score_board_container').css("display", "block");
    //     }
    //     else{
    //         $('.score_board_container').css("display", "none");
    //     }
    // });
//appear Summary Container in game
    $('.summary_btn').click(function () {
        $('.SummaryContainer').toggleClass('invisible');
    });

//icon_favourite change color and game move to favourite
//     $('.competition_icon_favourite').click(function () {
// //         var category_name = $(this).data('cat');
// //         var parent = $(this).parents('.MarketGroup');
// //
// //         $(this).toggleClass('starBtnOn');
// //         $.fn.animateAppendTo = function(sel, speed) {
// //             var newEle = parent.clone(true).appendTo(sel),
// //                 newPos = newEle.position();
// //             newEle.hide();
// //             parent.addClass('animated_move').animate(newPos, speed, function() {
// //                 newEle.show();
// //                 parent.remove();
// //             });
// //             return newEle;
// //         };
// //
// //         if($(this).hasClass("starBtnOn") ) {
// //             console.log('++');
// //             //parent.addClass('move');
// //             // parent.appendTo('.FavouriteContainer');
// //             $(this).animateAppendTo('.FavouriteContainer', 750);
// //
// //         }
// //         else{
// //             console.log('--');
// //             //parent.appendTo($('.ClassificationContainer' + category_name));
// //             parent.animateAppendTo(('.ClassificationContainer' + category_name), 750);
// //         }
// //
// //         if ($('.FavouriteContainer').find('.MarketGroup').length > 0) {
// //
// //
// //             $('.classification_noFavourites').css('display', 'none');
// //         }
// //         else{
// //
// //             $('.classification_noFavourites').css('display', 'block');
// //         }
// //
// //         if ($(this).parents('.ClassificationContainer' + category_name).find('.MarketGroup').length > 0) {
// //
// //             console.log('full');
// //             $('.classification_noGames').css('display', 'none');
// //
// //         }
// //         else{
// //             console.log('empty');
// //             $('.classification_noGames').css('display', 'block');
// //         }
// //     });
// //sidebar games moved to favourities
//     var appData = [];
//     $('.sidebar_icon_star').click(function () {
//         var category_name = $(this).data('item');
//         var parent = $(this).parents('.menu-item');
//         $(this).toggleClass('starBtnOn');
//
//         if ($(this).hasClass("starBtnOn")) {
//             console.log('++');
//             parent.appendTo('.FavouritesContainer');
//             console.log('parent: ', parent);
//             console.log('appData:',appData);
//             appData.push(parent[0].className);
//             //обновляется массив в локал сторедже
//             localStorage.setItem('userFavourite', JSON.stringify({aD:appData}));
//
//         }
//         else {
//             console.log('--');
//             parent.appendTo($('.sidebar_wrapper' + category_name));
//             let index = appData.indexOf(parent[0].className);//опрeделяем индекс
//             console.log('parent[0].className: ',parent[0].className,',','index: ',index);
//             if (index !== -1) appData.splice(index, 1);// удаляем по индексу
//             console.log('appData:',appData);
//             //обновляешь массив в сторедже
//             localStorage.setItem('userFavourite', JSON.stringify({aD:appData}));
//         }
//     });
//
//     //load favorite item menu
//     if(JSON.parse(localStorage.getItem('userFavourite'))) {
//         appData = JSON.parse(localStorage.getItem('userFavourite')).aD;
//         console.log('loadAppData:',appData);
//         appData.forEach((item)=>{
//             let elem = document.getElementsByClassName(item)[0];
//             let favElem = document.getElementsByClassName('FavouritesContainer')[0];
//             let star = elem.children[1];
//             console.log('favElem: ', favElem);
//             console.log('elem: ', elem);
//             console.log('star: ', star);
//             favElem.appendChild(elem);
//             star.classList.toggle('starBtnOn');
//         })
//     }





});

$(document).on({
    mouseenter: function (e) {
        console.log('mouse enter pop_up_sport');
    },
    mouseleave: function (e) {
        console.log('mouse leave pop_up_sport');
          $(".pop_up_sport.soccer.appear").toggleClass('appear');
    }

}, ".pop_up_sport");

$(document).on({
    mouseenter: function (e) {
        console.log('mouse enter menu');
    },
    mouseleave: function (e) {
        console.log('mouse leave menu');
        $(".sub_menu.active").toggleClass('active');
    }

}, ".sub_menu");

//install scrollbar
// (function($){
//     $(window).on("load",function(){
//         if ($('.scroll_block').length) {
//             console.log('true');
//             $('.scroll_block').mCustomScrollbar({
//                 axis: "y",
//                 theme: "minimal",
//                 scrollInertia: 550,
//                 scrollbarPosition: "inside"
//             });
//         }
//     })
//
// })(jQuery);
