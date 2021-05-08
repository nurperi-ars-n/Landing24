import React from "react";
import css from "./Block3.module.css";
import bck from "./bck.png";
import one from "./one.png";
import two from "./two.png";
import three from "./three.png";
import four from "./four.png";

const data = [
    {
        img:one,
        title:"Overview",
        description:"Brute laoreet efficiendi  id his,  ea illum nonumes luptatum pro."
    },
    {
        img:two,
        title:"Files",
        description:"No vim nulla vitae intellegat. Ei enim error ius, solet atomorum  conceptam ex has."
    },
    {
        img:three,
        title:"Save events",
        description:"Brute laoreet efficiendi  id his,  ea illum nonumes luptatum pro."
    },
    {
        img:four,
        title:"Meting chats",
        description:"Brute laoreet efficiendi  id his,  ea illum nonumes luptatum pro."
    },

]

export const Block3 = () => {
    return <div  className={css.block3} >
           <div className={css.bck}>
               <div className={css.first}>
                    <h6>ABOUT US</h6>
               <h2>Read about our app</h2>
               </div>
              <div className={css.iteretion}>
                   {
                 data.map((el,id) => {
                       return <div className={css.colums}>
                        <img src={el.img} alt="" />
                        <h4>{el.title}</h4>
                        <p>{el.description}</p>
                        </div>
                    })
                } 
              </div>
              <div className={css.third}>
                 <button className={css.btn1}>Read more</button>
         <span> - OR -</span>
            <button className={css.btn2}>Get started</button>  
              </div>
           
             </div>  
        </div>

}
