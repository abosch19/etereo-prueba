import axios from 'axios'
import { API_BASE_URL } from '../config'

export const fetchPhonesCatalog = () => {
	return axios.get(API_BASE_URL + '/phones')
}