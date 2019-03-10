import React, { PureComponent } from 'react'
import List from '../../components/Supermarket/List/List'
import TitleContent from '../../components/UI/TitleContent/TitleContent'
import api from '../../api'
import { Spin, Icon } from 'antd'
class ScreensSupermarketList extends PureComponent {

  constructor(props) {
    super(props)

    this.remove = this.remove.bind(this)

    this.state = {
      supermarkets: [],
      isLoading: false
    }
  }

  async componentDidMount() {
    try {
      this.setState({ isLoading: true })
      const response = await api('get', '/supermarkets')
      this.setState({ 
        supermarkets: response.data.sort((a,b) => new Date(b.createdDate) - new Date(a.createdDate)),
        isLoading: false
      })
      
    }catch(error) {
      console.log(error)
    }
  }

  async remove(id) {
    try {
      const response = await api('delete', `/supermarkets/${id}`)
      if(response.status === 200) 
        this.setState((state, props) => ({
          supermarkets: state.supermarkets.filter(supermarket => supermarket._id !== id)
        }))
    }catch(error) {
      console.log(error)
    }
  }

  render() {
    const antIcon = <Icon type="loading" spin />
    return (
      <div>
        <TitleContent
          title='Lista dos supermercados'
          pageInfo='Abaixo estão listados todos os supermercados cadastrados'
          newElementPath='/supermarkets/new'
        /> 
        {this.state.isLoading 
          ? <Spin indicator={antIcon} />
          : <List 
              supermarkets={this.state.supermarkets}
              handleRemove={this.remove}
            />
        }
        
      </div>
      
    )
  }
}

export default ScreensSupermarketList