// components/titlebar/titlebar.js
const app=getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      icon:{
        type:String,
        value:'icon-back01'
      },
      bgcolor:{
        type:String,
        value:"#333"
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
