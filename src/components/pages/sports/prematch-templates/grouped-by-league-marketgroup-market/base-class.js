import React from 'react';
import moment from "moment";
import {
    getEvent,
    getEventsGroupedByLeagueDate,
    getEventsGroupedByLeagueMarketGroupMarket,
    getEventsGroupedByLeagueMarketgroup
} from "../../../../helpers/data";

class BaseClass extends React.Component {

    fetchLeaguesData = () => {
        if(this.fetchLeaguesInterval){
            clearInterval(this.fetchLeaguesInterval);
        }
        this.fetchLeaguesDataRequest();
        this.fetchLeaguesInterval = setInterval(() => {
            this.fetchLeaguesDataRequest();
        }, 5000);
    }

    fetchLeaguesDataRequest = () => {
        getEventsGroupedByLeagueMarketGroupMarket(
            this.state.oddsType,
            ...this.getRequestPeriod(),
            this.state.sportId,
            false,
            (err, data) => {
                if (!err) {
                    this.setState({
                        leaguesData: data,
                        //singleLeagueData:   null
                    })
                    /** чистить другие стэйты? **/
                } else {
                    console.log('error', err)
                }
            },
            false//true
        )
    }
    
    fetchFixtureAndSingleLeagueData = (fixtureId, leagueName, leagueId, marketName, marketId) => {
        this.setState({
            currentLeagueName: leagueName,
            currentLeagueId: leagueId,
            currentMarketName: marketName,
            currentMarketId: marketId,
        }, () => {
            getEvent(this.state.oddsType, fixtureId, function (err, eventData) {
                if (!err) {
                    getEventsGroupedByLeagueMarketgroup(
                        null,
                        ...this.getRequestPeriod(),
                        this.state.sportId,
                        this.state.currentMarketId,
                        this.state.oddsType,
                        (err, data) => {
                            if (!err) {
                                if(typeof data.activeTab === 'undefined'){
                                    let firstMarket = this.getFirstMarket(data.markets);
                                    this.changeCurrentMarket(firstMarket.id, firstMarket.alias ? firstMarket.alias : firstMarket.name);
                                } else {
                                    this.setState({
                                        /** Event date **/
                                        currentFixtureData: eventData,
                                        currentFixtureId: eventData.FixtureId,
                                        currentFixtureName: eventData.Fixture.Participants[0].Name +
                                            (this.state.currentLeagueId == 64 ? ' @ ' : ' VS ')
                                                + eventData.Fixture.Participants[1].Name,
                                        /** Single League Data **/
                                        singleLeagueData: data.events instanceof Array ? [] :
                                            data.events[this.state.currentLeagueId].events,
                                        singleLeagueRenderType: data.renderType,
                                        currentLeagueMarkets: data.markets,
                                        activeSingleLeagueTab: data.activeTab ? data.activeTab : '',
                                        singleLeagueTabsList: data.mainGroups
                                        //leaguesData: null
                                        /** чистить другие стэйты? **/
                                    }, () => {
                                        setTimeout(() => {
                                            this.fetchSingleLeagueData();
                                            this.fetchFixtureData(this.state.currentFixtureId);
                                        }, 5000);
                                    });
                                }
                            } else {
                                console.log(err)
                            }
                        },
                        this.state.currentLeagueId,
                        false//true
                    );
                }
            }.bind(this));
        });
    }

    fetchSingleLeagueData = () => {
        if(this.fetchSingleLeagueInterval){
            clearInterval(this.fetchSingleLeagueInterval);
        }
        this.fetchSingleLeagueDataRequest();
        this.fetchSingleLeagueInterval = setInterval(() => {
            if (this.state.currentLeagueId) {
                this.fetchSingleLeagueDataRequest();
            } else {
                clearInterval(this.fetchSingleLeagueInterval);
            }
        }, 5000);
    }

    fetchFixtureData = (fixtureId) => {
        if(this.fetchFixtureDataInterval){
            clearInterval(this.fetchFixtureDataInterval);
        }
        this.fetchFixtureDataRequest(fixtureId);
        this.fetchFixtureDataInterval = setInterval(() => {
            if (this.state.currentFixtureId) {
                this.fetchFixtureDataRequest(this.state.currentFixtureId);
            } else {
                clearInterval(this.fetchFixtureDataInterval);
            }
        }, 5000);
    }

    fetchFixtureDataRequest = (fixtureId) => {
        getEvent(this.state.oddsType, fixtureId, function (err, data) {
            if (!err) {
                this.setState({
                    currentFixtureData: data,
                    currentFixtureId: data.FixtureId,
                    currentFixtureName: data.Fixture.Participants[0].Name +
                        (this.state.currentLeagueId == 64 ? ' @ ' : ' VS ')
                        + data.Fixture.Participants[1].Name
                })
            }
        }.bind(this));
    }

    getFirstMarket(markets){
        if(markets !== null && typeof markets === 'object'){
            let firstTabName = Object.keys(markets)[0];
            if(firstTabName && typeof markets[firstTabName][0] === 'object'){

                return markets[firstTabName][0];
            }
        }

        return null;
    }

    fetchSingleLeagueDataRequest = () => {
        getEventsGroupedByLeagueMarketgroup(
            null,
            ...this.getRequestPeriod(),
            this.state.sportId,
            this.state.currentMarketId,
            this.state.oddsType,
            (err, data) => {
                if (!err) {

                    if(typeof data.activeTab === 'undefined'){
                        let firstMarket = this.getFirstMarket(data.markets);
                        this.changeCurrentMarket(firstMarket.id, firstMarket.alias ? firstMarket.alias : firstMarket.name);
                    } else {
                        this.setState({
                            singleLeagueData: data.events instanceof Array ? [] :
                                data.events[this.state.currentLeagueId].events,
                            singleLeagueRenderType: data.renderType,
                            currentLeagueMarkets: data.markets,
                            activeSingleLeagueTab: data.activeTab ? data.activeTab : '',
                            singleLeagueTabsList: data.mainGroups
                            //leaguesData: null
                            /** чистить другие стэйты? **/
                        });
                    }
                } else {
                    console.log(err)
                }
            },
            this.state.currentLeagueId,
            false//true
        );
    }

    getRequestPeriod = () => {
        let dateFrom = moment().utc().subtract(12, 'hours').format('YYYY-MM-DD HH:mm:ss'),
            dateTo = this.state.activePeriodFilter == '24' ?
                moment.utc().add(1,'days').format('YYYY-MM-DD HH:mm:ss') :
                moment.utc().add(1,'year').format('YYYY-MM-DD HH:mm:ss');

        return [dateFrom, dateTo];
    }
}

export default BaseClass;
