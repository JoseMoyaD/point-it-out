export type SystemOptions = {
  updateOnResize: boolean
}

export type CommonOptions = {
  target: string | HTMLElement
  className?: string

  /**
   * Container where append the pointer. NOTE: The container should have
   * a relative or absolute position CSS property.
   */
  container?: string | HTMLElement

  /** Only pixels allowed ATM */
  strokeWidth?: number
  strokeColor?: string

  /* space between shape and content. Can be negative. Default: 0*/
  padding?: number
}

export type ShapeOptions = {
  rect: { round?: number | string | { rx: number | string; ry: number | string } } & CommonOptions
  image: {} & CommonOptions // No options beside commons ATM
}

export type ShapeName = keyof ShapeOptions
