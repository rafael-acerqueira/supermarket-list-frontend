import axios from 'axios'

const BASE_URL = 'http://localhost:3003/api'

export default (verb, path_name, values = null) => axios[verb](BASE_URL + path_name, values)