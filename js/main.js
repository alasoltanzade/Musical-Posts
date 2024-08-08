'use strict';

// DOM Elements
let counter = localStorage.getItem("counter") ? parseInt(localStorage.getItem("counter")) : 0;  
const inputForm = document.getElementById("inputForm");
const container = document.querySelector(".posts");

const inputInstrument = inputForm["instrument"];
const inputDescription = inputForm["description"];
const inputName = inputForm["name"];
const inputyear = inputForm["year"];

const posts = JSON.parse(localStorage.getItem("posts")) || [];

const addPosts = (instrument, description, name, year) => {
  const newPost = {
    instrument,
    description,
    name,
    year,
    id: counter,
  };

  posts.push(newPost);
  localStorage.setItem("posts", JSON.stringify(posts));

  counter++;
  localStorage.setItem("counter", counter);
  return newPost;
};

const createidElement = ({ instrument, description, name, year, id }) => {

  const instrumentDiv = document.createElement("div");
  instrumentDiv.id = `post-${id}`;  
  const instrumentName = document.createElement("h2");
  const descriptionid = document.createElement("p");
  const nameAuthor = document.createElement("p");
  const yearPlay = document.createElement("p");

   
  instrumentName.innerText = instrument;
  descriptionid.innerText = description;
  nameAuthor.innerText = name;
  yearPlay.innerText = year;

   
  instrumentDiv.append(instrumentName, descriptionid, nameAuthor, yearPlay);
  container.appendChild(instrumentDiv);

   
  const idElement = document.createElement("p");
  idElement.innerText = `ID: ${id}`;  
  instrumentDiv.appendChild(idElement);

  container.style.display = posts.length === 0 ? "none" : "flex";
};

 
container.style.display = posts.length === 0 ? "none" : "flex";

 
posts.forEach(createidElement);

 
inputForm.onsubmit = e => {
  e.preventDefault();

  const newPosts = addPosts(
    inputInstrument.value,
    inputDescription.value,
    inputName.value,
    inputyear.value,
  );

  createidElement(newPosts);  

 
  inputInstrument.value = "";
  inputDescription.value = "";
  inputName.value = "";
  inputyear.value = "";

  
  window.location.href = "/html/testimonials.html";

 
  const storedPosts = localStorage.getItem("posts");
  let postsArray = [];
  if (storedPosts) {
    try {
      postsArray = JSON.parse(storedPosts);
    } catch (error) {
      console.error("Error parsing JSON from localStorage:", error);
    }
  }

 
  const postsObject = {
    posts: postsArray
  };

  console.log(postsObject);
  const containerToShowPosts = document.getElementById("postsshowww");
  containerToShowPosts.innerHTML = "";  
};