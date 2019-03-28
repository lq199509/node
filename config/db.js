const mongoose = require('mongoose'); //引入mongoose 
//mongoose是nodejs环境下对 mongodb 进行便捷操作的对象模型工具

//用connect方法进行与mongodb进行连接 第一个参数为mongodb的本地路径 最后一层为数据库的名字；
//第二个参数为 { useNewUrlParser: true },后面是promise（承诺对象）方式
mongoose.connect('mongodb://localhost:27017/garde1813', { useNewUrlParser: true })
    .then(() => {
        console.log('连接数据库成功')
    })
    .catch(() => {
        console.log('error')
    });

module.exports = mongoose; //最后把mongoose暴露出去 给暴露出去的文件用来使用schema 方法
// ../models/userModel.js