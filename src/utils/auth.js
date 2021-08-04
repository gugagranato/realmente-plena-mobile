import AsyncStorage from '@react-native-async-storage/async-storage'

const ASYNC_STORAGE_TOKEN = '@RealMentePlena:token'

export const getToken = () => AsyncStorage.getItem(ASYNC_STORAGE_TOKEN)

export const setToken = (token) =>
  AsyncStorage.setItem(ASYNC_STORAGE_TOKEN, token)

export const clearToken = () => AsyncStorage.removeItem(ASYNC_STORAGE_TOKEN)
