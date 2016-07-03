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



export default function createGame(game) {
  const gameContainer = document.createElement('div');
  gameContainer.classList.add('game-item');


  const name = document.createElement('h3');
  name.classList.add('game-item__name');
  gameContainer.appendChild(name);
  name.innerText = game.name;


  const gameName = document.createElement('h4');
  gameName.classList.add('game-item__popularity');
  gameContainer.appendChild(gameName);
  gameName.innerText = game.popularity;


  const pic = document.createElement('img');
  pic.classList.add('game-item__pic');
  pic.src = game.box.large;
  pic.alt = game.name;
  gameContainer.appendChild(pic);

  return gameContainer;
}
