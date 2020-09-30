import React, { Component } from 'react';

class Gif extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`
    return (
      <img src={src} alt="" className="gif"/>
    );
  }
}

export default Gif;
