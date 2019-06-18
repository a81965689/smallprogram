// pages/menulist/sales/salesmenu.js
const app=getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
    // 控制按钮下拉的显示隐藏
    show:'hidden',
    companyLocation: [{ name: '杭州总部' }, { name: '上海一部' }, { name: '上海二部' }, { name: '成都分部' }, { name: '深圳分部' }, { name: '深圳分部' }, { name: '深圳分部' }, { name: '深圳分部' }, { name: '深圳分部' }, { name: '深圳分部' }]
  },
  showBox:function(e){
    let that = this;
    let flag = e.target.dataset.target
    if(that.data.show==flag){
      that.setData({
        show: !flag
      });
    }else{
      that.setData({
        show: flag
      })
    }
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