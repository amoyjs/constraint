declare namespace PIXI {
    export interface Container {
        putCenter(this: any, offsetX?: number, offsetY?: number): void
        putCenterX(this: any, offsetX?: number): void
        putCenterY(this: any, offsetY?: number): void
        putLeft(this: any, offsetX?: number): void
        putTop(this: any, offsetY?: number): void
        putRight(this: any, offsetX?: number): void
        putBottom(this: any, offsetY?: number): void
    }
}

declare module '@amoy/constraint' {
    export default function constraint(PIXI: any): any
}