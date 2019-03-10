import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ProductCategoryForm from '../../components/ProductCategory/Form/Form'
import TitleContent from '../../components/UI/TitleContent/TitleContent'
import api from '../../api'
import { Spin, Icon } from 'antd'

class ScreensProductCategoryForm extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      productCategory: {}
    }
  }

  async componentDidMount() {
    if (this.props.match.params.id){
      try{
        const response =  await api('get', `/product-categories/${this.props.match.params.id}`)
        this.setState({ productCategory: response.data })
      }catch(error) {
        console.log(error)
      }
    }   
  }

  handleCreate(values, id = null) {
    return api('post','/product-categories', values)
  }

  handleUpdate(values, id) {
    return api('put', `/product-categories/${id}`, values)
  }

  render() {
    const { params } = this.props.match
    const antIcon = <Icon type="loading" spin />
    return (
      <div>
        <TitleContent 
          title={ `${!params.id? 'Cadastrar': 'Atualizar'} Categoria de Produto`}
          pageInfo={`${!params.id? 'Cadastre': 'Atualize'} os dados da categoria de produto abaixo`}
        />
        {
          this.state.productCategory._id !== undefined || !this.props.match.params.id
            ? <ProductCategoryForm
                handleSave={!params.id? this.handleCreate : this.handleUpdate}
                message={`${!params.id? 'cadastrada': 'atualizada'}`}
                productCategory={this.state.productCategory}
                history={this.props.history}
              />
            : <Spin indicator={antIcon} />
        }
      </div>
    )
  }

}

ScreensProductCategoryForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node
    }).isRequired
  }).isRequired
}

export default ScreensProductCategoryForm