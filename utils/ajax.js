const app = getApp()

class Ajax {
	constructor() {
		this.base_url = app.globalData.base_url
	}
	request(params) {
		let baseUrl = params.baseUrl
		let url = this.base_url[baseUrl] + params.apiUrl
		if (params.methood) {
			params.methood = 'GET'
		}
		if (!params.header) {
			params.header = {
				'content-type': 'application/json'
			}
		}
		wx.request({
			url,
			data: params.data,
			header: params.header,
			method: params.methood,
			success: (res) =>{
				params.success && params.success(res);
			},
			fail: (res) =>{
				params.fail && params.fail(err)
			},
		})
	}
}
export {Ajax}