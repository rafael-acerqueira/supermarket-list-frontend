import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Tooltip, Button, Icon, Col, Row } from 'antd'
import './List.css'

const List = (props) => (
  <>
    <div className='panel'>
      <div className='center-content'>
        <h1 className='page-title'>Lista das categorias de produto</h1>
        <Tooltip title="Novo">
          <Button type='primary' className="add-button">
            <Link to='/product-categories/new'>
              <Icon type="plus" />
            </Link>
          </Button>
        </Tooltip>
        <span className='page-info'>Abaixo estão listados todas as categorias de produto cadastradas</span>
      </div>
    </div>
    <div className='center-content wrapper-content'>
      <Row gutter={16}>
        {
          props.productCategories.map( productCategory => (
            <Col span={8} key={productCategory._id} className='supermarket-item'>
              <Card title={productCategory.name}>
                <Tooltip title="Editar">
                  <Link to={`/product-categories/${productCategory._id}/edit`}>
                    <Icon type="edit" />
                  </Link>
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