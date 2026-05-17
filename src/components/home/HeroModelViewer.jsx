import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function HeroModelViewer() {
  const modelRef = useRef(null);

  useEffect(() => {
    const viewer = modelRef.current;
    if (!viewer) return;

    const fitModel = () => {
      if (typeof viewer.updateFraming === "function") {
        viewer.updateFraming();
      }

      const orbit = viewer.getCameraOrbit?.();
      if (orbit) {
        orbit.radius *= 0.94;
        viewer.cameraOrbit = orbit.toString();

        const lockedRadius = `${orbit.radius}m`;
        viewer.minCameraOrbit = `auto auto ${lockedRadius}`;
        viewer.maxCameraOrbit = `auto auto ${lockedRadius}`;
      }

      const fov = "42deg";
      viewer.fieldOfView = fov;
      viewer.minFieldOfView = fov;
      viewer.maxFieldOfView = fov;
    };

    viewer.addEventListener("load", fitModel);
    if (viewer.loaded) fitModel();

    return () => viewer.removeEventListener("load", fitModel);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="hero-model-wrap relative hidden min-h-0 flex-1 items-center justify-center overflow-visible lg:flex lg:max-h-[min(70vh,600px)]"
    >
      <div className="hero-model-stage relative flex aspect-square w-full max-w-[min(62vh,580px)] items-center justify-center">
        <model-viewer
          ref={modelRef}
          src="/model.glb"
          alt="SEPL loading arm 3D model"
          loading="eager"
          camera-controls
          disable-zoom
          disable-pan
          touch-action="pan-y"
          auto-rotate
          rotation-per-second="12deg"
          shadow-intensity="1"
          shadow-softness="0.8"
          exposure="1"
          environment-image="neutral"
          camera-orbit="45deg 70deg auto"
          field-of-view="42deg"
          interaction-prompt="none"
          className="hero-model-viewer"
        >
          <div slot="poster" className="hero-model-poster" aria-hidden />
        </model-viewer>
      </div>
    </motion.div>
  );
}
