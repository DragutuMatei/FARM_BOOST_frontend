import React, { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../helpers/AuthContext";
import { port } from "../others/port";

function Anunturi() {
  const [tit, setTit] = useState("");
  const [txt, setTxt] = useState("");
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
  const [data, setR] = useState<any>();

  const deletepost = (id: number) => {
    console.log(id);
    axios
      .post(port + "anunturi/delete", {
        id: id,
      })
      .then((r) => {
        if (r.data.ok) {
          a();
        } else {
          console.log("nu")
        }
      });
  };

  const adauga = () => {
    console.log(txt);
    axios
      .post(port + "anunturi/add", {
        tit: tit,
        txt: txt,
        email: email,
        first: first_name,
        last: last_name,
      })
      .then((r) => {
        if (r.data.ok) {
          seterr(r.data.msg);
          a();
        }
      });
  };

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
          a();
        } else {
          setfirstname(r.data.first_name);
          setlastname(r.data.last_name);
          setemail(r.data.email);
          settel(r.data.tel);
          setemailP(r.data.emailP);
          setlocatie(r.data.locatie);
          setid(r.data.id);
          setAuth(true);
          a();
        }
      });
  }, [window.location]);

  const a = () => {
    axios.get(port + "anunturi/get").then((resp) => {
      setR(resp.data.anunturi);
    });
  };

  return (
    <div className="anunturi">
      {
        authState && (
          <div className="fform">
            <div className="ff">
              <h1>Postează un anunț</h1>
              <input
                type="text"
                placeholder="Scrie titlul postării"
                onChange={(e) => {
                  setTit(e.target.value);
                }}
              />
              <textarea
                placeholder="Scrie anunțul pe care vrei să il postezi(dat, luat in arendă)"
                onChange={(e) => {
                  setTxt(e.target.value);
                }}
                rows={15}
              ></textarea>
              {err && <h2 style={{ color: "#F44336" }}> {err}</h2>}
              <button className="mainbutton hover" onClick={adauga}>
                Adaugă acest anunț!
          </button>
            </div>
          </div>
        )}

      <div className="an">
        {data &&
          data.map((d: any) => (
            <div key={d.id} className="post">
              <div className="tp">
                <h2>
                  {d.user_f} {d.user_l} - {d.email}
                </h2>
                <h3>{d.tit}</h3>
              </div>
              <div className="ct">{d.txt}</div>
              <div className="m">
                <a href={`mailto:${d.email}`} className="buttonContact">
                  Contact {d.user_f}
                </a>
                {d.email === email &&
                  d.user_f === first_name &&
                  d.user_l === last_name && (
                    <div
                      onClick={() => {
                        deletepost(d.id);
                      }}
                      className="buttonContact"
                    >
                      Delete this post
                    </div>
                  )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Anunturi;
