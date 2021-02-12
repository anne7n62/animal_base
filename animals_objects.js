"use strict";

window.addEventListener("DOMContentLoaded", start);

const allAnimals = [];

//Creating prototype for animal objects
const Animal = {
    name: "",
    type: "unknown",
    desc: "-unknown animal-",
    age: 0,
};


function start( ) {
    console.log("ready");

    loadJSON();
}


function loadJSON() {
    fetch("animals.json")
    .then( response => response.json() )
    .then( jsonData => {
        // when loaded, prepare objects
        prepareObjects( jsonData );
    });
}

function prepareObjects( jsonData ) {
    jsonData.forEach( jsonObject => {
        // TODO: Create new object with cleaned data - and store that in the allAnimals array
        
        
        //Splitting the string by the spaces
        const animal = Object.create(Animal);
        let animalData = jsonObject.fullname.split(" ");
        console.log(animalData);

        //Name - making variable
        let animalName = animalData[0];
        console.log(animalName);
        animal.name = animalName;

        //Description
        let animalDesc = animalData[2];
        console.log(animalDesc);
        animal.desc = animalDesc;

        //Type
        let animalType = animalData[3];
        console.log(animalType);
        animal.type = animalType;

        //Age - here we just need the jsonobject age
        let animalAge = jsonObject.age;
        console.log(animalAge);
        animal.age = animalAge;

    //Adding all the objects into the array
    allAnimals.push(animal);
    });

    displayList();
}

function displayList() {
    // clear the list
    document.querySelector("#list tbody").innerHTML = "";

    // build a new list
    allAnimals.forEach( displayAnimal );
}

function displayAnimal( animal ) {
    // create clone
    const clone = document.querySelector("template#animal").content.cloneNode(true);

    // set clone data
    clone.querySelector("[data-field=name]").textContent = animal.name;
    clone.querySelector("[data-field=desc]").textContent = animal.desc;
    clone.querySelector("[data-field=type]").textContent = animal.type;
    clone.querySelector("[data-field=age]").textContent = animal.age;

    // append clone to list
    document.querySelector("#list tbody").appendChild( clone );
}


