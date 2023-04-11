// JS CRASH COURSE 
// ASSIGNMENT 02

//Task 01:
// 1. Write a function that creates a closure and returns a function that can add
//a specific number to any number passed to it. For example, if the closure is
//created with 5, the returned function should add 5 to any number passed to it

function closureAdd(num1){
    return function(num2){
        console.log (num1+num2);
    }

}

let addNum = closureAdd(5);
console.log(addNum(10));
console.log(addNum(15));


//Task 02:
//2. Write a recursive function that searches an array for a specific value. The
//function should return true if the value is found, and false if it is not. You
//can assume that the array is not nested.

function searchArray(arr, val) {
    if (arr.length === 0) {
      return false;
    }
    if (arr[0] === val) {
      return true;
    }
    return searchArray(arr.slice(1), val);
  }
  
  function getUserInput() {
    let val = prompt("Enter a value to search for:");
    if (val === null) {
      return;
    }
    let arr = [1, 2, 3, 4, 5];
    let found = searchArray(arr, parseInt(val));
    if (found) {
      alert("The value ${val} was found in the array!");
    } else {
      alert("The value ${val} was not found in the array.");
    }
  }
  
  getUserInput();

  //Task : 03
  //Write a function that adds a new paragraph element to the bottom of an
  //HTML document. The function should take a string argument that will be
  //used as the text content of the new paragraph element.

  function addParagraph(text) {
    
    let newPara = document.createElement("p");
   
    let paraText = document.createTextNode(text);
  
    newPara.appendChild(paraText);
  
    let body = document.getElementsByTagName("body")[0];

    body.appendChild(newPara); }


    // Task : 04
    //Write a function that adds a new list item to an unordered list in an HTML
    //document. The function should take a string argument that will be used as
    //the text content of the new list item.
    function addListItem(text) {
       
        let newLi = document.createElement("li");
        
        let liText = document.createTextNode(text);
        
        newLi.appendChild(liText);
       
        let myList = document.getElementById("my-list");
        
        myList.appendChild(newLi);
      }

// Task : 05
//Write a function that changes the background color of an HTML element.
//The function should take two arguments: the first argument is a reference
//to the HTML element, and the second argument is a string representing
//the new background color.

function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
  }


  //Task : 06
  //Write a function that saves an object to localStorage. The function should
//take two arguments: the first argument is a string representing the key to
//use for storing the object, and the second argument is the object to store.

  function saveObjectToLocalStorage(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
  }

 let myObject = {
    name: "Farjad",
    age: 30,
    favoriteColor: "black"
  };
  
  saveObjectToLocalStorage("myObject", myObject);

  let storedObject = JSON.parse(localStorage.getItem("myObject"));
console.log(storedObject);

//Task : 07
//Write a function that retrieves an object from localStorage. The function
//should take one argument, which is a string representing the key used to
//store the object. The function should return the object.

function getObjectFromLocalStorage(key) {
    let storedItem = localStorage.getItem(key);
    return storedItem ? JSON.parse(storedItem) : null;
  }

  const storedObject1 = getObjectFromLocalStorage("myObject");
console.log(storedObject1);

//Task : 08
// Write a function that takes an object and saves each property to
//localStorage using the property name as the key and the property value as
//the value. The function should also retrieve the object from localStorage
//and return it as a new object.


function saveObjectPropertiesToLocalStorage(obj) {
    
    for (let prop in obj) {
      localStorage.setItem(prop, JSON.stringify(obj[prop]));
    }
  
    let newObj = {};
    for (let prop in obj) {
      newObj[prop] = JSON.parse(localStorage.getItem(prop));
    }
    return newObj;
  }

  let myObject1 = {
    name: "Ahmed",
    age: 29,
    favoriteColor: "blue"
  };
  
  let retrievedObject = saveObjectPropertiesToLocalStorage(myObject);
  console.log(retrievedObject);
  
