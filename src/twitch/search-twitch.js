// This function should take three arugments
// parent: element which is an existing element
// searchTerm: a string of what to search for on Twitch
// getData: a function that will search the Twitch database for games given a search term
//    as its first argument and will return a Promise object
//    (more on Promises in our next episode!)
//
// This function should search twitch using getData and then fill in the
// parentElement with the games that it finds!

import getTwitchData from './get-data';
import addGamesToList from './add-games-to-list';

export default function searchTwitch(parentElement, searchTerm, getData = getTwitchData) {
  // This function will run after `getData` has received data
  // Games will be a list of games from the twitch results

  const afterData = function(games) {
    console.log(games);
    addGamesToList(parentElement, games);
  };


// // create new list
//   let judson = document.createElement('list');
// // add new list to DOM
//   parentElement.appendChild(judson);
// // add class to new list
//   classList.add('.game-item');

  // Need to return this for the tests to work...
  // More on that next week!
  return getData(searchTerm).then(afterData);
}
