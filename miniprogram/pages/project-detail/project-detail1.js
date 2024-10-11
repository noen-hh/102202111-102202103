Page({
  data: {
    name: '',
    type: '',
    description: '',
    members: '',
    tasks: ''
  },

  bindInputName(e) {
    this.setData({ name: e.detail.value });
  },
  bindInputType(e) {
    this.setData({ type: e.detail.value });
  },
  bindInputDescription(e) {
    this.setData({ description: e.detail.value });
  },
  bindInputMembers(e) {
    this.setData({ members: e.detail.value });
  },
  bindInputTasks(e) {
    this.setData({ tasks: e.detail.value });
  },

  submitProject: function() {
    const { name, type, description, members, tasks } = this.data;

    if (!name || !type || !description) {
      wx.showToast({
        title: '请完整填写项目信息',
        icon: 'none'
      });
      return;
    }

    const db = wx.cloud.database();
    db.collection('projectinfo').add({
      data: {
        name,
        type,
        description,
        members: members.split(','),
        tasks: tasks.split(',')
      }
    }).then(() => {
      wx.showToast({
        title: '项目创建成功'
      });
      wx.navigateTo({
        url: '/pages/project_1/project_1'
      });
    }).catch(err => {
      wx.showToast({
        title: '创建项目失败',
        icon: 'none'
      });
      console.error(err);
    });
  }
});
