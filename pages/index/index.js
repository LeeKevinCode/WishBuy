var util = require('../../utils/util.js');
var app = getApp();
var serviceUrl = app.globalData.serviceHost;
Page({
  data: {
    wishList: [],
    userInfo: {},
  },
  wishTap: function (e) {
    wx.navigateTo({
      url: '../wish/wish?wishId=' + e.currentTarget.id
    })
  },
  onLoad: function () {

  },
  onShow: function () {
    var that = this;
    var wishes = [];
    wx.request({
      url: serviceUrl + "wish",
      method: 'GET',
      success: function (res) {
        wishes = res.data;
        wishes = wishes.filter(w => w.status !== "Draft")
        wishes.forEach(val => {
          if (val.description && val.description.length > 200) {
            val.shortDes = val.description.substring(0, 200);
          } else {
            val.shortDes = val.description;
          }
          val.shortDes += ' ...';
          val.dueDate =
            new Date(val.dueDate).toDateString();

        });

        that.setData({
          wishList: wishes,
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    });
  },
})
