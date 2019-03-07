/*

// One method of importing nvr include .js ext in core module we dnt require './'
var movies=require('./movie');
// movies.avatar();
//Second method of importing
movies.printAvatar();
movies.printMI();
console.log(movies.favMov);
*/


//for shared modules
require("./shubh");
require("./mohit"); // o/p is same as they are refering to the same variable copy ofd it is nt made

