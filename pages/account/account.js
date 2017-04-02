var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    userInfo: {}
  },
  onLoad: function () {
    var that = this
    // get user info
    app.getUserInfo(function(userInfo){
      that.setData({
        userInfo:userInfo
      })
    })
  },
  showMyWishes: function(){
    wx.navigateTo({
      url: '../list/list',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  showMyWallet:function(){
    wx.navigateTo({
      url: '../wallet/wallet',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
})