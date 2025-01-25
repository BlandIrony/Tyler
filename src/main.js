import { Item } from "./scripts/items.js";
import { preloadImages } from "./scripts/utils.js";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PreLoaderItem } from "./scripts/preloader-item.js";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

gsap.registerPlugin(ScrollTrigger);

// Declarations
const preloader__crown = document.querySelector('[data-item="crown"]')
const preloader__stick = document.querySelector('[data-item="stick"]')
const preloader__counter = document.querySelector('[data-item="counter"]')
const preloader__counter__container = document.querySelector('[data-item="counter__container"]')

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

export default class Home {
  constructor() {
    this.preloader__anim()
  }

  preloader__anim () {
    const tl = gsap.timeline()

    tl.addLabel('start', 0)
    .to(preloader__crown, {
      y: 158,
      duration: 1.5,
      ease: 'power2.inOut',
    }, '<')
    .to(preloader__stick, {
      y: -140,
      duration: 1.5,
      ease: 'power2.inOut',
    }, '+=start')
    .to(preloader__counter, {
      y: -155,
      duration: 1.5,
      ease: 'sine.inOut',
    }, '+=start') // Start end animation
    .to(preloader__crown, {
      y: 0,
      duration: 1.25,
      ease: 'sine.inOut'
    }, 'start+=4')
    // .set(preloader__counter__container, { overflow: 'hidden' })
    .to(preloader__counter, {
      yPercent: 20,
      opacity: 0,
      duration: .25,
      ease: 'sine.inOut'
    }, '<')
    .to(preloader__stick, {
      y: 0,
      duration: 1.25,
      ease: 'sine.inOut'
    }, '<')
  }
}

new Home()