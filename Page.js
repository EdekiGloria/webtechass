/*
for(var i=1; i<=200; i++){
    document.write("<p>" + i + "</p>");
}
*/
/*
var table=parseInt(prompt("enter table"));
for(var i=1; i<=12; i++){
document.write("<p>" + table + "*" + i + "=" + table*i +"</p>");
}
*/

function greetings(){
    var text=document.getElementById("text");
    text.innerHTML="i am now here";
}
let date = new Date();
document.write(date.toISOString().slice(0,5));

var name = "Ibrahim";
    document.write(name.slice(0,4));

let item = "special 2019 intervention"
document.write(item.slice(8,12));
//greetings();


    
