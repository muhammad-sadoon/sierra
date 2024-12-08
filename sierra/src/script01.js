gsap.to(".animte",{
    scale:1,
    duration:2,
    delay:2,
    opacity:1,
    // rotate:180,
    scrollTrigger:{
        trigger:".animte",
        scroller:"body",
        scrub:2,
        start:"top 60%",
        end:"top 20%",
    }
})
gsap.to(".animte-1",{
    scale:1,
    duration:2,
    delay:2,
    opacity:1,
    // rotate:180,
    scrollTrigger:{
        trigger:".animte-1",
        scroller:"body",
        scrub:2,
        start:"top 60%",
        end:"top 20%",
    }
})
gsap.to(".animte-2",{
    scale:1,
    duration:2,
    opacity:1,
    delay:2,
    // rotate:180,
    scrollTrigger:{
        trigger:".animte-2",
        scroller:"body",
        scrub:2,
        start:"top 60%",
        end:"top 20%",
    }
})
gsap.to(".animte-3",{
    scale:1,
    opacity:1,
    duration:2,
    delay:2,
    // rotate:180,
    scrollTrigger:{
        trigger:".animte-3",
        scroller:"body",
        scrub:2,
        start:"top 60%",
        end:"top 20%",
    }
})
gsap.to(".animte-4",{
    scale:1,
    opacity:1,
    duration:2,
    delay:2,
    // rotate:180,
    scrollTrigger:{
        trigger:".animte-4",
        scroller:"body",
        scrub:2,
        start:"top 60%",
        end:"top 20%"
    }
})
gsap.to(".nenu-animation .hidden-navbar",{
    position:"fixed",
    opacity:1,
    scrollTrigger:{
        scroller:"body",
        trigger:".menu-animation .hidden-navbar",
        scrub:true,
        start:"2%",
        end:"50%"
    }
})