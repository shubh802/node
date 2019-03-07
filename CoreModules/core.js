/**
 * Created by dmadmin on 8/30/2015.
 */

var fs=require('fs'); //file system module

fs.writeFileSync("corn.txt","Corn is gud for health");
console.log(fs.readFileSync("corn.txt").toString());

