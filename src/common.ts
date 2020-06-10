export function getGameViewSize() {
    const canvas = document.getElementById('GAME_VIEW')
    if (canvas) {
        return canvas.getBoundingClientRect()
    } else {
        return { width: innerWidth, height: innerHeight }
    }
}

export function getSize(target: any, global = false) {
    if (target.clone) target = target.clone()
    const { width: gameViewWidth, height: gameViewHeight } = getGameViewSize()
    const scaleX = target.scale.x
    const scaleY = target.scale.y
    const width = target.isStage || target.isScene || global ? gameViewWidth : target.width / scaleX
    const height = target.isStage || target.isScene || global ? gameViewHeight : target.height / scaleY

    return {
        width,
        height,
    }
}

export function fix(target: any) {
    target.x += target.pivot.x * target.scale.x
    target.y += target.pivot.y * target.scale.y
    if (target.anchor) {
        target.x += target.width * target.anchor.x
        target.y += target.height * target.anchor.y
    }
}

export function fixX(target: any) {
    target.x += target.pivot.x * target.scale.x
    if (target.anchor) target.x += target.width * target.anchor.x
}

export function fixY(target: any) {
    target.y += target.pivot.y * target.scale.y
    if (target.anchor) target.y += target.height * target.anchor.y
}