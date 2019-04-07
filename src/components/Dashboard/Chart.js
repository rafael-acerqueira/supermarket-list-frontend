import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const Chart = ({ data }) => (
  <div className='center-content wrapper-content'>
    <h2 className='text-center'>Gastos mês a mês</h2>
    <ResponsiveContainer width={'99%'} height={400}>
      <LineChart width={1100} height={400} data={data}>
        <Line type="monotone" dataKey="Valor" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="Mês" />
        <YAxis />
        <Tooltip
          formatter={(value) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }
        ).format(value)}/>
      </LineChart>
    </ResponsiveContainer>
  </div>
)

export default Chart