'use strict';

// if a counter exists in localStorage, parse it as an integer; otherwise, set it to 0
let counter = localStorage.getItem("counter") ? parseInt(localStorage.getItem("counter")) : 0;

const inputForm = document.getElementById("inputForm");
const container = document.querySelector(".posts");

// input fields  فیلدهای ورودی در داخل فرم
const inputInstrument = inputForm["instrument"];
const inputDescription = inputForm["description"];
const inputName = inputForm["name"];
const inputyear = inputForm["year"];



// existing posts from localStorage or make an empty array if none exist
//TODO: use inline condition  👍
// const posts = JSON.parse(localStorage.getItem("posts")) || [];
const posts = localStorage.getItem("posts") ? JSON.parse(localStorage.getItem("posts")) : [];


// Function to add new posts
// TODO: read about arrow function (this inside arrow function how its work ???) 👍
//the arrow func have some different from regular functions : this - arguments - Constructor - return
const addPosts = (instrument, description, name, year) => {
  const newPost = {
    instrument,
    description,
    name,
    year,
    // TODO: learn about every function of Date   👍  new Date().getFullYear()
    //TODO: why function has a new key before it ??? :) 👍  The Date object is a built-in constructor in JavaScript, and when you create a Date object, you use the “new” keyword to call the constructor.
    // date: new Date().toISOString().slice(0, 9),  or
    date: (() => {
      const date = new Date(); // تاریخ فعلی
      const year = date.getFullYear(); // دریافت سال
      const month = date.getMonth(); // دریافت ماه (فرمت دو رقمی)
      return `${year}-${month}`; 
    })(),
    id: counter,
  };


  posts.push(newPost);
  // Update localStorage with the new posts به صورت رشته
  //TODO: what is the different between string and json  👍         stringify: The value to convert to a JSON string. -- JSON is purely a string with a specified data format it contains only properties, no methods.
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

  instrumentName.innerText = instrument; //مقدار دهی
  descriptionid.innerText = description; //innerText : متن داخل یک عنصر HTML را بخوانیم یا تغییر بدیم
  nameAuthor.innerText = name;
  yearPlay.innerText = year;
  idElement.innerText = `ID: ${id}`;

  // Set the inner text for the date element
  // TODO: `${} what is this ??? ^^ `     -used to insert a variable to a string
  dateElement.innerText = `Date: ${new Date(date).toLocaleString()}`;

  //کل عناصر ایجاد شده به div مربوطه اضافه
  instrumentDiv.append(instrumentName, descriptionid, nameAuthor, yearPlay, dateElement, idElement);


};


// uploading the post
posts.forEach(createIdElement);


//when a form send this func stop the reload
//TODO: if we have two button how should we handel onsubmit action  
inputForm.onsubmit = e => {
  //TODO: what is pre?
  e.preventDefault();


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


  //handel the error اگه پستی بود  تجزیع اش کن و اگه با خطا مواحه شد تو کنسول نمایش بده
  const storedPosts = localStorage.getItem("posts");
  let postsArray = [];
  if (storedPosts) {
    //TODO: try catch 
    try {
      postsArray = JSON.parse(storedPosts);
    } catch (error) {
      console.error("Error parsing JSON from localStorage:", error); // Log any parsing errors to the console
    }
  }


};