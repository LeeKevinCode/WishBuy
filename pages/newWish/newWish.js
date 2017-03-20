var app = getApp()
var util = require('../../utils/util.js')

Page({
  data: {
    userInfo: {},
    pickerHidden: true,
    chosen: '',
  },
  bindDateChange: function(e) {
    this.setData({
      pickerHidden: true
    })
    this.setData({
      chosen: e.detail.value
    })
  },
  formSubmit: function(e) {
    var title = e.detail.value.title
    var description = e.detail.value.description
    var expiryDate = e.detail.value.datePicker
    var wishAmount = e.detail.value.wishAmount
    var createdDate = util.formatTime1(new Date())
    var status = 'Submit'
    var creatorId = ''
    var entertainerId = ''
    var wishId = ''

    var entity = {
        'title': title,
        'description': description,
        'expiryDate': expiryDate,
        'wishAmount': wishAmount,
        'createdDate': createdDate,
        'status': status,
        'creatorId': creatorId,
        'entertainerId': entertainerId,
        'wishId': wishId
    }
    console.log('form发生了reset事件，携带数据为：', entity)
  },

  formReset: function(e) {
    this.setData({
      chosen: ''
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    app.getUserInfo(function(userInfo){
      that.setData({
        userInfo:userInfo
      })
    })
  }
})