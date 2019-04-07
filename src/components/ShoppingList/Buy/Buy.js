import React from 'react'
import { Select, Button } from 'antd'

import './Buy.css'

const Option = Select.Option

const Buy = ({
  shoppingList,
  supermarkets,
  markAsFounded,
  handleChangeValue,
  markAsDone,
  handleChangeSupermarket
 }) => {
    return (
      <div>
        <div className='center-content wrapper-content shopping-list-buy'>
          <div className='shopping-list-show'>
            <div className='shopping-list-supermarket'>
              <label htmlFor='supermarket' className='shopping-list-supermarket-label'>Supermercado: </label>
              <Select
                name='supermarket'
                value={shoppingList.supermarket}
                onChange={(supermarket) => handleChangeSupermarket(supermarket)}
              >
                {supermarkets.map( supermarket => (
                  <Option key={supermarket._id} value={supermarket._id}>{supermarket.name}</Option>
                ))}
              </Select>
            </div>
            <div className='table-wrapper'>
              <table className='shopping-list-buy-table'>
                <thead className='ant-table-thead'>
                  <tr>
                    <th className='table-align-center'>Produto</th>
                    <th className='table-align-center'>Quantidade</th>
                    <th className='table-align-center'>Encontrado?</th>
                    <th className='table-align-center'>Valor</th>
                  </tr>
                </thead>
                <tbody className='ant-table-tbody'>
                  { shoppingList.items && shoppingList.items.map( item => (
                    <tr key={item._id}>
                      <td className={`table-align-center ${item.found ? 'found' : ''}`}>{item.productName}</td>
                      <td className={`table-align-center ${item.found ? 'found' : ''}`}>{item.quantity}</td>
                      <td className='table-align-center'>
                        <input
                          type='checkbox'
                          name='value'
                          onChange={() => markAsFounded(shoppingList._id, item._id)}
                          checked={item.found}
                        />
                      </td>
                      <td className='table-align-center'>
                        { item.found &&
                          <input
                              type='number'
                              name='value'
                              className='value-input'
                              onChange={(e) => handleChangeValue(shoppingList._id, item._id, e.target.value)}
                              value={item.value}
                            />
                        }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Button
              type="primary"
              htmlType="submit"
              className='shopping-list-done'
              onClick={() => markAsDone(shoppingList._id)}
              disabled={shoppingList.items.filter(item => item.found).length === 0}
            >
              Finalizar Compra
            </Button>
          </div>
        </div>
      </div>
    )
  }
export default Buy