import React, { PureComponent } from 'react'
import List from '../../components/ShoppingList/List/List'
import TitleContent from '../../components/UI/TitleContent/TitleContent'
import api from '../../api'
import { Spin, Icon } from 'antd'
class ScreensShoppingListList extends PureComponent {

  constructor(props) {
    super(props)

    this.remove = this.remove.bind(this)

    this.state = {
      shoppingLists: [],
      isLoading: false
    }
  }

  async componentDidMount() {
    try {
      this.setState({ isLoading: true })
      const response = await api('get', '/shopping-lists')
      this.setState({ 
        shoppingLists: response.data.sort((a,b) => new Date(b.createdDate) - new Date(a.createdDate)),
        isLoading: false
      })
      
    }catch(error) {
      console.log(error)
    }
  }

  async remove(id) {
    try {
      const response = await api('delete', `/shopping-lists/${id}`)
      if(response.status === 200) 
        this.setState((state, props) => ({
          shoppingLists: state.shoppingLists.filter(shoppingList => shoppingList._id !== id)
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
          title='Listas de Compras'
          pageInfo='Abaixo estão listadas as listas de compras cadastradas'
          newElementPath='/shopping-lists/new'
        />
        {this.state.isLoading 
          ? <Spin indicator={antIcon} />
          : <List 
              shoppingLists={this.state.shoppingLists}
              handleRemove={this.remove}
            />
        }
        
      </div>
      
    )
  }
}

export default ScreensShoppingListList