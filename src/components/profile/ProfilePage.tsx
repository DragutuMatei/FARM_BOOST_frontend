import React, { useEffect, useState } from "react";
import Main from "./Main";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../helpers/AuthContext";
import { port } from "../others/port";
import Buttons from "./Buttons";

function ProfilePage() {
  const { authState, setAuth }: any = useContext<object>(AuthContext);
  const [first_name, setfirstname] = useState<string>("");
  const [last_name, setlastname] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [tel, settel] = useState<string>("");
  const [emailP, setemailP] = useState<string>("");
  const [locatie, setlocatie] = useState<string>("");
  const [pas, setPas] = useState<string>("");
  const [newp, setnewpas] = useState<string>("");
  const [newp2, setnewpas2] = useState<string>("");
  const [id, setid] = useState<number>();
  const [err, seterr] = useState<string>("");
  const [bunP, setbun] = useState<string>("");
  const [bunPs, setbuns] = useState<string>("");

  useEffect(() => {
    document.body.scrollTop = 0;
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
          setfirstname(r.data.first_name);
          setlastname(r.data.last_name);
          setemail(r.data.email);
          settel(r.data.tel);
          setemailP(r.data.emailP);
          setlocatie(r.data.locatie);
          setid(r.data.id);
          setAuth(true);
        }
      });
  }, [window.location]);

  const update_profile = () => {
    let form = {
      first_name: first_name,
      last_name: last_name,
      tel: tel,
      email: email,
      locatie: locatie,
      emailP: emailP,
      id: id,
    };

    axios.post(port + "auth/update", form).then((r) => {
      if (r.data.ok) {
        setbuns("Profilul a fost updatat!");
        window.localStorage.removeItem("accessToken");
        window.localStorage.setItem("accessToken", r.data.accessToken);
        setemail(r.data.user.email);
        setfirstname(r.data.user.first_name);
      }
    });
  };

  const update_passord = () => {
    if (newp === newp2) {
      const form = {
        oldPassword: pas,
        newPassword: newp,
        id: id,
      };

      axios.post(port + "auth/updatePassword", form).then((r) => {
        if (r.data.ok) {
          window.localStorage.removeItem("accessToken");
          window.localStorage.setItem("accessToken", r.data.accessToken);
          setbun("parolă updatată cu succes!");
        } else {
          seterr(r.data.msg);
        }
      });
    } else {
      seterr("Noile parole nu sunt identice");
    }
  };

  if (!authState) {
    return (
      <h1>
        {" "}
        Nu esti deja logat, ce vr sa faci aici? vr sa iti iei mare hack? :))
      </h1>
    );
  } else
    return (
      <div className="profil">
        <Main nume={first_name} />
        <div className="bak">
          <div className="edit">
            <h1>Editează profilul</h1>
            <div className="row">
              <h3>nume:</h3>
              <input
                type="text"
                defaultValue={first_name}
                onChange={(e) => {
                  setfirstname(e.target.value);
                }}
              />
            </div>
            <div className="row">
              <h3
                title={
                  "oidsfhdsofi hsdao ifh  oidfoihasdof odhfohdsofdafdfadf dsf dasf dsf das fdsf dasf "
                }
              >
                prenume:
              </h3>
              <input
                type="text"
                defaultValue={last_name}
                onChange={(e) => {
                  setlastname(e.target.value);
                }}
              />
            </div>
            <div className="row">
              <h3>numărul tău de telefon:</h3>
              <input
                type="text"
                defaultValue={tel}
                onChange={(e) => {
                  settel(e.target.value);
                }}
              />
            </div>
            <div className="row">
              <h3>adresa ta (Județ, Oraș, stradă...):</h3>
              <input
                type="text"
                defaultValue={locatie}
                onChange={(e) => {
                  setlocatie(e.target.value);
                }}
              />
            </div>
            <div className="row">
              <h3>email-ul tau:</h3>
              <input
                type="text"
                defaultValue={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </div>
            <div className="row">
              <h3>email-ul primariei:</h3>
              <input
                type="text"
                defaultValue={emailP}
                onChange={(e) => {
                  setemailP(e.target.value);
                }}
              />
            </div>
            {bunPs && <h2 style={{ color: "#F44336" }}> {bunPs}</h2>}
            <button className="mainbutton" onClick={update_profile}>
              Editează profilul
            </button>
          </div>
          <div className="pass">
            <h1>Schimbă parola</h1>
            <div className="row">
              <h3>vechea parolă:</h3>
              <input
                type="password"
                onChange={(e) => {
                  setPas(e.target.value);
                }}
              />
            </div>
            <div className="row">
              <h3>noua parolă:</h3>
              <input
                type="password"
                onChange={(e) => {
                  setnewpas(e.target.value);
                }}
              />
            </div>
            <div className="row">
              <h3>confirmă noua parolă:</h3>
              <input
                type="password"
                onChange={(e) => {
                  setnewpas2(e.target.value);
                }}
              />
            </div>
            {err && <h2 style={{ color: "#F44336" }}> {err}</h2>}
            {bunP && <h2 style={{ color: "#F44336" }}> {bunP}</h2>}
            <button className="mainbutton" onClick={update_passord}>
              Update parola
            </button>
          </div>
        </div>
        <Buttons />
      </div>
    );
}

export default ProfilePage;
