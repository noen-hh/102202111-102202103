Page({
  data: {
    projects: []
  },

  onLoad: function() {
    this.fetchProjects();
  },

  fetchProjects: function() {
    // 模拟获取项目数据
    const projects = [
      { id: 1, title: '项目1', summary: '项目1简介', time: '2024-05-25', location: '上海' },
      { id: 2, title: '项目2', summary: '项目2简介', time: '2024-05-24', location: '北京' },
      // 更多项目...
    ];
    this.setData({ projects });
  },

  onSearchInput: function(e) {
    // 处理搜索输入
    console.log('搜索内容:', e.detail.value);
  },

  onPostNew: function() {
    // 跳转到发布新项目的页面
    wx.navigateTo({
      url: '/path/to/new-project-page'
    });
  }
});