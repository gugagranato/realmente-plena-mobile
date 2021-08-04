import React from 'react'

import { AuthenticationProvider } from './authentication'

const AppProvider = ({ children }) => (
  <AuthenticationProvider>
      {children}
  </AuthenticationProvider>
)

export default AppProvider
