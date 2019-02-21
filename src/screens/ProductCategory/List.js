import React, { PureComponent } from 'react'
import List from '../../components/ProductCategory/List/List'
import api from '../../api'
import { Spin, Icon } from 'antd'
class ScreensProductCategoryList extends PureComponent {

  constructor(props) {
    super(props)

    this.remove = this.remove.bind(this)

    this.state = {
      productCategories: [],
      isLoading: false
    }
  }

  async remove(id) {
    try {
      const response = await api('delete', `/product-categories/${id}`)
      if(response.status === 200) 
        this.setState((state, props) => ({
          productCategories: state.productCategories.filter(productCategory => productCategory._id !== id)
        }))
    }catch(error) {
      console.log(error)
    }
  }  

  async componentDidMount() {
    try {
      this.setState({ isLoading: true })
      const response = await api('get', '/product-categories')
      this.setState({ 
        productCategories: response.data,
        isLoading: false
      })
      
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
              productCategories={this.state.productCategories}
              handleRemove={this.remove}
            />
        }
        
      </>
      
    )
  }
}

export default ScreensProductCategoryList