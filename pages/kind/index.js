import {card,type} from '../../http/index.js'
import {formatTime } from '../../utils/util';
Page({
    data: {
      type:[],
      typeList:[],
      page: 1,
      pageSize: 6,
      max:false,
      length:0,
      currentType:''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onChangeFlag:function(e){
        this.data.currentType =e.detail.flag;
        this.getCardType({type:this.data.currentType,page:this.data.page,pageSize:this.data.pageSize});  
    },
    getCardType:function(e){

        card.getTypeCard(e)
        .then(res=>{
            this.setData({typeList:this.changeTime(res)});
        })
    },
    changeTime:function(res){
        let tmp = res.map((item)=>{
            item.created= formatTime(new Date(item.created));
             return item;
         })
         return tmp;
    },
    onLoad: function (options) {
        type.getType()
        .then(res=>{
            this.setData({type:res});
            this.data.currentType=res[0].type;
            return  card.getTypeCard({ page: this.data.page, pageSize: this.data.pageSize ,type:res[0].type})
        }) 
        .then(res=>{
            let tmp =this.changeTime(res);
            this.setData({typeList:tmp,length:tmp.length})
        })
       
    },
    onReachBottom: function () {
        if(this.data.max) return;
        wx.showLoading({
          title: '玩命加载中',
        })
        card.getTypeCard({page:this.data.page + 1, pageSize:this.data.pageSize,type:this.data.currentType})
          .then(res => {
              let tmp = [...this.data.typeList,...res];
            if(tmp.length===this.data.length){
                
              this.setData({max:true});  
            }else{
                this.setData({typeList:tmp,length:tmp.length,page:this.data.page + 1}); 
            }
            wx.hideLoading();
          })
    
    
        },
})