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
      let option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: { data: ['网络营销', '电话营销', '办事处', '合作方'] },
        calculable: true,
        grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
        xAxis: [{ type: 'category', data: ['杭州总部', '上海一分公司', '上海二分公司', '成都分公司', '深圳分公司'] }],
        yAxis: [{ type: 'value' }],
        color: ['#36D28E', '#F36370', '#64CEED', '#9285FD'],
        series: [
          {
            name: '网络营销',
            type: 'bar',
            data: [100, 50, 100, 334, 50]
          },
          {
            name: '电话营销',
            type: 'bar',
            data: [50, 60, 14, 334, 400]
          },
          {
            name: '办事处',
            type: 'bar',
            data: [80, 60, 301, 46, 65]
          },
          {
            name: '合作方',
            type: 'bar',
            data: [10, 50, 301, 334, 60]
          }
        ]
      };

      chart.setOption(option);
      return chart;
    }
  })
}
const app = getApp();
Page({
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
    var deviceHeight = wx.getSystemInfoSync().windowHeight;
    this.setData({
      deviceHeight:deviceHeight
    })
    //选中echarts节点然后加载
    this.pa = this.selectComponent("#mychart-dom-bar");
    this.pa.init()
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