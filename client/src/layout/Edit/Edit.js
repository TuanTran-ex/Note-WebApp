import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import './Edit.css';
import SideBar from '../../component/SideBar/SideBar'
import confirmIcon from '../../Icon/checked.svg';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      redirect: false
    }

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.editNote = this.editNote.bind(this);
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`/api/${id}`).then(res => {
      this.setState({
        title: res.data.title,
        content: res.data.content
      });
    });
  }
  onChangeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  editNote(event) {
    const { id } = this.props.match.params;
    event.preventDefault();
    axios.put(`/api/${id}`, {
      title: this.refs.title.value,
      content: this.refs.content.value
    })
    this.setState({ redirect: true });
    const { clickIndex } = this.props;
    clickIndex(-1);
  }

  render() {
    const { title, content, redirect } = this.state;
    if (redirect) return <Redirect to="/"></Redirect>
    return (
      <div className="contents-edit">
        <SideBar></SideBar>
        <form className="EditForm" onSubmit={this.editNote}>
          <input
            type="text"
            name="title"
            ref="title"
            className="title-input"
            rows="1"
            placeholder="Tiêu đề"
            value={title}
            onChange={this.onChangeHandler}>
          </input>
          <textarea
            name="content"
            ref="content"
            className="contents-input"
            placeholder="Nội dung"
            value={content}
            onChange={this.onChangeHandler}>
          </textarea>
          <button type="submit" className="confirm">
              <img src={confirmIcon} className="newIcon" alt="newIcon"></img>
            </button>
        </form>
      </div>
    );
  }
}

export default Edit;