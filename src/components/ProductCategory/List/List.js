import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Tooltip, Icon, Col, Row } from 'antd'
import './List.css'

const List = ({ productCategories, handleRemove }) => (
  <div className='center-content wrapper-content'>
    <Row gutter={16}>
      {
        productCategories.map( productCategory => (
          <Col span={8} key={productCategory._id} className='supermarket-item'>
            <Card title={productCategory.name}>
              <Tooltip title="Editar">
                <Link to={`/product-categories/${productCategory._id}/edit`}>
                  <Icon type="edit" />
                </Link>
              </Tooltip>
              <Tooltip title="Apagar">
                <a onClick={() => handleRemove(productCategory._id)}>
                  <Icon type="delete" />
                </a>
              </Tooltip>
              <Tooltip title="Listar produtos">
                <Link to={`/product-categories/${productCategory._id}/products`}>
                <Icon type="ordered-list" />
                </Link>
              </Tooltip>
            </Card>
          </Col>
        ))
      }
    </Row>
  </div>
)

export default List