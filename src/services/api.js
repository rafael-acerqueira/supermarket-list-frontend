import axios from "axios"
import { getToken } from "./auth"
import consts from '../consts'


const api = axios.create({
  baseURL: consts.API_URL
})

api.interceptors.request.use(async config => {
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api