import 'antd/dist/antd.css'
import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Layout } from 'antd'

import Header from './components/UI/Header/Header'
import Footer from './components/UI/Footer/Footer'
import Root from './screens/Root'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout className='layout'>
          <Header />
          <Root />
          <Footer />
        </Layout>
      </BrowserRouter>
    )
  }
}

export default App
