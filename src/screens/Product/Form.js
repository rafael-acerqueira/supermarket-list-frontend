import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ProductForm from '../../components/Product/Form/Form'
import TitleContent from '../../components/UI/TitleContent/TitleContent'
import api from '../../api'
import { Spin, Icon } from 'antd'


class ScreensProductForm extends PureComponent {

  constructor(props) {
    super(props)

    this.handleCreate = this.handleCreate.bind(this)

    this.state = {
      product: {},
      productCategory: {}
    }
  }

  async componentDidMount() {

    try {
      const response =  await api('get', `/product-categories/${this.props.match.params.productCategoryId}`)
      this.setState({ productCategory: response.data })
    }catch(error) {
      console.log(error)
    }


    if (this.props.match.params.id){
      try{
        const response =  await api('get', `/products/${this.props.match.params.id}`)
        this.setState({ product: response.data })
      }catch(error) {
        console.log(error)
      }
    }  
  }


  handleCreate(values, id = null) {
    return api('post',`/product-categories/${this.state.productCategory._id}/products`, values)
  }

  handleUpdate(values, id) {
    return api('put', `/products/${id}`, values)
  }

  render() {
    const { params } = this.props.match
    const antIcon = <Icon type="loading" spin />
    return (
      <div>
        <TitleContent 
          title={ `${!params.id? 'Cadastrar': 'Atualizar'} Produto`}
          pageInfo={`${!params.id? 'Cadastre': 'Atualize'}`}
        />
        {
          this.state.product._id !== undefined || !this.props.match.params.id
            ? <ProductForm
                handleSave={!params.id? this.handleCreate : this.handleUpdate}
                product={this.state.product}
                message={`${!params.id? 'cadastrado': 'atualizado'}`}
                history={this.props.history}
                productCategory={this.state.productCategory}
              />
            : <Spin indicator={antIcon} />
        }
      </div>
    )
  }
}

ScreensProductForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node
    }).isRequired
  }).isRequired
}

export default ScreensProductForm