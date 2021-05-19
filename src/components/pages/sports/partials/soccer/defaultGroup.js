import React from 'react';

class DefaultGroup extends React.Component {

    changeMarkets(currentEvent, activeTab) {
        let markets = currentEvent.Markets;
        let newMarkets = [];
        markets.map((market) => {

            market.Groups.map((val) => {
                if (val.toLowerCase() == activeTab.toLowerCase()) {
                    newMarkets.push(market)
                }
            })
        })
        return newMarkets
    }

}

export default DefaultGroup;