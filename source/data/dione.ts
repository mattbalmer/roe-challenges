import { Ammo, Pack, Weapon, WeaponType } from 'types';

const _ = {
  pack: (name: string, className: string, weapon: Weapon): Pack => ({ name, className, weapon }),
  weapon: (name: string, type: WeaponType, ammo: Ammo, crate: boolean = false): Weapon => ({ name, type, ammo, crate }),
};

export const smgs = {
  'MPX': _.weapon('MPX', WeaponType.SMG, Ammo._9),
  'MP5': _.weapon('MP5', WeaponType.SMG, Ammo._9),
  'VECTOR': _.weapon('VECTOR', WeaponType.SMG, Ammo._45),
};

export const shotguns = {
  'REMINGTON 870': _.weapon('REMINGTON 870', WeaponType.SHOTGUN, Ammo._12),
  'ORIGIN': _.weapon('ORIGIN', WeaponType.SHOTGUN, Ammo._12),
};

export const pistols = {
  'DEAGLE': _.weapon('DEAGLE', WeaponType.PISTOL, Ammo._50),
};

export const ars = {
  'M4': _.weapon('M4', WeaponType.AR, Ammo._556),
  'LVOAC': _.weapon('LVOAC', WeaponType.AR, Ammo._556),
  'FAMAS': _.weapon('FAMAS', WeaponType.AR, Ammo._556),
  'AK': _.weapon('AK', WeaponType.AR, Ammo._762),
  'GROZA': _.weapon('GROZA', WeaponType.AR, Ammo._762),
  'AUG': _.weapon('AUG', WeaponType.AR, Ammo._556, true),
};

export const snipers = {
  'G28': _.weapon('G28', WeaponType.SNIPER, Ammo._762),
  'MK12': _.weapon('MK12', WeaponType.SNIPER, Ammo._556),
  'REMINGTON 700': _.weapon('REMINGTON 700', WeaponType.SNIPER, Ammo._556),
  'MOSIN': _.weapon('MOSIN', WeaponType.SNIPER, Ammo._762),
  'M200': _.weapon('M200', WeaponType.SNIPER, Ammo._408, true),
  'VKS': _.weapon('VKS', WeaponType.SNIPER, Ammo._50, true),
};

export const packs = {
  GLIDER: _.pack('GLIDER', 'glider', _.weapon('GLOCK', WeaponType.PISTOL, Ammo._9)),
  SKI: _.pack('SKI', 'ski', _.weapon('USP', WeaponType.PISTOL, Ammo._45)),
  CLIMB: _.pack('CLIMB', 'climb', _.weapon('CITORI', WeaponType.SHOTGUN, Ammo._12)),
};