import React from 'react';
import Footer from "../../footer";
import GreyhoundsTable from "../../shared/tables/greyhounds";
import ImportantNote from "./partials/importantNote";
import moment from "moment/moment";
import {getFutureEvents} from "../../helpers/data";
import Slider from "../../shared/slider";
import {NavLink} from "react-router-dom";



class Schedule extends React.Component {
    constructor(props) {
        super(props);
        let objSports = this.changeFormat(this.props.allSports);
        this.state = {
            allSports: objSports,
            allEvents: {},
            selIdsport: 6046,
            tabName: "Soccer",
            odds: this.props.odds,
            selectedDay: moment().utc().format("dddd DD/MM"),
            selectedDayRequest: moment().utc().format("YYYY-MM-DD 00:00:00")
        }

    }
    componentWillReceiveProps(nextProps) {
        let objSports = this.changeFormat(this.props.allSports);

        this.setState({
            allSports: objSports,
            odds: nextProps.odds,
        })

    }

    componentDidMount() {
        this.getEvents()
        $('.scroll_block').mCustomScrollbar({
            axis: "y",
            theme: "minimal",
            scrollInertia: 550,
            scrollbarPosition: "inside"
        });


        // $(".slider_content").click(function(){
        //     $(".slider_content.selected").removeClass("selected");
        //     $(this).addClass("selected");
        //     $('.play_classification').addClass("invisible");
        //     $($(this).data('sport')).removeClass("invisible");
        // });

// schedule_slider select table
//         $(".slider_content").click(function(){
//             $(".slider_content.selected .title").removeClass("selected");
//             $(this).addClass("selected");
//         });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.selectedDay != this.state.selectedDay) {
            this.getEvents(this.state.selectedDayRequest)
        }
    }

    changeFormat(allSports) {
        let objSports = {};
        allSports.map((sp) => {
            objSports[sp.id] = sp.name;
        })
        return objSports
    }


    showListChannel=()=>{
        if ($('.channel_list').hasClass('show'))
            $('.channel_list').removeClass('show')
        else(
            $('.channel_list').addClass('show')
        )
    }

    getEvents = (curent = "") => {
        let dayCurrent = moment().utc().format('YYYY-MM-DD HH:mm:ss');

        let date_from =  curent != "" ? curent : dayCurrent;
        
        let date_to = curent != "" ? moment(date_from).format('YYYY-MM-DD 23:59:59') : moment().utc().format('YYYY-MM-DD  23:59:59');

        let sports = "";
        let limit = "";
        let markets = false;
        let only_home_market = false;
        getFutureEvents(this.state.odds, date_from, date_to, limit, sports, markets,  only_home_market, function(err, data) {
            if (!err) {
                console.log('future', data);
                this.setState({
                    allEvents: data
                })
            }
        }.bind(this))
    }


    selectedSport = (id, nameSport) => {
        let name = nameSport;
        if (id == 6046) {
            name = "Soccer";
        }

        this.setState({
            selIdsport: id,
            tabName: name
        })
    }

    selectEvent(event){

        this.props.setSelectedEventFromOtherPage(event);



        // window.localStorage.setItem("selectedEventId", fixtureId);
        // location.href = '//' + location.host + '/in-play?fixtureId=' + fixtureId;
    }

    changeDay = (tempDay, dayRequest) => {
        let dateNow = moment().utc().format('YYYY-MM-DD 00:00:00');
        let dayRequestq = moment().utc().format('YYYY-MM-DD HH:mm:ss');

        if(dayRequest === dateNow){
            this.setState({
                selectedDay: tempDay,
                selectedDayRequest: dayRequestq
            });
        } else {
            this.setState({
                selectedDay: tempDay,
                selectedDayRequest: dayRequest
            });
        }
        $('.schedule_data_list').removeClass('show');
    }

    dateWeek =  (currentDay) => {
        let week = [];
        for (let i = 0; i <= 6; i++ ) {
            let day = i;
            let tempDay = moment().utc().add(day, "day").format("dddd DD/MM");
            let dayRequestMidnight = moment().utc().add( day,'day').format('YYYY-MM-DD 00:00:00');

            week.push(<div key={`${i}-time`} className={`schedule_data_list_item ${tempDay == currentDay ? "selected" : ""}`}
                           onClick={() => {this.changeDay(tempDay, dayRequestMidnight)}}>{tempDay}</div>)}
        return week;
    }

    showListData=()=>{
        if ($('.schedule_data_list').hasClass('show'))
            $('.schedule_data_list').removeClass('show')
        else(
            $('.schedule_data_list').addClass('show')
        )
    }

    render() {
        return(
            <div id="schedule" className="scroll_block">
                {/*   <!--slider-block-->*/}
                <Slider type="schedule"  selectedSport={(id, name) => this.selectedSport(id, name) }/>
                <div className="schedule_table_wrapper">
                    <div className="play_results_header">
                        <div className="play_results_header_label play_results_header_data ">
                            <div className="DropDownContainer_Button" onClick={()=>this.showListData()}>
                                {this.state.selectedDay}
                            </div>
                            <div className="schedule_data_list">
                                {
                                    this.dateWeek(this.state.selectedDay)
                                }
                            </div>

                        </div>
                        <div className="play_results_header_label play_results_header_video">

                        </div>
                        <div className="play_results_header_label play_results_header_audio">

                        </div>
                        <div className="play_results_header_label play_results_header_time">
                            Time
                        </div>
                        <div className="play_results_header_label play_results_header_channel">
                            <div className="DropDownContainer_Button" onClick={()=>this.showListChannel()}>
                                Channel
                            </div>
                            <div className="channel_list">
                                <div className="channel_list_item selected">All</div>
                                <div className="channel_list_item">Live</div>
                                <div className="channel_list_item">Live at bet365</div>
                            </div>


                        </div>
                    </div>
                    {
                        Object.keys(this.state.allEvents).length ?
                            this.state.selIdsport != "all" ?

                                this.state.allEvents[this.state.selIdsport] != undefined  ?

                                    this.state.allEvents[this.state.selIdsport].map((event) => {
                                        return  <NavLink to="/sports/soccer/leagues/game"
                                                     className="event_row"
                                                     key={`${event.FixtureId}-${this.state.selIdsport}`}
                                                     onClick={() => this.selectEvent(event)}>

                                                <div className="event_row_item event_row_name">{`${event.Fixture.Participants[0].Name} v ${event.Fixture.Participants[1].Name}`}</div>
                                                <div className="event_row_item event_row_cat"></div>
                                                <div className="event_row_item event_row_video_icon"></div>
                                                <div className="event_row_item event_row_audio_icon"></div>
                                                <div className="event_row_item event_row_time">
                                                    {moment(moment.utc(event.Fixture.StartDate)).local().format("HH:mm")}
                                                </div>
                                                <div className="event_row_item event_row_channel">Live</div>


                                            </NavLink>
                                    })



                                :
                                    <div className="event_row"> <div className="no_events_schedule">Sorry, there are no events available for your chosen sport on this date</div></div>
                            :
                                Object.keys(this.state.allEvents).map((id) => {
                                   return this.state.allEvents[id].map((event) => {
                                        return  <NavLink to="/sports/soccer/leagues/game"
                                            className="event_row"
                                            key={`${event.FixtureId}-${this.state.selIdsport}-all`}
                                            onClick={() => this.selectEvent(event)}>

                                            <div className="event_row_item event_row_cat">{this.state.allSports[id]}</div>
                                            <div className="event_row_item event_row_name">{`${event.Fixture.Participants[0].Name} v ${event.Fixture.Participants[1].Name}`}</div>
                                            <div className="event_row_item event_row_video_icon"></div>
                                            <div className="event_row_item event_row_audio_icon"></div>
                                            <div className="event_row_item event_row_time">
                                                {moment(moment.utc(event.Fixture.StartDate)).local().format("HH:mm")}
                                            </div>
                                            <div className="event_row_item event_row_channel">Live</div>
                                        </NavLink>
                                    })
                                })
                        : ""

                    }

                </div>
                    <ImportantNote/>
                {this.props.footer}

            </div>
        )

    }
}

export default Schedule;
