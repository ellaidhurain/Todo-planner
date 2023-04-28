const form = document.querySelector("form");
const input = document.querySelector("form input");
const submitEl = document.querySelector("form input[type='submit']");
const checkbox = document.querySelector("form input[type='checkbox']");

const table = document.querySelector("table");

let selectedId; // undefined

// table.addEventListener("click", (e) => {
//   target = e.target;
//   // get a closest tr element
//   const closestTr = target.closest("tr");

//   // avoid selecting Table head
//   if (target.tagName === "TH") {
//     return;
//   }

//   if (selectedId != undefined) {
//     selectedId.classList.remove("active");
//   }

//   // get the value of target tr
//   selectedId = closestTr;

//   if (selectedId) {
//     selectedId.classList.add("active");
//   }

//   // console.log(e.target.textContent);
// });

// get form element using forms property. from forms we can get the attributes of form element
// contact is value name attribute
const formEl = document.forms.contact;

// // get elements in form using elements
// const inputForm = formEl.elements.name; name is value of name attribute
// const inputForm2 = formEl.name; // we can use this also
// const { Name, Checkbox, Submit } = formEl.elements; // formEl.elements returns object

const handleSubmit2 = (event) => {
 
  event.preventDefault()
  // destructuring is a technique for extracting values from complex data types such as arrays, objects, or tuples and assigning them to variables in a concise and efficient way.
  // Destructuring allows you to avoid writing repetitive code to access the individual elements of a data structure, and instead, you can extract the specific values you need and assign them to variables using a simplified syntax.

  // // destructuring an object
  const { name, email, checkbox, submit } = formEl.elements; // formEl.elements returns object

  // array destructuring
  // const [first, second, third] = [1, 2, 3];
  // console.log("form submitted");

  if (!checkbox.checked) {
    alert("accept terms and conditions");
  } else {
    // new is constructor which creates new instance. it is used to get all form input data
    const formData = new FormData(formEl); // returns key value data of form in array when formdata is driggered

    // formData returns array of array [[]]
    // Convert the array of arrays to an array of objects
    // [[]] => [{}]
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    localStorage.setItem(
      "contacts", // key

      // if already have items insert into array as new item or no item than create an empty array
      // we cant directly add string into localstorage so we parse string into object
      JSON.stringify([
        ...JSON.parse(localStorage.getItem("contacts") || "[]"),
        // save value as js object in array
        data,
      ])
    );
  }
  // Clear the form
  formEl.reset();

  // Update the contact list
  getContacts();
};


formEl.addEventListener("submit", handleSubmit2);

const contactList = document.querySelector("#contactList");
const getContacts = () => {
  const storedContacts = localStorage.getItem("contacts");
  if (!storedContacts) {
    console.log("No contacts found");
    return;
  }

  const fetchedContacts = JSON.parse(storedContacts);
  // Clear the existing rows from the contactList element
  contactList.innerHTML = "";
  if (fetchedContacts !== null) {
    fetchedContacts.forEach((contact) => {
      const { name, email, country, checkbox, type } = contact;

      const row = document.createElement("tr");
      row.classList.add("text-white");

      const nameCell = document.createElement("td");
      nameCell.classList.add("p-2", "border", "border-gray-400", "text-white");
      nameCell.innerText = name;
      row.appendChild(nameCell);

      const emailCell = document.createElement("td");
      emailCell.classList.add("p-2", "border", "border-gray-400", "text-white");
      emailCell.innerText = email;
      row.appendChild(emailCell);

      const countryCell = document.createElement("td");
      countryCell.classList.add(
        "p-2",
        "border",
        "border-gray-400",
        "text-white"
      );
      countryCell.innerText = country;
      row.appendChild(countryCell);

      const checkboxCell = document.createElement("td");
      checkboxCell.classList.add(
        "p-2",
        "border",
        "border-gray-400",
        "text-white"
      );
      checkboxCell.innerText = checkbox;
      row.appendChild(checkboxCell);

      const typeCell = document.createElement("td");
      typeCell.classList.add("p-2", "border", "border-gray-400", "text-white");
      typeCell.innerText = type;
      row.appendChild(typeCell);

      contactList.appendChild(row);
    });
  }
};

document.addEventListener("DOMContentLoaded", getContacts);

// const button = document.querySelector("#btn");
// const donate = document.querySelector(".donate");
// const input = document.querySelector(".donate input");

// button.addEventListener("click", (e) => {
//   // console.log(e.target);
//   if (!button) return;

//   if (donate.style.display === "block") {
//     donate.style.display = "none";
//   } else {
//     donate.style.display = "block";
//   }
// });

// donate.addEventListener("submit",(e)=>{
//   e.preventDefault();
//   alert(`Thanks for paying $${input.value}.`);
// })

// // document.addEventListener("copy",(e)=>{
// //   e.preventDefault();
// //   alert("copy is disabled")
// // })

// // document.addEventListener("mousedown",(e)=>{
// //   e.preventDefault();
// //   alert("mousedown")
// // })

// // document.addEventListener("mouseup",(e)=>{
// //   switch (e.which){
// //     case 1:
// //       alert("left click");
// //       break;

// //     case 2:
// //       alert("middle click");
// //       break;

// //     case 3:
// //       alert("right click");
// //       break;

//       // default:
//       //   alert("invalid key" +e.which);
//       //   break;
// //   }
// // })

// const handleFormData = (e) => {
//   console.log("form is fired");
//   e.preventDefault();
//   const formData = e.formData; // return all form data methods on submit event
//   // console.log(formData);

//   // formData methods
//   // formData.append("api-key", "328423oidjwefs"); // appending new data in formData
//   // let entries = [...formData.entries()]; // returns key and value. entries is iterator, which returns multiple values so we can convert in array and copy value using spread operator.
//   // // let values = [...formData.values()] // returns values
//   // let get = formData.get("name"); // get a particular value based on key
//   // let getAll = formData.getAll("type"); // get all value
//   // let has = formData.has("email"); // check if the value has
//   // formData.set("hobbies", "learning new things"); // set new property
//   // let key = [...formData.keys()]; // return all key
//   // // console.log(values);
//   // formData.delete("hobbies");
//   // let values = [...formData.values()];
//   // // console.log(entries);
//   // // console.log(key);
//   // // console.log(values);
//   // // console.log(entries);

// };

// formEl.addEventListener("formdata", handleFormData); // when submitting form this formdata event listen all form data we entered and sends to new FormData(formEl). by accessing formEl we can get all values

// // sending data to server using query and json

// const handleSubmit3 = (e) => {
//   e.preventDefault();
//   // content-type: application/x-www-form-urlencoded

//   // ?name=Ina+Klein&email=bowy%40mailinator.com&type=on&Submit=Submit
//   // new is constructor which creates new instance
//   const formData = new FormData(formEl); // returns key value data of form in array of array
//   const data = [...formData.entries()];

//   // format to sending data to server
//   // method 1 (query string)
//   // const dataString = data.map((x) =>`${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`).join('&')

//   // we can destructure above function like this
//   // const dataString = data
//   //   .map(
//   //     ([key, value]) =>
//   //       `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
//   //   )
//   //   .join("&");

//   // console.log(dataString); // old method

//   // const dataString2 = new URLSearchParams(data).toString(); // new method

//   // console.log((dataString2));

//   // method 2 (JSON) proper way of sending data to server
//   const objectData = Object.fromEntries(formData); // returns form data in object format
//   const jsonData = JSON.stringify(objectData); // converts objectData in json format

//   console.log(objectData,jsonData);

// };

// formEl.addEventListener("submit", handleSubmit);

// const handleSubmit4 = (e) => {
//   e.preventDefault();
//   // 1. xmlHttpRequest() // old method
//   let xhr = new XMLHttpRequest(); // initialize new request

//   // xhr.open("GET", "https://reqres.in/api/users/2", {async:true}); // async true means load data without refresg
//   // xhr.onload = function () {
//   //   const para = document.querySelector("#api_data");
//   //   const jsonData = xhr.responseText;
//   //   const obj = JSON.parse(jsonData);

//   //   para.innerText = obj.data.first_name
//   // }

//   // xhr.send();

//   const formData = new FormData(formEl); // returns key value data of form in array of array

//   const jsonData = JSON.stringify(Object.fromEntries(formData));

//   // 2. fetch() fetch is asynchronous function. not wait for response.
//   fetch("https://reqres.in/api/users/2", {
//     method: "POST",
//     headers: {
//       Content_Type: "application/json",
//       // Content_Type: "application/x-www-form-urlencoded", // MIME
//     },
//     body: jsonData,
//   });

//   fetch("https://reqres.in/api/users/2", {
//     method: "GET",
//   })
//     .then((res) => res.json())
//     .then((res) => {
//       const para = document.querySelector("#api_data");
//       para.innerText = JSON.stringify(res.data);
//     });
// };

// formEl.addEventListener("submit", handleSubmit);

// const nameEl = formEl.elements.name

// // 1. attributes
// // nameEl.disabled = true;
// // nameEl.readOnly = true;

// // 2. Events
// nameEl.addEventListener("focus", ()=> console.log("focused"));
// nameEl.addEventListener("blur", ()=> console.log("blured"));
// // nameEl.addEventListener("input", (e)=> console.log(e.target.value));
// nameEl.addEventListener("change", (e)=> console.log(e.target.value));

// // 3. methods
// nameEl.focus();
// nameEl.blur();

// const handleSubmit = (e) => {
//   e.preventDefault();

//   const formData = new FormData(formEl); // returns key value data of form in array of array

// };

// formEl.addEventListener("submit", handleSubmit);

// // Other events
// nameEl.addEventListener("cut", ()=> console.log("cut"));
// nameEl.addEventListener("copy", ()=> console.log("copy"));
// nameEl.addEventListener("paste", ()=> console.log("paste"));

// // const radio = document.querySelector("#form")
// const radio = formEl.elements.type; // returns RadioNodeList
// const inputEls = document.querySelector("#form");

// const allCatagories = [...radio]; // returns all radio elements in form
// // console.log(inputEls);

// // allCatagories[0].checked = true;

// inputEls.addEventListener("change", (e) => {
//   // method 1
//   // const checked = allCatagories.find((category)=>{
//   //   return category.checked
//   // })

//   // console.log(checked.value);

//   // method 2
//   const checked2 = e.target.value;
//   console.log(checked2);

//   //alert has first priority so we use timeout to checked
//   setTimeout(() => {
//     if ((e.target.checked = true)) {
//       alert(`option ${e.target.value} checked!`);
//     }
//   }, 1000);
// });

// const formEl = document.forms.contact;
// const countryEl = formEl.elements.country;

// // // countryEl.value ="IND";
// // countryEl.selectedIndex = 1;
// // countryEl.options.selectedIndex; // to get index value
// // console.log(countryEl.value);

// countryEl.addEventListener("change", (e) => {
//   const option_value = e.target.options[e.target.selectedIndex].value;
//   const option_text = e.target.options[e.target.selectedIndex].text;
//   console.log(option_value, option_text);
// });

// const newOption = document.createElement("option");

// newOption.value = "AF";
// newOption.text = "africa";

// const option = new Option("africa", "AF");

// countryEl.add(newOption, 3);
// countryEl.add(option, 4);
// countryEl.remove(4);
