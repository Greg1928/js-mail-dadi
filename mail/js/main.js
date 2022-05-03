const validEmail = ["emailexample1@gmail.com", "emailexample2@gmail.com", "emailexample3@gmail.com"];

const userEmail = prompt("Enter Email");
console.log(userEmail);

if (validEmail.indexOf(userEmail) >= 0){
    console.log("Valid Email");
} else {
        console.log("!Warning, Invalid Email!");
    }
