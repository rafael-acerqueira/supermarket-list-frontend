import 'antd/dist/antd.css'
import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Layout } from 'antd'

import Root from './screens/Root'

import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout className='layout'>
          <Root />
        </Layout>
      </BrowserRouter>
    )
  }
}

export default App
