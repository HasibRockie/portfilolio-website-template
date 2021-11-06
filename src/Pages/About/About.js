import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import img from "./about.jpeg";

const About = () => {
  return (
    <div className="home about">
      <div className="section menus">
        <Link to="/">
          <i className="fas fa-home "></i> Home{" "}
        </Link>
        <Link className="active" to="/about">
          <i className="fas fa-user "></i> About{" "}
        </Link>
        <Link to="/portfolio">
          <i className="fas fa-drafting-compass "></i> Portfolio{" "}
        </Link>
        <Link to="/contact">
          <i className="fas fa-map-marker-alt "></i> Contact{" "}
        </Link>

        <br />
        <div className="credit">
          <small>
            Designed by <span className="designer">Hasib Rockie</span>
          </small>{" "}
          <br />
          <small>Personal Website © 2021</small>
        </div>
      </div>
      <div className="about-container">
        <img className="about-image" src={img} alt="" />
        <div className="container">
          <div className="details">
            <h2 className="about-title">
              About <span className="name">HASIB </span>
            </h2>
            <p>
              <span>Dreamer</span> | <span>Learner</span> |{" "}
              <span>Adventurer</span>
            </p>
            <hr />
            <p>
              Hello! welcome to Hasibul-mania. I'm a web developer. I've skills
              in HTML5,CSS3,Javascript, React, Python, Node, Express, MongoDB,
              Firebase and others.{" "}
            </p>
            <h3 className="link">
              <a className="resume" href="#">
                VIEW MY RESUME
              </a>
            </h3>
          </div>
          <div className="about-me">
            <div className="title">
              <p>Name: </p>
              <p>Birthdate: </p>
              <p>Email: </p>
              <p>District: </p>
              <p>Study: </p> <br />
              <p>Hobby: </p> <br />
            </div>
            <div className="title-value">
              <p className="value">MD HASIBUL ISLAM </p>
              <p className="value">29 JUNE </p>
              <p className="value">HASIEE8004@GMAIL.COM</p>
              <p className="value">LAKSHMIPUR </p>
              <p className="value">BSC IN MECHANICAL ENGINEERING, BUET </p>
              <p className="value">WEB DEVELOPMENT & TRAVELLING</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
