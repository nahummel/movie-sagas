import React, { Component } from 'react';
import { connect } from 'react-redux'

class Movie extends Component {



    render() {
        return (
            <div>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => ({ reduxState });

export default connect(putStateOnProps)(Movie);