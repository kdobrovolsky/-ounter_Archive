import  s from "../tableCounter/tableCounter.module.css";

type TableCounter = {
  count: number;
  maxValue: number
  startValue: number
  isInvalid: boolean
};

export const TableCounter = ({ count,maxValue,isInvalid,startValue }: TableCounter) => {
  const classCounter = count === maxValue ? s.counter : s.countCounter;
  return <div className={classCounter }>
   {isInvalid && <p>Incorrect value!!</p> || startValue < 0?<p> Incorrect value!!</p>:count}
  </div>;
  
};
