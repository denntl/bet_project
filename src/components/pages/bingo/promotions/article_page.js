import React from 'react';

class ArticlePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
         <div>
             {this.props.content}
         </div>
        )

    }
}

export default ArticlePage;
