// pages/index/index.js
import * as echarts from '../../components/ec-canvas/echarts';
let chart = null;
function initChart(canvas, width, height) {
  wx.showLoading({
    title: '数据加载中'
  })
  wx.request({
    url: 'https://api.it120.cc/4aa6ff9c0adbf3742d55db326ae3d4f8/user/detail',
    data:'',
    method:'post',
    success:res=>{
      wx.hideLoading()
      chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      canvas.setChart(chart);
      var option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      };

      chart.setOption(option);
      return chart;
    }
  })
}
const app = getApp();
Page({
  // 页面方法
    /**
   * 页面的初始数据
   */

  data: {
    ec: {
      onInit: initChart,
      lazyLoad:true
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