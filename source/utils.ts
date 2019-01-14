export const randInt = (low, high) => Math.round(Math.random() * (high - low) + low);

export const randEntry = (list) => {
  const i = randInt(0, list.length - 1);
  return list[i];
};

export const randSubset = function(list, min, max) {
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
    const rand = randInt(0, from.length - 1)
    const e = from.splice(rand, 1)[0];
    sub.push(e);
  }
  return sub;
};