import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'

import './Header.css'

const Header = () => (
  <Layout.Header>
    <div className='center-content'>
      <div className='logo'>
        <Icon type="shopping-cart" />
        <h1 className='logo-title'>My Supermarket List</h1>
      </div>
      <Menu mode='horizontal' defaultSelectedKeys={['1']} theme="dark" >
        <Menu.Item key="1">
          <Icon type='dashboard' />
          <span>Dashboard</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to='/supermarkets/list'>
            <Icon type='shop' />
            <span>Supermercados</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type='cluster' />
          <span>Categorias de Produto</span>
        </Menu.Item>
      </Menu>
    </div>
  </Layout.Header>
)

export default Header