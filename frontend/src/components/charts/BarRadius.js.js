import React from 'react'
import { RadialBarChart, RadialBar, Legend,  ResponsiveContainer  } from "recharts";

const data = [
  {
    name: "Over All",
    uv: 31.47,
    pv: 8000,
    fill: "#8884d8",
  },
  // {
  //   name: "25-29",
  //   uv: 26.69,
  //   pv: 4567,
  //   fill: "#83a6ed",
  // },
  {
    name: "Past 30 days",
    uv: 15.69,
    pv: 6000,
    fill: "#8dd1e1",
  },
  // {
  //   name: "35-39",
  //   uv: 8.22,
  //   pv: 9800,
  //   fill: "#82ca9d",
  // },
  {
    name: "Past 7 days",
    uv: 8.63,
    pv: 2008,
    fill: "#a4de6c",
  },
  {
    name: "Yesterday",
    uv: 2.63,
    pv: 4800,
    fill: "#d0ed57",
  },
  {
    name: "Today",
    uv: 6.67,
    pv: 4800,
    fill: "#ffc658",
  },
];

const style = {
  top: 0,
  left: 250,
  lineHeight: "24px",
  fontSize:"13px",
};

const BarRadius = () => {
  return (
    <div style={{ width: '100%', height: 280 }}>
      <ResponsiveContainer>
      <RadialBarChart
      // width={500}
      // height={300}
      cx={180}
      cy={150}
      innerRadius={20}
      outerRadius={140}
      barSize={14}
      data={data}
    >
      <RadialBar
        minAngle={15}
        // fill={"#000"}
        label={{ position: "insideStart", fill: "#1a1c38",fontSize: 12  }}
        background={{ fill: '#C3C3C3' }}
        clockWise
        dataKey="uv"
      />
      <Legend
        iconSize={11}
        // width={120}
        // height={140}
        layout="vertical"
        verticalAlign="middle"
        wrapperStyle={style}
      />
    </RadialBarChart>
    </ResponsiveContainer>
    </div>
  )
}

export default BarRadius
