import React from 'react';




class HelperContactBtn extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div className="helper_contact_btn_wrapp">
                <div className="helper_contact_btn" onClick={()=>this.props.changeContent("contacts")}>Can't find an answer? Contact Us</div>
            </div>
        )

    }
}

export default HelperContactBtn;