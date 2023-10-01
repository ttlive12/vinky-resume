import { loadBasic } from 'tsparticles-basic';
import type { Engine } from 'tsparticles-engine';
import { loadEmittersPlugin } from 'tsparticles-plugin-emitters';
import { loadDestroyUpdater } from 'tsparticles-updater-destroy';
import { options } from './options';

/**
 *
 * @param engine -
 * @param refresh -
 */
export async function loadFountainPreset(
  engine: Engine,
  refresh = true,
): Promise<void> {
  await loadBasic(engine, false);
  await loadDestroyUpdater(engine, false);
  await loadEmittersPlugin(engine, false);

  await engine.addPreset('fountain', options, refresh);
}
