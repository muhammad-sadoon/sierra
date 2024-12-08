gsap.to(".mainpage-9 .about-intro", {
    scale: 1,
    duration: 2,
    delay: 2,
    transform: "translateX(0%)",
    // rotate:180,
    opacity: 1,
    scrollTrigger: {
        trigger: ".mainpage-9 .about-intro",
        scroller: "body",
        scrub: 2,
        start: "top 70%",
        end: "top 20%",
    }
})
gsap.to(".popup-img", {
    scale: 1,
    duration: 2,
    delay: 2,
    transform: "translateX(0%)",
    // rotate:180,
    opacity: 1,
    scrollTrigger: {
        trigger: ".popup-img",
        scroller: "body",
        scrub: 2,
        start: "top 70%",
        end: "top 20%"
    }
})
gsap.to(" .hidden-navbar",{
    position:"fixed",
    opacity:1,
    scrollTrigger:{
        scroller:"body",
        trigger:" .hidden-navbar",
        scrub:true,
        start:"2%",
        end:"50%"
    }
})
gsap.to(".box .slide-1", {
    scale: 1,
    duration: 2,
    opacity: 1,
    transform: "translateX(10%)",
    // rotate:180,
    opacity: 1,
    scrollTrigger: {
        trigger: ".box .slide-1",
        scroller: "body",
        scrub: 2,
        start: "top 70%",
        end: "top 20%"
    }
})
gsap.to(".box .slide-2", {
    scale: 1,
    duration: 2,
    opacity: 1,
    scale:1,
    // rotate:180,
    opacity: 1,
    scrollTrigger: {
        trigger: ".box .slide-1",
        scroller: "body",
        scrub: 2,
        start: "top 70%",
        end: "top 20%"
    }
})
gsap.to(".box .slide-3", {
    scale: 1,
    duration: 2,
    opacity: 1,
    transform: "translateX(-10%)",
    // rotate:180,
    opacity: 1,
    scrollTrigger: {
        trigger: ".box .slide-1",
        scroller: "body",
        scrub: 2,
        start: "top 70%",
        end: "top 20%"
    }
})
gsap.to(".full-line .development-ran",{
    width:"30%",
    duration:3,
    delay:2,
    scrollTrigger:{
        trigger: ".full-line .development-ran",
        scroller: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 70%"
    }
})
gsap.to(".full-line .design-ran",{
    width:"10%",
    duration:3,
    delay:2,
    scrollTrigger:{
        trigger: ".full-line .design-ran",
        scroller: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 70%"
    }
})
gsap.to(".full-line .SCO-ran",{
    width:"15%",
    duration:3,
    delay:2,
    scrollTrigger:{
        trigger: ".full-line .SCO-ran",
        scroller: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 70%"
    }
})
gsap.to(".full-line .mang-ran",{
    width:"25%",
    duration:3,
    delay:2,
    scrollTrigger:{
        trigger: ".full-line .mang-ran",
        scroller: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 70%"
    }
})
gsap.to(".full-line .deve-ran",{
    width:"10%",
    duration:3,
    delay:2,
    scrollTrigger:{
        trigger: ".full-line .deve-ran",
        scroller: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 70%"
    }
})