import { getSize } from './common'

export function putCenter(this: any, offsetX: number = 0, offsetY: number = 0) {
    const executable = () => {
        const { width: parentWidth, height: parentHeight} = getSize(this.parent)

        this.x = (parentWidth - this.width) / 2 + offsetX
        this.y = (parentHeight - this.height) / 2 + offsetY

        if (this.anchor) {
            this.anchor.set(.5)
            this.x += this.width * this.anchor.x
            this.y += this.height * this.anchor.y
        } else {
            this.pivot.x = this.width / 2
            this.pivot.y = this.height / 2
            this.x += this.pivot.x
            this.y += this.pivot.y
        }
    }

    this.on('added', () => executable())
    if (this.parent) executable()
}

export function putCenterX(this: any, offsetX: number = 0) {
    const executable = () => {
        const { width: parentWidth } = getSize(this.parent)
        this.x = (parentWidth - this.width) / 2 + offsetX

        if (this.anchor) {
            this.anchor.x = .5
            this.x += this.width * this.anchor.x
        } else {
            this.pivot.x = this.width / 2
            this.x += this.pivot.x
        }
    }
    this.on('added', () => executable())
    if (this.parent) executable()
}

export function putCenterY(this: any, offsetY: number = 0) {
    const executable = () => {
        const { height: parentHeight } = getSize(this.parent)
        this.y = (parentHeight - this.height) / 2 + offsetY

        if (this.anchor) {
            this.anchor.y = .5
            this.y += this.width * this.anchor.y
        } else {
            this.pivot.y = this.height / 2
            this.y += this.pivot.y
        }
    }
    this.on('added', () => executable())
    if (this.parent) executable()
}

export function putLeft(this: any, offsetX: number = 0) {
    this.on('added', () => {
        this.x = offsetX

        if (this.anchor) {
            this.anchor.x = .5
            this.x += this.width * this.anchor.x
        } else {
            this.pivot.x = this.width / 2
            this.x += this.pivot.x
        }
    })
    if (this.parent) this.x = offsetX
}

export function putTop(this: any, offsetY: number = 0) {
    this.on('added', () => {
        this.y = offsetY

        if (this.anchor) {
            this.anchor.y = .5
            this.y += this.width * this.anchor.y
        } else {
            this.pivot.y = this.height / 2
            this.y += this.pivot.y
        }
    })
    if (this.parent) this.y = offsetY
}

export function putRight(this: any, offsetX: number = 0) {
    const executable = () => {
        const { width: parentWidth } = getSize(this.parent)
        this.x = parentWidth - this.width - offsetX

        if (this.anchor) {
            this.anchor.x = .5
            this.x += this.width * this.anchor.x
        } else {
            this.pivot.x = this.width / 2
            this.x += this.pivot.x
        }
    }
    this.on('added', () => executable())
    if (this.parent) executable()
}

export function putBottom(this: any, offsetY: number = 0) {
    const executable = () => {
        const { height: parentHeight } = getSize(this.parent)
        this.y = parentHeight - this.height - offsetY

        if (this.anchor) {
            this.anchor.y = .5
            this.y += this.width * this.anchor.y
        } else {
            this.pivot.y = this.height / 2
            this.y += this.pivot.y
        }
    }
    this.on('added', () => executable())
    if (this.parent) executable()
}
