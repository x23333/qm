import drawEffect from '../../lib/effect'
Page({
  data: {
    width: 0,
    scale: 1
  },
  onLoad() {
    wx.getSystemInfo({
      success: (res) => {
        let width = res.windowWidth
        this.setData({
          width,
          scale: width / 375
        });
      }
    });
    // 初始化canvas
    const canvasId = "effect";
    // canvas 内部的世界 context 的上下文环境
    const ctx = wx.createCanvasContext(canvasId);
    // canvas 的绘制大小 下雨 没什么界面
    // 750 设计稿优先
    let { width, scale} = this.data;
    let height = 768 / 2 * scale;
    let rain = drawEffect(ctx, width, height, { amount: 100, speedFactory: 0.03});
    rain.run();
  }
})