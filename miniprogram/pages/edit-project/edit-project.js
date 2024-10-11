Page({
  data: {
    docId: '', // 用于存储 docId
    project: {
      name: '',
      type: '',
      description: '',
      members: '',
      tasks: ''
    },
    projectTypes: ['技术', '平台', '研究','教育','建设','服务','产品开发','数据'], // 你的项目类型列表
    typeIndex: 0 // 初始类型索引
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
          project: res.data,
          typeIndex: this.data.projectTypes.indexOf(res.data.type) // 设置类型索引
        });
      },
      fail: err => {
        console.error('获取项目数据失败', err);
      }
    });
  },

  onProjectNameInput: function(event) {
    this.setData({
      'project.name': event.detail.value
    });
  },

  onProjectTypeChange: function(event) {
    const index = event.detail.value;
    this.setData({
      'project.type': this.data.projectTypes[index],
      'typeIndex': index // 更新类型索引
    });
  },

  onProjectDescriptionInput: function(event) {
    this.setData({
      'project.description': event.detail.value
    });
  },

  onMembersInput: function(event) {
    this.setData({
      'project.members': event.detail.value
    });
  },

  onTasksInput: function(event) {
    this.setData({
      'project.tasks': event.detail.value
    });
  },

  onSaveEdit: function() {
    const db = wx.cloud.database();
    db.collection('projectinfo').doc(this.data.docId).update({
      data: {
        name: this.data.project.name,
        type: this.data.project.type,
        description: this.data.project.description,
        members: this.data.project.members,
        tasks: this.data.project.tasks
      },
      success: res => {
        wx.showToast({
          title: '保存成功',
        });
        wx.redirectTo({
          url: '/pages/project_1/project_1' // 跳转到 project_1 页面
        });
      },
      fail: err => {
        console.error('保存失败', err);
      }
    });
  },

  onDeleteProject: function() {
    const that = this;
    wx.showModal({
      title: '确认删除',
      content: '确定要删除这个项目吗？',
      success: function(res) {
        if (res.confirm) {
          const db = wx.cloud.database();
          db.collection('projectinfo').doc(that.data.docId).remove({
            success: res => {
              wx.showToast({
                title: '删除成功',
              });
              wx.redirectTo({
                url: '/pages/project_1/project_1' // 跳转到 project_1 页面
              });
            },
            fail: err => {
              console.error('删除失败', err);
            }
          });
        }
      }
    });
  }
});
