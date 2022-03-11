let {url} = require('../config')
let path ='/useriformation'
function getUser(data) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: url + path+ '/get',
            method:'POST',
            data:data,
            success(res) {
                resolve(res.data.data);
            },
            fail(err) {
                reject(err)
            }
        })
    }).catch(e=>{console.log(e);})
}
module.exports={
    getUser
}