// Selecting the cursor elements
let crsr = document.querySelector("#cursor");
let blur = document.querySelector("#cursor-blur");

// Adding an event listener for mouse movement
document.addEventListener("mousemove", function(dets) {
    // Updating the position of the cursor
    crsr.style.left = dets.x + 30 + "px";
    crsr.style.top = dets.y + 30 + "px";
    
    // Updating the position of the cursor blur effect
    blur.style.left = dets.x - 125 + "px";
    blur.style.top = dets.y - 125 + "px";
});

// Selecting all h4 elements within the navigation bar
let h4all = document.querySelectorAll("#nav h4");

// Adding event listeners for mouse enter and leave on each h4 element
h4all.forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        // Changing cursor style on mouse enter
        crsr.style.scale = 3;
        crsr.style.border = "3px solid #fff";
        crsr.style.backgroundColor = "transparent";
    });
    elem.addEventListener("mouseleave", function() {
        // Reverting cursor style on mouse leave
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95C11E";
        crsr.style.backgroundColor = "#95C11E";
    });
});

// GSAP animation for the navigation bar background color and height change on scroll
gsap.to("#nav", {
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true, // Uncomment to see markers for debugging
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
});

// GSAP animation for the main section background color change on scroll
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true, // Uncomment to see markers for debugging
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
    }
});

// GSAP animation for the about-us section images and text
gsap.from("#about-us img, #about-us-in", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        // markers: true, // Uncomment to see markers for debugging
        start: "top 60%",
        end: "top 58%",
        scrub: 2,
    }
});

// GSAP animation for the cards
gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        // markers: true, // Uncomment to see markers for debugging
        start: "top 70%",
        end: "top 65%",
        scrub: 2,
    }
});

// GSAP animation for the left quote
gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true, // Uncomment to see markers for debugging
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    }
});

// GSAP animation for the right quote
gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true, // Uncomment to see markers for debugging
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    }
});

// GSAP animation for the h1 element in page 4
gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        // markers: true, // Uncomment to see markers for debugging
        start: "top 75%",
        end: "top 70%",
        scrub: 3,
    }
});

// Placeholder text manipulation for the search box
let search = document.getElementById("Searchbox");
if (search) {
    // Clearing placeholder text on mouse over
    search.addEventListener("mouseover", function() {
        search.setAttribute("placeholder", " ");
    });

    // Restoring placeholder text on mouse out
    search.addEventListener("mouseout", function() {
        search.setAttribute("placeholder", "Search here");
    });
}
