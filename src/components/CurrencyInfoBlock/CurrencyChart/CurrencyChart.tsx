import React, { useEffect, useRef, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import style from './CurrencyChart.module.scss';
type PropsType = {
  history: Array<{ date: string; priceUsd: string; time: number }>;
};

function CurrencyChart({ history }: PropsType) {
  const dataArr = history
    ? history.map((el) => {
        return { name: el.date.slice(0, 10), price: +el.priceUsd };
      })
    : null;

  const [data, setData] = useState(dataArr);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setData(dataArr);
    inputRef.current!.checked = true;
  }, [history]);

  const onMonthHandler = () => {
    setData(dataArr && [...dataArr.slice(-30)]);
  };
  const onYearHandler = () => {
    setData(dataArr && dataArr);
  };
  const onWeekHandler = () => {
    setData(dataArr && [...dataArr.slice(-7)]);
  };
  if (!data) {
    return <div>No chart data</div>;
  }
  return (
    <div className={style.chartBlock}>
      <div className={style.chartBlock__radioButtons}>
        <div>
          <input
            ref={inputRef}
            defaultChecked
            id={'year'}
            name={'chart'}
            type="radio"
            onClick={onYearHandler}
          />
          <label htmlFor="year">last year</label>
        </div>
        <div>
          <input id={'month'} name={'chart'} type="radio" onClick={onMonthHandler} />
          <label htmlFor="month">last month</label>
        </div>
        <div>
          <input id={'week'} name={'chart'} type="radio" onClick={onWeekHandler} />
          <label htmlFor="week">last week</label>
        </div>
      </div>
      <ResponsiveContainer className={style.chartBlock__chart} width="110%" height="100%">
        <LineChart
          data={data}
          width={300}
          height={200}
          margin={{
            top: 20,
            right: 4,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis fontSize={10} className={style.chart__names} dataKey="name" />
          <YAxis fontSize={10} className={style.chart__names} />
          <Tooltip />
          <Legend fontSize={10} />
          <Line
            fontSize={10}
            type="monotone"
            dataKey="price"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
            legendType={'none'}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
export default CurrencyChart;
