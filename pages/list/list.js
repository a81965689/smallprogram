// pages/list/list.js
const app=getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      { name: 'one', price: 10, order: 50 },
      { name: 'two', price: 16, order: 60 },
      { name: 'three', price: 50, order: 40 },
      { name: 'four', price: 40, order: 30 },
      { name: 'five', price: 100, order: 20 },
      { name: 'six', price: 80, order: 100 }
    ],
    order: true,
    price: true
  },
  sort: function (e) {
    let item = e.currentTarget.dataset.target
    var that = this
    that.setData({
      list: that.data.list.sort((a, b) => {
        let s = a[item];
        let t = b[item];
        if (that.data[item]) {
          if (s < t) return 1;
          if (s > t) return -1

        } else {
          if (s < t) return -1;
          if (s > t) return 1;
        }
      })
    }, function () {
      that.setData({
        [item]: !that.data[item]
      })
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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