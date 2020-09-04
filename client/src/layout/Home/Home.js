import React, { Component } from 'react';
import axios from 'axios';

import SideBar from '../../component/SideBar/SideBar'
import NoteList from '../../component/NoteList/NoteList';
import Display from '../../component/Display/Display';
import { NoteIndexContext } from '../../context/NoteDisplayContext';

import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: []
    }

    this.removeNote = this.removeNote.bind(this);
  }

  componentDidMount() {
    axios.get('/api').then(res => {
      this.setState({
        note: res.data
      });
    });
  }

  removeNote(id) {
    axios.delete(`api/delete/${id}`);
    axios.get('/api').then(res => {
      this.setState({
        note: res.data
      });
    });
  }

  render() {
    const { note } = this.state;
    return (
      <div className="contents">
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

export default Home;