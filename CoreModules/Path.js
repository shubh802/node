/**
 * Created by dmadmin on 8/30/2015.
 */
var path=require('path');

var websiteHome="Desktop//Shubham//important/index.html";
var websiteAbout="Desktop/Shubham/important/about.html";

console.log(path.normalize(websiteHome)); // it normalizes the path
console.log(path.dirname(websiteAbout));
console.log(path.basename(websiteAbout));
console.log(path.extname(websiteAbout));