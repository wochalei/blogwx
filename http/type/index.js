let {url} = require('../config')
let path ='/blogtype'
function getType() {
    return new Promise((resolve, reject) => {
        wx.request({
            url: url + path+ '/searchusertype',
            method:'POST',
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
    getType
}