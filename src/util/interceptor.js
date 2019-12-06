import axios from 'axios'
import Qs from 'qs'
import { Notification } from 'element-ui'
import store from '@/store/store'
import settings from '@/settings'
import router from '@/router'

const service = axios.create({
  baseURL: settings.apiUrl,
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 8000 // request timeout
})

function querys (prams) {
  if (store.getters.token) {
    // config.headers['token'] = store.getters.token
    return { 'token': store.getters.token, 'loginMark': settings.loginMark, 'data': prams }
  } else {
    return { 'token': '', 'loginMark': settings.loginMark, 'data': prams }
  }
}

service.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      config.data = Qs.stringify(querys(JSON.stringify(config.params)))
      config.params = ''
    } else {
      config.params = querys(config.params)
    }
    return config
  },
  error => {
    console.log('错误的传参')
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    if (response.status !== 200) {
      Notification({ message: '接口地址错误:错误码：' + response.status + '消息:' + response.statusText, title: '错误', type: 'error', duration: 5000 })
      return Promise.reject(response.statusText)
    }
    const res = response.data
    if (!res.code) {
      Notification({ message: '服务器返回数据不正确', title: '错误', type: 'error', duration: 5000 })
      return Promise.reject(response.statusText)
    }
    console.log('response===============>', res)
    if (res.code !== 200) {
      Notification({ title: '提示', message: res.info || 'error', type: 'warning', duration: 5000 })
      if (res.code === 400 || res.code === 500) {
        return Promise.reject(res.info)
      }
      if (res.code === 410) { // 未登陆
        router.push({ path: '/login' })
        return Promise.reject(res.info)
      }
      return Promise.reject(res.info || 'error')
    } else {
      return Promise.resolve(res.data)
    }
  },
  error => {
    Notification({ title: '错误', message: error.message || 'error', type: 'error', duration: 5000 })
    return Promise.reject(error)
  }
)

export default service
