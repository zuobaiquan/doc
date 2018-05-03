'use strict'

import axios from 'axios'
import qs from 'qs'
const globalAPIHost = 'http://172.30.67.142:4000'

axios.interceptors.request.use(config => {
  // loading
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
})

export default {
  post (url, params) {
    return axios({
      method: 'post',
      baseURL: globalAPIHost,
      url,
      data: qs.stringify(params),
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(
      (response) => {
        return response
      }
    )
  },
  get (url, params) {
    return axios({
      method: 'get',
      baseURL: globalAPIHost,
      url,
      params, // get 请求时带的参数
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(
      (response) => {
        return response
      }
    )
  },
  delete (url, params) {
    return axios({
      method: 'delete',
      baseURL: globalAPIHost,
      url,
      params, // get 请求时带的参数
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(
      (response) => {
        return response
      }
    )
  }
}
