// var parentElement = document.getElementById("test");
// var target = document.getElementById("abc");

// var find = parentElement.contains(target);

// console.log(find);

var target = document.getElementById("test");

// var find = target.hasAttribute("class");
var find = target.hasChildNodes("class");

console.log(find);