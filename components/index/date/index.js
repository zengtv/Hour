// components/index/date/date.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        day: "",
        month: '',
        year: 2018
    },
    //   获取当前日期
    ready: function() {
        let now = new Date()
        let year = now.getFullYear()
        let month = (now.toString()).split(" ")[1]
        let day = (now.toString()).split(" ")[2]
        this.setData({
            day,
            month,
            year
        })
    },
    /**
     * 组件的方法列表
     */
    methods: {
        
    }
})