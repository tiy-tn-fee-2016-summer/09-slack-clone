// This function should return a new HTML element object
// Use the example "message-item" to format the element
// To create the inner spans you may either create and append individual spans
// Or for this exercise, you may use innerHTML
//
// This function should not modify elements outside of
// the new element that you create and return
//
// The "data" argument will be an object that looks like
// { username: 'John', message: 'Getting ready for the Java class!' },


export default function createMessageItem(espn){

const data = document.createElement("li");
// data.classList.add("message-item");
data.innerHTML = `<span class="message-item__username">${espn.username}</span> <span class="message-item__message">${espn.message}</span>`;

return data;
}
