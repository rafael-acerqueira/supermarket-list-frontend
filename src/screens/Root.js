import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import ScreensSupermarketForm from '../screens/Supermarket/Form'
import ScreensSupermarketList from '../screens/Supermarket/List'

import ScreensProductCategoryForm from '../screens/ProductCategory/Form'
import ScreensProductCategoryList from '../screens/ProductCategory/List'

const ScreensRoot = () => (
  <Switch>
    <Route path='/supermarkets/new' component={ScreensSupermarketForm}/>
    <Route path='/supermarkets/:id/edit' component={ScreensSupermarketForm}/>
    <Route path='/supermarkets/list' component={ScreensSupermarketList} />
    <Route path='/product-categories/new' component={ScreensProductCategoryForm}/>
    <Route path='/product-categories/:id/edit' component={ScreensProductCategoryForm}/>
    <Route path='/product-categories/list' component={ScreensProductCategoryList} />
    <Redirect from='*' to='/' />
  </Switch>
)

export default ScreensRoot