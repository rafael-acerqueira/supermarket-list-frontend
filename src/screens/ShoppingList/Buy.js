import React, { PureComponent } from 'react'
import { Redirect } from 'react-router'
import TitleContent from '../../components/UI/TitleContent/TitleContent'
import Buy from '../../components/ShoppingList/Buy/Buy'
import api from '../../api'
import { Spin, Icon, message } from 'antd'

class ScreensShoppingListBuy extends PureComponent {

  constructor(props) {
    super(props)

    this.handleChangeSupermarket = this.handleChangeSupermarket.bind(this)
    this.markAsFounded = this.markAsFounded.bind(this)
    this.markAsDone = this.markAsDone.bind(this)
    this.handleChangeValue = this.handleChangeValue.bind(this)

    this.state = {
      shoppingList: {},
      supermarkets: [],
      fireRedirect: false
    }
  }

  async componentDidMount(){
    try{
      const response =  await api('get', '/shopping-lists/nextBuy')
      this.setState({ shoppingList: response.data })
    }catch(error) {
      console.log(error)
    }

    try {
      const response =  await api('get', '/supermarkets')
      this.setState({ supermarkets: response.data })
    }catch(error) {
      console.log(error)
    }
  }

  async handleChangeValue(shoppingListId, id, value) {
    try {
      const response = await api('put', `/shopping-lists/${shoppingListId}/items/${id}/changeItemValue`, { value } )
      this.setState({ shoppingList: response.data })
      const item = response.data.items.filter( item => item._id === id)
      message.success(`O valor de ${item[0].productName} foi atualizado`)
    }catch(error) {
      message.error('Ocorreu um erro ao atualizar o valor do item')
      console.log(error)
    }
  }


  async markAsFounded(shoppingListId, id) {
    try {
      const response =  await api('put', `/shopping-lists/${shoppingListId}/items/${id}`)
      this.setState({ shoppingList: response.data })
      const item = response.data.items.filter( item => item._id === id)
      message.success(`${item[0].productName} marcado como ${item[0].found ? 'encontrado' : 'não encontrado'}`)
      if(!item.found) {
        const response = await api('put', `/shopping-lists/${shoppingListId}/items/${id}/changeItemValue`, { value: 0 } )
        this.setState({ shoppingList: response.data })
      }
    }catch(error) {
      message.error('Ocorreu um erro ao atualizar o item')
      console.log(error)
    }
  }

  async markAsDone (id) {
    try {
      await api('put', `/shopping-lists/${id}`, { done: true } )
      message.success('Compra finalizada')
      this.setState({ fireRedirect: true })
    }catch(error) {
      message.success('Ocorreu um erro ao finalizar a compra')
      console.log(error)
    }
  }

  async handleChangeSupermarket(supermarket) {
    try {
      const response = await api('put', `/shopping-lists/${this.state.shoppingList._id}`, { supermarket: supermarket } )
      this.setState({ shoppingList: response.data })
      message.success('Supermercado atualizado')
    }catch(error) {
      console.log(error)
      message.error('Ocorreu um erro ao tentar atualizar o supermercado')
    }
  }

  render() {

    const antIcon = <Icon type="loading" spin />
    return (
      <div>
      {this.state.fireRedirect && <Redirect to='/shopping-lists/list' />}
        <TitleContent
          title='Efetuar compra'
          pageInfo='Marque quais produtos foram encontrados  também informe seus valores'
        />
        {
          this.state.shoppingList._id !== undefined
          ? <Buy 
              shoppingList={this.state.shoppingList}
              supermarkets={this.state.supermarkets}
              markAsFounded={this.markAsFounded}
              markAsDone={this.markAsDone}
              handleChangeSupermarket={this.handleChangeSupermarket}
              handleChangeValue={this.handleChangeValue}
            />
          : <Spin indicator={antIcon} />
        }
      </div>
    )
  }
}

export default ScreensShoppingListBuy