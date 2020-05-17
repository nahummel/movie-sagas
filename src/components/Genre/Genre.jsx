import React, { Component } from 'react';
import { connect } from 'react-redux'

class Genre extends Component {


    render() {
        return (
            <div>
                <p>{this.props.genre.name}</p>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => ({ reduxState });

export default connect(putStateOnProps)(Genre);