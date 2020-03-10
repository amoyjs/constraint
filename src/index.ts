import { ScreenSize } from './common'
import * as _constraint from './constraint'

export const constraints = _constraint

export default function constraint({ Container }: any) {
    for (const key in constraints) {
        Container.prototype[key] = function (...args: any) {
            constraints[key](this, ...args)
        }
    }
}

export function createConstraint(width: number, height: number) {
    ScreenSize.width = width
    ScreenSize.height = height
    return constraint
}