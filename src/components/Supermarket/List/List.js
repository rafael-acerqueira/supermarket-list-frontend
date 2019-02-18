import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Tooltip, Button, Icon, Col, Row } from 'antd'
import './List.css'

const List = (props) => (
  <>
    <div className='panel'>
      <div className='center-content'>
        <h1 className='page-title'>Lista dos supermercados</h1>
        <Tooltip title="Novo">
          <Button type='primary' className="add-button">
            <Link to='/supermarkets/new'>
              <Icon type="plus" />
            </Link>
          </Button>
        </Tooltip>
        <span className='page-info'>Abaixo estão listados todos os supermercados cadastrados</span>
      </div>
    </div>
    <div className='center-content wrapper-content'>
      <Row gutter={16}>
        {
          props.supermarkets.map( supermarket => (
            <Col span={8} key={supermarket._id} className='supermarket-item'>
              <Card title={supermarket.name}>
                <Tooltip title="Editar">
                  <Link to={`/supermarkets/${supermarket._id}/edit`}>
                    <Icon type="edit" />
                  </Link>
                </Tooltip>
                <Tooltip title="Apagar">
                  <a onClick={() => props.handleRemove(supermarket._id)}>
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

export default List