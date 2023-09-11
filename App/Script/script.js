const hamburger = document.getElementById("hamburger");
const hamburger_menu = document.getElementById("hamburger-menu");
const linkElms = document.querySelectorAll(".link");
const pathName = window.location.pathName;

// Crew:-
// Getting the content slide:-
const slidecontent = document.querySelectorAll(".crew__content");

// Getting the dots:-
const dots = document.querySelectorAll(".dot");

// Technology:-
// Getting the content container:-
const techcontent = document.querySelectorAll(".technology__content");

// Getting the Indicators circle:-
const circle = document.querySelectorAll(".circle");


// Mobile-Hamburger:
hamburger.addEventListener("click", function() {

    if (hamburger_menu.classList.contains("fade-in")) { //Close Menu
        hamburger.classList.remove("open__toggle");
        hamburger_menu.classList.add("fade-out");
        hamburger_menu.classList.remove("fade-in");
        return console.log("Closing Hamburger Menu.")
    }

    else { // Open Menu
        hamburger.classList.add("open__toggle")
        hamburger_menu.classList.add("fade-in");
        hamburger_menu.classList.remove("fade-out");
        return console.log("Opening Hamburger Menu.")
    }
})


// Active Nav-links for Desktop:-
linkElms.forEach(linkElms => {linkElms.addEventListener("click", function() {
    linkElms.classList.add("active");
    console.log("Link is been Clicked.")
})})

// Active Planet Nav-link for Destination:-
var counter = 0;


// Slide Next:-
function slideNext() {
    slidecontent[counter].style.animation = "next1 1000ms ease-in forwards"

    if (counter >= slidecontent.length-1) {
        counter = 0;
    }
    else {
        counter++;
    }
    slidecontent[counter].style.animation = "next2 1000ms ease-in forwards";
    indicators();
}

// Slide Prev:-
function slidePrev() {
    slideimage[counter].style.animation = "prev1 500ms ease-in forwards";
    
    if (counter == 0) {
        counter = slideimage.length-1;
    }
    else {
        counter--;
    }
    slideimage[counter].style.animation = "prev2 500ms ease-in forwards";
    indicators();
}

// Auto-sliding:-
function autoSliding() {
    deletinterval = setInterval(timer, 5000);
    function timer() {
        slideNext();
        indicators();
    }
}
// autoSliding();


// Add and Remove active indicator:-
function indicators() {
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" openned", " ");
    };
    dots[counter].className += " openned"; 
}


// Add click event to the Indicators:-
function switchContent(currentImage) {
    currentImage.classList.add("openned");
    var imageId = currentImage.getAttribute("attr");
    if (imageId > counter) {
        slidecontent[counter].style.animation = "next1 500ms ease-in forwards";
        counter = imageId;
        slidecontent[counter].style.animation = "next2 500ms ease-in forwards";
    }
    else if (imageId == counter) {
        return;
    }
    else {
        slidecontent[counter].style.animation = "prev1 500ms ease-in forwards";
        counter = imageId;
        slidecontent[counter].style.animation = "prev2 500ms ease-in forwards";   
    }
    indicators();
}




// Technology Slider:-
var count = 1;
displayContent(count);

function nextContent(n) {
    displayContent(count += n);
}

function currentContent(n) {
    displayContent(count = n);
}

function displayContent(n) {
    var i;

    if (n > techcontent.length) {
        count = 1;
    }

    if (n < 1) {
        count = techcontent.length;
    }

    for (i = 0; i < circle.length; i++) {
        circle[i].className = circle[i].className.replace(" active", "");
        techcontent[i].style.visibility = "hidden";
    }

    techcontent[count - 1].style.visibility = "visible";
    circle[count - 1].className += " active";
}