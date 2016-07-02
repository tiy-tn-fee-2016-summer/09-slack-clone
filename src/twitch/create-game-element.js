// This function should return a new HTML element object
// To represent a game
//
// This function should not modify elements outside of
// the new element that you create and return
//
// The "game" argument will be an object that looks like
// {
//   name: 'StarCraft II',
//   popularity: 2619,
//   _id: 490422,
//   giantbomb_id: 0,
//   box: {
//     large: 'https://static-cdn.jtvnw.net/ttv-boxart/StarCraft%20II-272x380.jpg',
//     medium: 'https://static-cdn.jtvnw.net/ttv-boxart/StarCraft%20II-136x190.jpg',
//     small: 'https://static-cdn.jtvnw.net/ttv-boxart/StarCraft%20II-52x72.jpg',
//     template: 'https://static-cdn.jtvnw.net/ttv-boxart/StarCraft%20II-{width}x{height}.jpg',
//   },
//   logo: {
//     large: 'https://static-cdn.jtvnw.net/ttv-logoart/StarCraft%20II-240x144.jpg',
//     medium: 'https://static-cdn.jtvnw.net/ttv-logoart/StarCraft%20II-120x72.jpg',
//     small: 'https://static-cdn.jtvnw.net/ttv-logoart/StarCraft%20II-60x36.jpg',
//     template: 'https://static-cdn.jtvnw.net/ttv-logoart/StarCraft%20II-{width}x{height}.jpg',
//   },
//   _links: {},
// }

export default function gameItem (game) {
//Creates Parent
const elm = document.createElement('div');
// adds class to parent
elm.classList.add('game-item');

// Creates h3
const name = document.createElement('h3');
// adds class to h3
name.classList.add('game-item__name');
// adds h3 to Parent
elm.appendChild(name);
// adds text to h3
name.innerText=game.name;


const pop = document.createElement('h4');
pop.classList.add('game-item__popularity');
elm.appendChild(pop);
pop.innerText = game.popularity;


const cover= document.createElement('img');
cover.classList.add('game-item__pic');
cover.alt = game.name;
cover.src=game.box.large;
elm.appendChild(cover);





console.log(elm);
return elm;

}
