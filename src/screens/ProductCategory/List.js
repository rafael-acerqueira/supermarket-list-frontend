import React, { PureComponent } from 'react'
import List from '../../components/ProductCategory/List/List'
import api from '../../api'
import { Spin, Icon } from 'antd'
class ScreensProductCategoryList extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      productCategories: [],
      isLoading: false
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
            />
        }
        
      </>
      
    )
  }
}

export default ScreensProductCategoryList