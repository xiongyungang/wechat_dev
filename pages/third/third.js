Page({
  data: {
    animation: null,
    scrollTop: 0
  },

  onLoad: function (options) {
    this.startAutoScroll();
  },

  onReady: function () {
    
  },

  onShow: function () {
    
  },

  onHide: function () {
    this.stopAutoScroll();
  },

  onUnload: function () {
    this.stopAutoScroll();
  },

  onPullDownRefresh: function () {
    
  },

  onReachBottom: function () {
    
  },

  onShareAppMessage: function () {
    
  },

  touchStartX: 0,
  touchEndX: 0,
  scrollInterval: null,

  bindTouchStart: function(e) {
    this.touchStartX = e.changedTouches[0].clientX;
    this.stopAutoScroll();
  },

  bindTouchEnd: function(e) {
    this.touchEndX = e.changedTouches[0].clientX;
    this.handleSwipe();
    this.startAutoScroll();
  },

  handleSwipe: function() {
    if (this.touchEndX > this.touchStartX + 50) {
      wx.navigateBack();
    }
  },

  goToPre: function() {
    wx.navigateBack();
  },

  startAutoScroll: function() {
    let that = this;
    this.scrollInterval = setInterval(function() {
      let newScrollTop = that.data.scrollTop + 1;
      that.setData({
        scrollTop: newScrollTop
      });
      
      // 当滚动到一定位置时重置
      if (newScrollTop > 6000) {
        that.setData({
          scrollTop: 0
        });
      }
    }, 50);
  },

  stopAutoScroll: function() {
    if (this.scrollInterval) {
      clearInterval(this.scrollInterval);
      this.scrollInterval = null;
    }
  }
})