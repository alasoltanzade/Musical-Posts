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
        const btnLikeElement = document.createElement("button");
        btnLikeElement.innerHTML = "Like";

        let likeStatus = localStorage.getItem('likeStatus');
        if (likeStatus === 'liked') {
            btnLikeElement.textContent = "liked";
        }

        btnLikeElement.onclick = function () {
            likeStatus = 'liked';
            btnLikeElement.textContent = likeStatus;
            localStorage.setItem('likeStatus', likeStatus);
        };






        //comment
        // input
        const commentElement = document.createElement("input");
        const commentauthorElement = document.createElement("input");
        commentElement.type = "text";
        commentauthorElement.type = "text";
        commentElement.placeholder = "Enter your comment";
        commentauthorElement.placeholder = "Enter your name";

        // button
        const btncmntElement = document.createElement("button");
        btncmntElement.innerHTML = "save";

        // add
        document.body.appendChild(commentElement);
        document.body.appendChild(commentauthorElement);
        document.body.appendChild(btncmntElement);


        const userId = {
            name1: null,
            identity: null,
            massage: null,
            date: null
        };

        commentElement.addEventListener("input", e => {
            if (!commentElement.value) { // if khali
                btncmntElement.setAttribute("disabled", "disabled"); //btm disable
                btncmntElement.classList.remove("abled");
            } else {
                btncmntElement.removeAttribute("disabled");
                btncmntElement.classList.add("abled");
            }
        });

        //add commnt
        function addcomment3() {
            if (!commentElement.value) return;

            userId.name1 = commentauthorElement.value || "Anonymous"; // empty name
            userId.identity = userId.name1 !== "Anonymous";
            userId.massage = commentElement.value;
            userId.date = new Date().toLocaleString();


            commentElement.value = "";
            commentauthorElement.value = "";

            localStorage.setItem("comments", JSON.stringify(userId)); // save in local Storage
            console.log("Data saved to local storage:", userId);
        }

        btncmntElement.addEventListener("click", addcomment3);




        showDiv.appendChild(titleElement);
        showDiv.appendChild(instrumentElement);
        showDiv.appendChild(authorElement);
        showDiv.appendChild(yearElement);
        showDiv.appendChild(btnLikeElement);
        showDiv.appendChild(commentElement);
        showDiv.appendChild(commentauthorElement);
        showDiv.appendChild(btncmntElement);
        container.appendChild(showDiv);
    });
};


showResult(test);





//like
// function likebtn() {
//     var setlocal = localStorage.setItem("item", "hi~")
// }