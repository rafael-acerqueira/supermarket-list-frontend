import React, { PureComponent } from 'react'
import { Col, Row } from 'antd'
import moment from 'moment'

import TitleContent from '../../components/UI/TitleContent/TitleContent'
import Chart from '../../components/Dashboard/Chart'
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
      saveOrWaste: 0,
      averageValue: []
    }
  }

  async componentDidMount() {
    try{
      const response =  await api('get', '/shopping-lists/month-by-month')
      this.setState({ 
        graphData: response.data.map(element => ({
           Mês: moment().month(+element._id.month - 1).format("MMMM"), Valor: element.total.toFixed(2)}))
      })
    }catch(error) {
      console.log(error)
    }

    try{
      const response =  await api('get', `/shopping-lists/${new Date().getMonth() + 1}/purchase-quantity`)
      this.setState({ shoppingQuantity: response.data.purchasesThisMonth })
    }catch(error) {
      console.log(error)
    }

    try{
      const response =  await api('get', `/shopping-lists/${new Date().getMonth() + 1}/total-value`)
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
    
    try{
      const response =  await api('get', '/shopping-lists/save-or-waste')
      this.setState({ saveOrWaste: response.data.total < 0 ? response.data.total * -1 : response.data.total })
    }catch(error) {
      console.log(error)
    }
    
  }

  render() {
    const { shoppingQuantity, shoppingValue, averageValue, saveOrWaste } = this.state
    return (
      <div>
        <TitleContent
          title='Dashboard'
          pageInfo='Informações mais relevantes são exibidas abaixo'
        />
        <div className='center-content wrapper-content '>
          <div className='dashboard-wrapper'>
            <Row gutter={16}>
              <Col md={8}>
                <ValueBox 
                  color="shopping-quantity"
                  value={shoppingQuantity}
                  text="Compras no mês"
                  icon="check"
                  quantity={true}
                />
              </Col>
              <Col md={8}>
                <ValueBox 
                  color="shopping-value"
                  value={shoppingValue}
                  text="Valor gasto no mês"
                  icon="dollar"
                />
              </Col>
              <Col md={8}>
                <ValueBox 
                  color={saveOrWaste > 0 ? 'red' : 'green'}
                  value={saveOrWaste}
                  text={saveOrWaste > 0 ? 'gastos a mais em relação ao mês passado' : 'economizados em relação ao mês passado'}
                  icon={saveOrWaste > 0 ? 'alert' : 'trophy'}
                />
              </Col>
            </Row>
            <Row>
              <AverageTable items={averageValue} />
            </Row>
            <Row>
              <Chart 
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
