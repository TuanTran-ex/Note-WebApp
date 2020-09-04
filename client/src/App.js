import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import './App.css';

import { NoteIndexProvider, NoteIndexContext } from './context/NoteDisplayContext';
import NavBar from './component/NavBar/NavBar'
import Home from './layout/Home/Home';
import Add from './layout/Add/Add';
import Edit from './layout/Edit/Edit';
import Search from './layout/Search/Search';

class App extends Component {
  render() { 
    return (
      <NoteIndexProvider>
        <div className="App">
          <NavBar></NavBar>
          <Router>
            <Route path="/" exact component={Home}></Route>
            <Route path="/add/" exact component={Add}>
              <Add></Add>
            </Route>
            <Route path="/search" exact component={Search}></Route>
            <Route path="/edit/">
              <NoteIndexContext.Consumer>
                {({clickIndex}) => 
                  <Route path="/edit/:id" exact
                    render={props => <Edit {...props} clickIndex={clickIndex} /> }>
                  </Route>}
              </NoteIndexContext.Consumer>
            </Route>
          </Router>
        </div>
      </NoteIndexProvider>
    );
  }
}

export default App;
