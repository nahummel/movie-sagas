import React, { Component } from 'react';
import { connect } from 'react-redux'

class Movie extends Component {



    render() {
        return (
            <div>
                <img src={this.props.movie.poster}/>
                <h2>{this.props.movie.title}</h2>
                <p>{this.props.movie.description}</p>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => ({ reduxState });

export default connect(putStateOnProps)(Movie);