import * as THREE from "three";
import { GLTF } from "three-stdlib";
declare const setAnimations: (gltf: GLTF) => {
    mixer: THREE.AnimationMixer;
    startIntro: () => void;
    hover: (gltf: GLTF, hoverDiv: HTMLDivElement) => (() => void) | undefined;
};
export default setAnimations;
//# sourceMappingURL=animationUtils.d.ts.map