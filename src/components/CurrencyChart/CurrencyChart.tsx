import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

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
  const onMonthHandler = () => {
    setData(dataArr && dataArr.slice(-30));
  };
  const onYearHandler = () => {
    setData(dataArr && dataArr);
  };
  const onWeekHandler = () => {
    setData(dataArr && dataArr.slice(-7));
  };
  if (!data) {
    return <div>No chart data</div>;
  }
  console.log('data', data);
  return (
    <>
      <input defaultChecked id={'year'} name={'chart'} type="radio" onClick={onYearHandler} />
      <label htmlFor="year">last year</label>
      <input id={'month'} name={'chart'} type="radio" onClick={onMonthHandler} />
      <label htmlFor="month">last month</label>
      <input id={'week'} name={'chart'} type="radio" onClick={onWeekHandler} />
      <label htmlFor="week">last week</label>
      <LineChart
        width={700}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </>
  );
}
export default CurrencyChart;
