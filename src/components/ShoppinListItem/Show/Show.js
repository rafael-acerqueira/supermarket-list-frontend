import React from 'react'
import { Table } from 'antd'

import './Show.css'

const Show = ({ items }) => {
  let dataSource = []
  if (items) {
    dataSource = items.map((item, index) => ({
      key: index,
      product: item.productName,
      quantity: item.quantity,
      value: item.value,
      found: item.found ? 'Sim' : 'Não'
    }))
  }

  const columns = [{
    title: 'Produto',
    dataIndex: 'product',
    key: 'product'
  }, {
    title: 'Quantidade',
    dataIndex: 'quantity',
    key: 'quantity'
  }, {
    title: 'Valor',
    dataIndex: 'value',
    key: 'value'
  }, {
    title: 'Encontrado?',
    dataIndex: 'found',
    key: 'found'
  }]

  return (
    <div className='center-content wrapper-content'>
      <div className='shopping-list-show'>
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </div>
  )
}

export default Show