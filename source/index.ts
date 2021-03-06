import { Challenge, GameMap, Weapon } from 'types';
import {
  newID,
  generate,
} from 'challenges';
import {
  MAP_LIST,
} from 'data/maps';
import { capsule } from 'storage';

const buttonEl = document.querySelector('#generate');
const outputEl = document.querySelector('#output');
const mapEl = document.querySelector('#map');

let mapPointer = MAP_LIST.findIndex((map: GameMap) => map.name === capsule.get('map'));
if(mapPointer < 0 || mapPointer >= MAP_LIST.length) {
  mapPointer = 0;
}
let map: GameMap = MAP_LIST[mapPointer];
mapEl.textContent = map.name;

const renderWeapon = (weapon: Weapon): string => {
  return `<span class="weapon-ammo-${weapon.ammo} weapon-type-${weapon.type.toLowerCase()} ${weapon.crate ? 'weapon-crate' : ''}">${weapon.name}</span>`;
};

const renderEntry = (challenge: Challenge): string => {
  const id = `<span class="id">#${newID()}:</span>`;
  const map = `<span class="map map-${challenge.map.toLowerCase()}">[${challenge.map}]</span>`;
  const pack = `<span class="pack pack-type-${challenge.pack.className}">${challenge.pack.name} |</span>`;
  const weapons = challenge.weapons.map(renderWeapon).join(', ');
  return `<li class="entry">${map} ${pack} ${weapons}</li>`;
};

buttonEl.addEventListener('click', (e) => {
  e.preventDefault();
  const challenge: Challenge = generate(map);
  outputEl.innerHTML = `${renderEntry(challenge)}${outputEl.innerHTML}`;
});

mapEl.addEventListener('click', (e) => {
  e.preventDefault();
  mapPointer++;
  if(mapPointer >= MAP_LIST.length) {
    mapPointer = 0;
  }
  map = MAP_LIST[mapPointer];
  mapEl.textContent = map.name;
  capsule.set('map', map.name);
});