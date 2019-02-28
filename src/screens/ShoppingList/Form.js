import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ShoppingListForm from '../../components/ShoppingList/Form/Form'
import api from '../../api'
import { Spin, Icon } from 'antd'


class ScreensShoppingListForm extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      shoppingList: {},
      supermarkets: []
    }
  }

  async componentDidMount() {
    if (this.props.match.params.id){
      try{
        const response =  await api('get', `/shopping-lists/${this.props.match.params.id}`)
        this.setState({ shoppingList: response.data })
      }catch(error) {
        console.log(error)
      }
    }

    try {
      const response =  await api('get', '/supermarkets')
      this.setState({ supermarkets: response.data })
    }catch(error) {
      console.log(error)
    }
  }


  handleCreate(values, id = null) {
    return api('post','/shopping-lists', values)
  }

  handleUpdate(values, id) {
    return api('put', `/shopping-lists/${id}`, values)
  }

  render() {
    const { params } = this.props.match
    const antIcon = <Icon type="loading" spin />
    return (
      <>
        {
          this.state.shoppingList._id !== undefined || !this.props.match.params.id
            ? <ShoppingListForm
                handleSave={!params.id? this.handleCreate : this.handleUpdate}
                title={ `${!params.id? 'Cadastrar': 'Atualizar'} Lista de Compras`}
                shoppingList={this.state.shoppingList}
                supermarkets={this.state.supermarkets}
                message={`${!params.id? 'cadastrada': 'atualizada'}`}
                pageInfo={`${!params.id? 'Cadastre': 'Atualize'}`}
                history={this.props.history}
              />
            : <Spin indicator={antIcon} />
        }
      </>
    )
  }
}

ScreensShoppingListForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node
    }).isRequired
  }).isRequired
}

export default ScreensShoppingListForm