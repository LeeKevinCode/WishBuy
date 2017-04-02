function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
// a utility function to generator pseudo-guid
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

function formatTime1(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  return [year, month, day].map(formatNumber).join('-')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// store new wish into local storage
function storeWish(w)
{
  w.id = w.id || guid();
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
// get wish by id
function getWishById(id)
{
  var wishes = wx.getStorageSync('wishes') || [];
  var targetWish = wishes.filter(w => w.id.toLowerCase() == id.toLowerCase());
  if(targetWish.length > 0)
  {
    return targetWish[0];
  }else
  {
    return null;
  }
}
// get wallet by id 
function getWalletById(id)
{
  var wallet = wx.getStorageSync('wallets');
  if(wallet)
  {
    return wallet;
  }else{
    wallet = {};
    wallet.balance = 1000;
    updateWallet(wallet);
    return wallet;
  }

}

function updateWallet(wallet)
{
  wx.setStorageSync('wallet', wallet)
}

function updateWish(wish)
{
  var wishes = wx.getStorageSync('wishes');
  wishes = wishes.filter(w => w.id != wish.id);
  wishes.unshift(wish);
  wx.setStorageSync('wishes', wishes);
}


module.exports = {
  formatTime: formatTime,
  storeWish: storeWish,
  getAllWishes:getAllWishes,
  getWishById:getWishById,
  updateWish:updateWish,
  guid:guid,
  getWalletById:getWalletById,
  updateWallet:updateWallet,
}
