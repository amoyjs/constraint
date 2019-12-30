import * as constraint from './constraint'

export const constraints = constraint

export default function ({ Container }: any) {
    for (const key in constraints) {
        Container.prototype[key] = function (...args: any) {
            constraints[key](this, ...args)
        }
    }
}