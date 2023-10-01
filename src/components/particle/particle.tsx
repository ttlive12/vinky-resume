import { useCallback } from 'react';
import Particles from 'react-particles';
import { useMediaQuery } from 'react-responsive';
import { tsParticles } from 'tsparticles-engine';
import { loadFountainPreset } from '.';
import { options } from './options';

export default function ParticlesComponet() {
  const isMobile = useMediaQuery({ query: ' (max-device-width: 800px)' });

  const particlesInit = useCallback(async () => {
    await loadFountainPreset(tsParticles, true, isMobile);
  }, []);
  return <Particles init={particlesInit} options={options} />;
}
