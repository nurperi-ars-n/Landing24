import css from "./Nav1.module.css";
import img from "./logo.png";
import f from './f.png';
import tg from './tg.png';
import math from './math.png';
import bird from './bird.png';
export const Nav1 = () => {
    return <div>
        <hr className={css.linees} />
         <div className={css.nav1}>

         <div className={css.spisok}>  
         <div className={css.krug}>
                <img src={img} alt="" />
         </div>
         
            <li>Home</li>
            <li>Blog</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Documentation</li>
            <p>Copyright © 2018 by Random site</p>
            </div>
            <div className={css.imges}>
                <img src={f} alt="" />
                <img src={tg} alt="" />
                <img src={bird} alt="" />
                <img src={math} alt="" />
                <button>Get started</button>
            </div>
    </div>
    </div>
   
}