import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios';

import SideBar from '../../component/SideBar/SideBar'
import confirmIcon from '../../Icon/checked.svg';

import './Add.css';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      redirect: false
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.addNote = this.addNote.bind(this);
  }
  onChangeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  addNote(event) {
    event.preventDefault();
    axios.post('/api', {
      title: this.refs.title.value,
      content: this.refs.content.value
    })
    // .then(() => {browserHistory.push("/");})
    this.setState({ redirect: true });
  }
  render() {
    const { redirect } = this.state;
    if (redirect) return <Redirect to="/"></Redirect>
    return (
      <div className="contents-add">
        <SideBar></SideBar>
        <form className="AddForm" onSubmit={this.addNote}>
          <input
            type="text" 
            name="title" 
            ref="title"
            className="title-input" 
            minLength="1"
            maxLength="60"
            placeholder="Tiêu đề"
            onChange={this.onChangeHandler}>
          </input>
          <textarea 
            name="content" 
            ref="content"
            className="contents-input" 
            placeholder="Nội dung"
            onChange={this.onChangeHandler}>
          </textarea>
          <button type="submit" className="confirm">
            <img src={confirmIcon} alt="sumitIcon"></img>
          </button>
        </form>
      </div>
    );
  }
}

export default Add;