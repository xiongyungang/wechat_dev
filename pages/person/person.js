// pages/person/person.js

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse("button.open-type.getUserInfo"),
    userInfo: "",
    hasUserInfo: false,
    isLogin:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //查看是否授权
    var that = this
    wx.getSetting({
      success: function (res) {
          debugger
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          // wx.getUserInfo({
          //  success: function(res) {
          //   console.log(res.userInfo)
          //  }
          // })

          if (app.globalData.userInfo){
            that.setData({
              userInfo: app.globalData.userInfo,
              hasUserInfo: true
            })
          }
        }
      }
    })

    var that = this
    // 判断是否登录
    wx.getStorage({
      key: 'token',
      success(res) {
        // 登录状态
        that.setData({
          isLogin:true
        })
      },
      fail(){
        // 未登录状态
        that.setData({
          isLogin:false
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 收藏页面跳转
   */
  toFavorite: function () {
    wx.navigateTo({
      url: '../favorite/favorite',
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        // res.eventChannel.emit('acceptDataFromOpenerPage', {
        //   data: id
        // })
      }
    })
  },
    /**
   * 清除本地所有缓存
   */
  clearCache: function () {
    var that = this
    wx.clearStorage({
      success: (res) => {
        // 缓存清除成功回调
        console.log("clear success.")
        that.userInfo = '';
        app.globalData.userInfo = null;
        that.setData({
          userInfo: null,
          hasUserInfo: false
        })
      },
    })
  },
  getUserInfo(e) {
    console.log("getuserinfo");
    if (!e.detail.userInfo) {
      return
    }
    debugger
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })

     // 登录
     wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        this.loginRemote(res.code)
      }
    })
  },
  loginRemote:function(code){
    var that = this
    var userInfo = app.globalData.userInfo
    // wx.request({
    //   url: 'https://www.xiongyungang.top/account/wechat/Login',
    //   method: 'POST',
    //   data:{'avatarUrl':userInfo['avatarUrl'],
    //   'nickName':userInfo['nickName'],
    //   'country':userInfo['country'],
    //   'city':userInfo['city'],
    //   'gender':userInfo['gender'],
    //   'language':userInfo['language'],
    //   'province':userInfo['province'],
    //   code},
    //   header: {
    //     'content-type': 'application/json'
    //   },
    //   success: function (res) {
    //     // 获取返回的登录凭证
    //     console.log(res.data.data.token)
    //     // app.globalData.token = res.data.data.token
    //       wx.setStorage({
    //         key:'token',
    //         data:res.data.data.token
    //       })
    //   }
    // })
  }
})