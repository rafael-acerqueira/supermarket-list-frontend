import React from 'react'
import { Icon } from 'antd'

import './Logo.css'

const Logo = () => (
  <div className='logo'>
    <Icon type="shopping-cart" />
    <h1 className='logo-title'>My Supermarket List</h1>
  </div>
)

export default Logo