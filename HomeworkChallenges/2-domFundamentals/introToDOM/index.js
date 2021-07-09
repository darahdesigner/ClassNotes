// const header = document.getElementById("header");

// header.style.color = "pink";
// header.innerText = "Hello World";

// // const aboutMe = document.getElementById("about-me");

// // aboutMe.style.color = "orange";

// let errorList = document.getElementsByClassName("error-list"); //classes pull all elements into an array

// errorList[1].innerText = "I changed error 2"

// // for (let i = 0; i<=errorList.length; i++){
// //     errorList[i].style.color = "red";
// // }

// // example 2 looping

// for(error of errorList) {
//     error.style.color="green";
// }

// //Example 3 Looping forEach WILL NOT WORK

// //errorList.forEach((error) => (error.style.color = "purple")); //does not work because it is like an array, but it is NOT an array

// const tags = document.getElementsByTagName("p");
// console.log(tags)
// tags[0].innerText = "You've got to leave me now, you've got to go alone, you've gotta chase your dream, one that's all your own, before it slips away. When you're flying high, take my heart along. I'll be the harmony to every lonely song that you'll learn to play. And when you're soaring through the air, I'll be your solid ground. Take every chance you dare, I'll be right there, when you come back down. When you come back down."

// const listTags = document.getElementsByTagName("li")
// console.log(listTags)
// // listTags[0].style.fontStyle = "italic"
// // listTags[1].style.fontStyle = "italic"

// for (let i = 0; i<listTags.length; i++){
//     listTags[i].style.fontWeight = "bold";
// }

// const header = document.querySelector("h1"); //QUERY SELECTOR ONLY PULLS FIRST INSTANCE
// header.style.color = "purple"; 

// const header = document.querySelector("#header")
// header.style.fontStyle = "italic";
    
const errorList = document.querySelector(".error-list")
errorList.style.fontStyle = "italic";

const headerTags = document.querySelectorAll("h1");
headerTags[1].style.color = "red";

headerTags.forEach (h =>{
    h.style.color="blue"
})