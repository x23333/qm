// compontent/card/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name: {
      type: String
    },
    image: {
      type: String
    },
    num: {
      type: Number
    },
    price: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    selected: true,
    num: this.data.num
  },

  /**
   * 组件的方法列表
   */
  methods: {
    selected(e) {
      this.setData({
        selected: false
      })
    },
    delete() {

    }
  } 
})
