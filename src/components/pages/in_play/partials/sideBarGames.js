import React from 'react';
import TabAll from "./partsSideBarGames/tabAll";
import TabTop from "./partsSideBarGames/tabTop";
import TabVideo from "./partsSideBarGames/tabVideo";




class SideBarGames extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: "all",
            sportArr: this.props.allSports,
            sports: this.props.sports,
            sportsOriginal: this.props.sportsOriginal,
            show_fav: false,
            leagues: {},
            leftSideBar: true,
            event: this.props.event
        }
    }
// toggle favourite
    toggleFav=()=>{
        this.setState({show_fav: !this.state.show_fav})
    }
    //change tabs
    changeTab=(tab)=>{
       this.setState({
           tab:tab
       })
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            sportArr:nextProps.allSports,
            sports:nextProps.sports,
            event:nextProps.event,
            sportsOriginal: nextProps.sportsOriginal,
        });
    }
//move  to favourite all GameGroup
    moveFav=()=>{

    }
    componentDidMount() {

        $('.competition_icon_favourite').click(function () {
            var category_name = $(this).data('cat');
            var parent = $(this).parents('.Market');


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

            if($(this).hasClass("starBtnOn") ) {
                console.log('++');
                $(this).animateAppendTo('.FavouriteContainer', 500);
                appDataGameGroup.push(item);
                localStorage.setItem('userFavouriteGroupGame', JSON.stringify({aD:appDataGameGroup}));

            }
            else{
                console.log('--');
                 parent.animateAppendTo(('.ClassificationContainer' + category_name), 500);
                let index = appDataGameGroup.indexOf(item);//опрeделяем индекс
                //  console.log('parent[0].className: ',parent[0].className,',','index: ',index);
                if (index !== -1) appDataGameGroup.splice(index, 1);// удаляем по индексу
                //  console.log('appData:',appData);
                //обновляешь массив в сторедже
                localStorage.setItem('userFavouriteGroupGame', JSON.stringify({aD:appDataGameGroup}));
            }

        });

    }



//event_sidebar collapsed
    collapseSideBar = () =>{
        if(this.state.leftSideBar) {
            var type = false
        } else {
            var type = true
        }

        this.setState({
            leftSideBar:type
        })
        this.props.changeLeftSideBar(type)

        if($('.event_sidebar').hasClass("collapsed") ){

            $('.event_sidebar').toggleClass('collapsed');
            setTimeout(function () {
                $('.classification_header').toggleClass('change_color');
                $('.classification_header_label').show(400);

                setTimeout(function () {
                    $('.ClassificationContainer, .FavouriteContainer').show(400);
                    $('.collapse_btn').removeClass('collapsed');
                }, 400)
            },400);

        } else {

            $('.ClassificationContainer, .FavouriteContainer').hide(400);
            setTimeout(function () {
                $('.classification_header').toggleClass('change_color');
                $('.classification_header_label').hide(400);
                setTimeout(function () {
                    $('.event_sidebar').toggleClass('collapsed');
                    $('.collapse_btn').addClass('collapsed');
                }, 400)
            },400);

        }
    }
    render() {
        return(
            <div className="event_sidebar scroll_block">
                <div className="">
                    <ul className="nav control_bar">
                        <span className="collapse_btn" onClick={()=>this.collapseSideBar()}></span>

                        <li className="nav-item">
                            <span className={`nav-link control_bar_btn ${this.state.tab =="all" ? 'active' : ''}`} onClick={(e)=>{e.preventDefault(); this.changeTab('all')}}>All</span>
                        </li>
                        <li className="nav-item">
                            <span className={`nav-link control_bar_btn ${this.state.tab == "top" ? 'active' : ''}`} onClick={(e)=>{e.preventDefault(); this.changeTab('top')}}>Top</span>
                        </li>
                        <li className="nav-item">
                            <span className={`nav-link control_bar_btn media ${this.state.tab == "media" ? 'active' : ''}`} onClick={(e)=>{e.preventDefault(); this.changeTab('media')}}></span>
                        </li>
                    </ul>
                    <div className="tab-content">
                        {/*~~~~~~~~~~~~~favourite block~~~~~~~~~~~~~~~~~~*/}
                        <div className="classification_block favourite">
                            <div className="classification_header favourite" onClick={()=>this.toggleFav()}>
                                <span className="classification_header_icon" onClick={() => this.props.selectShotLeftBar("Favourite")}></span>
                                <span className="classification_header_label">Favourite</span>
                            </div>
                            <div className={(this.state.show_fav)?("FavouriteContainer hidden"):("FavouriteContainer")}>
                                <div className=" ">
                                    <div>
                                        <div className="classification_noFavourites">
                                            Click on a
                                            <img src="../assets/img/grey_star.svg" alt="favourites" />
                                            below to move the event here.
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        {this.state.tab == "all" ? <TabAll addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}   sportsOriginal={this.state.sportsOriginal} sports={this.state.sports} sportArr={this.state.sportArr} selectShotLeftBar={(sportId) => this.props.selectShotLeftBar(sportId)} event={this.state.event}/> : ""}
                        {this.state.tab == "top" ? <TabTop/> : ""}
                        {this.state.tab == "media" ? <TabVideo/> : ""}



                    </div>
                </div>
            </div>
        )

    }
}

export default SideBarGames ;