import { atom, selector } from "recoil";
export const countState = atom ( {
    key: "count",
    default: 0,
  });

export const doubleCountState =
  selector (
  {
    key: "doubleCount",
    get: ({ get }) => {
      let double = get(countState);
      return double * 2;
    },
  });
