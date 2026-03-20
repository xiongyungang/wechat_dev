Page({
  data: {
    timeGreeting: '',
    motivationalPhrase: '',
    motivationalPhrases: [
      '每一个清晨都是新的开始',
      '努力是成功的必经之路',
      '相信自己，你能行',
      '今天也要加油鸭',
      '心有多大，舞台就有多大',
      '坚持就是胜利',
      '梦想需要行动来实现',
      '每一天都是礼物',
      '积极向上，拥抱阳光',
      '越努力，越幸运',
      '行动是最好的证明',
      '勇敢向前，无所畏惧',
      '相信未来，相信自己',
      '付出总会有回报',
      '心态决定一切',
      '每天进步一点点',
      '困难是成长的阶梯',
      '保持热情，拥抱生活',
      '做最好的自己',
      '成功属于有准备的人'
    ]
  },

  onLoad: function (options) {
    this.updateTimeGreeting();
    this.updateMotivationalPhrase();
  },

  onReady: function () {
    
  },

  onShow: function () {
    this.updateTimeGreeting();
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
  },

  updateTimeGreeting: function() {
    const hour = new Date().getHours();
    let greeting = '';
    
    if (hour >= 5 && hour < 12) {
      greeting = '早上好';
    } else if (hour >= 12 && hour < 18) {
      greeting = '下午好';
    } else {
      greeting = '晚上好';
    }
    
    this.setData({ timeGreeting: greeting });
  },

  updateMotivationalPhrase: function() {
    const { motivationalPhrases } = this.data;
    const randomIndex = Math.floor(Math.random() * motivationalPhrases.length);
    this.setData({ motivationalPhrase: motivationalPhrases[randomIndex] });
  }
})