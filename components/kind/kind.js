// components/kind/kind.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
       type:{
           type:Object,
           value:[]
       }
    },

    /**
     * 组件的初始数据
     */
    data: {
       flag:0
    },

    /**
     * 组件的方法列表
     */
    methods: {
       changeType:function(e){
          let index = e.currentTarget.dataset.index;
          let type =this.properties.type[index].type;
          this.setData({flag:index});
          this.triggerEvent('changeFlag', {flag:type});
       }
    },
})
