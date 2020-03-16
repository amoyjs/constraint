import * as _constraint from './constraint'

export const constraints = _constraint
export { fix, fixX, fixY } from './common'

export default function constraint({ Container }: any) {
    for (const key in constraints) {
        Container.prototype[key] = function (...args: any) {
            constraints[key](this, ...args)
        }
    }
}