import React from "react";
import css from "./Main.module.css";
import i from "./one.png"
import im from "./two.png"
import img from "./thre.png"
import imge from "./four.png"
import  imges from "./five.png"

export const Main = () => {
    return <div className={css.main}>
        <ul>
           <img src={i} alt=""/>
           <img src={im}  alt=""/>
           <img src={img}  alt=""/>
           <img src={imge} alt=""/>
           <img src={imges}  alt=""/>
        </ul>
    </div>
}