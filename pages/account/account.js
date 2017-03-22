var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    userInfo: {}
  },
  // tap event handler
  bindViewTap: function() {
    wx.navigateTo({
      url: ''
    })
  },
  onLoad: function () {
    var that = this
    // get user info
    app.getUserInfo(function(userInfo){
      that.setData({
        userInfo:userInfo
      })
    })
  }
})