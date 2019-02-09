import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'

import './Header.css'

const Header = () => (
  <Layout.Header>
    <div className='logo'>
      <Icon type="shopping-cart" />
      <h1 className='logo-title'>My Supermarket List</h1>
    </div>
    <Menu mode='horizontal' defaultSelectedKeys={['1']} theme="dark" >
      <Menu.Item key="1">
        <Icon type='dashboard' />
        <span>Item 1</span>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to='/supermarkets/list'>
          <Icon type='shop' />
          <span>Supermarkets</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type='shop' />
        <span>Item 3</span>
      </Menu.Item>
    </Menu>
  </Layout.Header>
)

export default Header