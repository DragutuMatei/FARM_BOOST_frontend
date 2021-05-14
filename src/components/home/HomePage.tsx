import React, { useEffect } from "react";
import Avantaje from "./Avantaje";
import Home from "./Home";
import Pasi from "./Pasi";

function HomePage() {
  useEffect(() => {
    document.body.scrollTop = 0;
  }, []);
  return (
    <>
      <Home />
      <Avantaje />
      <Pasi />
    </>
  );
}

export default HomePage;
