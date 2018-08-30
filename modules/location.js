class location {
    constructor() {

    }
    getLocation(success) {
        wx.getLocation({
            type: '',
            altitude: true,
            success: (res)=> {
                success && success(res);

            },
            fail: (res) =>{
                fail && fail(err)
                
            },
            complete: function(res) {},
        })
    }
}
export { location }