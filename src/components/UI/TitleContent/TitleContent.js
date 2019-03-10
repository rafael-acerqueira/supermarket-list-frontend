import React from 'react'
import { Link } from 'react-router-dom'
import { Tooltip, Button, Icon } from 'antd'

import './TitleContent.css'

const TitleContent = ({ title, pageInfo, newElementPath }) => (
  <div className='panel'>
    <div className='center-content'>
      <h1 className='page-title'>{title}</h1>
      {
        newElementPath &&
        <Tooltip title="Novo">
          <Button type='primary' className="add-button">
            <Link to={newElementPath}>
              <Icon type="plus" />
            </Link>
          </Button>
        </Tooltip>
      }
      <span className='page-info'>{`${pageInfo} os dados do supermercado abaixo`}</span>
    </div>
  </div>
)

export default TitleContent