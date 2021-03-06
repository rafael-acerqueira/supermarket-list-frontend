import React from 'react'
import { Table } from 'antd'

const Show = ({ items }) => {
  let dataSource = []
  if (items) {
    dataSource = items.map((item, index) => ({
      key: index,
      product: item.productName,
      quantity: item.quantity,
      value:
        new Intl.NumberFormat('pt-BR',
          { style: 'currency',
            currency: 'BRL'
          }).format(item.value),
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
      <div className='shopping-list-show table-wrapper'>
        <Table dataSource={dataSource} columns={columns} size/>
      </div>
    </div>
  )
}

export default Show