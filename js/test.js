'use strict';

const test = localStorage.getItem("posts");
const showResult = (showArray) => {
    const container = document.getElementById("postsshowww");
    container.innerHTML = "";

    JSON.parse(showArray).forEach((post) => {
        const showDiv = document.createElement("div");
        showDiv.classList.add("post");

        const titleElement = document.createElement("h2");
        titleElement.innerText = post.instrument;

        const instrumentElement = document.createElement("p");
        instrumentElement.innerText = `Description: ${post.description}`;

        const authorElement = document.createElement("p");
        authorElement.innerText = `Author: ${post.name}`;

        const yearElement = document.createElement("p");
        yearElement.innerText = `Year: ${post.year}`;

        // Like button
        const btnLikeElement = document.createElement("button");
        btnLikeElement.innerHTML = "Like";

        // Get the like status for this specific post ID
        let likeStatus = localStorage.getItem(`likeStatus_${post.id}`);
        if (likeStatus === 'liked') {
            btnLikeElement.textContent = "Liked";
        }

        btnLikeElement.onclick = function () {
            likeStatus = 'liked';
            btnLikeElement.textContent = likeStatus;
            localStorage.setItem(`likeStatus_${post.id}`, likeStatus); // Store via post ID
        };

        // Comment section
        const commentContainer = document.createElement("div");
        const commentElement = document.createElement("input");
        const commentAuthorElement = document.createElement("input");
        commentElement.type = "text";
        commentAuthorElement.type = "text";
        commentElement.placeholder = "Enter your comment";
        commentAuthorElement.placeholder = "Enter your name";

        // Button to save comment
        const btnCmntElement = document.createElement("button");
        btnCmntElement.innerHTML = "Save";

        // Enable and disable comment button based on input
        commentElement.addEventListener("input", e => {
            if (!commentElement.value) { // if input is empty
                btnCmntElement.setAttribute("disabled", "disabled"); 
                btnCmntElement.classList.remove("abled");
            } else {
                btnCmntElement.removeAttribute("disabled");
                btnCmntElement.classList.add("abled");
            }
        });

        // Add comment function
        btnCmntElement.addEventListener("click", () => {
            if (!commentElement.value) return;

            const commentData = {
                name: commentAuthorElement.value || "Anonymous", // default name
                message: commentElement.value,
                date: new Date().toLocaleString(),
            };

            // Retrieve existing comments for this post ID
            const existingComments = JSON.parse(localStorage.getItem(`comments_${post.id}`)) || [];
            existingComments.push(commentData);

            // Save updated comments back to Local Storage
            localStorage.setItem(`comments_${post.id}`, JSON.stringify(existingComments));

            // Clear input fields
            commentElement.value = "";
            commentAuthorElement.value = "";
            console.log("Data saved to local storage:", commentData);
        });

        // Append elements to post display
        commentContainer.appendChild(commentElement);
        commentContainer.appendChild(commentAuthorElement);
        commentContainer.appendChild(btnCmntElement);
        
        // Show all comments for the current post
        const commentsList = document.createElement("div");
        const storedComments = JSON.parse(localStorage.getItem(`comments_${post.id}`)) || [];
        storedComments.forEach(comment => {
            const commentParagraph = document.createElement("p");
            commentParagraph.innerText = `${comment.name}: ${comment.message} (${comment.date})`;
            commentsList.appendChild(commentParagraph);
        });

        showDiv.appendChild(titleElement);
        showDiv.appendChild(instrumentElement);
        showDiv.appendChild(authorElement);
        showDiv.appendChild(yearElement);
        showDiv.appendChild(btnLikeElement);
        showDiv.appendChild(commentContainer);
        showDiv.appendChild(commentsList);
        container.appendChild(showDiv);
    });
};

showResult(test);