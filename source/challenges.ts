import { randInt, randSubset, randEntry } from 'utils';
import {
    packs,
    starterWeapons,
    pistols,
    shotguns,
    smgs,
    ars,
    snipers,
} from 'data';

let id = 0;

export const newID = () => {
    return ++id;
};

export const random = () => {
    const pack = randEntry(packs);
    const starterWeapon = starterWeapons[pack];
    const randWeapons = randSubset([
      ...randSubset(pistols, 0, 1),
      ...randSubset(shotguns, 1, 2),
      ...randSubset(smgs, 1, 2),
      ...randSubset(ars, 1, 2),
      ...randSubset(snipers, 1, 2),
    ], 2, 4);
    const weapons = [starterWeapon, ...randWeapons];
    return { pack, weapons };
};
  
export const stringify = (output) => `${output.pack} pack, using only: ${output.weapons.join(', ')}`;

