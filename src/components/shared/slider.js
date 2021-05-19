import React from 'react';
import {getSports} from "../helpers/data";




class Slider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 6046,
            sports: [],
            colorSelected: "sport_green_header",
            type: this.props.type
        }
        this.selectedSport = this.selectedSport.bind(this);
    }


    componentWillMount() {
        getSports("",function (err, data) {

            let allSports =  data.sort((a,b) => {
                 if (a.id < b.id) {
                     return -1;
                 } else if (a.id > b.id)  {
                     return 1;
                 }
             });

            this.setState({
                sports: allSports
            })
        }.bind(this));
    }

    componentDidMount() {


        var clear = setInterval(function() {


            if ( $('.in-play-slider').length >= 15 ) {
                clearInterval(clear);

                $('.in-play-slider').owlCarousel({
                    nav: true,
                    autoWidth:true,
                    margin: 0,
            });

            }
            else{
                $('.in-play-slider').owlCarousel({
                    nav: true,
                    autoWidth:true,
                    margin: 0,
                    mouseDrag:false,
                    touchDrag:false
                });
            }
            if ( $('.sport_classification_slider').length) {
                //clearInterval(clear);   // maybe should return
                $('.sport_classification_slider').owlCarousel({
                    nav: true,
                    autoWidth:true,
                    URLhashListener: true,
                    startPosition: 'URLHash',
                    mouseDrag:false,
                    touchDrag:false
                });
            }

            if ($('.schedule_slider').length) {
                clearInterval(clear);
                $('.schedule_slider').owlCarousel({
                    items:18,
                    nav: true,
                    autoWidth:true,
                    margin: 0,

                });
            }

        }, 1000);

    }

    componentWillReceiveProps(nextProps) {

        this.setState({
            type: nextProps.type
        })
    }

    shouldComponentUpdate(nextProps, nextState) {

        if (nextState.sports == this.state.sports) {
            if (nextState.selected != this.state.selected || nextProps.type != this.state.type || nextState.colorSelected != this.state.colorSelected ) {
                return true
            } else {
                return false
            }
        } else {
            return true
        }
    }

    selectedSport(id, name = "") {
        let color = "";
        this.state.sports.map((sport) => {
            if (sport.id == id) {
                color = sport.color;
            }
        })

        this.props.selectedSport(id, name, color);
        this.setState({
            selected: id,
            colorSelected: color
        })
    }
    render() {
        return(
            <div>
            {
                this.state.sports.length > 0 ?


            <div>
            {
                this.state.type == "all" ?
                <div className="owl-carousel sport_classification_slider">
                    {
                        this.state.sports.map((sport, i)=> {
                            if (sport.status == true) {
                                return <div key={`${sport.id}-${i}`} className="item">
                                    <a className={`slider_content ${this.state.selected == sport.id? "selected": ""}  ${sport.color} selected-${i}`} onClick={(e) => {
                                        e.preventDefault();
                                        this.selectedSport(sport.id)
                                    }}>
                                        <img src={sport.uri} className="slider_img" alt={sport.name}/>

                                        <p className="title">{sport.name == "Football" ? "Soccer" : sport.name}</p>
                                    </a>

                                </div>
                            }
                    })

                    }


                </div>
                : ""
            }
                { this.state.type == "top" ?
                    <div className="owl-carousel sport_classification_slider">
                        {this.state.sports.map((sport,i)=>{
                        if(sport.status == true){
                            return <div key={`${sport.id}-${i}`} className="item" >
                                <a className={`slider_content ${this.state.selected == sport.id ?"selected":""}  ${sport.color} selected-${i}`} onClick={(e)=>{
                                    e.preventDefault();
                                    this.selectedSport(sport.id)
                                }}>
                                    <img src={sport.uri} className="slider_img" alt={sport.name}/>
                                    <p className="title">{sport.name == "Football" ? "Soccer" : sport.name}</p>
                                </a>
                            </div>
                        }
                        })
                        }

                    </div>
                    : ""

                }

                { this.state.type == "overview" ?
                    <div className="owl-carousel in-play-slider">
                        <div className="item" data-hash="soccer">
                            <a className={`slider_content ${this.state.selected == "favourites"? "selected": ""} selected-0`} data-sport="#favourites" onClick={(e) => {
                                e.preventDefault();
                                this.selectedSport("favourites", "Favourites")
                            }}>
                            <img src="/assets/img/favourities.svg" className="slider_img" alt="favourites"/>
                            <p className="title">Favourites</p>
                            </a>
                        </div>
                        {
                            this.state.sports.map((sport, i)=> {
                                if (sport.status == true) {
                                    return <div key={`${sport.id}-${i}`} className="item">
                                        <a className={`slider_content ${this.state.selected == sport.id? "selected": ""} ${sport.color}  selected-${i}`} onClick={(e) => {
                                            e.preventDefault();
                                            this.selectedSport(sport.id, sport.name)
                                        }}>
                                            <img  src={sport.uri} className="slider_img" alt={sport.name}/>

                                            <p className="title">{sport.name == "Football" ? "Soccer" : sport.name}</p>
                                        </a>

                                    </div>
                                }

                            })

                        }


                    </div>
                    : ""

                }
                { this.state.type == "schedule" ?
                    <div className="owl-carousel schedule_slider">
                        <div className="item">
                            <a className={`slider_content ${this.state.selected == "all"? "selected": ""} selected-0`} onClick={(e) => {
                                e.preventDefault();
                                this.selectedSport("all", "All Sports")
                            }}>
                                <p className="title">All Sports</p>
                            </a>
                        </div>
                        {
                            this.state.sports.map((sport, i)=> {
                                return <div key={`${sport.id}-${i}`} className="item">
                                    <a className={`slider_content ${this.state.selected == sport.id? "selected": ""} selected-${i}`} onClick={(e) => {
                                        e.preventDefault();
                                        this.selectedSport(sport.id, sport.name)
                                    }}>
                                        <p className="title">{sport.name == "Football" ? "Soccer" : sport.name}</p>
                                    </a>

                                </div>
                            })

                        }


                    </div>
                    : ""

                }
            </div>
                    : ""
            }
            </div>
        )

    }
}

export default Slider;
