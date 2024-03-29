// pages/contentInfo/contentInfo.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      contentId:0,
      content:{},
      article: {}						// 内容数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const eventChannel = this.getOpenerEventChannel()
    var that = this
    eventChannel.on('acceptDataFromOpenerPage', function(data) {
      that.contentId = data;
      that.initContent(); // eventChannel为异步，故添加在contentId添加之后调用
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
   * 初始化页面内容
   */
  initContent:function(){
    var that = this
    var id =  that.contentId.data;
    if (id != 0){
    //   wx.request({
    //     url: 'https://www.xiongyungang.top/content/get',
    //     data: {'id': id},
    //     method: 'POST',
    //     header: {
    //       'Content-Type': 'application/x-www-form-urlencoded'
    //     },
    //     success: function (res) {
    //       //将获取到的json数据，存在名字叫list的这个数组中
    //       that.setData({
    //         content: res.data.data
    //       })
    //       that.setMarkdownData()
    //     }
    //   })
    }
  },

  /**
   * 页面转markdown格式
   */
  setMarkdownData:function(){
   // markdown
    let result = app.towxml(this.data.content.content,'markdown',{
      //theme:'dark'					// 主题，默认`light`
    });
    this.setData({
      article:result
    })
  }
})