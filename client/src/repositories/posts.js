import axios from 'axios'

const BASE_URL = '/api/'

const getPosts = (category) => {
  return axios.get(BASE_URL + category)
}

const getPost = (category, filename) => {
  const url = BASE_URL + category + `/${filename}`
  return axios.get(url)
}

export {
  getPosts,
  getPost
}
