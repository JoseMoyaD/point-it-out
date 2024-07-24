import { createSVG, PointItOutShape } from "./core"
import { ShapeOptions } from "../types"

// TODO: round option to round corners
/*const squareOptionsDefaults: Partial<ShapeOptions['square']> = {
    ...commonOpiontsDefaults,
}*/

export class PIOSquareShape extends PointItOutShape {
    rectElm: SVGRectElement

    constructor(options: ShapeOptions['square']) {
        super(options)
        this.rectElm = createSVG('rect')
        this.svg.appendChild(this.rectElm)
        document.body.appendChild(this.svg)
        this.update()
    }

    update(): void {
        const htmlRect   = this.target.getBoundingClientRect()
        const strW       = this.strokeWidth
        const width      = htmlRect.width  + strW*2 + this.padding*2
        const height     = htmlRect.height + strW*2 + this.padding*2
        const offset     = Math.round(strW / 2)
        const targetTop  = htmlRect.top + scrollY
        const targetLeft = htmlRect.left + scrollX

        this.svg.style.top  = (targetTop - strW - this.padding) + 'px'
        this.svg.style.left = (targetLeft - strW - this.padding) + 'px'
        this.svg.setAttribute('width', width.toString())
        this.svg.setAttribute('height', height.toString())

        this.rectElm.setAttribute('x',      `${offset}`)
        this.rectElm.setAttribute('y',      `${offset}`)
        this.rectElm.setAttribute('width',  `${width - strW}`)
        this.rectElm.setAttribute('height', `${height - strW}`)
    }
    
    onResize(): void {
        this.update()
    }
}