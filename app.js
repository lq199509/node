const express = require('express');
const app = express();

const userRouter = require('./routes/userRouter')

//post数据，需要设置中间件函数 json与urlencode
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

//当 http://localhost:9393/api 时 进入到userRouter执行代码
app.use('/api', userRouter);

app.listen(9393);