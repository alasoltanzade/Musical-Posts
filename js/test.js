'use strict';


const test = localStorage.getItem("posts");
const showResult = (showArray) => {
  const container = document.getElementById("postsshowww");
  container.innerHTML = "";





  
  JSON.parse(showArray).forEach(post => {
console.log(showArray);
      const showDiv = document.createElement("div");
      showDiv.classList.add("post");


      const titleElement = document.createElement("h2");
      titleElement.innerText = post.instrument;

      const h2 = document.getElementsByClassName()

      const instrumentElement = document.createElement("p");
      instrumentElement.innerText = `instrument: ${post.description}`;


      const authorElement = document.createElement("p");
      authorElement.innerText = `Author: ${post.name}`;


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

