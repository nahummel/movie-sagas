import React, { Component } from 'react';
import { connect } from 'react-redux';

import Movie from '../Movie/Movie'

class MovieList extends Component {
    
    componentDidMount(){
        this.props.dispatch({type:"GETMOVIES"})
    }

    render() {
        console.log(this.props.reduxState.moviesReducer)
        return (
            <div>
                <ul>
                    {this.props.reduxState.moviesReducer.map((movie) => {
                        return(
                            <Movie movie={movie} />
                        )
                    })}
                </ul>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => ({ reduxState });

export default connect(putStateOnProps)(MovieList);