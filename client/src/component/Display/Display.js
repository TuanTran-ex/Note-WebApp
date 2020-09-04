import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Display.css';
import newIcon from '../../Icon/plus-solid.svg';
import deleteIcon from '../../Icon/clear-white.svg';
import editIcon from '../../Icon/edit.svg';

class Display extends Component {
  render() {
    const { note, index, removeNote, clickIndex } = this.props;
    if (index < 0) {
      return (
        <div className="Display">
          <div className="input-form">
            <textarea name="title" id="input-title" 
            className="title-input" 
            minLength="1" maxLength="60" 
            placeholder="Tiêu đề" value=""></textarea>
            <textarea name="contents" id="input-contents" 
            className="contents-input" placeholder="Nội dung" 
            value=""></textarea>
          </div>
          <Link to="/add" className="add-new">
            <img src={newIcon} alt="NewIcon"></img>
          </Link>
        </div>
      );
    } else {
      return (
        <div className="Display">
          <div className="input-form">
            <textarea name="title" id="input-title" 
            className="title-input" 
            minLength="1" maxLength="60" 
            placeholder="Tiêu đề" value={note[index].title}></textarea>
            <textarea name="contents" id="input-contents" 
            className="contents-input" placeholder="Nội dung" 
            value={note[index].content}></textarea>
          </div>
          <Link to="/add" className="add-new">
            <img src={newIcon} className="newIcon" alt="NewIcon"></img>
          </Link>
          <button onClick={() => { removeNote(note[index]._id); clickIndex(-1) }}
            className="delete-btn">
              <img src={deleteIcon} alt="DeleteIcon"></img>
          </button>
          <Link to={`/edit/${note[index]._id}`} className="edit-btn">
            <img src={editIcon} alt="EditIcon"></img>
          </Link>
        </div>
      );
    }
  }
}

export default Display;