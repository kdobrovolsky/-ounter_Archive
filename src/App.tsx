import "./App.css";
import { Counter } from "./components/counter/Counter";
import { SettingsCounter } from "./components/settingsCounter/SettingsCounter";


export function App() {
  return(
    <div>
       <Counter />
       <SettingsCounter/>
    </div>
  )
  
}
