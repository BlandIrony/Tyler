

export class PreLoaderItem {
    // DOM elements
    DOM = {
        // main element
        el: null,
        // Image wrapper
        crown: null,
        // Image
        stick: null,
        // Text
        counter: null
    }

    constructor (DOM) {
        this.DOM.el = DOM_el,
        // Crown
        this.DOM.crown = DOM_el.querySelector('[data-item="crown"]')
        // Stick
        this.DOM.stick = DOM_el.querySelector('[data-item="stick"]')
        // Counter
        this.DOM.counter = DOM_el.querySelector('[data-item="counter"]')
    }
}