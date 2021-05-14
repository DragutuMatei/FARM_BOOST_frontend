import React, { useContext, useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { AuthContext } from "../../helpers/AuthContext";
import { useEffect } from "react";
import axios from "axios";
import { port } from "./port";

function Navbar() {
  const { authState, setAuth }: any = useContext<object>(AuthContext);
  const [name, setName] = useState("");

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
          setName(r.data.first_name);
          setAuth(true);
        }
      });
  }, [window.location.href]);

  return (
    <>
      <header>
        <div className="logo">
          <Link to="/" style={{ fontWeight: 900 }}>
            <div className="img">
              <Logo />
            </div>
          </Link>
        </div>
        <input type="checkbox" className="menu-btn" id="menu-btn" />
        <label htmlFor="menu-btn" className="menu-icon">
          <span className="menu-icon__line"></span>
        </label>
        <ul className="nav-links">
          <li className="nav-link">
            <Link to="/">Acasă</Link>
          </li>
          <li className="nav-link">
            <Link to="/about">Despre Noi</Link>
          </li>
          <li className="nav-link">
            <Link to="/adaugaAnunt">Anunțuri</Link>
          </li>
          {!authState ? (
            <>
              <li className="nav-link">
                <Link to="/register">Înregistrează-te</Link>
              </li>
              <li className="nav-link">
                <Link to="/login">Intră în cont</Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-link">
                <Link to="/profile">{name}</Link>
              </li>
              <li className="nav-link">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    window.localStorage.removeItem("accessToken");
                    window.location.href="/";
                    setAuth(false);
                  }}
                >
                  Deconectează-te
                </a>
              </li>
            </>
          )}
        </ul>
      </header>
    </>
  );
}

export default Navbar;
