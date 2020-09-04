import React, { Component } from 'react';
import axios from 'axios';

import { NoteIndexContext } from '../../context/NoteDisplayContext';

import './Search.css';

import SideBar from '../../component/SideBar/SideBar'
import NoteList from '../../component/NoteList/NoteList';
import Display from '../../component/Display/Display';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: []
    } 
  }
  componentDidMount() {
    const { search } = this.props.location;
    axios.get(`/search${search}`).then(res => {
      this.setState({note: res.data});
    })
    
  }
  render() { 
    const { note } = this.state;
    console.log(note);
    return (
      <div className="Search">
        <SideBar></SideBar>
        <NoteList note={note}></NoteList>
        <NoteIndexContext.Consumer>
          {({ index, clickIndex }) => 
            <Display note={note} index={index} removeNote={this.removeNote} clickIndex={clickIndex}>
            </Display>
            }
        </NoteIndexContext.Consumer>
      </div> 
    );
  }
}
 
export default Search;