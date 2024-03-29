# Nebula - Space Tourism Website

Nebula is Frontend Mentor Project where you can practice with layouts and basic JavaScript card carousel. 

## Table of Content
* [Overview](#overview)
  *  [The Challenge](#challenge)
  *  [Screenshots](#screenshots)
  *  [Website Preview Links](#livepreview)
  * [Features](#features)


* [My Process](#process)
  *  [Build with](#builtwith)
  *  [My Learnings](#mylearning)

*  [Author](#author)
*  [Acknowledgements](#builtwith)
*  [Useful Links](#usefullinks)


## Overview[](#overview)

**The Challenge**

Coding card carousel for crew, technology and destination was new for me, However I managed to code a beautiful effect.

**Screenshots**

![Moon Destination Desktop](https://github.com/J11tendra/Nebula/assets/108735984/4a111f1d-f19e-4964-b41b-9c605384bfa9)

![Launch Vehicle Desktop](https://github.com/J11tendra/Nebula/assets/108735984/9b9a88db-6d06-470e-80b7-937dbbc5f279)


**Features**

-  Fully responsive website
-  Sematic HTML5 markdown
-  Scalable clean code
-  Mobile first approach
-  Multipage
  
## My Process

Started the project with simple HTML5 boilerplate and created separate SCSS and JavaScript folder for scalability.Then I went on creating variables for colors, font sizes and font weights.

I created separate file for each universal section of website such as navigation bar and footer. Made use of "Global.scss" file to create base styling for the project which include all margins, paddings, font sizes, font color, and button styles. I placed all images and svg in separate folder for better debugging.

Firstly the navigation bar was coded for mobile and then moved to the larger display sizes. Natural responsiveness approach was used to reduce the use of media queries.

The Destination was quite interesting to code as it involved new features that were new to me.

The Technology, and Crew page both followed a same struture for card effect.

The rest all development was combination of flex, grid and long hours of debugging.

**Built with**

![javascript4](https://github.com/J11tendra/Nebula/assets/108735984/d8fe660b-cc58-46ed-af40-e36066015e75)
![scss3](https://github.com/J11tendra/Nebula/assets/108735984/1431621e-15b6-4d0a-9eea-66d41193114c)



**My learnings**

This project has been my learning ground as it pushed me to research about the bugs i encounter during development and found out some better methods to deal with the project.

The Challenging part carousel effect.
    
    // Add and Remove active indicator:-
    function indicators() {
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" openned", " ");
        };
        dots[counter].className += " openned"; 
    }

For Click Indicator effect:-

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


For Technology page slider:-


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


For Prev Feature:-

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

For Next feature:-

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

    
## Author

Website Design: Frontend Mentor

Development: Jitendra Choudhary


## Acknowledgement

Finally I'd like to thanks all resources i used during the development process that includes Frontend Mentor, all Fontawesome icons and Freepik images.


## Useful Links

_If you would like to improve the project or have a suggestions, feedback or issues. Feel free to contact me on the above links and i'd happy to respond._

Email: [Jitendra Choudhary](info.jiitendra@gmail.com)

Twitter: [JiitendraC](https://twitter.com/JiitendraC)
