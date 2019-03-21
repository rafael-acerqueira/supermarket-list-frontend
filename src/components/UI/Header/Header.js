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
          <Link to='/dashboard'>
            <Icon type='dashboard' />
            <span>Dashboard</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to='/supermarkets/list'>
            <Icon type='shop' />
            <span>Supermercados</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to='/product-categories/list'>
            <Icon type='cluster' />
            <span>Categorias de Produto</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to='/shopping-lists/list'>
          <Icon type="ordered-list" />
            <span>Listas de Compras</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to='/shopping-lists/buy'>
          <Icon type="shopping-cart" />
            <span>Efetuar compra</span>
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  </Layout.Header>
)

export default Header