import { Item } from "./scripts/items.js";
import { preloadImages } from "./scripts/utils.js";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextItem } from "./scripts/hero-text.js";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

gsap.registerPlugin(ScrollTrigger);

// Declarations
const left__pane = document.querySelector('[data-item="left-pane"]')
const right__pane = document.querySelector('[data-item="right-pane"]')


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
const items = [];

[...document.querySelectorAll('[data-item="wrapper__el"]')].forEach(item => {
  items.push(new TextItem(item))
})

export default class Home {
  constructor() {
    this.home__anim()
  }

  home__anim () {
    const tl = gsap.timeline()

    tl.fromTo(
      left__pane, {
        width: 0
      }, {
        width: '60%',
        duration: 2,
        ease: 'power4.inOut'
      }
    )
    .fromTo(
      right__pane,
      {
        width: 0,
      }, {
        width: '40%',
        duration: 2,
        ease: 'power3.inOut'
      }
    )
    
    // gsap.utils.toArray(items.overlay)
    
  }
}

new Home()