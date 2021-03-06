import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'

import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'

const rootNavigator = createSwitchNavigator({
  Login,
  CreateAccount
})

export default createAppContainer(rootNavigator)