Page({
  data:{
    array:['15','30','60','90'],
     objectArray: [
      {
        id: 0,
        duration: '15'
      },
      {
        id: 1,
         duration: '30'
      },
      {
        id: 2,
         duration: '60'
      },
      {
        id: 3,
        duration: '90'
      }
    ],
    index:0,
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function() {
    console.log('form发生了reset事件')
  }
})