// import { apiKey } from './util.js';
// import apiKey from './util.js';
// import * as util from './util.js';
// console.log(util.abc);

// import { apiKey, abc as content } from "./util.js";

// console.log(content);

// const userMessage = "Hello World!";

// console.log(userMessage);

// if(10 === 10){
//     console.log("Baraz");
// }

// function createGreeting(userName = "Filan", userLastName = "Fisteku") {
//     // console.log("Hello there " + userName + " " + userLastName + " you are awesome!");
//     return "Hi, I am " + userName + " " + userLastName + "!";
// }

// const greeting = createGreeting("Erblin", "Gashi");
// console.log(greeting);


// const greeting1 = createGreeting("Dardan", "Deda");
// console.log(greeting1);

// export default (userName, userLastName) => {
//     console.log('Hello');
//     return userName + userLastName;
// }

// const user = {
//     name: 'Erblin',
//     age: 34,
//     greet(){
//         console.log("Hello!");
//         console.log(this.age);
//     }
// };

// console.log(user.name);
// user.greet();

// class User {

//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     greet(){
//         console.log("Hi!");
//     }
// }

// const user1 = new User("Erblin", 34);
// console.log(user1);
// user1.greet();

// const hobbies = ["Cycling", "Reading", "Running"];
// console.log(hobbies[2]);

// hobbies.push("Working");
// console.log(hobbies);

// const index = hobbies.findIndex((hobby) => hobby === "Reading");

// console.log(index);

// const excitedHobbies = hobbies.map((hobby) => ({text: hobby}));

// console.log(excitedHobbies);

// const [firstName, lastName] = ["Erblin", "Gashi"];
// console.log(firstName);
// console.log(lastName);

// const {name: userName, age} = {
//     name: "Max",
//     age: 30,
// };

// console.log(userName);
// console.log(age);

// const hobbies = ["Sports", "Coocking"];
// const user = {
//     name: "Max",
//     age: 30
// };

// const newHobbies = ["Reading"];

// const mergedHobbies = [...hobbies, ...newHobbies];

// const extendedUser = {
//     isAdmin: true,
//     ...user,
// };

// console.log(extendedUser);

// const password = prompt("Your password");

// if(password === "Hello"){
//     console.log("Hello works")
// } else if (password === "hello"){
//     console.log("hello works");
// } else {
//     console.log("Access denied!");
// }

// const hobbies = ["Sports", "Coocking"];

// for (const hobby of hobbies) {
//     console.log(hobby);
// }


// function handleTimout(){
//     console.log("Timed out!");
// }

// const handleTimout2 = () => {
//     console.log("Timed out ... again!")
// }

// setTimeout(handleTimout, 2000);
// setTimeout(handleTimout, 3000);
// setTimeout(() => {
//     console.log("more timing out...");
// }, 4000);

// function greeter(greetFn){
//     greetFn();
// }

// greeter(() => console.log("Hi!"));

// function init() {
//     function greet(){
//         console.log("hi!");
//     }
//     greet();
// }
// init();

// let userMessage = "Hello";
// userMessage = userMessage.concat("!!!");

// console.log(userMessage)

// const hobbies = ["Sports", "Coocking"];
// hobbies.push("Working");
// console.log(hobbies);