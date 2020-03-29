// File: url_object.js
// Note: Processing URLs
// Date: 3/28/2020
//..............................................................................
console.log("Mounting url_object.js...");
/*
 * URL - http://user:pass@host.com:80/resource/path/?query=string#hash
 * 
 *  1. href -     This is the full URL string that was originally parsed. <a href='#'>Link/Anchor</a>.
 *  2. protocol - The request protocal. HTTP/HTTPS.
 *  3. post -     The full Host portion (hostname.domain) of the URL including port.
 *  4. auth -     The authentication logrmation portion of a URL.
 *  5. hostname - The hostname portion of the Host.
 *  6. port -     The port number portion of the Host.
 *  7. pathname - The Path portion of the URL, including the initial slash ('route')
 *  8. search -   The Query String portion of the URL, including the leading question mark
 *  9. path -     The full Path, including pathname and search.
 * 10; query -    This either parameter potion of the Query String or parsed object containing
 *                 the query string parameter=values if the parseQueryString is set to true.
 * 11. hash -     The hash portion of the URL, including pound sign (#).
 * 
 */
//
// Understanding the URL Object
///////////////////////////////
var url = require('url');
var qs = require('querystring');

var urlStr = 'http://user:pass@host.com:80/resource/path?query=string#hash';
var urlObj = url.parse(urlStr, true, false);
console.info('Re: Location/History Object');
console.log(urlObj);
console.info('\n');
console.log(urlStr);
console.log(url.format(urlObj));
//
// Resolving the URL Components
///////////////////////////////
var urlNew = '/another/path?querynew';
console.log(url.resolve(urlStr, urlNew));
//
// Processing Query Stings: Link, Anchor, Image and Form Parameters
// querystring.parse(str, [sep], [options]); -> Object prototype
// querystring.stringify(obj, sep, option); -> String prototype
///////////////////////////////////////////////////////////////////
var params = qs.parse('name=Brad&color=red&color=blue');
var sep = ['*', '#'];
var eq = ['==', '==='];

console.log(params);
console.log('params: ' + qs.stringify(params, sep, eq));

// eof