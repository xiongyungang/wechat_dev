Page({
  data: {
    
  },

  onLoad: function (options) {
    
  },

  onReady: function () {
    
  },

  onShow: function () {
    
  },

  onHide: function () {
    
  },

  onUnload: function () {
    
  },

  onPullDownRefresh: function () {
    
  },

  onReachBottom: function () {
    
  },

  onShareAppMessage: function () {
    
  },

  touchStartX: 0,
  touchEndX: 0,

  bindTouchStart: function(e) {
    this.touchStartX = e.changedTouches[0].clientX;
  },

  bindTouchEnd: function(e) {
    this.touchEndX = e.changedTouches[0].clientX;
    this.handleSwipe();
  },

  handleSwipe: function() {
    if (this.touchEndX < this.touchStartX - 50) {
      wx.navigateTo({
        url: '../second/second'
      });
    }
  },

  goToNext: function() {
    wx.navigateTo({
      url: '../second/second'
    });
  }
})