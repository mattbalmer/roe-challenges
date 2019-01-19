import { Challenge, GameMap, Pack, StringMap, Weapon } from 'types';
import { randSubmap, randValue } from 'utils';

let id = 0;

export const newID = () => {
  return ++id;
};

export const generate = (map: GameMap): Challenge => {
  const {
    packs,
    pistols,
    shotguns,
    smgs,
    lmgs,
    ars,
    snipers,
  } = map.data;
  const pack: Pack = randValue(packs);
  const randWeapons: StringMap<Weapon> = randSubmap({
    ...randSubmap(pistols, 0, 1),
    ...randSubmap(shotguns, 1, 2),
    ...randSubmap(smgs, 1, 2),
    ...randSubmap(lmgs, 1, 2),
    ...randSubmap(ars, 1, 2),
    ...randSubmap(snipers, 1, 2),
  }, 2, 4);

  return {
    pack: pack,
    weapons: [pack.weapon, ...Object.values(randWeapons)],
    map: map.name,
  };
};
