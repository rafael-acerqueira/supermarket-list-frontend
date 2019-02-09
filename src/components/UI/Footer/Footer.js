import React from 'react'
import { Layout, Icon } from 'antd'

import './Footer.css'

const Footer = () => (
  <Layout.Footer>
    <strong>Copyright &copy; 2019</strong>
    <span className='developedby'>
      Desenvolvido com <Icon type="heart" theme="filled" /> por
      <strong> Rafael Aquino</strong>
    </span>
  </Layout.Footer>
)

export default Footer