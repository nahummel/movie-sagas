import React, { Component } from 'react';
import { connect } from 'react-redux'

class Movie extends Component {

    handleClick = () => {
        console.log('in handleClick:', this.props);
        this.props.history.push('/details');
    }

    render() {
        return (
            <div>
                <img src={this.props.movie.poster} onClick={this.handleClick}/>
                <h2>{this.props.movie.title}</h2>
                <p>{this.props.movie.description}</p>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => ({ reduxState });

export default connect(putStateOnProps)(Movie);