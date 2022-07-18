// var newElement = document.createElement("li");
// var newText = document.createTextNode("WOW new Text");

// newElement.appendChild(newText);

// var target = document.getElementById("list");
// var oldElement = target.children[0];

// console.log(oldElement);
// target.replaceChild(newElement,oldElement);
// target.removeChild(oldElement);
var target = document.getElementById("list1").children[0];
var copyElement = target.cloneNode(true);

console.log(copyElement);

// document.getElementById("list2").appendChild(copyElement);
document.getElementById("test").appendChild(copyElement);