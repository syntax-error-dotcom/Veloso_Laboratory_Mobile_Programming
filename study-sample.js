//variable
//let - declaration
//constant  - declaration and unchangeable
// use typeof to see the data type of the variable (ex. console.log(typeof name));
// let name  = "caelus";
// let trailblazer_lvl = 70;

// console.log(`I am ${name} and my trailblazer level is ${trailblazer_lvl}`);




// let username;

// username = window.prompt("What is your name?: ");
// console.log(`hello ${username}, welcome to the JS!`)
document.getElementById("submit").onclick = function() {    
    username = document.getElementById("myusername").value;
    document.getElementById("username").textContent = `Hello ${username}, welcome to the JS!`;

}