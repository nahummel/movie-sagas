import React, { Component } from 'react';

import Genre from '../Genre/Genre'
import { connect } from 'react-redux'

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
                <h2>{this.props.reduxState.detailsReducer.title}</h2>
                <h2>Genre</h2>
                <ul>
                    {this.props.reduxState.genresReducer.map((genre) => {
                        return (
                            <Genre genre={genre} key={genre.name}/>
                        )
                    })}
                </ul>
                <h2>Description</h2>
                <p>{this.props.reduxState.detailsReducer.description}</p>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => ({ reduxState });

export default connect(putStateOnProps)(Details);