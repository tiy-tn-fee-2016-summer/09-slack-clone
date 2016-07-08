// This function should take in two arguments:
// parent: element which is an existing element
// data: an array of game objects of data
//
// This function should:
// Clear out the contents of the parent element
// Then add elements to the parent for each item in the data array
//
// You already have a function that creates these game item elements
import createGameItem from 'twitch/create-game-element';
export default function showGamesInList (parent, data) {
var node = document.getElementsByClassName('game-item');
parent.innerHTML = '';
for (var i = 0; i < data.length; i++) {
  parent.appendChild(createGameItem(data[i]));
}
// console.log(parent);

return parent;
}
