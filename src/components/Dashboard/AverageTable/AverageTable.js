import React from 'react'
import { Table } from 'antd'

import './AverageTable.css'

const AverageTable = ({items}) => {
  let dataSource = []
  if (items) {
    dataSource = items.map((item, index) => ({
      key: index,
      product: item.productName,
      averageValue: item.averageValue
    }))
  }

  const columns = [{
    title: 'Produto',
    dataIndex: 'product',
    key: 'product'
  }, {
    title: 'Valor médio',
    dataIndex: 'averageValue',
    key: 'averageValue'
  }]

  return (
    <div className='average-value-box'>
      <h2>Preço médio dos produtos da última compra</h2>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  )
}
export default AverageTable