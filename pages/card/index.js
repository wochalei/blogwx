import {card} from '../../http/index.js'
const app = getApp();

Page({
  data: {
    article: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    card.getContentCard(options.blog_id)
    .then(res=>{

      let obj = app.towxml(res[0].content, 'markdown', {
        theme: 'light'
      });
      this.setData({
        article: obj,
      });
    })
  },
})