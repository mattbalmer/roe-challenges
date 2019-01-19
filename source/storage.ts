import { Capsule } from 'lib/capsule';
import { MAPS } from 'data/maps';

export interface CapsuleProps {
  map: string,
}

export const capsule = new Capsule(`roe-challenges`, {
  map: MAPS.DIONE.name,
});