import {
  newID,
  random,
  stringify,
} from 'challenges';

const button = document.querySelector('#generate');
const output = document.querySelector('#output');

const generateLI = (result) => {
  const id = newID();
  return `<li>#${id}: ${stringify(result)}</li>`;
}

button.addEventListener('click', (e) => {
  e.preventDefault();
  const result = random();
  output.innerHTML = `${generateLI(result)}${output.innerHTML}`;
});