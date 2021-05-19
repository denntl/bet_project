import React from 'react';



class PopUpWait extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div id="pop_up_wait" className="preloader_wait" role="dialog">
                <div className="wait_icon"/>
                <div className="wait_text">Please Wait</div>
            </div>
        )

    }
}

export default PopUpWait;