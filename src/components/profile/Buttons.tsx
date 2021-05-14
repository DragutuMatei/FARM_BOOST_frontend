import React from "react";
import { Link } from "react-router-dom";

function Buttons() {
  return (
    <div className="butt">
      <svg
        width="1428"
        height="121"
        className="img2"
        viewBox="0 0 1428 121"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1518 104.268L1454.75 86.241C1391.5 68.214 1265 32.161 1138.5 32.161C1012 32.161 885.5 68.214 759 92.25C632.5 116.285 506 128.303 379.5 116.285C253 104.268 126.5 68.214 63.25 50.187L0 32.161V4.5H63.25C126.5 4.5 253 4.5 379.5 4.5C506 4.5 632.5 4.5 759 4.5C885.5 4.5 1012 4.5 1138.5 4.5C1265 4.5 1391.5 4.5 1454.75 4.5H1518V104.268Z"
          fill="#583D72"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1518 85.051L1454.75 68.946C1391.5 52.841 1265 20.6307 1138.5 20.6307C1012 20.6307 885.5 52.841 759 74.314C632.5 95.788 506 106.525 379.5 95.788C253 85.051 126.5 52.841 63.25 36.736L0 20.6307V0H63.25C126.5 0 253 0 379.5 0C506 0 632.5 0 759 0C885.5 0 1012 0 1138.5 0C1265 0 1391.5 0 1454.75 0H1518V85.051Z"
          fill="white"
        />
      </svg>

      <div className="buttons">
        
        <Link to="/fonduri" className="buton">
          <img src={require("../../images/gifs/bani.gif").default} alt="" />
          <h1>Trimite actele pentru fonduri</h1>
        </Link>
        <Link to="/adaugaAnunt" className="buton">
          <img src={require("../../images/gifs/post.gif").default} alt="" />
          <h1>Adaugă un anunț</h1>
        </Link>
      </div>
      <svg
        width="1428"
        className="img "
        height="197"
        viewBox="0 0 1428 197"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 180.268L63.25 162.241C126.5 144.214 253 108.161 379.5 108.161C506 108.161 632.5 144.214 759 168.25C885.5 192.285 1012 204.303 1138.5 192.285C1265 180.268 1391.5 144.214 1454.75 126.187L1518 108.161V0H1454.75C1391.5 0 1265 0 1138.5 0C1012 0 885.5 0 759 0C632.5 0 506 0 379.5 0C253 0 126.5 0 63.25 0H0V180.268Z"
          fill="#583D72"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 161.051L63.25 144.946C126.5 128.841 253 96.6307 379.5 96.6307C506 96.6307 632.5 128.841 759 150.314C885.5 171.788 1012 182.525 1138.5 171.788C1265 161.051 1391.5 128.841 1454.75 112.736L1518 96.6307V0H1454.75C1391.5 0 1265 0 1138.5 0C1012 0 885.5 0 759 0C632.5 0 506 0 379.5 0C253 0 126.5 0 63.25 0H0V161.051Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

export default Buttons;
