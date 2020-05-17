import React, { Component } from 'react';
import { connect } from 'react-redux'

import Genre from '../Genre/Genre'


class Details extends Component {

    handleBack = () => {
        this.props.history.push('/');
    } 

    handleEdit = () => {
        this.props.history.push('/edit');
    }

    render() {
        return (
            <div>
                <h1>Details</h1>
                <button onClick={this.handleBack}>Back</button>
                <button onClick={this.handleEdit}>Edit</button>
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