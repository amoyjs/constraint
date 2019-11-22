import * as constraint from './constraint'

export default function ({ Container }: any) {
    for (const key in constraint) {
        Container.prototype[key] = constraint[key]
    }
}