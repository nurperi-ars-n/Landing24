import React from "react";
import css from "./Main1.module.css";
import one from "./one.png";
import two from "./two.png";

export const Main1 = () => {
    return <div className={css.Main1}>
        <div className={css.oneBl}>
            <img src={one} alt=""/>
            <h1>89%</h1>
            <p>Customers who have <br/>  increased their productivity</p>
        </div>
        <div className={css.twoBl}>
        <img src={two} alt=""/>
        <h1>3123</h1>
        <p>Users who haveused our application</p>
        </div>
    </div>
}