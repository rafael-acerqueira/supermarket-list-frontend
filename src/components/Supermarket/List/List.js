import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Tooltip, Icon, Col, Row } from 'antd'
import './List.css'

const List = (props) => (
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
)

export default List