let {url} = require('../config')
let path ='/blog'
//获取所有card
function getAllCard(data) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: url + path+ '/search',
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
//获取某类card
function getTypeCard(data){
    return new Promise((resolve, reject) => {
        wx.request({
            url: url + path+ '/type',
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
//获取card内容
function getContentCard(id){
    return new Promise((resolve, reject) => {
        wx.request({
            url: url + path+ '/search',
            method:'POST',
            data:{blog_id:id},
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
    getAllCard,
    getTypeCard,
    getContentCard
}