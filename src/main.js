import { Item } from "./scripts/items.js";
import { preloadImages } from "./scripts/utils.js";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextItem } from "./scripts/hero-text.js";

gsap.registerPlugin(ScrollTrigger);

// Declarations
const left__pane = document.querySelector('[data-item="left-pane"]')
const right__pane = document.querySelector('[data-item="right-pane"]')
const thumbnail = document.querySelector('[data-item="thumbnail"]')
const cta = document.querySelectorAll('[data-item="cta"]')


// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);

// Store all text instance
// const items = [];

// [...document.querySelectorAll('[data-item="wrapper__el"]')].forEach(item => {
//   items.push(new TextItem(item))
// })

export default class Home {
  constructor() {
    this.home__anim()
  }

  home__anim () {
    const tl = gsap.timeline()

    tl
    .addLabel('start', 0)
    .fromTo(
      left__pane, {
        width: 0
      }, {
        width: '100%',
        duration: 2,
        ease: 'power4.inOut'
      }, 'start'
    )
    .fromTo(
      right__pane,
      {
        width: 0,
      }, {
        width: '40%',
        duration: 1.75,
        ease: 'power3.inOut'
      }, 'start+=.25'
    )
    
    gsap.utils.toArray('[data-item="text__overlay"]').forEach((el, i) => {
      tl.to(
        el, 
        {
          x: '100%',
          duration: 1.25,
          delay: i * 0.045,
          ease: 'power4.out',
        }, "start+=.95"
      )
    })

    gsap.utils.toArray('[data-item="text__el"]').forEach((el, i) => {
      tl.to(
        el, 
        {
          x: 0,
          duration: 1.25,
          delay: i * 0.045,
          ease: 'power4.out',
        }, "start+=.95"
      )
    })

    tl.to(thumbnail,
      { width: '100%', duration: 1.35, ease: 'power4.out' },
      'start+=.95'
    )

    gsap.utils.toArray('[data-item="title__translate"]').forEach((el) => {
      tl.to(
        el, 
        {
          y: 0,
          duration: 1.25,
          ease: 'power3.inOut',
        }, "start+=1.15"
      )
    })

    gsap.utils.toArray('[data-item="sub__translate"]').forEach((el) => {
      tl.to(
        el, 
        {
          y: 0,
          duration: 1.25,
          ease: 'power3.inOut',
        }, "start+=1.5"
      )
    })

    tl.to(
      cta,
      {
        opacity: 1,
        y: 0,
        duration: .75,
        ease: 'power1.inOut'
      }, 'start+=1'
    )
    .to(
      '[data-item="footer"]',
      {
        y: 0,
        opacity: 1,
        duration: .75
      }
    )
    
  }
}

new Home()