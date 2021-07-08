const express = require('express');
const app = express();
const routerUser = require('./routes/user')

//para obtener los parser y para utilizarlos con webToken
app.use(express.urlencoded({extended: false}))
app.use(express.json())



app.use(routerUser);
app.listen(3000, ()=>{

    console.log('server run');
})
