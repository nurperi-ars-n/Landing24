import React from "react";
import i from "./logo.png";
import im from "./f.png";
import img from "./Vector.png";
import imges from "./bird.png";
import imgess from "./path14.png";
import css from "./Nav.module.css"

export const Nav = () => {
    return <div className={css.nav}>
                <div className={css.circle} >
                        <img src={i} alt="logo"/> 
                </div>
                    
                    <li className={css.lishki}>Home</li>
                    <li className={css.lishki}>Blog</li>
                    <li className={css.lishki}>Features</li>
                    <li className={css.lishki}>Pricing</li>
                    <li className={css.lishki}>Documentation</li>
                    <li className={css.logo}>
                    <img src={im} alt="logo"/>
                    <img src={img} alt="logo"/>
                    <img src={imges} alt="logo"/>
                    <img src={imgess} alt="logo"/> 
                    <button>Get started</button> 
                    </li>
         
            </div>    
    }