import React from 'react'
import {Form, Icon, Input, Button } from 'antd'
import './Login.css'

import Logo from '../UI/Logo/Logo'

const Login = ({ handleSignIn, onChangeEmail, onChangePassword, error }) => (
  <>
    <div className='login-page-wrapper'></div>
    <Form onSubmit={handleSignIn} className="login-form">
      <Logo />
      {error && <p className='login-form-error'>{error}</p>}
      <Form.Item>
        <Input
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
          type="email"
          placeholder="email"
          onChange={e => onChangeEmail(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
          type="password"
          placeholder="Password"
          onChange={e => onChangePassword(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Entrar
        </Button>
      </Form.Item>
    </Form>
  </>
)

export default Login