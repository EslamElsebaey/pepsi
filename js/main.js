// selecting variables 

let myheader = document.getElementById("myheader");
let mainImg = document.getElementById("mainImg");


// main function 

document.addEventListener("click" , function (e){
  if (e.target.id == "blueSmallImg"){
     myheader.style.backgroundColor = "#005CB4";
     mainImg.src = "images/pepsi001.png";
  }else if(e.target.id == "whiteSmallImg"){
    myheader.style.backgroundColor = "#C9002B";
    mainImg.src = "images/pepsi002.png";
  }else if (e.target.id == "blackSmallImg") {
    myheader.style.backgroundColor = "#000";
    mainImg.src = "images/pepsi003.png";
  }
})


