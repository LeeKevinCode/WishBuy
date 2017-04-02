var util = require('../../utils/util.js')
var app = getApp()
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
        app.getUserInfo(function (userInfo) {
            that.setData({
                userInfo: userInfo
            })
        })
        // get all wishes belong to me
        var wishes = util.getAllWishes();
        var wishLst = 
        wishes.filter(w => w.creator == that.data.userInfo.nickName)
        .map(val => {
            var wish = Object.assign({},val);
            if (val.description && val.description.length > 200) {
                wish.shortDes = val.description.substring(0, 200);
            } else {
                wish.shortDes = val.description;
            }
            wish.shortDes += ' ...';
            return wish;
        });
        this.setData({
            wishList: wishLst,
        })
    }
})
