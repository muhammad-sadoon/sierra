gsap.to(" .hidden-navbar", {
    position: "fixed",
    opacity: 1,
    scrollTrigger: {
        scroller: "body",
        trigger: " .hidden-navbar",
        scrub: true,
        start: "2%",
        end: "50%"
    }
})
gsap.to(".full-line .development-ran", {
    width: "30%",
    duration: 3,
    delay: 2,
    scrollTrigger: {
        trigger: ".full-line .development-ran",
        scroller: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 70%"
    }
})
gsap.to(".full-line .design-ran", {
    width: "10%",
    duration: 3,
    delay: 2,
    scrollTrigger: {
        trigger: ".full-line .design-ran",
        scroller: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 70%"
    }
})
gsap.to(".full-line .SCO-ran", {
    width: "15%",
    duration: 3,
    delay: 2,
    scrollTrigger: {
        trigger: ".full-line .SCO-ran",
        scroller: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 70%"
    }
})
gsap.to(".full-line .mang-ran", {
    width: "25%",
    duration: 3,
    delay: 2,
    scrollTrigger: {
        trigger: ".full-line .mang-ran",
        scroller: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 70%"
    }
})
gsap.to(".full-line .deve-ran", {
    width: "10%",
    duration: 3,
    delay: 2,
    scrollTrigger: {
        trigger: ".full-line .deve-ran",
        scroller: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 70%"
    }
})
$(document).ready(function () {
    $(".clickslide-1").click(function () {
        $(".boxContent-1").slideToggle();
    })
    $(".clickslide-2").click(function () {
        $(".boxContent-2").slideToggle();
    })
    $(".clickslide-3").click(function () {
        $(".boxContent-3").slideToggle();
        $("i").className("bi bi-dash")
    })
})
let slide_1 = document.querySelector(".clickslide-1")
let slide_2 = document.querySelector(".clickslide-2")
let slide_3 = document.querySelector(".clickslide-3")
let slide_1_icon = document.querySelector(".clickslide-1 i")
let slide_2_icon = document.querySelector(".clickslide-2 i")
let slide_3_icon = document.querySelector(".clickslide-3 i")

slide_1.addEventListener("click", () => {
    if (slide_1_icon.className != "bi bi-plus") {
        slide_1_icon.className = "bi bi-plus"
    } else {
        slide_1_icon.className = "bi bi-dash"
    }
})

slide_2.addEventListener("click", () => {
    if (slide_2_icon.className != "bi bi-plus") {
        slide_2_icon.className = "bi bi-plus"
    } else {
        slide_2_icon.className = "bi bi-dash"
    }
})

slide_3.addEventListener("click", () => {
    if (slide_3_icon.className != "bi bi-plus") {
        slide_3_icon.className = "bi bi-plus"
    } else {
        slide_3_icon.className = "bi bi-dash"
    }
})
gsap.to(" .circle", {
    opacity: 1,
    scrollTrigger: {
        scroller: "body",
        trigger: " .circle",
        start: "2%",
        end: "50%"
    }
})

document.addEventListener("DOMContentLoaded", () => {
    const percentageElement = document.getElementById("percentage-1");
    const circleProgress = document.querySelector(".circle-progress-1");
    const targetPercentage = 78; // Target percentage
    let currentPercentage = 0;

    // Animate the circle and percentage
    const interval = setInterval(() => {
        if (currentPercentage < targetPercentage) {
            currentPercentage++;
            percentageElement.textContent = `${currentPercentage}%`;

            // Update the stroke-dasharray to match the current percentage
            const strokeLength = 2 * Math.PI * 50; // Circumference of the circle
            const dashOffset = strokeLength - (strokeLength * currentPercentage) / 100;
            circleProgress.style.strokeDasharray = `${strokeLength}, ${strokeLength}`;
            circleProgress.style.strokeDashoffset = dashOffset;
        } else {
            clearInterval(interval);
        }
    }, 20); // Adjust speed (10ms per increment)
});

document.addEventListener("DOMContentLoaded", () => {
    const percentageElement = document.getElementById("percentage-2");
    const circleProgress = document.querySelector(".circle-progress-2");
    const targetPercentage = 83; // Target percentage
    let currentPercentage = 0;

    // Animate the circle and percentage
    const interval = setInterval(() => {
        if (currentPercentage < targetPercentage) {
            currentPercentage++;
            percentageElement.textContent = `${currentPercentage}%`;

            // Update the stroke-dasharray to match the current percentage
            const strokeLength = 2 * Math.PI * 50; // Circumference of the circle
            const dashOffset = strokeLength - (strokeLength * currentPercentage) / 100;
            circleProgress.style.strokeDasharray = `${strokeLength}, ${strokeLength}`;
            circleProgress.style.strokeDashoffset = dashOffset;
        } else {
            clearInterval(interval);
        }
    }, 20); // Adjust speed (10ms per increment)
});



document.addEventListener("DOMContentLoaded", () => {
    const percentageElement = document.getElementById("percentage-3");
    const circleProgress = document.querySelector(".circle-progress-3");
    const targetPercentage = 25; // Target percentage
    let currentPercentage = 0;

    // Animate the circle and percentage
    const interval = setInterval(() => {
        if (currentPercentage < targetPercentage) {
            currentPercentage++;
            percentageElement.textContent = `${currentPercentage}%`;

            // Update the stroke-dasharray to match the current percentage
            const strokeLength = 2 * Math.PI * 50; // Circumference of the circle
            const dashOffset = strokeLength - (strokeLength * currentPercentage) / 100;
            circleProgress.style.strokeDasharray = `${strokeLength}, ${strokeLength}`;
            circleProgress.style.strokeDashoffset = dashOffset;
        } else {
            clearInterval(interval);
        }
    }, 20); // Adjust speed (10ms per increment)
});
document.addEventListener("DOMContentLoaded", () => {
    const percentageElement = document.getElementById("percentage-4");
    const circleProgress = document.querySelector(".circle-progress-4");
    const targetPercentage = 95; // Target percentage
    let currentPercentage = 0;

    // Animate the circle and percentage
    const interval = setInterval(() => {
        if (currentPercentage < targetPercentage) {
            currentPercentage++;
            percentageElement.textContent = `${currentPercentage}%`;

            // Update the stroke-dasharray to match the current percentage
            const strokeLength = 2 * Math.PI * 50; // Circumference of the circle
            const dashOffset = strokeLength - (strokeLength * currentPercentage) / 100;
            circleProgress.style.strokeDasharray = `${strokeLength}, ${strokeLength}`;
            circleProgress.style.strokeDashoffset = dashOffset;
        } else {
            clearInterval(interval);
        }
    }, 20); // Adjust speed (10ms per increment)
});
let nmbr_1 = document.querySelector(".follows-1");
let txt_1 = 0;
let abc_1 = setInterval(time_1, 100);
function time_1() {
    if (txt_1 == 25) {
        clearInterval(abc_1)
    } else {
        txt_1++;
        nmbr_1.textContent = txt_1;
    }
}
let nmbr_2 = document.querySelector(".follows-2");
let txt_2 = 0;
let abc_2 = setInterval(time_2, 20);
function time_2() {
    if (txt_2 == 130) {
        clearInterval(abc_2)
    } else {
        txt_2++;
        nmbr_2.textContent = txt_2;
    }
}
let nmbr_3 = document.querySelector(".follows-3");
let txt_3 = 0;
let abc_3 = setInterval(time_3, 10);
function time_3() {
    if (txt_3 == 238) {
        clearInterval(abc_3)
    } else {
        txt_3++;
        nmbr_3.textContent = txt_3;
    }
}
let nmbr_4 = document.querySelector(".follows-4");
let txt_4 = 0;
let abc_4 = setInterval(time_4, 130);
function time_4() {
    if (txt_4 == 12) {
        clearInterval(abc_4)
    } else {
        txt_4++;
        nmbr_4.textContent = txt_4;
    }
}