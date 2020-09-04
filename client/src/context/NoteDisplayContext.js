import React, { Component } from 'react';

export const NoteIndexContext = React.createContext();

export class NoteIndexProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: -1
    };
    this.clickIndex = this.clickIndex.bind(this);
  }

  clickIndex(newIndex) {
    this.setState({
      index: newIndex
    })
  }

  render() { 
    return <NoteIndexContext.Provider value={{
      index: this.state.index,
      clickIndex: this.clickIndex,
      }}>
      {this.props.children}
    </NoteIndexContext.Provider>
  }
}