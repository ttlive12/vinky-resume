import Particles from 'react-particles';
import { loadFountainPreset } from ".";
import { tsParticles } from "tsparticles-engine";
import { options } from './options';
import { useCallback } from 'react';

export default function ParticlesComponet() {
  const particlesInit = useCallback(async () => { await loadFountainPreset(tsParticles) }, []);
  return (

    <Particles
      init={particlesInit}
      options={options}
    />
  );
}