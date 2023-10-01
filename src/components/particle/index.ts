import { loadBasic } from 'tsparticles-basic';
import type { Engine } from 'tsparticles-engine';
import { loadEmittersPlugin } from 'tsparticles-plugin-emitters';
import { loadDestroyUpdater } from 'tsparticles-updater-destroy';
import { options, optionsForMobile } from './options';

/**
 *
 * @param engine -
 * @param refresh -
 */
export async function loadFountainPreset(
  engine: Engine,
  refresh = true,
  isMobile: boolean
): Promise<void> {
  await loadBasic(engine, false);
  await loadDestroyUpdater(engine, false);
  await loadEmittersPlugin(engine, false);
  if (isMobile) {
    await engine.addPreset('fountain', optionsForMobile, refresh);
  } else {
    await engine.addPreset('fountain', options, refresh);
  }
}
