let cpuNumber = Math.floor(Math.random() * 6) + 1;
console.log("CPU Number : " + cpuNumber);

let userNumber = Math.floor(Math.random() * 6) + 1;
console.log("Your Number : " + userNumber);

if ( userNumber > cpuNumber ){
    console.log("User Win!");
} else if ( userNumber < cpuNumber ){
    console.log("CPU Win!");
}else {
    console.log("Same Score, click 'f5' to roll the dice again");
}
