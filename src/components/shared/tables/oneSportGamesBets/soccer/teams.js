import React from 'react';
import InputRange from "../../../inputRange";
import moment from "moment";
import ManagMatch from "../../../../pages/in_play/partials/managMatch";


class Teams extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time:Date.now(),
            teams: this.props.teams,
            activeSlide: 0,
            currentEvents: this.props.currentEvents,
            currentTeamEvents: [],
            sportId: this.props.sportId,
        }
        this.state.activeTeam = this.firstActiveTeam(this.props.teams);
    }

    componentWillReceiveProps(nextProps) {

            this.setState({
                time:Date.now(),
                teams: nextProps.teams,
                activeTeam: this.firstActiveTeam(nextProps.teams),
                currentEvents: nextProps.currentEvents,
                sportId: nextProps.sportId,
            })

    }


    componentWillUpdate() {
        $('.TeamNavBar_HScroll').trigger('destroy.owl.carousel');
    }

    componentDidMount() {
        this.createCurTeamEvents();

        $('.TeamNavBar_HScroll').owlCarousel({
            items:1,
            margin: 2,
            autoWidth:true,
            nav: true
        });

        $('.OthersOnRequest_Link').on('click', function () {
            $(this).parent().find('.OthersOnRequestAlert').addClass('OthersOnRequestAlert-visible');
            setTimeout(function(){
                $('.OthersOnRequestAlert.OthersOnRequestAlert-visible').removeClass('OthersOnRequestAlert-visible');
            }, 5000);
        });
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.activeTeam != prevState.activeTeam) {
            this.createCurTeamEvents();
        }
        $('.TeamNavBar_HScroll').owlCarousel({
            items:1,
            margin: 2,
            autoWidth:true,
            nav: true
        });
    }

    createCurTeamEvents = () => {
        //console.log("@@@@@@@@@@@@", this.state.teams)
        let newArray = [];

        if(this.state.teams != null && typeof this.state.teams == 'object' && Object.keys(this.state.teams).length) {
            this.state.teams[this.state.activeTeam].events.map((event) => {
                Object.keys(this.state.currentEvents[event.Date]).map((key) => {
                    if(this.state.currentEvents[event.Date][key].FixtureId == event.FixtureId){
                        newArray.push(this.state.currentEvents[event.Date][key])
                    }
                });
            })
        }

        this.setState({
            currentTeamEvents: newArray
        })
    }

    firstActiveTeam = (teams) => {
        let activeTeam;
        if(teams != null && typeof teams == 'object' && Object.keys(teams).length) {
            Object.keys(teams).map((id, ind) => {
                if (ind === this.state.activeSlide) {
                    activeTeam = id
                }
            })
        }
        return activeTeam
    }
    changeActiveTeam = (e, index) => {
        $(".item.TeamNavBarButtonBase.active").removeClass("active")
        $(`#${index}-teams-header-slide`).addClass("active")
        this.setState({
            activeSlide: index
        })
    }

    toggleEventDate(id) {
        if ($('.content_markets.'+ id).hasClass("none")) {
            $('.content_markets.'+ id).removeClass("none")
        } else {
            $('.content_markets.'+ id).addClass("none")
        }
    }

    render() {
        return(
            <section id="Teams_panel" className="" >
                <div className="MarketGroupTeamBetting_NavContainer ">
                    <div className="TeamNavBar ">


                        <div className="TeamNavBar_HScroll owl-carousel owl-theme  nav nav-tabs" role="tablist">
                            {
                                this.state.teams != null && typeof this.state.teams == 'object' && Object.keys(this.state.teams).length  ?
                                    Object.keys(this.state.teams).map((id, index) => {
                                        return  <div id = {`${index}-teams-header-slide`} className={`item TeamNavBarButtonBase ${this.state.activeTeam == id ? "active" : ""}`} key={`${index}-team`}  onClick={(e) => this.changeActiveTeam(e,index)}>
                                            <a href="javascript:void(0)">
                                                <div className="TeamNavBarButtonBase_TeamWrapper ">
                                                    <div className="TeamNavBarButtonBase_TeamStrip ">
                                                        <div className="TeamKitsLarge "><img src="/img/teams/Arsenal.svg" alt={this.state.teams[id].Name} /></div>
                                                    </div>
                                                </div>
                                                <div className="TeamNavBarButtonBase_TeamName ">{this.state.teams[id].Name}</div>
                                            </a>
                                            <div className="TeamNavBarButtonBase_InfoButton "></div>
                                            <div className="TeamNavBarButtonWithFavourites_FavouriteButton "></div>
                                        </div>
                                    }) : ''
                            }
                        </div>


                    </div>
                    <div  className="content tab-content clearfix">

                        <section id="Teams-Bournemouth-panel">
                            {
                                this.state.currentTeamEvents.map((event) => {
                                    // console.log('@@@@@@@@', event)
                                   return <div key={event.FixtureId}>
                                        <div className="ClosableMarketGrid_Button " onClick={() => this.toggleEventDate(event.FixtureId)}>
                                            <div className="ClosableMarketGrid_Name ">{`${event.Fixture.Participants[0].Name} v ${event.Fixture.Participants[1].Name}`}</div>
                                            <div className="ClosableMarketGrid_Icons ">
                                                <div className="ClosableMarketGrid_IconsAudioAvailable ClosableMarketGrid_IconsGeneric "></div>
                                            </div>
                                            <div className="ClosableMarketGrid_BookCloses ">
                                                {moment(moment.utc(event.Fixture.StartDate)).local().format("DD MMM HH:mm")}
                                            </div>
                                        </div>

                                        <div className={`content_markets ${event.FixtureId}`}>
                                            <ManagMatch
                                                typeSport={this.state.sportId}
                                                participants={event.Fixture.Participants}
                                                markets={event.Markets}
                                                eventId={event.FixtureId}
                                                fromPage="eventView"
                                                currentMarket={false}
                                                fromEventView={true}
                                                addToBetSlip={(info, bet, typeBet) => this.props.addToBetSlip(info, bet, typeBet)}
                                            />
                                        </div>
                                    </div>
                                })
                            }

                        </section>


                    </div>
                </div>
            </section>
        )

    }
}

export default Teams;
