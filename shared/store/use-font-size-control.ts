import { create } from "zustand";

interface FontSizeControlState {
  fontSize: number;
  setFontSize: (fontSize: number) => void;
}

export const useFontSizeControl = create<FontSizeControlState>((set) => ({
  fontSize: 16,
  setFontSize: (fontSize) => set({ fontSize }),
}));
