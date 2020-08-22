// File: websockets/jwt-prototype.js
// Date: 8/22/2020
// Note: JSON Web Token (JWT) - implementing in JavaScript with Node.js

console.log("Mounting jwt-prototype.js\n");

'use strict';

const fs = require('fs');
const jwt = require('jsonwebtoken');

var privateKEY = fs.readFileSync('./private.key', 'utf-8');
var publicKEY = fs.readFileSync('./public.key', 'utf-8');

// ___  JWT Signing ___
var payload = {
    data1: "Data 1",
    data1: "Data 2",
    data1: "Data 3",
    data1: "Data 4",
}

var i = "Mysoft corp";
var s = "some@user";
var a = "http://mysoftcorp.in";

var signOptions = {
    issuer: i,
    subject: s,
    audience: a,
    expiresIn: "12h",
    algorithm: "RS256" // RSASSA["RSA256", "RSA384", "RSA256"]
};

// var token = jwt.sign(payload, privateKEY, signOptions);
console.log("Token: " + token);

// ___ JWT Verify ___
var verifyOptions = {
    issuer: i,
    subject: s,
    audience: a,
    expiresIn: "12h",
    algorithm: ["RSA256"]
};


// ___ JWT Deliver ___
// var legit = jwt.verify(token, publicKEY, verifyOptions);
var legit = '{ "key": "value" }';
console.log("\nJWT veirfication result: " + JSON.stringify(legit));

// eof
