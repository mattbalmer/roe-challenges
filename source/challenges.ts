import { Challenge, Pack, StringMap, Weapon } from 'types';
import { randSubmap, randValue } from 'utils';
import {
  packs,
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

export const generate = (): Challenge => {
  const pack: Pack = randValue(packs);
  const randWeapons: StringMap<Weapon> = randSubmap({
    ...randSubmap(pistols, 0, 1),
    ...randSubmap(shotguns, 1, 2),
    ...randSubmap(smgs, 1, 2),
    ...randSubmap(ars, 1, 2),
    ...randSubmap(snipers, 1, 2),
  }, 2, 4);

  return {
    pack: pack,
    weapons: [pack.weapon, ...Object.values(randWeapons)],
  };
};
