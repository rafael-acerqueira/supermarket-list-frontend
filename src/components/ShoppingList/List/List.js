import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { Card, Tooltip, Button, Icon, Col, Row } from 'antd'

const ShoppingList = (props) => (
  <>
    <div className='panel'>
      <div className='center-content'>
        <h1 className='page-title'>Listas de Compras</h1>
        <Tooltip title="Novo">
          <Button type='primary' className="add-button">
            <Link to='/shopping-lists/new'>
              <Icon type="plus" />
            </Link>
          </Button>
        </Tooltip>
        <span className='page-info'>Abaixo estão listadas as listas de compras cadastradas</span>
      </div>
    </div>
    <div className='center-content wrapper-content'>
      <Row gutter={16}>
        {
          props.shoppingLists.map( shoppingList => (
            <Col span={8} key={shoppingList._id} className='supermarket-item'>
              <Card title={moment.utc(shoppingList.date).format('DD/MM/YYYY')}>
                <Tooltip title="Editar">
                  <Link to={`/shopping-lists/${shoppingList._id}/edit`}>
                    <Icon type="edit" />
                  </Link>
                </Tooltip>
                <Tooltip title="Apagar">
                  <a onClick={() => props.handleRemove(shoppingList._id)}>
                    <Icon type="delete" />
                  </a>
                </Tooltip>
              </Card>
            </Col>
          ))
        }
      </Row>
    </div>
  </>
)

export default ShoppingList