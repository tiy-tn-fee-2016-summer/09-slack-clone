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

export default function createGameItem(game){

  `<div class="tw-app__center-gamebox">

  </div>`;

  const peter = document.createElement("section");
  peter.classList.add("game-item");
  peter.classList.add("tw-app__center-gamebox");

  peter.innerHTML = `
  <img class="tw-app__center-image game-item__pic" src="${game.box.large}" alt="${game.name}" />
  <h3 class="tw-app__center-gametitle game-item__name">${game.name}</h3>
  <h4 class="tw-app__center-gameviews game-item__popularity">${game.popularity}</h4>`;
  //
  // const name = document.createElement("h3");
  // name.classList.add("game-item__name");
  // peter.appendChild(name);
  // name.innerText=game.name;
  //
  // const gameName = document.createElement("h4");
  // gameName.classList.add("game-item__popularity");
  // peter.appendChild(gameName);
  // gameName.innerText=game.popularity;
  //
  // const photo = document.createElement("img");
  // photo.classList.add("game-item__pic");
  // photo.src = game.box.large;
  // photo.alt = game.name;
  // peter.appendChild(photo);

  return peter;
}
