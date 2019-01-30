import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Home from './components/Home'
import Skills from './components/Skills'
import Other from "./components/Other";
import Nav from './components/Nav';
import WebDev from './components/WebDev'


import './scss/App.scss'

function AnimationExample() {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <>
            <Nav />

            <TransitionGroup>
              <CSSTransition
                key={location.key}
                classNames="fade"
                timeout={850}
              >
                <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={Home} />
                  <Route exact path="/webdev" component={WebDev} />
                  <Route exact path="/adobe" component={Other} />
                  <Route exact path="/education" component={Other} />
                  <Route render={() => <div>Not Found</div>} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </>
        )}
      />
    </Router>
  );
}


export default AnimationExample;