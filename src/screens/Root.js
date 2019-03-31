import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import ScreensSupermarketForm from '../screens/Supermarket/Form'
import ScreensSupermarketList from '../screens/Supermarket/List'

import ScreensProductCategoryForm from '../screens/ProductCategory/Form'
import ScreensProductCategoryList from '../screens/ProductCategory/List'

import ScreensProductList from '../screens/Product/List'
import ScreensProductForm from '../screens/Product/Form'

import ScreensShoppingListList from '../screens/ShoppingList/List'
import ScreensShoppingListForm from '../screens/ShoppingList/Form'
import ScreensShoppingListItems from '../screens/ShoppingList/Items'
import ScreensShoppingListBuy from '../screens/ShoppingList/Buy'

import Header from '../components/UI/Header/Header'
import Footer from '../components/UI/Footer/Footer'
import { isAuthenticated } from '../services/auth'
import Login from '../screens/Login'

import Dashboard from '../screens/Dashboard/Dashboard'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <>
          <Header />
          <Component {...props} />
          <Footer />
        </>
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      )
    }
  />
)

const ScreensRoot = () => (
  <Switch>
    <PrivateRoute path='/' exact component={Dashboard} />
    <PrivateRoute path='/supermarkets/new' component={ScreensSupermarketForm}/>
    <PrivateRoute path='/supermarkets/:id/edit' component={ScreensSupermarketForm}/>
    <PrivateRoute path='/supermarkets/list' component={ScreensSupermarketList} />
    <PrivateRoute path='/product-categories/new' component={ScreensProductCategoryForm}/>
    <PrivateRoute path='/product-categories/:id/edit' component={ScreensProductCategoryForm}/>
    <PrivateRoute path='/product-categories/list' component={ScreensProductCategoryList} />
    <PrivateRoute path='/product-categories/:productCategoryId/products/new' component={ScreensProductForm}/>
    <PrivateRoute path='/product-categories/:productCategoryId/products/:id/edit' component={ScreensProductForm}/>
    <PrivateRoute path='/product-categories/:productCategoryId/products' component={ScreensProductList}/>
    <PrivateRoute path='/shopping-lists/list' component={ScreensShoppingListList} />
    <PrivateRoute path='/shopping-lists/new' component={ScreensShoppingListForm}/>
    <PrivateRoute path='/shopping-lists/:id/edit' component={ScreensShoppingListForm}/>
    <PrivateRoute path='/shopping-lists/:id/items' component={ScreensShoppingListItems}/>
    <PrivateRoute path='/shopping-lists/buy' component={ScreensShoppingListBuy}/>
    <Route path='/login' component={Login}/>
    <Redirect from='*' to='/' />
  </Switch>
)

export default ScreensRoot