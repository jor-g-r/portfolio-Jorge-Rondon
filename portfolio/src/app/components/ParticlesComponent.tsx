"use client";
import React, { useCallback, useMemo, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

// Función optimizada para cargar solo la versión Slim (más ligera)
const particlesInit = async (engine: Engine) => {
  await loadSlim(engine);
};

const ParticlesComponent: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es dispositivo móvil para ajustar la configuración
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  // Configuración de partículas optimizada según el dispositivo
  const options = useMemo(() => {
    return {
      fpsLimit: 30,
      interactivity: {
        events: {
          onHover: {
            enable: !isMobile, // Desactivar en móviles para ahorrar recursos
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          repulse: {
            distance: isMobile ? 50 : 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#BEBEBE",
        },
        links: {
          color: "#656565",
          distance: isMobile ? 80 : 120,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: true,
          speed: isMobile ? 0.2 : 0.4,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: isMobile ? 800 : 600,
          },
          value: isMobile ? 30 : 50,
        },
        opacity: {
          value: 0.2,
        },
        shape: {
          type: "circle", // Cambiado a círculo (más eficiente que triángulos)
        },
        size: {
          value: { min: 1, max: 2 },
        },
      },
      detectRetina: true,
    };
  }, [isMobile]);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options as any}
      width="100%"
      height="100%"
      className="relative z-0"
    />
  );
};

export default ParticlesComponent;
