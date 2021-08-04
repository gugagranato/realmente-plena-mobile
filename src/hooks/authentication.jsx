import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'
import api from '../services/api'
import { clearToken, getToken, setToken } from '../utils/auth'
import jwt_decode from 'jwt-decode'

const AuthenticationContext = createContext()

const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)

  const signOut = useCallback(async () => {
    clearToken()
    setUser({})
  }, [])

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const token = await getToken()

        if (token) {
          const currentTimestamp = new Date().getTime()
          const tokenDecoded = jwt_decode(token)

          if (currentTimestamp < tokenDecoded.timestamp) {
            return signOut()
          }
          setUser(jwt_decode(token))
        }
        setLoading(false)
      } catch (error) {
        console.error(error)
      }
    }

    getCurrentUser()
  }, [signOut])

  const signIn = useCallback(async (credentials) => {
    try {
      setLoading(true)
      const response = await api.post('/auth/login', credentials)
      const { token, funcionario } = response.data

      if (token && funcionario === '0') {
        setToken(response.data.token)
        setUser(response.data)
      }
      
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }, [])

  return (
    <AuthenticationContext.Provider value={{ signIn, signOut, user, loading }}>
      {children}
    </AuthenticationContext.Provider>
  )
}

function useAuthentication() {
  const context = useContext(AuthenticationContext)

  return context
}

export { AuthenticationProvider, useAuthentication }
