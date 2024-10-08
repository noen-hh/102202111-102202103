Page({
  data: {
    phone: '',
    password: '',
    confirmPassword: ''
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

  // 绑定确认密码输入
  bindConfirmPasswordInput: function(e) {
    this.setData({
      confirmPassword: e.detail.value
    });
  },

  // 提交注册
  submitRegister: function() {
    const { phone, password, confirmPassword } = this.data;

    if (!phone || !password || !confirmPassword) {
      wx.showToast({
        title: '请填写所有字段',
        icon: 'none'
      });
      return;
    }

    if (password !== confirmPassword) {
      wx.showToast({
        title: '密码不一致，请确认',
        icon: 'none'
      });
      return;
    }

    // 调用后台接口进行注册
    wx.request({
      url: 'https://example.com/register',  // 替换为实际注册接口
      method: 'POST',
      data: {
        phone,
        password
      },
      success(res) {
        if (res.data.success) {
          wx.showToast({
            title: '注册成功',
          });
          wx.navigateTo({
            url: '/pages/login/login'  // 注册成功后跳转到登录页面
          });
        } else {
          wx.showToast({
            title: res.data.message || '注册失败',
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
