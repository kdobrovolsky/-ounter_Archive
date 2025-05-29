import  s from "../tableCounter/tableCounter.module.css";

type TableCounter = {
  count: number;
  maxValue: number
};

export const TableCounter = ({ count,maxValue }: TableCounter) => {
  const classCounter = count === maxValue ? s.counter : s.appCounter;
  return <div className={classCounter}>{count}</div>;
};
