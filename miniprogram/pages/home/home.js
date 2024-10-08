Page({
  data: {},

  // 退出登录
  logout: function() {
    wx.showModal({
      title: '确认退出',
      content: '您确定要退出登录吗？',
      success: (res) => {
        if (res.confirm) {
          // 清除用户信息，返回登录页面
          wx.clearStorageSync(); // 清除本地存储
          wx.navigateTo({
            url: '/pages/login/login'  // 返回登录页面
          });
        }
      }
    });
  }
});
