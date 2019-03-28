const db = require('../config/db.js'); //接收这个db.js


//schema 是一种描述 mongodb 中 collection(集合) 结构的一种东西。
const schema = new db.Schema({
    username: String,
    password: String,
    nickname: String
}, {
    collection: 'users' //这里是设置mongodb数据库里的表的名字
})

module.exports = db.model('a', schema);
// 基于 schema 创建 model, 并暴露出去。  a是名字 上面有collection了就随便设置了