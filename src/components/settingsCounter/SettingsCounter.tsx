import { Button } from "../ui/button/Button";
import s from "../settingsCounter/settingsCounter.module.css"
export const SettingsCounter = () => {
   
  
  
  return(
        <div >
    <div className={s.container}>
      <div className={s.counterWrapper}>

      <div className={s.inputWrapper}>
        <div className={s.inputStyle}>
       <label htmlFor="" >maxValue:</label>
       <input type="text" name="" id="" />
       </div>
        <div className={s.inputStyle}>
       <label htmlFor="" className="">startValue:</label>
       <input type="text" name="" id="" />
       </div>
       </div>

        <div className={s.buttonWrapper}>
          <Button
            title="set" className={s.button}/>
        </div>
      </div>
    </div>
        </div>
    )
};