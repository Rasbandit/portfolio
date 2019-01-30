import React, { Component } from 'react';
import Projects from './WebDevProjects';
import graphQL from '../images/icons/GraphQL.svg'
import redux from '../images/icons/redux.svg'
import javascript from '../images/icons/javascript.svg';
import react from '../images/icons/react.svg';
import angular from '../images/icons/AngularJS.svg';
import node from '../images/icons/nodejs.svg';
import postgres from '../images/icons/postgresql.svg';
import sass from '../images/icons/sass.svg';
import jest from '../images/icons/jest.svg';
import github from '../images/icons/github.svg';
import socket from '../images/icons/socket-io.svg';
import html from '../images/icons/html.svg';
import css from '../images/icons/css3.svg';
import express from '../images/icons/express.svg';
import '../scss/webDev.scss'

export default class WebDev extends Component {
  render() {
    return (
      <div id="webDev">
        <div className="content">
          <div>
            <h1></h1>
            <ul>
              <li>
                <img src={javascript} alt="" />
                <h3>JavaScript</h3>
              </li>
              <li>
                <img src={react} alt="" />
                <h3>React.js</h3>
              </li>
              <li>
                <img src={angular} alt="" />
                <h3>Angular.js</h3>
              </li>
              <li className="non-import">
                <img src={html} alt="" />
                <h3>HTML 5</h3>
              </li>
              <li className="non-import">
                <img src={css} alt="" />
                <h3>CSS 3</h3>
              </li>
              <li className="non-import-small">
                <img src={express} alt="" />
                <h3>Express</h3>
              </li>
              <li>
                <img src={node} alt="" />
                <h3>Node.js</h3>
              </li>
              <li>
                <img src={graphQL} alt="" />
                <h3>GraphQL</h3>
              </li>
              <li>
                <img src={redux} alt="" />
                <h3>Redux</h3>
              </li>
              <li>
                <img src={postgres} alt="" />
                <h3>PostgreSQL</h3>
              </li>
              <li className="non-import-small">
                <img src={sass} alt="" />
                <h3>Sass/Scss</h3>
              </li>
              <li className="non-import-small">
                <img src={jest} alt="" />
                <h3>Jest</h3>
              </li>
              <li className="non-import">
                <img src={github} alt="" />
                <h3>GitHub</h3>
              </li>
              <li>
                <img src={socket} alt="" />
                <h3>Socket.io</h3>
              </li>

            </ul>
          </div>
        </div>
        <Projects />
      </div >
    )
  }
}
