import { Pack, Weapon } from 'types';

const packFrom = (name: string, weapon: Weapon): Pack => ({ name, weapon });
const weaponFrom = (name: string, crate: boolean = false): Weapon => ({ name, crate });

export const smgs = [
  'MPX',
  'MP5',
  'VECTOR',
];

export const shotguns = [
  'REMINGTON SHOTGUN',
  'ORIGIN',
];

export const pistols = [
  'DEAGLE',
];

export const ars = [
  'M4',
  'LVOAC',
  'AK',
  'GROZA',
  'FAMAS',
  'AUG',
];

export const snipers = [
  'G28',
  'MK12',
  'M200',
  'REMINGTON SNIPER',
  'MSR',
  'MOSIN',
  'VKS',
];

export const packs: Pack[] = [
  packFrom('GLIDER', weaponFrom('GLOCK')),
  packFrom('SKI', weaponFrom('USP')),
  packFrom('CLIMB', weaponFrom('CITORI')),
];