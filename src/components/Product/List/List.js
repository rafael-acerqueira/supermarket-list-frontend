import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Tooltip, Icon, Col, Row } from 'antd'

const List = ({ products, productCategory, handleRemove }) => {
  return (
    <div className='center-content wrapper-content'>
      <Row gutter={16}>
        {
          products.map( product => (
            <Col span={8} key={product._id} className='supermarket-item'>
              <Card title={product.name}>
                <Tooltip title="Editar">
                  <Link to={`/product-categories/${productCategory._id}/products/${product._id}/edit`}>
                    <Icon type="edit" />
                  </Link>
                </Tooltip>
                <Tooltip title="Apagar">
                  <button className='delete-button' onClick={() => handleRemove(product._id)}>
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
}

export default List