// pages/mine/mine.js

//获取app实例
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasLogin: wx.getStorageSync('loginFlag') ? true : false
  },


  // 检查本地 storage 中是否有skey登录态标识
  checkLoginStatus: function () {

    let that = this;

    let loginFlag = wx.getStorageSync('loginFlag');

    if (loginFlag) {
      // 检查 session_key 是否过期
      wx.checkSession({
        // session_key 有效(未过期)
        success: function () {
          // 获取用户头像/昵称等信息
          that.getUserInfo();
        },

        // session_key 已过期
        fail: function () {
          that.setData({
            hasLogin: false
          });
        }
      });

    } else {
      that.setData({
        hasLogin: false
      });
    }
  },

  /**
    * 执行登录操作
    */
  doLogin: function () {
    let that = this;
    wx.showLoading({
      title: '登录中...',
      mask: true
    });
    app.doLogin(that.getUserInfo);
  },


  /**
     * 从 globalData 中获取 userInfo
     */
  getUserInfo: function () {
    let that = this;

    let userInfo = app.globalData.userInfo;
    console.info('userInfo is:', userInfo);
    if (userInfo) {
      that.setData({
        hasLogin: true,
        userInfo: userInfo
      });
      wx.hideLoading();
    } else {
      console.log('globalData中userInfo为空');
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.checkLoginStatus();
  },

  onShow: function () {
    let that = this;
    that.setData({
      userInfo: app.globalData.userInfo
    });
  }
})