// File: query_strings.js
// Note: Processing Query Stings: Link, Anchor, Image and Form Parameters
// Date: 04/18/2020
//..............................................................................
console.log("Mounting query_strings.js...\n");
/*
 * HTTP request often include query strings in the URL or parameter data in the
 * body form submissions.
 * 
 * The query string can be obtained from the URL object. The parameter data 
 * sent by a form request can be read out or the body of the client request.
 * 
 * The query (GET) and form (POST) parameters are just basic key/value pairs.
 * 
 * To actually consume these values in your Node.js application webserver, you
 * need to convert a string to a JavaScript object by using the parse() method
 * from the 'querystring' module.
 * 
 * querystring.parse(str, [sep], [eq], [options])
 * 
 * The str parameter is the query or parameter stirng.
 * 
 * The sep paramenter allows you to specify the separater character used; the
 * default separater character is &.
 * 
 * The eq parameter allows you to specify the assignment character to use when
 * parsing; the defaultis =.
 * 
 * The options parameter is an object (meta) with the property maxKeys that 
 * allows you to limit the number of keys the resulting object can contain;
 * the default is 1000, and if you specify 0 there is no limit.
 * 
 * You can also go back the other direction and convert an object to query
 * string by using the stringify() function:
 * 
 * querystring.stringify(obj, [sep], [eq])
 * 
 */
var querystring = require('querystring');

var params = querystring.parse('name=Stephen&color=red&color=blue');
var sep = ['*', '#'];
var eq = ['==', '==='];
console.log("To query object");
console.log(params);
console.log("To query string");
console.log('params: ' + querystring.stringify(params, sep, eq));

// eof

// output
// Mounting query_strings.js...
// 

// To query object
// [Object: null prototype] { name: 'Stephen', color: [ 'red', 'blue' ] }
// To query string
// params: name==,===Stephen*,#color==,===red*,#color==,===blue
