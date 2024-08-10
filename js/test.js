'use strict';

// display data from localStorage on the page.
const test = JSON.parse(localStorage.getItem("posts")) || [];

let currentPage = 1; 
const itemsPerPage = 3; 

// A variable to hold the sorted or filtered posts
let displayedPosts = [...test];

const showResult = (showArray, page) => {
    const container = document.getElementById("postsshowww");
    container.innerHTML = "";

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;
    const paginatedItems = showArray.slice(startIndex, endIndex); 

    // Create and populate elements for post
    paginatedItems.forEach((post) => {
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

        // Read the date from localStorage and display it
        const dateElement = document.createElement("p");
        dateElement.innerText = `Date: ${new Date(post.date).toLocaleString()}`; // Convert date from ISO format

        const btnLikeElement = document.createElement("button");
        btnLikeElement.innerHTML = post.liked ? "Liked" : "Like";

        btnLikeElement.onclick = function () {
            post.liked = !post.liked;
            btnLikeElement.textContent = post.liked ? "Liked" : "Like";
            localStorage.setItem("posts", JSON.stringify(showArray));
        };

        // Comments section
        const commentContainer = document.createElement("div");
        commentContainer.className = "coment67";
        const commentElement = document.createElement("input");
        const commentAuthorElement = document.createElement("input");
        commentElement.type = "text";
        commentAuthorElement.type = "text";
        commentElement.placeholder = "Enter your comment";
        commentAuthorElement.placeholder = "Enter your name";

        const btnCmntElement = document.createElement("button");
        btnCmntElement.innerHTML = "Save";

        commentElement.addEventListener("input", e => {
            btnCmntElement.disabled = !commentElement.value;
        });

        // Save comment
        btnCmntElement.addEventListener("click", () => {
            if (!commentElement.value) return;
            const commentData = {
                postId: post.id,
                name: commentAuthorElement.value || "Anonymous",
                message: commentElement.value,
                date: new Date().toLocaleString(),
            };

            const existingComments = JSON.parse(localStorage.getItem("comments")) || [];
            existingComments.push(commentData);
            localStorage.setItem("comments", JSON.stringify(existingComments));

            commentElement.value = "";
            commentAuthorElement.value = "";
            displayComments(post.id);
        });

        const commentsList = document.createElement("div");
        const displayComments = (postId) => {
            commentsList.innerHTML = ""; 
            const allComments = JSON.parse(localStorage.getItem("comments")) || [];
            const postComments = allComments.filter(comment => comment.postId === postId);
            postComments.forEach(comment => {
                const commentParagraph = document.createElement("p");
                commentParagraph.innerText = `${comment.name}: ${comment.message} (${comment.date})`;
                commentsList.appendChild(commentParagraph);
            });
        };
        
        displayComments(post.id);

        commentContainer.appendChild(commentElement);
        commentContainer.appendChild(commentAuthorElement);
        commentContainer.appendChild(btnCmntElement);
        showDiv.appendChild(titleElement);
        showDiv.appendChild(instrumentElement);
        showDiv.appendChild(authorElement);
        showDiv.appendChild(yearElement);
        showDiv.appendChild(dateElement); // Add the date element to the post div
        showDiv.appendChild(btnLikeElement);
        showDiv.appendChild(commentContainer);
        showDiv.appendChild(commentsList);
        container.appendChild(showDiv);
    });
};
// Function to search posts by title
const searchPosts = (searchTerm) => {
    const filteredPosts = test.filter(post => post.instrument.toLowerCase().includes(searchTerm.toLowerCase()));
    displayedPosts = filteredPosts;
    currentPage = 1; // Reset to first page after searching
    showResult(displayedPosts, currentPage);
    updatePaginationButtons(displayedPosts);
};

// Event listener for search input
document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value;
    searchPosts(searchTerm);
});


// Function to sort posts by date
const sortPosts = (array, order) => {
    return array.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return order === 'asc' ? dateA - dateB : dateB - dateA;
    });
};

// Event listener for sorting
document.getElementById('sortByDate').addEventListener('change', (e) => {
    const sortOrder = e.target.value;
    displayedPosts = sortPosts([...test], sortOrder); // Love copies for sorting
    currentPage = 1; // Reset to the first page after sorting
    showResult(displayedPosts, currentPage);
    updatePaginationButtons(displayedPosts);
});

// Function to update pagination buttons
const updatePaginationButtons = (array) => {
    const prevButton = document.querySelector(".pagination__btn--prev");
    const nextButton = document.querySelector(".pagination__btn--next");
    const currentPageDisplay = document.getElementById("currentPageDisplay"); 

    prevButton.disabled = currentPage === 1; 
    nextButton.disabled = currentPage === Math.ceil(array.length / itemsPerPage);

    currentPageDisplay.innerText = `Page ${currentPage}`;

    prevButton.onclick = function () {
        if (currentPage > 1) {
            currentPage--;
            showResult(array, currentPage);
            updatePaginationButtons(array);
        }
    };

    nextButton.onclick = function () {
        if (currentPage < Math.ceil(array.length / itemsPerPage)) {
            currentPage++;
            showResult(array, currentPage);
            updatePaginationButtons(array);
        }
    };
};

// Initial call to display the first page of posts
showResult(displayedPosts, currentPage);
updatePaginationButtons(displayedPosts);