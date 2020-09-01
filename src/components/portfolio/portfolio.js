import React from 'react'
import { CardDeck, Card } from 'react-bootstrap'
import "./portfolio.css"
import dinner from "../../../images/dinner.png"
import workout from "../../../images/recipes.PNG"
import burger from "../../../images/burger.PNG"
import planner from "../../../images/planner.PNG"
import password from "../../../images/password.PNG"
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const renderTooltip = props => (
  <Tooltip {...props}>Deployed site</Tooltip>
);


const Portfolio = () => (
  <div>
    <div className="row highlights">
      <div className="col-md">
        <h2>Projects</h2>

        <CardDeck>
          <Card>
            <Card.Img variant="top" src={dinner} />
            <Card.Body>
              <Card.Title className="title">Whats for Dinner?</Card.Title>
              <Card.Text>
                Dinner planning website that allows you to see recipes for the selected protein type and pairs drink selections.
                  <p>Node.js, third party API</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <a href="https://github.com/encannedy/Jsink" target="_blank" className="link" rel="noopener noreferrer">
                <i className="fa fa-github-square fa-2x" ></i></a>
                <OverlayTrigger placement="top" overlay={renderTooltip}>
                </OverlayTrigger>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={workout} />
            <Card.Body>
              <Card.Title className="title">Work Out Tracker</Card.Title>
              <Card.Text>
               User can create, read, update and delete personal workout regimine.
                  <p>HTML, CSS, JavaScript</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <a href="https://github.com/encannedy/mimer" target="_blank" className="link" rel="noopener noreferrer">
                <i className="fa fa-github-square fa-2x"></i></a>
                <OverlayTrigger placement="top" overlay={renderTooltip}>
              <a href="https://ru-2020-proj-ct-02.herokuapp.com/" target="_blank" className="link" rel="noopener noreferrer">
                <i className="fa fa-window-restore fa-2x"></i></a>
                </OverlayTrigger>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={planner} />
            <Card.Body>
              <Card.Title className="title">Day Planner</Card.Title>
              <Card.Text>
              The app will allow for a user to keep track of a standard business schedule.
                  <p>Uses moment.js library and local storage </p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <a href="https://github.com/encannedy/solder" target="_blank" className="link" rel="noopener noreferrer">
                <i className="fa fa-github-square fa-2x"></i></a>
                <OverlayTrigger placement="top" overlay={renderTooltip}>
              <a href="https://encannedy.github.io/solder/" target="_blank" className="link" rel="noopener noreferrer">
                <i className="fa fa-window-restore fa-2x"></i></a>
                </OverlayTrigger>
            </Card.Footer>
          </Card>
        </CardDeck>

        <CardDeck className="secRow">
          <Card>
            <Card.Img variant="top" src={burger} />
            <Card.Body>
              <Card.Title className="title">Burger App</Card.Title>
              <Card.Text>
                This project allows you to input a burger and push to the page. You can also "devour" or "delete" the burger once it has been added to the page..
                  <p>MySQL, NodeJS, Express, and Heroku.</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <a href="https://github.com/encannedy/burger" target="_blank" className="link" rel="noopener noreferrer">
                <i className="fa fa-github-square fa-2x"></i></a>
                <OverlayTrigger placement="top" overlay={renderTooltip}>
              <a href="https://salty-bayou-52286.herokuapp.com/" target="_blank" className="link" rel="noopener noreferrer">
                <i className="fa fa-window-restore fa-2x"></i></a>
                </OverlayTrigger>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={password} />
            <Card.Body>
              <Card.Title className="title">Password generator</Card.Title>
              <Card.Text>
                Generates a random eight digit password.
                  <p>uses local storage.</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <a href="https://github.com/encannedy/noder" target="_blank" className="link" rel="noopener noreferrer">
                <i className="fa fa-github-square fa-2x"></i></a>
                <OverlayTrigger placement="top" overlay={renderTooltip}>
              <a href="https://encannedy.github.io/noder/." target="_blank" className="link" rel="noopener noreferrer">
                <i className="fa fa-window-restore fa-2x"></i></a>
                </OverlayTrigger>
            </Card.Footer>
          </Card>
         
        </CardDeck>
      </div>
    </div>
    <Footer />
  </div>

);

export default Portfolio;