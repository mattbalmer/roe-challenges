import { Challenge, Weapon } from 'types';
import {
  newID,
  generate,
} from 'challenges';

const buttonEl = document.querySelector('#generate');
const outputEl = document.querySelector('#output');

const renderWeapon = (weapon: Weapon): string => {
  return `<span class="weapon-ammo-${weapon.ammo} weapon-type-${weapon.type.toLowerCase()}">${weapon.name}</span>`;
};

const renderEntry = (challenge: Challenge): string => {
  const id = `<span class="id">#${newID()}:</span>`;
  const pack = `<span class="pack pack-type-${challenge.pack.name.toLowerCase()}"></span>`;
  const weapons = challenge.weapons.map(renderWeapon).join(', ');
  return `<li class="entry">${pack} ${weapons}</li>`;
};

buttonEl.addEventListener('click', (e) => {
  e.preventDefault();
  const challenge: Challenge = generate();
  outputEl.innerHTML = `${renderEntry(challenge)}${outputEl.innerHTML}`;
});