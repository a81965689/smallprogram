// pages/mine/mine.js
const app=getApp()
Page({
  data: {
    hasUserInfo: false
  },
    login:function(){
      var that=this;
      wx.login({
        success: function (res) {
          //获取授权信息
          wx.getSetting({
            success(res) {
              if (res.authSetting['scope.userInfo']) {
                wx.getUserInfo({
                  success: function (res) {
                    app.globalData.userInfo = res,
                    that.setData({
                      hasUserInfo:true
                    })
                  }
                })
              }else{
                wx.showModal({
                  title: '请允许获取您的个人信息',
                  showCancel:false
                })
                return false
              }
            }
          })
          //把wx.login获取到的数据发送到后台获得openid和session_key
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session',
            data: { appid: 'wx5ec0265ad251b96b', secret: '3d7c512b45fcc97bb3a53913e5642a10', js_code: res.code, grant_type: 'authorization_code' },
            success: function (msg) {
              app.globalData.openid = msg.data.openid;
              app.globalData.session_key = msg.data.session_key;
            }
          })
        }
      })
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    }
    else{
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})