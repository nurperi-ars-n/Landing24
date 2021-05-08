import React from "react";
import css from "./Block1.module.css";
import i from "./playbutton.png";
import img from "./clouds.png"

export const BlockOne = () => {
        return <div className={css.blockOne} style={{backgroundImage:`url("${img}")`}}> 
        <div className={css.planA}>
                <h4>PLAN YOUR LIFE</h4>
            <h3>Increase your <strong>productivity</strong></h3>
            <p>Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu <br/> 
            atqui laudem an, insolens gubergren similique est cu. Et vel <br/>
            modus congue vituperata.</p>
               <img src={i} alt=""/>
             </div>
           
        </div>
}