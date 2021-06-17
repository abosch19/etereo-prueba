import { createStore } from 'vuex'
import { FETCH_PHONES_CATALOG } from './mutations'
import { fetchPhonesCatalog } from '../services/api'

const store = createStore({
	state: {
		phones: []
	},
	mutations: {
		async [FETCH_PHONES_CATALOG](state) {
			try {
				const result = await fetchPhonesCatalog()
				state.phones = result.data
			} catch (err) {
				state.phones = []
			}
		}
	}
})

export default store