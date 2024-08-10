'use strict';

// display data from localStorage on the page.
const test = localStorage.getItem("posts");



const showResult = (showArray) => {
    const container = document.getElementById("postsshowww");
    container.innerHTML = "";

    // Create and populate elements for post
    JSON.parse(showArray).forEach((post) => {

        const showDiv = document.createElement("div");
        showDiv.classList.add("post"); // Add a class for CSS styling


        const titleElement = document.createElement("h2");
        titleElement.innerText = post.instrument; // Display the instrument name


        const instrumentElement = document.createElement("p");
        instrumentElement.innerText = `Description: ${post.description}`;


        const authorElement = document.createElement("p");
        authorElement.innerText = `Author: ${post.name}`;


        const yearElement = document.createElement("p");
        yearElement.innerText = `Year: ${post.year}`;


        const btnLikeElement = document.createElement("button");
        btnLikeElement.innerHTML = "Like"; // Set the default button text

        // the like status for the specific post id from localStorage.
        let likeStatus = localStorage.getItem(`likeStatus_${post.id}`);
        // If post was already liked, update button text accordingly.
        if (likeStatus === 'liked') {
            btnLikeElement.textContent = "liked"; 
        }

        // Event handler for the like button click event
        btnLikeElement.onclick = function () {
            likeStatus = 'liked'; // Mark post as liked
            btnLikeElement.textContent = likeStatus; // Update button text
            // Store the like status in localStorage using the post ID as the key
            localStorage.setItem(`likeStatus_${post.id}`, likeStatus);
        };



        const commentContainer = document.createElement("div");
        const commentElement = document.createElement("input");
        const commentAuthorElement = document.createElement("input");
        commentElement.type = "text";
        commentAuthorElement.type = "text";
        commentElement.placeholder = "Enter your comment"; 
        commentAuthorElement.placeholder = "Enter your name"; 

        const btnCmntElement = document.createElement("button");
        btnCmntElement.innerHTML = "Save";

        // Enable or disable the comment button based on user input
        commentElement.addEventListener("input", e => {
            if (!commentElement.value) { // If the input is empty
                btnCmntElement.setAttribute("disabled", "disabled");
                btnCmntElement.classList.remove("abled"); // Remove active class.
            } else {
                btnCmntElement.removeAttribute("disabled"); // Enable button
                btnCmntElement.classList.add("abled"); // Add active class
            }
        });

        // Function to save the comment when the button is clicked
        btnCmntElement.addEventListener("click", () => {
            if (!commentElement.value) return; // Don't save if input is empty

            // Create a comment data object with the user's details
            const commentData = {
                name: commentAuthorElement.value || "Anonymous", 
                message: commentElement.value, // User comment message
                date: new Date().toLocaleString(), // date and time
            };

            // Retrieve existing comments for the current post ID from localStorage
            const existingComments = JSON.parse(localStorage.getItem(`comments_${post.id}`)) || [];
            existingComments.push(commentData); // Add the new comment to existing comments

            // Save the updated comments back to localStorage
            localStorage.setItem(`comments_${post.id}`, JSON.stringify(existingComments));

            // Clear the input fields after saving the comment
            commentElement.value = "";
            commentAuthorElement.value = "";
            console.log("Data saved to local storage:", commentData); 
        });


        commentContainer.appendChild(commentElement);
        commentContainer.appendChild(commentAuthorElement);
        commentContainer.appendChild(btnCmntElement);


        const commentsList = document.createElement("div");
        // Retrieve existing comments for the current post from localStorage
        const storedComments = JSON.parse(localStorage.getItem(`comments_${post.id}`)) || [];
        // Display each comment
        storedComments.forEach(comment => {
            const commentParagraph = document.createElement("p");
            commentParagraph.innerText = `${comment.name}: ${comment.message} (${comment.date})`; // Format comment text
            commentsList.appendChild(commentParagraph); // Append comment to the comments list
        });

        // Append all elements
        showDiv.appendChild(titleElement);
        showDiv.appendChild(instrumentElement);
        showDiv.appendChild(authorElement);
        showDiv.appendChild(yearElement);
        showDiv.appendChild(btnLikeElement);
        showDiv.appendChild(commentContainer);
        showDiv.appendChild(commentsList);
        container.appendChild(showDiv); // add this post div to the container
    });
};

// Call the showResult function to display posts from localStorage
showResult(test);