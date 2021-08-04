import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Dashboard from '../pages/authenticated/dashboard/dashboard'


const Customer = createStackNavigator()

const CustomerRoutes = () => {
  return (
    <Customer.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="Dashboard"
    >
      <Customer.Screen name="Dashboard" component={Dashboard} />
    </Customer.Navigator>
  )
}

export default CustomerRoutes
