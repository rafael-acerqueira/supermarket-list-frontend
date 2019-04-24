import axios from 'axios'
import consts from './consts'

export default (verb, path_name, values = null) => axios[verb](consts.API_URL + path_name, values)