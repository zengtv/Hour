// components/index/weather/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        city:String,
        weather: String,
        tmp: String,
		showWeather: Boolean
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
		onTap:function() {
			this.triggerEvent('weatherTap')
		}
    }
})