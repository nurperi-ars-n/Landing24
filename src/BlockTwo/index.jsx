import React from "react";
import css from "./Block2.module.css";
import img from "./il.png"

export const BlockTwo = () => {
    return <div className={css.blockTwo}>
        <div className={css.aMain}>
            <b>DESKTOP AND MOBILE APP</b>
            <h1><strong> Plan </strong>and <strong> manage</strong></h1>
            <p>Brute laoreet efficiendi id his, ea illum nonumes luptatum <br/>
            pro. Usu atqui laudem an, insolens gubergren similique<br/>
            est cu. Et vel modus congue vituperata. Solum patrioque <br/>
             no sea. Mea ex malis mollis oporteat. Eum an expetenda 
             consequat.</p>
             <div className={css.btns}>
            <button className={css.btnOne}>View video ▷</button>
             <button className={css.btnTwo}>See features</button>
             </div>
             
        </div>
        <div className={css.bMain}>
            <img src={img} alt=""/>
        </div>
    </div>
}