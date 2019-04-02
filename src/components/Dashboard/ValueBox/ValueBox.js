import React from 'react'
import { Icon } from 'antd'

import './ValueBox.css'

const ValueBox = ({ color, value, text, icon, quantity }) => (
  <div>
    <div className={`small-box bg-${color}`}>
      <div className='inner'>
        <h3 className='inner-value'>
          {!quantity
            ?
              new Intl.NumberFormat('pt-BR',
                { style: 'currency',
                  currency: 'BRL'
                }).format(value)
            :
              value
          }
        </h3>
        <p className='inner-text'>{text}</p>
      </div>
      <div className='icon'>
        <Icon type={`${icon}`} />
      </div>
    </div>
  </div>
)

export default ValueBox