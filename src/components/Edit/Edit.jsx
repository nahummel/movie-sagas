import React, { Component } from 'react';
import { connect } from 'react-redux'

class Edit extends Component {

    render() {
        return (
            <div>
                <button>Cancel</button>
                <button>Save</button>
                <input type="text" placeholder="Title"></input>
                <input type="text" placeholder="Description"></input>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => ({ reduxState });

export default connect(putStateOnProps)(Edit);