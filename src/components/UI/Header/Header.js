import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

import Logo from '../Logo/Logo'

import './Header.css'

const Header = (props) => {

  const logout = () => {
    props.logoutToken()
    props.history.push("/")
  }

  return (
    <Layout.Header>
      <div className='center-content'>
        <Link to='/'>
          <Logo />
        </Link>
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
      <button className='logout-link' onClick={logout} >Sair</button>
    </Layout.Header>
  )
}

export default withRouter(Header)