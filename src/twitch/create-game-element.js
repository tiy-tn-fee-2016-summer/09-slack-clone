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
  const gameContainer = document.createElement(`div`);
  gameContainer.innerHTML =

    `<div class ="game-item">${game.popularity}</div>
  <div class="game-item">${game._id}</div>
  <div class="game-item">${game.giantbomb_id}</div>;`
  return gameContainer;
}

//
//
//
//
// data.name
// data.popularity, etc...
