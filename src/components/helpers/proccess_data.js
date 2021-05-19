function getEventBySports(allEvents, fixtureId, sportId) {
    let eventObj = null;
     if (typeof allEvents === "object" && Object.keys(allEvents).length){
         // console.log(typeof allEvents[sportId], allEvents[sportId], allEvents, sportId)
         if(typeof allEvents[sportId] !== "undefined"){
             allEvents[sportId].map((el) => {
                 if(el.FixtureId == fixtureId){
                     eventObj = el
                 }
             })
         }
    }
     return eventObj;
}
export {getEventBySports}