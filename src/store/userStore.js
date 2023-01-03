import { atom } from "jotai";

export const isLoadingAtom = atom(true);
export const tokenAtom = atom(null);
export const firstTimeAtom = atom(false);
export const alertLocationAtom = atom({ long: 0, lat: 0 });

export const userAtom = atom(10);
export const vehicleOwner = atom();

export const testAtom = atom(
  get => test(get(userAtom)),
  (get, set, payload) => {
    set(userAtom, payload);
  }
);

function test(value) {
  return value * 2;
}
