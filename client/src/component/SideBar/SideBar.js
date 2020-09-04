import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './SideBar.css';

import noteIcon from '../../Icon/sticky-note-solid.svg';
import tagsIcon from '../../Icon/tags-solid.svg';
import trashIcon from '../../Icon/trash-solid.svg';

class SideBar extends Component {
  state = {}
  render() {
    return (
      <div className="side-bar">
        <div className="option-list">
          <Link to="/" className="option-wrap">
            <img src={noteIcon} alt="NoteIcon"/>
            <span>All Note</span>
          </Link>
          <Link to="#" className="option-wrap">
            <img src={tagsIcon} alt="TagsIcon"/>
            <span>Tags</span>
          </Link>
          <Link to="#" className="option-wrap">
            <img src={trashIcon} alt="TrashIcon"/>
            <span>Trash</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default SideBar
