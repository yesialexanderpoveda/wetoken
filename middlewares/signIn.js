const express = require('express')
const jwt = require('jsonwebtoken');
require('dotenv').config();
exports.validationToken = ((req, res, next)=>{

const accessToken = req.headers['authorization'] || req.query.accessToken;

if(!accessToken) res.send('Access denied');

jwt.verify(accessToken, process.env.SECRET, (err, user)=>{
if(err){
    res.send('Access denied, token expired or incorrect');

}
else{
    next()
}
})

})