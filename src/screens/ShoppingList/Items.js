import React, { PureComponent } from 'react'
import Show from '../../components/ShoppinListItem/Show/Show'
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
    console.log(this.state.shoppingList.items)
    return (
      <>
        {this.state.isLoading 
          ? <Spin indicator={antIcon} />
          : <Show 
              shoppingList={this.state.shoppingList}
              items={this.state.items}
            />
        }
        
      </>
      
    )
  }
}

export default ScreensShoppingListItems