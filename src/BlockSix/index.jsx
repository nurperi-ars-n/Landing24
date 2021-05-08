import css from "./Block6.module.css";
import bckg from "./bckg.png"
export const Block6 = () => {
   
    return  <div className={css.block6}>
        <div style={back} className={css.main}>
                <h5>PLAN YOUR LIFE</h5>
                <h2 className={css.shrift}>Get <strong> started </strong>now</h2>
                <p>Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, 
                    insolens <br/> gubergren similique est cu. Et vel modus congue vituperata.</p>
                    <div className={css.buttons}>
                        <button className={css.butt1}>View pricing</button>
                         <button className={css.butt2}>Read documentation</button> 
                    </div>
                   
        </div>
        </div>

}

const back = {
    backgroundImage: `url("${bckg}")`,
    backgroundSize: "1297px 319px",
    backgroundOrigin: 'content-box',
}