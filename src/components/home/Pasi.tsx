import React, { useState } from "react";

function Pasi() {

    const [ce_fa_ma, setCf] = useState(false);

    const check = () => {
        setCf(true);
    }

  return (
    <div className="steps">
      <div className="progress">
        <div className="progress_inner">
          <div className="progress_inner__step">
            <label htmlFor="step-1">Te înregistrezi</label>
          </div>
          <div className="progress_inner__step">
            <label htmlFor="step-2">Completezi datele profilului</label>
          </div>
          <div className="progress_inner__step">
            <label htmlFor="step-3">Solicitarea documentelor</label>
          </div>
          <div className="progress_inner__step">
            <label htmlFor="step-4">Creearea dosarelor</label>
          </div>
          <input defaultChecked={true} id="step-1" name="step" type="radio" onClick={()=>{setCf(false)}} />
          <input id="step-2" name="step" type="radio" onClick={check} />
          <input id="step-3" name="step" type="radio"  onClick={check} />
          <input id="step-4" name="step" type="radio"  onClick={check} />
          <div className="progress_inner__bar"></div>
          <div className="progress_inner__bar--set"></div>
          <div className="progress_inner__tabs">
            <div className="tab tab-0">
              <h1>
                Te <b> înregistrezi</b> pe site. 
              </h1>
            </div>
            <div className="tab tab-1">
              <h1>
                Completezi <b> datele necesare </b> creări profilului de utilizator.
              </h1>
            </div>
            <div className="tab tab-2">
              <h1>
                Solicitarea de eliberare a Atestatului de producator și al Carnetului de comercializare.
              </h1>
            </div>
            <div className="tab tab-3">
              <h1>
                Crearea dosarelor prin care poți beneficia de avantajele unui agricultor. 
              </h1>
            </div>
          </div>
          <div className="progress_inner__status">
            <div className="box_base"></div>
            <div className="box_lid"></div>
            <div className="box_ribbon"></div>
            <div className="box_bow">
              <div className="box_bow__left"></div>
              <div className="box_bow__right"></div>
            </div>
            <div className="box_item"></div>
            <div className="box_tag"></div>
            <div className="box_string"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pasi;
