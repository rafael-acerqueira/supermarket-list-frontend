import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import SupermarketForm from '../../components/Supermarket/Form/Form'
import api from '../../api'
import { Spin, Icon } from 'antd'
import TitleContent from '../../components/UI/TitleContent/TitleContent'


class ScreensSupermarketForm extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      supermarket: {}
    }
  }

  async componentDidMount() {
    if (this.props.match.params.id){
      try{
        const response =  await api('get', `/supermarkets/${this.props.match.params.id}`)
        this.setState({ supermarket: response.data })
      }catch(error) {
        console.log(error)
      }
    }   
  }


  handleCreate(values, id = null) {
    return api('post','/supermarkets', values)
  }

  handleUpdate(values, id) {
    return api('put', `/supermarkets/${id}`, values)
  }

  render() {
    const { params } = this.props.match
    const antIcon = <Icon type="loading" spin />
    
    return (
      <div>
        <TitleContent
          title={ `${!params.id? 'Cadastrar': 'Atualizar'} Supermercado`}
          pageInfo={`${!params.id? 'Cadastre': 'Atualize'} os dados do supermercado abaixo`}
        />
        {
          this.state.supermarket._id !== undefined || !this.props.match.params.id
            ? <SupermarketForm
                handleSave={!params.id? this.handleCreate : this.handleUpdate}
                supermarket={this.state.supermarket}
                message={`${!params.id? 'cadastrado': 'atualizado'}`}
                history={this.props.history}
              />
            : <Spin indicator={antIcon} />
        }
      </div>
    )
  }
}

ScreensSupermarketForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node
    }).isRequired
  }).isRequired
}

export default ScreensSupermarketForm