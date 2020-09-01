import React from "react";
import Erica from "../../../images/Erica.jpg";
import { Card } from 'react-bootstrap';
import "./About.css"

const About = () => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-md">
          <Card.Img variant="top" src={Erica} className="pic" />
          <Card.Body>
            <h2>About Me</h2>
            <p>Hello! My name is Erica Cannedy. I’m an aspiring Full Stack Developer seeking a new challenging
            career. Prior to embarking on a Full Stack Developer career my experience was built around client wellness and safety as a mental health practitioner.  As a practitioner I am client and solution focused which is the same perspective I bring to working on full stab web design.  I am a hard working individual who is eager to continue developing my skills and advance my knowledge.  </p>
            <p>I've worked on various solo project as well as various group projects which is where my strength lies.  I work well with others and feel a collaborative approach is the best working style for me. </p>
          
          </Card.Body>
        </div>
      </div>
    </div>

  
    
  </div>
);

export default About;