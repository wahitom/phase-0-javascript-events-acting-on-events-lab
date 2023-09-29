// Your code here
 const dodger = document.getElementById("dodger");

/*dodger.style.backgroundColor = "#FF69B4";

//dodger.style.bottom = "100px";

dodger.style.bottom = "0px";

dodger.style.left = "0px"; */



document.addEventListener('keydown', function(event){

    if(event.key === "ArrowLeft"){
        moveDodgerLeft()
    }
    else if(event.key === "ArrowRight"){
        moveDodgerRight()
    }
});

function moveDodgerLeft(){
    const leftNum = dodger.style.left.replace("px", "")
    const left = parseInt(leftNum, 10)

    if(left > 0){
        dodger.style.left = `${left-1}px`
    }
}

function moveDodgerRight(){
    const rightNum = dodger.style.left.replace("px", "");
    const right  = parseInt(rightNum);

    if(right > 0){
        dodger.style.left = `${right+1}px`
    }
}