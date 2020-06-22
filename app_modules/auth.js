"use strict"
const jwt = require('express-jwt');

module.exports = async (req, res, next) => {
    try{
        
        return jwt({ secret: 'shhhhhhared-secret'});

    }catch(err){
        console.log(err);
    }
}