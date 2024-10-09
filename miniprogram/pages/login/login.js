// login.js
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

    // 输入验证
    if (!phone || !password) {
      wx.showToast({
        title: '请输入手机号和密码',
        icon: 'none'
      });
      return;
    }

    // 从云数据库中读取用户数据
    const db = wx.cloud.database();
    db.collection('user').where({
      phone: phone
    }).get()
      .then(res => {
        if (res.data.length > 0) {
          // 找到用户，进行密码匹配
          const user = res.data[0];
          if (user.password === password) {
            wx.showToast({
              title: '登录成功',
            });
            wx.navigateTo({
              url: '/pages/home/home' // 登录成功后跳转到主页
            });
          } else {
            wx.showToast({
              title: '密码错误',
              icon: 'none'
            });
          }
        } else {
          wx.showToast({
            title: '用户不存在',
            icon: 'none'
          });
        }
      })
      .catch(err => {
        wx.showToast({
          title: '查询失败',
          icon: 'none'
        });
        console.error(err);
      });
  }
});
