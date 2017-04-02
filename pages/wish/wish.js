var util = require('../../utils/util.js');
var app = getApp();
Page({
    data: {
        wish: {},
        userInfo: {},
        wishStatus:app.globalData.wishStatus,
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
    },
    postWish: function(){
        // post wish
        var currentWish = this.data.wish;
        // set status
        var thatWish = 
        Object.assign({},currentWish);
        thatWish.status =
        app.globalData.wishStatus.posted;
        thatWish.postedDate = 
        (new Date()).toDateString();
        // set due Date
        var someDate = new Date();
        var duration = 
        Number(currentWish.grantedDuration); 
        someDate.setTime(
            someDate.getTime()+
            (duration * 24 * 60 * 60 * 1000)
        );
        thatWish.dueDate = someDate.toDateString();
        // update wish
        util.updateWish(thatWish);
        // update wallet
        var wallet = util.getWalletById();
        wallet.balance -= Number(currentWish.amount);
        util.updateWallet(wallet);
        // set new wish
        this.setData({
            wish:thatWish
        });
    },
    acceptWish:function(){
         // accept wish
        var currentWish = this.data.wish;
        // set status
        var thatWish = 
        Object.assign({},currentWish);
        thatWish.status = 
        app.globalData.wishStatus.accepted;
        //update userInfo
        thatWish.acceptedDate = 
        (new Date()).toDateString();
        thatWish.travellerAvatarUrl =
        this.data.userInfo.avatarUrl;
        thatWish.traveller = 
        this.data.userInfo.nickName;
         // update wish
        util.updateWish(thatWish);
        // update wallet
        // update wallet
        var wallet = util.getWalletById();
        wallet.balance -= 10;
        util.updateWallet(wallet);
          // set new wish
        this.setData({
            wish:thatWish
        });
    },
    confirmDelivery:function(){
        // confirm delivery 
        var currentWish = this.data.wish;
        // set status
        var thatWish = 
        Object.assign({},currentWish);
        thatWish.status = 
        app.globalData.wishStatus.realized;
        thatWish.deliveredDate = 
        (new Date()).toDateString();
        // update wish
         util.updateWish(thatWish);
         this.setData({
            wish:thatWish
        });
    }
})