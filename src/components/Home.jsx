import React, { Component } from 'react'
import splash from '../images/Videos/splash.mp4';

export default class Home extends Component {
  render() {
    console.log(this.props.style)
    return (
      <div >
        <div className="splash" style={this.props.style}>
          <video src={splash} autoPlay loop></video>
          <div className="overlay">
            <h1>Todd Rasband</h1>
          </div>
        </div >
      </div>
    );
  }
}
