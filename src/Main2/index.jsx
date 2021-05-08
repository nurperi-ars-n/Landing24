import React from "react";
import css from "./Main2.module.css";
import selfi from "./selfi.png";
import load from "./load.png";

export const Main2 = () => {
    return <div className={css.Main2}>
            <div className={css.plan}>
                <h4>TESTIMONIALS</h4>
                <h1>Customers's quotes</h1>
                <p>Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an.</p>
            </div>
            <div className={css.planA}>
                <p>Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam.
                     Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.
                                            </p>
                                            <img className={css.selfi} src={selfi} alt=""/>
                                            <p>  <img className={css.load} src={load} alt=""/></p>
                                          
            </div>
            <div className={css.planB}>
                    <p>Quidam vocibus eum ne, erat consectetuer voluptatibu ut nam. 
                    Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.</p>
            </div>
    </div>
}   