import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Tooltip, Icon, Col, Row } from 'antd'

const List = ({ productCategories, handleRemove }) => (
  <div className='center-content wrapper-content'>
    <Row gutter={16} className='wrapper-list'>
      {
        productCategories.map( productCategory => (
          <Col md={8} sm={12} key={productCategory._id} className='supermarket-item'>
            <Card title={productCategory.name}>
              <Tooltip title="Editar">
                <Link to={`/product-categories/${productCategory._id}/edit`}>
                  <Icon type="edit" />
                </Link>
              </Tooltip>
              <Tooltip title="Apagar">
                <button className='delete-button' onClick={() => handleRemove(productCategory._id)}>
                  <Icon type="delete" />
                </button>
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