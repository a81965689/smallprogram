//app.js
App({
  onLaunch: function () {
    var that = this;
      wx.login({
        success: function (res) {
          wx.getUserInfo({
            success: function (res) {
              console.log(res)
              // that.globalData.userInfo=res
            }
          })
          var data = that.globalData
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session',
            data: { 'appid': data.AppID, 'secret': data.AppSecret, 'js_code': res.code, 'grant_type':'authorization_code'},
            success: function (smg) {
              console.log(smg)
            }
          })
        }
      })

  },
  
  globalData: {
    userInfo:'',
    AppID:'wx5ec0265ad251b96b',
    AppSecret:'3d7c512b45fcc97bb3a53913e5642a10'
  }
})