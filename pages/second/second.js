Page({
  data: {
    verses: [],
    currentVerse: {
      title: "夜雨寄北",
      author: "李商隐",
      content: ["君问归期未有期", "巴山夜雨涨秋池", "何当共剪西窗烛", "却话巴山夜雨时"]
    }
  },

  onLoad: function (options) {
    this.parseVerses();
    this.randomVerse();
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
    if (this.touchEndX > this.touchStartX + 50) {
      wx.navigateBack();
    } else if (this.touchEndX < this.touchStartX - 50) {
      wx.navigateTo({
        url: '../third/third'
      });
    }
  },

  goToPre: function() {
    wx.navigateBack();
  },

  goToNext: function() {
    wx.navigateTo({
      url: '../third/third'
    });
  },

  parseVerses: function() {
    const verses = [];
    const content = `登高
杜甫
风急天高猿啸哀，
渚清沙白鸟飞回。
无边落木萧萧下，
不尽长江滚滚来。
万里悲秋常作客，
百年多病独登台。
艰难苦恨繁霜鬓，
潦倒新停浊酒杯。

锦瑟
李商隐
锦瑟无端五十弦，
一弦一柱思华年。
庄生晓梦迷蝴蝶，
望帝春心托杜鹃。
沧海月明珠有泪，
蓝田日暖玉生烟。
此情可待成追忆，
只是当时已惘然。

黄鹤楼
崔颢
昔人已乘黄鹤去，
此地空余黄鹤楼。
黄鹤一去不复返，
白云千载空悠悠。
晴川历历汉阳树，
芳草萋萋鹦鹉洲。
日暮乡关何处是，
烟波江上使人愁。

蜀道难
李白
噫吁嚱，危乎高哉！
蜀道之难，难于上青天！
蚕丛及鱼凫，开国何茫然！
尔来四万八千岁，
不与秦塞通人烟。
西当太白有鸟道，
可以横绝峨眉巅。

行路难（其一）
李白
金樽清酒斗十千，
玉盘珍羞直万钱。
停杯投箸不能食，
拔剑四顾心茫然。
欲渡黄河冰塞川，
将登太行雪满山。
闲来垂钓碧溪上，
忽复乘舟梦日边。
长风破浪会有时，
直挂云帆济沧海。

春江花月夜
张若虚
春江潮水连海平，
海上明月共潮生。
滟滟随波千万里，
何处春江无月明！
江流宛转绕芳甸，
月照花林皆似霰。
空里流霜不觉飞，
汀上白沙看不见。

登幽州台歌
陈子昂
前不见古人，
后不见来者。
念天地之悠悠，
独怆然而涕下。

夜雨寄北
李商隐
君问归期未有期，
巴山夜雨涨秋池。
何当共剪西窗烛，
却话巴山夜雨时。

登岳阳楼
杜甫
昔闻洞庭水，
今上岳阳楼。
吴楚东南坼，
乾坤日夜浮。
亲朋无一字，
老病有孤舟。
戎马关山北，
凭轩涕泗流。

送杜少府之任蜀州
王勃
城阙辅三秦，
风烟望五津。
与君离别意，
同是宦游人。
海内存知己，
天涯若比邻。
无为在歧路，
儿女共沾巾。

使至塞上
王维
单车欲问边，
属国过居延。
征蓬出汉塞，
归雁入胡天。
大漠孤烟直，
长河落日圆。
萧关逢候骑，
都护在燕然。

望月怀远
张九龄
海上生明月，
天涯共此时。
情人怨遥夜，
竟夕起相思。
灭烛怜光满，
披衣觉露滋。
不堪盈手赠，
还寝梦佳期。

早发白帝城
李白
朝辞白帝彩云间，
千里江陵一日还。
两岸猿声啼不住，
轻舟已过万重山。

登鹳雀楼
王之涣
白日依山尽，
黄河入海流。
欲穷千里目，
更上一层楼。

静夜思
李白
床前明月光，
疑是地上霜。
举头望明月，
低头思故乡。

春晓
孟浩然
春眠不觉晓，
处处闻啼鸟。
夜来风雨声，
花落知多少。

过零丁洋
文天祥
辛苦遭逢起一经，
干戈寥落四周星。
山河破碎风飘絮，
身世浮沉雨打萍。
惶恐滩头说惶恐，
零丁洋里叹零丁。
人生自古谁无死，
留取丹心照汗青。

石灰吟
于谦
千锤万凿出深山，
烈火焚烧若等闲。
粉骨碎身浑不怕，
要留清白在人间。

己亥杂诗
龚自珍
九州生气恃风雷，
万马齐喑究可哀。
我劝天公重抖擞，
不拘一格降人才。

饮酒（其五）
陶渊明
结庐在人境，
而无车马喧。
问君何能尔？
心远地自偏。
采菊东篱下，
悠然见南山。
山气日夕佳，
飞鸟相与还。
此中有真意，
欲辨已忘言。`;

    const verseBlocks = content.split('\n\n');
    verseBlocks.forEach(block => {
      const lines = block.split('\n').filter(line => line.trim() !== '');
      if (lines.length >= 3) {
        const title = lines[0];
        const author = lines[1];
        const content = lines.slice(2);
        verses.push({ title, author, content });
      }
    });
    this.setData({ verses });
  },

  randomVerse: function() {
    const { verses } = this.data;
    if (verses.length > 0) {
      const randomIndex = Math.floor(Math.random() * verses.length);
      this.setData({ currentVerse: verses[randomIndex] });
    }
  }
})