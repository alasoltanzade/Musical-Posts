'use strict';

const test = localStorage.getItem("posts");
var ty = 0;
const showResult = (showArray) => {
    const container = document.getElementById("postsshowww");
    container.innerHTML = "";


    JSON.parse(showArray).forEach((post) => {


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













        //comment button
        const btncmntElement = document.createElement("button");
        btncmntElement.innerHTML = "save";

        // document.body.appendChild(btncmntElement); // Append the button to the body?

        
        btncmntElement.addEventListener("click", () => {

            addcomment3();


            const dataToSave = {
                name: userId.name1,
                comment: userId.massage,
                date: userId.date
            };

            localStorage.setItem("userComment", JSON.stringify(dataToSave));

            console.log("Data saved to local storage:", dataToSave);
        });
















        //comment
        const commentElement = document.createElement("input");
        const commentauthorElement = document.createElement("input");

        commentElement.type = "text";
        commentauthorElement.type = "text";
        commentElement.placeholder = "Enter your comment";
        commentauthorElement.placeholder = "Enter your name";







        showDiv.appendChild(titleElement);
        showDiv.appendChild(instrumentElement);
        showDiv.appendChild(authorElement);
        showDiv.appendChild(yearElement);
        showDiv.appendChild(btnElement);
        showDiv.appendChild(commentElement);
        showDiv.appendChild(commentauthorElement);
        showDiv.appendChild(btncmntElement);
        container.appendChild(showDiv);
    });
};


showResult(test);









//comment
const userId = {
    name1: null,
    identity: null,
    massage: null,
    date: null
}


const userComment = document.querySelector("usercomment");
const publishBtn = document.querySelector("publish");
const comments = document.querySelector("comments");
const username = document.querySelector("user7");

userComment.addEventListener("input", e => {
    if (!userComment.value) {
        publishBtn.setAttribute("disabled", "disabled");
        publishBtn.classList.remove("abled")
    } else {
        publishBtn.removeAttribute("disabled");
        publishBtn.classList("abled")
    }
})


function addcomment3() {
    if (!userComment.value) return;
    userId.name1 = username.value;
    if (userId.name1 === "Anonymous") {
        userId.identity = false;
    } else {
        userId.identity = true;
    }

    userId.massage = userComment.value;
    userId.date = new Date().toLocaleString();
    let publish = `<div class =""parents>
        <h1>${userId.name1}<h1>
        <p>${userId.massage}</p>
        <span>${userId.date}</span>
    <div>`

    comments.innerHTML += publish;
    userComment.value = "";

    let commentNum = document.querySelectorAll('parent').length;
    document.getElementById("comment").textContent = commentNum;
}


publishBtn.addEventListener("click", addcomment3)






//like
function likebtn() {
    var setlocal = localStorage.setItem("item", "hi~")
}