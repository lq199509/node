const express = require('express');
const router = express.Router();

const UserModel = require('../models/userModel'); //引入数据库方面
const bcrypt = require('bcrypt'); //引入加密

// //注册 http://localhost:9393/api/user/register
// route.post('/user/register');

// //登录 http://localhost:9393/api/user/login
// route.post('/user/login');


// http://localhost:9393/api/user  
//用户相关的都是这个地址 根据请求方式不同决定是登录或者注册或是其他
router.route('/user')
    .post((req, res) => {
        //注册
        bcrypt.hash(req.body.password, 10)
            .then(saltpassword => {
                let user = new UserModel({
                    username: req.body.username,
                    password: saltpassword
                })

                user.save()
                    .then(() => {
                        res.send({
                            codo: 0,
                            msg: '注册成功'
                        })
                    })
                    .catch(error => {
                        res.send({
                            codo: -1,
                            msg: '注册失败'
                        })
                    })
            })
    })
    .get((req, res) => {
        //登录
    })


module.exports = router;