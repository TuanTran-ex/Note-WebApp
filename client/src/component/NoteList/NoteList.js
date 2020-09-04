import React, { Component } from 'react';
import './NoteList.css'

import { NoteIndexContext } from '../../context/NoteDisplayContext'

class NoteList extends Component {
  render() { 
    const {note} = this.props;
    return (
      <div className="NoteList">
        <div className="note-info">
          <h3>Danh sách ghi chú</h3>
          <p>Tổng số ghi chú: {note.length} </p>
        </div>
        {
          note.map((item, index) => (
            <div className="note-block">
              <NoteIndexContext.Consumer>
                {({clickIndex}) => 
                  <button onClick={() => clickIndex(index)}>
                    <h3 className="title">{item.title}</h3>
                  </button>}
              </NoteIndexContext.Consumer>
              
              <p className="content">{item.content}</p>
              <span className="date">{item.date}</span>
            </div>
          ))
        }
      </div>
    );
  }
}
 
export default NoteList;