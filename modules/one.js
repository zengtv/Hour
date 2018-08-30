import { Ajax } from '../utils/ajax.js'
const app = getApp()

class OneModule extends Ajax {
	constructor() {
		super()
	}
	getOneToken(success) {
		let params = {
			baseUrl: 'one',
			apiUrl: '',
			success,
		}
		this.request(params)
	}
	getOneList(page,token,Cookie,success) {
		let params = {
			baseUrl: 'one',
			apiUrl: `/ajaxlist/${page}?_token=${token}`,
			header: {'Cookie': Cookie},
			success,			
		}
		this.request(params)		
	}
}
export {OneModule}