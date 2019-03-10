import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ShoppingListForm from '../../components/ShoppingList/Form/Form'
import TitleContent from '../../components/UI/TitleContent/TitleContent'
import api from '../../api'
import { Spin, Icon } from 'antd'


class ScreensShoppingListForm extends PureComponent {

  constructor(props) {
    super(props)

    this.handleSearch = this.handleSearch.bind(this)

    this.state = {
      shoppingList: {
        items: []
      },
      supermarkets: [],
      dataSource: []
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
  
    try {
      const response =  await api('get', '/products')
      this.setState({ dataSource: response.data })
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

  async handleSearch(value) {
    if(value) {
      try {
        const response =  await api('get', `/products/${value}/search`)
        this.setState({ dataSource: response.data })
      }catch(error) {
        console.log(error)
      }
    }
  }

  render() {
    const { params } = this.props.match
    const antIcon = <Icon type="loading" spin />
    return (
      <div>
        <TitleContent 
          title={ `${!params.id? 'Cadastrar': 'Atualizar'} Lista de Compras`}
          pageInfo={`${!params.id? 'Cadastre': 'Atualize'} os dados da lista de compras abaixo`}
        />
        {
          this.state.shoppingList._id !== undefined || !this.props.match.params.id
            ? <ShoppingListForm
                handleSave={!params.id? this.handleCreate : this.handleUpdate}
                handleSearch={this.handleSearch}
                
                dataSource={this.state.dataSource}
                shoppingList={this.state.shoppingList}
                supermarkets={this.state.supermarkets}
                message={`${!params.id? 'cadastrada': 'atualizada'}`}                
                history={this.props.history}
              />
            : <Spin indicator={antIcon} />
        }
      </div>
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