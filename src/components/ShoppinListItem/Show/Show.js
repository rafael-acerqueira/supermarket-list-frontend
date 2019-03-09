import React from 'react'
import moment from 'moment'
import { Table } from 'antd'

import './Show.css'

const Show = ({ shoppingList }) => {
  let dataSource = []
  console.log(shoppingList.items)
  if (shoppingList.items) {
    dataSource = shoppingList.items.map((item, index) => ({
      key: index,
      product: item.product,
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
    <>
      <div className='panel'>
        <div className='center-content'>
          <h1 className='page-title'>
            Lista do dia {moment.utc(shoppingList.date).format('DD/MM/YYYY')} {shoppingList.done? 'está Finalizada' : 'não está finalizada'}
          </h1>
          <span className='page-info'>Abaixo estão listados os itens</span>
        </div>
      </div>
      <div className='center-content wrapper-content'>
        <div className='shopping-list-show'>
          <Table dataSource={dataSource} columns={columns} />
        </div>
      </div>
    </>
  )
} 

export default Show