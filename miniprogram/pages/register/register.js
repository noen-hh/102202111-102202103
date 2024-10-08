Page({
  data: {
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  },

  // 绑定手机号输入
  bindPhoneInput: function(e) {
    this.setData({
      phone: e.detail.value
    });
  },

  // 绑定学校邮箱输入
  bindEmailInput: function(e) {
    this.setData({
      email: e.detail.value
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
    const { phone, email, password, confirmPassword } = this.data;

    // 验证输入
    if (!phone || !email || !password || !confirmPassword) {
      wx.showToast({
        title: '请填写所有字段',
        icon: 'none'
      });
      return;
    }

    // 验证手机号码
    if (!/^1\d{10}$/.test(phone)) { // 正则表达式验证手机号码
      wx.showToast({
        title: '手机号必须为11位',
        icon: 'none'
      });
      return;
    }

    // 验证密码
    if (password.length < 6 || password.length > 15) {
      wx.showToast({
        title: '密码长度必须为6-15位',
        icon: 'none'
      });
      return;
    }

    // 验证确认密码
    if (password !== confirmPassword) {
      wx.showToast({
        title: '密码不一致，请确认',
        icon: 'none'
      });
      return;
    }

    // 如果所有验证通过，直接显示注册成功并跳转
    wx.showToast({
      title: '注册成功',
      icon: 'success',
      duration: 2000
    });

    // 模拟延迟，方便用户看到成功消息
    setTimeout(() => {
      wx.navigateTo({
        url: '/pages/login/login'  // 注册成功后跳转到登录页面
      });
    }, 2000); // 2秒后跳转
  }
});
