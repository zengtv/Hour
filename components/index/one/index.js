// components/index/one/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        content: String,
        img_url: String,
        picture_author: String,
        text_authors: String,
		title: String,
		likeState: Boolean
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
        onPreview: function(e) {
            console.log(e)
            let src = e.currentTarget.dataset.src
			let urls = []
			urls[0] = src
            //图片预览
            wx.previewImage({
                current: src, // 当前显示图片的http链接
				urls,
            })
        }
    }
})