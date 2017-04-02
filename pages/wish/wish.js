var util = require('../../utils/util.js');
var app = getApp();
var serviceUrl = app.globalData.serviceHost;
Page({
    data: {
        wish: {},
        userInfo: {},
        wishStatus: app.globalData.wishStatus,
    },
    onLoad: function (option) {
        var that = this;
        app.getUserInfo(function (userInfo) {
            that.setData({
                userInfo: userInfo
            })
        });
        // load this wish
        var wish;
        wx.request({
            url: serviceUrl + "wish/" + option.wishId,
            data: {},
            method: 'GET',
            success: function (res) {
                console.log("created wish", res);
                // set date format
                var wh = that.transferDate(res.data);
                that.setData({
                    wish: wh
                });
            },
            fail: function () {
                // fail
            },
            complete: function () {
                // complete
            }
        });
    },
    postWish: function () {
        // post wish
        var that = this;
        var currentWish = this.data.wish;
        wx.request({
            url: serviceUrl + "wish/post/" + currentWish.id,
            data: {},
            method: 'PUT',
            success: function (res) {
                var wh = that.transferDate(res.data);
                that.setData({
                    wish: wh
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
    acceptWish: function () {
        // accept wish
        var currentWish = this.data.wish;
        var that = this;
        var userInfo = that.data.userInfo
        var currentWish = this.data.wish;
        wx.request({
            url: serviceUrl + "wish/accept/" + currentWish.id,
            data: {
                traveller: userInfo.nickName,
                travellerAvatarUrl: userInfo.avatarUrl,
            },
            method: 'PUT',
            success: function (res) {
                var wh = that.transferDate(res.data);
                that.setData({
                    wish: wh
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
    confirmDelivery: function () {
        // confirm delivery 
        var that = this;
        var currentWish = this.data.wish;
        // confirm delivery 
        wx.request({
            url: serviceUrl + "wish/confirm/" + currentWish.id,
            data: {},
            method: 'PUT',
            success: function (res) {
                var wh = that.transferDate(res.data);
                that.setData({
                    wish: wh
                });
            },
            fail: function () {
                // fail
            },
            complete: function () {
                // complete
            }
        })

    },
    closeWish: function () {
        wx.switchTab({
            url: '/pages/account/account',
            success: function (res) {
                // success
            },
            fail: function () {
                // fail
            },
            complete: function () {
                // complete
            }
        })
    },
    transferDate: function (wh) {
        if (wh.createdDate) {
            wh.createdDate =
            new Date(wh.createdDate).toDateString();
        }
        if (wh.postedDate) {
            wh.postedDate =
            new Date(wh.postedDate).toDateString();
        }
        if (wh.acceptedDate) {
            wh.acceptedDate =
            new Date(wh.acceptedDate).toDateString();
        }
        if (wh.deliveredDate) {
            wh.deliveredDate =
        new Date(wh.deliveredDate).toDateString();
        }
        if (wh.dueDate) {
            wh.dueDate =
            new Date(wh.dueDate).toDateString();
        }
        return wh;
    },
})