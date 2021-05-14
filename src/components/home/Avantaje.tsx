import React from "react";

function Avantaje() {
  return (
    <div className="avantaje">
      <div className="h1">
        {/* <div className="linie"></div> */}
        {/* <div className="linie"></div> */}
        <h1>Avantajele site-ului nostru:</h1>
        {/* <div className="linie"></div> */}
        {/* <div className="linie"></div> */}
      </div>
      <div className="lista">
        <div className="av">
          <img src={require("../../images/gifs/time.gif").default} alt="" />
          <h3>Timp economisit</h3>
          <p>
            ca agricultor modul în care îți gestionezi timpul este foarte
            important de aceea site-ul{" "}
            <span style={{ color: "#583d72", fontWeight: 800 }}>
              Farm Boost
            </span>{" "}
            îți oferim un program flexibil în funcție de timpul tău pentru a
            putea beneficia de toate avantajele pămânului pe care îl deții
          </p>
        </div>
        <div className="av">
          <img src={require("../../images/gifs/home.gif").default} alt="" />
          <h3>Comoditate</h3>
          <p>
            te-ai săturat să depinzi de programul primariei tale care este în
            dezavantajul tău și de cozile interminabile de oamenii ? Ești la
            cateva click-uri distanță de ați putea introduce informațiile
            necesare obținerii beneficiilor chiar de la tine de acasa fără alte
            complicații
          </p>
        </div>
        <div className="av">
          <img src={require("../../images/gifs/safe.gif").default} alt="" />
          <h3>Siguranță</h3>
          <p>
            și agricultorii pot beneficia de siguranța din propria locuință fără
            posibilele riscuri ale virusului protejându-se și pe ei și pe
            angajații primariilor.
          </p>
        </div>
        <div className="av">
          <img src={require("../../images/gifs/final.gif").default} alt="" />
          <h3>Securitate și gratuitate</h3>
          <p>
            Scopul nostru este ca utilizatorul să beneficieze de protecția
            datelor 100% fără costuri suplimentare.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Avantaje;
