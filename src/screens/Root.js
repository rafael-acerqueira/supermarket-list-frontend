import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import ScreensSupermarketForm from '../screens/Supermarket/Form'
import ScreensSupermarketList from '../screens/Supermarket/List'

const ScreensRoot = () => (
  <Switch>
    <Route path='/supermarkets/new' component={ScreensSupermarketForm}/>
    <Route path='/supermarkets/:id/edit' component={ScreensSupermarketForm}/>
    <Route path='/supermarkets/list' component={ScreensSupermarketList} />
    <Redirect from='*' to='/' />
  </Switch>
)

export default ScreensRoot