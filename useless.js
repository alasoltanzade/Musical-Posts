
// take user input in javascript without prompt
// function runProgram(input){
//     let line=input.split('\n')
//     let n= Number(line[0]);
//     let arr = line[1].split(' ').map(x => +x);
//     yourFunc(n,arr);
// }

// function yourFunc(n,arr){
//     console.log({n,arr})
// }

// if(process.env.USER === ""){
//     runProgram('')
// }
// else{
//     process.stdin.resume();
//     process.stdin.setEncoding('ascii');
//     let read="";
//     process.stdin.on('data',function(inp){
//         read+=inp
//     })
//     process.stdin.on('end',function(inp){
//         read=read.replace(/\n$/,"");
//         read=read.replace(/\n$/,"");
//         runProgram(read);
//     });
//     process.on("SIGINT",function(){
//         read=read.replace(/\n$/,"");
//         runProgram(read);
//         process.exit(0);
//     })
// }



//   click.init({
//   selector: "inputKey",
// });


//   function btmInsert(){
//       var myContent = click.activeEditor.getContent("inputKey");
//       localStorage.setItem("myContent", myContent);
//       var myContent = localStorage.getItem("myContent");
//       click.activeEditor.setContent(myContent);
//   }



// btmInsert.onclick = function(){
//   const key = inputKey.value;
//   const value = inputValue.value;
//   const idPost= id.value;
//   const authorPosts= authorPosts.value;
//   const instrument= instrument.value;
//   const description= description.value;
//   const data= data.value;
//   const likeCount= likeCount.value;
//   const commentCount= commentCount.value;
// comment: [idComment , authorComment, text, time ];

//   if (key && value) {  //both true
//     localStorage.setItem(key, value);
//     location.reload();
//   }

// };




//     <script>
//     const instrument = localStorage.getItem("instrument-name");
//     const description =localStorage.getItem("insert-description");

//     console.log(JSON.parse(localStorage.getItem('myObject')));


//     // document.getElementById("first-name").textContent =firstName;
//     // document.getElementById("last-name").textContent =lastName;

//   </script>




//             <div id="displayArea">
//       <h2>به درد کامنت میخوره:</h2>
//       <p id="userName"></p>
//       <ul id="scoreList"></ul>
//   </div>

//     <script>
// document.getElementById("myForm").addEventListener("submit", function(event) {
// event.preventDefault(); // جلوگیری از ارسال فرم

// // خواندن مقادیر فرم
// const name = document.getElementById("name").value;
// const score = document.getElementById("score").value;

// // دریافت آرایه موجود (یا ایجاد یک آرایه جدید)
// const scores = JSON.parse(localStorage.getItem("scores")) || [];

// // اضافه کردن نمره جدید به آرایه
// scores.push(score);

// // ذخیره‌سازی اطلاعات در localStorage
// localStorage.setItem("scores", JSON.stringify(scores));
// localStorage.setItem("name", name); // ذخیره نام
// });
// // خواندن نام
// const name = localStorage.getItem("name");

// // خواندن آرایه نمرات
// const scores = JSON.parse(localStorage.getItem("scores")) || [];

// // نمایش اطلاعات
// console.log("نام:", name);
// console.log("نمرات:", scores);
//     </script>



//     <form id="myForm">
//     <input type="text" id="name" placeholder="نام" required>
//     <input type="text" id="score" placeholder="نمره" required>
//     <button type="submit">ذخیره</button>
// </form>




// TODO:  read about this in class and functions 
// TODO:  key "function" for js functions !!   , what is dist in parcel service

// let arrayPost = {
//   idPost: id ,
//   authorPosts:authorPosts,
//   instrument: instrument,
//   description: description,
//   data: data,
//   likeCount: likeCount,
//   commentCount: commentCount,
//   comment: [idComment , authorComment, text, time ]
// }

// function setLocalStorage(value){
//   localStorage.setItem('name', JSON.stringify(value)); //key & value
// };


//  function getLocalStorage(value){
//   console.log(value)
//   const data = localStorage.getItem('name')
//   console.log(data);  //as page load it should display this data    
// };



// localStorage.setItem('posts', JSON.stringify([idPost ,authorPosts, instrument, description, data, likeCount, commentCount,comment([idComment , authorComment, text, time ])]));







// function test4(){
//   var uid = document.getElementById("inputName1").value;
//   var uid1 = document.getElementById("inputName2").value;
//   var uid2 = document.getElementById("inputName3").value;

//   if (localStorage.getItem("uid") == null) {
//     localStorage.setItem("uid" , "[]")
//   }


//   var name = localStorage.setItem("uid", JSON.stringify(uid));
//   var name1 = localStorage.setItem("uid1",JSON.stringify(uid1));
//   var name2 = localStorage.setItem("uid2",JSON.stringify(uid2));

//   var name = JSON.parse(localStorage.getItem("uid"));  name.push(uid);
//   var name1 = localStorage.getItem("uid1",uid1);
//   var name2 = localStorage.getItem("uid2",uid2);


//   var a,b,c;
//   a = "ala";
//   b = 134;
//   c = "awwwwwwwwwwww";

//   if (a==name && b == name1 && c == name2) {
//     console.log("your information is successfully add")
//   } 
// }


// function displayData() {
//   const name = localStorage.getItem("name");
//   const scores = JSON.parse(localStorage.getItem("scores")) || [];
//   document.getElementById("userName").innerText = `نام: ${name}`;
//   const scoreList = document.getElementById("scoreList");
//   scoreList.innerHTML = '';
//   scores.forEach((score) => {
//       const listItem = document.createElement("li");
//       listItem.innerText = score;
//       scoreList.appendChild(listItem);
//   });
// }
// document.getElementById("myForm").addEventListener("submit", function(event) {
//   event.preventDefault();
//   const name = document.getElementById("name").value;
//   const score = document.getElementById("score").value;
//   const scores = JSON.parse(localStorage.getItem("scores")) || [];
//   scores.push(score);
//   localStorage.setItem("scores", JSON.stringify(scores));
//   localStorage.setItem("name", name);
//   displayData();
// });
// window.onload = function() {
//   displayData();
// }




console.log("test")
// // خواندن مقادیر فرم
// const inputInstrument = document.getElementById("inputInstrument").value;
// const inputDescription = document.getElementById("inputDescription").value;
// const inputName = document.getElementById("inputName").value;
// const view = document.getElementById("view");
// const btmInsertCreat = document.getElementById("btmInsertCreat");


// btmInsertCreat.onclick = function(){
// const newInput = JSON.parse(localStorage.getItem("newInput")) || [];               // دریافت , خواندن , یا ایجاد آرایه موجود 

// newInput.push({                   // اضافه کردن ایتم جدید به آرایه
//   inputInstrument,
//   inputDescription,
//   inputName
// });

// localStorage.setItem("newInput", JSON.stringify(newInput));    // ذخیره‌سازی اطلاعات در localStorage
// // localStorage.setItem("inputDescription", inputDescription);

// };


// // نمایش 
// for (let i = 0; i < localStorage.length; i++) {
//   const key = localStorage.key(i);
//   const newInput = localStorage.getItem(newInput); 
//   view.innerHTML += `${newInput} <br />`;            
// }



{/* <fieldset>
                    <legend>insert comment</legend>
                    <input id="inputKey" type="text" placeholder="Enter comment...">
                    <input id="inputValue" type="text" placeholder="Enter name...">
                    <button id="btmInsert" type="button">insert</button>
                  </fieldset>

                  <fieldset>
                    <legend>Show</legend>
                    <div class="form-control" id="divId"></div>
                  </fieldset>




                  
 
                  <script>
                    const inputKey = document.getElementById("inputKey");
                    const inputValue = document.getElementById("inputValue");
                    const btmInsert = document.getElementById("btmInsert");
                    const divId = document.getElementById("divId");


                    const key = 'my-array-key';
                    const someData = { name: 'name', id: 'abcdef' };
                    const msToExpire = 5000;
                    // const idPost= idPost.value;
                    const authorPosts= authorPosts.value;
                    const instrument= instrument.value;
                    const description= description.value;
                    const likeCount= likeCount.value;
                    const comment = [idComment , authorComment, text, time ];


                    function btmInsert(){
                          // Convert string to array, initializes empty array if string is empty
                          let arr = [];
                          let string = localStorage.getItem(key);
                          if (string) arr = JSON.parse(string);

                          // Push a new item  
                          arr.push({
                              data: someData,
                              exp: (Date.now() + msToExpire),
                              idPost: idPost ,
                              authorPosts:authorPosts,
                              instrument: instrument,
                              description: description,
                              data: data,
                              likeCount: likeCount,
                              commentCount: commentCount,
                          });
                  
                    localStorage.setItem(key, JSON.stringify(arr));
                  }




                    for (let i = 0; i < localStorage.length; i++) {
                      const key = localStorage.key(i);
                      const value = localStorage.getItem(key);
                      divId.innerHTML += `${key}: ${value}<br />`;
                      
                    }
                  </script>
                </div> */}





// Object.assign({}, ['a','b','c']);
// ['a', 'b', 'c'].reduce((a, v) => ({ ...a, [v]: v}), {}) 

// function toObject(arr) {
//   var rv = {};
//   for (var i = 0; i < arr.length; ++i)
//     if (arr[i] !== undefined) rv[i] = arr[i];
//   return rv;
// }


// var obj = arr.reduce(function(acc, cur, i) {
//   acc[i] = cur;
//   return acc;
// }, {});



// window.onload = function () {
//   var url = document.location.href,
//       params = url.split('?')[1].split('&'),
//       data = {}, tmp;
//   for (var i = 0, l = params.length; i < l; i++) {
//        tmp = params[i].split('=');
//        data[tmp[0]] = tmp[1];
//   }
//   document.getElementById('here').innerHTML = data.name;
// }








//فایل جی اس اولم
// const view = document.getElementById("view");
// const btmInsertCreat = document.getElementById("btmInsertCreat");

// btmInsertCreat.onclick = function() {
//     const inputInstrument = document.getElementById("inputInstrument").value;
//     const inputDescription = document.getElementById("inputDescription").value;
//     const inputName = document.getElementById("inputName").value;

//     const posts = JSON.parse(localStorage.getItem("posts")) || [];

//     posts.push({ 
//       inputInstrument,
//       inputDescription,
//       inputName
//     });

//     localStorage.setItem("posts", JSON.stringify(posts));

//     view.innerHTML = "";
//     for (let i = 0; i < posts.length; i++) {  
//       view.innerHTML += `${JSON.stringify(posts[i])} <br />`;
//     }
//     window.location.href = "/html/testimonials.html";





// Object.assign({}, ['inputInstrument','inputDescription','inputName']);

// };



// const showInstrument = localStorage.getItem("posts");
// const showDescription = localStorage.getItem("posts");
// const showAuthor = localStorage.getItem("posts");

// localStorage.setItem("posts" , showInstrument);
// localStorage.setItem("posts" , showDescription);
// localStorage.setItem("posts" , showAuthor);

// document.getElementById('posts').textContent = showInstrument ;
// document.getElementById('posts').textContent = showDescription;
// document.getElementById('posts').textContent = showAuthor ;





// // Data to display
// const books = localStorage.getItem("posts");


// // Function to display books in the HTML
// const displayBooks = (booksArray) => {
//     const container = document.getElementById("postsshowww");

//     // Clear any existing content
//     container.innerHTML = "";

//     // Iterate over each book and create an element
//     booksArray.forEach(book => {
//         const bookDiv = document.createElement("div");
//         bookDiv.classList.add("book");

//         // Create elements for title, author, and year
//         const titleElement = document.createElement("h2");
//         titleElement.innerText = book.title;

//         const authorElement = document.createElement("p");
//         authorElement.innerText = `Author: ${book.author}`;

//         const yearElement = document.createElement("p");
//         yearElement.innerText = `Year: ${book.year}`;

//         // Append the elements to the bookDiv
//         bookDiv.appendChild(titleElement);
//         bookDiv.appendChild(authorElement);
//         bookDiv.appendChild(yearElement);

//         // Append bookDiv to the container
//         container.appendChild(bookDiv);
//     });
// };
// JSON.parse(showArray)

// displayBooks(books);

// const posts = JSON.parse(localStorage.getItem("posts")) || [];



// const showForm = document.getElementById("showUserData");
// document.getElementById('posts').textContent = showUserData ;
// document.getElementById('posts').textContent = showDescription;
// document.getElementById('posts').textContent = showAuthor ;




// for (let x = 0; x < array.length; x++) {
//   const instrument = array[x].instrument;
//   const description = array[x].description;
//   const name = array[x].name;
//   const year = array[x].year;

// }



//like
// var buttemLike = document.createElement("button");
// buttemLike.innerHTML = 'like';


// var table = document.getElementById("tableOnline");
// var row = table.insertRow(0);

// var cell = row.insertCell(0);

// var buttemResult = buttemLike.cloneNode(true)
// buttemResult.onclick = function()
// {
//     alert("you like your favorit post");
// }

// cell.appendChild( buttemResult );






// DOM Elements
const inputForm11 = document.getElementById("inputForm11");
const container = document.querySelector(".comment33");

const inputInstrument = inputForm11["comment1"];



const comment33 = JSON.parse(localStorage.getItem("comment33")) || [];

const addPosts = (comment1) => {
  comment33.push({
    comment1,
  });

  localStorage.setItem("comment33", JSON.stringify(comment33));

  return { comment1 };
};

const createidElement = ({ comment1 }) => {
  // Create elements

  const commentDiv = document.createElement("p");



  // Fill the content

  commentDiv.innerText = comment1;


  // Add to the DOM
  instrumentDiv.append(instrumentName);
  container.appendChild(instrumentDiv);

  container.style.display = comment33.length === 0 ? "none" : "flex";
};


//display
container.style.display = comment33.length === 0 ? "none" : "flex";

comment33.forEach(createidElement);

inputForm11.onsubmit = e => {
  e.preventDefault();

  const newPosts = addPosts(
    inputInstrument.value,

  );

  createidElement(newPosts);

  inputInstrument.value = "";





  const container = document.getElementById("showComment");
  container.innerHTML = "";
};







// <!-- <button class="btn btn-primary" onclick="getLocalStorage('aslfadfkf')">alfsdkasdkfjadslkf</button> -->
// <!--               <span id="total-likes">🤍</span>

//         <section class="row tm-testimonials-section">
//             <div class="col-12 tm-carousel">              
//                 <div class="tm-bg-black-transparent tm-testimonial-box text-center">                    
//                   <div class="tm-person-img-container"> 
//                     <img src="/img/a.png" alt="Image" class="img-fluid mx-auto"/>
//                   </div>  
//                   <h3 class="tm-about-name tm-uppercase">violin</h3>
//                   <p class="tm-about-description">
//                     The violin, colloquially known as a fiddle, is a wooden chordophone, and is the smallest, and thus highest-pitched instrument in regular use in the violin family. Smaller violin-type instruments exist, including the violino piccolo and the pochette, but these are virtually unused.
//                   </p>
//                   <button type="checkbox" class="btn btn-primary" value="true">
//                     Like ❤️ (<span class="totalLikes">10</span>)
//                   </button><br><br><br><br><br>





//                 <form id=" showform">
//                   <div>Instrument</div> <span id="showInstrument"><br><br>
//                   <div>Description</div> <span id="showDescription"><br><br>
//                   <div>author</div> <span id="showAuthor"><br><br>




//                       <input id="comment" type="text" class="form-control" placeholder="Enter comment... "><br><br>
//                       <button id="btmInsertCreat" type="button" class="btn btn-primary tm-btn-submit rounded-0">comment on post</button>


//                       </form><br><br><br><br><br><br>

//                 <div class="tm-bg-black-transparent tm-testimonial-box text-center">
//                   <div class="tm-person-img-container">
//                     <img src="/img/c.png" alt="Image" class="img-fluid mx-auto"/>
//                   </div>              
//                   <h3 class="tm-about-name tm-uppercase">guitar</h3>
//                   <p class="tm-about-description">
//                     The guitar is a stringed musical instrument that is usually fretted (with some exceptions) and typically has six or twelve strings.
//                   </p>
//                 </div>

//                 <div class="tm-bg-black-transparent tm-testimonial-box text-center">
//                   <div class="tm-person-img-container">
//                     <img src="/img/b.png" alt="Image" class="img-fluid mx-auto"/>
//                   </div>              
//                   <h3 class="tm-about-name tm-uppercase">piano</h3>
//                   <p class="tm-about-description">
//                     The piano is a keyboard instrument that produces sound when its keys are depressed, through engagement of an action whose hammers strike strings.
//                   </p>
//                 </div>

//                 <div class="tm-bg-black-transparent tm-testimonial-box text-center">
//                   <div class="tm-person-img-container">
//                     <img src="/img/d.png" alt="Image" class="img-fluid mx-auto"/>
//                   </div>              
//                   <h3 class="tm-about-name tm-uppercase">hangdrum</h3>
//                   <p class="tm-about-description">
//                     The Hang is a type of musical instrument called a handpan, fitting into the idiophone class and based on the Caribbean steelpan instrument. It was created by Felix Rohner and Sabina Schärer in Bern, Switzerland. The name of their company is PANArt Hangbau AG.
//                   </p>
//                 </div>

//                 <div class="tm-bg-black-transparent tm-testimonial-box text-center">
//                   <div class="tm-person-img-container">
//                     <img src="/img/e.png" alt="Image" class="img-fluid mx-auto"/>
//                   </div>              
//                   <h3 class="tm-about-name tm-uppercase">harp</h3>
//                   <p class="tm-about-description">
//                     The harp is a stringed musical instrument that has individual strings running at an angle to its soundboard; the strings are plucked with the fingers. Harps can be made and played in various ways, standing or sitting, and in orchestras or concerts. Its most common form is triangular in shape and made of wood.                  </p>
//                 </div> -->








//comment
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();


  const name = document.getElementById("name").value;
  const score = document.getElementById("score").value;


  const scores = JSON.parse(localStorage.getItem("scores")) || [];


  scores.push(score);


  localStorage.setItem("scores", JSON.stringify(scores));
  localStorage.setItem("name", name);
});

const name = localStorage.getItem("name");


const scores = JSON.parse(localStorage.getItem("scores")) || [];


console.log("نام:", name);
console.log("نمرات:", scores);





// //like
// const btnElement = document.createElement("button");
// btnElement.innerHTML = "Like";
// document.body.appendChild(btnElement);

// const heart_button = document.getElementById("heart-button");
// const total_likes = document.getElementById("total-likes");

// btnElement.onclick = function () {
//     heart_button.setAttribute("posts", "heartbeat red-heart")
//     total_likes.innerHTML = parseInt(total_likes.innerHTML) + 1
// };










// //comment
// const commentElement = document.createElement("input");
// const commentauthorElement = document.createElement("input");

// commentElement.type = "text";
// commentauthorElement.type = "text";
// commentElement.placeholder = "Enter your comment";
// commentauthorElement.placeholder = "Enter your name";

// document.getElementById("myForm").appendChild(commentElement);
// document.getElementById("myForm").appendChild(commentauthorElement);


// document.getElementById("myForm").addEventListener("submit", function (event) {
//     event.preventDefault();

//     const getComment = commentElement.value;
//     const getAuthor = commentauthorElement.value;
//     const shoooooow = document.querySelector(".showCommenttttt");

//     const showCommenttttt = JSON.parse(localStorage.getItem("showCommenttttt")) || [];

//     const addcomments = (getComment, getAuthor) => {
//         showCommenttttt.push({ getComment, getAuthor });
//         localStorage.setItem("showCommenttttt", JSON.stringify(showCommenttttt));
//         return { getComment, getAuthor };
//     };

//     const createidElement = ({ getComment, getAuthor }) => {
//         const commentDiv = document.createElement("div");
//         const commentElementp = document.createElement("p");
//         const commentauthorElementp = document.createElement("p");

//         commentElementp.textContent = getComment;
//         commentauthorElementp.textContent = getAuthor;

//         commentDiv.append(commentElementp, commentauthorElementp);
//         shoooooow.appendChild(commentDiv);

//         shoooooow.style.display = showCommenttttt.length === 0 ? "none" : "flex";
//     };

//     showCommenttttt.forEach(createidElement);

//     const newCmntt = addcomments(getComment, getAuthor);
//     createidElement(newCmntt);

//     commentElement.value = "";
//     commentauthorElement.value = "";

// });










//coment babe

// // به فرم با ID "myForm" یک رویداد "submit" اضافه می‌کنیم
// document.getElementById("myForm").addEventListener("submit", function (event) {
//     // جلوگیری از ارسال پیش‌فرض فرم
//     event.preventDefault();

//     // دریافت مقادیر از ورودی‌های فرم با IDs "name" و "score"
//     const name = document.getElementById("getComment").value;
//     const score = document.getElementById("getAuthor").value;



//     // دریافت نمرات موجود از Local Storage، یا یک آرایه خالی اگر نمراتی وجود نداشته باشد
//     const scores = JSON.parse(localStorage.getItem("scores")) || [];

//     // اضافه کردن نمره جدید به آرایه نمرات
//     scores.push(score);

//     // ذخیره آرایه نمرات به Local Storage
//     localStorage.setItem("scores", JSON.stringify(scores));
//     // ذخیره نام به Local Storage
//     localStorage.setItem("name", name);
//   });

//   // دریافت نام از Local Storage
//   const name = localStorage.getItem("name");

//   // دریافت نمرات از Local Storage، یا یک آرایه خالی اگر نمراتی وجود نداشته باشد
//   const scores = JSON.parse(localStorage.getItem("scores")) || [];

//   console.log( name);
//   console.log( scores);





// //comment button
// const btncmntElement = document.createElement("button");
// btncmntElement.innerHTML = "save";

// const myButton = btncmntElement;
// myButton.addEventListener("click", () => {
//     // Example data to save in local storage
//     const dataToSave = { comment: "This is a comment" };

//     // Save to local storage
//     localStorage.setItem("userComment", JSON.stringify(dataToSave));

//     // Optional: Give feedback
//     console.log("Data saved to local storage:", dataToSave);
// });


// let publish = `<div class="parents">
//         <h1>${userId.name1}</h1>
//         <p>${userId.massage}</p>
//         <span>${userId.date}</span>
//     </div>`;



/////////////////like
// const likeButton = document.getElementById('like-button');
// const likeCountElement = document.getElementById('like-count');

// // Check if like count data exists in localStorage and set the count accordingly
// let likeCount = JSON.parse(localStorage.getItem('likeCount')) || 0;
// likeCountElement.innerText = likeCount;

// // Listen for clicks on the like button and increment the like count
// likeButton.addEventListener('click', () => {
//   likeCount++;
//   likeCountElement.innerText = likeCount;

//   // Store the updated like count in localStorage
//   localStorage.setItem('likeCount', JSON.stringify(likeCount));
// });




// function add() {
//   var task = document.getElementById('task').value;
//   var todos = get_todos();
//   var newTask = {
//               name:task, 
//               id: "item" + todos.length, 
//               priority: {
//                           isPriority:false, 
//                           color:""
//                         }
//            };

//   todos.push(newTask);
//   localStorage.setItem('todo', JSON.stringify(todos));

//   show();

//   return false;
// }

// for (var i = 0; i < todos.length; i++) {
//   var todo = todos[i];
//   html += "<p id='item" + i + "' isPriority='" + 
//   todo.priority.isPriority + "'>" + todo["name"] + '<p>' + 
//   "<button class='remove'>Delete</button>" + " " + 
//   "<button class='priority' value='item" + i + "'>Priority</button>";
// };

// todos[i].priority.isPriority = true;

// todos[i].priority.color = "red";

// // [isPriority="true"] {
//   background-color: red;
// }