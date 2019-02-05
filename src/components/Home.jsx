import React, { Component } from 'react'
import splash from '../assets/Videos/splash.m4v';
import splashImg from '../assets/work/splash.jpg';

export default class Home extends Component {
  render() {
    return (
      <div >
        <div className="splash" style={this.props.style}>
          <video src={splash} poster={splashImg} autoPlay loop></video>
          <div className="overlay">
            <h1>Todd Rasband</h1>
          </div>
        </div >
      </div>
    );
  }
}
