import { useCallback } from 'react';
import Particles from 'react-particles';
import { tsParticles } from 'tsparticles-engine';
import { loadFountainPreset } from '.';
import { options } from './options';

export default function ParticlesComponet() {
  const particlesInit = useCallback(async () => {
    await loadFountainPreset(tsParticles);
  }, []);
  return <Particles init={particlesInit} options={options} />;
}
