// pages/contentList/contentList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category_id:0,
    list:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const eventChannel = this.getOpenerEventChannel()
    var that = this
    eventChannel.on('acceptDataFromOpenerPage', function(data) {
      //console.log(data)
      that.data.category_id = data;
      that.initData();
    });
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
   * 栏目id获取内容列表
   */
  initData:function(){
    var that = this
    var id = that.data.category_id.data;
    // if (id != 0){
    //   wx.request({
    //     url: 'https://www.xiongyungang.top/content/column',
    //     data: {'category_id': id},
    //     method: 'POST',
    //     header: {
    //       'content-type': 'application/x-www-form-urlencoded'
    //     },
    //     success: function (res) {
    //       //将获取到的json数据，存在名字叫list的这个数组中
    //       that.setData({
    //         list: res.data
    //         //res代表success函数的事件对，data是固定的，list是数组
    //       })
    //     }
    //   })
    // }
  },

  /**
   * 栏目内容列表跳转
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