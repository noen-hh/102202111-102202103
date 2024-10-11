Page({
  data: {
    searchText: '', // 用于存储搜索框的输入内容
    works: [
      { title: '大学生信息服务平台', imageUrl: '/images/p6.jpg' },
      { title: '具有智能云的个性水杯设计', imageUrl: '/images/p7.jpg' },
      { title: '智能文档处理软件', imageUrl: '/images/p8.jpg' },
      { title: '织梦大学生创业平台', imageUrl: '/images/p3.jpg' },
      { title: '智能清洁机器人', imageUrl: '/images/p10.jpg' },
      { title: '虚拟现实景区旅游', imageUrl: '/images/p1.jpg' },
      { title: '企业销售数据分析', imageUrl: '/images/p2.jpg' },
      { title: '创新型酒店别墅', imageUrl: '/images/p13.jpg' },
      { title: 'Serial智能教育机器人套装', imageUrl: '/images/p4.png' },
      { title: '高校跳蚤联盟', imageUrl: '/images/p3.jpg' },
      { title: '智慧停车场', imageUrl: '/images/p8.jpg' },
      { title: '个性化定制相变材料', imageUrl: '/images/p17.jpg' },
      { title: '车辆移动信息互动平台', imageUrl: '/images/p5.jpg' },
      { title: '5G 网络优化项目', imageUrl: '/images/p19.jpg' },
      { title: '交通流量数据分析与预测', imageUrl: '/images/p2.jpg' },
      { title: '企业网络安全防护项目', imageUrl: '/images/p1.jpg' }
    ],
    filteredWorks: [], // 初始化过滤后的作品数组
  },

  // 处理搜索框输入事件
  onSearchInput(e) {
    this.setData({
      searchText: e.detail.value,
    });
  },

  // 处理搜索按钮点击事件
  onSearch() {
    const { searchText, works } = this.data;

    // 如果搜索框为空，展示所有项目
    if (!searchText) {
      this.setData({ filteredWorks: works });
      return;
    }

    const filteredWorks = works.filter(work => 
      this.matchTitle(work.title, searchText) // 使用匹配函数
    );
    this.setData({ filteredWorks });
  },

  // 匹配项目名称的函数
  matchTitle(title, searchText) {
    let matchCount = 0;
    for (let char of searchText) {
      if (title.includes(char)) {
        matchCount++;
      }
      if (matchCount >= 2) return true;
    }
    return false;
  },

  navigateToDetail(e) {
    const { title, imageUrl, description, type, members, tasks } = e.currentTarget.dataset;
    const projectData = JSON.stringify({
      name: title,
      imageUrl: imageUrl, // 确保这里传递的 imageUrl 是有效的
      description,
      type,
      members,
      tasks
    });
    wx.navigateTo({
      url: `/pages/project-detail/project-detail?projectData=${encodeURIComponent(projectData)}`,
    });
  },
  // 其他导航函数...
  navigateToHome: function() {
    wx.navigateTo({
      url: '/pages/home/home'
    });
  },

  navigateToProjects: function() {
    wx.navigateTo({
      url: '/pages/project_1/project_1'
    });
  },

  navigateToChat: function() {
    wx.navigateTo({
      url: '/pages/chat/chat'
    });
  },

  navigateToProfile: function() {
    wx.navigateTo({
      url: '/pages/profile/profile'
    });
  },

  onLoad(options) {
    this.setData({ filteredWorks: this.data.works });
  },
});
