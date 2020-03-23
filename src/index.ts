import * as _constraint from './constraint'
import { ScreenSize } from './common'

export const constraints = _constraint
export { fix, fixX, fixY } from './common'

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
