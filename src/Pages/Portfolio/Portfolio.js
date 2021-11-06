import React from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="home portfolio">
      <div className="section menus">
        <Link to="/">
          <i className="fas fa-home "></i> Home{" "}
        </Link>
        <Link to="/about">
          <i className="fas fa-user "></i> About{" "}
        </Link>
        <Link className="active" to="/portfolio">
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

      <div className="section">

        <div className="sub-section">
            <div className="item-container">
                <img src="https://images.unsplash.com/photo-1635967200576-004b9c9e7fb7?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                <img src="https://images.unsplash.com/photo-1635847858229-bf666ad5a698?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            <div className="item-container">
                <img src="https://images.unsplash.com/photo-1634351439307-45d271b29797?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                <img src="https://images.unsplash.com/photo-1635454022133-e287f3924950?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            <div className="item-container">
                <img src="https://images.unsplash.com/photo-1634451835737-216e6cc8573c?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQxfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                <img src="https://images.unsplash.com/photo-1636137088104-ab8cbb30d645?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            
        </div>
        
      </div>
    </div>
  );
};

export default Portfolio;
