'use strict';

const test = localStorage.getItem("posts");
const showResult = (showArray) => {
    const container = document.getElementById("postsshowww");
    container.innerHTML = "";

    JSON.parse(showArray).forEach(post => {

        const showDiv = document.createElement("div");
        showDiv.classList.add("post");


        const titleElement = document.createElement("h2");
        titleElement.innerText = post.instrument;


        const instrumentElement = document.createElement("p");
        instrumentElement.innerText = `description: ${post.description}`;


        const authorElement = document.createElement("p");
        authorElement.innerText = `Author: ${post.name}`;


        const yearElement = document.createElement("p");
        yearElement.innerText = `Year: ${post.year}`;




        //like
        const btnElement = document.createElement("button");
        btnElement.innerHTML = "Like";
        document.body.appendChild(btnElement);

        const heart_button = document.getElementById("heart-button");
        const total_likes = document.getElementById("total-likes");

        btnElement.onclick = function () {
            heart_button.setAttribute("posts", "heartbeat red-heart")
            total_likes.innerHTML = parseInt(total_likes.innerHTML) + 1
        };




//comment
        const commentElement = document.createElement("input");
        commentElement.type = "text"; 
        commentElement.placeholder = "Enter your comment"; 
        document.getElementById("myForm").appendChild(commentElement); 


        document.getElementById("myForm").addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const score = document.getElementById("score").value;
            const comment = commentElement.value; 

            const scores = JSON.parse(localStorage.getItem("scores")) || [];

            scores.push(score);
            localStorage.setItem("scores", JSON.stringify(scores));
            localStorage.setItem("name", name);

            // ذخیره کردن کامنت در localStorage
            const comments = JSON.parse(localStorage.getItem("comments")) || [];
            comments.push(comment); 
            localStorage.setItem("comments", JSON.stringify(comments)); 
            commentElement.value = '';
        });

        const name = localStorage.getItem("name");
        const scores = JSON.parse(localStorage.getItem("scores")) || [];
        const comments = JSON.parse(localStorage.getItem("comments")) || []; // خواندن کامنت‌ها










        showDiv.appendChild(titleElement);
        showDiv.appendChild(instrumentElement);
        showDiv.appendChild(authorElement);
        showDiv.appendChild(yearElement);
        showDiv.appendChild(btnElement);
        showDiv.appendChild(commentElement);
        container.appendChild(showDiv);
    });
};


showResult(test);







