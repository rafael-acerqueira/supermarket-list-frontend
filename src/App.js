import 'antd/dist/antd.css'
import React, { Component } from 'react'
import { Layout } from 'antd'

import Header from './components/UI/Header/Header'
import Footer from './components/UI/Footer/Footer'

class App extends Component {
  render() {
    return (
      <Layout className='layout'>
        <Header />
        <Footer />
      </Layout>
    )
  }
}

export default App
