// let keyword
let userEmail = "thartchermac19@gmail.com";
let age = 30;
let name = "MacT";

age = age + 1;
console.log(age);

// const key

let points = 100;
points = 50;
console.log(points);

// currency converter assg zac

let USD = 1200;
let AUD = USD * 1.5;
console.log(AUD);

//TYPE OF NULL AND UNDEFINE
console.log(typeof "test"); //string
console.log(typeof 5); //number
console.log(typeof true); //boolean

let tesVal;
console.log(typeof tesVal); // undefined

let testVal = "love";
if (testVal) {
  console.log("it's assigned");
}
console.log(typeof testVal); // string

coupon = null;
console.log(typeof null); //object
console.log(null == undefined); //true
console.log(null === undefined);
console.log(typeof undefined);

// let coupon = "20off";
// console.log(typeof coupon) // string

// compare  Condition you cant have an else or else if without an if but you can have if without else and else if
let orderAmount = 120;
let discount;

if (orderAmount < 50) {
  discount = "0%";
} else if (orderAmount > 50 && orderAmount < 100) {
  discount = "10%";
} else {
  discount = "20%";
}
console.log(discount);

let hasMembership = false;
let signIn = true;
if (hasMembership === true) {
  console.log("show user the video");
} else if (signIn === true) {
  console.log("tell user to upgrade their account");
} else {
  console.log("tell user to log in");
}

// logical operator &&,||

let newAge = 18;
let hasId = false;

if (newAge >= 18 || hasId === true) {
  console.log("enter the club");
}

// falsey values null, NaN,FALSE,'',undefined truthy values 1,100,'mac is cool',{],[]
let nwAge = 18;
let myId = false;

if (12) {
  console.log("enter the club");
}

// ternary compare if order is greater than $100,GIVE promo 20% shortcut to write if else
const orderPrice = 200;
let promo = orderPrice > 100 ? "20%" : undefined;
console.log(promo);

let isRaining = true;
isRaining ? console.log("it is raining") : console.log("it is not raining");

// dynamic whats inside the string changing base to the value of the variable

let userAge = 15;
if (userAge > 18) {
  console.log(`you're ${userAge} year old ,you may enter`);
} else if (userAge === 18) {
  console.log(`you just turn ${userAge} ,welcome!`);
} else {
  console.log(`you're ${userAge} year old,step out!`);
}
let str = userAge >= 18 || hasId ? "you may enter" : "you may not enter";
console.log(str);

let loggedIn = true;
let membership = true;

let string = loggedIn && membership ? "show video" : "don't show video";
console.log(string);

loggedIn && membership
  ? console.log("show video")
  : console.log("don't show video");

// while (condition){} if you use true its going to mcrash

let counter = 1;
while (counter <= 20) {
  console.log(counter);
  counter = counter + 1;
}
console.log("while loop finished running");

//for loop i++   i+=2
for (let i = 1; i < 15; i = ++i) {
  console.log(i);
  if (i % 5 === 0) {
    console.log(`${i} asap-frontend`);
  } else if (i % 2 === 0) {
    console.log(`${i} - frontend`);
  } else {
    console.log(`${i} - asap`);
  }
}

let strings = "asap frontend";
for (let i = 0; i < strings.length; ++i) {
  console.log(strings[i]);
}

// functions

// array ["Rice","egg","milk","oil"] one parameter no parathhensis needed
let array = [20, 15, 10, 30];
console.log(array["0"]);
console.log(array.length);
console.log(array[array.length - 1]);

//add element array method mutating changes made
array.push("bread");
console.log(array);

//array method filter non mutating
// let filteredArray=array.filter((element) => {
//     console.log(element);{
//     if (element<= 15)
//     return true;
//     }
// });
// console.log(filteredArray)

let filteredArray = array.filter((element) => {
  return element <= 15;
});
console.log(filteredArray);

let people = [10, 16, 18, 20, 25];
let adults = [];
let adult = people.filter((element) => element >= 18);
console.log(adult);

// looop through an array of elements

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] >= 18) {
    adults.push(people[i]);
  }
}
console.log(adults);

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[1] <= 20) {
    adults.push(people[i]);
  }
}

console.log(adult);

// map method non

let arrays = [1, 2, 3, 4, 5];

let newArrays = arrays.map((element) => {
  console.log(element);
  return null;
});
console.log(newArrays);

let usDollar = [10, 20, 30, 40];

let auDollar = [];

let aud = usDollar.map((element) => element * 1.5);
console.log(aud);

for (let i = 0; i < usDollar.length; ++i) {
  auDollar.push(usDollar[i] * 1.5);
}
console.log(auDollar);

// zac's array
const motel = ["Ms. Mac", "Ms.Natty", "Ms. Thartcher"]; //shorter

console.log(motel.length);
console.log(motel[2]);
console.log(motel[1]);
console.log(motel[0]);

const hotel = [];

hotel[0] = "Ms. Mac";
hotel[1] = "Ms.Natty";
hotel[2] = "Ms. Thartcher";

console.log(hotel[2]); // for  length    console.log(hotel.length);

//in array we can alsoput string/loolean/number/object and also array

const newArray = [
  "string",
  true,
  1,
  3,
  { name: "Thartcher" },
  [2, 4, 6],
  "love",
];
console.log(newArray[newArray.length - 1]);
console.log(newArray[5][2]);

// build in function console.log(newArry.isArray[array])

//unpacked array

// destructuring assignment
const fulName = ["Mac", "Thartcher", "princess"];
const [fistNme, lastName, third] = fulName;
console.log(fistNme, lastName, third);

// const fullName = ['Tom', 'Cruise'];
// const [name, surname] = fullName;

// console.log(name); // 'Tom'
// console.log(surname); // 'Cruise'

const arr1 = ["Salmon", "Kale", "Spinach", "Green tea", "Healthy fats"];
const arr2 = ["Alcohol", "Beef", "Processed food"];
const arr3 = [...arr1, ...arr2];
console.log(arr3); //'Salmon','Kale', 'Spinach','Green tea','Healthy fats','Alcohol','Beef', 'Processed food'

// put two obj together
const obj1 = { foodsToEat: "Salmon", foodsToAvoid: "processed food" };
const obj2 = { drink: "water", toAvoid: "Alcohol" };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

// OBJECTS store multiple properties in a single variable

let users = [
  {
    email: "natty@gmail.com",
    password: "n1234",
    name: "Natty T",
    discord: "nattydiscord",
    subscription: "VIP+",
    lessonsCompleted: [1, 2, 3],
  },

  {
    email: "nmac@gmail.com",
    password: "m1234",
    name: "Mac T",
    discord: "macdiscord",
    subscription: "VIP+",
    lessonsCompleted: [1, 2, 3],
  },
];

// console.log(users[0].lessonsCompleted.map((element) => element * 3));

// assign
function signUp(user) {
  users.push(user);

  // email,
  // password,
  // name,
  // subscription,
  //  discord,
  //  lessonsCompleted
  // }) {
  //     let user= {
  //         email: email,
  //         password:password,
  //         name:name,
  //         discord:discord,
  //         subscription: subscription,
  //         lessonsCompleted: lessonsCompleted,
  //     }
}
signUp({
  email: "m@gmail.com",
  password: "t1234",
  name: "Mac Thartcher",
  subscription: "VIP+",
  discord: "Macdiscord",
  lessonsCompleted: [1, 2],
});
console.log(users);

// zac's

const student = {
  name: "Mac",
  age: 30,
  studentId: 1234,
  // to add function
  sayHi: function (className) {
    console.log("hello," + className + "!");
  },
};
student.sayHi("Thartcher"); //call the function
console.log(student);

console.log(student.age);
console.log(student["age"]);

const studentIdKeyName = "studentId";
console.log(student[studentIdKeyName]);

// to delete an object
delete student.age;
console.log(student);
student["alcoholLevel"] = "60%";
console.log(student);

// to add an object
student.name = "Daddy";
console.log(student.name);

// check if property exist
console.log("name" in student);
console.log("size" in student);

// object reference 2 different box store same reference to same object
let car = { name: "Royce" };
let referenceToSameCar = car;

car.name = "BMW";
console.log(car);

// ZAC'S LOOP
for (let i = 0; i < 1000; i = i + 1) {
  console.log(i);
}

const tvShows = ["Game of Thrones", "Last of us", "Breaking Bad"];
for (let i = 1; i < tvShows.length; i++) {
  if (i === 1) {
    continue;
  }
  console.log(tvShows[i]);
}

const series = ["Game of Thrones", "Last of us", "Breaking Bad"];
for (const show of series) {
  console.log(show);
}

const actor = {
  name: "Tom",
  surname: "Cruise",
  age: 60,
};

for (const key in actor) {
  console.log(key);
}
// // const actor = {
//   name: 'Tom',
//   surname: 'Cruise',
//   age: 60
// };

// for (const key in actor) {
//   console.log(key, actor[key]);
// }

// while loop
let loopCounter = 0;

while (loopCounter < 3) {
  console.log(loopCounter);
  loopCounter += 1;
}

// 5yrold explanation
for (let i = 1; i <= 5; i++) {
  console.log("Yum! Cookie number " + i);
}

// do while
// let loopCounter = 4;
// do {
//   console.log(loopCounter);
// } while (loopCounter < 3)

// js switch (zac)

const dateNow = new Date().getDay() + 1;
let curRentDayName;
switch (dateNow) {
  case 0:
    curRentDayName = "Kyriaki";
    break;
  case 1:
    curRentDayName = "Tiftera";
    break;
  case 2:
    curRentDayName = "Triti";
    break;
  case 3:
    curRentDayName = "Tetarti";
    break;
  case 4:
    curRentDayName = "Pempti";
    break;
  case 5:
    curRentDayName = "Paraskevi";
    break;
  case 6:
    curRentDayName = "Savvato";
    break;
  default:
    curRentDayName = "Unknown";
}

console.log("Tomorrow is " + curRentDayName);

// dom travesal (query selector)

// const parent = document. getElementById("#parent")
// console.log(parent)

// const parent = document.querySelector(".parent");

// const child = parent.children[0];
// console.log(child);

// dom manipulation
const element = document.querySelector("p");
element.innerText = "<span>LOL</span>";

// const valueFromUse = prompt("just learn:");
// paragraph.innerHTML = "<span> +valueFromUse + </span>";

// console.log(element);

// document.body.append("HELLO!");

// const paragraph = document.createElement('p')
// document.body.append(paragraph)
// paragraph.remove()

const paragraph = document.querySelector("p");
console.log(paragraph.innerText);
console.log(paragraph.textContent);

// event

// const element = document.querySelector("#submitForm");
// element.addEventListener("click", sayHi, { once: true });

// function sayHi() {
//   alert("Submitted!");
// }

// function sayHi(){
//   alert('Hi');
// }
// function sayBye (){
//   alert('Bye')
// }
// const button = document.querySelector('button');
// button.addEventListener('click',function(){
//   sayHi();
//   sayBye();
// })
const child = document.querySelector(".child");
child.addEventListener("click", function () {
  console.log("child clicked");
});

child.addEventListener(
  "click",
  function () {
    console.log("child clicked in capture mode");
  },
  { capture: true }
);

const parent = document.querySelector(".parent");
parent.addEventListener("click", function () {
  console.log("parent clicked");
});

parent.addEventListener(
  "click",
  function () {
    console.log("parent clicked (in capture mode)");
  },
  { capture: true }
);

const body = document.querySelector("body");
body.addEventListener("click", function () {
  console.log("body clicked");
});

body.addEventListener("click",function (event) {
    event.stopPropagation();
    console.log("body clicked (in capture mode)");
  }, { capture: true });





  
// javascript classes syntax
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   get name() {
//     return this._name;
//   }

//   greet() {
//     console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
//   }
// }

class User {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (!value) {
      console.log("Name can't be empty.");
      return;
    }
    this._name = value;
  }

  static greetEveryone() {
    console.log("Hello, users!");
  }
}


// javascript object prototype
const animal = {
eats: true,
eat: function(food) {
console.log(`I'm eating ${food}`);
}
};
const cat = {
meows: true
};
cat.__proto__ = animal;
console.log(cat.meows); // true
console.log(cat.eats); // true
cat.eat('Fish'); // I'm eating
