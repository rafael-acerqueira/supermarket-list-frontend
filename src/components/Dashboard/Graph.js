import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'

const Graph = ({ data }) => (
  <div className='center-content wrapper-content'>
    <LineChart width={1200} height={400} data={data}>
      <Line type="monotone" dataKey="valor" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="mes" />
      <YAxis />
      <Tooltip />
    </LineChart>
  </div>
)

export default Graph