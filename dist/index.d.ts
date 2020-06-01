import * as _constraint from './constraint';
import Event from 'eventemitter3';
export declare const constraints: typeof _constraint;
export { fix, fixX, fixY } from './common';
export declare function deprecatedConstraint({ Container }: any): void;
export default function constraint(event: Event): void;
export declare function createConstraint(width: number, height: number): typeof constraint;
//# sourceMappingURL=index.d.ts.map