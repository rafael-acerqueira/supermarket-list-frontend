import React, { PureComponent } from 'react'
import TitleContent from '../../components/UI/TitleContent/TitleContent'

class Dashboard extends PureComponent {
  render() {
    return (
      <div>
        <TitleContent
          title='Dashboard'
          pageInfo='Informações mais relevantes são exibidas abaixo'
        />
      </div>
    )
  }
}


export default Dashboard
