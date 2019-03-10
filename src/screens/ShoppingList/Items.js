import React, { PureComponent } from 'react'
import moment from 'moment'
import Show from '../../components/ShoppinListItem/Show/Show'
import TitleContent from '../../components/UI/TitleContent/TitleContent'
import api from '../../api'
import { Spin, Icon } from 'antd'
class ScreensShoppingListItems extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      shoppingList: {},
      isLoading: false
    }
  }

  async componentDidMount() {
    try {
      this.setState({ isLoading: true })
      const response =  await api('get', `/shopping-lists/${this.props.match.params.id}`)
      this.setState({ shoppingList: response.data })
      this.setState({ isLoading: false })
    }catch(error) {
      console.log(error)
    }
  }

  render() {
    const antIcon = <Icon type="loading" spin />
    const { shoppingList } = this.state
    return (
      <div>
        <TitleContent 
          title={`Lista do dia ${moment.utc(shoppingList.date).format('DD/MM/YYYY')} ${shoppingList.done? 'está Finalizada' : 'não está finalizada'}`}
          pageInfo='Abaixo estão listados os itens'
        />
        {this.state.isLoading 
          ? <Spin indicator={antIcon} />
          : <Show 
              items={shoppingList.items}
            />
        }
        
      </div>
      
    )
  }
}

export default ScreensShoppingListItems