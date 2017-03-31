var util = require('../../utils/util.js');
var app = getApp();
Page({
    data: {
        wish: {},
        userInfo: {}
    },
    onLoad: function (option) {
        // load this wish
        var wish = util.getWishById(option.wishId);
        this.setData({
            wish: wish,
        });
        var that = this;
        app.getUserInfo(function (userInfo) {
            that.setData({
                userInfo: userInfo
            })
        });
        console.log('userinfo',this.data.userInfo);
    }
})