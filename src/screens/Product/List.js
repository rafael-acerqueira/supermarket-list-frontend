import React, { PureComponent } from 'react'
import List from '../../components/Product/List/List'
import TitleContent from '../../components/UI/TitleContent/TitleContent'
import api from '../../api'
import { Spin, Icon } from 'antd'
class ScreensProductList extends PureComponent {

  constructor(props) {
    super(props)

    this.remove = this.remove.bind(this)

    this.state = {
      products: [],
      productCategory: {},
      isLoading: false
    }
  }

  async componentDidMount() {
    this.setState({ isLoading: true })
    try {      
      const response = await api('get', `/product-categories/${this.props.match.params.productCategoryId}/products`)
      this.setState({ 
        products: response.data.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
      })
      
    }catch(error) {
      console.log(error)
    }

    try {
      const response = await api('get', `/product-categories/${this.props.match.params.productCategoryId}`)
      this.setState({ 
        productCategory: response.data
      })
    }catch(error) {
      console.log(error)
    }
    this.setState({isLoading: false })
  }

  async remove(id) {
    try {
      const response = await api('delete', `/products/${id}`)
      if(response.status === 200) 
        this.setState((state, props) => ({
          products: state.products.filter(product => product._id !== id)
        }))
    }catch(error) {
      console.log(error)
    }
  }

  render() {
    const antIcon = <Icon type="loading" spin />
    const { productCategory } = this.state
    return (
      <div>
        <TitleContent 
          title={`Todos os produtos de ${productCategory.name}`}
          pageInfo={`Abaixo estão listados todos os produtos cadastrados de ${productCategory.name}`}
          newElementPath={`/product-categories/${productCategory._id}/products/new`}
        />
        {this.state.isLoading 
          ? <Spin indicator={antIcon} />
          : <List 
              products={this.state.products}
              handleRemove={this.remove}
              productCategory={productCategory}
            />
        }
        
      </div>
      
    )
  }
}

export default ScreensProductList