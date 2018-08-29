//index.js
//获取应用实例
const app = getApp()

Page({
    data: {

    },

    onLoad: function() {
        wx.getLocation({
            success: (res) =>{
                console.log(res)
                let longitude = (res.longitude).toFixed(2)
                let latitude = (res.latitude).toFixed(2)
                let t = Math.round(new Date() / 1000)
                let key = app.globalData.weather_key
                console.log(longitude)
                console.log(latitude)
                console.log(t)
                console.log(key)
                wx.request({
                    url: 'https://free-api.heweather.com/s6/weather/now?location=' + longitude + ',' + latitude+'&key='+key,
                    dataType: 'json',
                    responseType: 'text',
                    success: (e) =>{
                        console.log(e)
                        this.setData({
                            city: e.data.HeWeather6[0].basic.parent_city,
                            weather: e.data.HeWeather6[0].now.cond_txt,
                            tmp: e.data.HeWeather6[0].now.tmp,
                        })

                    },
                    fail: function(e) {},
                    complete: function(e) {},
                })
            },
            fail: (res) =>{

            },
            complete: function(res) {},
        })
    }

})