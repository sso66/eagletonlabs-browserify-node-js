// File: websockets/jwt-server.js
// Date: 8/22/2020
// Note: JSON Web Token (JWT) - implementing in JavaScript with Node.js

console.log("Mounting jwt-prototype.js\n");

'use strict';

const fs = require('fs');
const { createPrivateKey } = require('crypto');
const jwt = require('jsonwebtoken');

// use 'utf-8' to get string instead of byte array (512 bit key)
// var privateKEY = fs.readFileSync('./private.key', 'utf-8');
// var publicKEY = fs.readFileSync('./public.key', 'utf-8');

// ___  JWT Signing ___
// provision for client
// var payload = {
//     data1: "Data 1",
//     data1: "Data 2",
//     data1: "Data 3",
//     data1: "Data 4",
// }

// provision for client
// var i = "Mysoft corp";
// var s = "some@user";
// var a = "http://mysoftcorp.in";

module.exports = {
    /*
     * $Options = {
     *     issuer: "Authorization/Resource/This Server",
     *     subject: "iam@user.me",
     *     audience: "Client Identity"  // This should be provided by client
     * }
     */

     // Token signing options
    sign: (payload, $Options) => {
        var signOptions = { 
            issuer: $Options.issuer,
            subject: $Options.subject,
            audience: $Options.audience,
            expiresIn: "30d",   // 30 days validity
            algorithm: "RS256"
        };
        // return jwt.sign(payload, privateKEY, signOptions);
    },

    // Token verifying options
    verify: (token, $Options) => {
        /*
        * $Options = {
        *     issuer: "Authorization/Resource/This Server",
        *     subject: "iam@user.me",
        *     audience: "Client Identity"  // This should be provided by client
        * }
        */
        var verifyOptions = {
                issuer: i,
                subject: s,
                audience: a,
                expiresIn: "12h",
                algorithm: ["RSA256"]
        };

        try {
            // return jwt.verify(token, publicKEY, verifyOptions);
        } catch(error) {
            return false;
        }
    },

    // Token delivering option
    decode: (token) => {
        return jwt.decode(token, { complete: true });
        // returns null if token is invalid
    }
}
// ___ JWT Deliver ___
// provision for client
// var legit = jwt.verify(token, publicKEY, verifyOptions);
// var legit = '{ "key": "value" }';
// console.log("\nJWT veirfication result: " + JSON.stringify(legit));

// eof
