// components/list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  /**
   * 组件的初始数据
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
  /**
   * 组件的方法列表
   */
  methods: {
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

    }
  }
})
