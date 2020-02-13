const { innerWidth: width, innerHeight: height } = window

export const ScreenSize = {
    width,
    height,
}

export function getSize(target: any, global = false) {
    target = target.clone()
    const scaleX = target.scale.x
    const scaleY = target.scale.y
    const width = target.isStage || global ? ScreenSize.width : target.width / scaleX
    const height = target.isStage || global ? ScreenSize.height : target.height / scaleY

    return {
        width,
        height,
    }
}

export function fix(target: any) {
    if (target.anchor) {
        target.x += target.width * target.anchor.x
        target.y += target.height * target.anchor.y
    } else {
        target.x += target.pivot.x * target.scale.x
        target.y += target.pivot.y * target.scale.y
    }
}

export function fixX(target: any) {
    if (target.anchor) {
        target.x += target.width * target.anchor.x
    } else {
        target.x += target.pivot.x * target.scale.x
    }
}

export function fixY(target: any) {
    if (target.anchor) {
        target.y += target.height * target.anchor.y
    } else {
        target.y += target.pivot.y * target.scale.y
    }
}