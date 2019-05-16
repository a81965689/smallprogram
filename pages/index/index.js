// pages/index/index.js
const app = getApp();
let wxCharts = require('../../utils/wxcharts-min.js')
var areaChart = null;
Page({
  // 页面方法
    /**
   * 页面的初始数据
   */

  data: {
   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    areaChart = new wxCharts({
      canvasId: 'areaCanvas',
      type: 'column',
      categories: ['1', '2', '3', '4', '5', '6'],
      animation: true,
      series: [{
        name: '成交量1',
        data: [32, 45, 100, 56, 33, 34],
        FontSize:10
        // format: function (val) {
        //   return null;
        // }
      },
        {
          name: '成交量2',
          data: [32, 45, 100, 56, 33, 34]
        },
        {
          name: '成交量3',
          data: [32, 45, 100, 56, 33, 34]
        }
      
      ],
      yAxis: {
        title: '成交金额 (万元)',
        format: function (val) {
          return val.toFixed(2);
        },
        min: 0,
        fontColor: '#8085e9',
        gridColor: '#8085e9',
        titleFontColor: '#f7a35c'
      },
      xAxis: {
        fontColor: '#7cb5ec',
        gridColor: '#7cb5ec'
      },
      extra: {
        legendTextColor: '#cb2431'
      },
      width: windowWidth,
      height: 200
    });
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