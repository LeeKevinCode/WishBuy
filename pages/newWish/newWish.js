var util = require('../../utils/util.js')
var app = getApp()
Page({
  data:{
    userInfo:{},
    array:['15','30','60','90'],
     objectArray: [
      {id: 0,duration: '15'},
      {id: 1,duration: '30'},
      {id: 2,duration: '60'},
      {id: 3,duration: '90'}],
    index:0,
  },
  onLoad:function(){
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  formSubmit: function(e) {
    var newWish = e.detail.value;
    // convert wish duration
    var grantIndex = newWish.grantedDuration;
    newWish.grantedDuration = this.data.objectArray[grantIndex].duration;
    // set wish creator
    newWish.creator = this.data.userInfo.nickName;
    newWish.creatorAvatarUrl = this.data.userInfo.avatarUrl;
    // set wish status to draft
    newWish.status = app.globalData.wishStatus.draft;
    util.storeWish(e.detail.value);
    console.log('form submit with data:',newWish);
  },
  formReset: function() {
    console.log('form发生了reset事件')
  }
})