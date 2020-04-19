const app = getApp();

Page({
  bindGetUserInfo: function (e) {
    var that = this;
    //此处授权得到userInfo
    console.log(e.detail);
    //接下来写业务代码
    app.doLogin(that.getUserInfo);

    //最后，记得返回刚才的页面
    wx.navigateBack({
      delta: 1
    })
  }
})
