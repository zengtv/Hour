// components/index/like/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
		likeState: Boolean,
		title: String,
    },

    /**
     * 组件的初始数据
     */
    data: {
        like: './images/i-like@checked.png',
        normal: './images/i-like.png'
    },

    /**
     * 组件的方法列表
     */
    methods: {
		onLike:function() {
			console.log(this.data.title)
			if (this.properties.likeState) {
				// this.properties.likeState = false
				wx.removeStorageSync(this.data.title)
				this.setData({
					likeState: false
				})
			}else {
				wx.setStorageSync(this.data.title, 'like')
				this.setData({
					likeState: true
				})				
			}
		}
    }
})