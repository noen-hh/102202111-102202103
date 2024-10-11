Page({
  data: {
    projects: []  // 项目列表
  },

  onLoad: function() {
    this.getProjects();
  },

  getProjects: function() {
    const db = wx.cloud.database();
    db.collection('projectinfo').get().then(res => {
      this.setData({
        projects: res.data
      });
    });
  },

  addProject: function() {
    wx.navigateTo({
      url: '/pages/project-detail/project-detail1'
    });
  },

  // 确保在此处获取并传递 docId
  goToProjectDetail: function(event) {
    const docId = event.currentTarget.dataset.docid; // 获取项目的 docId
    if (docId) {
      wx.navigateTo({
        url: `/pages/check/check?docId=${docId}` // 跳转到 check 页面并传递 docId
      });
    } else {
      console.error('docId is empty');
    }
  }

});
