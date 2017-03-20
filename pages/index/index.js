var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    wishList: [],
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // get all wishes for display
    var wishes = util.getAllWishes();
    // add short description to wish
    wishes.forEach(val => {
      if(val.description && val.description.length > 200)
      {
          val.shortDes = val.description.substring(0,200);
      }else{
        val.shortDes = val.description;
      }
      val.shortDes += ' ...';
    });
    this.setData({
      wishList:wishes,
    })
  }
})
