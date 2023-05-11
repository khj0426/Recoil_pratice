import { atom } from 'recoil';
import { selector } from 'recoil';

export const countAtom = atom<number>({
  key: 'countState',
  default: 0,
});

export const countSelector = selector({
  key: 'countSelector',
  get: ({ get }) => {
    return get(countAtom);
  },

  set: ({ set }, newState) => {
    set(countAtom, newState);
  },
});
