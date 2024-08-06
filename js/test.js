'use strict';


const test = localStorage.getItem("posts");
const showResult = (showArray) => {
  const container = document.getElementById("postsshowww");
  container.innerHTML = "";



  console.log(showArray);


  
  JSON.parse(showArray).forEach(post => {

      const showDiv = document.createElement("div");
      showDiv.classList.add("post");


      const titleElement = document.createElement("h2");
      titleElement.innerText = post.title;


      const instrumentElement = document.createElement("p");
      instrumentElement.innerText = `instrument: ${post.author}`;


      const authorElement = document.createElement("p");
      authorElement.innerText = `Author: ${post.author}`;


      const yearElement = document.createElement("p");
      yearElement.innerText = `Year: ${post.year}`;

      
      showDiv.appendChild(titleElement);
      showDiv.appendChild(instrumentElement);
      showDiv.appendChild(authorElement);
      showDiv.appendChild(yearElement);
      container.appendChild(showDiv);
  });
};

showResult(test);

