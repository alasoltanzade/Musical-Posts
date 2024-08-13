'use strict';

// Display data from localStorage on the page.
const test = JSON.parse(localStorage.getItem("posts")) || [];

let currentPage = 1;
const itemsPerPage = 3;

// A variable to hold the sorted or filtered posts
let displayedPosts = [...test];



const showResult = (showArray, page) => {
    const container = document.getElementById("postsshowww");
    container.innerHTML = ""; // Clear container to avoid duplicates

    // پست هایی را برای نمایش در صفحه فعلی
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;
    const paginatedItems = showArray.slice(startIndex, endIndex);



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

        const dateElement = document.createElement("p");
        dateElement.innerText = `Date: ${new Date(post.date).toLocaleString().slice(0, 9)}`;

        // Button for "Like" functionality
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
        commentElement.className = "com7";
        commentElement.type = "text";
        commentElement.placeholder = "Enter your comment";

        const commentAuthorElement = document.createElement("input");
        commentAuthorElement.className = "com8";
        commentAuthorElement.type = "text";
        commentAuthorElement.placeholder = "Enter your name";

        const btnCmntElement = document.createElement("button");
        btnCmntElement.innerHTML = "Save";

        commentElement.addEventListener("input", e => { // اگر فیلد ورودی خالی باشد، دکمه غیرفعال می‌شود
            btnCmntElement.disabled = !commentElement.value;
        });

        // Save comment
        btnCmntElement.addEventListener("click", () => {
            if (!commentElement.value) return;   //فیلد خالی باشد، هیچ کاری انجام نمی‌شد

            const existingComments = JSON.parse(localStorage.getItem("comments")) || [];

            const newId = existingComments.length > 0 ? Math.max(...existingComments.map(comment => comment.id)) + 1 : 0;

            const commentData = {
                id: newId,
                postId: post.id,
                name: commentAuthorElement.value || "Anonymous",
                message: commentElement.value,
                date: new Date().toLocaleString(),
                replies: [] // Ensure replies are initialized here
            };

            existingComments.push(commentData);
            localStorage.setItem("comments", JSON.stringify(existingComments));

            commentElement.value = "";
            commentAuthorElement.value = "";
            displayComments(post.id, commentsList);
        });

        // Create comments list
        const commentsList = document.createElement("div");
        commentsList.className = "commentsList";

        // Append elements to post div
        showDiv.appendChild(titleElement);
        showDiv.appendChild(instrumentElement);
        showDiv.appendChild(authorElement);
        showDiv.appendChild(yearElement);
        showDiv.appendChild(dateElement);
        showDiv.appendChild(btnLikeElement);
        commentContainer.appendChild(commentElement);
        commentContainer.appendChild(commentAuthorElement);
        commentContainer.appendChild(btnCmntElement);
        showDiv.appendChild(commentContainer);
        showDiv.appendChild(commentsList); // Append comments list to post div
        container.appendChild(showDiv);

        // Call displayComments for the current post
        displayComments(post.id, commentsList);
    });
};




// Function to display comments
const displayComments = (postId, commentsList) => {
    commentsList.innerHTML = ""; // Clear previous comments
    const allComments = JSON.parse(localStorage.getItem("comments")) || [];
    const postComments = allComments.filter(comment => comment.postId === postId);
    postComments.forEach(comment => {
        const commentParagraph = document.createElement("p");
        commentParagraph.innerText = `${comment.name}: ${comment.message} (${comment.date})`;


        // Create reply section
        const replyContainer = document.createElement("div");
        replyContainer.className = "replyContainer";

        const replyInput = document.createElement("input");
        replyInput.placeholder = "Type your reply here";
        const replyButton = document.createElement("button");
        replyButton.innerText = "Reply";


        // Save reply
        replyButton.addEventListener("click", () => {
            if (!replyInput.value) return; //khali

            const existingComments = JSON.parse(localStorage.getItem("comments")) || [];
            const replyData = {
                id: comment.id, // Use the comment ID for replies
                message: replyInput.value,
            };

            const updatedComments = existingComments.map(c => {
                if (c.id === comment.id) {
                    c.replies = c.replies || []; // Ensure replies are initialized
                    c.replies.push(replyData); // Add the reply to the comment's replies
                }
                return c;
            });

            localStorage.setItem("comments", JSON.stringify(updatedComments));
            replyInput.value = "";
            displayComments(postId, commentsList); // Refresh comments display
        });

        replyContainer.appendChild(replyInput);
        replyContainer.appendChild(replyButton);
        commentsList.appendChild(commentParagraph);
        commentsList.appendChild(replyContainer);

        // Display replies if they exist
        const repliesList = document.createElement("div");
        repliesList.className = "repliesList";
        (comment.replies || []).forEach(reply => { // Ensure replies is defined
            const replyParagraph = document.createElement("p");
            replyParagraph.innerText = `${reply.message}`;
            repliesList.appendChild(replyParagraph);
        });
        commentsList.appendChild(repliesList);
    });
};

// Function to search posts by title
const searchPosts = (searchTerm) => {
    const filteredPosts = test.filter(post => post.instrument.toLowerCase().includes(searchTerm.toLowerCase()));
    displayedPosts = filteredPosts;
    currentPage = 1;
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
    displayedPosts = sortPosts([...test], sortOrder);
    currentPage = 1;
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