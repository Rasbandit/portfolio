//Icons
import curriculum from '../assets/work/education/icons/curriculum.svg';
import publicSpeaking from '../assets/work/education/icons/public-speaking.svg';
import teaching from '../assets/work/education/icons/teaching.svg';
import video from '../assets/work/education/icons/video.svg';

//Thumbnails
import asteroidThumb from '../assets/work/webDev/asteroids.jpg';


export default {
  skillSize: '18px',
  skills: [
  {
    img: curriculum,
    title: "Curriculum Development",
    className: 'white'
  },
  {
    img: publicSpeaking,
    title: "Public Speaking",
    className: 'white'
  },
  {
    img: teaching,
    title: "Teaching",
    className: 'white'
  },
  {
    img: video,
    title: "Video Education",
    className: 'white'
  },
],
  projects: [
    {
      imgMedium: asteroidThumb,
      imgLarge: asteroidThumb,
      title: 'Asteroids',
      text: 'I wanted to learn sockets.io and and the canvas API in HTML 5. I found a tutorial on how to build some basics in canvas and I later built asteroids and included a server to manage all the state on so it could live update all connected computers using sockets, allowing you to jointly control a ship. A working version of the site can be found here here. The GitHub Repo for the project can be found here.',
      type: 'Vanilla js'
    }
  ],
  filters: [
    'Videos',
    'Curriculum',
    'Vanilla js'
  ]
}