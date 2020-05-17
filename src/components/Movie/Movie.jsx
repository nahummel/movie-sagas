import React, { Component } from 'react';
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class Movie extends Component {

    handleClick = () => {
        console.log('in handleClick:', this.props);
        this.props.dispatch({type: 'MOVIE_ID', payload: this.props.movie.id})
        this.props.dispatch({ type: 'storeMovie', payload0: this.props.movie.title, payload1: this.props.movie.description, payload2: this.props.movie.id})
        this.props.history.push('/details');
    }

    render() {
        return (
            <Card>
                <CardContent className="cardContent">
                    <img src={this.props.movie.poster} onClick={this.handleClick}/>
                    <h2>{this.props.movie.title}</h2>
                    <p>{this.props.movie.description}</p>
                </CardContent>
            </Card>
        )
    }
}

const putStateOnProps = (reduxState) => ({ reduxState });

export default connect(putStateOnProps)(Movie);