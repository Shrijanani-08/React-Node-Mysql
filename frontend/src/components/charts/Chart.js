import React from 'react'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    ResponsiveContainer,
    // CartesianGrid,
    Tooltip
  } from "recharts";
  
  const data = [
    {
      name: "Total",
      uv: 4000,
      pv: 5400,
      amt: 2400
    },
    {
      name: "Past 30 days",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Past 7 days",
      uv: 2000,
      pv: 3800,
      amt: 2290
    },
    {
      name: "Yesterday",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Today",
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
  ];
const Chart = () => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
      <AreaChart
      // width={890}
      // height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="uv"
        stackId="1"
        stroke="#8884d8"
        fill="#8DD1E1"
      />
      <Area
        type="monotone"
        dataKey="pv"
        stackId="1"
        stroke="#82ca9d"
        fill="#A4DE6C"
      />
      <Area
        type="monotone"
        dataKey="amt"
        stackId="1"
        stroke="#ffc658"
        fill="#FFC658"
      />
    </AreaChart>
    </ResponsiveContainer>
    </div>
  )
}

export default Chart
