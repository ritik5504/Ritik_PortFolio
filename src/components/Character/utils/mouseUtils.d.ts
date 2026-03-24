import * as THREE from "three";
export declare const handleMouseMove: (event: MouseEvent, setMousePosition: (x: number, y: number) => void) => void;
export declare const handleTouchMove: (event: TouchEvent, setMousePosition: (x: number, y: number) => void) => void;
export declare const handleTouchEnd: (setMousePosition: (x: number, y: number, interpolationX: number, interpolationY: number) => void) => void;
export declare const handleHeadRotation: (headBone: THREE.Object3D, mouseX: number, mouseY: number, interpolationX: number, interpolationY: number, lerp: (x: number, y: number, t: number) => number) => void;
//# sourceMappingURL=mouseUtils.d.ts.map