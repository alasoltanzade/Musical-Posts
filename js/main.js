'use strict';

// DOM Elements
const inputForm = document.getElementById("inputForm");
const container = document.querySelector(".posts");

const inputInstrument = inputForm["instrument"];
const inputDescription = inputForm["description"];
const inputName = inputForm["name"];
const inputyear = inputForm["year"];


const posts = JSON.parse(localStorage.getItem("posts")) || [];

const addPosts = (instrument, description, name, year) => {
  posts.push({
    instrument,
    description,
    name,
    year,
  });

  localStorage.setItem("posts", JSON.stringify(posts));

  return { instrument, description, name, year };
};

const createidElement = ({ instrument, description, name, year }) => {
  // Create elements
  const instrumentDiv = document.createElement("div");
  const instrumentName = document.createElement("h2");
  const descriptionid = document.createElement("p");
  const nameAuthor = document.createElement("p");
  const yearPlay = document.createElement("p");



  // Fill the content
  instrumentName.innerText = instrument;
  descriptionid.innerText = description;
  nameAuthor.innerText = name;
  yearPlay.innerText = + year;


  // Add to the DOM
  instrumentDiv.append(instrumentName, descriptionid, nameAuthor, yearPlay);
  container.appendChild(instrumentDiv);

  container.style.display = posts.length === 0 ? "none" : "flex";
};


//display
container.style.display = posts.length === 0 ? "none" : "flex";

posts.forEach(createidElement);

inputForm.onsubmit = e => {
  e.preventDefault();

  const newPosts = addPosts(
    inputInstrument.value,
    inputDescription.value,
    inputName.value,
    inputyear.value
  );

  createidElement(newPosts);

  inputInstrument.value = "";
  inputDescription.value = "";
  inputName.value = "";
  inputyear.value = "";

  window.location.href = "/html/testimonials.html";



  const storedPosts = localStorage.getItem("posts");

  // Parse the JSON data
  let postsArray = [];
  if (storedPosts) {
    try {
      postsArray = JSON.parse(storedPosts);
    } catch (error) {
      console.error("Error parsing JSON from localStorage:", error);
    }
  }

  // Use the data in an object 
  const postsObject = {
    posts: postsArray
  };

  console.log(postsObject);
  const container = document.getElementById("postsshowww");
  container.innerHTML = "";
};

