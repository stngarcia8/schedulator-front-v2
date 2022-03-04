import axios from 'axios'
import { API_URL } from '../shared/contants'

const axiosOptions = {
  baseURL: API_URL
}

export default axios.create(axiosOptions)