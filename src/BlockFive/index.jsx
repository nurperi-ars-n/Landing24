import css from "./Block5.module.css";
import down from "./down.png";
import go from "./go.png";
export const Block5 = () => {
    return <div className={css.block5}>
      <h5 className={css.hFive}>Customer help</h5>
      <h3>Frequently asked questions</h3>
      <div className={css.first}>
          <img src={down} alt=""/>
          <p>Reque insolens in vel?</p>
      </div>
      <hr/>
      <div>
          <img src={down} alt=""/>
          <p>Vis rebum error graecis ea, id sit postea accusamus?</p>   
        </div> 
        <hr/>
        <main className={css.different}>  
        <div className={css.question}>
            <img src={go} alt=""/>
           <h5>Lorem repudiandae ne nec?</h5>
        </div>
            <div className={css.pBut}>
                  <p>Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. 
                Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.  
              </p>
                   <button>Go to documentation</button>
            </div>
       </main>
        <hr/>
       <div>
             <img src={down} alt=""/>
             <p>Ad dicit numquam vel. Et eos iudico feugait percipitur?</p>
       </div>
       <hr/>
        <div>
             <img src={down} alt=""/>
             <p>Sea no dico percipitur. Fierent constituam definitiones id eum?</p> 
        </div>
        <hr/>
       </div>
}