import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Grid} from '@material-ui/core'

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
                    <Grid container spacing={5}>
                        {this.props.reduxState.moviesReducer.map((movie) => {
                            return(
                                <Grid item xs={12} md={6} lg={4} xl={3}><Movie movie={movie} key={movie.id} history={this.props.history}/></Grid>
                            )
                        })}
                    </Grid>
                </div>
            </>
        )
    }
}

const putStateOnProps = (reduxState) => ({ reduxState });

export default connect(putStateOnProps)(MovieList);