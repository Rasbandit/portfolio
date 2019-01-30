import React, { Component } from 'react';
import asteroidThumb from '../images/work/thumbs/asteroids.jpg'
import houserThumb from '../images/work/thumbs/houser.jpg'
import pokemonThumb from '../images/work/thumbs/pokemon.jpg'
import sarahThumb from '../images/work/thumbs/sarah.jpg'
import sortingThumb from '../images/work/thumbs/sorting.jpg';
import threadlessThumb from '../images/work/thumbs/threadless.jpg';
import WebDevProject from './WebDevProject';
import { Transition } from 'react-spring'

const projects = [
  {
    thumb: asteroidThumb,
    title: 'Asteroids',
    text: 'I wanted to learn sockets.io and and the canvas API in HTML 5. I found a tutorial on how to build some basics in canvas and I later built asteroids and included a server to manage all the state on so it could live update all connected computers using sockets, allowing you to jointly control a ship. A working version of the site can be found here here. The GitHub Repo for the project can be found here.',
    type: 'vanilla'
  },
  {
    thumb: sarahThumb,
    title: "Sarah's Paw Prints",
    text: "This site was designed by me and created to show off the portfolio of a friend. This was the first site I made with the intent to be viewed on as many devices and browsers as possible because of this careful attention was given to responsiveness. I used amazon S3 for file storage and am working on giving the owner the ability to upload and manage the photos on the site. A working version of the site can be found here. The GitHub Repo for the project can be found here.",
    type: 'angular.js'
  },
  {
    thumb: houserThumb,
    title: "Houser Helper",
    text: "I started this site as a review for a class I was teching to use React.js, Redux, and Node.js. The review lasted 3 days and after a few more days work I finished this site. A working version of the site can be seen here. The GitHub Repo for the project can be found here.",
    type: 'react'
  },
  {
    thumb: pokemonThumb,
    title: "Pokemon Catcher",
    text: "I made this using React.js and Node.js in an evening as an example to the students at DevMountain of what a small project could look like. See the working example here. The GitHub repo for the project can be found here.",
    type: 'react'
  },
  {
    thumb: sortingThumb,
    title: "Sorting Hat",
    text: "This site was made in an evening with a class of students with the goal to teach them React.js and how components and props work. In addition it is using a Node.js server to hold the data for the site. A working example of the site can be found here. The GitHub repo for the project can be found here.",
    type: 'react'
  }, {
    thumb: threadlessThumb,
    title: "Threadless Clone",
    text: "This site was cloned using AngularJS, NodeJS and PostgreSQL. I built this over 3 weeks as my first full stack project A working version of the site can be viewed here. The GitHub Repo for the project can be found here.",
    type: 'angular.js'

  }
]

export default class WebDevProjects extends Component {
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
    window.removeEventListener('resize')
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

    let projectsArray = [...projects];

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

    console.log(Math.ceil(projectsArray.length / 3))
    return (
      <div id="projects">
        <h1>Projects</h1>
        <main style={{ height: Math.ceil(projectsArray.length / columns) * (incY + gap) }}>
          <aside id="aside">
            <h2>Categories</h2>
            <ul>
              <li className={filter === '' ? 'highlight' : ''} onClick={() => this.setState({ filter: '' })}>All</li>
              <li className={filter === 'react' ? 'highlight' : ''} onClick={() => this.setState({ filter: 'react' })}>React</li>
              <li className={filter === 'angular.js' ? 'highlight' : ''} onClick={() => this.setState({ filter: 'angular.js' })}>Angular.js</li>
              <li className={filter === 'vanilla' ? 'highlight' : ''} onClick={() => this.setState({ filter: 'vanilla' })}>Vanilla JS</li>
            </ul>
          </aside>
          <section>
            <Transition
              items={projectsArray} keys={item => item.title}
              from={{ opacity: 0 }}
              enter={{ opacity: 1 }}
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
