'use strict';

// if a counter exists in localStorage, parse it as an integer; otherwise, set it to 0
let counter = localStorage.getItem("counter") ? parseInt(localStorage.getItem("counter")) : 0;

const inputForm = document.getElementById("inputForm");
const container = document.querySelector(".posts");

// input fields  
const inputInstrument = inputForm["instrument"];
const inputDescription = inputForm["description"];
const inputName = inputForm["name"];
const inputyear = inputForm["year"];

// existing posts from localStorage or make an empty array if none exist
const posts = JSON.parse(localStorage.getItem("posts")) || [];

// Function to add new posts
const addPosts = (instrument, description, name, year) => {
  const newPost = {
    instrument,
    description,
    name,
    year,
    date: new Date().toISOString(),
    id: counter,
  };
  posts.push(newPost);

  // Update localStorage with the new posts 
  localStorage.setItem("posts", JSON.stringify(posts));

  // increase the counter for the next post and save it back to localStorage
  counter++;
  localStorage.setItem("counter", counter);
  return newPost;
};


// Function to create and display a post element
const createIdElement = ({ instrument, description, name, year, id, date }) => {

  // Create a div to hold the post.
  const instrumentDiv = document.createElement("div");
  instrumentDiv.id = `post-${id}`;  // Set a unique id for the div element.

  // Create elements
  const instrumentName = document.createElement("h2");
  const descriptionid = document.createElement("p");
  const nameAuthor = document.createElement("p");
  const yearPlay = document.createElement("p");
  const dateElement = document.createElement("p");
  const idElement = document.createElement("p");

  instrumentName.innerText = instrument; 
  descriptionid.innerText = description; //innerText : متن داخل یک عنصر HTML را بخوانیم یا تغییر بدیم
  nameAuthor.innerText = name;
  yearPlay.innerText = year;
  idElement.innerText = `ID: ${id}`;

  // Set the inner text for the date element
  dateElement.innerText = `Date: ${new Date(date).toLocaleString()}`;
  instrumentDiv.append(instrumentName, descriptionid, nameAuthor, yearPlay, dateElement, idElement);
};


// uploading the post
posts.forEach(createIdElement);


//when a form send this func stop the reload
inputForm.onsubmit = event => {

  // Call addPosts to create a new post
  const x = addPosts(
    inputInstrument.value,
    inputDescription.value,
    inputName.value,
    inputyear.value,
  );

  createIdElement(x);

  // Clear input fields after submit
  inputInstrument.value = "";
  inputDescription.value = "";
  inputName.value = "";
  inputyear.value = "";

  window.location.href = "/html/testimonials.html";


  //handel the error 
  const storedPosts = localStorage.getItem("posts");
  let postsArray = [];
  if (storedPosts) {
    try {     
      postsArray = JSON.parse(storedPosts);

    } catch (error) {  
      console.error("Error parsing JSON from localStorage:", error); 
    }
  }
};
