var util = require('../../utils/util.js');
var app = getApp();
var serviceUrl = app.globalData.serviceHost;
Page({
    data: {
        wishList: [],
        userInfo: {}
    },
    wishTap: function (e) {
        wx.navigateTo({
            url: '../wish/wish?wishId=' + e.currentTarget.id
        })
    },
    onLoad: function () {
        // get current userInfo
        var that = this
        // get user info
        var nickName;
        app.getUserInfo(function (userInfo) {
            that.setData({
                userInfo: userInfo
            });
        });
    },
    onShow: function () {
        var nickName = this.data.userInfo.nickName;
        var that = this;
        wx.request({
            url: serviceUrl + "wish/my/" + nickName,
            method: 'GET',
            success: function (res) {
                var wishes = res.data;

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
