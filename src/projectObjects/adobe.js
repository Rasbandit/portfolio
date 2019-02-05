//Icons
import afterEffects from '../assets/work/adobe/icons/After_Effects.svg';
import audition from '../assets/work/adobe/icons/audition.svg';
import illustrator from '../assets/work/adobe/icons/Illustrator.svg';
import photoshop from '../assets/work/adobe/icons/Photoshop.svg';
import premiere from '../assets/work/adobe/icons/Premiere.svg';

//assets
import c from '../assets/work/adobe/c.jpg';
import comms from '../assets/work/adobe/comms.jpg';
import linesMedium from '../assets/work/adobe/lines-medium.jpg';
import linesLarge from '../assets/work/adobe/lines-large.jpg';
import cuircutMedium from '../assets/work/adobe/cuircut-medium.jpg';
import cuircutLarge from '../assets/work/adobe/cuircut-large.jpg';
import tlmMedium from '../assets/work/adobe/tlm-medium.jpg';
import tlmLarge from '../assets/work/adobe/tlm-large.jpg';
import shieldsMedium from '../assets/work/adobe/shields-medium.jpg';
import shieldsLarge from '../assets/work/adobe/shields-large.jpg';
import endeavor from '../assets/work/adobe/endeavor.jpg';
import solarSystem from '../assets/work/adobe/solar-system.jpg';

//Videos
import endeavorVideo from '../assets/Videos/endeavor.m4v';
import endeavorVideoLarge from '../assets/Videos/endeavor-large.m4v';
import cVideo from '../assets/Videos/c.m4v';
import cVideoLarge from '../assets/Videos/C-large.m4v';
import ssVideo from '../assets/Videos/solar-system.m4v';
import ssVideoLarge from '../assets/Videos/solar-system-large.m4v';
import comVideo from '../assets/Videos/comm.m4v';
import comVideoLarge from '../assets/Videos/comm-large.m4v';

export default {
  skillSize: '16px',
  skills: [
  {
    img: afterEffects,
    title: "After Effects",
    className: ''
  },
  {
    img: audition,
    title: "Audition",
    className: ''
  },
  {
    img: illustrator,
    title: "Illustrator",
    className: ''
  },
  {
    img: photoshop,
    title: "Photoshop",
    className: ''
  },
  {
    img: premiere,
    title: "Premiere Pro",
    className: ''
  },
],
  projects: [
    {
      imgMedium: solarSystem,
      videoMedium: ssVideo,
      videoLarge: ssVideoLarge,
      title: 'Solar System',
      text: 'I wanted to learn sockets.io and and the canvas API in HTML 5. I found a tutorial on how to build some basics in canvas and I later built asteroids and included a server to manage all the state on so it could live update all connected computers using sockets, allowing you to jointly control a ship. A working version of the site can be found here here. The GitHub Repo for the project can be found here.',
      type: 'After Effects'
    },
    {
      imgMedium: endeavor,
      videoMedium: endeavorVideo,
      videoLarge: endeavorVideoLarge,
      title: 'Endeavor Logo',
      text: 'I wanted to learn sockets.io and and the canvas API in HTML 5. I found a tutorial on how to build some basics in canvas and I later built asteroids and included a server to manage all the state on so it could live update all connected computers using sockets, allowing you to jointly control a ship. A working version of the site can be found here here. The GitHub Repo for the project can be found here.',
      type: 'After Effects'
    },
    {
      imgMedium: linesMedium,
      imgLarge: linesLarge,
      title: 'Connections',
      text: 'I wanted to learn sockets.io and and the canvas API in HTML 5. I found a tutorial on how to build some basics in canvas and I later built asteroids and included a server to manage all the state on so it could live update all connected computers using sockets, allowing you to jointly control a ship. A working version of the site can be found here here. The GitHub Repo for the project can be found here.',
      type: 'Illustrator'
    },
    {
      imgMedium: shieldsMedium,
      imgLarge: shieldsLarge,
      title: 'Shields',
      text: 'I wanted to learn sockets.io and and the canvas API in HTML 5. I found a tutorial on how to build some basics in canvas and I later built asteroids and included a server to manage all the state on so it could live update all connected computers using sockets, allowing you to jointly control a ship. A working version of the site can be found here here. The GitHub Repo for the project can be found here.',
      type: 'Illustrator'
    },
    {
      imgMedium: tlmMedium,
      imgLarge: tlmLarge,
      title: 'Twisty Light Machine',
      text: 'I wanted to learn sockets.io and and the canvas API in HTML 5. I found a tutorial on how to build some basics in canvas and I later built asteroids and included a server to manage all the state on so it could live update all connected computers using sockets, allowing you to jointly control a ship. A working version of the site can be found here here. The GitHub Repo for the project can be found here.',
      type: 'Illustrator'
    },
    {
      imgMedium: cuircutMedium,
      imgLarge: cuircutLarge,
      title: 'Circut Manegment',
      text: 'I wanted to learn sockets.io and and the canvas API in HTML 5. I found a tutorial on how to build some basics in canvas and I later built asteroids and included a server to manage all the state on so it could live update all connected computers using sockets, allowing you to jointly control a ship. A working version of the site can be found here here. The GitHub Repo for the project can be found here.',
      type: 'Illustrator'
    },
    {
      imgMedium: comms,
      videoMedium: comVideo,
      videoLarge: comVideoLarge,
      title: 'Communications',
      text: 'I wanted to learn sockets.io and and the canvas API in HTML 5. I found a tutorial on how to build some basics in canvas and I later built asteroids and included a server to manage all the state on so it could live update all connected computers using sockets, allowing you to jointly control a ship. A working version of the site can be found here here. The GitHub Repo for the project can be found here.',
      type: 'After Effects'
    },
    {
      imgMedium: c,
      videoMedium: cVideo,
      videoLarge: cVideoLarge,
      title: 'Computer Screen',
      text: 'I wanted to learn sockets.io and and the canvas API in HTML 5. I found a tutorial on how to build some basics in canvas and I later built asteroids and included a server to manage all the state on so it could live update all connected computers using sockets, allowing you to jointly control a ship. A working version of the site can be found here here. The GitHub Repo for the project can be found here.',
      type: 'After Effects'
    },
  ],
  filters: [
    'Illustrator',
    'After Effects',
  ]
}