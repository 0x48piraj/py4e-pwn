var result = document.documentElement.outerHTML.match(/window.CHECKS(.*)"};/gs)[0].replace("window.CHECKS = ", "").slice(0, -1);
var obj = JSON.parse(result);
var keywords = Object.keys(obj);  // if it contains !3, so 3 can't be there, so do something like, 2+1
var answer = document.getElementById("desired").outerHTML.replace(/<[^>]*>?/gm, '').replace("\n", "");

var bad_const = [];
var kgood = [];

for (var i = 0; i < keywords.length; i++) {
    if (keywords[i].includes("!")){
    	bad_const.push(keywords[i]);
    } else {
    	kgood.push(keywords[i]);
    }
}
console.log("Include these :");
for (var i = 0; i < kgood.length; i++) {
	console.log(kgood[i]);
}

console.log("Answer :");
console.log("print("+answer+")");


console.log("Avoid these :");
for (var i = 0; i < bad_const.length; i++) {
	console.log(bad_const[i].replace("!", "").replace("=", "").replace(" ", ""));
}
