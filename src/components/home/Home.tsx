import React from "react";
import Logo from "../others/Logo"; 
import { Parallax } from "react-scroll-parallax";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="firstPage">
      <div className="content">
        <Parallax y={[0, 20]}>
          <div className="txt">
            <h1>
              Suntem aici pentru a-ți pune la dispoziție informațiile și
              mijloacele prin care poți profita de beneficiile culturilor tale
              de leguminoase
            </h1>
            <Link to="/register" className="mainbutton hover">
              CREEAZĂ-ȚI CONT GRATUIT
            </Link>
          </div>
        </Parallax>
        <Parallax y={[30, -60]}>
          <div className="image">
            <Logo />
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default Home;
