//Icons
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
//Thumbnails
import asteroidThumb from '../images/work/thumbs/asteroids.jpg'
import houserThumb from '../images/work/thumbs/houser.jpg'
import pokemonThumb from '../images/work/thumbs/pokemon.jpg'
import sarahThumb from '../images/work/thumbs/sarah.jpg'
import sortingThumb from '../images/work/thumbs/sorting.jpg';
import threadlessThumb from '../images/work/thumbs/threadless.jpg';

export default {
  skillSize: '11px',
  skills: [
  {
    img: javascript,
    title: "JavaScript",
    className: ''
  },
  {
    img: react,
    title: "React",
    className: ''
  },
  {
    img: angular,
    title: "Angular.js",
    className: ''
  },
  {
    img: html,
    title: "HTML 5",
    className: 'non-import'
  },
  {
    img: css,
    title: "CSS 3",
    className: 'non-import'
  },
  {
    img: express,
    title: "Express",
    className: ''
  },
  {
    img: node,
    title: "Node.js",
    className: ''
  },
  {
    img: graphQL,
    title: "GraphQL",
    className: ''
  }, 
  {
    img: redux,
    title: "Redux",
    className: ''
  },
  {
    img: postgres,
    title: "PostgreSQL",
    className: ''
  },
  {
    img: sass,
    title: "Sass/Scss",
    className: 'non-import-small'
  },
  {
    img: jest,
    title: "Jest",
    className: 'non-import-small'
  },
  {
    img: github,
    title: "GitHub",
    className: 'non-import'
  },
  {
    img: socket,
    title: "Socket.io",
    className: ''
  },
],
  projects: [
    {
      thumb: asteroidThumb,
      title: 'Asteroids',
      text: 'I wanted to learn sockets.io and and the canvas API in HTML 5. I found a tutorial on how to build some basics in canvas and I later built asteroids and included a server to manage all the state on so it could live update all connected computers using sockets, allowing you to jointly control a ship. A working version of the site can be found here here. The GitHub Repo for the project can be found here.',
      type: 'Vanilla js'
    },
    {
      thumb: sarahThumb,
      title: "Sarah's Paw Prints",
      text: "This site was designed by me and created to show off the portfolio of a friend. This was the first site I made with the intent to be viewed on as many devices and browsers as possible because of this careful attention was given to responsiveness. I used amazon S3 for file storage and am working on giving the owner the ability to upload and manage the photos on the site. A working version of the site can be found here. The GitHub Repo for the project can be found here.",
      type: 'Angular.js'
    },
    {
      thumb: houserThumb,
      title: "Houser Helper",
      text: "I started this site as a review for a class I was teching to use React.js, Redux, and Node.js. The review lasted 3 days and after a few more days work I finished this site. A working version of the site can be seen here. The GitHub Repo for the project can be found here.",
      type: 'React'
    },
    {
      thumb: pokemonThumb,
      title: "Pokemon Catcher",
      text: "I made this using React.js and Node.js in an evening as an example to the students at DevMountain of what a small project could look like. See the working example here. The GitHub repo for the project can be found here.",
      type: 'React'
    },
    {
      thumb: sortingThumb,
      title: "Sorting Hat",
      text: "This site was made in an evening with a class of students with the goal to teach them React.js and how components and props work. In addition it is using a Node.js server to hold the data for the site. A working example of the site can be found here. The GitHub repo for the project can be found here.",
      type: 'React'
    }, {
      thumb: threadlessThumb,
      title: "Threadless Clone",
      text: "This site was cloned using AngularJS, NodeJS and PostgreSQL. I built this over 3 weeks as my first full stack project A working version of the site can be viewed here. The GitHub Repo for the project can be found here.",
      type: 'Angular.js'
  
    }
  ],
  filters: [
    'React',
    'Angular.js',
    'Vanilla js'
  ]
}