
// var newElement = document.createElement("h2");

// var newText = document.createTextNode("This is just text");

// var newComment = document.createComment("This is just comment")

// document.getElementById("test").appendChild(newElement)
// document.getElementById("test").appendChild(newComment)

// newElement.appendChild(newText);

var target = document.getElementById("test");

var newElement = "<h2>This is Heading</h2>";

target.insertAdjacentHTML("afterbegin", newElement);
// target.insertBefore(newElement,target.childNodes[0])
// console.log(newElement);
// console.log(newText);
// console.log(newComment);