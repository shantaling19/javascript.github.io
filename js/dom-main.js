// INNERTEXT

var element;
element = document.getElementById(content).innerText;
console.log(element);

// INNERHTML

var element;
element = document.getElementById(content).innerHTML;
console.log(element);

var element;
element = document.getElementById(header).innerHTML;
console.log(element);

// GET ATTRIBUTE

var element;
element = document.getElementById(header).getAttribute(class);
console.log(element);

var element;
element = document.getElementById(header).getAttribute(id);
console.log(element);

var element;
element = document.getElementById(header).getAttribute(style);
console.log(element);

var element;
element = document.getElementById(header).getAttribute(onClick);
console.log(element);

// GETATTRIBUTENODE

var element;
element = document.getElementById(header).getAttributeNode(onClick);
console.log(element);

var element;
element = document.getElementById(header).getAttributeNode(style);
console.log(element);

var element;
element = document.getElementById(header).getAttributeNode(style).value;
console.log(element);

// ATTRIBUTES

var element;
element = document.getElementById(header).attributes;
console.log(element);

var element;
element = document.getElementById(header).attributes[1];
console.log(element);

var element;
element = document.getElementById(header).attributes[2].value;
console.log(element);

var element;
element = document.getElementById(header).attributes[2].name;
console.log(element);

var element;
element = document.getElementById(header).attributes[1].name;
console.log(element);

// DOM Set Methods:
// INNERTEXT

var element;
document.getElementById(header).innerText = <h2>Wow</h2>;
element = document.getElementById(header).innerHTML;
console.log(element);

var element;
document.getElementById(header).innerHTML= <h2>Wow</h2>;
element = document.getElementById(header).innerHTML;
console.log(element);

// SETATTRIBUTE

// var element;
document.getElementById(header).innerText = <h2>Wow</h2>;
document.getElementById(header).setAttribute(class,xyz);
element = document.getElementById(header).getAttribute(class);
console.log(element);

// var element;
document.getElementById(header).innerText = <h2>Wow</h2>;
document.getElementById(header).setAttribute(style, border : 10px dotted yellow);
element = document.getElementById(header).getAttribute(class);
console.log(element);

// var element;
document.getElementById(header).innerText = <h2>Wow</h2>;
document.getElementById(header).attributes[1].value = xyz;
element = document.getElementById(header).getAttribute(class);
console.log(element);

// REMOVEATTRIBUTE

var element;
document.getElementById(header).innerText = <h2>Wow</h2>;
document.getElementById(header).attributes[1].value = xyz;
document.getElementById(header).removeAttribute(style);
element = document.getElementById(header).getAttribute(class);
console.log(element);

// var element;
document.getElementById(header).innerText = <h2>Wow</h2>;
document.getElementById(header).attributes[1].value = xyz;
document.getElementById(header).removeAttribute(style);
document.getElementById(header).removeAttribute(class);
element = document.getElementById(header).getAttribute(class);
console.log(element);







// QUERY SELECTOR

var element;
document.querySelector(#header).innerHTML = <h2>Wow</h2>;
element = document.querySelector(#header).getAttribute(class);
console.log(element);

var element;
document.querySelector(#header).innerHTML = <h2>Wow</h2>;
element = document.querySelector(list);
console.log(element);

// QUERY SELECTOR ALL

var element;
document.querySelector(#header).innerHTML = <h2>Wow</h2>;
element = document.querySelectorAll(list);
console.log(element);

var element;
document.querySelector(#header).innerHTML = <h2>Wow</h2>;
element = document.querySelectorAll(list)[1];
console.log(element);

var element;
document.querySelector(#header).innerHTML = <h2>Wow</h2>;
element = document.querySelectorAll(list)[1].innerHTML;
console.log(element);

var element;
document.querySelector(#header).innerHTML = <h2>Wow</h2>;
element = document.querySelectorAll(list)[1].innerHTML;
console.log(element);

var element;
document.querySelector(#header).innerHTML = <h2>Wow</h2>;
element = document.querySelectorAll(ul);
console.log(element);

var element;
document.querySelector(#header).innerHTML = <h2>Wow</h2>;
element = document.querySelectorAll(ul)[1].innerHTML;
console.log(element);

var element;
document.querySelector(#header).innerHTML = <h2>Wow</h2>;
element = document.querySelectorAll(ul)[0].innerHTML;
console.log(element);
var element;
document.querySelector(#header).innerHTML = <h2>Wow</h2>;
element = document.querySelectorAll(#header);
console.log(element);

var element;
document.querySelector(#header).innerHTML = <h2>Wow</h2>;
element = document.querySelectorAll(#header ,h1);
console.log(element);

var element;
element = document.querySelectorAll(#header ,h1);
console.log(element);

var element;
element = document.querySelectorAll(#header, h1)[1].innerHTML;
console.log(element);






// STYLE

var element;
element = document.querySelector(#header).style.border;
console.log(element);

var element;
element = document.querySelector(#header).style.color;
console.log(element);

var element;
document.querySelector(#header).style.backgroundColor = tan;
element = document.querySelector(#header).style.color;
console.log(element);

var element;
document.querySelector(#header).style.backgroundColor = tan;
document.querySelector(#header).style.color = blue;
element = document.querySelector(#header).style.color;
console.log(element);

// CLASSNAME

var element;
document.querySelector(#header).classname = abc;
element = document.querySelector(#header).className;
console.log(element);

var element;
document.querySelector(#header).classname = abc, xyz;
element = document.querySelector(#header).className;
console.log(element);

// CLASS LIST

var element;
document.querySelector(#header).classList = abc ,xyz;
element = document.querySelector(#header).classList;
console.log(element);

var element;
document.querySelector(#header).classList.add(xyz,efg);
element = document.querySelector(#header).classList;
console.log(element);

var element;
document.querySelector(#header).classList.remove(xyz);
element = document.querySelector(#header).classList;
console.log(element);





var element;
document.getElementById(header).addEventListener(click,abc);

function abc(){
  document.getElementById(header).classList.add(xyz);
}


var element;
document.getElementById(header).addEventListener(click,abc);

function abc(){
  document.getElementById(header).classList.add(xyz,abc);
  var a =    document.getElementById(header).classList;
  console.log(a);
}
