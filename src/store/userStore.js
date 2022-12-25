import { atom } from "jotai";

export const isLoadingAtom = atom(true);
export const tokenAtom = atom(null);

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
