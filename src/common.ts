export function getSize(target: any) {
    const scaleX = target.scale.x
    const scaleY = target.scale.y
    const width = target.isStage ? target.game.view.width : scaleX === 1 ? target.width : target.width / scaleX
    const height = target.isStage ? target.game.view.height : scaleY === 1 ? target.height : target.height / scaleY
    return { width, height }
}