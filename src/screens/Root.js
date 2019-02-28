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

const ScreensRoot = () => (
  <Switch>
    <Route path='/supermarkets/new' component={ScreensSupermarketForm}/>
    <Route path='/supermarkets/:id/edit' component={ScreensSupermarketForm}/>
    <Route path='/supermarkets/list' component={ScreensSupermarketList} />
    <Route path='/product-categories/new' component={ScreensProductCategoryForm}/>
    <Route path='/product-categories/:id/edit' component={ScreensProductCategoryForm}/>
    <Route path='/product-categories/list' component={ScreensProductCategoryList} />
    <Route path='/product-categories/:productCategoryId/products/new' component={ScreensProductForm}/>
    <Route path='/product-categories/:productCategoryId/products/:id/edit' component={ScreensProductForm}/>
    <Route path='/product-categories/:productCategoryId/products' component={ScreensProductList}/>
    <Route path='/shopping-lists/list' component={ScreensShoppingListList} />
    <Route path='/shopping-lists/new' component={ScreensShoppingListForm}/>
    <Route path='/shopping-lists/:id/edit' component={ScreensShoppingListForm}/>
    <Redirect from='*' to='/' />
  </Switch>
)

export default ScreensRoot