var util = require('../../utils/util.js');
var app = getApp();
Page({
  data: {
    userInfo: {}
  },
  onLoad: function () {
    // get current userInfo
    var that = this
    // get user info
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      })
    })
    // get wallet
        console.log('My wallet',util.getWalletById(that.data.userInfo.nickName));
    that.setData({
      wallet:util.getWalletById(that.data.userInfo.nickName)
    })

  }
})
