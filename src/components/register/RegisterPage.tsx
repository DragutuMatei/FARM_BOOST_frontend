import axios from "axios";
import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { port } from "../others/port";
import { AuthContext } from "../../helpers/AuthContext";
import { useEffect } from "react";

function RegisterPage() {
  const [nume, setNume] = useState("");
  const [prenume, setPrenume] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [emailP, setEmailP] = useState("");
  const [pas, setPas] = useState("");
  const [pass, setPass] = useState("");
  const [loc, setLoc] = useState("");
  const [err, setErr] = useState("");
  const { authState, setAuth }: any = useContext<object>(AuthContext);

  useEffect(() => {
    document.body.scrollTop = 0;
  }, []);

  const history = useHistory();
  const submit = () => {
    if (
      nume === "" ||
      prenume === "" ||
      tel === "" ||
      email === "" ||
      loc === "" ||
      emailP === "" ||
      pas === "" ||
      pass === ""
    ) {
      setErr("Toate campurile sunt obligatorii");
    } else {
      if (pas.length < 5 || pass.length < 5) {
        setErr("Parola trebuie sa aiba macar 5 caractere");
      } else {
        if (pass === pas) {
          let form = {
            first_name: nume,
            last_name: prenume,
            tel: tel,
            email: email,
            locatie: loc,
            emailP: emailP,
            password: pas,
          };

          console.log(port);
          axios.post(port + "auth/", form).then((r) => {
            if (r.data.ok) {
              history.push("/login");
            } else {
              setErr(r.data.msg);
            }
          });
        } else {
          setErr("Parolele nu conincid");
        }
      }
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
          <h2>CREARE CONT</h2>
          <input
            type="text"
            placeholder="Nume"
            onChange={(e) => {
              setNume(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Prenume"
            onChange={(e) => {
              setPrenume(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Emailul primăriei"
            onChange={(e) => {
              setEmailP(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Adresa ta(Judet, Oras, strada...)"
            onChange={(e) => {
              setLoc(e.target.value);
            }}
          />
          <input
            type="text"
            pattern="[0-9]{10}"
            placeholder="Număr de telefon"
            onChange={(e) => {
              setTel(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Parolă"
            onChange={(e) => {
              setPas(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Confirmare Parolă"
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          {err && <h2 style={{ color: "#F44336" }}> {err}</h2>}
          <button type="submit" className="mainbutton" onClick={submit}>
            Submit
          </button>
          <h3>
            Ai cont? <Link to="/login">Conectează-te</Link>{" "}
          </h3>
        </div>
      </div>
    );
}

export default RegisterPage;
