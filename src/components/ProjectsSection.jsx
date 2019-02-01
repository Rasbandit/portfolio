import React, { Component } from 'react';
import WebDevProject from './Project';
import { Transition } from 'react-spring'
import Modal from './Modal';

export default class ProjectsSection extends Component {
  constructor() {
    super();

    let obj = this.setSize();

    obj.filter = ''

    this.state = obj;
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.resize)
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.resize)
  }

  resize = () => {
    this.setState(this.setSize())
  }

  setSize = () => {
    var incX;
    var incY;
    var columns;
    var gap;

    if (window.innerWidth > 1100) {
      incX = window.innerWidth / 5;
      incY = incX / 1.488;
      columns = 3
      gap = 35;
    }

    else if (window.innerWidth <= 1100 && window.innerWidth > 950) {
      incX = window.innerWidth / 3;
      incY = incX / 1.488;
      columns = 2;
      gap = 25;
    }

    else if (window.innerWidth <= 950 && window.innerWidth > 700) {
      incX = window.innerWidth / 2.3;
      incY = incX / 1.488;
      columns = 2;
      gap = 20
    }

    else if (window.innerWidth <= 700 && window.innerWidth > 500) {
      incX = window.innerWidth / 1.1;
      incY = incX / 1.488;
      columns = 1;
      gap = 10
    }
    else if (window.innerWidth <= 500) {
      incX = window.innerWidth / 1.1;
      incY = incX / 1.488;
      columns = 1;
      gap = 5
    }
    return { incX, incY, columns, gap, x: gap, y: 0 }
  }


  render() {
    let { filter, x, y, incX, incY, columns, gap } = this.state;

    let projectsArray = [...this.props.projects];

    if (this.state.filter) {
      projectsArray = projectsArray
        .filter(project => project.type === filter)
    }

    projectsArray = projectsArray.map(project => {
      project.x = x;
      project.y = y;
      if (x >= incX * (columns - 1)) {
        x = gap;
        y += incY + gap;
      } else {
        x += incX + gap;
      }
      return project
    })

    return (
      <div id="projects">
        <Modal />
        <h1>Projects</h1>
        <main style={{ height: Math.ceil(projectsArray.length / columns) * (incY + gap) }}>
          <aside id="aside">
            <h2>Categories</h2>
            <ul>
              <li className={filter === '' ? 'highlight' : ''} onClick={() => this.setState({ filter: '' })}>All</li>
              {this.props.filters.map(text => (<li className={filter === text ? 'highlight' : ''} onClick={() => this.setState({ filter: text })} key={text}>{text}</li>))}
            </ul>
          </aside>
          <section>
            <Transition
              items={projectsArray} keys={item => item.title}
              from={{ opacity: 0, }}
              enter={{ opacity: 1, }}
              leave={{ opacity: 0, top: 100, transform: 'translate3d(400px, 400px, 0)' }}>
              {
                item => props => {
                  return (<WebDevProject {...item} style={props} width={incX} height={incY} />)
                }
              }
            </Transition>
          </section>
        </main>
      </div>
    )
  }
}
