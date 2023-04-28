// // selecting DOM elements & ui building
// // 1.getElementById() // fast performance
// // 2.getElementsByTagName()
// // 3.getElementsByClassName()
// // 4.finding element by CSS selectors
// // 5.querySelector() querySelectorAll()

//   const inputEl = document.querySelector("#input");
//   const saveBtnEl = document.querySelector("#savebtn");
//   const ulEl = document.querySelector("#response-container");
//   const taskItemsKey = "taskItems";
//   // do something with the saveBtnEl

// function createAlertViaDom(message) {
//   const div = document.createElement("div");

//   div.className = "alert";
//   // div.innerText = "chat updated!" // slow performance, formatted is not showing
//   // div.textContent = "chat updated!" // medium performance ,formatted is showing
//   const textNode = document.createTextNode(message); // best approch to create text
//   div.append(textNode);
//   // console.log(div);

//   main.prepend(div); // prepend means at first

//   // Add transition styles for smooth animation
//   div.style.opacity = "0";
//   div.classList.add("rounded-md", "p-2", "bg-emerald-500" ,"text-white")
//   div.style.transition = "opacity 0.5s ease-in-out";

//   // Show the alert message and set the opacity to 1
//   setTimeout(() => {
//     div.style.opacity = "1";
//   }, 10);

//   // Hide the alert message and set the opacity to 0 after 2 seconds
//   setTimeout(() => {
//     div.style.opacity = "0";
//   }, 2000);

//   // Remove the alert message from the DOM after it's hidden
//   setTimeout(() => {
//     div.remove();
//   }, 2500);
// }

// const handleAddTask = () => {
//   //   const liHtml = `
//   //   <li class="task-item">
//   //     <div class="task-text">${taskItem}</div>
//   //     <div class="remove-btn"><i class="fa-solid fa-trash"></i></div>
//   //   </li>
//   // `;
//   const li = document.createElement("li"); // creating element using createElement method
//   const div_text = document.createTextNode(inputEl.value); // best way to create text
//   // const comment = document.createComment("this is comment");
//   const div = document.createElement("div");
//   const removeBtnDiv = document.createElement("div");

//   li.append(div, removeBtnDiv);
//   div.append(div_text);
//   // li.append(comment);
//   li.className = "task-item";
//   ulEl.append(li);

//   if (ulEl.children.length > 0) {
//     ulEl.style.background = "white";
//   }

//   createAlertViaDom("task updated");

//   // delete task
//   removeBtnDiv.setAttribute("onclick", "handleRemoveTask(event)");
//   removeBtnDiv.innerHTML = `<i class="fa-solid fa-trash"></i>`;

//   localStorage.setItem(
//     taskItemsKey,
//     // if already have items insert into array as new item or no item than create an empty array
//     // we cant directly add string into localstorage so we parse string into object
//     JSON.stringify([
//       ...JSON.parse(localStorage.getItem(taskItemsKey) || "[]"),
//       // save value as js object in array
//       { taskItem: inputEl.value },
//     ])
//   );
  
//   inputEl.value = "";
//   //show image after delete
//   handleRefreshView();
// };

// const handleSaveTask = saveBtnEl.addEventListener("click", handleAddTask);

// const getList = () => {
//   //fetch item from local storage. js cant show json value in html. so convert into js object
//   const fetchedTaskItem = JSON.parse(localStorage.getItem(taskItemsKey));

//   if (fetchedTaskItem !== null) {
//     fetchedTaskItem.forEach((item) => {
//       const li = document.createElement("li");
//       const div = document.createElement("div"); // for list item
//       const removeBtnDiv = document.createElement("div"); // for remove button

//       li.append(div, removeBtnDiv);

//       li.className = "task-item";
//       div.textContent = item.taskItem;

//       removeBtnDiv.parentElement.setAttribute(
//         "onclick",
//         "handleRemoveTask(event)"
//       );

//       removeBtnDiv.innerHTML = `<i class="fa-solid fa-trash"></i>`;

//       ulEl.append(li);
//     });
//   }
//   handleRefreshView();
// };

// inputEl.addEventListener("keyup", (e) => {
//   if (e.key === "Enter") {
//     handleAddTask();
//   } else if (e.key === "KeyZ") {
//     inputEl.value = "";
//   }
// });

// // this is works like useEffect
// const handleFetchTask = document.addEventListener("DOMContentLoaded", getList);
// // const handleFetchTask = document.addEventListener("load", getList);

// function handleRemoveTask(e) {
//   // targeting parent Node(li)
//   // <li> // parentNode
//   // <div> // parentNode
//   //  <i>delete icon</i> // e.target
//   // </div>
//   // </li>

//   // remove item from dom
//   let existingItem = e.target.parentNode.parentNode;
//   existingItem.remove();

//   if (ulEl.children.length > 0) {
//     ulEl.style.background = "white";
//   } else {
//     ulEl.style.background = "";
//   }

//   // remove items from local storage
//   const fetchedTaskItem = JSON.parse(localStorage.getItem(taskItemsKey));

//   // if you want to modify an existing array, you should use forEach, but if you want to create a new array based on an existing array, you should use map.
//   fetchedTaskItem.map((item) => {
//     if (item.taskItem === existingItem.innerText) {
//       // remove
//       fetchedTaskItem.splice(fetchedTaskItem.indexOf(item), 1);
//     } else {
//       console.log("item not found");
//     }
//   });

//   localStorage.setItem(taskItemsKey, JSON.stringify(fetchedTaskItem));
//   handleRefreshView();
// }

// const img = document.getElementById("show-image");
// const txt = document.getElementById("textlength");

// const handleRefreshView = () => {
//   // if(ulEl.children.length > 0){
//   //   img.hidden = true;
//   //   txt.innerText = `you have ${ulEl.children.length} items`
//   // }else{
//   //   img.hidden = false;
//   // }

//   // using terinary operator
//   txt.style.paddingTop = "20px";
//   txt.style.color = "#fff";

//   txt.innerText = `you have ${ulEl.children.length} items`;
//   ulEl.children.length > 0
//     ? ((img.style.display = "none"), (txt.style.display = "block"))
//     : ((img.style.display = "block"), (txt.style.display = "none"));

//   if (ulEl.children.length > 0) {
//     ulEl.style.background = "white";
//   } else {
//     ulEl.style.background = "";
//   }
// };

// // const userValue = prompt("what is your age")
// // console.log(inputEl.value);
// // inputEl.setAttribute("value", userValue)
// // const parse = parseInt(inputEl.value,10);
// // console.log(typeof parse);

// // console.log(inputEl.getAttribute("isAlive"));
// // inputEl.removeAttribute("isAlive")
// // console.log(inputEl.getAttribute("isAlive"));
// // console.log(inputEl.style);
// // console.log(inputEl.dataset.isAlive);

// // for (let attr of inputEl.attributes){
// //     console.log(attr.name);
// // }

// // let liEl = ulEl.getElementsByClassName("task-item")
// // ulEl.getElementsByTagName("div")
// // ulEl.getElementsByName("name")
// // console.log(liEl[0].innerText);
// // let allChat = [].map.call(liEl, (chat) => chat.textContent) // iterate all li element into an array
// // let allChat = Array.from(liEl).map((chat) => chat.textContent);

// // console.log(allChat);
// // let result = document.querySelector("li:last-child") // querySelector returns htmlCollection of single element
// // let result = document.querySelector("main input")
// // let result = document.querySelectorAll("li"); // querySelectorAll returns NodeList of group

// // console.log(result);

// // const list = ["running", "planning", "presentation"];

// // // // console.time()
// // const fragment = document.createDocumentFragment(); // memory element

// // list.forEach((item) => {

// //   const li = document.createElement("li");
// //   li.textContent = item;
// //   li.className = "chat-item";

// //   fragment.append(li);
// // console.log(item.nodeName);

// // });

// // for (let i = 0; i <= list.length; i++){
// //     const li = document.createElement("li");
// //     li.textContent = list[i];
// //     li.className = "chat-item";
// //     fragment.append(li);
// // }

// // for (let i in list){
// //     const li = document.createElement("li");
// //     li.textContent = list[i];
// //     li.className = "chat-item";
// //     fragment.append(li);
// // }

// // spread operator
// // [...list].forEach((item)=>console.log(item));

// // for (let item of list) {
// //   const li = document.createElement("li");
// //   li.textContent = item;
// //   li.className = "chat-item";
// //   fragment.append(li);
// // }
// // console.log(fragment);
// // ulEl.append(fragment); // create element in realtime

// // console.timeEnd()

// // let listItemsNew = document.querySelectorAll("#response-container li");

// // listItemsNew.forEach((element) => {
// //   element.addEventListener("mouseover", function () {
// //     element.style.transition = "opacity 0.5s ease";
// //     element.style.textDecoration = "line-through";
// //     element.style.backgroundColor = "#5CDB95";
// //     element.style.animation = "translateX 1s ease";

// //     setTimeout(() => {
// //       element.style.opacity = "0";
// //     }, 500);

// //     setTimeout(() => {
// //       element.remove();
// //     }, 1000);
// //   });
// // });

// // const ul2 = document.querySelector("#response-container :first-child")
// // console.log(ul2.nextSibling);
// // console.log(ul2.nextElementSibling.innerText);

// // const ul = document.querySelectorAll("#response-container li");
// // const listItems = [];

// // for (const item of list) {
// //   listItems.push(item);
// // }
// // // console.log(listItems);

// // const firstItem = document.querySelector("#response-container :first-child");
// // function replace() {
// //   const li = document.createElement("li");

// //   li.className = "chat-item";
// //   li.textContent = "replaced text";

// //   firstItem.replaceWith(li);
// // }
// // // replace();

// // const resyncBtn = document.getElementById("resync");
// // const duplicate = document.getElementById("duplicate");

// // // function handleClone(event){
// // //   alert("are you sure")
// // //   console.log(this);
// // // }

// // // dont use 'this' keyword in arrow function use event instead. because this keyword in arrow function specifies window instead of element
// // const handleClone = (event) => {
// //   alert("are you sure");
// //   console.log(event.target);

// //   // removing
// //   resyncBtn.removeEventListener("click", handleClone)
// // };

// // function handleClone2() {
// //   // alert("are you sure")
// //   duplicate.innerHTML = "";
// //   const clone = ulEl.cloneNode(true);
// //   duplicate.append(clone);

// // }

// // // resyncBtn.onclick = handleClone; // onclick has listen only single event. it is a drawback

// // resyncBtn.addEventListener("click", handleClone2); // addEventListener has listen multiple events
// // // resyncBtn.addEventListener("click", handleClone1,{ once: true });// addEventListener has listen multiple events

// // // const form = document.querySelector("#form")
// // // const div = document.querySelector("#div")
// // // const para = document.querySelector("#para")

// // // form.addEventListener('click', (event)=>{
// // //   alert("form")
// // //   // console.log(event.target.tagName);
// // // },{capture: false})

// // // div.addEventListener('click', (event)=>{
// // //   alert("div")
// // //   // event.stopPropagation();
// // //   // event.stopImmediatePropagation();
// // // })

// // // para.addEventListener('click', (event)=>{
// // //   alert("para")
// // // })

// // //event capturing mean parent to child target
// // //event bubbling mean child to parent target

// // // for (let elem of document.querySelectorAll("form, form *")){
// // //   elem.addEventListener("click", (e)=>{
// // //     console.log(`capturing: ${elem.tagName}`);
// // //   },{capture:true})

// // //   elem.addEventListener("click", (e)=>{
// // //     console.log(`bubbling: ${elem.tagName}`);
// // //   })
// // // }
