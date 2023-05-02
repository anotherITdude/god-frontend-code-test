import { create } from "zustand";

interface FilterStore {
  currentFilter: string | "";
  updateFilter: (id: string) => void;
}

const useFilter = create<FilterStore>((set) => ({
  currentFilter: "",
  updateFilter: (id: string) => set(() => ({ currentFilter: id })),
}));

export default useFilter;
