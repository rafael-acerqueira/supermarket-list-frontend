import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import ScreensSupermarketForm from '../screens/Supermarket/Form'
import ScreensSupermarketList from '../screens/Supermarket/List'

const ScreensRoot = () => (
  <Switch>
    <Route path='/' exact component={ScreensSupermarketForm}/>
    <Route path='/supermarkets/list' component={ScreensSupermarketList} />
    <Redirect from='*' to='/' />
  </Switch>
)

export default ScreensRoot