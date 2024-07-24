document.getElementById("dropButton").addEventListener("click", dropShow);
window.addEventListener("mousedown", dropHide);


function dropShow(){
    let myElement = document.getElementById("dropdown");
    if(myElement.style.visibility == "hidden"){
        myElement.style.visibility = "visible";
        myElement.classList.add("show");
    }else{
        myElement.style.visibility = "hidden";
        myElement.classList.remove("show");
    }
}

function dropHide(){  
    document.getElementById("dropdown").style.visibility = "hidden";
    let myElement = document.getElementById("dropdown");
    myElement.classList.remove("show");
}


