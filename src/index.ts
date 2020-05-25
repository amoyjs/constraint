import * as _constraint from './constraint'
import { ScreenSize } from './common'
import Event from 'eventemitter3'

export const constraints = _constraint
export { fix, fixX, fixY } from './common'

export function deprecatedConstraint({ Container }: any) {
    console.warn('deprecatedConstraint')
    for (const key in constraints) {
        Container.prototype[key] = function (...args: any) {
            constraints[key](this, ...args)
        }
    }
}

export default function constraint(event: Event) {
    event.on('beforeCreate', ({ PIXI }) => {
        for (const key in constraints) {
            PIXI.Container.prototype[key] = function (...args: any) {
                constraints[key](this, ...args)
            }
        }
    })
}

export function createConstraint(width: number, height: number) {
    ScreenSize.width = width
    ScreenSize.height = height
    return constraint
}
