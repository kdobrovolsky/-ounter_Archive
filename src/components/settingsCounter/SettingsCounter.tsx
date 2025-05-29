import { Button } from "../ui/button/Button";
import s from "../settingsCounter/settingsCounter.module.css"
import { ChangeEvent, useState } from "react";


export const SettingsCounter = () => {
  const [maxValue, setMaxValue] = useState<number>(10)
  const [startValue, setStartValue] = useState<number>(0)
  
  const onChangeMaxValueHandler = (e:ChangeEvent<HTMLInputElement>) => {
      const value = +e.currentTarget.value;
      setMaxValue(value)
  }

  const onChangeStartValueHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const value = +e.currentTarget.value;
    setStartValue(value)
}
  const isInvalid = startValue>= maxValue

  
  return(
        <div >
    <div className={s.container}>
      <div className={s.counterWrapper}>

      <div className={s.inputWrapper}>
        <div className={s.inputStyle}>
       <label htmlFor="" >maxValue:</label>
       <input type="number" onChange={onChangeMaxValueHandler} />
       </div>
        <div className={s.inputStyle}>
       <label htmlFor="" className="">startValue:</label>
       <input type="number" onChange={onChangeStartValueHandler}/>
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