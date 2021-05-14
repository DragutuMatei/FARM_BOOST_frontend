import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="top">
        <div className="left">
          <h1>
            <span style={{ color: "#ff8474", fontWeight: 800 }}>
              Farm Boost
            </span>
          </h1>
          <h3>Agricultura pentru toți</h3>
        </div>
        <div className="right">
          <Link to="/linkAscuns">Termeni și condiții</Link>
        </div>
      </div>
      <div className="down">
        <h4>
          Copyright ©2021{" "}
          <span style={{ color: "#ff8474", fontWeight: 800 }}>Farm Boost</span> |
          All rights reserved
        </h4> 
      </div>
    </footer>
  );
}

export default Footer;
