Page({
  data: {
    project: {
      name: '项目名称', // 项目名称
      description: '这是项目的描述内容。', // 项目描述
      type: 'AI教育', // 项目类型
      members: ['成员A', '成员B', '成员C'], // 人员名单
      tasks: ['任务1: 模型搭建', '任务2: 数据采集', '任务3: 优化模型'], // 任务安排
      imageUrl: '' // 点击的作品图片
    }
  },

  onLoad(options) {
    if (options.projectData) {
      try {
        const decodedData = decodeURIComponent(options.projectData);
        const projectData = JSON.parse(decodedData);
        this.setData({
          project: {
            ...this.data.project,
            imageUrl: projectData.imageUrl, // 确保这里设置 imageUrl
            name: projectData.name,
            description: projectData.description,
            type: projectData.type,
            members: projectData.members,
            tasks: projectData.tasks
          }
        });
      } catch (error) {
        console.error("解析项目数据失败:", error);
      }
    } else {
      console.error("未找到项目数据");
    }
  },
  // 收藏项目逻辑
  onFavoriteProject: function() {
    wx.showToast({
      title: '项目已收藏',
      icon: 'success',
      duration: 2000
    });
  },

  // 加入项目逻辑
  onJoinProject: function() {
    wx.showToast({
      title: '等待审核',
      icon: 'success',
      duration: 2000
    });
  }
});
