import { atom, useRecoilState } from "recoil";
import { RECOIL_KEYS } from "../recoilKeys";

const count = atom<number>({
  key: RECOIL_KEYS.SAMPLE,
  default: 0,
});

export const sampleCount = {
  useIncreaceCount: () => {
    const [value, setValue] = useRecoilState(count);

    return [value, () => setValue(c => c + 1)] as const;
  }
};
