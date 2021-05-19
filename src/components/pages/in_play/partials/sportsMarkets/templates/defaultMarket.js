import React from 'react';

class DefaultMarket extends React.Component {
    toggleMarket=(id)=>{
        if (
            $('.'+ id + "-market").hasClass('hidden')
            )
        {
            $('.'+ id + "-market").removeClass('hidden').slideDown(250)
        } else {
            $('.'+ id + "-market").addClass('hidden').slideUp(250)
        }
    }
    toggleAlternativeMarket=(id)=>{
        if (

            $('.'+ id + "-alternative-market").hasClass('hidden')
        )
        {

            $('.'+ id + "-alternative-market").removeClass('hidden').slideDown(250)
        } else {

            $('.'+ id + "-alternative-market").addClass('hidden').slideUp(250)
        }
    }
}
export default DefaultMarket;