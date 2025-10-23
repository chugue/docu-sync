import { Editor } from "@tiptap/react";
import { create } from "zustand";

interface EditorState {
  editorState: Editor | null;
  zoomLevel: number;
  fontSize: number;
  spellCheck: boolean;
  fontColor: string | null;
  fontBackgroundColor: string | null;
  hasZoomLevelPopup: boolean;
  fontColorPalettePopup: boolean;
  fontBackgroundColorPopup: boolean;
  fontFamilyPopup: boolean;

  setEditorState: (editor: Editor) => void;
  setZoomLevel: (zoomLevel: number) => void;
  setFontSize: (fontSize: number) => void;
  setSpellCheck: (spellCheck: boolean) => void;
  setHasZoomLevelPopup: (hasZoomLevelPopup: boolean) => void;
  setFontColor: (fontColor: string) => void;
  setFontBackgroundColor: (fontBackgroundColor: string) => void;
  setFontColorPalettePopup: (fontColorPalettePopup: boolean) => void;
  setFontBackgroundColorPopup: (fontBackgroundColorPopup: boolean) => void;
  setFontFamilyPopup: (fontFamilyPopup: boolean) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  editorState: null,
  zoomLevel: 100,
  fontSize: 16,
  spellCheck: false,
  fontColor: "#000000",
  fontBackgroundColor: "#FFFFFF",
  hasZoomLevelPopup: false,
  fontColorPalettePopup: false,
  fontBackgroundColorPopup: false,
  fontFamilyPopup: false,

  setEditorState: (editorState) => set({ editorState }),
  setZoomLevel: (zoomLevel) => set({ zoomLevel }),
  setFontSize: (fontSize) => set({ fontSize }),
  setSpellCheck: (spellCheck) => set({ spellCheck }),
  setHasZoomLevelPopup: (hasZoomLevelPopup) => set({ hasZoomLevelPopup }),
  setFontColor: (fontColor) => set({ fontColor }),
  setFontBackgroundColor: (fontBackgroundColor) => set({ fontBackgroundColor }),
  setFontColorPalettePopup: (colorPalettePopup) =>
    set({ fontColorPalettePopup: colorPalettePopup }),
  setFontBackgroundColorPopup: (fontBackgroundColorPopup) =>
    set({ fontBackgroundColorPopup }),
  setFontFamilyPopup: (fontFamilyPopup) => set({ fontFamilyPopup }),
}));
