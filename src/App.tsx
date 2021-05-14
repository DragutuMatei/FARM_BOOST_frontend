import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutPage from "./components/about/AboutPage";
import Anunturi from "./components/Anunturi/Anunturi";
import Founduri from "./components/founduri/Founduri";
import HomePage from "./components/home/HomePage";
import LoginPage from "./components/login/LoginPage";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/others/Footer";
import Navbar from "./components/others/Navbar";
import { port } from "./components/others/port";
import ProfilePage from "./components/profile/ProfilePage";
import RegisterPage from "./components/register/RegisterPage";
import { AuthContext } from "./helpers/AuthContext";

function App() {
  const [authState, setAuth] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get(port + "auth/islogged", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((r) => {
        if (r.data.ok === false) {
          setAuth(false);
        } else {
          setAuth(true);
        }
      });
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ authState, setAuth }}>
        <Router>
          <Navbar />
          <div style={{ width: "100vw", height: "65px" }}></div>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/register" exact component={RegisterPage} />
            <Route path="/profile" exact component={ProfilePage} />
            <Route path="/fonduri" exact component={Founduri} />
            <Route path="/about" exact component={AboutPage} />
            <Route path="/adaugaAnunt" exact component={Anunturi} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </AuthContext.Provider>
    </>
  );
}

export default App;
