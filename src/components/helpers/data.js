import axios from 'axios';

const DOMAIN = "https://bet-adm-new.it-office.pp.ua/";

function getSports(lang = "", cb) {
    let options = {
        method: 'get',
        url: DOMAIN + `api/get-sports`
    };

    axios(options).then(function(response) {
        cb(null, response.data);

        var allSports =  response.data.sort((a,b) => {
            if (a.id < b.id) {
                return -1;
            } else if (a.id > b.id)  {
                return 1;
            }
        });

    }).catch(function (err) {
        cb(err, null);
    })
}
function getLeagueTableData(leagueId, cb) {
    let options = {
        method: 'get',
        url: DOMAIN + `api/get-league-table-by-league`,
        params: {
            league_id: leagueId
        }
    };

    axios(options).then(function(response) {
        cb(null, response.data);

    }).catch(function (err) {
        cb(err, null);
    })
}
function getMarkets(params, cb) {
    let options = {
        method: 'get',
        url: DOMAIN + `api/get-markets`,
        params: params
    };

    axios(options).then(function(response) {
        cb(null, response.data);

    }).catch(function (err) {
        cb(err, null);
    })
}
function getLeagues(id, cb) {
    let options = {
        method: 'get',
        url: DOMAIN + `api/get-leagues`,
        params: {
            sport_ids: id
        }
    };

    axios(options).then(function(response) {
        cb(null, response.data);

    }).catch(function (err) {
        cb(err, null);
    })
}
function getLocation(cb) {
    let options = {
        method: 'get',
        url: DOMAIN + `api/get-locations`
    };

    axios(options).then(function(response) {
        cb(null, response.data);

    }).catch(function (err) {
        cb(err, null);
    })
}

function getEvents(type, cb, status = '') {
    let options = {
        method: 'get',
        url: DOMAIN + `api/get-events-grouped-by-sport`,
        params: {
            bet_price_type: type,
            // sport_ids: '6046',
            status: status,
            order_by_league: true
        }
    };

    axios(options).then(function(response) {
        cb(null, response.data.events)

    }).catch(function (err) {
        cb(err, null);
    })
}

function getEventsLivescore(id, cb) {
    let options = {
        method: 'get',
        url: DOMAIN + `api/get-event-livescores`,
        params: {
            fixture_ids: id,
        }
    };

    axios(options).then(function(response) {
        cb(null, response.data)
    }).catch(function (err) {
        cb(err, null);
    })
}

function getEvent(type, fixture_id,  cb) {
    let options = {
        method: 'get',
        url: DOMAIN + `api/get-event-details`,
        params: {
            bet_price_type: type,
            fixture_id: fixture_id
        }
    };

    axios(options).then(function(response) {
        cb(null, response.data.event)

    }).catch(function (err) {
        cb(err, null);
    })
}

function getFutureEvents(type, date_from, date_to, limit, sports, markets, only_home_market, cb) {

    if (markets === false) {
        markets = false
    }

    let options = {
        method: 'get',
        url: DOMAIN + `api/get-events-grouped-by-sport`,
        params: {
           date_from: date_from,  //вернуть когда появятся лимиты
           date_to: date_to,
            sport_ids: sports,
            limit: limit,
            bet_price_type: type,
            include_markets: markets,
            only_home_market: only_home_market
        }
    };

    axios(options).then(function(response) {
        cb(null, response.data.events)
    }).catch(function (err) {
        cb(err, null);
    })
}
function getFutureEventsHighlights(bet_price_type, status = 1 , show_in_highlights = true, only_home_market = true, limit = 1, cb) {
    let options = {
        method: 'get',
        url: DOMAIN + `api/get-events-grouped-by-sport`,
        params: {
            bet_price_type: bet_price_type,  //вернуть когда появятся лимиты
            status: status,
            show_in_highlights: show_in_highlights,
            only_home_market: only_home_market,
            limit: limit,
            order_by_league: true
        }
    };

    axios(options).then(function(response) {
        cb(null, response.data.events)
    }).catch(function (err) {
        cb(err, null);
    })
}

function getEventsGroupedByColumn(type, markets, column, cb) {

    if (markets === false) {
        markets = false
    }

    let options = {
        method: 'get',
        url: DOMAIN + `api/get-events-grouped-by-column`,
        params: {
            column: column,
            bet_price_type: type,
            include_markets: markets,
        }
    };

    axios(options).then(function(response) {
        cb(null, response.data.events)
    }).catch(function (err) {
        cb(err, null);
    })
}

function getEventsGroupedByLeagueDate(location_ids, date_from, date_to, sports, only_market_id, type, cb, league_ids, only_two_three_columns = false){

    let options = {
        method: 'get',
        url: DOMAIN + `api/get-events-grouped-by-league-date`,
        params: {
            date_from: date_from,
            date_to: date_to,
            sport_ids: sports,
            bet_price_type: type,
            only_market_id: only_market_id,
            league_ids: league_ids,
            only_two_three_columns: only_two_three_columns
        }
    };

    if(location_ids != null){
        options['params']['location_ids'] = location_ids;
    }

    axios(options).then(function(response) {
        cb(null, response.data)
    }).catch(function (err) {
        cb(err, null);
    })
}

function getEventsGroupedByLeagueMarketgroup(location_ids, date_from, date_to, sports, only_market_id, type, cb, league_ids, only_two_three_columns = false, by_date = true){
    let options = {
        method: 'get',
        url: DOMAIN + `api/get-events-grouped-by-league-marketgroup`,
        params: {
            date_from: date_from,
            date_to: date_to,
            sport_ids: sports,
            bet_price_type: type,
            only_market_id: only_market_id,
            league_ids: league_ids,
            only_two_three_columns: only_two_three_columns,
            by_date: by_date
        }
    };

    if(location_ids != null){
        options['params']['location_ids'] = location_ids;
    }

    axios(options).then(function(response) {
        cb(null, response.data)
    }).catch(function (err) {
        cb(err, null);
    })
}

function getEventsGrouped(type, date_from, date_to, sports, markets, cb) {

    if (markets === false) {
        markets = false
    }

    let options = {
        method: 'get',
        url: DOMAIN + `api/get-events-grouped-by-market-custom-location-league`,
        params: {
            date_from: date_from,
            date_to: date_to,
            sport_ids: sports,
            bet_price_type: type,
            include_markets: markets
        }
    };

    axios(options).then(function(response) {
        cb(null, response.data)
    }).catch(function (err) {
        cb(err, null);
    })
}

function getEventsGroupedByLeagueMarketGroupMarket(type, date_from, date_to, sports, include_markets = false, cb, only_two_three_columns = false) {

    let options = {
        method: 'get',
        url: DOMAIN + `api/get-events-grouped-by-league-marketgroup-market`,
        params: {
            date_from: date_from,
            date_to: date_to,
            sport_ids: sports,
            bet_price_type: type,
            include_markets: include_markets,
            only_two_three_columns: only_two_three_columns
        }
    };

    axios(options).then(function(response) {
        cb(null, response.data)
    }).catch(function (err) {
        cb(err, null);
    })
}

function getEventsGroupedByMarket(params, cb) {

    let options = {
        method: 'get',
        url: DOMAIN + `api/get-events-by-market`,
        params: params
    };

    axios(options).then(function(response) {
        cb(null, response.data)
    }).catch(function (err) {
        cb(err, null);
    })
}

function getEventsGroupedbyDate(params, cb) {

    let options = {
        method: 'get',
        url: DOMAIN + `api/get-events-grouped-by-date`,
        params: params
    };

    axios(options).then(function(response) {
        cb(null, response.data)
    }).catch(function (err) {
        cb(err, null);
    })
}

function getRestorePasswordStep1(options, cb) {
    let url = DOMAIN + `api-player/password-restore`;
    axios.post(url, options).then(function(response) {
        cb(null, response.data)
    }).catch(function (err) {
        cb(err, null);
    })
}

function getRestorePasswordStep2(options, cb) {
    let url = DOMAIN + `api-player/set-password`;
    axios.post(url, options).then(function(response) {
        cb(null, response.data)
    }).catch(function (err) {
        cb(err, null);
    })
}

function placeBet(arr, cb) {
    console.log("arrrrrrrrrrrrrrr", arr)
    let url = DOMAIN + `api-player/set-bet`;
    axios.post(url, arr).then(function(response) {
        // console.log('save place bet', response)
        cb(null, response.data)
    }).catch(function (err) {
        console.log('save place bet err', err)
        cb(err, null);
    })
}

function getCheckBets(bet_ids, cb) {
    let options = {
        method: 'get',
        url: DOMAIN + `api-player/check-bets`,
        params: {
            bet_ids: bet_ids,
        }
    };

    axios(options).then(function(response) {
        cb(null, response.data);

    }).catch(function (err) {
        cb(err, null);
    })
}


export {
    getFutureEventsHighlights,
    getCheckBets, getSports,
    getMarkets,
    getEventsLivescore,
    getLeagues,
    getEvent,
    getEventsGroupedByLeagueDate,
    getEventsGroupedByMarket,
    getEventsGroupedByLeagueMarketGroupMarket,
    getLocation,
    getEventsGroupedByLeagueMarketgroup,
    getEvents,
    getFutureEvents,
    getEventsGroupedByColumn,
    getEventsGrouped,
    getEventsGroupedbyDate,
    getRestorePasswordStep1,
    getRestorePasswordStep2,
    placeBet,
    getLeagueTableData}