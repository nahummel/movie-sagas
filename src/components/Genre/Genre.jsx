import React, { Component } from 'react';
import { connect } from 'react-redux'

class Genre extends Component {


    render() {
        return (
            <div>
                <li>{this.props.genre.name}</li>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => ({ reduxState });

export default connect(putStateOnProps)(Genre);