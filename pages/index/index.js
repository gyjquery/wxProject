//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    msg: '2222北方汉子',
    userInfo: null
  },
  //事件处理函数
  hander: ()=> {
    wx.navigateTo({
      url: "/pages/list/list"
    })
  },
  onLoad: function () {
    wx.getUserInfo({
      success: (data) => {
        console.log(data);
        // 修改data中额数据
        this.setData({
          userInfo: data.userInfo
        })
      }
    })
  },
  getUserInfo: function(e) {
   
  }
})
