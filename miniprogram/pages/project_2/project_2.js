Page({
  data: {
    project: {
      taskDescription: '完成项目相关任务，包括但不限于模型搭建、调优等。',
      skills: ['ruangong', '技能2', '技能3']
    }
  },

  applyForProject: function() {
    // 处理项目申请逻辑
    wx.showModal({
      title: '申请项目',
      content: '您确定要申请加入这个项目吗？',
      success: function(res) {
        if (res.confirm) {
          console.log('用户点击确定');
          // 发起网络请求提交申请
          wx.showToast({
            title: '申请已提交',
            icon: 'success',
            duration: 2000
          });
          // 可以在这里添加跳转逻辑，例如返回项目列表或到其他页面
          wx.reLaunch({
            url: '/pages/home/home'
          });
        } else if (res.cancel) {
          console.log('用户点击取消');
        }
      }
    });
  }
});