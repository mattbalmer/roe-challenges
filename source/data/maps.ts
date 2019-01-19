import * as dione from './dione';
import * as europa from './europa';

export const MAPS = {
  DIONE: {
    name: 'Dione',
    data: dione,
  },
  EUROPA: {
    name: 'Europa',
    data: europa,
  },
};

export const MAP_LIST = [
  MAPS.DIONE,
  MAPS.EUROPA,
];