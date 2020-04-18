// File: url_object.js
// Note: Processing URLs
// Date: 04/18/2020
//..............................................................................
console.log("Mounting url_object.js...\n");
/*
 * A uniform resource locator (URL) acts as an address label that an HTTP
 * server uses to handle requests from the client. It provides all the 
 * information needed to get a request to the correct server on a specific
 * port and to access the proper data.
 * 
 * A URL can be broken down into several different components, each providing
 * a basic piece of information for the webserver on how to route and handle
 * the HTTP requests from the client.
 * 
 * Following lists the basice structure of a URL and the components that may be
 * included. Not all of these components will be included in every HTTP request.
 * For example, most requests do not include the auth component, and many
 * do not include a query (URL) string or hash location.
 *
 * Understanding the URL Object
 * 
 * HTTP request from a client include the URL string with infomation:
 * 
 * URL string - http://user:pass@host.com:80/resource/path/?query=string#hash
 *  
 * To be able to use the URL information more effectively, Node.js provides 
 * the 'url' module, which provides functionality to convert a URL string into
 * URL object
 * 
 * To create a URL object from URL string, pass the URL string as the first
 * parameter to the following method:
 * 
 * url.parse(urlStr, [parseQueryString], [slashesDenoteHost])
 * 
 * The url.parse() method takes the URL string as the first parameter. 
 * 
 * The parseQueryString is a Boolean that when true also parses the query string
 * portion of the URL into object literal. The default is false.
 * 
 * The slashesDenoteHost is also a Boolean that when true parses a URL with the 
 * format //host/path to {host: 'host', pathname: '/path'} instead of
 * {pathname: '/host/path'}. The default is false.
 * 
 * You can also convert URL object to a string form by using url.format()
 * method:
 * 
 * url.format(urlObj)
 * 
 * Following is the list of URL objects created by url.parse():
 * 
 *  1. href -     This is the full URL string that was originally parsed. <a href='#'>Link/Anchor</a>.
 *  2. protocol - The request protocal. HTTP/HTTPS.
 *  3. post -     The full Host portion (hostname.domain) of the URL including port.
 *  4. auth -     The authentication information portion of a URL.
 *  5. hostname - The hostname portion of the Host.
 *  6. port -     The port number portion of the Host.
 *  7. pathname - The Path portion of the URL, including the initial slash ('route')
 *  8. search -   The Query String portion of the URL, including the leading question mark
 *  9. path -     The full Path, including pathname and search.
 * 10; query -    This either parameter potion of the Query String or parsed object containing
 *                 the query string parameter=values if the parseQueryString is set to true.
 * 11. hash -     The hash portion of the URL, including pound sign (#). 
 * 
 * The implementation of parsing the URLstring into and an object then 
 * converting back into string.
 */
var url = require('url');
var qs = require('querystring');

var urlStr = 'http://user:pass@host.com:80/resource/path?query=string#hash';
console.log('From: URL String');
console.log(urlStr);
var urlObj = url.parse(urlStr, true, false);
console.info('To: URL Object');
console.log(urlObj);
console.info('To: URL String');
console.log(url.format(urlObj));

// eof

// output 
// Mounting url_object.js...
// 
// From: URL String
// http://user:pass@host.com:80/resource/path?query=string#hash
// To: URL Object
// Url {
  // protocol: 'http:',
  // slashes: true,
  // auth: 'user:pass',
  // host: 'host.com:80',
  // port: '80',
  // hostname: 'host.com',
  // hash: '#hash',
  // search: '?query=string',
  // query: [Object: null prototype] { query: 'string' },
  // pathname: '/resource/path',
  // path: '/resource/path?query=string',
  // href: 'http://user:pass@host.com:80/resource/path?query=string#hash' 
// }
// To: URL String
// http://user:pass@host.com:80/resource/path?query=string#hash

