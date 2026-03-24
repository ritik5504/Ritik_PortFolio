import * as THREE from "three";
import gsap from "gsap";

export function setCharTimeline(
  character: THREE.Object3D<THREE.Object3DEventMap> | null,
  camera: THREE.PerspectiveCamera
) {
  let intensity: number = 0;
  setInterval(() => {
    intensity = Math.random();
  }, 200);
  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".landing-section",
      start: "top top",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-section",
      start: "center 55%",
      end: "bottom -250%",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".resume-section",
      start: "top 50%",
      end: "center top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  let screenLight: any, monitor: any;
  character?.children.forEach((object: any) => {
    if (object.name === "Plane004") {
      object.children.forEach((child: any) => {
        child.material.transparent = true;
        child.material.opacity = 0;
        if (child.material.name === "Material.018") {
          monitor = child;
          child.material.color.set("#FFFFFF");
        }
      });
    }
    if (object.name === "screenlight") {
      object.material.transparent = true;
      object.material.opacity = 0;
      object.material.emissive.set("#B0F5EA");
      gsap.timeline({ repeat: -1, repeatRefresh: true }).to(object.material, {
        emissiveIntensity: () => intensity * 8,
        duration: () => Math.random() * 0.6,
        delay: () => Math.random() * 0.1,
      });
      screenLight = object;
    }
  });
  let neckBone = character?.getObjectByName("spine005");
  if (window.innerWidth > 1024) {
    if (character) {
      tl1
        .fromTo(character.rotation, { y: 0 }, { y: 0.7, duration: 1 }, 0)
        .to(camera.position, { z: 22 }, 0)
        .fromTo(".character-model", { x: 0 }, { x: "-25%", duration: 1 }, 0)
        .to(".landing-container", { opacity: 0, duration: 0.4 }, 0)
        .to(".landing-container", { y: "40%", duration: 0.8 }, 0)
        .fromTo(".about-me", { y: "-50%" }, { y: "0%" }, 0);

      tl2
        // Phase 1: Bitmoji's last phase (runs quickly, 0–2)
        .to(
          camera.position,
          { z: 75, y: 8.4, duration: 3, delay: 0, ease: "power3.inOut" },
          0
        )
        .fromTo(
          ".character-model",
          { pointerEvents: "inherit" },
          { pointerEvents: "none", x: "-12%", delay: 0, duration: 3 },
          0
        )
        .to(character.rotation, { y: 0.92, x: 0.12, delay: 0, duration: 2 }, 0)
        .to(neckBone!.rotation, { x: 0.6, delay: 0, duration: 2 }, 0)
        .to(monitor.material, { opacity: 1, duration: 0.8, delay: 0.5 }, 0)
        .to(screenLight.material, { opacity: 1, duration: 0.8, delay: 1.5 }, 0)
        .fromTo(
          monitor.position,
          { y: -10, z: 2 },
          { y: 0, z: 0, delay: 0, duration: 2 },
          0
        )
        .fromTo(
          ".character-rim",
          { opacity: 1, scaleX: 1.4 },
          { opacity: 0, scale: 0, y: "-70%", duration: 3, delay: 0 },
          0.3
        )
        // About section scrolls up
        .to(".about-section", { y: "30%", duration: 12 }, 0)
        .to(".about-section", { opacity: 0, delay: 8, duration: 2 }, 0);

      // Separate non-scrubbed trigger for about-me fade-in (much more reliable)
      gsap.fromTo(
        ".about-me",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-section",
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      tl3
        .to(
          ".character-model",
          { y: "-100%", opacity: 0, duration: 2, ease: "power2.inOut" },
          0
        )
        .to(character.rotation, { x: -0.04, duration: 1 }, 0);
    }
  }
}

export function setAllTimeline() {
  // Career section removed — no timeline animations needed
}
