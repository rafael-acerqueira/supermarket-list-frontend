import React, { PureComponent } from 'react'
import List from '../../components/Product/List/List'
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
    return (
      <>
        {this.state.isLoading 
          ? <Spin indicator={antIcon} />
          : <List 
              products={this.state.products}
              handleRemove={this.remove}
              productCategory={this.state.productCategory}
            />
        }
        
      </>
      
    )
  }
}

export default ScreensProductList