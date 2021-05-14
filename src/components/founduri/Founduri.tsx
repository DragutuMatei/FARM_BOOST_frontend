import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../helpers/AuthContext";
import { port } from "../others/port";
import Main from "../profile/Main";
import emailjs from "emailjs-com";

function Founduri() {
  const [pamant, setPamant] = useState<number>();
  const { authState, setAuth }: any = useContext<object>(AuthContext);
  const [verificat, setVerificat] = useState<boolean>(false);

  const [extrasDeCont, setExtrasDeCont] = useState<any>("");
  const [hectare, setHectare] = useState<any>();
  const [leguma, setLeguma] = useState<any>("");
  const [fisc, setFisc] = useState<any>("");
  const [buletin, setBuletin] = useState<any>("");
  const [proprietate, setProprietate] = useState<any>("");
  const [arendare, setArendare] = useState<any>([]);

  const [id, setid] = useState<number>();
  const [first_name, setfirstname] = useState<string>("");
  const [last_name, setlastname] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [tel, settel] = useState<string>("");
  const [emailP, setemailP] = useState<string>("");
  const [locatie, setlocatie] = useState<string>("");
  const[verificare, setverificare] = useState<boolean>(false);
  const[links, setlinks] = useState<[]>([]);
  
  const file = (a: any) => {
    let n: any = [];
    for (let i = 0; i < a.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(a[i]);
      reader.onload = () => {
        n.push(reader.result);
      };
    }
    setArendare(n);
  };

  const single = (mood: any, care: string) => {
    const reader = new FileReader();
    reader.readAsDataURL(mood);
    reader.onload = () => {
      switch (care) {
        case "extrasDeCont":
          setExtrasDeCont(reader.result);
          break;
        case "dovadaFacturaFiscala":
          setFisc(reader.result);
          break;
        case "copiebuletin":
          setBuletin(reader.result);
          break;
        case "titluProprietate":
          setProprietate(reader.result);
          break;
      }
    };
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
  }, []);
  const [err, seterr] = useState<string>("");

  const verifica = (e: any) => {
    if (
      hectare != null &&
      hectare != undefined &&
      leguma !== "any" &&
      extrasDeCont !== "" &&
      fisc !== "" &&
      buletin !== ""
    ) {
      console.log("As");
      axios
        .post(port + "mes/sendEmail", {
          extrasDeCont: extrasDeCont,
          // hectare: hectare,
          // leguma: leguma,
          fisc: fisc,
          buletin: buletin,
          proprietate: proprietate,
          arendare: arendare,
          // emailP: emailP,
          // email: email,
          // first_name: first_name,
        })
        .then((r) => {
          if (r.data.ok) {
            console.log(r.data.links);
            setlinks(r.data.links);
            setverificare(true);
            seterr("formularul fost verificat cu succes!");
          }
        });
    } else {
      console.log("As33333");
      seterr("Toate campurile trebuie completate!");
    }
  };

  if (!authState) {
    return (
      <h1>
        Nu esti deja logat, ce vr sa faci aici? vr sa iti iei mare hack? :))
      </h1>
    );
  } else
    return (
      <div className="fonduri">
        <Main linia1="Completează formularul pentru a vedea dacă poți primi fonduri" />
        <form action={`https://formsubmit.co/${emailP}`} method="POST" className="formu_ala_blana">
          <div className="row">
            <h3> Pune o poza cu extrasul de cont</h3>
            <input
              type="file"
              name="extrasDeCont"
              onChange={(e) => {
                if (e.target.files) {
                  single(e.target.files[0], "extrasDeCont");
                }
              }}
            />
          </div>
          <div className="row">
            <h3>Scrie cate hectare ai</h3>
            <input
              type="number"
              name="hectare"
              onChange={(e) => {
                if (e.target.value) {
                  setHectare(parseInt(e.target.value));
                }
              }}
            />
          </div>
          <div className="row">
            <h3>Alege ce tip de leguma ai: </h3>
            <select
              name="legume"
              id=""
              onChange={(e) => {
                if (e.target.value) {
                  setLeguma(e.target.value);
                }
              }}
            >
              <option value="any">Any</option>
              <option value="Castraveți">Castraveți</option>
              <option value="Roșii">Roșii</option>
              <option value="Ardei">Ardei</option>
              <option value="Varză">Varză</option>
              <option value="Vinete">Vinete</option>
            </select>
          </div>
          <div className="row">
            <div className="t">
              <h3>Pune o poza cu dovada facturii fiscale</h3>
              <input
                type="file"
                name="dovadaFacturaFiscala"
                onChange={(e) => {
                  if (e.target.files) {
                    single(e.target.files[0], "dovadaFacturaFiscala");
                  }
                }}
              />
            </div>
            <div className="b">
              <img
                src={require("../../images/gifs/document.gif").default}
                alt=""
              />
              <h4>
                Nu ai actul? Dowloadeaza-l de aici {"  "}
                <a
                  style={{ marginLeft: 5 }}
                  href={
                    require("../../images/documente/facturaFiscala1.jpg")
                      .default
                  }
                  download
                >
                  {"  "} 1) {"  "}
                </a>
                <a
                  style={{ marginLeft: 5 }}
                  href={
                    require("../../images/documente/facturaFiscala2.jpg")
                      .default
                  }
                  download
                >
                  {"  "} 2) {"  "}
                </a>
              </h4>
            </div>
          </div>
          <div className="row">
            <h3>Pune o poza cu o copia de buletin</h3>
            <input
              type="file"
              name="copiebuletin"
              onChange={(e) => {
                if (e.target.files) {
                  single(e.target.files[0], "copiebuletin");
                }
              }}
            />
          </div>
          <h1>Alege o optiune</h1>
          <div className="optiuni">
            <div
              className="opt"
              onClick={() => {
                setPamant(1);
              }}
            >
              <img src={require("../../images/gifs/ai.gif").default} alt="" />
              <h3>Am pamantul meu</h3>
            </div>
            <div
              className="opt"
              onClick={() => {
                setPamant(2);
              }}
            >
              <img src={require("../../images/gifs/n-ai.gif").default} alt="" />
              <h3>Nu am pamantul meu</h3>
            </div>
          </div>
          {pamant == 1 ? (
            <>
              <div className="row">
                <h3>Pune o poza cu titlul de proprietate </h3>
                <input
                  type="file"
                  name="titluProprietate"
                  onChange={(e) => {
                    if (e.target.files) {
                      single(e.target.files[0], "titluProprietate");
                    }
                  }}
                />
              </div>
            </>
          ) : (
            pamant == 2 && (
              <>
                <div className="row">
                  <div className="t">
                    <h3>Puteti pozele cu contractul de arendare</h3>
                    <input
                      type="file"
                      multiple
                      name="contractArendare"
                      onChange={(e) => {
                        if (e.target.files) {
                          file(e.target.files);
                        }
                      }}
                    />
                  </div>
                  <div className="b">
                    <img
                      src={require("../../images/gifs/document.gif").default}
                      alt=""
                    />
                    <h4>
                      Nu ai actul? Dowloadeaza-l de aici {"  "}
                      <a
                        style={{ marginLeft: 5 }}
                        href={
                          require("../../images/documente/arendare1.jpeg")
                            .default
                        }
                        download
                      >
                        {"  "} 1) {"  "}
                      </a>
                      <a
                        style={{ marginLeft: 5 }}
                        href={
                          require("../../images/documente/arendare2.jpeg")
                            .default
                        }
                        download
                      >
                        {"  "} 2) {"  "}
                      </a>
                      <a
                        style={{ marginLeft: 5 }}
                        href={
                          require("../../images/documente/arendare3.jpeg")
                            .default
                        }
                        download
                      >
                        {"  "} 3) {"  "}
                      </a>
                    </h4>
                  </div>
                </div>
              </>
            )
          )}
            <input type="hidden" name="documente" value={links} />
            <input type="hidden" name="documente" value={first_name} />
            <input type="hidden" name="documente" value={last_name} />
            <input type="hidden" name="documente" value={email} />

          {err && <h2 style={{ color: "#F44336" }}> {err}</h2>}

          <div className="mainbutton hover" onClick={verifica}>
              Verifică
          </div>

          {
            verificare && (
              <button className="mainbutton hover" type="submit" >
              trimite email către primarie cu toate datele tale
            </button>
          
            )
          }</form>
      </div>
    );
}

export default Founduri;
