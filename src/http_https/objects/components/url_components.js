// File: url_components.js
// Note: Resolving the URL Components
// Date: 04/18/2020
//..............................................................................
console.log("Mounting url_components.js...\n");
/*
 * A useful feature of the 'url' module is the ability to resolve URL components
 * in the same manner as a browser would.
 * 
 * This allows you to manipulate URL strings on the server side to make
 * adjustments in a URL. 
 * 
 * For example, you might want to change the URL location before processing a 
 * request because a resouce has moved or changed paramenters.
 * 
 * To resolve a URL to a new location:
 * 
 * url.resolve(from, to)
 * 
 * The from paramenter specifies the original base URL string.
 * 
 * The to paramenter specifies the new location to which you want to the URL 
 * to resolve.
 * 
 */
var url = require('url');

var originalUrl = 'http://user:pass@host.com:80/resources/path?query=string#hash';
var newResource = '/another/path?querynew'; // pathname property of url object
console.log(url.resolve(originalUrl, newResource));

// eof

// output
// http://user:pass@host.com:80/another/path?querynew
