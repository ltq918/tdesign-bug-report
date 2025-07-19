// index.js
Page({
  data: {
    loading: true,
    text: ''
  },
  onLoad() {
    // 模拟请求比骨架屏 delay 还快时，骨架屏异常
    setTimeout(() => {
      this.setData({
        loading: false,
        text: '数据加载完成'
      });
    }, 1000); // 1秒返回
  }
})