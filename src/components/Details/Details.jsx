import React, { Component } from 'react';

class Details extends Component {

    handleClick = () => {
        this.props.history.push('/')
    } 

    render() {
        return (
            <div>
                <h1>Details</h1>
                <button onClick={this.handleClick}>Back</button>
                <button>Edit</button>
            </div>
        )
    }
}

export default Details;