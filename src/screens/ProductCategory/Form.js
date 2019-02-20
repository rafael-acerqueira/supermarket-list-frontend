import React, { PureComponent } from 'react'
import ProductCategoryForm from '../../components/ProductCategory/Form/Form'
import api from '../../api'

class ScreensProductCategoryForm extends PureComponent {

  constructor(props) {
    super(props)
  }

  handleCreate(values, id = null) {
    return api('post','/product-categories', values)
  }  

  render() {
    const { params } = this.props.match
    return (
      <ProductCategoryForm
        handleSave={this.handleCreate}
        title={ `${!params.id? 'Cadastrar': 'Atualizar'} Categoria de Produto`}
        message={`${!params.id? 'cadastrada': 'atualizada'}`}
        pageInfo={`${!params.id? 'Cadastre': 'Atualize'}`}
        history={this.props.history}
      />
    )
  }

}

export default ScreensProductCategoryForm