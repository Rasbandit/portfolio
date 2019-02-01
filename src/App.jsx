import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import webDevObject from './projectObjects/webDev'
import adobeObject from './projectObjects/adobe'

import Home from './components/Home'
import Other from "./components/Other";
import Nav from './components/Nav';
import Page from './components/Page'


import './scss/App.scss'

class AnimationExample extends Component {
  constructor() {
    super();

    this.state = {
      showNav: false
    }
  }

  toggleNav = (showNav = !this.state.showNav) => {
    this.setState({ showNav })
  }

  render() {

    return (

      <Router>
        <Route
          render={({ location }) => (
            <>
              <Nav toggleNav={this.toggleNav} showNav={this.state.showNav} />
              <div id="page-container" style={{ right: this.state.showNav ? '250px' : 0 }}>
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    classNames="fade"
                    timeout={850}
                  >
                    <Switch location={location}>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/about" component={Home} />
                      <Route exact path="/webdev" render={(props) => <Page {...props} {...webDevObject} />} />
                      <Route exact path="/adobe" render={(props) => <Page {...props} {...adobeObject} />} />
                      <Route exact path="/education" component={Other} />
                      <Route render={() => <div>Not Found</div>} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </div>
            </>
          )}
        />
      </Router>
    );
  }
}


export default AnimationExample;