"use client";
import React, { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const loadParticles = async (engine: Engine) => {
  await Promise.all([loadSlim(engine), loadFull(engine)]);
};

const ParticlesComponent: React.FC = () => {
  const options = useMemo(() => {
    return {
      particles: {
        move: {
          enable: true,
        },
      },
    };
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadParticles(engine);
    await loadFull(engine);
  }, []);

  // const particlesLoaded = useCallback(
  //   async (container: Container | undefined) => {
  //       await console.log(container);
  //   },
  //   []
  // );

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      // loaded={particlesLoaded}
      options={{
        fpsLimit: 40,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
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
            distance: 120,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 0.4,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 600,
            },
            value: 50,
          },
          opacity: {
            value: 0.15,
          },
          shape: {
            type: "triangle",
          },
          size: {
            value: { min: 1, max: 2 },
          },
        },
        detectRetina: true,
      }}
      width="100%"
      height="100%"
      className="relative z-0"
    />
  );
};

export default ParticlesComponent;
