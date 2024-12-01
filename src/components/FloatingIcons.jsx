import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactLogo from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import figma from '../assets/figma.png';

const FloatingIcons = () => {
  const particlesInit = async (main) => {
    await loadFull(main); // Load tsparticles library
  };

  return (
    <div style={{ position: 'relative', height: '10vh', width: '100%' }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true }, // Keeps particles within the div
          background: { color: 'transparent' },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'bubble' }, // Shrink and fade effect
              resize: true,
            },
            modes: {
              bubble: {
                distance: 100, // Distance to trigger the effect
                size: 5, // Shrink size on hover
                duration: 5, 
                opacity: 0, 
              },
            },
          },
          particles: {
            number: {
              value: 20,
              density: { enable: true, area: 800 },
            },
            shape: {
              type: 'image',
              image: [
                { src: html, width: 20, height: 20 },
                { src: css, width: 20, height: 20 },
                { src: javascript, width: 20, height: 20 },
                { src: reactLogo, width: 20, height: 20 },
                { src: tailwind, width: 20, height: 20 },
                { src: figma, width: 20, height: 20 },
              ],
            },
            opacity: { 
              value: 0.5,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.2,
              },
            },
            size: {
              value: 40,
              random: true,
              anim: { enable: true, speed: 3, size_min: 20 },
            },
            move: {
              enable: true,
              speed: 4,
              direction: 'none',
              random: true,
              straight: false,
              outModes: { default: 'out' },
            },
          },
        }}
      />
    </div>
  );
};

export default FloatingIcons;
