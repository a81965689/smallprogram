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
    },
    a:app.globalData.AppID
  },
  change:function(){
    console.log(app.globalData)
    app.globalData.AppID='123'
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
<<<<<<< HEAD
<<<<<<< HEAD
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
      height: 400
    });
=======
    //选中组件然后调用组件内方法
    this.pa = this.selectComponent("#mychart-dom-bar");
    this.pa.init()
>>>>>>> parent of 65b6f42... wx-charts
=======
    //选中组件然后调用组件内方法
    this.pa = this.selectComponent("#mychart-dom-bar");
    this.pa.init()
>>>>>>> parent of 65b6f42... wx-charts
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