import axios from "axios";
import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { port } from "../others/port";
import { AuthContext } from "../../helpers/AuthContext";
import { useEffect } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [pas, setPas] = useState("");
  const [err, setErr] = useState("");
  const history = useHistory();
  const { authState, setAuth }: any = useContext<object>(AuthContext);
  useEffect(() => {
    document.body.scrollTop = 0;
  }, []);
  const submit = () => {
    if (email === "" || pas === "") {
      setErr("Toate Campurile sunt obligatorii!");
    } else {
      const form = {
        email: email,
        password: pas,
      };

      axios.post(port + "auth/login", form).then((r) => {
        if (r.data.ok) {
          window.localStorage.setItem("accessToken", r.data.accessToken);
          setAuth(true);
          history.push("/");
        } else {
          setErr(r.data.msg);
        }
      });
    }
  };

  if (authState) {
    return (
      <h1>Esti deja logat, ce vr sa faci aici? vr sa iti iei mare hack? :))</h1>
    );
  } else
    return (
      <div className="registerPage">
        <div className="c">
          <h2>LOGARE</h2>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Parolă"
            onChange={(e) => {
              setPas(e.target.value);
            }}
          />
          {err && <h2 style={{ color: "#F44336" }}>{err}</h2>}

          <button type="submit" className="mainbutton" onClick={submit}>
            Submit
          </button>
          <h3>
            Nu ai cont? <Link to="/register">Înregistrează-te</Link>{" "}
          </h3>
        </div>
      </div>
    );
}

export default LoginPage;
