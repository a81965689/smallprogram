//app.js
App({

  onLaunch: function () {
    var that=this;

    wx.getSystemInfo({
      success: function (res) {
        that.globalData.statusBarHeight = res.statusBarHeight;
      }}),
    wx.login({
      success: res => {
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session',
          data: { appid: 'wx5ec0265ad251b96b', secret: '3d7c512b45fcc97bb3a53913e5642a10', js_code: res.code, grant_type: 'authorization_code' },
          success: function (msg) {
            that.globalData.openid = msg.data.openid;
            that.globalData.session_key = msg.data.session_key;
          }
        })
      }
    }),
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success: res => {
                this.globalData.userInfo = res.userInfo
                // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                // 所以此处加入 callback 以防止这种情况
                if (this.userInfoReadyCallback) {
                  this.userInfoReadyCallback(res)
                }
              }
            })
          }
        }
      })
  },
  globalData: {
    userInfo:'',
    openid:'',
    session_key:''
  }
})