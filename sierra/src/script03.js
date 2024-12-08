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


