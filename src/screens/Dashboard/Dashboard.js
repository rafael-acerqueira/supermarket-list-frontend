import React, { PureComponent } from 'react'
import TitleContent from '../../components/UI/TitleContent/TitleContent'
import Graph from '../../components/Dashboard/Graph'
import api from '../../api'
import moment from 'moment'

class Dashboard extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      graphData: []
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
  }

  render() {
    return (
      <div>
        <TitleContent
          title='Dashboard'
          pageInfo='Informações mais relevantes são exibidas abaixo'
        />
        <Graph data={this.state.graphData}/>
      </div>
    )
  }
}


export default Dashboard
