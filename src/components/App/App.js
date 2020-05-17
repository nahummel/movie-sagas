import React, { Component } from 'react';
import {connect} from 'react-redux';
import{HashRouter, Route, Link} from 'react-router-dom';

import './App.css';
import MoviesList from '../MoviesList/MoviesList';
import Details from '../Details/Details'
import Edit from '../Edit/Edit'

class App extends Component {
  componentDidMount(){
    console.log(this.reduxState)
  }
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Route exact path="/" render={(props) => <MoviesList {...props}/>}/>
          <Route path="/details" render={(props) => <Details {...props}/>}/>
          <Route path="/edit" render={(props) => <Edit {...props}/>}/>
        </HashRouter>
      </div>
    );
  }
}

const putStateOnProps = (reduxState) => ({reduxState});

export default connect(putStateOnProps)(App);
