var result = document.documentElement.outerHTML.match(/window.CHECKS(.*)"};/gs)[0].replace("window.CHECKS = ", "").slice(0, -1);
var obj = JSON.parse(result);
var keywords = Object.keys(obj);  // if it contains !3, so 3 can't be there, so do something like, 2+1
var answer = document.getElementById("desired").outerHTML.replace(/<[^>]*>?/gm, '').replace("\n", "");

for (var i = 0; i < keywords.length; i++) {
    if (keywords[i] != "print"){
    	console.log(keywords[i]);
    }
}

console.log("print("+answer+")");
