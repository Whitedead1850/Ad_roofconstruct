// REALISATIE 1

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");

    if (n > slides.length) { slideIndex = 1 }

    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// REALISATIE 2
var slideIndex_2 = 1;
showSlides_2(slideIndex_2);

// Next/previous controls
function plusSlides_2(n) {
    showSlides_2(slideIndex_2 += n);
}

// Thumbnail image controls
function currentSlide_2(n) {
    showSlides_2(slideIndex_2 = n);
}

function showSlides_2(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides_2");
    var dots = document.getElementsByClassName("demo");

    if (n > slides.length) {
        slideIndex_2 = 1
    }
    if (n < 1) {
        slideIndex_2 = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex_2 - 1].style.display = "block";
    dots[slideIndex_2 - 1].className += " active";

}

// REALISATIE 3
var slideIndex_3 = 1;
showSlides_3(slideIndex_3);

// Next/previous controls
function plusSlides_3(n) {
    showSlides_3(slideIndex_3 += n);
}

// Thumbnail image controls
function currentSlide_3(n) {
    showSlides_3(slideIndex_3 = n);
}

function showSlides_3(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides_3");
    var dots = document.getElementsByClassName("demo");

    if (n > slides.length) {
        slideIndex_3 = 1
    }
    if (n < 1) {
        slideIndex_3 = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex_3 - 1].style.display = "block";
    dots[slideIndex_3 - 1].className += " active";

}
// REALISATIE 4
var slideIndex_4 = 1;
showSlides_4(slideIndex_4);

// Next/previous controls
function plusSlides_4(n) {
    showSlides_4(slideIndex_4 += n);
}

// Thumbnail image controls
function currentSlide_4(n) {
    showSlides_4(slideIndex_4 = n);
}

function showSlides_4(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides_4");
    var dots = document.getElementsByClassName("demo");

    if (n > slides.length) {
        slideIndex_4 = 1
    }
    if (n < 1) {
        slideIndex_4 = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex_4 - 1].style.display = "block";
    dots[slideIndex_4 - 1].className += " active";

}
// REALISATIE 5
var slideIndex_5 = 1;
showSlides_5(slideIndex_5);

// Next/previous controls
function plusSlides_5(n) {
    showSlides_5(slideIndex_5 += n);
}

// Thumbnail image controls
function currentSlide_5(n) {
    showSlides_5(slideIndex_5 = n);
}

function showSlides_5(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides_5");
    var dots = document.getElementsByClassName("demo");

    if (n > slides.length) {
        slideIndex_5 = 1
    }
    if (n < 1) {
        slideIndex_5 = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex_5 - 1].style.display = "block";
    dots[slideIndex_5 - 1].className += " active";

}


// REALISATIE 6
var slideIndex_6 = 1;
showSlides_6(slideIndex_6);

// Next/previous controls
function plusSlides_6(n) {
    showSlides_6(slideIndex_6 += n);
}

// Thumbnail image controls
function currentSlide_6(n) {
    showSlides_6(slideIndex_6 = n);
}

function showSlides_6(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides_6");
    var dots = document.getElementsByClassName("demo");

    if (n > slides.length) {
        slideIndex_6 = 1
    }
    if (n < 1) {
        slideIndex_6 = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex_6 - 1].style.display = "block";
    dots[slideIndex_6 - 1].className += " active";

}