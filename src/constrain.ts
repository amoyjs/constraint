export function putCenter(this: any, offsetX: number = 0, offsetY: number = 0) {
    const executable = () => {
        const parent = this.parent
        const scaleX = parent.scale.x
        const scaleY = parent.scale.y
        const parentWidth = parent.isStage ? parent.game.view.width : scaleX === 1 ? parent.width : parent.width / scaleX
        const parentHeight = parent.isStage ? parent.game.view.height : scaleY === 1 ? parent.height : parent.height / scaleY

        this.x = (parentWidth - this.width) / 2 + offsetX
        this.y = (parentHeight - this.height) / 2 + offsetY
    }

    this.on('added', () => executable())
    if (this.parent) executable()
}

export function putCenterX(this: any, offsetX: number = 0) {
    const executable = () => {
        const parent = this.parent
        const scaleX = parent.scale.x
        const parentWidth = parent.isStage ? parent.game.view.width : scaleX === 1 ? parent.width : parent.width / scaleX
        this.x = (parentWidth - this.width) / 2 + offsetX
    }
    this.on('added', () => executable())
    if (this.parent) executable()
}

export function putCenterY(this: any, offsetY: number = 0) {
    const executable = () => {
        const parent = this.parent
        const scaleY = parent.scale.y
        const parentHeight = parent.isStage ? parent.game.view.height : scaleY === 1 ? parent.height : parent.height / scaleY
        this.y = (parentHeight - this.height) / 2 + offsetY
    }
    this.on('added', () => executable())
    if (this.parent) executable()
}

export function putLeft(this: any, offsetX: number = 0) {
    this.on('added', () => this.x = offsetX)
    if (this.parent) this.x = offsetX
}

export function putTop(this: any, offsetY: number = 0) {
    this.on('added', () => this.y = offsetY)
    if (this.parent) this.y = offsetY
}

export function putRight(this: any, offsetX: number = 0) {
    const executable = () => {
        const parent = this.parent
        const scaleX = parent.scale.x
        const parentWidth = parent.isStage ? parent.game.view.width : scaleX === 1 ? parent.width : parent.width / scaleX
        this.x = parentWidth - this.width - offsetX
    }
    this.on('added', () => executable())
    if (this.parent) executable()
}

export function putBottom(this: any, offsetY: number = 0) {
    const executable = () => {
        const parent = this.parent
        const scaleY = parent.scale.y
        const parentHeight = parent.isStage ? parent.game.view.height : scaleY === 1 ? parent.height : parent.height / scaleY
        this.y = parentHeight - this.height - offsetY
    }
    this.on('added', () => executable())
    if (this.parent) executable()
}
