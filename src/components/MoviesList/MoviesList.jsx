import React, { Component } from 'react';
import { connect } from 'react-redux';

import Movie from '../Movie/Movie'

class MovieList extends Component {
    
    componentDidMount(){
        this.props.dispatch({type:"GETMOVIES"})
    }

    render() {
        return (
            <>
                <header>
                    <h1>Movies</h1>
                </header>
                <div>
                    <ul>
                        {this.props.reduxState.moviesReducer.map((movie) => {
                            return(
                                <Movie movie={movie} key={movie.id} history={this.props.history}/>
                            )
                        })}
                    </ul>
                </div>
            </>
        )
    }
}

const putStateOnProps = (reduxState) => ({ reduxState });

export default connect(putStateOnProps)(MovieList);