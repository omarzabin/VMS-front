import { atom } from "jotai";

export const isLoadingAtom = atom(true);
export const tokenAtom = atom(null);
export const firstTimeAtom = atom(false);
export const alertLocationAtom = atom({ long: 0, lat: 0 });
export const vehicleOwnerAtom = atom({});
export const deviceIMEIAtom = atom();
export const oilLifeAtom = atom(5000);
