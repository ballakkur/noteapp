/* //converting a json to a string using JSON.stringify()
//json file is a string and not an object
let obj = {
    'name':"my name is a Mystery",
    address:"well, I just told u its Mystery"
}
console.log(typeof(obj));
let stringVersion = JSON.stringify(obj);
console.log(stringVersion);
console.log(typeof(stringVersion));
//convert to json version
let jsonVersion = JSON.parse(stringVersion);
console.log(jsonVersion);
console.log(typeof(jsonVersion));
 */
const fs = require('fs');
let obj = {
    title:"this is some title",
    body:"well, this is the body of the object. U guessed it"
}
let stringObj = JSON.stringify(obj);
fs.writeFileSync("data.json",stringObj);
var readData = fs.readFileSync('data.json',{encoding:'utf8'});
console.log(readData);