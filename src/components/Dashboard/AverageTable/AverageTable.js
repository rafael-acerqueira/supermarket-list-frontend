import React from 'react'

import './AverageTable.css'

const AverageTable = ({items}) => {
  return (
    <div className='average-value-box'>
      <h2>Detalhamento da última compra</h2>
      <table className='shopping-list-buy-table'>
        <thead className='ant-table-thead'>
          <tr>
            <th className='table-align-center'>Produto</th>
            <th className='table-align-center'>Quantidade</th>
            <th className='table-align-center'>Valor</th>
            <th className='table-align-center'>Valor médio</th>
          </tr>
        </thead>
        <tbody className='ant-table-tbody'>
          { items && items.map( item => (
            <tr key={item._id}>
              <td className='table-align-center'>{item.productName}</td>
              <td className='table-align-center'>{item.quantity}</td>
              <td className='table-align-center'>
                { 
                  new Intl.NumberFormat('pt-BR',
                    { style: 'currency',
                      currency: 'BRL'
                    }).format(item.value)
                }
              </td>
              <td className='table-align-center'>
                { 
                  new Intl.NumberFormat('pt-BR',
                    { style: 'currency',
                      currency: 'BRL'
                    }).format(item.averageValue)
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default AverageTable