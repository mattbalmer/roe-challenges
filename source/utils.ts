import { StringMap, Weapon } from './types';

export const randInt = (low: number, high: number): number => Math.floor(Math.random() * (1 + high - low) + low);

export const randEntry = <T>(list: T[]): T => {
  const i = randInt(0, list.length - 1);
  return list[i];
};

export const randSubset = function <T>(list: T[], min?: number, max?: number) {
  if(arguments.length === 2) {
    max = min;
  }
  if(arguments.length === 1) {
    min = max = randInt(0, list.length - 1);
  }

  const length = randInt(min, max);
  const from = list.slice(0);
  const sub = [];

  for(let i = 0; i < length; i++) {
    const rand = randInt(0, from.length - 1);
    const e = from.splice(rand, 1)[0];
    sub.push(e);
  }

  return sub;
};

export const randValue = <T>(map: StringMap<T>): T => {
  const keys = Object.keys(map);
  const i = randInt(0, keys.length - 1);
  const key = keys[i];
  return map[key];
};

export const randSubmap = function <T>(map: StringMap<T> = {}, min?: number, max?: number) {
  const keys = Object.keys(map);
  if(arguments.length === 2) {
    max = min;
  }
  if(arguments.length === 1) {
    min = max = randInt(0, keys.length - 1);
  }

  const length = Math.min(keys.length, randInt(min, max));
  const from = keys.slice(0);
  const sub = {};

  for(let i = 0; i < length; i++) {
    const rand = randInt(0, from.length - 1);
    const key = from.splice(rand, 1)[0];
    sub[key] = map[key];
  }

  return sub;
};