//index.js
//获取应用实例
const app = getApp()
import {
    WeatherModule
} from '../../modules/weather.js'
import {
    OneModule
} from '../../modules/one.js'

let oneModule = new OneModule
let weatherModule = new WeatherModule


Page({
    data: {
        city: '',
        weather: '',
        tmp: '',
        showWeather: false,
        page: 0,
        oneList: [],
		likeState: false		
    },
   
    weatherTap: function() {
        console.log('yes')
        // 开启授权管理 同意后获取天气
        wx.openSetting({
            success: (res) => {
                // 获取地理位置 查询天气
                wx.getLocation({
                    success: (res) => {
                        console.log(res)
                        let longitude = (res.longitude).toFixed(2)
                        let latitude = (res.latitude).toFixed(2)
                        weatherModule.getNowWeather(longitude, latitude, (data) => {
                            this.setData({
                                showWeather: true,
                                city: data.data.HeWeather6[0].basic.parent_city,
                                weather: data.data.HeWeather6[0].now.cond_txt,
                                tmp: data.data.HeWeather6[0].now.tmp
                            })
                        })
                    },
                    fail: (res) => {
                        console.log('点击事件失败')
                        wx.getLocation({
                            success: (res) => {
                                console.log(res)
                                let longitude = (res.longitude).toFixed(2)
                                let latitude = (res.latitude).toFixed(2)
                                console.log(longitude)
                                console.log(latitude)
                                weatherModule.getNowWeather(longitude, latitude, (data) => {
                                    console.log(data)
                                    this.setData({
                                        showWeather: true,
                                        city: data.data.HeWeather6[0].basic.parent_city,
                                        weather: data.data.HeWeather6[0].now.cond_txt,
                                        tmp: data.data.HeWeather6[0].now.tmp
                                    })
                                })
                            },
                            fail: (res) => {
                                console.log('点击事件2失败')
                                this.setData({
                                    showWeather: false
                                })
                            }
                        })
                        // this.setData({
                        //     showWeather: false
                        // })
                    }
                })
            },
        })
    },
    onLoad: function() {
        // 获取地理位置 查询天气
        wx.getLocation({
            success: (res) => {
                console.log(res)
                let longitude = (res.longitude).toFixed(2)
                let latitude = (res.latitude).toFixed(2)
                console.log(longitude)
                console.log(latitude)
                weatherModule.getNowWeather(longitude, latitude, (data) => {
                    console.log(data)
                    this.setData({
                        showWeather: true,
                        city: data.data.HeWeather6[0].basic.parent_city,
                        weather: data.data.HeWeather6[0].now.cond_txt,
                        tmp: data.data.HeWeather6[0].now.tmp
                    })
                })
            },
            fail: (res) => {
                console.log('onload失败')
                this.setData({
                    showWeather: false
                })
            }
        })


        // 获取 ‘一个’ token 进而请求api
        oneModule.getOneToken((data) => {
            console.log(data)
            let token = data.data.split("One.token = '")[1].split("'")[0]
            let Cookie = data.header['Set-Cookie']
            let page = this.data.page
			let likeState = false
			
            console.log(token)
            console.log(Cookie)
            oneModule.getOneList(page, token, Cookie, (data) => {
                console.log(data)
                // 读取缓存 获取‘喜欢’状态
                if (data.data.data[0]) {
					likeState = wx.getStorageSync(data.data.data[0].title)
                }
                this.setData({
                    oneList: data.data.data[0],
					likeState
                })
            })
        })
    },

    onShow: function() {
        
    },

	/**
  * 用户点击右上角分享
  */
	onShareAppMessage: function (options) {
		if (options.from =='button') {
			console.log(options)
			return {
				title: '复杂世界里，一个就够了'
			}
		}
	}

})