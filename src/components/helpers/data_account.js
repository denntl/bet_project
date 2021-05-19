import axios from 'axios';

const DOMAIN = "https://bet-adm-new.it-office.pp.ua/";

function getCountry(cb) {
    let options = {
        method: 'get',
        url: DOMAIN + `api/get-countries`
    };

    axios(options).then(function(response) {
        cb(null, response.data)
    }).catch(function (err) {
        cb(err, null);
    })
}
function getTimezone(cb) {
    let options = {
        method: 'get',
        url: DOMAIN + `api/get-timezones`
    };

    axios(options).then(function(response) {
        cb(null, response.data)
    }).catch(function (err) {
        cb(err, null);
    })
}
function isUsernameUnique(name, cb) {
    axios.post(DOMAIN + `api-player/is-username-unique`, {
        username: name
    }).then(function(response) {
        cb(null, response.data)
    }).catch(function (err) {
        cb(err, null);
    })
}
function isEmailUnique(email, cb) {

    axios.post(DOMAIN + `api-player/is-email-unique`, {
        email: email
    }).then(function(response) {
        cb(null, response.data)
    }).catch(function (err) {
        cb(err, null);
    })
}

function validateSecCode(code, cb) {

    axios.post(DOMAIN + `api-player/validate-security-code`, {
        code: code
    }).then(function(response) {
        cb(null, response.data)
    }).catch(function (err) {
        cb(err, null);
    })
}
function registration(options, cb) {

    axios.post(DOMAIN + `api-player/register`, options).then(function(response) {
        cb(null, response.data)
    }).catch(function (err) {
        cb(err, null);
    })
}

function getProfile(token, cb) {
    let options = {
        method: 'get',
        url: DOMAIN + `api-player/get-profile`,
        params: {
            token: token
        }
    };

    axios(options).then(function(response) {

        cb(null, response.data)
    }).catch(function (err) {
        cb(err, null);
    })
}
function getlanguage(cb) {
    let options = {
        method: 'get',
        url: DOMAIN + `api/get-languages`
    };

    axios(options).then(function(response) {
        cb(null, response.data)
    }).catch(function (err) {
        cb(err, null);
    })
}
function getInactivityTime(cb) {
    let options = {
        method: 'get',
        url: DOMAIN + `api/get-inactivity-times`
    };

    axios(options).then(function(response) {
        cb(null, response.data)
    }).catch(function (err) {
        cb(err, null);
    })
}
function getBettingOpt(cb) {
    let options = {
        method: 'get',
        url: DOMAIN + `api/get-betting-options`
    };

    axios(options).then(function(response) {
        cb(null, response.data)
    }).catch(function (err) {
        cb(err, null);
    })
}

function loginRequest(email, password, cb) {
    axios.post(DOMAIN + `api-player/login`, {
        email: email,
        password: password
    }).then(function(response) {
        cb(null, response.data)
    }).catch(function (err) {
        cb(err, null);
    })
}

function updateLanguage(token, language, cb) {
    axios.post(DOMAIN + `api-player/language-update`, {
        token: token,
        language: language
    }).then(function(response) {
        cb(null, response.data)
    }).catch(function (err) {
        cb(err, null);
    })
}

function updateTimezone(token, timezone, cb) {
    axios.post(DOMAIN + `api-player/timezone-update`, {
        token: token,
        timezone: timezone
    }).then(function(response) {
        cb(null, response.data)
    }).catch(function (err) {
        cb(err, null);
    })
}

function updatePreferencesGeneral(token, language, timezone, betting_options, inactivity_time_max_minutes, cb) {
    axios.post(DOMAIN + `api-player/preferences-general-update`, {
        token: token,
        language: language,
        timezone: timezone,
        betting_options: betting_options,
        inactivity_time_max_minutes: inactivity_time_max_minutes
    }).then(function(response) {
        cb(null, response.data)
    }).catch(function (err) {
        cb(err, null);
    })
}

function updateOddsFormat(token, odds_format, cb) {
    axios.post(DOMAIN + `api-player/odds-format-update`, {
        token: token,
        odds_format: odds_format
    }).then(function(response) {
        cb(null, response.data)
    }).catch(function (err) {
        cb(err, null);
    })
}

function updateInactivityTime(token, inactivity_time, cb) {
    // console.log(inactivity_time)
    axios.post(DOMAIN + `api-player/inactivity-time-update`, {
        token: token,
        inactivity_time_max_minutes: inactivity_time
    }).then(function(response) {
        cb(null, response.data)
    }).catch(function (err) {
        cb(err, null);
    })
}

function updateContactDetails(token, arr, cb) {
    axios.post(DOMAIN + `api-player/contact-details-update`, {
        token: token,
        nickname: arr.nickname,
        email: arr.email,
        phone: arr.phone,
        password: arr.password
    }).then(function(response) {
        cb(null, response.data)
    }).catch(function (err) {
        cb(err, null);
    })
}
function updateAddress(token, arr, cb) {
    axios.post(DOMAIN + `api-player/address-update`, {
        token: token,
        address_building_number: arr.address_building_number,
        address_unit_number: arr.address_unit_number,
        address_street: arr.address_street,
        address_postcode: arr.address_postcode,
        city: arr.city,
        state: arr.state,
        password: arr.password
    }).then(function(response) {
        cb(null, response.data)
    }).catch(function (err) {
        cb(err, null);
    })
}
function updatePassword(token, arr, cb) {
    axios.post(DOMAIN + `api-player/password-update`, {
        token: token,
        password_new: arr.new_conf_password,
        password: arr.password
    }).then(function(response) {
        cb(null, response.data)
    }).catch(function (err) {
        cb(err, null);
    })
}

function cashoutBet(isMultiple, id, token, cb) {
    // console.log('cashoutBetRequest', id, token);

    let url = DOMAIN + `api-player/cashout-bet?id=`;

    axios.post(url + id, {
        token: token
    }).then(function(response) {
        cb(null, response.data)
    }).catch(function (err) {
        cb(err, null);
    })
}

function updateSecurCode(token, arr, cb) {
    axios.post(DOMAIN + `api-player/security-code-update`, {
        token: token,
        security_code_new: arr.security_code_new,
        security_code: arr.security_code
    }).then(function(response) {
        cb(null, response.data)
    }).catch(function (err) {
        cb(err, null);
    })
}

function updatePreferencesNotifications(options, cb) {
    axios.post(DOMAIN + `api-player/preferences-notifications-update`, options).then(function(response) {
        cb(null, response.data)
    }).catch(function (err) {
        cb(err, null);
    })
}
function getBetsHistory(token, obj, cb) {

    let options = {
        method: 'get',
        url: DOMAIN + `api-player/get-bets-history`,
        params: {
            token: token,
            history_type: obj.history_type,
             period_type: typeof obj.period_type != "undefined" ? obj.period_type : "",
             date_from: typeof obj.date_from != "undefined" ? obj.date_from : "",
             date_to: typeof obj.date_to != "undefined" ? obj.date_to : "",
            limit:  typeof obj.limit != "undefined" ? obj.limit : "",
            offset:  typeof obj.offset != "undefined" ? obj.offset : ""
        }
    };

    axios(options).then(function(response) {
        cb(null, response.data)
    }).catch(function (err) {
        cb(err, null);
    })
}
function getBalance(token, cb) {

    let options = {
        method: 'get',
        url: DOMAIN + `api-player/get-balance`,
        params: {
            token: token
        }
    };

    axios(options).then(function(response) {
        cb(null, response.data)
    }).catch(function (err) {
        cb(err, null);
    })
}
function getCasinoTypes(token, cb) {

    let options = {
        method: 'get',
        url: DOMAIN + `api/get-casino-types`,
            // params: {
            //     token: token
            // }
    };

    axios(options).then(function(response) {
        cb(null, response.data)
    }).catch(function (err) {
        cb(err, null);
    })
}
function postTransferBalance(options, cb) {
    let url = DOMAIN + `api-player/transfer-balance-to-friend`;
    axios.post(url, options).then(function(response) {
        cb(null, response.data)
    }).catch(function (err) {
        cb(err, null);
    })
}

function postBalance(options, cb) {
    let url = DOMAIN + `/api-player/transfer-balance`;
    axios.post(url, options).then(function(response) {
        cb(null, response.data)
        console.log("success", response.data)
    }).catch(function (err) {
        cb(err, null);
    })
}

function getCasinoList(token, type, cb) {

    let options = {
        method: 'get',
        url: DOMAIN + `api/get-casino-list`,
        params: {
            token: token,
            type: type
        }
    };

    axios(options).then(function(response) {
        cb(null, response.data)
    }).catch(function (err) {
        cb(err, null);
    })
}

function getDOMAIN(){
    return DOMAIN;
}
export {
    postTransferBalance,
    getCountry,
    getTimezone,
    isUsernameUnique,
    isEmailUnique,
    validateSecCode,
    registration,
    getProfile,
    getlanguage,
    getInactivityTime,
    getBettingOpt,
    loginRequest,
    postBalance,
    updateLanguage,
    updateTimezone,
    updateOddsFormat,
    updateInactivityTime,
    updateContactDetails,
    updatePreferencesGeneral,
    updatePreferencesNotifications,
    updateAddress,
    updatePassword,
    updateSecurCode,
    getBetsHistory,
    cashoutBet,
    getBalance,
    getCasinoTypes,
    getCasinoList,
    getDOMAIN
}