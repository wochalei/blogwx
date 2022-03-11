import {
  card
} from '../../http/index.js'
import {
  formatTime
} from '../../utils/util';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    page: 1,
    pageSize: 6,
    flag:false,
    length:0
  },
  getCard: function (page, pageSize) {
    return card.getAllCard({
        page: page,
        pageSize: pageSize
      })
      .then(res => {
        let tmp = res.map((item) => {
          item.created = formatTime(new Date(item.created));
          return item;
        })
         tmp = {list:[...this.data.list,...tmp],page,pageSize };
        return tmp;
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    card.getAllCard({
        page: this.data.page,
        pageSize: this.data.pageSize
      })
      .then(res => {
        let tmp = res.map((item) => {
          item.created = formatTime(new Date(item.created));
          return item;
        })
        this.setData({
          list: tmp,
          length:tmp.length
        });
      })
  },

  onReachBottom: function () {
    if(this.data.flag) return;
    wx.showLoading({
      title: '玩命加载中',
    })
    this.getCard(this.data.page + 1, this.data.pageSize)
      .then(res => {
        if(res.list.length===this.data.length){
          this.setData({flag:true});  
        }else{
          this.setData({...res,length:res.list.length}); 
        }
         
        wx.hideLoading();
      })
  },
})