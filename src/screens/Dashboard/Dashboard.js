import React, { PureComponent } from 'react'
import { Col, Row } from 'antd'
import moment from 'moment'

import TitleContent from '../../components/UI/TitleContent/TitleContent'
import Graph from '../../components/Dashboard/Graph'
import ValueBox from '../../components/Dashboard/ValueBox/ValueBox'
import AverageTable from '../../components/Dashboard/AverageTable/AverageTable'
import api from '../../api'

class Dashboard extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      graphData: [],
      shoppingQuantity: 0,
      shoppingValue: 0,
      averageValue: []
    }
  }

  async componentDidMount() {
    try{
      const response =  await api('get', '/shopping-lists/month-by-month')
      this.setState({ 
        graphData: response.data.map(element => ({ mes: moment().month(+element._id.month - 1).format("MMMM"), valor: element.total}))
      })
    }catch(error) {
      console.log(error)
    }

    try{
      const response =  await api('get', `/shopping-lists/${new Date(). getMonth() + 1}/purchase-quantity`)
      this.setState({ shoppingQuantity: response.data.purchasesThisMonth })
    }catch(error) {
      console.log(error)
    }

    try{
      const response =  await api('get', `/shopping-lists/${new Date(). getMonth() + 1}/total-value`)
      this.setState({ shoppingValue: response.data.total })
    }catch(error) {
      console.log(error)
    } 
    
    try{
      const response =  await api('get', '/shopping-lists/product-average')      
      this.setState({ averageValue: response.data })
    }catch(error) {
      console.log(error)
    }     
  }

  render() {
    const { shoppingQuantity, shoppingValue, averageValue } = this.state
    return (
      <div>
        <TitleContent
          title='Dashboard'
          pageInfo='Informações mais relevantes são exibidas abaixo'
        />
        <div className='center-content wrapper-content '>
          <div className='dashboard-wrapper'>
            <Row gutter={16}>
              <Col span={8}>
                <ValueBox 
                  color="shopping-quantity"
                  value={shoppingQuantity}
                  text="Compras no mês"
                  icon="check"
                />
              </Col>
              <Col span={8}>
                <ValueBox 
                  color="shopping-value"
                  value={shoppingValue}
                  text="Valor gasto no mês"
                  icon="dollar"
                />
              </Col>
              <Col span={8}>
                <ValueBox 
                  color="red"
                  value={0}
                  text="Relação entre mês corrente e anterior"
                  icon="alert"
                />
              </Col>
            </Row>
            <Row>
              <AverageTable items={averageValue} />
            </Row>
            <Row>
              <Graph 
                data={this.state.graphData}
              />
            </Row>
          </div>
        </div>
      </div>
    )
  }
}


export default Dashboard
