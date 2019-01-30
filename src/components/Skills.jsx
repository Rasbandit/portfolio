import React from 'react';
import FontAwesome from 'react-fontawesome';

export default function Skills(props) {
  console.log(props.style)
  return (
    <div id="skills" style={props.style}>
      <div className="content">

        <h1>Web Development</h1>
        <ul>
          <li><i className="devicon-javascript-plain colored"></i>
            <h3>JavaScript</h3>
          </li>
          <li>
            <i className="devicon-react-original colored"></i>
            <h3>React.js</h3>
          </li>
          <li>
            <i className="devicon-angularjs-plain colored"></i>
            <h3>Angular.js</h3>
          </li>
          <li>
            <i className="devicon-express-original"></i>
            <h3>Express</h3>
          </li>
          <li><i className="devicon-nodejs-plain colored"></i>
            <h3>Node.js</h3>
          </li>
          <li>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2000px-GraphQL_Logo.svg.png" alt="" />
            <h3>GraphQL</h3>
          </li>
          <li>
            <i className="devicon-postgresql-plain colored"></i>
            <h3>PostgreSQL</h3>
          </li>
          <li>
            <i className="devicon-sass-original colored"></i>
            <h3>Sass/Scss</h3>
          </li>
          <li>
            <img src="http://foobarbaz.club/wp-content/uploads/2018/10/68747470733a2f2f6a6573746a732e696f2f696d672f6a6573742e706e67.png" alt="" />
            <h3>Jest</h3>
          </li>
          <li>
            <i className="devicon-github-plain colored"></i>
            <h3>GitHub</h3>
          </li>

        </ul>

        <h1 className="top-margin">Adobe</h1>
        <ul>
          <li>
            <img src="https://pages.uncc.edu/techne/wp-content/uploads/sites/93/2014/11/Adobe-Illustrator-Logo.jpg" alt="" />
            <h3>Illustrator</h3>
          </li>
          <li>
            <img src="https://cdn.worldvectorlogo.com/logos/photoshop-cc.svg" alt="" />
            <h3>Photoshop</h3>
          </li>
          <li>
            <img src="https://cdn.worldvectorlogo.com/logos/premiere-cc.svg" alt="" />
            <h3>Premire Pro</h3>
          </li>
          <li>
            <img src="https://static4.it-serwis.pl/eng_pl_Adobe-After-Effects-CC-EU-English-Win-Mac-Subskrypcja-na-12-miesiecy-18_1.jpg" alt="" />
            <h3>After Effects</h3>
          </li>
        </ul>
        <h1 className="top-margin">Education</h1>
        <ul>
          <li>
            <FontAwesome name="school" style={{ color: '#e0e0e0' }} />
            <h3>Teaching</h3>
          </li>
          <li>
            <FontAwesome name="chalkboard-teacher" style={{ color: '#e0e0e0' }} />
            <h3>Public Speaking</h3>
          </li>
          <li>
            <FontAwesome name="pencil-ruler" style={{ color: '#e0e0e0' }} />
            <h3>Curriculum Development</h3>
          </li>
        </ul>
      </div>
    </div>
  )
}
