import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Tooltip, Icon, Col, Row } from 'antd'
import './List.css'

const List = ({ supermarkets, handleRemove }) => (
  <div className='center-content wrapper-content'>
    <Row gutter={16} className='wrapper-list'>
      {
        supermarkets.map( supermarket => (
          <Col md={8} sm={12} key={supermarket._id} className='supermarket-item'>
            <Card title={supermarket.name}>
              <Tooltip title="Editar">
                <Link to={`/supermarkets/${supermarket._id}/edit`}>
                  <Icon type="edit" />
                </Link>
              </Tooltip>
              <Tooltip title="Apagar">
                <button className='delete-button' onClick={() => handleRemove(supermarket._id)}>
                  <Icon type="delete" />
                </button>
              </Tooltip>
            </Card>
          </Col>
        ))
      }
    </Row>
  </div>
)

export default List