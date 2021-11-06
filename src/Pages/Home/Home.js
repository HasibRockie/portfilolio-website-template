import React from 'react';
import './Home.css'
import image from './dark.jpeg'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
           <div className="section menus">
               <Link className="active" to='/'><i className="fas fa-home "></i> Home </Link>
               <Link to='/about'><i className="fas fa-user "></i> About </Link>
               <Link to='/portfolio'><i className="fas fa-drafting-compass "></i> Portfolio </Link>
               <Link to='/contact'><i className="fas fa-map-marker-alt "></i> Contact </Link>
                
                <br />
                <div className="credit">
                    <small>Designed by <span className="designer">Hasib Rockie</span></small> <br />
                    <small>Personal Website © 2021</small>
                </div>
           </div>
           <div className="section">
                <div className="image">
                    <img src={image} alt="user" />
                </div>
                <div className="details">
                    <h1>MD HASIBUL ISLAM</h1>
                    <p>Hello! I'm a react developer. Also a student of Mechanical Engineering at Bangladesh Univerversity of Engineering & Technology </p>
                    <div className="social-links">
                        <li><a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a></li>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Home;