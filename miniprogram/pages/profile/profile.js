Page({
  /**
   * 页面的初始数据
   */
  data: {
    login: {
      show: false,
      line: false,
      avatar: '/images/jett.png',
    }
  },
// 登录监听
chooseAvatar(e) {
  this.setData({
    login: {
      show: true,
      line:true,
      avatar: e.detail.avatarUrl,
    }
  })
},
 
// 基本信息
basicClick() {
  console.log('基本信息监听');
},
 
 // 匿名反馈
 feedbackClick() {
  console.log('匿名反馈监听');
},
// 关于我们
aboutClick() {
  console.log('关于我们监听');
},
// 退出监听
exitClick() {
  let that = this;
  wx.showModal({
    title: '提示',
    content: '确定退出登录吗？',
    success(res) {
      if (res.confirm) {
        that.setData({
          login: {
            show: false,
            avatar: '/images/jett.png',
          }
        })
      }
      wx.redirectTo({
        url: '/pages/login/login'
      });
    }
  })
},
 
 
 
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
 
  },
 
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
 
  },
 
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
 
  },
 
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
  }
})