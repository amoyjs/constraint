import * as constrain from './constrain'

export default function ({ Sprite, Text, Graphics, Container }: any) {
    const components = [Sprite, Text, Graphics, Container]
    components.map((component) => {
        for (const key in constrain) {
            component.prototype[key] = constrain[key]
        }
    })
}