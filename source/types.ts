export type Pack = {
  name: string;
  weapon: Weapon;
};

export type Weapon = {
  name: string;
  crate?: boolean;
};
