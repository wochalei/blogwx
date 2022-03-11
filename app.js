
App({
    // 引入`towxml3.0`解析方法
    towxml:require('/towxml/index'),
     //声明一个数据请求方法
   getText: (url, callback) => {
    wx.request({
     url: url,
     header: {
      'content-type': 'application/x-www-form-urlencoded'
     },
     method:'POST',
     data:{
       blog_id:52
     },
     success: (res) => {
       console.log(res);
      if (typeof callback === 'function') {
       callback(res.data.data);
      };
     }
    });
   }
   })