import 'antd/dist/antd.css'
import React, { Component } from 'react'
import { Layout } from 'antd'

import Header from './components/UI/Header/Header'

class App extends Component {
  render() {
    return (
      <Layout className='layout'>
        <Header />
      </Layout>
    )
  }
}

export default App
