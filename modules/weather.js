import {Ajax} from '../utils/ajax.js'
const app = getApp()

class WeatherModule extends Ajax {
	constructor() {
		super()
	}
	getNowWeather(longitude, latitude,success){
		let key = app.globalData.weather_key
		let params = {
			baseUrl: 'weather',
			apiUrl: `/s6/weather/now?location=${longitude},${latitude}&key=${key}`,
			success,
		}
		this.request(params)
	}
}
export {WeatherModule}