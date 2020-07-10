"use strict"
const jwt = require('express-jwt');

module.exports =  jwt({ secret: 'shhhhhhared-secret'}); 