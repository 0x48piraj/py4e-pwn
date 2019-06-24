var result = 
document.documentElement.outerHTML.match(/window.CHECKS(.*)"};/gs)[0].replace("window.CHECKS 
= ", "").slice(0, -1);
var obj = JSON.parse(result);
var keywords = Object.keys(obj);
var answer = 
document.getElementById("desired").outerHTML.replace(/<[^>]*>?/gm, 
'').replace("\n", "");
var script = "";
var bad_const = [];

var ifelse = false;
var whiletryex = false;
var conditionals =["if 1==1:\n    rand=0\nelif 0==0:\n    
rand=1\nelse:\n    rand=-1\n", 
           "c=0\nwhile c<3:\n    try:\n        c+=1\n    except:\n        
print('*')\n",
           ] ;


// for now, cracks some challenges, more keywords/conditionals to be added

for (var i = 0; i < keywords.length; i++) {
    if (keywords[i].includes("!")) {
    	bad_const.push(keywords[i]);
    }
    else if (keywords[i] == "if" || keywords[i] == "else" || keywords[i] 
== "elif") {
    	ifelse = true;
    } else if (keywords[i] == "try" || keywords[i] == "except" || 
keywords[i] == "while") {
    	whiletryex = true;
    }
    else if (keywords[i] == "input") {
    	script += "garbage = input()\n";
    } else if (keywords[i] == "float" || keywords[i] == "str" || 
keywords[i] == "double" || keywords[i] == "int") {
    	script += "rand = "+ keywords[i] +"()\n";
    }
}
if (ifelse){
	script += conditionals[0];
}
if (whiletryex){
	script += conditionals[1];
}

function mutate(bchar){
	var third = bchar + 999;
	return third;
}

// if it contains !3, so 3 can't be there, so do something like, 2+1
for (var i = 0; i < bad_const.length; i++) {
	var bchar = bad_const[i].replace("!", "").replace("=", 
"").replace(" ", "");
	if (answer.includes(bchar)){
		if (!isNaN(bchar)) {
			var gchar = mutate(+bchar);
			answer.split(bchar).join(gchar.toString());
		}
		// just encode-decode but what if /n mismatches ?
	}
}

/*
if (answer[answer.length -1].includes('"')){
	answer.slice(0, -1)
}
*/

console.log(script+"\nprint("+"'"+answer+"'"+")");

