import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { Card, Tooltip, Icon, Col, Row } from 'antd'

const ShoppingList = ({ shoppingLists, handleRemove }) => (
  <div className='center-content wrapper-content'>
    <Row gutter={16}>
      {
       shoppingLists.map( shoppingList => {
          const icon =
              shoppingList.done
                ? <Tooltip title="Finalizado"><Icon type="check" /></Tooltip>
                : <Tooltip title="Não Finalizado"><Icon type="stop" /></Tooltip>
          return (
            <Col span={8} key={shoppingList._id} className='supermarket-item'>
              <Card
                title={moment.utc(shoppingList.date).format('DD/MM/YYYY')}
                extra={icon}
              >
                <Tooltip title="Editar">
                  <Link to={`/shopping-lists/${shoppingList._id}/edit`}>
                    <Icon type="edit" />
                  </Link>
                </Tooltip>
                <Tooltip title="Apagar">
                  <a onClick={() =>handleRemove(shoppingList._id)}>
                    <Icon type="delete" />
                  </a>
                </Tooltip>
                {
                  shoppingList.items &&
                  <Tooltip title="Ver itens">
                  <Link to={`/shopping-lists/${shoppingList._id}/items`}>
                      <Icon type="eye" />
                  </Link>
                </Tooltip>
                }
              </Card>
            </Col>
          )
        }
      )
      }
    </Row>
  </div>
)

export default ShoppingList