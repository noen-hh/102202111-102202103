Page({
  data: {
    docId: '',
    project: {
      name: '',
      type: '',
      description: '',
      members: '',
      tasks: ''
    }
  },

  onLoad: function(options) {
    this.setData({
      docId: options.docId // 获取传递过来的 docId
    });
    this.fetchProjectData(); // 加载项目数据
  },

  fetchProjectData: function() {
    const db = wx.cloud.database();
    db.collection('projectinfo').doc(this.data.docId).get({
      success: res => {
        this.setData({
          project: res.data
        });
      },
      fail: err => {
        console.error('获取项目数据失败', err);
      }
    });
  },

  onEditProject: function() {
    wx.navigateTo({
      url: `/pages/edit-project/edit-project?docId=${this.data.docId}` // 传递 docId
    });
  }  
});
