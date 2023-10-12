function locoanim(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locoanim()

function navbar(){
    gsap.to("#nav-part1 h2",{
        transform:"translateY(-100%)",
        scrollTrigger:{
            trigger:"#page1",
            scroller:"#main",
            start:"top0",
            end:"top -5%",
            scrub:2
        }
    })
    gsap.to("#nav-part2 #links",{
        transform:"translateY(-100%)",
        opacity:0,
        scrollTrigger:{
            trigger:"#page1",
            scroller:"#main",
            start:"top0",
            end:"top -5%",
            scrub:2
        }
    })
}
navbar()

function videoanimation(){
    var videoplay = document.querySelector("#video-container")
    var playbtn = document.querySelector("#play")
    
    videoplay.addEventListener("mousemove",(dets)=>{
        gsap.to(playbtn,{
            left : dets.x-60,
            top : dets.y-80
        })
    })

    videoplay.addEventListener("mouseenter",()=>{
        gsap.to(playbtn,{
            opacity:1,
            scale:1
        })
    });
    videoplay.addEventListener("mouseleave",()=>{
        gsap.to(playbtn,{
            opacity:0,
            scale:0
        })
    });
}
videoanimation()


function yeno(){
    gsap.to("#first",{
        opacity:0,
        delay:2,
        duration:1,
    })
}
yeno()


function loading(){
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.5,
        stagger:0.2
    })
}
loading()

function cursoranim(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#cursor",{
            left:dets.x,
            top:dets.y,
        })
    })
    
    var a = document.querySelectorAll(".child")
    a.forEach(function(val){
       val.addEventListener("mouseenter",function(){
        gsap.to("#cursor",{
            transform:"translate(-50%,-50%) scale(3)"
        })
       })
       val.addEventListener("mouseleave",function(){
        gsap.to("#cursor",{
            transform:"translate(-50%,-50%) scale(0)"
        })
       })
    })
}
cursoranim()


