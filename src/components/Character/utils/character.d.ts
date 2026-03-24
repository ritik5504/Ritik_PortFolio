import * as THREE from "three";
import { GLTF } from "three-stdlib";
declare const setCharacter: (renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.PerspectiveCamera) => {
    loadCharacter: () => Promise<GLTF | null>;
};
export default setCharacter;
//# sourceMappingURL=character.d.ts.map