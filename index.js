//   heart section create



const whiteHearts = document.getElementsByClassName("whiteHeart");
const redHearts = document.getElementById("redHeart");

let count = 0;


for (let whiteHeartse of whiteHearts){
    whiteHeartse.addEventListener("click" , function () { count++;
        document.getElementById("redHeart").innerText = count;
    })
}


// copy section start from here 

    