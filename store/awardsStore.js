import { create } from "zustand";

const useAwardsStore = create((set) => ({
  isHover: false,
  idHover: 0,
  setIsHover: (isHover) => set({ isHover }),
  setIdHover: (idHover) => set({ idHover }),
}));

export default useAwardsStore;
