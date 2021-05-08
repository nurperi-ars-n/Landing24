import React from "react";
import css from "./Block4.module.css";
import left from "./left.png";
import right from "./right.png";
import ill from "./ill.png";
import circles from "./circles.png";

export const Block4 = () => {
    return <div className={css.bl4}>
           <div className={css.mainA}>
               <h5>OUR RESOURCES</h5>
               <h2>Start reading our blog</h2>
           </div>
           <div className={css.mainB}>
               <img className={css.arrow}  src={right} alt=""/>
               <div className={css.centre}>
                   <div className={css.illustration}><img  src={ill} alt=""/> </div>
                <div className={css.descriptions}> 
                     <h1>How to start planning</h1>
                      <p>Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam.
                     Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.
                      Natum petentium principes mei ea. Tota everti periculis vis ei, quas tibique pro at, 
                      eos ut decore ...
                                        </p>
                </div> 
                    </div>
              
               <img className={css.arrow} src={left} alt=""/>
           </div>
           <div>
               <img className={css.circles} src={circles} alt=""/>
           </div>
    </div>
}
