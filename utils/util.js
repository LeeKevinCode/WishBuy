function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// store new wish into local storage
function storeWish(w)
{
  var wishes = wx.getStorageSync('wishes');
  wishes = wishes || [];
  wishes.push(w);
  wx.setStorageSync('wishes', wishes);
}

// get all wishes from local storage
function getAllWishes()
{
  return wx.getStorageSync('wishes') || [];
}


module.exports = {
  formatTime: formatTime,
  storeWish: storeWish,
  getAllWishes:getAllWishes
}
