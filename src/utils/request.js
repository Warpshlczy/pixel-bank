
import axios from 'axios'

const token = localStorage.getItem("token")


const instance = axios.create({
  baseURL: '/api', //实际跨域地址写在vue.config.js即可
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'token': token
  }
})


export default instance
