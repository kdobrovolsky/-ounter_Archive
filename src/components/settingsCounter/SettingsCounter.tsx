import { Button } from "../ui/button/Button";
import s from "../settingsCounter/settingsCounter.module.css"
import { ChangeEvent } from "react";

type SettingsCounterProps = {
  onChangeMaxValueHandler: (e:ChangeEvent<HTMLInputElement>) => void
  onChangeStartValueHandler: (e:ChangeEvent<HTMLInputElement>) => void
  isInvalid:boolean
  
}


export const SettingsCounter = ({onChangeMaxValueHandler,onChangeStartValueHandler,isInvalid}:SettingsCounterProps) => {
 
  return(
        <div >
    <div className={s.container}>
      <div className={s.counterWrapper}>

      <div className={s.inputWrapper}>
        <div className={s.inputStyle}>
       <label >maxValue:</label>
       <input type="number" onChange={onChangeMaxValueHandler} />
       </div>
        <div className={s.inputStyle}>
       <label  className="">startValue:</label>
       <input type="number" onChange={onChangeStartValueHandler}/>
       </div>
       </div>
     
        <div className={s.buttonWrapper}>
          <Button
            title="SET" className={s.button} disable ={isInvalid}/>
        </div>
        
      </div>
    </div>
        </div>
    )
};