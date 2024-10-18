import { create } from "zustand";

const useCategoryStore = create((set) => ({
  category: "landscape",
  setCategory: (category) => set({ category }),
}));

export default useCategoryStore;
