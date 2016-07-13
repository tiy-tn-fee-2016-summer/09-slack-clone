// This function should take in one arguments:
// parent: element which is an existing element
//
// This function should return a number that is the sum
// of the contents of ALL of the child elements within the parent argument

export default function sumFromList(ul) {

var collector = 0;

var james = ul.querySelectorAll('li');

for (var i = 0; i < james.length; i++) {
collector = parseInt(james[i].innerText) + collector;
}

return collector;
}
