Page({
  data: {
    phone: '',
    password: ''
  },

  // 绑定手机号输入
  bindPhoneInput: function(e) {
    this.setData({
      phone: e.detail.value
    });
  },

  // 绑定密码输入
  bindPasswordInput: function(e) {
    this.setData({
      password: e.detail.value
    });
  },

  // 提交登录
  submitLogin: function() {
    const { phone, password } = this.data;

    if (!phone || !password) {
      wx.showToast({
        title: '请输入手机号和密码',
        icon: 'none'
      });
      return;
    }

    // 调用后台接口进行登录
    wx.request({
      url: 'https://example.com/login',  // 替换为实际登录接口
      method: 'POST',
      data: {
        phone,
        password
      },
      success(res) {
        if (res.data.success) {
          wx.showToast({
            title: '登录成功',
          });
          wx.navigateTo({
            url: '/pages/home/home'  // 登录成功后跳转到主页
          });
        } else {
          wx.showToast({
            title: res.data.message || '登录失败',
            icon: 'none'
          });
        }
      },
      fail() {
        wx.showToast({
          title: '网络错误，请稍后再试',
          icon: 'none'
        });
      }
    });
  }
});
