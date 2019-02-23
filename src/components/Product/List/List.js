import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Tooltip, Button, Icon, Col, Row } from 'antd'
import './List.css'

const List = props => {
  return (
    <>
      <div className='panel'>
        <div className='center-content'>
          <h1 className='page-title'>{`Todos os produtos de ${props.productCategory.name}`}</h1>
          <Tooltip title="Novo">
            <Button type='primary' className="add-button">
              <Link to={`/product-categories/${props.productCategory._id}/products/new`}>
                <Icon type="plus" />
              </Link>
            </Button>
          </Tooltip>
          <span className='page-info'>{`Abaixo estão listados todos os produtos cadastrados de ${props.productCategory.name}`}</span>
        </div>
      </div>
      <div className='center-content wrapper-content'>
        <Row gutter={16}>
          {
            props.products.map( product => (
              <Col span={8} key={product._id} className='supermarket-item'>
                <Card title={product.name}>
                  <Tooltip title="Editar">
                    <Link to={`/product-categories/${props.productCategory._id}/products/${product._id}/edit`}>
                      <Icon type="edit" />
                    </Link>
                  </Tooltip>
                  <Tooltip title="Apagar">
                    <a onClick={() => props.handleRemove(product._id)}>
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

}

export default List