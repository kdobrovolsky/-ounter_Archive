import { Button } from "../ui/button/Button";

export const SettingsCounter = () => {
    return(
        <div>
    <div className="container">
      <div className="app">
        <div>
       <label htmlFor="">maxValue:</label>
       <input type="text" name="" id="" />
      
       </div>
       <label htmlFor="" className="">startValue:</label>
       <input type="text" name="" id="" />
        <div >
          <Button
            title="set" className="button"/>
        </div>
      </div>
    </div>
        </div>
    )
};