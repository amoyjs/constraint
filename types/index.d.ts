declare namespace PIXI {
    export interface Enchance {
        putCenter(this: any, offsetX?: number, offsetY?: number): void
        putCenterX(this: any, offsetX?: number): void
        putCenterY(this: any, offsetY?: number): void
        putLeft(this: any, offsetX?: number): void
        putTop(this: any, offsetY?: number): void
        putRight(this: any, offsetX?: number): void
        putBottom(this: any, offsetY?: number): void
    }
    export interface Sprite extends Enchance {}
    export interface Text extends Enchance {}
    export interface Container extends Enchance {}
    export interface Graphics extends Enchance {}
}

declare module '@amoy/constraint' {
    export default function constrain(PIXI: any): any
}