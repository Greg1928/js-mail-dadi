const validEmail = ["emailexample1@gmail.com", "emailexample2@gmail.com", "emailexample3@gmail.com"];

const userEmail = prompt("Enter Email");
console.log(userEmail);

/* indexOf Method */
/* if (validEmail.indexOf(userEmail) >= 0){
    console.log("Valid Email");
} else {
        console.log("!Warning, Invalid Email!");
    }
 */

/* Using for */
let check;
for ( let i=0; i<validEmail.length; i++ ){
    if ( userEmail === validEmail[i] ){
       check = true;
      } 
}
if (check === true){
    console.log("Valid Email")
}else {
    console.log("!Warning, Invalid Email!");
}
