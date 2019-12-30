declare namespace PIXI {
    export interface Container {
        putCenter(this: any, global?: boolean): void
        putCenterX(this: any, global?: boolean): void
        putCenterY(this: any, global?: boolean): void
        putLeft(this: any, global?: boolean): void
        putTop(this: any, global?: boolean): void
        putRight(this: any, global?: boolean): void
        putBottom(this: any, global?: boolean): void

        putCenter(this: any, offsetX?: number, offsetY?: number, global?: boolean): void
        putCenterX(this: any, offsetX?: number, global?: boolean): void
        putCenterY(this: any, offsetY?: number, global?: boolean): void
        putLeft(this: any, offsetX?: number, global?: boolean): void
        putTop(this: any, offsetY?: number, global?: boolean): void
        putRight(this: any, offsetX?: number, global?: boolean): void
        putBottom(this: any, offsetY?: number, global?: boolean): void
    }
}

declare module '@amoy/constraint' {
    export default function constraint(PIXI: any): any
}