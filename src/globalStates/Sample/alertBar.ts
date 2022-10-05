import { atom, useRecoilState } from "recoil";
import { RECOIL_KEYS } from "../recoilKeys";

const open = atom<boolean>({
  key: RECOIL_KEYS.SAMPLE,
  default: false,
});

export const sampleIsOpen = {
  useIsOpen: () => useRecoilState(open),
};
