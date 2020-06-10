declare namespace PIXI {
    export interface Container {
        putCenter(offsetX?: number, offsetY?: number, global?: boolean): void
        putCenterX(offsetX?: number, global?: boolean): void
        putCenterY(offsetY?: number, global?: boolean): void
        putLeft(offsetX?: number, global?: boolean): void
        putTop(offsetY?: number, global?: boolean): void
        putRight(offsetX?: number, global?: boolean): void
        putBottom(offsetY?: number, global?: boolean): void

        putCenter(global?: boolean): void
        putCenterX(global?: boolean): void
        putCenterY(global?: boolean): void
        putLeft(global?: boolean): void
        putTop(global?: boolean): void
        putRight(global?: boolean): void
        putBottom(global?: boolean): void
    }
}

declare module '@amoy/constraint' {
    export const constraints: {
        putCenter(target: any, offsetX: number, offsetY: number, global: boolean): void
        putCenterX(target: any, offsetX: number, global: boolean): void
        putCenterY(target: any, offsetY: number, global: boolean): void
        putLeft(target: any, offsetX: number, global: boolean): void
        putTop(target: any, offsetY: number, global: boolean): void
        putRight(target: any, offsetX: number, global: boolean): void
        putBottom(target: any, offsetY: number, global: boolean): void
    }
    export function fix(target: any): void
    export function fixX(target: any): void
    export function fixY(target: any): void
    export function createConstraint(width: number, height: number): () => void
    export default function constraint(PIXI: any): any
}