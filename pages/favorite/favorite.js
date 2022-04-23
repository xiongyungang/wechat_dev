// pages/favorite/favorite.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var value
    wx.getStorage({
      key: 'token',
      success(res) {
        value = res.data
        wx.request({
          url: 'https://www.xiongyungang.top/favorite/list',
          method: 'POST',
          data: {
            'token': value
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success: function (r) {
            //将获取到的json数据，存在名字叫list的这个数组中
            that.setData({
              list: r.data,
            })
          }
        })
      }
      // todo: 缓存拿不到的情况，解决登录后本地token被清除
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
   * 内容跳转
   */
  onPostTap(event) {
    // 获取自定义属性值
    var id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: '../contentInfo/contentInfo',
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', {
          data: id
        })
      }
    })
  },
})