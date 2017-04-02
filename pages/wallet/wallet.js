var util = require('../../utils/util.js');
var app = getApp();
var serviceUrl = app.globalData.serviceHost;
Page({
  data: {
    userInfo: {},
    wallet: {},
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
    wx.request({
      url: serviceUrl + "wallet/" + that.data.userInfo.nickName,
      method: 'GET',
      success: function (res) {
        console.log('Get wllet succes', res);
        that.setData({
          wallet: res.data
        });
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    });
  }
})
