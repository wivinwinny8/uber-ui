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



const btnScrollToTop = document.querySelector(".scrollup");

// scroll to top of page when button clicked
btnScrollToTop.addEventListener("click", e => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});

// toggle 'scroll to top' based on scroll position
window.addEventListener('scroll', e => {
  btnScrollToTop.style.display = window.scrollY > 500 ? 'block' : 'none';
});
