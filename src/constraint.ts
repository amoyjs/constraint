import { getSize, fix, fixX, fixY } from './common'

export function putCenter(target: any, offsetX: number = 0, offsetY: number = 0, global = false) {
    if (typeof offsetX === 'boolean') {
        global = offsetX
        offsetX = 0
        offsetY = 0
    }
    const executable = () => {
        const { width: parentWidth, height: parentHeight } = getSize(target.parent, global)

        target.x = (parentWidth - target.width) / 2 + offsetX
        target.y = (parentHeight - target.height) / 2 + offsetY

        fix(target)
    }

    target.on('added', () => executable())
    if (target.parent) executable()
}

export function putCenterX(target: any, offsetX: number = 0, global = false) {
    if (typeof offsetX === 'boolean') {
        global = offsetX
        offsetX = 0
    }
    const executable = () => {
        const { width: parentWidth } = getSize(target.parent, global)

        target.x = (parentWidth - target.width) / 2 + offsetX

        fixX(target)
    }
    target.on('added', () => executable())
    if (target.parent) executable()
}

export function putCenterY(target: any, offsetY: number = 0, global = false) {
    if (typeof offsetY === 'boolean') {
        global = offsetY
        offsetY = 0
    }
    const executable = () => {
        const { height: parentHeight } = getSize(target.parent, global)

        target.y = (parentHeight - target.height) / 2 + offsetY

        fixY(target)
    }
    target.on('added', () => executable())
    if (target.parent) executable()
}

export function putLeft(target: any, offsetX: number = 0, global = false) {
    if (typeof offsetX === 'boolean') {
        global = offsetX
        offsetX = 0
    }
    target.on('added', () => {
        target.x = offsetX

        fixX(target)
    })
    if (target.parent) target.x = offsetX
}

export function putTop(target: any, offsetY: number = 0, global = false) {
    if (typeof offsetY === 'boolean') {
        global = offsetY
        offsetY = 0
    }
    target.on('added', () => {
        target.y = offsetY

        fixY(target)
    })
    if (target.parent) target.y = offsetY
}

export function putRight(target: any, offsetX: number = 0, global = false) {
    if (typeof offsetX === 'boolean') {
        global = offsetX
        offsetX = 0
    }
    const executable = () => {
        const { width: parentWidth } = getSize(target.parent, global)

        target.x = parentWidth - target.width - offsetX

        fixX(target)
    }
    target.on('added', () => executable())
    if (target.parent) executable()
}

export function putBottom(target: any, offsetY: number = 0, global = false) {
    if (typeof offsetY === 'boolean') {
        global = offsetY
        offsetY = 0
    }
    const executable = () => {
        const { height: parentHeight } = getSize(target.parent, global)

        target.y = parentHeight - target.height - offsetY

        fixY(target)
    }
    target.on('added', () => executable())
    if (target.parent) executable()
}
