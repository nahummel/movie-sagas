import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

import Genre from '../Genre/Genre'
import { lightBlue } from '@material-ui/core/colors';


class Details extends Component {

    handleBack = () => {
        this.props.history.push('/');
    } 

    handleEdit = () => {
        this.props.history.push('/edit');
    }

    render() {
        return (
            <div className="details">
                <h1>Details</h1>
                <Button onClick={this.handleBack} variant="contained" size="large" style={{ marginRight: 10}}>Back</Button>
                <Button onClick={this.handleEdit} variant="contained" size="large">Edit</Button>
                <h2 className="title">{this.props.reduxState.detailsReducer.title}</h2>
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