

export class TextItem {
    // DOM elements
    DOM = {
        // main element
        el: null,
        // Text wrapper
        // wrapper: null,
        // Text
        text: null,
        // Overlay
        overlay: null
    }

    /**
	 * Constructor.
	 * @param {Element} DOM_el - main element (.item)
	 */

    constructor (DOM_el) {
        this.DOM.el = DOM_el,
        // wrapper
        // this.DOM.wrapper = DOM_el.querySelector('[data-item="wrapper__el"]')
        // Text
        this.DOM.text = DOM_el.querySelector('[data-item="text__el"]')
        // Overlay
        this.DOM.overlay = DOM_el.querySelector('[data-item="text__overlay"]')
    }
}