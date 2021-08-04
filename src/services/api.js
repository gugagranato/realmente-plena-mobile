import axios from 'axios'
import { BASE_URL } from '../environments/env'
import { clearToken, getToken } from '../utils/auth'

const api = axios.create({
  baseURL: BASE_URL
})

api.interceptors.request.use(
  async (config) => {
    const token = await getToken()
    if (token) {
      config.headers = {
        Authorization: token
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
api.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this  to => trigger
    // Do something with response data
    return response
  },
  (error) => {
    console.log('error?', error)
    if (
      error.response.status === 401 &&
      error.response.data.message === 'Token is missing'
    ) {
      return clearToken()
    }

    return Promise.reject(error)
  }
)

export default api
