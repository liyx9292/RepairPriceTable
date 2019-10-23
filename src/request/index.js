import axios from 'axios'
import {baseUrl} from '../config/env'

const request = axios.create({
  baseURL: baseUrl,
  timeout: 1000,
})

const requestc = function(param) {
  return request(param)
}

export default requestc