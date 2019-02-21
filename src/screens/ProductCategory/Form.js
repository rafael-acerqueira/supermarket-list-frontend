import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ProductCategoryForm from '../../components/ProductCategory/Form/Form'
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
      <>
        {
          this.state.productCategory._id !== undefined || !this.props.match.params.id
            ? <ProductCategoryForm
                handleSave={!params.id? this.handleCreate : this.handleUpdate}
                title={ `${!params.id? 'Cadastrar': 'Atualizar'} Categoria de Produto`}
                message={`${!params.id? 'cadastrada': 'atualizada'}`}
                pageInfo={`${!params.id? 'Cadastre': 'Atualize'}`}
                productCategory={this.state.productCategory}
                history={this.props.history}
              />
            : <Spin indicator={antIcon} />
        }
      </>
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