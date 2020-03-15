import axios from 'axios'

const BASE_URL = 'http://localhost:3001/api/'

const getPosts = (category) => {
  return axios.get(BASE_URL + category)
}

const getPost = (category, filename) => {
  return axios.get(BASE_URL + `${category}/${filename}`)
}

export {
  getPosts,
  getPost
}
