
const won = document.getElementById("won");
const lost = document.getElementById("lost");
const draw= document.getElementById("draw");
const btn = document.getElementById("btn");

btn.addEventListener("click",
    function(){
        let cpuNumber = Math.floor(Math.random() * 6) + 1;
        console.log("CPU Number : " + cpuNumber);
        document.getElementById("cpu").innerHTML = cpuNumber;
        let userNumber = Math.floor(Math.random() * 6) + 1;
        console.log("Your Number : " + userNumber);
        document.getElementById("user").innerHTML = userNumber;
        if(lost.classList.contains("active") || won.classList.contains("active") || draw.classList.contains("active")){
            won.classList.remove("active");
            lost.classList.remove("active");
            draw.classList.remove("active");
        }
        if ( userNumber > cpuNumber ){
            won.classList.add("active");
            console.log("User Win!");
        }else if ( userNumber < cpuNumber ){
            console.log("CPU Win!");
            lost.classList.add("active");
        }else {
            console.log("Same Score, click 'Roll' to roll the dice again");
            draw.classList.add("active");
    }
});



