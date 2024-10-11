// 简单版
Page({
  data: {
      content: '',
      // 当前登录者信息
      login: {
          id: '2023',
          user: '帅哥美女',
          avatar: '/images/p20.jpg'
      },
      // 聊天信息
      chatList: [{
              msgId: '2023',
              nickname: '帅哥美女',
              avatar: '/images/p20.jpg',
              message: '你们好啊',
              type: 'text',
              date: '10-06 14:24' // 每隔5分钟记录一次时间
          },
          {
              msgId: '2022',
              nickname: 'man',
              avatar: '/images/huonan.png',
              message: '你好奶妈',
              type: 'text'
          },
          {
              msgId: '2022',
              nickname: '我',
              avatar: '/images/p20.jpg',
              message: '该消息为撤回消息',
              type: 'custom'
          },
          {
              msgId: '2023',
              nickname: '帅哥美女',
              avatar: '/images/p20.jpg',
              message: '我嘞个豆啊是你吗',
              type: 'text'
          },
          {
              msgId: '2022',
              nickname: 'man',
              avatar: '/images/huonan.png',
              message: '就是我别质疑孩子们',
              type: 'text',
              date: '05-04 16:05'
          },

          {
              msgId: '2022',
              nickname: '嘻嘻',
              avatar: '/images/jett.png',
              message: '打赢复活赛啦？',
              type: 'text'
          },
          {
              msgId: '2022',
              nickname: 'man',
              avatar: 'https://img0.baidu.com/it/u=3997048646,1811313428&fm=253&app=53&size=w500&n=0&g=0n&f=jpeg?sec=1686045994&t=0e1a0c5e962337e74750fba219bb3b51',
              message: '该消息为撤回消息',
              type: 'custom'
          },
          {
              msgId: '2023',
              nickname: '帅哥美女',
              avatar: '/images/p20.jpg',
              message: '诗人握持',
              type: 'text'
          },
          {
              msgId: '2023',
              nickname: '帅哥美女',
              avatar: '/images/p20.jpg',
              message: '打高分的都是帅哥美女哦',
              type: 'text'
          },
          {
              msgId: '2022',
              nickname: 'man',
              avatar: '/images/huonan.png',
              message: '对对对',
              type: 'text',
              date: '10-09 11:21'
          },
      ],
  },
  onLoad() {
      this.scrollToBottom();
  },
  // 输入监听
  inputClick(e) {
      this.setData({
          content: e.detail.value
      })
  },
  // 发送监听
  sendClick() {
      var that = this;
      var list = this.data.chatList;
      // 获取当前时间
      var date = new Date();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var hour = date.getHours();
      var minu = date.getMinutes();
      var now1 = month < 10 ? '0' + month : month;
      var now2 = day < 10 ? '0' + day : day;
      // 组装数据
      var msg = {
          msgId: this.data.login.id,
          nickname: this.data.login.user,
          avatar: this.data.login.avatar,
          message: this.data.content,
          type: 'text',
          date: now1 + '-' + now2 + ' ' + hour + ':' + minu
      }
      this.setData({
          chatList: list.concat(msg)
      }, () => {
          that.scrollToBottom();
          that.setData({
              content: ''
          })
      })
  },
  // 滑动到最底部
  scrollToBottom() {
      setTimeout(() => {
          wx.pageScrollTo({
              scrollTop: 200000,
              duration: 3
          });
      }, 600)
  },
})
