// app.ts
// 定义全局选项的接口
interface IAppOption {
  globalData: {};
}

App<IAppOption>({
  globalData: {},

  onLaunch() {
    // 初始化云开发环境
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        env: 'lzr-5gx4bdeea09a01ae',  // 替换为你的云环境 ID
        traceUser: true,             // 记录用户
      });
    }

    // 展示本地存储能力
    const logs: number[] = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);

    // 登录
    wx.login({
      success: res => {
        console.log(res.code);
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    });
  },
});
