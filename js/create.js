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
const posts = JSON.parse(localStorage.getItem("posts")) || [];

// Function to add new posts
const addPosts = (instrument, description, name, year) => {
  const newPost = {
    instrument,
    description,
    name,
    year,
    date: new Date().toISOString(), // Add current date   به فرمت ISO 
    id: counter, // counter value as a unique ID.
  };

  posts.push(newPost);
  // Update localStorage with the new posts به صورت رشته
  localStorage.setItem("posts", JSON.stringify(posts));

  // increase the counter for the next post and save it back to localStorage
  counter++;
  localStorage.setItem("counter", counter);
  return newPost;
};




// Function to create and display a post element
const createidElement = ({ instrument, description, name, year, id, date }) => {
  
  // Create a div to hold the post.
  const instrumentDiv = document.createElement("div");
  instrumentDiv.id = `post-${id}`;  // Set a unique id for the div element.

  // Create elements
  const instrumentName = document.createElement("h2");
  const descriptionid = document.createElement("p");
  const nameAuthor = document.createElement("p");
  const yearPlay = document.createElement("p");
  const dateElement = document.createElement("p"); 

  instrumentName.innerText = instrument; //مقدار دهی
  descriptionid.innerText = description; //innerText : متن داخل یک عنصر HTML را بخوانیم یا تغییر بدیم
  nameAuthor.innerText = name;
  yearPlay.innerText = year;
  
  // Set the inner text for the date element
  dateElement.innerText = `Date: ${new Date(date).toLocaleString()}`; 

  //کل عناصر ایجاد شده به div مربوطه اضافه
  instrumentDiv.append(instrumentName, descriptionid, nameAuthor, yearPlay, dateElement);



  // Create and display the id of the post within the post div نمایش ایدی
  const idElement = document.createElement("p");
  idElement.innerText = `ID: ${id}`;
  instrumentDiv.appendChild(idElement);  //appendChild: فقط می‌تواند یک نود را به عنوان آرگومان دریافت


  // Display the posts only if there are posts; otherwise, hide it
  container.style.display = posts.length === 0 ? "none" : "flex";
};

// display the container based on the post count  دوباره وضعیت نمایش بررسی
container.style.display = posts.length === 0 ? "none" : "flex";

// uploading the post
posts.forEach(createidElement);


//when a form send this func stop the reload  
inputForm.onsubmit = e => {
  e.preventDefault();


  // Call addPosts to create a new post
  const newPosts = addPosts(
    inputInstrument.value,
    inputDescription.value,
    inputName.value,
    inputyear.value,
  );

  createidElement(newPosts);

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
    try {
      postsArray = JSON.parse(storedPosts);
    } catch (error) {
      console.error("Error parsing JSON from localStorage:", error); // Log any parsing errors to the console
    }
  }

  // const postsObject = {
  //   posts: postsArray
  // };

  // console.log(postsObject);

  const containerToShowPosts = document.getElementById("postsshowww");
  containerToShowPosts.innerHTML = "";
};