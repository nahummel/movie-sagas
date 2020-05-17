import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import {takeEvery, put} from 'redux-saga/effects'
// Import saga middleware
import createSagaMiddleware from 'redux-saga';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GETMOVIES', fetchMovies);
    yield takeEvery('MOVIE_ID', fetchGenres);
    yield takeEvery('SAVE', updateDetails)
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const moviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genresReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}
// Used to store the movie info that was clicked
const detailsReducer = (state = [{id:0, title:'', description:''}], action) => {
    switch (action.type) {
        case 'storeMovie':
            return {id: action.payload2, title: action.payload0, description: action.payload1};
        default:
            return state;
    }
}

// Generator functions
function* fetchMovies(){
    try{
        const response = yield axios.get('/api/movies');
        console.log('in fetchMovies', response.data);
        yield put ({type:'SET_MOVIES', payload: response.data});
    } catch(error){
        console.log(error);
        alert('Error getting Movies')
    }
}

function* fetchGenres(action){
    try{
        const id = action.payload;
        const response = yield axios.get(`/api/movies/${id}`);
        console.log('in fetchGenres:', response.data);
        yield put ({type: 'SET_GENRES', payload: response.data});
    } catch (error){
        console.log(error);
        alert('Error in getting Genres');
    }
}

function* updateDetails(action){
    try {
        const id = action.payload0;
        const response = yield axios.put(`/api/movies/${id}`, {title: action.payload1,description: action.payload2});
        console.log(response.data)
        yield put({type: 'storeMovie', payload0: action.payload1, payload2: action.payload0, payload1: action.payload2})

    } catch (error) {
        console.log('Error in index.js Put', error);
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        moviesReducer,
        genresReducer,
        detailsReducer
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
