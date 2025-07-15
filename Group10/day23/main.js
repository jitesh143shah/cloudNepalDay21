// access all the images once
let slideImages = document.querySelectorAll("img");
// console.log("slideImages");
// Access next and previous button
let nextBtn = document.querySelector(".next");
// let nextBtn=document.getElementsByClassName("next")[0];
let prevBtn = document.querySelector(".preview");
// access the indicators
let indicators = document.querySelectorAll(".dot");
let counter = 0;
let imageCount;
// console.log(indicators)
//function next button
nextBtn.addEventListener("click", sliderNext);
function sliderNext() {
    slideImages[counter].style.animation = "next1 0.2s ease-in forwards"
    if (counter >= slideImages.length - 1) {
        counter = 0;
    }
    else {
        counter++;
    }
    slideImages[counter].style.animation = "next2 ease-in 0.2s forwards "
    updateIndicator();
}



//Functio for preview images
prevBtn.addEventListener("click", sliderPreview);
function sliderPreview() {

    slideImages[counter].style.animation = "prev1 ease-in 0.2s both "
    // if (counter <= 0) {
    //     counter = slideImages.length - 1;
    // }
    if (counter === 0) {
        counter = slideImages.length - 1;
    }
    else {
        counter--;
    }
    slideImages[counter].style.animation = "prev2 0.2s ease-in both"
    updateIndicator();
}
// Auto slider
function autoImageSlider() {
    imageCount = setInterval(sliderNext, 100)
}
autoImageSlider()

// Stop auto slider
const container = document.querySelector(".slider-container");
container.addEventListener("mouseover", function () {
    clearInterval(imageCount);
})
container.addEventListener("mouseout", autoImageSlider)

// Indicator of function
function updateIndicator() {
    indicators.forEach((dot, index) => {
        dot.classList.remove("active");
        if (counter === index) {
            dot.classList.add("active");
        }

    });
}


indicators.forEach((dot) => {
    dot.addEventListener("click", function () {
        indicators.forEach((dot) => dot.classList.remove("active"))
        dot.classList.add("active");
        let imageId = parseInt(dot.getAttribute("attr"), 5);
        if (imageId > counter) {
            slideImages[counter].style.animation = "next1 0.2s ease-in forwards"
            counter = imageId
            slideImages[counter].style.animation = "next2 0.2s ease-in forwards"
        } else if (imageId < counter) {
            slideImages[counter].style.animation = "prev1 0.2s ease-in forwards"
            counter = imageId
            slideImages[counter].style.animation = "prev2 0.2s ease-in forwards"
        } updateIndicator()
    })
})