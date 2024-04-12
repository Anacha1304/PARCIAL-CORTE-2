const express = require('express')
const app = express()




app.get('/', (req, res) => {
    res.send("Funciono");
})

const coinRouter = require('./routes/coin');

app.use('/coin', coinRouter)

app.use(express.json());

const userRouter = require('./routes/users')

app.use('/users', userRouter);

const userList = require('./routes/userList')

app.use('/userList', userList)

app.listen(2000, () =>{
    console.log("Running port 2000");
})