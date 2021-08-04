import React, { useState } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { useAuthentication } from '../hooks/authentication'

import AuthRoutes from './auth.routes'
import CustomerRoutes from './customer.routes'

const Routes = () => {
  const { loading, user } = useAuthentication()

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    )
  }

  const getRoute = () => {
    if (user?.funcionario === '0') {
      return <CustomerRoutes />
    }
    else {
      return <AuthRoutes />
    }
  }

  return getRoute()
}

export default Routes
