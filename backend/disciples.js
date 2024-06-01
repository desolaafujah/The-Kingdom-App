//contains database schema defintions and models

//this is how to import properties from other files
//import properties from userController.js
const { people, ages } = require('./userController');

console.log(people, ages);

//to find out information about the OS
const os = require('os');
console.log(os.platform(), os.homedir());


const fs = require('fs');

//USE THIS TO IMPORT FONTS AND ALL THAT OTHER COOL STUFF


//THE FILE SYSTEM 

//reading files
fs.readFile('./external/blog1.txt', () => {
    //once the file is read, it will fire a callback function
})


//writing files 




//directories 



//deleting files 